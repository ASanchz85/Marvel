import './scrollBar.css'

function ScrollBar ({ percentage }) {
  return (
    <div className='scroll-bar__container'>
      <div
        className='scroll-bar'
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ScrollBar
