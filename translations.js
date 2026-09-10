/**
 * PZ: Cozy Living (antigo Housing Care System) - Official Documentation & Wiki
 * Bilingual Translation Matrix (Português [BR] / English [EN])
 * Alinhado com a versão v1.6.0 (B42) & UI Tática Escape From Tarkov
 */

const TRANSLATIONS = {
    pt: {
        // Site Meta & Nav
        siteTitle: "PZ: Cozy Living | Guia Tático, Wiki & GDD Oficial",
        siteTagline: "Sistema Hardcore de Conforto, Posse de Residência, Higiene e Degradação para Project Zomboid Build 42",
        navWiki: "Wiki",
        navGuide: "Guia How-To",
        navGdd: "GDD & Regras",
        navDatabase: "Itens & Mobílias",
        navCalculator: "Calculadora",
        navSandbox: "Sandbox",
        navLanguage: "Idioma",

        // Hero Section
        heroBadge: "SISTEMA TÁTICO ATIVO // PZ: COZY LIVING B42 v1.6.7",
        heroTitle: "Sua base não é um depósito de caixotes. É a sua fortaleza mental.",
        heroSubtitle: "O mod PZ: Cozy Living transforma seu refúgio num ecossistema vivo e tático. Posse de residência, durabilidade de higiene, conforto rebalanceado, infraestrutura elétrica/hídrica e clima sazonal decidem quem sobrevive e quem sucumbe à loucura.",
        heroBtnExplore: "Manual do Sobrevivente",
        heroStat1Label: "Sistemas Integrados",
        heroStat1Val: "20 Subsistemas",
        heroStat2Label: "Itens & Mobílias Mapeadas",
        heroStat2Val: "100+ Objetos",
        heroStat3Label: "Moodles & Buffs Reativos",
        heroStat3Val: "19 Status & Moodles",

        // Features Highlights
        featComfortTitle: "Conforto & Reivindicação do Lar",
        featComfortDesc: "Casas neutras não concedem bônus. Reivindique seu lar com botão direito (SP) ou safehouse oficial (MP) para desbloquear a aclimatação e o scanner de cômodos.",
        featSqualorTitle: "Vetor de Squalor & Insalubridade",
        featSqualorDesc: "Sangue zumbi nos pisos, lixo acumulado, comida estragada e peças sanitárias imundas atraem moscas, náusea e anulam completamente os buffs de conforto.",
        featHygieneTitle: "Higiene Bucal & Fisiologia Completa",
        featHygieneDesc: "Vasos sanitários imersivos, ciclo inteligente de papel higiênico com raio de 1 tile e escovação de dentes protegem sua sanidade mental.",
        featThermalsTitle: "Sazonalidade & Isolamento Tático",
        featThermalsDesc: "Sobreviva ao inverno severo de Kentucky mantendo lareiras acesas (+8 pts) e tapetes isolantes (+6 pts). No verão, use cortinas e ventiladores (+4 pts).",

        // Comparison Section
        compTitle: "Comparativo Operacional: Nem Toda Casa é o Seu Lar",
        compSub: "Entenda por que saquear a casa do vizinho não traz paz de espírito no PZ: Cozy Living.",

        // Section Headers
        sectWikiTitle: "Enciclopédia Técnica & Módulos Operacionais",
        sectWikiSub: "Mapeamento completo dos subsistemas do mod, lógica de posse, mitigação de bugs e diretrizes táticas.",
        sectGuideTitle: "Manual de Operações & Guia de Sistemas (How-To Guide)",
        sectGuideSub: "Aprenda como cada sistema funciona em detalhes, instruções passo a passo in-game, requisitos e impactos de negligência.",
        sectGddTitle: "Game Design Document (GDD) & Fórmulas",
        sectGddSub: "A matemática de cálculo, matriz de retornos decrescentes e arquitetura não-invasiva na JVM do PZ.",
        sectDbTitle: "Banco de Dados de Itens, Mobílias & Clutter 3D",
        sectDbSub: "Valores pontuais reais de conforto, durabilidade, IDs de script e inspeção técnica no estilo Tarkov.",
        sectCalcTitle: "Calculadora de Ações & Homemaking",
        sectCalcSub: "Calcule os requisitos de insumos, tempo de execução, cooldowns e ganhos de moral para cada tarefa doméstica.",
        sectSandboxTitle: "Configurações de Sandbox do Servidor",
        sectSandboxSub: "Tabela completa com as variáveis sandbox oficiais e o impacto real de cada configuração.",

        // Guide Toolbar & Categorization
        guideFilterAll: "Todos os Sistemas",
        guideFilterHygiene: "Higiene & Fisiologia",
        guideFilterCleaning: "Faxina & Descontaminação",
        guideFilterLeisure: "Lazer & Rotinas",
        guideFilterComfort: "Conforto & Clima",
        guideFilterInterface: "Interface & Atalhos",
        guideSearchPlaceholder: "Buscar sistema, mecânica ou ação (ex: vaso, papel, lareira, K, chão)...",
        guideBtnExpandAll: "Expandir Todos",
        guideBtnCollapseAll: "Recolher Todos",
        guideCounterPrefix: "Sistemas Mapeados:",


        // Wiki Modules
        modOwnershipTitle: "1. Protocolo de Posse de Residência (Nem Toda Casa é o Seu Lar)",
        modOwnershipP1: "Em versões anteriores ou no jogo vanilla, saquear a casa do vizinho concedia relaxamento imediato simplesmente porque havia uma cama bonita. No v1.7.1, **casas não reivindicadas aparecem como 'IMOVEL NEUTRO'** — a barra de conforto fica travada em 0 pts e a aclimatação é suspensa.",
        modOwnershipP2: "Para transformar uma casa no seu porto seguro no **Single Player**, clique com o botão direito no chão interno e selecione `Living House: Estabelecer Residencia como Meu Lar`. No **Multiplayer**, o sistema integra-se às Safehouses oficiais onde você é proprietário ou morador registrado. Ao transitar pelo perímetro, você recebe notificações Halo elegantes avisando sua entrada ou saída.",

        modDentalTitle: "2. Higiene Bucal & Durabilidade da Pasta de Dente",
        modDentalP1: "A escovação de dentes é uma micro-rotina fundamental para a saúde mental no apocalipse. Ao aproximar-se de uma pia sanitária com água e tendo uma Escova de Dentes (`Base.Toothbrush`) e Pasta Dental (`Base.Toothpaste`), o menu de contexto oferece a ação de escovação.",
        modDentalP2: "Cada escovação consome exatamente 5% do tubo (garantindo **20 usos por tubo** completo). O item possui uma barra de durabilidade nativa B42 verde visível no inventário. O ato concede **-15 de Estresse**, **-10 de Tédio** e o buff *Hálito Fresco* por 4 horas in-game.",

        modEconomyTitle: "3. Nova Economia de Pontuação Nerfada (v1.7.1)",
        modEconomyP1: "Acabou a 'inflação do barraco'. Antigamente, uma casa vazia limpa começava com 25 pontos garantidos, e três móveis simples já batiam o Tier 4 (Santuário). Agora, a pontuação foi cortada pela metade e os tetos foram balanceados:",
        modEconomyP2: "• Piso Limpo Base: reduzido de 25 para **10 pts** (casa vazia = Tier 0).\n• Cama de Luxo: **10 pts** | Sofá: **7 pts** | Mesa: **4 pts** | Cadeira: **3 pts** | Armário: **4 pts**.\n• Itens 3D e Clutter (Latas, Canecas, Livros): **0.1 a 0.6 pts** com teto de categoria ampliado para **25 pts**.\n• Curva Anti-Spam: 1º item = 100%, 2º = 60%, 3º = 35%, 4º = 15%, 5º+ = 5%.",

        modDashboardsTitle: "4. Dashboards Integrados: Infraestrutura [J] e Inspeção [K]",
        modDashboardsP1: "Pressione **[J]** para abrir o Dashboard da Base: ele monitora o combustível e estado de conservação do Gerador Elétrico, os litros de água potável em barris de chuva conectados e permite **renomear a sua base** através de uma janela modal nativa.",
        modDashboardsP2: "Pressione **[K]** para abrir a Inspeção do Cômodo: veja o detalhamento ponto a ponto de mobílias, eletrônicos e decorações presentes no quarto. A janela conta com quebra automática de texto e auto-ajuste de altura dinâmica.",

        // Guide / How to Use
        guideDay1Title: "Fase 1: O Primeiro Dia - Reconhecimento & Posse",
        guideDay1P1: "Ao encontrar uma casa em bom estado estrutural, estabeleça as bases de segurança antes de descansar:",
        guideDay1Step1: "Limpe os zumbis e clique com o botão direito no interior: selecione **Estabelecer Residencia como Meu Lar**.",
        guideDay1Step2: "Equipe Vassoura/Esfregão com Balde e Água Sanitária: elimine manchas de sangue para zerar o Squalor.",
        guideDay1Step3: "Remova cadáveres em decomposição para além de 15 tiles da casa ou enterre-os com uma pá.",

        guideDay2Title: "Fase 2: Quarto Principal & Isolamento Tático",
        guideDay2P1: "O quarto de dormir é a sua unidade de tratamento intensivo de estresse e fadiga:",
        guideDay2Step1: "Instale cortinas em todas as janelas e mantenha-as fechadas (garante sombra no verão e isolamento no inverno).",
        guideDay2Step2: "Posicione uma cama de casal confortável, um tapete acolchoado no piso e uma fonte de luz funcional.",
        guideDay2Step3: "Adicione diversidade estética: 1 estante de livros, 1 quadro na parede e itens 3D organizados sobre a mesa.",

        guideDay3Title: "Fase 3: Higiene, Água Encanada & Rotina Ativa",
        guideDay3P1: "Mantenha o status mental blindado através de hábitos constantes:",
        guideDay3Step1: "Conecte barris de chuva à pia com chave inglesa para garantir água encanada potável mesmo após o corte da água.",
        guideDay3Step2: "Escove os dentes pela manhã e tome banho com sabonete para renovar o bônus 'Mente Sã' e 'Hálito Fresco'.",
        guideDay3Step3: "Cozinhar refeições caseiras, ler livros ou tocar instrumentos musicais concede o bônus de Tarefas Domésticas (+15% a +30% de duração do Lar).",

        // GDD
        gddVisionTitle: "Filosofia de Design: Flow Tático & Apego ao Lar",
        gddVisionText: "O Housing Care System foi desenhado sob uma premissa clara: a sobrevivência no apocalipse não é apenas física, é psicológica. Transformamos itens decorativos, produtos de limpeza e eletrodomésticos esquecidos em recursos de alto valor estratégico.",

        gddMathTitle: "Equações Matemáticas de Pontuação (v1.7.1)",
        gddMath1Title: "Conforto Total do Cômodo (0 a 100 pts)",
        gddMath1Formula: "Score = CleanBase(10) + Min(40, Furniture) + Min(5, Craft) + Min(10, Light) + Min(25, Decor3D) + Clima",
        gddMath1Desc: "Tier 1: 20 pts (Aconchegante) | Tier 2: 40 pts (Confortável) | Tier 3: 60 pts (Muito Confortável) | Tier 4: 80+ pts (Santuário Perfeito).",
        gddMath2Title: "Penalidade e Insalubridade (Squalor Global)",
        gddMath2Formula: "Squalor = (Sangue * 0.40) + (Corpos * 0.30) + (ComidaPodre * 0.20) + (Entulho * 0.10)",
        gddMath2Desc: "Se o Squalor ultrapassar 15%, o conforto é reduzido em 60% do valor de sujeira. Se atingir 50%, anula 100% do conforto.",

        // Database
        dbSearchPlaceholder: "Buscar por nome, código Base.Item ou bônus...",
        dbFilterAll: "Todos os Objetos",
        dbFilterFurniture: "Móveis & Camas",
        dbFilterCleaning: "Limpeza & Dental",
        dbFilterDecor: "Decoração & Clutter 3D",
        dbFilterThermal: "Sazonalidade & Calor",
        colItemName: "Objeto / Item",
        colCategory: "Categoria",
        colScore: "Pontuação Rebalanceada",
        colBonus: "Efeito Operacional",
        colRequirements: "Requisitos / Como Usar",

        // Modal
        modalClose: "Fechar [ESC]",
        modalTitle: "INSPEÇÃO TÁTICA DE ITEM // CLUTTER & INFRAESTRUTURA",
        modalCodeId: "ID de Script:",
        modalCategory: "Classificação:",
        modalWeight: "Peso Estimado:",
        modalScore: "Pontuação Base:",
        modalDiminishing: "Impacto por Duplicatas:",
        modalTacticalNotes: "Dossiê Tático & Orientações de Uso:",

        // Action Calculator
        calcActionSelect: "Selecione a Ação / Tarefa Doméstica:",
        calcSkillLevel: "Nível de Perícia Relevante (Carpintaria / Culinária / Cuidados):",
        calcInsumosTitle: "Insumos & Ferramentas Necessárias",
        calcDurationTitle: "Tempo de Execução Estimado",
        calcCooldownTitle: "Tempo de Recarga Anti-Spam",
        calcEffectsTitle: "Bônus Concedidos no Personagem",

        // Sandbox Table
        sbSearchPlaceholder: "Filtrar opção sandbox...",
        colSbVariable: "Identificador Sandbox",
        colSbType: "Tipo",
        colSbDefault: "Padrão",
        tipTitle: "Regra de Sobrevivência Tática",
        tip1: "No inverno congelante (<=5°C), não dormir com lareira ou aquecedor ativo causa debuff de -10 pts de conforto e hipotermia.",
        tip2: "Pasta de Dente possui durabilidade oficial B42. Não desperdice escovando sem ter água na pia sanitária.",
        tip3: "Pular janelas trancadas foi 100% blindado contra falhas na JVM no v1.7.1, mas quebrar janelas desfaz o isolamento térmico!",

        footerCredits: "PZ: Cozy Living (antigo Housing Care System) // Build 42 Ready // Desenvolvido com Engenharia de Contexto",
        footerRights: "Wiki Oficial e Especificação de Game Design."
    },

    en: {
        // Site Meta & Nav
        siteTitle: "PZ: Cozy Living | Official Tactical Guide, Wiki & GDD",
        siteTagline: "Hardcore Living Comfort, Base Ownership, Hygiene and Squalor Engine for Project Zomboid Build 42",
        navWiki: "Wiki",
        navGuide: "How-To Guide",
        navGdd: "GDD & Rules",
        navDatabase: "Items & Clutter",
        navCalculator: "Calculator",
        navSandbox: "Sandbox",
        navLanguage: "Language",

        // Hero Section
        heroBadge: "TACTICAL ENGINE ACTIVE // PZ: COZY LIVING B42 v1.6.7",
        heroTitle: "Your safehouse isn't a crate graveyard. It's your psychological fortress.",
        heroSubtitle: "PZ: Cozy Living transforms your refuge into a living tactical ecosystem. Base ownership, hygiene durability, rebalanced comfort scores, generator/water infrastructure and seasonal weather dictate who survives and who collapses.",
        heroBtnExplore: "Survivor Field Manual",
        heroStat1Label: "Integrated Modules",
        heroStat1Val: "20 Subsystems",
        heroStat2Label: "Cataloged Items & Tiles",
        heroStat2Val: "100+ Objects",
        heroStat3Label: "Reactive Moodles & Buffs",
        heroStat3Val: "19 Statuses & Moodles",

        // Features Highlights
        featComfortTitle: "Comfort & Refuge Claiming",
        featComfortDesc: "Neutral buildings grant zero buffs. Claim your home via right-click (SP) or official safehouse (MP) to unlock shelter acclimatization and room telemetry.",
        featSqualorTitle: "Squalor & Filth Vectors",
        featSqualorDesc: "Zombie blood stains, loose debris, rotten food on countertops and filthy bathroom fixtures emit nausea, attract flies and completely cancel comfort bonuses.",
        featHygieneTitle: "Oral Hygiene & Complete Physiology",
        featHygieneDesc: "Immersive sit-down toilets, intelligent 1-tile toilet paper detection, and tooth brushing safeguard your mental composure.",
        featThermalsTitle: "Tactical Seasonality & Insulation",
        featThermalsDesc: "Survive Kentucky's sub-zero winter by maintaining lit fireplaces (+8 pts) and insulating floor rugs (+6 pts). In summer, leverage curtains and fans (+4 pts).",

        // Comparison Section
        compTitle: "Operational Comparison: Not Every House Is Your Home",
        compSub: "Understand why looting a neighbor's house provides zero comfort in PZ: Cozy Living.",

        // Section Headers
        sectWikiTitle: "Technical Encyclopedia & Operational Modules",
        sectWikiSub: "Complete breakdown of mod subsystems, ownership governance, bug mitigations, and tactical guidelines.",
        sectGuideTitle: "Field Operations Manual & How-To Guide",
        sectGuideSub: "Learn how every single system works in detail: in-game step-by-step instructions, requirements and neglect penalties.",
        sectGddTitle: "Game Design Document (GDD) & Formulas",
        sectGddSub: "Mathematical formulas, diminishing returns curve, and non-invasive JVM architecture.",
        sectDbTitle: "Item, Furniture & 3D Clutter Database",
        sectDbSub: "Actual rebalanced score values, item durability, code IDs, and Tarkov-style tactical inspection cards.",
        sectCalcTitle: "Homemaking & Action Calculator",
        sectCalcSub: "Calculate required tools, execution time, anti-spam cooldowns and morale rewards for each homemaking chore.",
        sectSandboxTitle: "Server & Sandbox Settings",
        sectSandboxSub: "Full table featuring official sandbox variables and their real in-game impact.",

        // Guide Toolbar & Categorization
        guideFilterAll: "All Systems",
        guideFilterHygiene: "Hygiene & Physiology",
        guideFilterCleaning: "Cleaning & Decontamination",
        guideFilterLeisure: "Leisure & Daily Routines",
        guideFilterComfort: "Comfort & Climate",
        guideFilterInterface: "UI & Keybinds",
        guideSearchPlaceholder: "Search system, action or mechanic (e.g., toilet, paper, fireplace, K, floor)...",
        guideBtnExpandAll: "Expand All",
        guideBtnCollapseAll: "Collapse All",
        guideCounterPrefix: "Mapped Systems:",

        // Wiki Modules
        modOwnershipTitle: "1. Base Ownership Protocol (Not Every House Is Your Home)",
        modOwnershipP1: "In vanilla or unmodded setups, looting a neighbor's house granted instant psychological comfort just because of a plush armchair. In v1.6.0, **unclaimed houses are designated as 'NEUTRAL HOUSE'** — comfort score remains pinned at 0 pts and acclimatization is suspended.",
        modOwnershipP2: "To claim a house as your official refuge in **Single Player**, right-click the interior floor and select `Living House: Claim Residence as My Home`. In **Multiplayer**, the system binds to official safehouses where you are the owner or an approved resident. Transiting base perimeters triggers clean Halo notifications.",


        modDentalTitle: "2. Dental Hygiene & Toothpaste Durability",
        modDentalP1: "Brushing teeth is an essential micro-routine for post-apocalyptic mental fortitude. Approaching a plumbed sink with a Toothbrush (`Base.Toothbrush`) and Toothpaste (`Base.Toothpaste`) presents the context menu action.",
        modDentalP2: "Each use consumes exactly 5% of the tube (**20 brushings per tube**). The item displays a native B42 green drainable durability bar in your inventory. Brushing grants **-15 Stress**, **-10 Boredom**, and the *Fresh Breath* buff for 4 in-game hours.",

        modEconomyTitle: "3. Rebalanced Score Economy (v1.7.1 Nerf)",
        modEconomyP1: "The 'shack inflation' has been eradicated. Previously, an empty clean room started with 25 points, and 3 furniture pieces easily triggered Tier 4 Sanctuary. The economy was recalibrated and category caps were enforced:",
        modEconomyP2: "• Clean Floor Base: reduced from 25 to **10 pts** (empty room = Tier 0).\n• Luxury Bed: **10 pts** | Couch: **7 pts** | Table: **4 pts** | Chair: **3 pts** | Storage: **4 pts**.\n• 3D Items & Clutter (Cans, Mugs, Books): **0.1 to 0.6 pts** with category cap raised to **25 pts**.\n• Anti-Spam Curve: 1st item = 100%, 2nd = 60%, 3rd = 35%, 4th = 15%, 5th+ = 5%.",

        modDashboardsTitle: "4. Integrated Dashboards: Infrastructure [J] & Inspector [K]",
        modDashboardsP1: "Press **[J]** to access the Safehouse Infrastructure Dashboard: monitor fuel percentage and condition for electric generators, rainwater capacity, and **rename your refuge** via native text prompt modal.",
        modDashboardsP2: "Press **[K]** to open the Room Inspector: view an itemized breakdown of furniture, appliances, and decor in the current room. The interface features automatic word-wrapping and dynamic height adjustment.",

        // Guide / How to Use
        guideDay1Title: "Phase 1: Day One - Recon & Claiming",
        guideDay1P1: "Upon finding a structurally sound building, secure your perimeter before resting:",
        guideDay1Step1: "Clear local zeds and right-click interior floor: choose **Claim Residence as My Home**.",
        guideDay1Step2: "Equip Mop/Broom with Bleach Bucket: wipe blood stains to drop squalor to zero.",
        guideDay1Step3: "Drag decomposing corpses beyond 15 tiles away from the walls or dig grave pits.",

        guideDay2Title: "Phase 2: Master Bedroom & Thermal Seal",
        guideDay2P1: "Your bedroom is your intensive mental restoration chamber:",
        guideDay2Step1: "Install curtains across every window and keep them shut (insulates cold in winter, blocks heat in summer).",
        guideDay2Step2: "Place a double bed, an area rug on the floor, and a functioning light source.",
        guideDay2Step3: "Add aesthetic diversity: 1 bookshelf, 1 wall painting, and organized 3D mugs/books on tables.",

        guideDay3Title: "Phase 3: Hygiene, Plumbed Water & Active Routine",
        guideDay3P1: "Fortify your psychological armor through disciplined daily habits:",
        guideDay3Step1: "Plumb rain collector barrels to a sink using a pipe wrench for clean tap water post-shutoff.",
        guideDay3Step2: "Brush your teeth every morning and bathe with soap to sustain 'Clear Mind' and 'Fresh Breath' buffs.",
        guideDay3Step3: "Cooking hot meals, reading literature or playing musical instruments grants Homemaking duration (+15% to +30% Refuge aura).",

        // GDD
        gddVisionTitle: "Design Philosophy: Tactical Flow & Base Intimacy",
        gddVisionText: "Housing Care System is engineered upon a foundational truth: survival in the apocalypse is as much psychological as physical. We transformed forgotten vanilla clutter, cleaning agents, and appliances into tactical life-support assets.",

        gddMathTitle: "Mathematical Scoring Formulas (v1.7.1)",
        gddMath1Title: "Total Room Comfort (0 to 100 pts)",
        gddMath1Formula: "Score = CleanBase(10) + Min(40, Furniture) + Min(5, Craft) + Min(10, Light) + Min(25, Decor3D) + Climate",
        gddMath1Desc: "Tier 1: 20 pts (Cozy) | Tier 2: 40 pts (Comfortable) | Tier 3: 60 pts (Very Comfortable) | Tier 4: 80+ pts (Sanctuary).",
        gddMath2Title: "Squalor & Environmental Decay",
        gddMath2Formula: "Squalor = (Blood * 0.40) + (Corpses * 0.30) + (RottenFood * 0.20) + (LooseClutter * 0.10)",
        gddMath2Desc: "If Squalor exceeds 15%, comfort is penalized by 60% of squalor points. Squalor >= 50% completely nullifies comfort.",

        // Database
        dbSearchPlaceholder: "Search by item name, Base.Code, or bonus...",
        dbFilterAll: "All Objects",
        dbFilterFurniture: "Furniture & Beds",
        dbFilterCleaning: "Cleaning & Dental",
        dbFilterDecor: "Decor & 3D Clutter",
        dbFilterThermal: "Seasonality & Thermals",
        colItemName: "Object / Item",
        colCategory: "Category",
        colScore: "Rebalanced Score",
        colBonus: "Operational Effect",
        colRequirements: "Requirements / Usage",

        // Modal
        modalClose: "Close [ESC]",
        modalTitle: "TACTICAL ITEM INSPECTION // CLUTTER & INFRASTRUCTURE",
        modalCodeId: "Script ID:",
        modalCategory: "Classification:",
        modalWeight: "Estimated Weight:",
        modalScore: "Base Comfort Score:",
        modalDiminishing: "Duplicate Penalty:",
        modalTacticalNotes: "Tactical Dossier & Field Usage:",

        // Action Calculator
        calcActionSelect: "Select Homemaking Chore / Action:",
        calcSkillLevel: "Relevant Skill Level (Carpentry / Cooking / Maintenance):",
        calcInsumosTitle: "Required Tools & Supplies",
        calcDurationTitle: "Estimated Execution Duration",
        calcCooldownTitle: "Anti-Spam Cooldown",
        calcEffectsTitle: "Character Status Rewards",

        // Sandbox Table
        sbSearchPlaceholder: "Filter sandbox variable...",
        colSbVariable: "Sandbox Identifier",
        colSbType: "Type",
        colSbDefault: "Default",
        tipTitle: "Tactical Survival Rule",
        tip1: "In freezing winter (<=5°C), sleeping without an active fireplace triggers a -10 pts comfort penalty and hypothermia.",
        tip2: "Toothpaste has native B42 durability. Do not waste brushings without water in a plumbed sink.",
        tip3: "Climbing through locked windows was completely stabilized against JVM crashes in v1.7.1, but smashing windows breaks room insulation!",

        footerCredits: "PZ: Cozy Living (formerly Housing Care System) // Build 42 Ready // Built with Context Engineering",
        footerRights: "Official Wiki & Game Design Specification."
    }
};

