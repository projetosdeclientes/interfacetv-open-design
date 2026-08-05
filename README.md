# Interface TV V2

Reconstrução do site institucional da Interface TV em React + TypeScript, conforme
`ESPECIFICACAO_ARQUITETURA_V2.md`, `ESPECIFICACAO_FUNCIONAL_V2.md` e
`REGRAS_DE_IMPLEMENTACAO.md`.

## Stack

- Vite 6 + React 19 + TypeScript 5 (strict)
- Tailwind CSS v3.4
- Framer Motion 11 + Three.js r183
- React Router v6
- Deploy: Netlify (SPA redirect + cache imutável em assets)

## Scripts

```bash
npm run dev       # Dev server com HMR
npm run build     # TypeScript check → Vite build → gzip/brotli
npm run preview   # Preview do build local
npm run typecheck # Verificação de tipos
npm run lint      # ESLint
```

## Estrutura

O projeto segue a estrutura de pastas definida na seção 3 da especificação de
arquitetura (src/app, components/{ui,layout,shared,animated}, pages, sections,
data, hooks, lib, animations, styles, types, constants). Alias `@` → `src/`.
