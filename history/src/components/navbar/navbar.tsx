import { NavLink } from 'react-router-dom'
import styles from './navbar.module.scss'

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/by-date">BY DATE</NavLink>
      <NavLink to="/" end className={styles.active}>
        TODAY
      </NavLink>
      <NavLink to="/since">SINCE</NavLink>
    </nav>
  )
}