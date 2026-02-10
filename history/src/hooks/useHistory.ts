import { useEffect, useState } from 'react'
import type { HistoryEvent } from '../types/history'

export function useHistory(url: string) {
  const [data, setData] = useState<HistoryEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json.data.Events))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading }
}
