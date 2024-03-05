<template>
  <div class="color-group">
    <ColorItem
      v-for="color in colors"
      :key="color"
      :color="color"
      @click="emit('select:color', color)"
    />
  </div>
</template>

<script setup lang="ts">
import ColorItem from './ColorItem.vue'
import type { Color } from '@/types/Color'

const emit = defineEmits<{
  (event: 'select:color', value: Color): void
}>()

const colors: Color[] = ['white', 'black', 'blue', 'green', 'beige']
</script>

<style scoped lang="scss">
.color-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
</style>
