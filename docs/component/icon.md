<!-- markdownlint-disable -->

# Icon

Cy Design provides a set of common icons.

## Icon Usage

- Cy Design recommends using [xicons](https://www.xicons.org) as the icon library.

```shell
pnpm add @vicons/ionicons5
```

- If you want to **use directly** like the example, you need to globally register the components before using it.

<script setup lang='ts'>
import { Snow } from '@vicons/ionicons5'
</script>

<div>
  <cy-icon color='#0076f6' size='40'>
    <Snow />
  </cy-icon>
</div>

```vue
<script setup lang="ts">
import { Snow } from '@vicons/ionicons5'
</script>

<template>
  <div>
    <cy-icon color="#0076f6" size="40">
      <Snow />
    </cy-icon>
  </div>
</template>
```

## API

### Attributes

| Name  | Description                | Type                | Default                |
| ----- | -------------------------- | ------------------- | ---------------------- |
| color | SVG tag's fill attribute   | `string`            | inherit from color     |
| size  | SVG icon size, size x size | `number` / `string` | inherit from font size |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
