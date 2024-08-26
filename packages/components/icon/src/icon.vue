<template>
  <i :class="bem.b()" :style="style">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { createNameSpace } from '@cy-design/utils/create'
import { iconProps } from './icon'

defineOptions({
  name: 'CyIcon',
  inheritAttrs: false,
})

const bem = createNameSpace('icon')

const props = defineProps(iconProps)

const style = computed(() => {
  if (!props.size && !props.color) return {}

  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {}),
  }
})
</script>
