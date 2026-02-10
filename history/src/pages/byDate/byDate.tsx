import { useState } from 'react'
import { PageHeader } from '../../components/header/header'
import { useHistory } from '../../hooks/useHistory'
import { EventCard } from '../../components/eventCard/eventcard'
import styles from './ByDate.module.scss'

export function ByDate() {
  const [day, setDay] = useState<number>(1)
  const [month, setMonth] = useState<number>(1)

  const { data, loading } = useHistory(
    `https://history.muffinlabs.com/date/${month}/${day}`
  )

  return (
    <section className={styles.page}>
      <PageHeader
        title="BY DATE"
        subtitle={`ON ${day} / ${month}`}
        image="/images/header.jpg"
      />
        <label>
          Dag
          <input
            type="number"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
        </label>

        <label>
          Måned
          <input
            type="number"
            min="1"
            max="12"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          />
        </label>

      {loading && <p>Loading...</p>}

      <div className={styles.list}>
        {data.map((event, index) => (
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