# 🧩 Config Vincent

📦 Templates de configuration partagés pour projets JavaScript/TypeScript modernes :  
**Nuxt 3, Next.js App Router, Prettier, ESLint Flat Config, Tailwind v4 ready.**

---

## 📁 Structure du repo

```
config-vincent/
├── shared/             # Fichiers communs à tous les projets (Prettier, .editorconfig, VSCode)
├── templates/
│   ├── nuxt/           # Configs spécifiques Nuxt 3 (ESLint, Prettier, VSCode)
│   └── next/           # Configs spécifiques Next.js App Router (ESLint, Prettier, VSCode)
```

---

## ⚡ Utilisation

1. **Crée ton projet comme d'habitude** :

```bash
pnpm create nuxt@latest     # ou
npx create-next-app mon-app
cd mon-app
```

2. **Ajoute les fichiers de config depuis ce repo** :

### ➕ Pour Nuxt :

```bash
npx degit vincent/config-vincent/templates/nuxt .
```

### ➕ Pour Next :

```bash
npx degit vincent/config-vincent/templates/next .
```

3. **Installe les dépendances nécessaires** :

### 🔧 Dépendances communes

```bash
pnpm add -D prettier prettier-plugin-tailwindcss eslint \
  eslint-plugin-unused-imports @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### ➕ Nuxt :

```bash
pnpm add -D eslint-plugin-vue
```

### ➕ Next :

```bash
pnpm add -D eslint-plugin-react
```

---

## 📁 Détail des fichiers

| Fichier                  | Description |
|--------------------------|-------------|
| `eslint.config.mjs`      | ESLint Flat Config propre au framework |
| `prettier.config.cjs`    | Config Prettier avec plugin Tailwind |
| `.vscode/settings.json`  | Formatage automatique sans extensions |
| `.editorconfig`          | Standardisation des espaces/retours à la ligne |

---

## 🔮 Pourquoi ce repo ?

- 🔁 **Réutilisable** sur tous les projets
- ✅ **Zéro dépendance magique**
- 🧼 **Fichiers copiés en clair**, modifiables localement
- 💡 Compatible Nuxt 3, Next.js 14, Tailwind CSS v4, ESLint Flat, Prettier stable

---

## 🧠 À venir (optionnel)

- Template `node/` pour scripts, CLI ou lib perso
- Template `lib/` pour packages npm
- Config `vitest`, `playwright`, `tsup`, etc.

---

**🚀 Utilise. Modifie. Réutilise. Et reste propre.**
