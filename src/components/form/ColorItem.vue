<template>
  <div class="color-item" :class="colorClass" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Color } from '@/types/Color'

const props = defineProps<{
  color: Color
}>()

const colorClass = computed(() => `bg-color-${props.color}`)
</script>

<style scoped lang="scss">
@import '@/assets/variables/colors.scss';
@import '@/assets/functions/opacity.scss';

.color-item {
  display: inline-block;
  cursor: pointer;
  width: 2.1rem;
  height: 2.1rem;
  transition:
    background-color 300ms,
    border-color 300ms,
    box-shadow 300ms;
}

.color-item:hover {
  box-shadow: 0 0 0 0.2rem opacity($gray, 0.8);
  transition: transform 0.3s ease;
}
</style>