// Database Items Catalog (v1.6.0 Rebalanced Numbers & Official Icons)
const ITEM_DATABASE = [
    // --- HIGIENE & DENTAL ---
    {
        id: "Base.ToiletPaper",
        name: { pt: "Papel Higiênico (Rolo de Asseio)", en: "Toilet Paper (Roll)" },
        category: "cleaning",
        icon: "assets/icons/toilet_paper.png",
        weight: "0.25 kg",
        score: "+25 Asseio / Uso",
        bonus: { pt: "Essencial ao usar o vaso sanitário. Consome durabilidade. Previne roupas sujas e estresse.", en: "Essential when using toilet fixtures. Consumes durability. Prevents soiled clothes and stress." },
        req: { pt: "No inventário pessoal ou em armários/gavetas a 1 tile de distância", en: "In inventory or adjacent containers within 1 tile" },
        tacticalNotes: {
            pt: "v1.6.0: O sistema vasculha o inventário e gavetas/armários num raio de 1 tile. Usar a privada sem papel causa penalidade severa: +0.30 estresse, sujeira nas roupas e perda imediata de buffs!",
            en: "v1.6.0: Scans inventory and containers within a 1-tile radius. Relieving without paper triggers severe penalties: +0.30 stress, soiled clothes, and instant loss of positive buffs!"
        }
    },
    {
        id: "Base.Toothbrush",
        name: { pt: "Escova de Dentes", en: "Toothbrush" },
        category: "cleaning",
        icon: "assets/icons/toothbrush.png",
        weight: "0.1 kg",
        score: "+15 Moral",
        bonus: { pt: "-15 Estresse, -10 Tédio, concede 'Hálito Fresco' (4h)", en: "-15 Stress, -10 Boredom, awards 'Fresh Breath' (4h)" },
        req: { pt: "Pia com água encanada + Pasta de Dente", en: "Plumbed sink with water + Toothpaste" },
        tacticalNotes: {
            pt: "Ferramenta higiênica indispensável. Reutilizável permanentemente. Reduz o estresse pós-combate sem precisar gastar cigarros ou álcool.",
            en: "Essential hygiene gear. Indefinitely reusable. Lowers post-combat panic and stress without consuming cigarettes or alcohol."
        }
    },
    {
        id: "Base.Toothpaste",
        name: { pt: "Pasta de Dente (Tubo Drenável)", en: "Toothpaste (Drainable Tube)" },
        category: "cleaning",
        icon: "assets/icons/toothpaste.png",
        weight: "0.2 kg",
        score: "20 Usos (5%/uso)",
        bonus: { pt: "Necessária para escovar os dentes. Barra verde de durabilidade visível.", en: "Required to brush teeth. Visible green durability progress bar." },
        req: { pt: "Usar junto com a Escova de Dentes", en: "Combine with Toothbrush" },
        tacticalNotes: {
            pt: "Cada tubo dura exatamente 20 escovações. Item de altíssimo valor de escambo e manutenção psicológica.",
            en: "Each tube supports exactly 20 brushings. Premium barter commodity and mental stability asset."
        }
    },
    {
        id: "Base.Soap2",
        name: { pt: "Sabonete em Barra", en: "Bar Soap" },
        category: "cleaning",
        icon: "assets/icons/soap.png",
        weight: "0.2 kg",
        score: "+40 Higiene",
        bonus: { pt: "Elimina sangue e sujeira corporal, previne coceira e odores", en: "Removes gore and grime, prevents itching and odor tracking" },
        req: { pt: "Pia ou chuveiro com água", en: "Sink or shower with water supply" },
        tacticalNotes: {
            pt: "Manter o corpo limpo reduz a atração olfativa de zumbis e concede bônus de aprendizado de XP.",
            en: "Keeping the survivor clean prevents zed scent-tracking and grants cognitive XP boosts."
        }
    },
    {
        id: "Base.Broom",
        name: { pt: "Vassoura Manual", en: "Straw Broom" },
        category: "cleaning",
        icon: "assets/icons/broom.png",
        weight: "1.0 kg",
        score: "-25 Squalor",
        bonus: { pt: "Varre poeira de cômodos e pequenos detritos", en: "Sweeps room dust and small dirt piles" },
        req: { pt: "Equipado nas duas mãos", en: "Equipped in both hands" },
        tacticalNotes: {
            pt: "A faxina regular com vassoura impede o acúmulo passivo de poeira e mantém a base impecável.",
            en: "Regular sweeping prevents passive dirt accumulation and keeps the sanctuary spotless."
        }
    },
    {
        id: "Base.Mop",
        name: { pt: "Esfregão com Balde", en: "Floor Mop" },
        category: "cleaning",
        icon: "assets/icons/mop.png",
        weight: "1.5 kg",
        score: "-45 Squalor",
        bonus: { pt: "Limpa poças d'água, graxa e manchas difíceis", en: "Cleans water puddles, grease and stubborn grime" },
        req: { pt: "Balde com água limpa", en: "Bucket with clean water" },
        tacticalNotes: {
            pt: "Ideal após invasões para limpar líquidos corporais antes que os zumbis comecem a apodrecer no piso.",
            en: "Ideal after base defenses to wipe fluids before decomposing gore permanently stains the floor."
        }
    },
    {
        id: "Base.Bleach",
        name: { pt: "Água Sanitária (Bleach)", en: "Disinfectant Bleach" },
        category: "cleaning",
        icon: "assets/icons/bleach.png",
        weight: "1.0 kg",
        score: "-70 Squalor",
        bonus: { pt: "Esteriliza sangue zumbi de pisos/paredes e extermina moscas", en: "Sterilizes zombie blood on walls/floors and eradicates flies" },
        req: { pt: "Usar com pano de prato, toalha ou esfregão", en: "Combine with dish towel or mop" },
        tacticalNotes: {
            pt: "Água sanitária é o contra-ataque definitivo à insalubridade severa. Impede o debuff de náusea do Squalor.",
            en: "Bleach is the ultimate countermeasure against high squalor. Completely shuts down room nausea."
        }
    },
    {
        id: "Base.CleaningLiquid",
        name: { pt: "Limpador Multiuso / Detergente", en: "All-Purpose Cleaning Liquid" },
        category: "cleaning",
        icon: "assets/icons/cleaning_liquid.png",
        weight: "0.8 kg",
        score: "-35 Squalor",
        bonus: { pt: "Limpeza rápida de bancadas de cozinha, fogões e pias", en: "Fast cleansing of kitchen counters, stoves and sinks" },
        req: { pt: "Usar com esponja ou toalha", en: "Combine with sponge or towel" },
        tacticalNotes: {
            pt: "Excelente para manutenção diária de cozinhas após sessões de culinária para remover gordura acumulada.",
            en: "Great for daily kitchen maintenance following cooking sessions to clear grease buildup."
        }
    },
    {
        id: "Base.Sponge",
        name: { pt: "Esponja de Limpeza", en: "Cleaning Sponge" },
        category: "cleaning",
        icon: "assets/icons/sponge.png",
        weight: "0.1 kg",
        score: "-15 Squalor",
        bonus: { pt: "Remove manchas locais em louças, pias e balcões", en: "Removes localized stains on cookware, sinks and counters" },
        req: { pt: "Água limpa e detergente", en: "Clean water and detergent" },
        tacticalNotes: {
            pt: "Ferramenta leve e durável que substitui panos de prato em desinfecções rápidas de superfícies.",
            en: "Lightweight and durable tool replacing dish towels for quick surface sanitization."
        }
    },
    {
        id: "Base.BathTowel",
        name: { pt: "Toalha de Banho Seca", en: "Bath Towel" },
        category: "cleaning",
        icon: "assets/icons/towel.png",
        weight: "0.3 kg",
        score: "+10 Higiene",
        bonus: { pt: "Seca o sobrevivente após o banho, prevenindo resfriados e hipotermia", en: "Dries survivor after showers, preventing colds and hypothermia" },
        req: { pt: "Inventário pessoal após banho", en: "Personal inventory after bathing" },
        tacticalNotes: {
            pt: "Secar-se imediatamente após lavar-se no inverno evita o moodle de resfriado e acelera o sono restaurador.",
            en: "Drying immediately after winter washing prevents chills and accelerates restorative sleep."
        }
    },
    {
        id: "Base.DishCloth",
        name: { pt: "Pano de Prato / Louça", en: "Dish Towel / Cloth" },
        category: "cleaning",
        icon: "assets/icons/dishtowel.png",
        weight: "0.1 kg",
        score: "-20 Squalor",
        bonus: { pt: "Seca e desinfeta superfícies; acumula sujeira percentual no inventário (v1.6.3)", en: "Dries and sanitizes surfaces; accumulates dirt % in inventory (v1.6.3)" },
        req: { pt: "Balcão de cozinha, pia ou fixtures", en: "Kitchen counter, sink or fixtures" },
        tacticalNotes: {
            pt: "v1.6.3: Cada faxina eleva o indicador de sujeira do pano (0..100%). Ao atingir 100%, fica inutilizável até ser lavado na pia com sabão e água limpa.",
            en: "v1.6.3: Each chore increases cloth dirt % (0..100%). At 100%, becomes unusable until washed in a sink with soap and clean water."
        }
    },
    {
        id: "Base.BucketWaterFull",
        name: { pt: "Balde com Água Limpa (Drenável)", en: "Bucket with Water (Drainable)" },
        category: "cleaning",
        icon: "assets/icons/bucket_water.png",
        weight: "4.0 kg",
        score: "+5 Suporte",
        bonus: { pt: "Reservatório com consumo real de água proporcional por tile faxinado (v1.6.3)", en: "Reservoir with proportional real water drain per mopped tile (v1.6.3)" },
        req: { pt: "Equipado na mão secundária durante faxinas", en: "Equipped in secondary hand during mopping" },
        tacticalNotes: {
            pt: "v1.6.3: Limpar pisos ou sangue consome água gradualmente do balde. Baldes secos perdem a eficácia e exigem reabastecimento na pia ou barril.",
            en: "v1.6.3: Mopping floors and gore drains water from the bucket. Empty buckets lose efficacy until refilled at plumbed sinks or barrels."
        }
    },
    {
        id: "Base.Pot",
        name: { pt: "Panela de Cozimento (Stovetop 3D)", en: "Cooking Pot (Stovetop 3D)" },
        category: "cleaning",
        icon: "assets/icons/canned_corn.png",
        weight: "1.5 kg",
        score: "Utensílio 3D",
        bonus: { pt: "Cozimento térmico real quando colocada sobre a boca do fogão ligado (v1.6.1)", en: "Real physical stovetop cooking when placed on active burner (v1.6.1)" },
        req: { pt: "Soltar diretamente sobre o fogão, churrasqueira ou lareira acesa", en: "Drop directly on top of active stove burner, grill or lit fireplace" },
        tacticalNotes: {
            pt: "v1.6.1+: Descongela e cozinha ensopados e alimentos no mundo 3D sem precisar abrir inventários. Concede +20% de Duração do Lar, mas pode queimar e incendiar a casa se esquecida!",
            en: "v1.6.1+: Defrosts and cooks stews/soups in 3D world on the stove burner. Awards +20% Home Aura duration, but can burn and spark fires if abandoned!"
        }
    },
    {
        id: "Base.Pan",
        name: { pt: "Frigideira de Alimentos (Stovetop 3D)", en: "Frying Pan (Stovetop 3D)" },
        category: "cleaning",
        icon: "assets/icons/canned_corn.png",
        weight: "1.2 kg",
        score: "Utensílio 3D",
        bonus: { pt: "Fritura rápida de ovos, bacon e carnes sobre a chapa do fogão", en: "Fast frying for meats, eggs and bacon directly on hot burners" },
        req: { pt: "Boca do fogão ou lareira acesa", en: "Active stove burner or lit fireplace" },
        tacticalNotes: {
            pt: "Ideal para refeições matinais rápidas. Acompanhe a telemetria pelo checklist [K]: [~] Cozinhando -> [OK] Servir.",
            en: "Ideal for fast morning meals. Track cooking telemetry in [K] inspector checklist: [~] Cooking -> [OK] Ready."
        }
    },

    // --- MOBÍLIAS (VALORES NERFADOS v1.6.0 / v1.7.1) ---
    {
        id: "tile.furniture_bedding_01",
        name: { pt: "Cama de Casal / Solteiro Confortável", en: "Comfortable Bed" },
        category: "furniture",
        icon: "assets/icons/fancy_bed.png",
        weight: "Tile Fixo",
        score: "+10 Conforto",
        bonus: { pt: "Sono profundo, combate pesadelos e fadiga acelerada", en: "Deep restorative sleep, counters nightmares and fatigue" },
        req: { pt: "Cômodo limpo, travesseiro recomendado", en: "Clean room, pillow recommended" },
        tacticalNotes: {
            pt: "A pontuação de cama foi rebalanceada para 10 pts (antes 25). Não transforma mais um barraco vazio em santuário instantâneo.",
            en: "Bed score was rebalanced to 10 pts (formerly 25). No longer upgrades an empty shack into an instant sanctuary."
        }
    },
    {
        id: "Base.Pillow",
        name: { pt: "Travesseiro Macio", en: "Comfort Pillow" },
        category: "furniture",
        icon: "assets/icons/pillow.png",
        weight: "0.5 kg",
        score: "+3 Conforto",
        bonus: { pt: "Elimina torcicolos e melhora a qualidade do sono sobre camas e sofás", en: "Eliminates stiff necks and enhances sleep restfulness on beds and couches" },
        req: { pt: "No inventário ao dormir ou sobre a cama", en: "In inventory when sleeping or on bed" },
        tacticalNotes: {
            pt: "Dormir com travesseiro reduz drasticamente a probabilidade de acordar com dores no pescoço ou costas.",
            en: "Sleeping with a pillow dramatically decreases waking up with neck or back strain."
        }
    },
    {
        id: "Base.BedSheet",
        name: { pt: "Lençol / Cobertor de Algodão", en: "Cotton Bed Sheet" },
        category: "furniture",
        icon: "assets/icons/sheet.png",
        weight: "0.8 kg",
        score: "+2 Conforto Térmico",
        bonus: { pt: "Retém calor corporal no sono e pode ser usado como cortina improvisada", en: "Traps body heat while resting; can also be hung as blackout curtain" },
        req: { pt: "Cama ou janela", en: "Bed or window frame" },
        tacticalNotes: {
            pt: "Item de dupla utilidade: confere aquecimento passivo na cama e veda janelas contra a visão zumbi.",
            en: "Dual-utility asset: provides passive bed warmth and covers windows against wandering zombie sightlines."
        }
    },
    {
        id: "tile.furniture_seating_sofa",
        name: { pt: "Sofá Acolchoado / Poltrona", en: "Padded Couch / Armchair" },
        category: "furniture",
        icon: "assets/icons/wardrobe.png",
        weight: "Tile Fixo",
        score: "+7 Conforto (Sofá) / +3 (Cadeira)",
        bonus: { pt: "Descanso de estamina e leitura com redução acelerada de tédio", en: "Endurance recovery and cuts boredom while reading" },
        req: { pt: "Espaço sem cadáveres próximos", en: "Area free of decaying corpses" },
        tacticalNotes: {
            pt: "Cadeiras duplicadas sofrem rendimento decrescente severo (1ª = 3 pts, 2ª = 1.8 pts, 3ª = 1.0 pt, 5ª+ = 0.1 pt).",
            en: "Duplicate chairs face aggressive diminishing returns (1st = 3 pts, 2nd = 1.8 pts, 5th+ = 0.1 pt)."
        }
    },
    {
        id: "tile.furniture_storage_closet",
        name: { pt: "Armário / Guarda-Roupa / Cômoda", en: "Wardrobe / Storage Cupboard" },
        category: "furniture",
        icon: "assets/icons/wardrobe.png",
        weight: "Tile Fixo",
        score: "+4 Conforto",
        bonus: { pt: "Sensação de organização e estoque seguro", en: "Psychological organization and safe storage" },
        req: { pt: "Instalado no quarto ou despensa", en: "Placed in bedroom or pantry" },
        tacticalNotes: {
            pt: "Guardar itens dentro de armários impede que itens soltos no chão ultrapassem o limite de 10 itens/tile (que geraria squalor).",
            en: "Storing gear inside containers prevents floor clutter exceeding 10 items/tile (which causes squalor)."
        }
    },
    {
        id: "tile.furniture_shelving_bookshelf",
        name: { pt: "Estante de Livros de Madeira", en: "Wooden Bookshelf" },
        category: "furniture",
        icon: "assets/icons/book.png",
        weight: "Tile Fixo",
        score: "+5 Conforto",
        bonus: { pt: "Acelera a absorção de multiplicadores de livros de skill", en: "Accelerates reading absorption of skill book multipliers" },
        req: { pt: "Ambiente com iluminação adequada", en: "Adequately lit room" },
        tacticalNotes: {
            pt: "Elemento chave de salas de leitura e escritórios de refúgio. Combina com poltronas e luminárias de mesa.",
            en: "Key element of reading dens and offices. Synergizes with armchairs and reading lamps."
        }
    },
    {
        id: "tile.appliances_refrigeration",
        name: { pt: "Geladeira / Freezer Frost-Free", en: "Refrigerator & Freezer" },
        category: "furniture",
        icon: "assets/icons/fridge.png",
        weight: "Tile Fixo",
        score: "+6 Conforto",
        bonus: { pt: "Preserva alimentos e impede acúmulo de comida estragada no cômodo", en: "Preserves perishables and prevents rotten food squalor spikes" },
        req: { pt: "Energia elétrica contínua", en: "Continuous electrical power" },
        tacticalNotes: {
            pt: "Se a energia cair e a comida apodrecer dentro da geladeira, o cômodo sofre forte penalidade de squalor.",
            en: "If power fails and food rots inside, the room suffers severe rotting squalor decay."
        }
    },

    // --- SAZONALIDADE & TÉRMICO ---
    {
        id: "tile.appliances_cooking_antique_stove",
        name: { pt: "Fogão a Lenha / Lareira Antiga", en: "Antique Wood Stove / Fireplace" },
        category: "thermal",
        icon: "assets/icons/campfire.png",
        weight: "Tile Fixo",
        score: "+8 Conforto (Inverno Ativo)",
        bonus: { pt: "Aquecimento contínuo no inverno polar. Previne penalidade de frio (-10)", en: "Sub-zero winter heating. Wards off freezing room penalty (-10)" },
        req: { pt: "Lenha cortada, tábuas ou carvão", en: "Logs, kindling, or charcoal" },
        tacticalNotes: {
            pt: "ATENÇÃO: Acender fogo em interiores fechados durante o verão gera sufocamento (+12 squalor e desconforto).",
            en: "WARNING: Lighting indoor fires during hot summer causes suffocating heat (+12 squalor and restlessness)."
        }
    },
    {
        id: "tile.appliances_fan",
        name: { pt: "Ventilador Elétrico de Teto / Mesa", en: "Electric Air Fan" },
        category: "thermal",
        icon: "assets/icons/generator.png",
        weight: "Tile Fixo",
        score: "+4 Conforto (Verão)",
        bonus: { pt: "Circulação de ar refrescante em ondas de calor escaldantes", en: "Refreshing air draft during blistering summer heatwaves" },
        req: { pt: "Energia do gerador ligada", en: "Generator power supply active" },
        tacticalNotes: {
            pt: "Essencial durante os meses de julho e agosto em Kentucky para evitar hipertermia e sede excessiva no sono.",
            en: "Essential during July and August in Kentucky to prevent hyperthermia and excessive thirst while sleeping."
        }
    },
    {
        id: "Base.Generator",
        name: { pt: "Gerador Elétrico Portátil", en: "Portable Electric Generator" },
        category: "thermal",
        icon: "assets/icons/generator.png",
        weight: "35.0 kg",
        score: "Alimentação de Base",
        bonus: { pt: "Garante eletricidade estável para geladeiras, luzes, fornos e ventiladores", en: "Powers refrigerators, lights, ovens and cooling fans" },
        req: { pt: "Combustível (Gasolina) + Manutenção com Eletrônicos", en: "Gasoline Fuel + Electronics Scrap Maintenance" },
        tacticalNotes: {
            pt: "Monitore o painel [J] para acompanhar o nível de combustível e a condição mecânica sem precisar checar na chuva.",
            en: "Check the [J] telemetry dashboard to track fuel and mechanical status without venturing out in storms."
        }
    },
    {
        id: "tile.lighting_lamp",
        name: { pt: "Luminária / Abajur Aceso", en: "Table Lamp / Floor Lantern" },
        category: "thermal",
        icon: "assets/icons/lamp.png",
        weight: "Item / Tile",
        score: "+10 Iluminação",
        bonus: { pt: "Combate o pânico de escuridão e viabiliza leituras noturnas sem fadiga ocular", en: "Counters nyctophobia panic and enables nighttime reading without eyestrain" },
        req: { pt: "Lâmpada intacta + Energia ativa", en: "Working lightbulb + Active power" },
        tacticalNotes: {
            pt: "Quartos sem qualquer fonte de iluminação sofrem penalidade de sensação de abandono.",
            en: "Unlit rooms trigger psychological desolation penalties."
        }
    },
    {
        id: "tile.curtains_closed",
        name: { pt: "Cortinas Térmicas Fechadas", en: "Closed Window Curtains" },
        category: "thermal",
        icon: "assets/icons/sheet.png",
        weight: "Item / Tile",
        score: "+2 Conforto Térmico",
        bonus: { pt: "Isolamento de correntes de ar frio no inverno e bloqueio de sol escaldante no verão", en: "Blocks winter drafts and deflects blistering summer radiation" },
        req: { pt: "Instaladas e fechadas em janelas", en: "Installed and drawn closed over windows" },
        tacticalNotes: {
            pt: "Além do bônus de temperatura, cortinas fechadas impedem que zumbis vejam luzes acesas dentro da base à noite.",
            en: "Beyond temperature mitigation, closed curtains prevent zombies spotting indoor lighting at night."
        }
    },
    {
        id: "tile.floors_rugs",
        name: { pt: "Tapete Acolchoado / Pele de Animal", en: "Area Rug / Animal Hide" },
        category: "thermal",
        icon: "assets/icons/towel.png",
        weight: "Tile",
        score: "+4 Normal / +6 Inverno",
        bonus: { pt: "Isolamento térmico do chão frio e redução de barulho ao caminhar", en: "Thermal floor insulation against frost and muffles indoor steps" },
        req: { pt: "Instalado no chão do quarto", en: "Placed on bedroom floor" },
        tacticalNotes: {
            pt: "Tapetes ganham bônus sazonal automático durante o inverno de Knox Country.",
            en: "Rugs gain an automatic seasonal buff during Knox Country sub-zero winter months."
        }
    },

    // --- DECORAÇÃO & CLUTTER 3D ---
    {
        id: "tile.walls_decoration_painting",
        name: { pt: "Quadro de Pintura / Pôster Artístico", en: "Wall Painting / Art Poster" },
        category: "decor",
        icon: "assets/icons/painting.png",
        weight: "Tile Parede",
        score: "+3 Conforto",
        bonus: { pt: "Combate passivo a tédio e melancolia", en: "Passive reduction of survivor boredom and gloom" },
        req: { pt: "Fixado em parede rebocada/pintada", en: "Mounted on plastered/painted wall" },
        tacticalNotes: {
            pt: "Espelhos e quadros artísticos decoram paredes sem ocupar espaço de chão transitável.",
            en: "Art paintings and mirrors decorate vertical spaces without obstructing floor paths."
        }
    },
    {
        id: "tile.walls_decoration_mirror",
        name: { pt: "Espelho de Parede / Banheiro", en: "Wall Mirror" },
        category: "decor",
        icon: "assets/icons/mirror.png",
        weight: "Tile Parede",
        score: "+3 Conforto",
        bonus: { pt: "Sensação de amplitude e suporte visual para cuidados pessoais", en: "Room space enhancement and grooming support" },
        req: { pt: "Parede de banheiro ou quarto", en: "Bathroom or bedroom wall" },
        tacticalNotes: {
            pt: "Espelhos pontuam na categoria de decoração e aumentam a pontuação de banheiros confortáveis.",
            en: "Mirrors boost bathroom decor rating and aesthetic comfort score."
        }
    },
    {
        id: "Base.Spiffo",
        name: { pt: "Pelúcia Oficial do Spiffo", en: "Spiffo Plush Toy" },
        category: "decor",
        icon: "assets/icons/spiffo.png",
        weight: "0.5 kg",
        score: "+1.0 Conforto 3D",
        bonus: { pt: "Colecionável que humaniza o ambiente e traz aconchego", en: "Collectible that humanizes the refuge and restores morale" },
        req: { pt: "Exibido sobre cama, mesa ou prateleira", en: "Displayed on bed, table or shelf" },
        tacticalNotes: {
            pt: "Spiffo Gigante pontua +1.5 pts. Outros bichinhos de pelúcia (Teddy Bear, Doll) rendem entre 0.6 e 0.8 pts.",
            en: "Giant Spiffo grants +1.5 pts. Other plushies (Teddy Bear, Doll) yield between 0.6 and 0.8 pts."
        }
    },
    {
        id: "Base.Book",
        name: { pt: "Livros, Revistas & Manuais 3D", en: "3D Books, Comics & Manuals" },
        category: "decor",
        icon: "assets/icons/book.png",
        weight: "0.5 kg",
        score: "+0.4 a +0.6 Conforto 3D",
        bonus: { pt: "Transforma mesas vazias em estações aconchegantes de leitura", en: "Turns barren desks into cozy reading stations" },
        req: { pt: "Posicionado no mundo via 'Colocar Item 3D'", en: "Placed in world via 3D Item Placement" },
        tacticalNotes: {
            pt: "A categoria de decoração e itens 3D possui teto balanceado de 25 pontos totais no cômodo.",
            en: "The decor and 3D item category features a balanced ceiling of 25 maximum room points."
        }
    },
    {
        id: "Base.ComicBook",
        name: { pt: "Revista em Quadrinhos (Comic Book)", en: "Comic Book" },
        category: "decor",
        icon: "assets/icons/comic_book.png",
        weight: "0.2 kg",
        score: "+0.5 Conforto 3D",
        bonus: { pt: "Entretenimento nostálgico que elimina estresse instantâneo", en: "Nostalgic entertainment cutting survivor stress" },
        req: { pt: "Exibido na mesa de cabeceira ou poltrona", en: "Displayed on nightstand or armchair" },
        tacticalNotes: {
            pt: "Pode ser lido para redução de tédio ou mantido como decoração 3D de alta pontuação.",
            en: "Can be consumed for rapid boredom reduction or displayed for steady 3D decor score."
        }
    },
    {
        id: "Base.GuitarAcoustic",
        name: { pt: "Violão Acústico / Guitarra", en: "Acoustic Guitar / Bass" },
        category: "decor",
        icon: "assets/icons/guitar.png",
        weight: "3.0 kg",
        score: "+1.2 Conforto 3D",
        bonus: { pt: "Pode ser tocado para a ação de Lazer/Hobbies (-5 Tédio, -5 Tristeza)", en: "Can be played for Leisure/Hobbies action (-5 Boredom, -5 Sadness)" },
        req: { pt: "Exibido no quarto ou sala", en: "Displayed in living room or bedroom" },
        tacticalNotes: {
            pt: "Tocar instrumentos musicais estende a duração do aconchego do lar através do sistema de Homemaking.",
            en: "Playing instruments extends safehouse aura duration via the Homemaking engine."
        }
    },
    {
        id: "Base.CannedCorn",
        name: { pt: "Alimentos Enlatados / Despensa 3D", en: "Canned Food & Pantry 3D" },
        category: "decor",
        icon: "assets/icons/canned_corn.png",
        weight: "0.5 kg",
        score: "+0.15 Conforto 3D",
        bonus: { pt: "Sensação de fartura e despensa abastecida", en: "Sense of abundance and well-stocked pantry" },
        req: { pt: "Organizado sobre balcões ou prateleiras", en: "Neatly stacked on counters or shelves" },
        tacticalNotes: {
            pt: "Nerfado de 0.5 para 0.15 pts. Evita que o jogador atinja santuário apenas acumulando latas no chão.",
            en: "Nerfed from 0.5 to 0.15 pts. Prevents cheesing high tiers by dumping canned goods on the floor."
        }
    },
    {
        id: "Base.Radio",
        name: { pt: "Rádio ValuTech / Receptor FM", en: "ValuTech Broadcast Radio" },
        category: "decor",
        icon: "assets/icons/radio.png",
        weight: "1.5 kg",
        score: "+1.5 Conforto Ativo",
        bonus: { pt: "v1.6.0: Transmissões em cômodo com alto conforto multiplicam dreno de tédio", en: "v1.6.0: Active broadcasts in high comfort rooms amplify boredom reduction" },
        req: { pt: "Baterias ou ligado na tomada", en: "Battery or connected grid power" },
        tacticalNotes: {
            pt: "Permite ouvir avisos de emergência automatizados e reduz o sentimento de solidão.",
            en: "Picks up emergency automated broadcasts and wards off survivor loneliness."
        }
    },
    {
        id: "Base.Television",
        name: { pt: "Televisão de Tubo / Antique TV", en: "Vintage CRT Television" },
        category: "decor",
        icon: "assets/icons/television.png",
        weight: "10.0 kg",
        score: "+2.0 Conforto Ativo",
        bonus: { pt: "v1.6.0: Assistir fitas VHS ou canais ao vivo amplifica o buff de descanso", en: "v1.6.0: Watching VHS tapes or live broadcasts boosts rest recovery" },
        req: { pt: "Energia elétrica contínua", en: "Continuous power supply" },
        tacticalNotes: {
            pt: "Assistir programas educativos e fitas de sobrevivência em um refúgio de Tier 3/4 dobra o alívio psicológico.",
            en: "Watching survival tapes in Tier 3/4 comfort spaces doubles psychological relief."
        }
    },
    {
        id: "Base.Paintbrush",
        name: { pt: "Pincel de Pintor Profissional", en: "Painter's Brush" },
        category: "decor",
        icon: "assets/icons/paintbrush.png",
        weight: "0.2 kg",
        score: "Ferramenta de Base",
        bonus: { pt: "Permite pintar paredes rebocadas com cores acolhedoras", en: "Used to paint plastered walls with soothing colors" },
        req: { pt: "Balde de Tinta na mão secundária", en: "Paint bucket in secondary hand" },
        tacticalNotes: {
            pt: "Paredes de madeira crua não pontuam em conforto. Rebocar e pintar com cores quentes concede bônus fixo.",
            en: "Raw wooden walls give no comfort. Plastering and painting with warm tones adds permanent score."
        }
    },
    {
        id: "Base.PlasterBag",
        name: { pt: "Saco de Gesso / Reboco", en: "Bag of Plaster Powder" },
        category: "decor",
        icon: "assets/icons/plaster.png",
        weight: "5.0 kg",
        score: "Acabamento Estrutural",
        bonus: { pt: "Cobre paredes rústicas de madeira, eliminando ranhuras de vento", en: "Finishes rough wooden walls, sealing draft leaks" },
        req: { pt: "Misturar com balde d'água", en: "Mix with bucket of water" },
        tacticalNotes: {
            pt: "Paredes rebocadas retêm melhor a temperatura no inverno e aumentam o isolamento acústico.",
            en: "Plastered walls insulate winter heat and dampen indoor sound signatures."
        }
    },
    {
        id: "Base.LightBulb",
        name: { pt: "Lâmpada Elétrica Incandescente", en: "Incandescent Light Bulb" },
        category: "utility",
        icon: "assets/icons/lamp.png",
        weight: "0.2 kg",
        score: "Restaura Luz da Base",
        bonus: { pt: "Substitui filamentos queimados em luminárias e abajures da residência.", en: "Replaces burned filaments in residential lamps and fixtures." },
        req: { pt: "No inventário primário ou secundário ao interagir com a luminária", en: "In primary or secondary inventory when interacting with fixture" },
        tacticalNotes: {
            pt: "v1.6.7: Lâmpadas ativas sofrem queima periódica de filamento. O sobrevivente pode verificar no Checklist de Manutenção [K] e substituir com botão direito na luminária apagada.",
            en: "v1.6.7: Active lights suffer periodic filament burnout. Survivors can audit via Maintenance Checklist [K] and replace via right-click on the dark fixture."
        }
    }
];

