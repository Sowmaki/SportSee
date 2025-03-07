import logo from "../../assets/logo.svg";
import "./HorizonNav.scss";

const HorizonNav = () => {

  return (
    <>
      <img src={logo} className="horizonNav__logo" alt="logo de SportSee"></img>
      <nav className="horizonNav__nav">
        <a href="#" className="horizonNav__nav__accueil">Accueil</a>
        <a href="#" className="horizonNav__nav__profil">Profil</a>
        <a href="#" className="horizonNav__nav__reglage">Réglage</a>
        <a href="#" className="horizonNav__nav__communaute">Communauté</a>
      </nav>
    </>
  )
}

export default HorizonNav
