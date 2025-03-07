import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUsers } from "../../hooks/useUsers"
import Erreur from "../../pages/Erreur/Erreur"
import Activity from "../Activity/Activity"
import AverageSessions from "../AverageSessions/AverageSessions"
import Banner from "../Banner/Banner"
import Performance from "../Performance/Performance"

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

  return (
    <>
      <Banner userName={userName} message="Félicitations ! Vous avez explosé vos objectifs hier 👏" />
      <Activity />
      <AverageSessions />
      <Performance />

    </>
  )

}

export default Dashboard