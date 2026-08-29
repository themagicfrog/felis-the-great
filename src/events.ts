import type { Effects } from './store'

export type Choice = {
  label: string
  effects: Effects
}

export type GameEvent = {
  id: string
  citizen: string
  text: string
  choices: Choice[]
}

export const EVENTS: GameEvent[] = [
  {
    id: 'event-1',
    citizen: '/citizen1.png',
    text: 'Hello your majesty, you’re such an inspiration for all of us! I have but one request, materials for me and my siblings to fix the bridge in our small county of Whishora! All of my fellow citizens of Whishora have been stranded from the rest of the kingdom, as we cannot swim across the river. I had to go to great lengths just to come to your palace. ',
    choices: [
      { label: 'Sure.', effects: { materials: -30, happiness: 10 } },
      { label: 'I apologize, not currently.', effects: { happiness: -40, population: -2 } },
    ],
  },
  {
    id: 'event-2',
    citizen: '/citizen2.png',
    text: 'Hey your majesty, me and my friend have a very large conundrum that we need your absolute command to determine. It was a very terrible Saturday when this happened you see, a group of vagrants encountered us in the West Forest, they had these hats! We couldn\'t get a good look at their faces, they were attacking us you see, they were large and pointed and jingly. The problem is that afterward we couldn\'t determine whether the criminals were of elvish descent or gnome descent, what are your thoughts? This is terribly important to the state of our friendship and the economy of the kingdom!',
    choices: [
      { label: 'Gnome', effects: { money: -30 } },
      { label: 'Elvish', effects: { happiness: 30, money: 5 } },
    ],
  },
  {
    id: 'event-3',
    citizen: '/citizen3.png',
    text: 'Your Majesty! Can you finally tell us when you\'re going to end aid to the North County from our enemies! The kind citizens of our town have not been able to starve starting from last Sunday, which is of course not accounting for their limited food supply which hadn\'t ran out this saturday. Which is what I would say if it wasn\'t not the current situation, because the opposite is happening! So that is why I need the share of gold written on this contract.',
    choices: [
      { label: 'Of course', effects: { money: -30, population: 20 } },
      { label: 'No, I\'m not a fool', effects: { population: -40 } },
    ],
  },
  {
<<<<<<< HEAD
    id: 'event-5',
=======
    id: 'event-4',
    citizen: '/citizen4.png',
    text: 'Your Highness, my little boy got lost in the West Forest a couple of days ago and I haven\'t seen him since. Since you are the person with the largest knowledge of the kingdom, could you have any idea what happened to him? Please, I\'m so worried for him…',
    choices: [
      { label: 'I am afraid that he may be in the next realm over…', effects: { money: 10, happiness: -40 } },
      { label: 'Actually someone found a child in the forest last week…', effects: { happiness: 30, money: -20, population: 5 } },
    ],
  },
  {
    id: 'event-5',
    citizen: '/citizen5.png',
>>>>>>> c0da9085dd9002568d2f05eeaee65733df2a0f18
    text: 'Good day your majesty, I am the duke of Meowlia, that bastard duke of Furcar has been stealing my people from their own homes as an intimidation technique, all to get his damned sheep back, SHEEP, please knock some reason into that fool before I go and claw his tail off myself.',
    choices: [
      { label: 'He sounds terrible, of course I will help', effects: { population: 25, materials:-35 } },
      { label: 'Have you considered that you were the one who stole the sheep', effects: { happiness: 40, money: -20, population: -20 } },
<<<<<<< HEAD
    ]
    },
 {
    id:  'event-6',
=======
    ],
  },
  {
    id: 'event-6',
    citizen: '/citizen6.png',
>>>>>>> c0da9085dd9002568d2f05eeaee65733df2a0f18
    text: 'Hello your highness. this is extremely urgent, our sacred sheep blessed by the magnaminous lord KITAM, their lineage of fleecy glory has existed in our area for the past 40 sun cycles. but the issue is that we only have one breeding ewe left after those blasphemers from Mewtropolis stole nearly all of our glorious sheep. Please do something before they get striked down from the heavens as the terrible people they are.',
    choices: [
      { label: 'that sounds terrible!, I will notify them immidiately', effects: { money: 15, happiness: -10 } },
      { label: 'werent you the ones that took their people as recompense?', effects: { happiness: 20, money: -20, population: 5 } },
    ],
<<<<<<< HEAD
  }
]
=======
  },
  {
    id: 'event-7',
    citizen: '/citizen7.png',
    text: 'Hello Felis.',
    choices: [
      { label: '1', effects: { money: 15 } }
    ],
  }
]
>>>>>>> c0da9085dd9002568d2f05eeaee65733df2a0f18
