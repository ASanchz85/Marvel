import './card.css'

function Card () {
  return (
    <article className='card'>
      <div className='card__img'>
        <img
          src='https://via.placeholder.com/150'
          alt='placeholder'
        />
      </div>
      <div className='card__content'>
        <h3>Card Title</h3>
        <img
          src='/State=Unselected.svg'
          alt='favourite icon'
        />
      </div>
    </article>
  )
}

export default Card
