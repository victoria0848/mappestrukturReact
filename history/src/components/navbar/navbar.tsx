import { NavLink } from 'react-router-dom'
import styles from './navbar.module.scss'

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Today</NavLink>
      <NavLink to="/by-date">By Date</NavLink>
      <NavLink to="/since">Since</NavLink>
    </nav>
  )
}