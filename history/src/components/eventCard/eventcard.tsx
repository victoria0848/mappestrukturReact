import styles from './EventCard.module.scss'

type Props = {
  year: string
  text: string
  link?: string
}

export function EventCard({ year, text, link }: Props) {
  return (
    <article className={styles.card}>
      <h3>YEAR: {year}</h3>
      <p>{text}</p>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Læs mere ⧉
        </a>
      )}
    </article>
  )
}