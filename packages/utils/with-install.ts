import type { App, Component, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends Component>(comp: T) {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = comp as { name: string }
    app.component(name, comp)
  }
  return comp as SFCWithInstall<T>
}
