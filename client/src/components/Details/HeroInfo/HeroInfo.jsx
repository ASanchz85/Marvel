import './heroInfo.css'

function HeroInfo () {
  return (
    <article className='hero__container'>
      <div className='hero__details'>
        <div className='hero__details--img'>
          <img
            src='https://via.placeholder.com/150'
            alt='placeholder'
          />
        </div>
        <div className='hero__details--info'>
          <div className='hero__details--title'>
            <h1>Hero Name</h1>
            <div className='hero__details--favourite'>
              <img
                src='/State=Default.svg'
                alt='Favourite icon'
              />
            </div>
          </div>
          <div className='hero__details--description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              voluptas autem eos officiis velit sint eius repudiandae dolore
              sed. Ratione similique laudantium cumque obcaecati officia vel
              praesentium itaque quaerat adipisci.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default HeroInfo
