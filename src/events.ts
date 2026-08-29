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
    text: 'Hello your majesty, you’re such an inspiration for all of us! I have but one request, materials for me and my siblings to fix the bridge in our small county of Whishora!',
    choices: [
      { label: 'yes', effects: { money: 15, happiness: -10 } },
      { label: 'no', effects: { happiness: 20, money: -20, population: 5 } },
    ],
  },
  {
    id: 'event-2',
    text: 'Hey your majesty, me and my friend have a very large conundrum that we need your absolute command to determine. It was a very terrible Saturday when this happened you see, a group of vagrants encountered us in the West Forest, they had these hats! We couldn’t get a good look at their faces, they were attacking us you see, they were large and pointed and jingly. The problem is that afterward we couldn’t determine whether the criminals were of elvish descent or gnome descent, what are your thoughts? This is terribly important to the state of our friendship and the economy of the kingdom!',
    choices: [
      { label: '1', effects: { money: 12, materials: -10 } },
      { label: '2', effects: { happiness: 15, materials: -15 } },
    ],
  },
  {
    id: 'event-3',
    text: 'Event 3 text',
    choices: [
      { label: '1', effects: { money: 15, happiness: -10 } },
      { label: '2', effects: { happiness: 20, money: -20, population: 5 } },
    ],
  },
]
