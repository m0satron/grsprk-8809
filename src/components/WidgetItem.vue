<template>
  <div class="bg-color-white widget rounded-m">
    <div class="widget-header flex bg-color-blue rounded-m" :class="widgetHeaderClasses">
      <GreenSparkLogoGreen
        v-if="selectedColor === 'beige' || selectedColor === 'white'"
        class="widget-header__logo"
      />
      <GreenSparkLogo v-else class="widget-header__logo" />
      <div class="widget-header__content">
        <span class="widget-header__sub"> This product {{ action }} </span>
        <h3 class="text-bold widget-header__title">{{ amount }} {{ type }}</h3>
      </div>
    </div>

    <div class="widget-content flex flex-column justify-between">
      <div class="widget-content__item flex align-center justify-between text-xs">
        <div class="flex">
          <p class="color-green profile-link">Link to public profile</p>
          <ToolTip class="color-green" url="www.google.com" />
        </div>

        <CheckBox v-model="linked" />
      </div>

      <div class="widget-content__item flex align-center justify-between text-xs">
        Badge colour
        <ColorGroup :selectedColor="selectedColor" v-model="selectedColor" />
      </div>

      <div class="widget-content__item flex align-center justify-between text-xs">
        Activate badge
        <ToggleButton v-model="active" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Widget } from '@/types/Widget'
import GreenSparkLogo from '@/components/icons/GreenSparkLogo.vue'
import GreenSparkLogoGreen from '@/components/icons/GreenSparkLogoGreen.vue'
import ToolTip from './ToolTip.vue'
import ColorGroup from './form/ColorGroup.vue'
import ToggleButton from './form/ToggleButton.vue'
import CheckBox from './form/CheckBox.vue'
import { ref, watch, computed } from 'vue'
import type { Color } from '@/types/Color'

const props = defineProps<Widget>()

const linked = ref(props.linked)
const active = ref(props.active)
const selectedColor = ref(props.selectedColor)

const emit = defineEmits<{
  (event: 'update:linked', value: boolean): void
  (event: 'update:active', value: boolean): void
  (event: 'update:selectedColor', value: Color): void
}>()

const widgetHeaderClasses = computed(() => {
  const backgroundColor = `bg-color-${props.selectedColor}`
  const color =
    props.selectedColor === 'beige'
      ? 'color-green'
      : props.selectedColor === 'white'
        ? 'color-green'
        : 'color-white'

  return [backgroundColor, color]
})

watch(linked, (val) => emit('update:linked', val))
watch(active, (val) => emit('update:active', val))
watch(selectedColor, (val) => emit('update:selectedColor', val))
</script>

<style scoped lang="scss">
@import '@/assets/variables/colors.scss';
@import '@/assets/variables/typography.scss';
@import '@/assets/functions/opacity.scss';

.widget {
  width: 13.8rem;
  height: 10.4rem;
}

.widget-header {
  width: 100%;
  height: 4.1rem;
  padding: 0.6rem;
  &__logo {
    margin-right: 0.75rem;
  }

  &__sub {
    font-size: 0.75rem;
  }
}

.widget-content {
  margin-top: 0.625rem;
  gap: 0.84rem;

  &__item {
    width: 100%;
    color: $green;
  }
}
</style>
