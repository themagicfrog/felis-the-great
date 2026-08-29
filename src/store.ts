import { create } from 'zustand'
import { EVENTS } from './events'

export const RESOURCES = ['population', 'money', 'happiness', 'materials'] as const
export type Resource = (typeof RESOURCES)[number]

export const MIN = 0
export const MAX = 100

const INITIAL: Record<Resource, number> = {
  population: 20,
  money: 50,
  happiness: 50,
  materials: 50,
}


export type Effects = Partial<Record<Resource, number>>

const clamp = (n: number) => Math.max(MIN, Math.min(MAX, n))

type GameState = {
  resources: Record<Resource, number>

  eventIndex: number

  choose: (index: number) => void
  adjust: (resource: Resource, delta: number) => void
  applyEffects: (effects: Effects) => void
  setValue: (resource: Resource, value: number) => void
  reset: () => void
}

export const useGame = create<GameState>((set, get) => ({
  resources: { ...INITIAL },
  eventIndex: 0,

  choose: (index) => {
    const event = EVENTS[get().eventIndex]
    const choice = event?.choices[index]
    if (!choice) return
    get().applyEffects(choice.effects)
    set((s) => ({ eventIndex: (s.eventIndex + 1) % EVENTS.length }))
  },

  adjust: (resource, delta) =>
    set((s) => ({
      resources: { ...s.resources, [resource]: clamp(s.resources[resource] + delta) },
    })),

  applyEffects: (effects) =>
    set((s) => {
      const resources = { ...s.resources }
      for (const [resource, delta] of Object.entries(effects) as [Resource, number][]) {
        resources[resource] = clamp(resources[resource] + delta)
      }
      return { resources }
    }),

  setValue: (resource, value) =>
    set((s) => ({
      resources: { ...s.resources, [resource]: clamp(value) },
    })),

  reset: () => set({ resources: { ...INITIAL }, eventIndex: 0 }),
}))

// Dev convenience: poke the meters from the browser console.
//   game.getState().adjust('money', -20)
if (import.meta.env.DEV) {
  ;(globalThis as unknown as { game: typeof useGame }).game = useGame
}
