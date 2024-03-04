import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url, { signal })

        if (!res.ok) {
          const err = new Error('Fetch error ocurred in useFetch hook')
          err.status = res.status || '00'
          err.statusText = res.statusText || 'Fetch error ocurred'
          throw err
        }

        const json = await res.json()

        if (!signal.aborted) {
          setData(json)
          setError(null)
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null)
          setError(error)
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => abortController.abort()
  }, [url])

  return { data, error, loading }
}
