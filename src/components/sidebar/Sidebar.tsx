import { Link } from 'react-router-dom'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faChartSimple,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../logo/Logo'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo className="sidebar__logo" />
      <div className="sidebar__menu">
        <label className="sidebar__menu--title">MAIN MENU</label>
        <nav className="sidebar__nav">
          <Link className="sidebar__nav--link" to="/dashboard">
            <FontAwesomeIcon icon={faChartSimple} /> Dashboard
          </Link>
          <Link className="sidebar__nav--link" to="/dashboard">
            <FontAwesomeIcon icon={faBell} />
            Notificacions
          </Link>
          <Link className="sidebar__nav--link" to="/dashboard">
            <FontAwesomeIcon icon={faClock} />
            History
          </Link>
        </nav>
      </div>
    </aside>
  )
}
