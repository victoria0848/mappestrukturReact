import { TimelineItem } from './timelineItem'
import styles from './timeline.module.scss'

type Event = {
  year: string
  text: string
  link?: string
}

export function Timeline({ events }: { events: Event[] }) {
  return (
    <section className={styles.timeline}>
      {events.map((event, i) => (
        <TimelineItem key={i} {...event} side={i % 2 === 0 ? 'left' : 'right'} />
      ))}
    </section>
  )
}