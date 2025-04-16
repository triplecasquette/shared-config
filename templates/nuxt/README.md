# 🚀 Template Nuxt — Configs

Configuration prête à l’emploi pour un projet Nuxt 3, avec :
- ESLint Flat Config (`eslint.config.mjs`)
- Prettier + plugin Tailwind CSS (`prettier.config.cjs`)
- `.editorconfig` et `.vscode/settings.json`
- Structure de projet modulaire (atoms, composables, domain, etc.)

---

## ✅ Installation rapide

```bash
pnpm create nuxt@latest
cd mon-app
degit triplecasquette/shared-config/templates/nuxt . --force
pnpm install
```

### 📦 Dépendances à ajouter

```bash
pnpm add -D eslint prettier prettier-plugin-tailwindcss   eslint-plugin-vue eslint-plugin-unused-imports   @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

## 🛠 Structure de projet incluse

```txt
components/
  ├── atoms/
  ├── molecules/
  └── organisms/
composables/
layouts/
pages/
plugins/
src/
  ├── assets/
  ├── domain/
  ├── schemas/
  ├── services/
  ├── stores/
  ├── types/
  └── utils/
```

---

## 🚧 Setup (Nuxt officiel)

```bash
pnpm install
```

## 💻 Lancer le serveur de dev

```bash
pnpm dev
```

## 📦 Build de production

```bash
pnpm build
```

## 🔍 Preview locale du build

```bash
pnpm preview
```

---

📚 Plus d'infos sur la [documentation officielle de Nuxt](https://nuxt.com/docs/getting-started/introduction)
