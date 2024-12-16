<script setup lang="ts">
import { createNameSpace } from '@cy-design/utils/create'
import { computed } from 'vue'
import { _IconProps } from './types'

defineOptions({
  name: 'CyIcon',
  inheritAttrs: false,
})

const props = defineProps(_IconProps)

const bem = createNameSpace('icon')

const style = computed(() => {
  if (!props.size && !props.color)
    return {}

  return {
    ...(props.size ? { 'font-size': `${props.size}px` } : {}),
    ...(props.color ? { color: props.color } : {}),
  }
})
</script>

<template>
  <i :class="bem.b()" :style="style">
    <slot />
  </i>
</template>
