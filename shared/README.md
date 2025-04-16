# ⚙️ Shared Configs

Fichiers de configuration communs à tous les projets (Nuxt 3, Next.js, etc.)

### Contenu :
- `prettier.config.cjs` avec plugin Tailwind CSS intégré
- `.editorconfig` standard (2 espaces, UTF-8, LF)
- `.vscode/settings.json` minimaliste (format on save, Tailwind, etc.)

---

## 📦 Utilisation

À copier à la racine de tout nouveau projet :

```bash
degit triplecasquette/shared-config/shared . --force
```

> ⚠️ Écrase les fichiers existants si présents (ex : `.vscode/settings.json`)

---

## 💡 Astuce

Ces fichiers sont utilisés comme source unique dans tous les templates (`nuxt`, `next`, etc.)  
→ En les modifiant ici, tous les symlinks restent à jour dans le repo.
