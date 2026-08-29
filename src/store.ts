import { create } from 'zustand'

export const RESOURCES = ['population', 'money', 'happiness', 'materials'] as const
export type Resource = (typeof RESOURCES)[number]

export const MIN = 0
export const MAX = 100

const INITIAL: Record<Resource, number> = {
  population: 50,
  money: 50,
  happiness: 50,
  materials: 50,
}

const clamp = (n: number) => Math.max(MIN, Math.min(MAX, n))

type GameState = {
  resources: Record<Resource, number>
  /** Apply a relative change, e.g. adjust('money', -10) */
  adjust: (resource: Resource, delta: number) => void
  /** Set an absolute value */
  setValue: (resource: Resource, value: number) => void
  reset: () => void
}

export const useGame = create<GameState>((set) => ({
  resources: { ...INITIAL },

  adjust: (resource, delta) =>
    set((s) => ({
      resources: { ...s.resources, [resource]: clamp(s.resources[resource] + delta) },
    })),

  setValue: (resource, value) =>
    set((s) => ({
      resources: { ...s.resources, [resource]: clamp(value) },
    })),

  reset: () => set({ resources: { ...INITIAL } }),
}))

// Dev convenience: poke the meters from the browser console.
//   game.getState().adjust('money', -20)
if (import.meta.env.DEV) {
  ;(globalThis as unknown as { game: typeof useGame }).game = useGame
}
