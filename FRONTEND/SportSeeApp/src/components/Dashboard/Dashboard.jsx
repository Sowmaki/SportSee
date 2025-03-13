import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUsers } from "../../hooks/useUsers"
import Erreur from "../../pages/Erreur/Erreur"
import Activity from "../Activity/Activity"
import AverageSessions from "../AverageSessions/AverageSessions"
import Banner from "../Banner/Banner"
import DayGoal from "../DayGoal/DayGoal"
import InfoCard from "../InfoCard/InfoCard"
import Performance from "../Performance/Performance"
import './Dashboard.scss'

const Dashboard = () => {

  const { userId } = useParams()
  const { getUserById } = useUsers()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    getUserById(parseInt(userId))
      .catch((error) => setError(error?.message || "Erreur"))
      .then(user => setUser(user))
      .finally(() => setLoading(false))
  }, [userId])

  if (loading) return <>Chargement...</>
  if (error) return error
  if (!user) return <Erreur />

  const userName = user.userInfos.firstName
  const keyDataLabels = {
    calorieCount: "Calories",
    proteinCount: "Protéines",
    carbohydrateCount: "Glucides",
    lipidCount: "Lipides"
  };

  const formattedUserKeyData = Object.entries(user.keyData).map(([key, value]) => ({
    label: keyDataLabels[key],
    value: value
  }));

  return (
    <div className="dashboard">
      <Banner userName={userName} message="Félicitations ! Vous avez explosé vos objectifs hier 👏" />
      <section className="dashboard__chartsSection">
        <div className="dashboard__chartsSection__group1">
          <Activity />
          <div className="dashboard__chartsSection__group2">
            <AverageSessions />
            <Performance />
            <DayGoal data={user} />
          </div>
        </div>
        <div className="dashboard__chartsSection__infos">
          {
            formattedUserKeyData.map((info) => {
              return <InfoCard category={info.label} value={info.value} />
            })
          }
        </div>
      </section>
    </div>
  )

}

export default Dashboard