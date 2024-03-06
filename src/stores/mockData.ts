import type { Widget } from '@/types/Widget'

export const mockData = [
  {
    id: 1 as const,
    type: 'carbon' as const,
    amount: 100 as const,
    action: 'collects' as const,
    active: true,
    linked: false,
    selectedColor: 'beige'
  },
  {
    id: 3,
    type: 'trees' as const,
    amount: 300 as const,
    action: 'plants' as const,
    active: true,
    linked: false,
    selectedColor: 'blue'
  },
  {
    id: 4,
    type: 'carbon' as const,
    amount: 400 as const,
    action: 'offsets' as const,
    active: false,
    linked: true,
    selectedColor: 'green'
  }
] as Widget[]
