import './carouselCard.css'

function CarouselCard ({ title, date, thumbnail }) {
  return (
    <div className='carousel__item'>
      <img
        className='carousel__item--img'
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt=''
      />
      <h5 className='carousel__item--title'>{title}</h5>
      <p className='carousel__item--date'>{date}</p>
    </div>
  )
}

export default CarouselCard
