# PZ: Cozy Living - Web Portal, Wiki & GDD Oficial (v1.6.0)

Site oficial, Wiki Tática, Game Design Document (GDD), Enciclopédia de Itens, Calculadora de Ações Domésticas, Manual Operacional (How-To Guide) e Simulador de HUD interativo para o mod de **Project Zomboid Build 42**.

Inspirado na precisão industrial de interfaces táticas (estilo Escape from Tarkov / Hardcore Survival HUD) e na estética Soft Glass Dark Obsidian.

---

## 🌟 Recursos Principais (Atualizado v1.6.0)

- **Estética Dark Obsidian & Tactical Glass:** Interface com tons grafite escuro (`#080c14`), acentos em teal tático (`#2aa69a`) e areia (`#d4a373`), tipografia técnica monoespaçada, scanlines imersivas e painéis translúcidos de alto nível.
- **100% Bilíngue (PT-BR / EN):** Motor de internacionalização instantâneo sem recarregamento de página, cobrindo todos os módulos técnicos, tabelas, calculadoras e guias com persistência em `localStorage`.
- **Manual de Operações & Guia de Sistemas (How-To Guide):** 14 sistemas completos detalhando o porquê de cada mecânica, passo a passo in-game, requisitos de insumos com sprites autênticos e impacto de cuidar vs negligenciar.
- **Galeria Tática de Moodles & Efeitos Mentais (Build 42):** Visualização dos 4 Tiers de Conforto (*Lar Doce Lar* a *Santuário Inviolável*), 4 Tiers de Insalubridade (*Poeira* a *Ninho de Pestilência*) e status reativos vanilla com sprites autênticos extraídos das wikis oficiais de PZ.
- **Enciclopédia de Itens com Modal de Inspeção Tática:**
  - Tabela com slots de inventário no estilo PZ/Tarkov, busca em tempo real e filtros por categoria.
  - Clique em qualquer linha para abrir o **Modal de Inspeção Estilo Tarkov** (`#itemInspectionModal`), exibindo sprite ampliado em 72x72px com mira crosshair militar, ID de script real (`Base.Toothbrush`, `Base.ToiletPaper`), categoria, peso, pontuação de conforto e fórmula da curva de saturação decrescente.
- **Calculadora de Tarefas & Homemaking (`#calculator`):**
  - Matriz interativa de ações: Limpeza de Piso com Esfregão/Água sanitária, Varrer com Vassoura, Arrumar Cama, Higiene Bucal na Pia, Desinfecção de Louças Sanitárias e Lareira de Inverno.
  - Exibe ferramentas necessárias, tempo de execução estimado, cooldown anti-spam e bônus mentais com ícones.
- **Room Blueprint & Decor Sandbox (`#wiki`):**
  - Simulador de cômodo que calcula em tempo real a pontuação somada, barra de progresso, tier atingido e moodlet desbloqueado.

---

## 🚀 Como Executar Localmente

```bash
# Iniciar o servidor Node.js local na porta 3000
npm run dev
# ou
node server.js
```

Acesse `http://localhost:3000` no seu navegador.

---

## ☁️ Como Fazer o Deploy no Vercel

1. O projeto já inclui o arquivo `vercel.json` configurado na raiz.
2. No terminal:
   ```bash
   npx vercel
   ```
3. Ou conecte o repositório diretamente no painel do Vercel (Root Directory: `./`).

---

## 📂 Estrutura de Arquivos

```text
viccs_pz_housing_mod_website_wiki/
├── .agent/
│   └── overview/
│       └── PROJECT_STATUS.md       # Status síncrono e arquitetura do projeto
├── assets/
│   ├── icons/                      # 35 sprites autênticos de itens do PZ
│   └── moodles/                    # 30 sprites de moodlets (Tiers Conforto/Squalor e Vanilla)
├── index.html                      # SPA semântica completa
├── style.css                       # Design System Dark Obsidian e classes pixel-art
├── app.js                          # Lógica interativa, roteamento, modal Tarkov e I18n
├── translations.js                 # Dicionários PT-BR/EN, banco de itens e sandbox
├── server.js                       # Servidor local Node.js na porta 3000
├── download_assets.js              # Script de download de sprites das wikis
├── package.json                    # Scripts e manifesto do projeto
├── vercel.json                     # Regras de deploy e cabeçalhos de segurança
└── README.md                       # Documentação técnica
```
