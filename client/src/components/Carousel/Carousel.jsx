import { useRef } from 'react'
import { CarouselCard, ScrollBar } from '../../components'
import { useScrollBarPercantaje } from '../../hooks/useScrollBarPercantaje'
import './carousel.css'

function Carousel ({ comics }) {
  const carouselRef = useRef(null)
  const scrollPercentage = useScrollBarPercantaje(carouselRef)

  return (
    <div className='carousel__container'>
      <div
        ref={carouselRef}
        className='carousel'
        role='list'
      >
        {comics
          ?.sort((a, b) => a.date.localeCompare(b.date))
          .map((item, index) => (
            <CarouselCard
              key={index}
              {...item}
            />
          ))}
      </div>
      {comics?.length > 5 && <ScrollBar percentage={scrollPercentage} />}
    </div>
  )
}

export default Carousel