// Sandbox Options Catalog (15 Variáveis Oficiais B42)
const SANDBOX_OPTIONS = [
    {
        name: "HousingCare.RequireBaseOwnership",
        type: "Boolean",
        default: "true",
        impact: { pt: "Exige que o sobrevivente estabeleça a residência como seu Lar Oficial (SP) ou safehouse (MP). Casas neutras não dão buffs.", en: "Demands survivor claims the residence as official Home (SP) or safehouse (MP). Neutral houses grant no buffs." }
    },
    {
        name: "HousingCare.EnableComfortSystem",
        type: "Boolean",
        default: "true",
        impact: { pt: "Ativa o scanner de cômodos e o cálculo de bônus de descanso e recuperação mental.", en: "Enables the room scanner and sleep recovery calculations." }
    },
    {
        name: "HousingCare.EnableSqualorSystem",
        type: "Boolean",
        default: "true",
        impact: { pt: "Ativa acúmulo de poeira, lixo, sangue e penalidades de náusea.", en: "Enables dirt, blood, trash accumulation and room nausea debuffs." }
    },
    {
        name: "HousingCare.EnableSeasonalComfort",
        type: "Boolean",
        default: "true",
        impact: { pt: "Ativa bônus de lareiras no inverno (+8) e ventiladores no verão (+4), além de penalidade de frio.", en: "Enables winter fireplace buffs (+8) and summer fan cooling (+4), plus sub-zero penalties." }
    },
    {
        name: "HousingCare.EnableHomemakingStreaks",
        type: "Boolean",
        default: "true",
        impact: { pt: "Tarefas domésticas (culinária, faxina, hobbies) estendem a duração do buff do Lar.", en: "Homemaking chores (cooking, cleaning, hobbies) extend Safehouse comfort aura." }
    },
    {
        name: "HousingCare.HomemakingCooldownSeconds",
        type: "Integer (10 - 300)",
        default: "60",
        impact: { pt: "Tempo de recarga anti-spam entre ações da mesma categoria.", en: "Anti-spam cooldown seconds between actions of the same category." }
    },
    {
        name: "HousingCare.DiminishingReturnsEnabled",
        type: "Boolean",
        default: "true",
        impact: { pt: "Reduz a pontuação de itens repetidos no mesmo cômodo (100%, 60%, 35%, 15%, 5%).", en: "Applies diminishing returns to duplicate room items (100%, 60%, 35%, 15%, 5%)." }
    },
    {
        name: "HousingCare.Max3DItemsPerTile",
        type: "Integer (5 - 30)",
        default: "10",
        impact: { pt: "Número máximo de itens 3D por quadrado antes de começar a penalizar como entulho solto.", en: "Max 3D items allowed per floor tile before triggering loose clutter squalor." }
    },
    {
        name: "HousingCare.Max3DItemsPerRoomCategory",
        type: "Integer (2 - 15)",
        default: "6",
        impact: { pt: "Teto de itens pontuáveis de uma mesma categoria 3D por cômodo.", en: "Cap on scored 3D items of the same category per room." }
    },
    {
        name: "HousingCare.SqualorOverrideThreshold",
        type: "Integer (20 - 90)",
        default: "50",
        impact: { pt: "Nível de sujeira a partir do qual o conforto é imediatamente anulado para 0 pts.", en: "Squalor percentage where room comfort is instantly overridden to 0 pts." }
    },
    {
        name: "HousingCare.DirtSystemEnabled",
        type: "Boolean",
        default: "true",
        impact: { pt: "Calçados transferem lama, terra e sangue das ruas para o piso da casa.", en: "Footwear transfers mud, dirt and street blood onto safehouse floors." }
    },
    {
        name: "HousingCare.CorpseAuraRadius",
        type: "Integer (5 - 30)",
        default: "15",
        impact: { pt: "Raio em blocos no qual cadáveres em decomposição emitem aura de sujeira.", en: "Tile radius where rotting zombie corpses radiate squalor aura." }
    },
    {
        name: "HousingCare.BladderSystemEnabled",
        type: "Boolean",
        default: "false",
        impact: { pt: "Simulação de necessidades fisiológicas e uso de peças sanitárias.", en: "Simulates physiological restroom and bladder urgency." }
    },
    {
        name: "HousingCare.EnableHUDWidget",
        type: "Boolean",
        default: "true",
        impact: { pt: "Exibe o widget flutuante Frameless Soft Glass no canto superior.", en: "Renders the floating Frameless Soft Glass widget on screen." }
    },
    {
        name: "HousingCare.HUDWidgetOpacity",
        type: "Float (0.2 - 1.0)",
        default: "0.85",
        impact: { pt: "Opacidade do vidro translúcido do painel da HUD.", en: "Backdrop opacity of the translucent HUD glass panel." }
    },
    {
        name: "HousingCare.StovetopCookingEnabled",
        type: "Boolean",
        default: "true",
        impact: { pt: "v1.6.1: Ativa o cozimento físico em 3D de panelas e carnes sobre a boca de fogões e lareiras.", en: "v1.6.1: Enables physical 3D stovetop cooking for pots and meats on active burners." }
    },
    {
        name: "HousingCare.StovetopFireRiskEnabled",
        type: "Boolean",
        default: "true",
        impact: { pt: "v1.6.1: Alimentos queimando no fogo alto por tempo excessivo provocam risco real de incêndio.", en: "v1.6.1: Severely burnt food left on high heat triggers real building fire hazards." }
    },
    {
        name: "HousingCare.ApplianceScanEnabled",
        type: "Boolean",
        default: "true",
        impact: { pt: "v1.6.3: Ativa a varredura e o Painel de Aparelhos e Instalações (Tecla U) com abas por cômodo.", en: "v1.6.3: Enables room appliance scanning and the Appliance Dashboard (U key) with room tabs." }
    },
    {
        name: "HousingCare.BucketWaterDrainRate",
        type: "Float (0.5 - 3.0)",
        default: "1.0",
        impact: { pt: "v1.6.3: Multiplicador de consumo de água do balde durante faxinas de piso e desinfecções.", en: "v1.6.3: Multiplier for bucket water consumption during floor mopping and sanitization." }
    },
    {
        name: "HousingCare.DishClothDirtRate",
        type: "Float (0.5 - 3.0)",
        default: "1.0",
        impact: { pt: "v1.6.3: Taxa na qual panos de prato e toalhas acumulam sujeira (0 a 100%) antes de exigir lavagem.", en: "v1.6.3: Rate at which dish towels accumulate dirt (0 to 100%) before requiring sink washing." }
    },
    {
        name: "HousingCare.ToolDegradationRate",
        type: "Float (0.2 - 2.0)",
        default: "1.0",
        impact: { pt: "v1.6.3: Taxa de desgaste mecânico de vassouras, esponjas e esfregões por ciclo de limpeza.", en: "v1.6.3: Wear and condition degradation rate for brooms, sponges and mops per chore cycle." }
    },
    {
        name: "HousingCare.ToiletPaperSearchRadius",
        type: "Integer (1 - 3)",
        default: "1",
        impact: { pt: "v1.6.0: Raio em blocos para busca de papel higiênico em recipientes adjacentes ao vaso.", en: "v1.6.0: Tile radius for detecting toilet paper in adjacent containers and drawers." }
    },
    {
        name: "HousingCare.EnableLightBulbBurnout",
        type: "Boolean",
        default: "true",
        impact: { pt: "v1.6.7: Ativa a queima periódica de lâmpadas incandescentes em luminárias ativas na base.", en: "v1.6.7: Enables periodic filament burnout for active light fixtures in base." }
    },
    {
        name: "HousingCare.LightBulbBurnoutChance",
        type: "Integer (1 - 100)",
        default: "3",
        impact: { pt: "v1.6.7: Chance percentual (%) por ciclo de iluminação para queima do filamento da lâmpada.", en: "v1.6.7: Percentage roll chance (%) per illumination cycle for filament burnout." }
    },
    {
        name: "HousingCare.SqualorLingerHours",
        type: "Integer (1 - 24)",
        default: "4",
        impact: { pt: "v1.6.7: Horas in-game que o ar viciado e a poeira demoram para decair após eliminação dos focos de sujeira.", en: "v1.6.7: In-game hours squalor aura lingers after active filth sources are eliminated." }
    },
    {
        name: "HousingCare.ChoreCooldownSeconds",
        type: "Integer (5 - 300)",
        default: "30",
        impact: { pt: "v1.6.7: Cooldown anti-spam dedicado para tarefas domésticas menores e asseio corporal.", en: "v1.6.7: Dedicated anti-spam cooldown for minor homemaking chores and grooming." }
    },
    {
        name: "HousingCare.StovetopCheckIntervalSeconds",
        type: "Integer (5 - 60)",
        default: "12",
        impact: { pt: "v1.6.7: Intervalo em segundos de cálculo térmico e progresso de cozimento físico no fogão/lareira.", en: "v1.6.7: Real interval in seconds between physics cooking checks on active stovetops." }
    },
    {
        name: "HousingCare.Enable_Aquecido",
        type: "Boolean",
        default: "true",
        impact: { pt: "v1.6.6: Ativa o buff 'Aquecido & Confortável' em ambientes com lareira/calefação, curando resfriados.", en: "v1.6.6: Enables 'Warm & Cozy' buff in heated shelters during winter, curing colds." }
    },
    {
        name: "HousingCare.Enable_Alerta",
        type: "Boolean",
        default: "true",
        impact: { pt: "v1.6.6: Ativa o buff 'Alerta & Focado' concedido pela serenidade do santuário contra pânico repentino.", en: "v1.6.6: Enables 'Alert & Focused' buff from sanctuary serene state, dampening sudden panic." }
    },
    {
        name: "HousingCare.AllowLootLuckBuff",
        type: "Boolean",
        default: "true",
        impact: { pt: "v1.6.5: Concede segunda rolagem de itens raros ao abrir contêineres fechados para sobreviventes com mente plena.", en: "v1.6.5: Grants second loot roll for rare items in closed containers to survivors with high focus." }
    },
    {
        name: "HousingCare.BladderGainPerHour",
        type: "Float (0.05 - 1.0)",
        default: "0.15",
        impact: { pt: "v1.6.7: Taxa de acúmulo fisiológico por hora em repouso (amplificada pelo consumo de líquidos).", en: "v1.6.7: Hourly physiological bladder accumulation rate at rest (scaled with beverage intake)." }
    }
];

