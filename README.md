# Housing Care System (Living House) - Web Portal, Wiki & GDD (v1.7.1)

Site oficial, Wiki Tática, Game Design Document (GDD), Enciclopédia de Itens, Calculadora de Ações Domésticas e Simulador de HUD interativo para o mod de **Project Zomboid Build 42**.

Inspirado na precisão industrial de interfaces táticas (estilo Escape from Tarkov / Hardcore Survival HUD) e na estética Soft Glass Dark Obsidian.

---

## 🌟 Recursos Principais (Atualizado v1.7.1)

- **Estética Dark Obsidian & Tactical Glass:** Interface com tons grafite escuro (`#0d0f14`), acentos em âmbar tático (`#de8f32`) e ciano elétrico (`#22d3ee`), tipografia técnica monoespaçada e painéis translúcidos de alta imersão.
- **100% Bilíngue (PT-BR / EN):** Motor de internacionalização instantâneo sem recarregamento de página, cobrindo todos os módulos técnicos, tabelas e calculadoras com persistência em `localStorage`.
- **Enciclopédia de Itens com Modal de Inspeção Tática:**
  - Tabela com busca em tempo real e filtros por categoria (Móveis, Higiene, Eletrônicos, Clutter/Decor, Utilidades).
  - Clique em qualquer linha para abrir o **Modal de Inspeção Estilo Tarkov** (`ItemInspectionModal`), exibindo ID de script real (`Base.Toothpaste`, `tile.furniture_bedding_01`), categoria de tier, peso, pontuação de conforto rebalanceada, durabilidade e dossiê tático de sobrevivência.
- **Calculadora de Tarefas & Crafting Doméstico (`#calculator`):**
  - Matriz interativa de ações: Limpeza com Esfregão/Água sanitária, Varrer com Vassoura, Arrumar Cama, Higiene Bucal (20 usos por tubo), Organização de Tralhas e Manutenção de Geradores.
  - Seletor de tempo planejado, exibindo durabilidade de ferramentas gasta, alívio de estresse/tédio gerado e ganho de conforto ou higiene bucal.
- **Simulador Interativo da HUD do Sobrevivente (`#simulator`):**
  - Controles deslizantes para Conforto, Squalor (Sujeira), Higiene Bucal, Clima Externo, Combustível e Água.
  - **Toggle de Posse de Residência (Base Claimed):** Simula a mecânica v1.7.1 onde casas neutras/não reivindicadas bloqueiam o acúmulo de bônus psicológicos, mostrando o alerta de "Casa Neutra".
  - Projeção de Moodles ativos em tempo real (Conforto Tiers 1-4, Sujeira e Nausea Tiers 1-4, Hálito Fresco, Estresse, XP Buff).
- **Documentação do Rebalanceamento v1.7.1:**
  - Economia de conforto nerfada: Móveis essenciais mantêm valor (10 pts), enquanto clutter/decorações 3D foram reduzidos para 0.1 ~ 0.6 pts com curva logarítmica de retornos decrescentes (100% -> 60% -> 35% -> 15% -> 5%).
  - Safehouse Dashboard (`[J]`) e Room Inspector (`[K]`).
  - Prevenção de crashes JVM de janelas trancadas e notificações de Halo de posse.

---

## 🚀 Como Fazer o Deploy no Vercel

### Opção 1: Via Vercel CLI
1. Abra um terminal na pasta da wiki (`.agent/website_wiki`):
   ```bash
   cd .agent/website_wiki
   ```
2. Execute o comando da Vercel:
   ```bash
   npx vercel
   ```
3. Siga as instruções no terminal (pressione Enter para aceitar os padrões). O site estará online imediatamente.

### Opção 2: Via Dashboard do Vercel (GitHub)
1. Faça o commit e push do repositório para o GitHub.
2. No painel do Vercel, clique em **Add New Project**.
3. Selecione este repositório.
4. Em **Root Directory**, configure para `.agent/website_wiki`.
5. Clique em **Deploy** (não precisa de nenhum Build Command ou Output Directory, pois é puramente estático).

---

## 💻 Teste Local Rápido

Para testar no seu navegador sem instalar nada:
1. Dê um duplo clique diretamente no arquivo `index.html`.
2. Ou inicie um servidor local leve:
   ```bash
   # Usando Python
   python -m http.server 3000

   # Ou usando npx serve
   npx serve .
   ```
3. Acesse `http://localhost:3000` no seu navegador.

---

## 📂 Estrutura de Arquivos

```text
.agent/website_wiki/
├── index.html         # Estrutura semântica SPA (Wiki, Módulos, Enciclopédia, Calculadora, HUD Simulator, Sandbox)
├── style.css          # Design System Dark Obsidian / Tactical Glass com animações e modal Tarkov
├── app.js             # Lógica SPA, Calculadora de Ações, Modal de Inspeção, I18n Engine e HUD Simulator
├── translations.js    # Dicionário PT-BR / EN completo, Banco de Itens v1.7.1 e Opções de Sandbox
└── README.md          # Documentação do portal e instruções de deploy
```
