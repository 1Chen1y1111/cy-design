// 整合 并导出
import { withInstall } from '@cy-design/utils/with-install'
import _Icon from './src/icon.vue'

export * from './src/icon'

const Icon = withInstall(_Icon)

export default Icon // 可以通过 app.use 来使用，也可以通过 import 方式单独使用

declare module 'vue' {
  export interface GlobalComponents {
    CyIcon: typeof Icon
  }
}