// Action & Homemaking Calculator Matrix
const CRAFTING_ACTIONS = [
    {
        id: "toilet_relief",
        name: { pt: "Uso Sanitário & Asseio Pessoal", en: "Toilet Fixture & Hygiene Relief" },
        category: "Higiene",
        icon: "assets/icons/toilet_paper.png",
        moodleIcon: "assets/moodles/lv_comfort_1.png",
        tools: { pt: "Privada + Papel Higiênico (no inventário ou a 1 tile)", en: "Toilet + Toilet Paper (inventory or 1 tile)" },
        duration: "10 seg in-game",
        cooldown: "Sem cooldown (necessidade fisiológica)",
        rewards: { pt: "Alívio físico completo, previne roupas sujas e elimina estresse", en: "Physical relief, wards off soiled garments and stress" }
    },
    {
        id: "brush_teeth",
        name: { pt: "Escovação Dental Sanitária", en: "Sanitary Teeth Brushing" },
        category: "Higiene",
        icon: "assets/icons/toothbrush.png",
        moodleIcon: "assets/moodles/moodle_happy.png",
        tools: { pt: "Escova de Dentes + Pasta de Dente (5% consumo)", en: "Toothbrush + Toothpaste (5% drain)" },
        duration: "10 seg in-game",
        cooldown: "4 horas in-game",
        rewards: { pt: "-15 Estresse, -10 Tédio, Buff 'Hálito Fresco' (4h)", en: "-15 Stress, -10 Boredom, 'Fresh Breath' buff (4h)" }
    },
    {
        id: "clean_floor",
        name: { pt: "Faxina de Piso e Sangue", en: "Floor & Blood Mopping" },
        category: "Limpeza",
        icon: "assets/icons/mop.png",
        moodleIcon: "assets/moodles/lv_squalor_1.png",
        tools: { pt: "Esfregão/Vassoura + Balde com Água Sanitária (consome água)", en: "Mop/Broom + Bleach Bucket (consumes water)" },
        duration: "15 seg / tile",
        cooldown: "60 segundos",
        rewards: { pt: "-45 a -70 Squalor, remove moscas e previne náusea", en: "-45 to -70 Squalor, removes flies and prevents nausea" }
    },
    {
        id: "clean_fixture",
        name: { pt: "Desinfecção de Vaso / Pia / Chuveiro", en: "Sanitize Bathroom Fixture" },
        category: "Limpeza",
        icon: "assets/icons/sponge.png",
        moodleIcon: "assets/icons/cleaning_liquid.png",
        tools: { pt: "Pano de Prato ou Esponja + Sabão/Bleach", en: "Dish Towel or Sponge + Soap/Bleach" },
        duration: "12 seg",
        cooldown: "60 segundos",
        rewards: { pt: "Transforma fixture suja em +4 pts de Conforto Sanitário", en: "Turns dirty fixture into +4 pts Sanitary Comfort" }
    },
    {
        id: "stovetop_cooking_action",
        name: { pt: "Cozimento Real sobre o Fogão (Stovetop 3D)", en: "Physical Stovetop 3D Cooking" },
        category: "Culinária",
        icon: "assets/icons/canned_corn.png",
        moodleIcon: "assets/moodles/lv_comfort_2.png",
        tools: { pt: "Panela, Frigideira ou Alimento solto sobre a boca do fogão ligado", en: "Pot, Pan or Food dropped onto active stove burner" },
        duration: "Minutos in-game (variável)",
        cooldown: "Sem cooldown (física contínua)",
        rewards: { pt: "+20% Duração do Lar, descongela carnes e refeição quente nutritiva", en: "+20% Home Aura, defrosts meats, hot nutritious meal" }
    },
    {
        id: "wash_dishcloth",
        name: { pt: "Lavar Pano de Prato Encardido", en: "Wash Soiled Dish Cloth" },
        category: "Limpeza",
        icon: "assets/icons/dishtowel.png",
        moodleIcon: "assets/icons/soap.png",
        tools: { pt: "Pano a 100% de sujeira + Pia com água + Sabão ou Bleach", en: "100% soiled cloth + Plumbed sink + Soap or Bleach" },
        duration: "8 seg in-game",
        cooldown: "Sem cooldown",
        rewards: { pt: "Restaura o pano para 0% de sujeira, permitindo novas faxinas", en: "Restores cloth to 0% dirt, ready for more chores" }
    },
    {
        id: "appliance_inspect",
        name: { pt: "Inspeção de Aparelhos e Instalações (Tecla U)", en: "Inspect Appliances & Fixtures (Key U)" },
        category: "Interface",
        icon: "assets/icons/sponge.png",
        moodleIcon: "assets/moodles/lv_comfort_3.png",
        tools: { pt: "Dentro de safehouse ou base residencial", en: "Inside safehouse or residential base" },
        duration: "Instantâneo [Tecla U]",
        cooldown: "Sem cooldown",
        rewards: { pt: "Diagnóstico completo de pias, fogões e fixtures por cômodo", en: "Complete diagnosis of sinks, stoves and fixtures by room" }
    },
    {
        id: "home_cooking",
        name: { pt: "Culinária Caseira no Fogão", en: "Homestyle Cooking" },
        category: "Culinária",
        icon: "assets/icons/canned_corn.png",
        moodleIcon: "assets/moodles/lv_comfort_2.png",
        tools: { pt: "Panela/Frigideira + Fogão ativo ou a Lenha", en: "Cooking Pot/Pan + Active Stove" },
        duration: "Variável por receita",
        cooldown: "60 segundos",
        rewards: { pt: "+20% Duração do Aconchego do Lar, alívio de tristeza", en: "+20% Safehouse aura duration, cuts sadness" }
    },
    {
        id: "play_music",
        name: { pt: "Praticar Música ou Leitura Confortável", en: "Play Instrument / Reading Session" },
        category: "Lazer & Hobbies",
        icon: "assets/icons/guitar.png",
        moodleIcon: "assets/moodles/moodle_bored.png",
        tools: { pt: "Violão, Guitarra, Livro ou Revista", en: "Guitar, Violin, Book or Magazine" },
        duration: "10 seg",
        cooldown: "60 segundos",
        rewards: { pt: "-5 Tédio, -5 Tristeza imediata, +15% Duração do Lar", en: "-5 Boredom, -5 Sadness, +15% Safehouse aura" }
    },
    {
        id: "claim_refuge",
        name: { pt: "Estabelecer Residência como Lar Oficial", en: "Claim Residence as Official Home" },
        category: "Posse & Governança",
        icon: "assets/moodles/lv_comfort_4.png",
        moodleIcon: "assets/moodles/lv_comfort_1.png",
        tools: { pt: "Interior de qualquer casa sem dono anterior", en: "Interior of any unclaimed house" },
        duration: "Instantâneo (Menu de Contexto)",
        cooldown: "Sem cooldown",
        rewards: { pt: "Desbloqueia scanner [K], HUD de aconchego e telemetria [J]", en: "Unlocks inspector [K], comfort HUD and [J] telemetry" }
    },
    {
        id: "replace_lightbulb",
        name: { pt: "Substituição de Lâmpada Queimada", en: "Replace Burned Light Bulb" },
        category: "Manutenção",
        icon: "assets/icons/lamp.png",
        moodleIcon: "assets/moodles/lv_comfort_3.png",
        tools: { pt: "Lâmpada Elétrica (Base.LightBulb) + Luminária apagada", en: "Light Bulb (Base.LightBulb) + Dark Light Fixture" },
        duration: "5 seg in-game",
        cooldown: "Sem cooldown",
        rewards: { pt: "Restaura iluminação do cômodo e recupera pontuação de conforto (+6 pts)", en: "Restores room illumination and recovers comfort score (+6 pts)" }
    }
];

