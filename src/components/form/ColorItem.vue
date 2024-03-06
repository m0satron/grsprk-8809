<template>
  <div class="color-item display-inline-block" :class="colorClass" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Color } from '@/types/Color'

const props = defineProps<{
  color: Color
  selected: boolean
}>()

const colorClass = computed(() => {
  return `bg-color-${props.color === 'white' ? 'white-plain' : props.color} ${props.selected ? 'selected' : ''}`
})
</script>

<style scoped lang="scss">
@import '@/assets/variables/colors.scss';
@import '@/assets/functions/opacity.scss';

.color-item {
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  transition: all 0.3s ease;
}

.color-item:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.selected {
  box-shadow: 0 0 0 0.2rem opacity($gray, 0.6);
}
</style>
