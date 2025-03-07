import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUsersAverageSessions } from "../../hooks/useUsersAverageSessions"
import Erreur from "../../pages/Erreur/Erreur"

const AverageSessions = () => {

  const { userId } = useParams()
  const { getUserAverageSessionsById } = useUsersAverageSessions()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [userAverageSessions, setUserAverageSessions] = useState(undefined)

  useEffect(() => {
    getUserAverageSessionsById(parseInt(userId))
      .catch((error) => setError(error?.message || "Erreur"))
      .then(userAverageSessions => setUserAverageSessions(userAverageSessions))
      .finally(() => setLoading(false))
  }, [userId])

  if (loading) return <>Chargement...</>
  if (error) return error

  if (!userAverageSessions) return <Erreur />
  const lastAverageSession = `Jour ${userAverageSessions.sessions[0].day}: ${userAverageSessions.sessions[0].sessionLength}`

  return (
    <>
      {lastAverageSession}
    </>
  )

}

export default AverageSessions