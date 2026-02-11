import { useState } from 'react'
import { PageHeader } from '../../components/header/header'
import { Navigation } from '../../components/navbar/navbar'
import { useHistory } from '../../hooks/useHistory'
import { EventCard } from '../../components/eventCard/eventcard'
import { BackToTop } from '../../components/backToTop/backToTop'
import styles from './Since.module.scss'

export function Since() {
  const [year, setYear] = useState<number>(1900)

  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  const { data, loading } = useHistory(
    `https://history.muffinlabs.com/date/${month}/${day}`
  )

  const filteredEvents = data.filter(
    (event) => Number(event.year) >= year
  )

  return (
    <>
      <PageHeader
        title="SINCE"
        subtitle={`SINCE ${year}`}
        image="/images/header.jpg"
      />

      <Navigation />

      <section className={styles.page}>
        <div className={styles.controls}>
          <label>
            Show events since year
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            />
          </label>
        </div>

        {loading && <p>Loading...</p>}

        <div className={styles.list}>
          {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              year={event.year}
              text={event.text}
              link={event.links[0]?.link}
            />
          ))}
        </div>

        <BackToTop />
      </section>
    </>
  )
}