# Chronos — Pomodoro App (React + TypeScript + Vite)

Aplicativo Pomodoro simples feito com React, TypeScript e Vite. Gerencia
tarefas, ciclos e temporizador via Context + useReducer. Inclui histórico,
configurações de duração e rotas.

## Recursos

- Iniciar / interromper / completar tarefas
- Histórico de sessões
- Configurações de tempos (foco / descanso curto / descanso longo)
- Tipagem com TypeScript e estrutura modular

## Pré-requisitos

- Node.js 18+
- npm ou yarn

## Instalação

```bash
npm install
# ou
yarn
```

## Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra http://localhost:5173 (ou porta informada pelo Vite).

## Build e preview

```bash
npm run build
npm run preview
# ou
yarn build
yarn preview
```

## Testes e lint

Se existirem scripts de teste ou lint no package.json:

```bash
npm test
npm run lint
# ou
yarn test
yarn lint
```

## Estrutura principal

- src/contexts — Context + reducer das tarefas/temporizador
- src/components — componentes reutilizáveis (MainForm, History, Logo, etc.)
- src/pages — páginas / rotas
- src/models — tipos e modelos

## Contribuição

1. Fork → branch feature → PR
2. Mantenha código tipado e sem segredos no repositório
3. Escreva testes ao adicionar lógica crítica

## Licença

Escolha uma licença (ex.: MIT) e adicione um arquivo `LICENSE` se desejar.

## Notas

- Verifique `.gitignore` para não commitar `node_modules` ou `.env`.
- Para deploy em GitHub Pages / Netlify / Vercel, configure build e pasta
  `dist`.
