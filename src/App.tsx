import { useEffect, useState } from 'react'
import { Meters } from './components/Meters'
import { EVENTS } from './events'
import { useGame } from './store'

const INTRO =
  'Wow! I am finally the ruler of the cat kingdom! Today is my first day ruling, I am so excited. This will definitely be the perfect day. Answering my citizens should be easy…'

export default function App() {
  const event = EVENTS[useGame((s) => s.eventIndex)]
  const choose = useGame((s) => s.choose)
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    if (!intro) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') setIntro(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [intro])

  if (!event) {
    return (
      <main className="ending">
        <img className="reallife" src="/reallife.png" alt="" />
        <div className="fadeout" />
      </main>
    )
  }

  return (
    <main className="stage">
      <Meters />
      <div className="scene">
        {intro && (
          <div className="intro">
            {INTRO}
            <span className="intro-hint">Enter to continue</span>
          </div>
        )}
        <div className="textbox">{event.text}</div>
        <div className="throne">
          <img className="stainedglass" src="/stainedglass.png" alt="" />
          <img className="sofa" src="/sofa.png" alt="" />
          <img className="cat" src="/cat.png" alt="" />
          <img className="citizen" src={event.citizen} alt="" key={event.id} />
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
      </div>
    </main>
  )
}