// Catalog of Official & Custom Moodles (Build 42)
const MOODLES_CATALOG = [
    {
        id: "lv_comfort_1",
        name: { pt: "Lar Doce Lar (Tier 1)", en: "Home Sweet Home (Tier 1)" },
        type: "positive",
        icon: "assets/moodles/lv_comfort_1.png",
        scoreRange: "20 - 39 pts Conforto",
        description: {
            pt: "Ambiente básico arrumado. Concede dreno passivo leve de tédio e leve aceleração de sono.",
            en: "Basic tidy room. Mild passive boredom reduction and slightly accelerated rest."
        }
    },
    {
        id: "lv_comfort_2",
        name: { pt: "Conforto Revigorante (Tier 2)", en: "Restful Comfort (Tier 2)" },
        type: "positive",
        icon: "assets/moodles/lv_comfort_2.png",
        scoreRange: "40 - 59 pts Conforto",
        description: {
            pt: "Mobiliário adequado e boa cama. Neutraliza ansiedade pós-combate e cura fadiga 25% mais rápido.",
            en: "Quality furniture and decent bed. Dispels post-combat anxiety, +25% rest speed."
        }
    },
    {
        id: "lv_comfort_3",
        name: { pt: "Serenidade Absoluta (Tier 3)", en: "Absolute Serenity (Tier 3)" },
        type: "positive",
        icon: "assets/moodles/lv_comfort_3.png",
        scoreRange: "60 - 79 pts Conforto",
        description: {
            pt: "Decoração 3D refinada, isolamento térmico e iluminação quente. Acelera absorção de livros de skill.",
            en: "Refined 3D clutter, thermal insulation and warm lighting. Accelerates reading XP multipliers."
        }
    },
    {
        id: "lv_comfort_4",
        name: { pt: "Santuário Inviolável (Tier 4)", en: "Inviolable Sanctuary (Tier 4)" },
        type: "positive",
        icon: "assets/moodles/lv_comfort_4.png",
        scoreRange: "80 - 100 pts Conforto",
        description: {
            pt: "O ápice do apocalipse. Imunidade total à depressão dentro da base, sono ultra-reparador e regeneração moral plena.",
            en: "The zenith of survival. Complete depression immunity inside refuge, ultra-restorative sleep."
        }
    },
    {
        id: "lv_morning_cozy",
        name: { pt: "Manhã Aconchegante", en: "Morning Cozy" },
        type: "positive",
        icon: "assets/moodles/moodle_happy.png",
        scoreRange: "Rotina Matinal",
        description: {
            pt: "Bônus concedido após tomar café ou fazer a primeira refeição quente na base entre 06h e 10h. Drena fadiga e melhora o ânimo.",
            en: "Granted after having breakfast or hot meal at base between 06:00 and 10:00. Reduces fatigue, boosts mood."
        }
    },
    {
        id: "lv_routine_streak",
        name: { pt: "Rotina Estabelecida (Streak)", en: "Routine Streak" },
        type: "positive",
        icon: "assets/moodles/moodle_happy.png",
        scoreRange: "3+ Dias Consecutivos",
        description: {
            pt: "Hábito sólido mantido por 3 ou mais dias consecutivos. Cria uma couraça psicológica contra pânico e depressão no apocalipse.",
            en: "Solid routine maintained for 3+ consecutive days. Creates a psychological armor against panic and gloom."
        }
    },
    {
        id: "lv_spotless_home",
        name: { pt: "Casa Impecável", en: "Spotless Sanctuary" },
        type: "positive",
        icon: "assets/moodles/moodle_concentrating.png",
        scoreRange: "0% Squalor na Base",
        description: {
            pt: "Ambiente 100% desinfetado e sem poeira. Acelera o ganho de XP em leitura de livros de habilidades e estudo de fitas VHS.",
            en: "100% disinfected, dust-free environment. Accelerates skill book reading and VHS study XP multiplier."
        }
    },
    {
        id: "lv_relieved",
        name: { pt: "Aliviado (Pós-Sanitário)", en: "Relieved" },
        type: "positive",
        icon: "assets/moodles/lv_comfort_1.png",
        scoreRange: "Uso do Vaso com Papel",
        description: {
            pt: "Sensação revigorante de bem-estar após utilizar privada higienizada com papel higiênico. Zera o estresse acumulado de aperto.",
            en: "Rejuvenating comfort after using clean toilet with toilet paper. Wipes out urgency stress."
        }
    },
    {
        id: "lv_toilet_need",
        name: { pt: "Aperto Sanitário (Bexiga)", en: "Toilet Urgency" },
        type: "negative",
        icon: "assets/moodles/moodle_discomfort.png",
        scoreRange: "Necessidade Biológica",
        description: {
            pt: "O sobrevivente precisa de alívio com urgência. Ignorar provoca desconforto, perda de velocidade de corrida e estresse.",
            en: "Survivor urgently needs a restroom. Neglecting triggers physical discomfort, slower sprint and stress."
        }
    },
    {
        id: "lv_squalor_1",
        name: { pt: "Poeira & Desordem (Squalor 1)", en: "Dust & Disarray (Squalor 1)" },
        type: "negative",
        icon: "assets/moodles/lv_squalor_1.png",
        scoreRange: "15 - 29% Sujeira",
        description: {
            pt: "Poeira acumulada e pegadas de lama. Alerta visual no inspetor [K] recomendando varrição com vassoura.",
            en: "Accumulated dust and mud footprints. Visual notification in [K] inspector suggesting sweeping."
        }
    },
    {
        id: "lv_squalor_2",
        name: { pt: "Moscas & Sujeira (Squalor 2)", en: "Flies & Filth (Squalor 2)" },
        type: "negative",
        icon: "assets/moodles/lv_squalor_2.png",
        scoreRange: "30 - 49% Sujeira",
        description: {
            pt: "Zumbido de moscas perceptível, poças secas ou sangue. Causa desconforto contínuo e impede sono profundo.",
            en: "Audible buzzing flies, dried gore and stains. Causes continuous restlessness, blocking deep sleep."
        }
    },
    {
        id: "lv_squalor_3",
        name: { pt: "Insalubridade Crítica (Squalor 3)", en: "Critical Squalor (Squalor 3)" },
        type: "negative",
        icon: "assets/moodles/lv_squalor_3.png",
        scoreRange: "50 - 74% Sujeira",
        description: {
            pt: "Sobrescreve imediatamente o conforto do cômodo para ZERO. Sobrevivente sente nojo e estresse crescente.",
            en: "Immediately forces room comfort to ZERO. Triggers revulsion, disgust and compounding stress."
        }
    },
    {
        id: "lv_squalor_4",
        name: { pt: "Ninho de Pestilência (Squalor 4)", en: "Pestilence Nest (Squalor 4)" },
        type: "negative",
        icon: "assets/moodles/lv_squalor_4.png",
        scoreRange: "75 - 100% Sujeira",
        description: {
            pt: "Carne podre e cadáveres em decomposição no interior. Provoca náusea severa, vômito e risco de infecção.",
            en: "Rotten food and corpses inside. Triggers severe room nausea, retching and infection hazards."
        }
    },
    {
        id: "lv_aquecido",
        name: { pt: "Aquecido & Confortável", en: "Warm & Cozy" },
        type: "positive",
        icon: "assets/moodles/moodle_hot.png",
        scoreRange: "Conforto Térmico no Lar",
        description: {
            pt: "Ambiente aquecido com lareira ou fogão ativo no frio. Mantém a temperatura estável, acelera em 40% a cura de resfriados e traz conforto.",
            en: "Heated refuge with active stove or fireplace in cold weather. Stabilizes temperature, accelerates cold recovery by 40%."
        }
    },
    {
        id: "lv_alerta",
        name: { pt: "Alerta & Focado (Santuário)", en: "Alert & Focused (Sanctuary)" },
        type: "positive",
        icon: "assets/moodles/moodle_concentrating.png",
        scoreRange: "Santuário Protegido (Tier 3-4)",
        description: {
            pt: "Mente serena e base segura conferem reflexos aguçados. Suprime o pânico inicial ao avistar zumbis invadindo o perímetro.",
            en: "Tranquil mind and secure sanctuary sharpen combat reflexes. Suppresses sudden panic when hostiles breach the perimeter."
        }
    },
    {
        id: "lv_loot_luck",
        name: { pt: "Foco de Explorador (Loot Luck)", en: "Scavenger's Focus (Loot Luck)" },
        type: "positive",
        icon: "assets/moodles/moodle_happy.png",
        scoreRange: "Base Impecável + Mente Plena",
        description: {
            pt: "Ao sair em expedição bem descansado e com a base 100% organizada, o sobrevivente ganha percepção aguçada: chance extra de encontrar itens raros em contêineres intactos.",
            en: "Embarking on expeditions well-rested from a spotless base grants keen perception: extra roll for rare loot inside unopened containers."
        }
    }
];

