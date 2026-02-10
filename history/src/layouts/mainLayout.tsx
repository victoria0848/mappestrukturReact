import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/navbar'
import styles from './MainLayout.module.scss'

export function MainLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}