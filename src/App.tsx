import { Meters } from './components/Meters'
import { EVENTS } from './events'
import { useGame } from './store'

export default function App() {
  const event = EVENTS[useGame((s) => s.eventIndex)]
  const choose = useGame((s) => s.choose)

  return (
    <main className="stage">
      <Meters />
      <div className="scene">
        <div className="textbox">{event.text}</div>
        <div className="throne">
          <img className="stainedglass" src="/stainedglass.png" alt="" />
          <img className="sofa" src="/sofa.png" alt="" />
          <img className="cat" src="/cat.png" alt="" />
          <img className="citizen" src="/citizen.png" alt="" />
          <div className="choices">
            {event.choices.map((choice, i) => (
              <button
                key={choice.label}
                className="choice"
                type="button"
                onClick={() => choose(i)}
              >
                {choice.label}
              </button>
            ))}
          </div>
        </div>
       <img className="mats" src="/mats.png" alt="materials" />
       <img className="money" src="/money.png" alt="dough"/>
       <img className="pop" src="/population.png" alt="cats"/>
       <img className="happy" src="/happy.png"/>
    </div>
    </main>
  )
}
