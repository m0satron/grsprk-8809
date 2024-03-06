<template>
  <div class="tooltip-icon" @mouseover="showTooltip = true">
    <CdInfo size="2rem" />
  </div>

  <Transition name="fade">
    <div
      v-if="showTooltip"
      class="tooltip rounded-s bg-color-white color-black"
      @mouseleave="showTooltip = false"
    >
      This widget links directly to your public profile so that you can easily share your impact
      with your customers. Turn it off here if you do not want the badge to link to it.

      <a :href="props.url" target="_blank" class="color-green"> View your public profile </a>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CdInfo } from '@kalimahapps/vue-icons'

const props = defineProps<{
  url: string
}>()

const showTooltip = ref(false)
</script>

<style scoped lang="scss">
@import '@/assets/variables/colors.scss';
@import '@/assets/functions/opacity.scss';

.tooltip {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 15.5rem;
  height: fit-content;
  text-align: center;
  padding: 0.6rem;
  transition: opacity 300ms ease-in-out;
  opacity: 1;
  position: absolute;
  z-index: 100;
  box-shadow: -0.5rem 1.1rem 3rem -13px opacity($black, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.tooltip-icon {
  position: relative;
}

a {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
