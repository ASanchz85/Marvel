import { useRef } from 'react'
import { CarouselCard, ScrollBar } from '../../components'
import { useScrollBarPercantaje } from '../../hooks/useScrollBarPercantaje'
import './carousel.css'

function Carousel ({ items }) {
  const carouselRef = useRef(null)
  const scrollPercentage = useScrollBarPercantaje(carouselRef)

  return (
    <div className='carousel__container'>
      <div
        ref={carouselRef}
        className='carousel'
      >
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
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

export default Carousel
