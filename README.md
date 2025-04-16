# 🧩 Shared Config

📦 Base de configuration réutilisable pour projets Nuxt 3, Next.js App Router, avec :
- ESLint (Flat config)
- Prettier + plugin Tailwind CSS
- `.editorconfig` et `.vscode/settings.json` standard
- Structure de projet pré-organisée

---

## 📦 Templates disponibles

- [`templates/nuxt`](./templates/nuxt) — Nuxt 3 avec structure Atom/Molecule/Organism, composables, plugins, domain logic, etc.
- [`templates/next`](./templates/next) — Next.js avec App Router (React 19 ready)

---

## 🚀 Utilisation (avec [pnpm](https://pnpm.io))

### Nuxt 3 :

```bash
pnpm create nuxt@latest
cd mon-app
degit triplecasquette/shared-config/templates/nuxt . --force
pnpm install
```

### Next.js :

```bash
pnpm create next-app mon-app
cd mon-app
pnpm dlx degit triplecasquette/shared-config/templates/next . --force
pnpm install
```

---

## 📁 Fichiers partagés

| Fichier                      | Description |
|------------------------------|-------------|
| `prettier.config.cjs`        | Config Prettier standardisée, avec plugin Tailwind |
| `.editorconfig`              | Indentation 2 espaces, UTF-8, fin de ligne LF |
| `.vscode/settings.json`      | Formatage automatique, règles Tailwind activées |

---

## 🧠 Astuces

- Les fichiers partagés sont en symlink dans chaque template → **modifie uniquement `shared/`**
- `degit` les transforme en vrais fichiers lors de l'installation
- Pour tester localement : crée un projet Nuxt/Next et applique la commande `pnpm dlx degit`

---

## 🔮 Pourquoi ce repo ?

- 🔁 **Réutilisable** sur tous les projets
- ✅ **Zéro dépendance**
- 🧼 **Fichiers copiés en clair**, modifiables localement
- 💡 Compatible Nuxt 3, Next.js 15, Tailwind CSS v4, ESLint Flat, Prettier stable

---

## 🧠 À venir (optionnel)

- Template `node/` pour scripts, CLI ou lib perso
- Template `lib/` pour packages npm
- Config `vitest`, `playwright`, `tsup`, etc.

---

**🚀 Utilise. Modifie. Réutilise. Et reste propre.**