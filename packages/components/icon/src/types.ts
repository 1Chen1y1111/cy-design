import { ExtractPropTypes, PropType } from 'vue'

export const _IconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
} as const

export type IconProps = ExtractPropTypes<typeof _IconProps>
