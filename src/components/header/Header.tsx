import { useAuthentication } from '../../context/AuthContext'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const { signOut } = useAuthentication()

  return (
    <header className="header">
      <button className="header__button--logout" onClick={signOut}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </header>
  )
}
