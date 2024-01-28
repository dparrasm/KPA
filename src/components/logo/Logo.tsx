import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface LogoProps {
  className: string
}
export default function Logo({ className }: LogoProps) {
  return (
    <>
      <div className={className}>
        <FontAwesomeIcon icon={faEye} />
        <i className="icon"></i>
        <span>KarmaWatch</span>
      </div>
    </>
  )
}
