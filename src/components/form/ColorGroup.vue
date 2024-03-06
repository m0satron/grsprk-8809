<template>
  <div class="color-group flex">
    <ColorItem
      v-for="color in colors"
      :key="color"
      :color="color"
      @click="() => setSelectedColor(color)"
      :selected="color === modelValue"
    />
  </div>
</template>

<script setup lang="ts">
import ColorItem from './ColorItem.vue'
import type { Color } from '@/types/Color'

const emit = defineEmits(['update:modelValue'])

defineProps<{
  modelValue: Color
}>()

const colors: Color[] = ['blue', 'green', 'beige', 'white', 'black']

const setSelectedColor = (color: Color) => emit('update:modelValue', color)
</script>

<style scoped lang="scss">
.color-group {
  gap: 0.5rem;
}
</style>
