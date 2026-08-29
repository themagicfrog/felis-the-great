import { MAX, RESOURCES, useGame, type Resource } from '../store'

const LABELS: Record<Resource, string> = {
  population: 'Population',
  money: 'Money',
  happiness: 'Happiness',
  materials: 'Materials',
}

const ICONS: Record<Resource, string> = {
  population: '/population.png',
  money: '/money.png',
  happiness: '/happy.png',
  materials: '/mats.png',
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
            <div className="meter-row">
              <img className="meter-icon" src={ICONS[resource]} alt="" aria-hidden />
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
          </div>
        )
      })}
    </div>
  )
}
