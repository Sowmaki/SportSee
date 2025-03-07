import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUsersActivity } from "../../hooks/useUsersActivity"
import Erreur from "../../pages/Erreur/Erreur"

const Activity = () => {

  const { userId } = useParams()
  const { getUserActivityById } = useUsersActivity()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [activity, setActivity] = useState(undefined)

  useEffect(() => {
    getUserActivityById(parseInt(userId))
      .catch((error) => setError(error?.message || "Erreur"))
      .then(activity => setActivity(activity))
      .finally(() => setLoading(false))
  }, [userId])

  if (loading) return <>Chargement...</>
  if (error) return error

  if (!activity) return <Erreur />
  const userSessionDay = activity.sessions[0].day

  return (
    <>
      {userSessionDay}
    </>
  )

}

export default Activity