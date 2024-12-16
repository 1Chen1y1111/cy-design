<script setup lang="ts">
import { computed } from 'vue'
import { createNameSpace } from '@cy-design/utils/create'
import { _IconProps } from './types'

defineOptions({
  name: 'CyIcon',
  inheritAttrs: false,
})

const bem = createNameSpace('icon')

const props = defineProps(_IconProps)

const style = computed(() => {
  if (!props.size && !props.color) return {}

  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {}),
  }
})
</script>

<template>
  <i :class="bem.b()" :style="style">
    <slot />
  </i>
</template>
