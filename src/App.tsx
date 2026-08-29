import { Meters } from './components/Meters'

export default function App() {
  return (
    <main className="stage">
      <Meters />
      <div className="scene">
        <div className="throne">
          <img className="sofa" src="/sofa.png" alt="" />
          <img className="cat" src="/cat.png" alt="The cat king" />
        </div>
      </div>
    </main>
  )
}
