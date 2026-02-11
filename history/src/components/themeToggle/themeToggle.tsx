import { useTheme } from '../../context/themeContext'
import styles from './themeToggle.module.scss'

export function ThemeToggle() {
  const { toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className={styles.toggle}>
      ●
    </button>
  )
}