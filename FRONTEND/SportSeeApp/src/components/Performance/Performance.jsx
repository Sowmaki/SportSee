import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useUsersPerformance } from "../../hooks/useUsersPerformance"
import Erreur from "../../pages/Erreur/Erreur"

const Performance = () => {

  const { userId } = useParams()
  const { getUserPerformanceById } = useUsersPerformance()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [userPerformance, setUserPerformance] = useState(undefined)

  useEffect(() => {
    getUserPerformanceById(parseInt(userId))
      .catch((error) => setError(error?.message || "Erreur"))
      .then(userPerformance => setUserPerformance(userPerformance))
      .finally(() => setLoading(false))
  }, [userId])

  if (loading) return <>Chargement...</>
  if (error) return error

  if (!userPerformance) return <Erreur />
  const performance1 = `Jour ${userPerformance.kind[1]}: ${userPerformance.data[0].value}`

  return (
    <>
      {performance1}
    </>
  )

}

export default Performance