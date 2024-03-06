<template>
  <div class="bg-color-white widget-container rounded-m">
    <h1>
      <slot name="title"></slot>
      Per product widgets
    </h1>
    <hr class="divider border-m border-gray" />

    <div class="widget-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/assets/variables/colors.scss';
@import '@/assets/functions/opacity.scss';

.widget-container {
  padding: 2.25rem;
  width: fit-content;
  height: fit-content;
  box-shadow: -0.5rem 1.1rem 3rem -13px opacity($black, 0.2);
}

hr {
  margin-bottom: 1.5rem;
}

.widget-content {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .widget-content {
    flex-direction: column;
  }
}
</style>
