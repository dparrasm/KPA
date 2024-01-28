import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Chip.css'
import { faX } from '@fortawesome/free-solid-svg-icons'

interface ChipProps {
  text: string
  color: string
  onClick: () => void
}

export default function Chip({ text, color, onClick }: ChipProps): JSX.Element {
  const chipStyle = { backgroundColor: color }

  return (
    <button className="chip" style={chipStyle} onClick={onClick}>
      <div className="chip__text">{text}</div>
      <FontAwesomeIcon className="chip__icon--close" icon={faX} />
    </button>
  )
}
