<script setup lang="ts">
import WidgetContainer from './components/WidgetContainer.vue'
import WidgetItem from './components/WidgetItem.vue'
import { useWidgetStore } from './stores/widget'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const { widgets } = storeToRefs(useWidgetStore())

const { getWidgets, setColor, setLinked, setActive } = useWidgetStore()
onMounted(getWidgets)
</script>

<template>
  <main>
    <WidgetContainer>
      <template v-if="widgets && widgets.length">
        <WidgetItem
          v-for="widget in widgets"
          :key="widget.id"
          v-bind="widget"
          @update:linked="setLinked(widget.id, $event)"
          @update:active="setActive(widget.id, $event)"
          @update:selectedColor="setColor(widget.id, $event)"
        />
      </template>
    </WidgetContainer>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/variables/colors.scss';
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffff;
  padding: 2rem;
}
</style>
