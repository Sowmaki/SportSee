import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
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

  //Standardisation des données
  const formatUserActivity = (activity) => {
    return {
      ...activity,
      sessions: activity.sessions.map(session => ({
        ...session,
        day: session.day.split("-")[2].replace(/^0/, "")
      }))
    }
  };

  const formattedActivity = formatUserActivity(activity);


  return (
    <>
      <BarChart className="activity__chart" style={{ backgroundColor: "#fbfbfb", borderRadius: '5px' }} width={835} height={320} data={formattedActivity.sessions} barGap="5%">
        <h2 className="activity__title">Activité quotidienne</h2>
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <YAxis
          yAxisId={"kilograms2"}
          dataKey="kilogram"
          orientation="right"
          tickCount={3}
          domain={['dataMin - 0.5', 'dataMax']}
          tickFormatter={(value) => Math.floor(value)}
          minTickGap={60}
          axisLine={false}
          tickLine={false}
          tickMargin={39}
          stroke="#9B9EAC"
        />
        <YAxis
          yAxisId={"calories1"}
          dataKey="calories"
          hide
        />
        <XAxis
          dataKey="day"
          padding={{ left: 5, right: 5 }}
          domain={['dataMin', 'dataMax']}
          // scale="point"  probleme de mouseover qui se supprime.
          tickLine={false}
          tickMargin={16}
          stroke="#9B9EAC"
        />
        <Tooltip
          labelStyle={{ display: 'none' }}
          contentStyle={{ padding: '0', width: '39px', height: '63px', backgroundColor: 'red', color: 'white', border: 'none', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          itemStyle={{ color: 'white', fontSize: '0.438rem' }}
          formatter={(value, name) =>
            name === "kilogram" ? [`${value}kg`] : [`${value}kcal`]
          }
        />
        <Legend
          align="right"
          verticalAlign="top"
          height={50}
          iconSize={8}
          iconType="circle"
          wrapperStyle={{ right: 0 }}
          formatter={(value) => {
            const label = value === "kilogram" ? "Poids" : "Calories brûlées";
            return (
              <span style={{ color: '#74798C', fontSize: '0.875rem', marginLeft: '10px' }}>
                {label}
              </span>
            );
          }}
        />
        <Bar
          yAxisId={"kilograms2"}
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[10, 10, 0, 0]} />
        <Bar
          yAxisId={"calories1"}
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[10, 10, 0, 0]} />
      </BarChart>
    </>
  )

}

export default Activity