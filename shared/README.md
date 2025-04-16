# ⚙️ Shared Configs

Fichiers de configuration communs à tous les projets (Nuxt 3, Next.js, etc.)

### Contenu :
- `prettier.config.cjs` — Configuration Prettier standardisée avec plugin Tailwind intégré (2 espaces, trailing comma, etc.)
- `.editorconfig` — Convention globale : UTF-8, LF, indentation 2 espaces, suppression des espaces inutiles
- `.vscode/settings.json` — Format automatique à la sauvegarde, tri des imports, prise en charge de Tailwind sans extensions nécessaires
- `.vscode/generate-vscode-theme.ts` — Script Node/TS pour générer une palette VSCode à partir d’une couleur principale
- `.vscode/README.md` — Documentation du script de thème et instructions d’usage


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
