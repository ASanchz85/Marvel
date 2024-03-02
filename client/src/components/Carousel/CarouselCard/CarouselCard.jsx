import './carouselCard.css'

function CarouselCard () {
  return (
    <div className='carousel__item'>
      <img
        className='carousel__item--img'
        src='https://via.placeholder.com/150'
        alt=''
      />
      <h5 className='carousel__item--title'>Title</h5>
      <p className='carousel__item--date'>1964</p>
    </div>
  )
}

export default CarouselCard
