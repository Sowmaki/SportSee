import cyclisme from "../../assets/activities/cyclisme.svg"
import meditation from "../../assets/activities/meditation.svg"
import musculation from "../../assets/activities/musculation.svg"
import natation from "../../assets/activities/natation.svg"
import './VerticalNav.scss'

const VerticalNav = () => {
  return (
    <div className="verticalNav">
      <nav className="verticalNav__activities">
        <div className="verticalNav__activities__activity"><img src={meditation} alt="Icone de méditation"></img></div>
        <div className="verticalNav__activities__activity"><img src={natation} alt="Icone de natation"></img></div>
        <div className="verticalNav__activities__activity"><img src={cyclisme} alt="Icone de cyclisme"></img></div>
        <div className="verticalNav__activities__activity"><img src={musculation} alt="Icone de musculation"></img></div>
      </nav>
      <p className="verticalNav__copyrights">Copiryght, SportSee 2020</p>
    </div>
  )
}

export default VerticalNav