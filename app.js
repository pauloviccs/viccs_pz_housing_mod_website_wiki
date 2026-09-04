/**
 * Housing Care System (Living House) - Front-End Logic
 * Single Page Navigation, Instant i18n Engine, Database Search & Live HUD Simulator
 * v1.7.1 - Tarkov-Style Item Inspection Modal & Homemaking Action Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
    // Current Language State
    let currentLang = localStorage.getItem('hcs_lang') || 'pt';
    let currentCategoryFilter = 'all';

    // DOM Elements
    const navButtons = document.querySelectorAll('.nav-btn, [data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    const btnLangPt = document.getElementById('btnLangPt');
    const btnLangEn = document.getElementById('btnLangEn');

    // Database Elements
    const dbSearchInput = document.getElementById('dbSearch');
    const dbCategoryFilters = document.getElementById('dbCategoryFilters');
    const itemsTableBody = document.getElementById('itemsTableBody');

    // Modal Elements
    const itemInspectionModal = document.getElementById('itemInspectionModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    // Action Calculator Elements
    const calcActionSelect = document.getElementById('calcActionSelect');

    // Sandbox Elements
    const sbSearchInput = document.getElementById('sbSearch');
    const sandboxTableBody = document.getElementById('sandboxTableBody');



    /* =========================================================================
       1. NAVIGATION & SPA ROUTING
       ========================================================================= */
    function switchTab(targetTabId) {
        if (!targetTabId) return;

        tabContents.forEach(tab => {
            if (tab.id === targetTabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        navButtons.forEach(btn => {
            if (btn.getAttribute('data-tab') === targetTabId) {
                btn.classList.add('active');
            } else if (btn.classList.contains('nav-btn')) {
                btn.classList.remove('active');
            }
        });

        window.location.hash = targetTabId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetTab = btn.getAttribute('data-tab');
            if (targetTab) {
                e.preventDefault();
                switchTab(targetTab);
            }
        });
    });

    if (window.location.hash) {
        const hashTab = window.location.hash.replace('#', '');
        if (document.getElementById(hashTab)) {
            switchTab(hashTab);
        }
    }

    /* =========================================================================
       2. BILINGUAL i18n ENGINE
       ========================================================================= */
    function setLanguage(lang) {
        if (!TRANSLATIONS[lang]) return;
        currentLang = lang;
        localStorage.setItem('hcs_lang', lang);

        if (lang === 'pt') {
            btnLangPt.classList.add('active');
            btnLangEn.classList.remove('active');
            document.documentElement.lang = 'pt-BR';
        } else {
            btnLangPt.classList.remove('active');
            btnLangEn.classList.add('active');
            document.documentElement.lang = 'en';
        }

        const dict = TRANSLATIONS[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attrDef = el.getAttribute('data-i18n-attr');
            const [attrName, key] = attrDef.split(':');
            if (dict[key]) {
                el.setAttribute(attrName, dict[key]);
            }
        });

        renderDatabaseTable();
        renderSandboxTable();
        initActionCalculator();
    }

    btnLangPt.addEventListener('click', () => setLanguage('pt'));
    btnLangEn.addEventListener('click', () => setLanguage('en'));

    /* =========================================================================
       3. ITEM DATABASE RENDER, FILTER & INSPECTION MODAL (TARKOV STYLE)
       ========================================================================= */
    function renderDatabaseTable() {
        const searchTerm = (dbSearchInput ? dbSearchInput.value : '').toLowerCase().trim();
        itemsTableBody.innerHTML = '';

        const filteredItems = ITEM_DATABASE.filter(item => {
            const matchesCategory = currentCategoryFilter === 'all' || item.category === currentCategoryFilter;
            const itemName = item.name[currentLang].toLowerCase();
            const itemCode = (item.id || '').toLowerCase();
            const itemBonus = item.bonus[currentLang].toLowerCase();
            const itemReq = item.req[currentLang].toLowerCase();
            const matchesSearch = itemName.includes(searchTerm) || itemCode.includes(searchTerm) || itemBonus.includes(searchTerm) || itemReq.includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        if (filteredItems.length === 0) {
            const emptyMsg = currentLang === 'pt' ? 'Nenhum item ou mobília encontrada.' : 'No items match the selected criteria.';
            itemsTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-dim); padding: 2.5rem;">${emptyMsg}</td></tr>`;
            return;
        }

        filteredItems.forEach(item => {
            const tr = document.createElement('tr');
            tr.title = currentLang === 'pt' ? 'Clique para Inspecionar (Tarkov UI)' : 'Click to Inspect (Tarkov UI)';
            
            let badgeClass = 'badge-furniture';
            let categoryLabel = item.category;
            if (item.category === 'cleaning') {
                badgeClass = 'badge-cleaning';
                categoryLabel = currentLang === 'pt' ? 'Limpeza & Dental' : 'Hygiene & Dental';
            } else if (item.category === 'decor') {
                badgeClass = 'badge-decor';
                categoryLabel = currentLang === 'pt' ? 'Decoração 3D' : '3D Clutter & Decor';
            } else if (item.category === 'thermal') {
                badgeClass = 'badge-thermal';
                categoryLabel = currentLang === 'pt' ? 'Sazonal & Calor' : 'Thermal & Weather';
            } else {
                categoryLabel = currentLang === 'pt' ? 'Móveis & Camas' : 'Furniture & Beds';
            }

            tr.innerHTML = `
                <td>
                    <strong>${item.name[currentLang]}</strong>
                    <div class="mono" style="font-size: 0.72rem; color: var(--text-dim); margin-top: 0.15rem;">${item.id}</div>
                </td>
                <td><span class="item-badge ${badgeClass}">${categoryLabel}</span></td>
                <td class="mono ${item.score.includes('-') ? 'text-amber' : 'text-cyan'}">${item.score}</td>
                <td>${item.bonus[currentLang]}</td>
                <td style="color: var(--text-muted); font-size: 0.8rem;">${item.req[currentLang]}</td>
            `;

            tr.addEventListener('click', () => openItemInspectionModal(item.id));
            itemsTableBody.appendChild(tr);
        });
    }

    function openItemInspectionModal(itemId) {
        const item = ITEM_DATABASE.find(i => i.id === itemId);
        if (!item || !itemInspectionModal) return;

        document.getElementById('modalItemTitle').textContent = item.name[currentLang];
        document.getElementById('modalItemCode').textContent = item.id;
        document.getElementById('modalItemCategory').textContent = item.category.toUpperCase();
        document.getElementById('modalItemWeight').textContent = item.weight || '0.5 kg';
        document.getElementById('modalItemScore').textContent = item.score;
        document.getElementById('modalItemDiminishing').textContent = '1º=100% | 2º=60% | 3º=35% | 5º+=5%';

        const tacticalNotes = item.tacticalNotes ? item.tacticalNotes[currentLang] : item.bonus[currentLang];
        document.getElementById('modalItemNotes').textContent = tacticalNotes;

        itemInspectionModal.classList.add('active');
    }

    function closeItemInspectionModal() {
        if (itemInspectionModal) {
            itemInspectionModal.classList.remove('active');
        }
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeItemInspectionModal);
    }

    if (itemInspectionModal) {
        itemInspectionModal.addEventListener('click', (e) => {
            if (e.target === itemInspectionModal) {
                closeItemInspectionModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && itemInspectionModal && itemInspectionModal.classList.contains('active')) {
            closeItemInspectionModal();
        }
    });

    if (dbSearchInput) {
        dbSearchInput.addEventListener('input', renderDatabaseTable);
    }

    if (dbCategoryFilters) {
        dbCategoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                dbCategoryFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategoryFilter = btn.getAttribute('data-category');
                renderDatabaseTable();
            });
        });
    }

    /* =========================================================================
       4. ACTION CALCULATOR
       ========================================================================= */
    function initActionCalculator() {
        if (!calcActionSelect || typeof CRAFTING_ACTIONS === 'undefined') return;

        calcActionSelect.innerHTML = '';
        CRAFTING_ACTIONS.forEach(act => {
            const opt = document.createElement('option');
            opt.value = act.id;
            opt.textContent = act.name[currentLang];
            calcActionSelect.appendChild(opt);
        });

        calcActionSelect.removeEventListener('change', updateActionCalculator);
        calcActionSelect.addEventListener('change', updateActionCalculator);
        updateActionCalculator();
    }

    function updateActionCalculator() {
        if (!calcActionSelect || typeof CRAFTING_ACTIONS === 'undefined') return;

        const selectedId = calcActionSelect.value;
        const act = CRAFTING_ACTIONS.find(a => a.id === selectedId) || CRAFTING_ACTIONS[0];
        if (!act) return;

        const resCategory = document.getElementById('calcResCategory');
        const resTools = document.getElementById('calcResTools');
        const resDuration = document.getElementById('calcResDuration');
        const resCooldown = document.getElementById('calcResCooldown');
        const resEffects = document.getElementById('calcResEffects');

        if (resCategory) resCategory.textContent = act.category;
        if (resTools) resTools.textContent = act.tools[currentLang];
        if (resDuration) resDuration.textContent = act.duration;
        if (resCooldown) resCooldown.textContent = act.cooldown;
        if (resEffects) resEffects.textContent = act.rewards[currentLang];
    }

    /* =========================================================================
       5. SANDBOX OPTIONS RENDER & FILTER
       ========================================================================= */
    function renderSandboxTable() {
        const searchTerm = (sbSearchInput ? sbSearchInput.value : '').toLowerCase().trim();
        sandboxTableBody.innerHTML = '';

        const filteredOptions = SANDBOX_OPTIONS.filter(opt => {
            const name = opt.name.toLowerCase();
            const impact = opt.impact[currentLang].toLowerCase();
            return name.includes(searchTerm) || impact.includes(searchTerm);
        });

        if (filteredOptions.length === 0) {
            const emptyMsg = currentLang === 'pt' ? 'Nenhuma opção de sandbox encontrada.' : 'No sandbox options found.';
            sandboxTableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-dim); padding: 2rem;">${emptyMsg}</td></tr>`;
            return;
        }

        filteredOptions.forEach(opt => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><code class="mono text-cyan">${opt.name}</code></td>
                <td><span class="mono" style="color: var(--text-dim); font-size: 0.8rem;">${opt.type}</span></td>
                <td><span class="mono text-amber">${opt.default}</span></td>
                <td>${opt.impact[currentLang]}</td>
            `;
            sandboxTableBody.appendChild(tr);
        });
    }

    if (sbSearchInput) {
        sbSearchInput.addEventListener('input', renderSandboxTable);
    }

    /* =========================================================================
       6. INTERACTIVE ROOM BLUEPRINT & DECOR SANDBOX
       ========================================================================= */
    function initBlueprintSandbox() {
        const toggleCards = document.querySelectorAll('.bp-toggle-card');
        const bpTotalScore = document.getElementById('bpTotalScore');
        const bpScoreBar = document.getElementById('bpScoreBar');
        const bpTierBadge = document.getElementById('bpTierBadge');
        const bpMoodlePreview = document.getElementById('bpMoodlePreview');

        if (!toggleCards.length || !bpTotalScore) return;

        function calculateBlueprint() {
            let baseScore = 0;
            let furnitureScore = 0;
            let lightScore = 0;
            let clutterScore = 0;
            let squalorPenalty = 0;

            toggleCards.forEach(card => {
                if (!card.classList.contains('active')) return;
                const cat = card.getAttribute('data-cat');
                const pts = parseInt(card.getAttribute('data-pts'), 10) || 0;

                if (cat === 'base') baseScore += pts;
                else if (cat === 'furn') furnitureScore += pts;
                else if (cat === 'light') lightScore += pts;
                else if (cat === 'clutter') clutterScore += pts;
                else if (cat === 'squalor') squalorPenalty += pts; // Valor negativo
            });

            // Aplica tetos de categoria v1.7.1
            furnitureScore = Math.min(40, furnitureScore);
            lightScore = Math.min(10, lightScore);
            clutterScore = Math.min(25, clutterScore);

            let total = baseScore + furnitureScore + lightScore + clutterScore + squalorPenalty;
            total = Math.max(0, Math.min(100, total));

            bpTotalScore.textContent = total;
            bpScoreBar.style.width = `${total}%`;

            // Tier evaluation
            let tierName = '';
            let tierClass = '';
            let moodleHtml = '';

            if (total < 20) {
                tierName = currentLang === 'pt' ? 'Tier 0: Inóspito / Galinheiro' : 'Tier 0: Inhospitable';
                tierClass = 'tier-0';
                moodleHtml = currentLang === 'pt' ? '<i class="fa-solid fa-ban"></i> Sem Bônus' : '<i class="fa-solid fa-ban"></i> No Buff';
            } else if (total < 40) {
                tierName = currentLang === 'pt' ? 'Tier 1: Aconchegante' : 'Tier 1: Cozy';
                tierClass = 'tier-1';
                moodleHtml = currentLang === 'pt' ? '<i class="fa-solid fa-house-chimney"></i> Lar Doce Lar' : '<i class="fa-solid fa-house-chimney"></i> Home Sweet Home';
            } else if (total < 60) {
                tierName = currentLang === 'pt' ? 'Tier 2: Confortável' : 'Tier 2: Comfortable';
                tierClass = 'tier-2';
                moodleHtml = currentLang === 'pt' ? '<i class="fa-solid fa-couch"></i> Conforto Revigorante' : '<i class="fa-solid fa-couch"></i> Restful Comfort';
            } else if (total < 80) {
                tierName = currentLang === 'pt' ? 'Tier 3: Muito Confortável' : 'Tier 3: Very Comfortable';
                tierClass = 'tier-3';
                moodleHtml = currentLang === 'pt' ? '<i class="fa-solid fa-shield-halved"></i> Serenidade Absoluta' : '<i class="fa-solid fa-shield-halved"></i> Absolute Serenity';
            } else {
                tierName = currentLang === 'pt' ? 'Tier 4: Santuário Perfeito' : 'Tier 4: Perfect Sanctuary';
                tierClass = 'tier-4';
                moodleHtml = currentLang === 'pt' ? '<i class="fa-solid fa-certificate"></i> Santuário Inviolável' : '<i class="fa-solid fa-certificate"></i> Inviolable Sanctuary';
            }

            bpTierBadge.className = `bp-tier-badge ${tierClass}`;
            bpTierBadge.textContent = tierName;

            if (bpMoodlePreview) {
                bpMoodlePreview.innerHTML = `<span class="moodle-tag moodle-positive">${moodleHtml}</span>`;
                if (squalorPenalty < 0) {
                    const squalorText = currentLang === 'pt' ? '<i class="fa-solid fa-biohazard"></i> Moscas & Sujeira' : '<i class="fa-solid fa-biohazard"></i> Flies & Filth';
                    bpMoodlePreview.innerHTML += `<span class="moodle-tag moodle-negative">${squalorText}</span>`;
                }
            }
        }

        toggleCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('active');
                calculateBlueprint();
            });
        });

        calculateBlueprint();
    }

    /* =========================================================================
       8. TACTICAL STEPPER / SURVIVOR JOURNEY
       ========================================================================= */
    function initTacticalStepper() {
        const stepButtons = document.querySelectorAll('.stepper-btn');
        const stepPanes = document.querySelectorAll('.stepper-pane');

        if (!stepButtons.length) return;

        stepButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const step = btn.getAttribute('data-step');

                stepButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                stepPanes.forEach(pane => {
                    if (pane.id === `paneStep${step}`) {
                        pane.classList.add('active');
                    } else {
                        pane.classList.remove('active');
                    }
                });
            });
        });
    }

    // Initial Execution
    initBlueprintSandbox();
    initTacticalStepper();
    setLanguage(currentLang);
});
