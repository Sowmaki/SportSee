import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts"
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

  const formatKindOfPerformances = (userPerformance) => {

    const kindTranslation = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité"
    };

    const reversedData = [...userPerformance.data].reverse();

    return {
      ...userPerformance,
      data: reversedData.map(session => ({
        ...session,
        kind: kindTranslation[userPerformance.kind[session.kind]]
      }))
    }
  }

  const formattedPerformances = formatKindOfPerformances(userPerformance)

  return (
    <>
      <RadarChart className="performance__chart" cx="50%" cy="50%" outerRadius={70} width={258} height={263} data={formattedPerformances.data} style={{ backgroundColor: '#282D30', borderRadius: '5px' }}>
        <PolarGrid radialLines={false} polarRadius={[0, 9, 18, 37, 56, 75]} />
        <PolarAngleAxis
          dataKey="kind"
          type="category"
          style={{ fontSize: '0.75rem' }}
          tickLine={false}
          tickSize={25}
          tick={{ fill: "white", dy: 5, dx: 0 }}
          outerRadius={10}
        />
        <PolarRadiusAxis
          domain={[0, 100]}
          tick={false}
          axisLine={false}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </>
  )

}

export default Performance 