import type { Effects } from './store'

export type Choice = {
  label: string
  effects: Effects
}

export type GameEvent = {
  id: string
  text: string
  choices: Choice[]
}

export const EVENTS: GameEvent[] = [
  {
    id: 'event-1',
    text: 'Event 1 text',
    choices: [
      { label: '1', effects: { money: 15, happiness: -10 } },
      { label: '2', effects: { happiness: 5, money: -5 } },
      { label: '3', effects: { money: 8, happiness: -2 } },
      { label: '4', effects: { happiness: 20, money: -20, population: 5 } },
    ],
  },
  {
    id: 'event-2',
    text: 'Event 2 text',
    choices: [
      { label: '1', effects: { money: 12, materials: -10 } },
      { label: '2', effects: { materials: 15 } },
      { label: '3', effects: { happiness: 15, materials: -15 } },
      { label: '4', effects: { materials: 5, money: -8, population: 3 } },
    ],
  },
  {
    id: 'event-3',
    text: 'Event 3 text',
    choices: [
      { label: '1', effects: { money: 15, happiness: -10 } },
      { label: '2', effects: { happiness: 5, money: -5 } },
      { label: '3', effects: { money: 8, happiness: -2 } },
      { label: '4', effects: { happiness: 20, money: -20, population: 5 } },
    ],
  },
]
