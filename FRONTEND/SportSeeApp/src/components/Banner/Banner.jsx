import './Banner.scss'

const Banner = ({ userName, message }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">Bonjour <span className='banner__title__userName'>{userName}</span></h1>
      <p className="banner__message">{message}</p>
    </div>
  )
}

export default Banner