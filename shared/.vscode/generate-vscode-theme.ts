import { colord } from 'colord'
import fs from 'fs'

const base = colord('#f35987') // ta couleur principale (peacock)
const bg = base.darken(0.1).toHex()
const fg = colord('#15202b').toHex()
const fgTrans = colord(fg).alpha(0.6).toRgbString()
const light = base.lighten(0.4).toHex()
const hover = base.darken(0.2).toHex()
const inactiveBg = base.alpha(0.6).toRgbString()

const vscodeConfig = {
  'workbench.colorCustomizations': {
    'activityBar.activeBackground': base.toHex(),
    'activityBar.background': base.toHex(),
    'activityBar.foreground': fg,
    'activityBar.inactiveForeground': fgTrans,
    'activityBarBadge.background': light,
    'activityBarBadge.foreground': fg,
    'commandCenter.border': fgTrans,
    'sash.hoverBorder': base.toHex(),
    'statusBar.background': base.toHex(),
    'statusBar.foreground': fg,
    'statusBarItem.hoverBackground': hover,
    'statusBarItem.remoteBackground': base.toHex(),
    'statusBarItem.remoteForeground': fg,
    'titleBar.activeBackground': base.toHex(),
    'titleBar.activeForeground': fg,
    'titleBar.inactiveBackground': inactiveBg,
    'titleBar.inactiveForeground': fgTrans
  },
  'peacock.color': base.toHex()
}

fs.writeFileSync('./.vscode/theme.generated.json', JSON.stringify(vscodeConfig, null, 2))
