<template>
  <input type="checkbox" v-model="isChecked" />
  <div
    @click="toggle"
    class="checkbox-container checkbox rounded-s border-xl"
    :class="{
      'border-green bg-color-green': isChecked,
      'bg-color-white': !isChecked
    }"
  >
    <AkCheck v-if="isChecked" class="color-white icon" />
    <div class="rounded-l hoverstate" />
  </div>
</template>

<script setup lang="ts">
import { AkCheck } from '@kalimahapps/vue-icons'
import { ref, watchEffect } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: Boolean
}>()

const isChecked = ref(props.modelValue)

watchEffect(() => (isChecked.value = props.modelValue))

const toggle = () => {
  isChecked.value = !isChecked.value
  emit('update:modelValue', isChecked.value)
}
</script>

<style scoped lang="scss">
@import '@/assets/variables/colors.scss';
@import '@/assets/functions/opacity.scss';

input {
  display: none;
}

.checkbox-container {
  display: inline-block;
  cursor: pointer;
  width: 2.1rem;
  height: 2.1rem;
  position: relative;
  transition:
    background-color 300ms,
    border-color 300ms,
    box-shadow 300ms;
}

.hoverstate {
  opacity: 0;
  width: 4.2rem;
  height: 4.2rem;
  position: absolute;
  top: -1.2rem;
  left: -1.2rem;
  z-index: 0;
  background-color: opacity($green-light, 0.8);
  transition: opacity 300ms ease;
}

.checkbox-container:hover {
  .hoverstate {
    opacity: 1;
    transition: opacity 300ms ease;
  }
}

.icon {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
}
</style>
