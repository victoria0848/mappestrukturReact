import { useState } from 'react'
import { PageHeader } from '../../components/header/header'
import { useHistory } from '../../hooks/useHistory'
import { EventCard } from '../../components/eventCard/eventcard'
import styles from './since.module.scss'

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
    <section className={styles.page}>
      <PageHeader
      title="SINCE"
      subtitle={`SINCE ${year}`}
      image="/images/header.jpg"
      />

        <label>
          Vis begivenheder siden år
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </label>

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
    </section>
  )
}