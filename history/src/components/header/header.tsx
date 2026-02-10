import styles from './header.module.scss'

type Props = {
  title: string
  subtitle: string
  image: string
}

export function PageHeader({ title, subtitle, image }: Props) {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.box}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  )
}