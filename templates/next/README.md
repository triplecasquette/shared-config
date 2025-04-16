# 🚀 Template Next.js — Configs

Configuration prête à l’emploi pour un projet Next.js (App Router).

Inclut :
- ESLint Flat Config (`eslint.config.mjs`)
- Prettier + Tailwind plugin (`prettier.config.cjs`)
- `.editorconfig` et `.vscode/settings.json`

### ✅ Utilisation

```bash
npx degit vincent/config-vincent/templates/next .

pnpm add -D eslint prettier prettier-plugin-tailwindcss \
  eslint-plugin-react eslint-plugin-unused-imports \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser
```