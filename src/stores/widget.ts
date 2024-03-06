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
      try {
        const req = await fetch(import.meta.env.VITE_API_BASE_URL)
        const res = await req.json()
        this.data = res
      } catch(err) {
        //handle error in an appropriate way
      }
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
