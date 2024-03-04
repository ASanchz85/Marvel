import './scrollBar.css'

function ScrollBar ({ percentage }) {
  return (
    <div className='scroll-bar__container' role='scrollbar'>
      <div
        className='scroll-bar'
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ScrollBar
