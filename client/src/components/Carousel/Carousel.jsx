import { useEffect, useRef, useState } from 'react'
import './carousel.css'

function Carousel ({ items }) {
  const carouselRef = useRef(null)
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

  return (
    <div className='carousel__container'>
      <div
        ref={carouselRef}
        className='carousel'
      >
        <img
          className='carousel__item'
          src='https://via.placeholder.com/150'
          alt=''
        />
        <img
          className='carousel__item'
          src='https://via.placeholder.com/150'
          alt=''
        />
        <img
          className='carousel__item'
          src='https://via.placeholder.com/150'
          alt=''
        />
        <img
          className='carousel__item'
          src='https://via.placeholder.com/150'
          alt=''
        />
        <img
          className='carousel__item'
          src='https://via.placeholder.com/150'
          alt=''
        />
        <img
          className='carousel__item'
          src='https://via.placeholder.com/150'
          alt=''
        />
        <img
          className='carousel__item'
          src='https://via.placeholder.com/150'
          alt=''
        />
        <img
          className='carousel__item'
          src='https://via.placeholder.com/150'
          alt=''
        />
        {/* {items.map((item, index) => (
          <div
            key={index}
            className='carousel__item'
          >
            {item}
          </div>
        ))} */}
      </div>
      <ScrollBar percentage={scrollPercentage} />
    </div>
  )
}

const ScrollBar = ({ percentage }) => {
  return (
    <div className='scroll-bar-container'>
      <div className='scroll-bar' style={{ width: `${percentage}%` }} />
    </div>
  )
}

export default Carousel
