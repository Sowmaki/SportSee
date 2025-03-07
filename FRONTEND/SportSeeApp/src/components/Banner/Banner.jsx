const Banner = ({ userName, message }) => {
  return (
    <>
      <h1 className="banner__title">Bonjour <span>{userName}</span></h1>
      <p className="banner__message">{message}</p>
    </>
  )
}

export default Banner