import logo from "../../assets/logo.svg";
import "./HorizonNav.scss";

const HorizonNav = () => {

  return (
    <div className="horizonNav">
      <img src={logo} className="horizonNav__logo" alt="logo de SportSee"></img>
      <nav className="horizonNav__nav">
        <a href="#" className="horizonNav__nav__activity">Accueil</a>
        <a href="#" className="horizonNav__nav__activity">Profil</a>
        <a href="#" className="horizonNav__nav__activity">Réglage</a>
        <a href="#" className="horizonNav__nav__activity">Communauté</a>
      </nav>
    </div>
  )
}

export default HorizonNav
