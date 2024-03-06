<template>
  <div
    class="toggle-button bg-color-white border border-green-light rounded-xl"
    :class="{ 'is-on': isOn }"
    @click="toggle"
  >
    <div class="switch border border-beige rounded-xl bg-color-white"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const emit = defineEmits<{
  (event: 'update:modelValue'): void
}>()

const props = defineProps<{
  modelValue: boolean
}>()

const isOn = ref(props.modelValue)

watchEffect(() => (isOn.value = props.modelValue))

const toggle = () => {
  isOn.value = !isOn.value
  emit('update:modelValue', isOn.value)
}
</script>

<style scoped lang="scss">
@import '@/assets/variables/colors.scss';
@import '@/assets/variables/borders.scss';
@import '@/assets/functions/opacity.scss';

.toggle-button {
  width: 2.9rem;
  height: 1.33rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s ease;
  box-shadow: inset 0rem 0rem 0.2rem $gray;
}

.toggle-button:hover {
  .switch {
    box-shadow: 0 0 0 0.2rem opacity($green-light, 0.8);
    transition: transform 0.3s ease;
  }
}

.switch {
  height: 1.33rem;
  width: 1.33rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.1s ease;
}

.is-on {
  background-color: $green;
  .switch {
    transform: translateX(24px);
  }
}
</style>
