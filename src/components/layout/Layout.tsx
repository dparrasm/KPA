import { Navigate, Outlet } from 'react-router-dom'
import { useAuthentication } from '../../context/AuthContext'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './Layout.css'

export default function Layout() {
  const { user } = useAuthentication()

  if (!user) {
    return <Navigate to="/" />
  }

  return (
    <div className="layout">
      <aside className="layout__sidebar">
        <Sidebar />
      </aside>
      <main className="layout__main">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
