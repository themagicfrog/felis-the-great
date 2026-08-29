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
       <img className="mats" src="/mats.png" alt="materials" />
       <img className="money" src="/money.png" alt="dough"/>
       <img className="pop" src="/population.png" alt="cats"/>
       <img className="happy" src="/happy.png"/>
    </div>
    </main>
  )
}
