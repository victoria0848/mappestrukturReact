import styles from './backToTop.module.scss'

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button className={styles.button} onClick={scrollToTop}>
      ↑
    </button>
  )
}