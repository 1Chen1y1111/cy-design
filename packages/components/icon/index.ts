import { withInstall } from '@cy-design/utils/with-install'
// 整合 并导出
import _Icon from './src/index.vue'

export * from './src/types'

const Icon = withInstall(_Icon)

export default Icon // 可以通过 app.use 来使用，也可以通过 import 方式单独使用

// 接口自动合并
declare module 'vue' {
  export interface GlobalComponents {
    CyIcon: typeof Icon
  }
}
