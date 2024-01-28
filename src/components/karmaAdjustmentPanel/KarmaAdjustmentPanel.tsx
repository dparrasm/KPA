import { useState } from 'react'
import { Post } from '../../domain/post'
import { Comment } from '../../domain/comment'
import './KarmaAdjustmentPanel.css'
import Button from '../button/Button'
import Chip from '../chip/Chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { adjustKarmaPoints } from '../../application/adjustKarmaPoints'
import { Warning, WarningType } from '../../domain/warnings'

interface KarmaAdjustmentPanelProps {
  data: Comment | Post
}

export default function KarmaAdjustmentPanel({
  data
}: KarmaAdjustmentPanelProps) {
  const [currentKarmaPoints, setCurrentKarmaPoints] = useState(
    data.karmaPoints || 0
  )
  const [history, setHistory] = useState<Warning[]>(data.warnings)

  const handleKarmaPoints = (warning: Warning) => {
    const validatedWarnings = history.includes(warning)
      ? history.filter((h) => h !== warning)
      : [...history, warning]

    const karmaPoints = adjustKarmaPoints(
      { warning, active: history.includes(warning) },
      currentKarmaPoints
    )
    setCurrentKarmaPoints(karmaPoints)
    setHistory(validatedWarnings)
  }

  return (
    <article className="karma-adjustment-panel">
      <header className="karma-adjustment-panel__header">
        <h2 className="karma-adjustment-panel__header-user">
          <FontAwesomeIcon icon={faUser} />
          {data.author}
        </h2>
      </header>
      <div className="karma-adjustment-panel__columns">
        <section className="karma-adjustment-panel__incidences">
          <h3 className="karma-adjustment-panel__incidences-title">
            Incidences
          </h3>
          <ul className="karma-adjustment-panel__incidences-list">
            {data.warnings.map((warning, index) => (
              <li
                key={index}
                className="karma-adjustment-panel__incidences-item"
              >
                <Chip
                  text={WarningType[warning]}
                  color={history.includes(warning) ? '#E46C0A' : '#E0E0E0'}
                  onClick={() => handleKarmaPoints(warning)}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="karma-adjustment-panel__karma-points">
          <h3 className="karma-adjustment-panel__karma-points-title">
            Karma points
          </h3>
          <p className="karma-adjustment-panel__karma-points-value">
            {currentKarmaPoints}
          </p>
        </section>
      </div>
      <section className="karma-adjustment-panel__content">
        <p className="karma-adjustment-panel__content-text">{data.content}</p>
      </section>
      <section className="karma-adjustment-panel__buttons">
        <Button text="Validate" color="#3E54C3" type="button" />
      </section>
    </article>
  )
}
