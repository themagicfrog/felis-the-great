import { MAX, RESOURCES, useGame, type Resource } from '../store'

const LABELS: Record<Resource, string> = {
  population: 'Population',
  money: 'Money',
  happiness: 'Happiness',
  materials: 'Materials',
}

export function Meters() {
  const resources = useGame((s) => s.resources)

  return (
    <div className="meters">
      {RESOURCES.map((resource) => {
        const value = resources[resource]
        const label = LABELS[resource]

        return (
          <div className="meter" key={resource} data-resource={resource}>
            <div className="meter-head">
              <span className="meter-label">{label}</span>
            </div>
            <div
              className="meter-track"
              role="meter"
              aria-label={label}
              aria-valuenow={value}
              aria-valuemin={0}
              aria-valuemax={MAX}
            >
              <div className="meter-fill" style={{ width: `${(value / MAX) * 100}%` }} />
            </div>
          </div>
        )
      })}

      <img className="pop" src="/population.png" alt="" aria-hidden />
      <img className="money" src="/money.png" alt="" aria-hidden />
      <img className="happy" src="/happy.png" alt="" aria-hidden />
      <img className="mats" src="/mats.png" alt="" aria-hidden />
    </div>
  )
}
