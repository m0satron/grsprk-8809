import type { Color } from './Color'
import type { Action } from './Action'
import type { ImpactType } from './ImpactType'

export type Widget = {
  id: number,
  type: ImpactType,
  amount: number,
  action: Action,
  active: boolean,
  linked: boolean,
  selectedColor: Color,
}