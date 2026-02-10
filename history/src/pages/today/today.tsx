import { useHistory } from '../../hooks/useHistory'
import { EventCard } from '../../components/eventCard/eventcard'
import { BackToTop } from '../../components/backToTop/backToTop'
import { PageHeader } from '../../components/header/header'
import styles from './today.module.scss'

export function Today() {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  const { data, loading } = useHistory(
    `https://history.muffinlabs.com/date/${month}/${day}`
  )

  if (loading) return <p>Loading...</p>

  return (
    <>
      <PageHeader
        title="ON THIS DAY"
        subtitle={`${day}/${month}`}
        image="/images/header.jpg"
      />

      <section className={styles.page}>
        {data.map((event, i) => (
          <EventCard
            key={i}
            year={event.year}
            text={event.text}
            link={event.links[0]?.link}
          />
        ))}

        <BackToTop />
      </section>
    </>
  )
}