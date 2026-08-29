import { Meters } from './components/Meters'

export default function App() {
  return (
    <main className="stage">
      <Meters />
      <div className="textbox">hi felis</div>
      <div className="scene">
        <div className="throne">
          <img className="stainedglass" src="/stainedglass.png" alt="" />
          <img className="sofa" src="/sofa.png" alt="" />
          <img className="cat" src="/cat.png" alt="" />
          <img className="citizen" src="/citizen.png" alt="" />
          <div className="choices">
            {['1', '2', '3', '4'].map((label) => (
              <button key={label} className="choice" type="button">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
