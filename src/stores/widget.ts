import { ref } from 'vue'
import { defineStore } from 'pinia'
import { mockData } from './mockData'
import type { Widget } from '@/types/Widget'
import type { Color } from '@/types/Color'

const data = ref<Widget[]>(mockData)

export const useWidgetStore = defineStore('widgets', {
  state: () => ({
    data
  }),
  getters: {
    widgets: ({ data }) => data
  },
  actions: {
    setColor(id: number, color: Color) {
      const widget = this.data.find((widget) => widget.id === id)
      if (widget) widget.selectedColor = color
    },

    setActive(id: number, isActive: boolean) {
      const widget = this.data.find((widget) => widget.id === id)
      if (widget) widget.active = isActive
    },

    setLinked(id: number, isLinked: boolean) {
      const widget = this.data.find((widget) => widget.id === id)
      if (widget) widget.active = isLinked
    }
  }
})
