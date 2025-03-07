import cyclisme from "../../assets/activities/cyclisme.svg"
import meditation from "../../assets/activities/meditation.svg"
import musculation from "../../assets/activities/musculation.svg"
import natation from "../../assets/activities/natation.svg"
const VerticalNav = () => {
  return (
    <>
      <nav className="verticalNav__activities">
        <img className="verticalNav__activities__mediation" src={meditation} alt="Icone de méditation"></img>
        <img className="verticalNav__activities__natation" src={natation} alt="Icone de natation"></img>
        <img className="verticalNav__activities__cyclisme" src={cyclisme} alt="Icone de cyclisme"></img>
        <img className="verticalNav__activities__musculation" src={musculation} alt="Icone de musculation"></img>
      </nav>
      <p className="verticalNav__copyrights">Copiryght, SportSee 2020</p>
    </>
  )
}

export default VerticalNav