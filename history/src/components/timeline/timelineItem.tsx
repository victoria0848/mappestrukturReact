import styles from './Timeline.module.scss'

type Props = {
  year: string
  text: string
  link?: string
  side: 'left' | 'right'
}

export function TimelineItem({ year, text, link, side }: Props) {
  return (
    <div className={`${styles.item} ${styles[side]}`}>
      <div className={styles.dot} />
      <div className={styles.content}>
        <h3>YEAR: {year}</h3>
        <p>{text}</p>
        {link && <a href={link}>Read more ⧉</a>}
      </div>
    </div>
  )
}