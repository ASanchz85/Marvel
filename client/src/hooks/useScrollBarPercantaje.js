import { useEffect, useState } from 'react'

export const useScrollBarPercantaje = (carouselRef) => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const carousel = carouselRef.current
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth
      const percentage = (carousel.scrollLeft / scrollWidth) * 100
      setScrollPercentage(percentage)
    }

    const carousel = carouselRef.current
    carousel.addEventListener('scroll', handleScroll)

    return () => {
      carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPercentage
}
