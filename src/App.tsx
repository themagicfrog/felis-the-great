import { Meters } from './components/Meters'

export default function App() {
  return (
    <main className="stage">
      <Meters />
      <div className="scene">
        <div className="throne">
          <img className="sofa" src="/sofa.png" alt="" />
          <img className="cat" src="/cat.png" alt="The cat king" />
          <img className="citizen" src="/citizen.png" alt="" />
        </div>
      </div>
    </main>
  )
}
