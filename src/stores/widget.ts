import { defineStore } from 'pinia'
import type { Widget } from '@/types/Widget'
import type { Color } from '@/types/Color'

export const useWidgetStore = defineStore('widgets', {
  state: () => ({ data: [] as Widget[] }),
  getters: {
    widgets: ({ data }) => data
  },
  actions: {
    async getWidgets() {
      const req = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets')
      const res = await req.json()
      this.data = res
    },
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
