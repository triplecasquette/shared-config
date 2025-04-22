## 🎨 Générer un thème VSCode personnalisé

Un script permet de générer automatiquement un thème VSCode cohérent à partir d'une couleur principale (ex: couleur `peacock` du design system du projet).

Cela crée un fichier `.vscode/theme.generated.json` avec :
- `workbench.colorCustomizations` complet
- `peacock.color`
- dérivés automatiques (hover, foreground, transparent, etc.)

### ▶️ Génération du thème

```bash
pnpm dlx tsx ./.vscode/generate-vscode-theme.ts
```

Le résultat sera disponible dans `.vscode/theme.generated.json`, prêt à être copié dans `.vscode/settings.json`.

> La couleur source peut être changée dans le fichier `.vscode/generate-vscode-theme.ts` :
> 
> ```ts
> const base = colord('#f35987')
> ```
