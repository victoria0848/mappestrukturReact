export interface HistoryEvent {
  year: string
  text: string
  links: {
    title: string
    link: string
  }[]
}