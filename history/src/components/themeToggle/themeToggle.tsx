import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import styles from './themeToggle.module.scss'

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}