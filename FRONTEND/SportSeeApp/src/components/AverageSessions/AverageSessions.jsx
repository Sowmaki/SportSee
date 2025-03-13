import { curveCatmullRom } from "d3-shape";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Legend, Line, LineChart, Rectangle, Tooltip, XAxis, YAxis } from "recharts";
import { useUsersAverageSessions } from "../../hooks/useUsersAverageSessions";
import Erreur from "../../pages/Erreur/Erreur";
import './AverageSessions.scss';

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

  const formatDaysToWeekdays = (averageSessions) => {
    const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

    return {
      ...averageSessions,
      sessions: [
        { day: "", sessionLength: averageSessions.sessions[0].sessionLength }, // Faux jour au début
        ...averageSessions.sessions.map(session => ({
          ...session,
          day: daysOfWeek[session.day - 1]
        })),
        { day: "", sessionLength: averageSessions.sessions[averageSessions.sessions.length - 1].sessionLength } // Faux jour à la fin
      ]
    }

  }

  const formatedAverageSessions = formatDaysToWeekdays(userAverageSessions)

  const CustomCursor = (props) => {
    const { points, width, height, stroke } = props;
    const { x, y } = points[0];
    const { x1, y1 } = points[1];
    return (
      <Rectangle
        fill="black"
        fillOpacity={0.1}
        x={x}
        y={y - 80}
        width={width}
        height={height + 200}
      />
    );
  };

  const renderLegend = () => {
    return (
      <p className="averageSessions__title">Durée moyenne des sessions</p>
    )
  }

  const customLineStyle = curveCatmullRom.alpha(0.5)

  return (
    <div className="averageSessions">
      <LineChart
        className="averageSessions__chart"
        style={{ backgroundColor: '#FF0000', borderRadius: '5px' }}
        width={258} height={263}
        data={formatedAverageSessions.sessions}
        margin={{
          top: 0,
          right: 0,
          bottom: 20,
          left: 0
        }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
            <stop offset="81%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Legend
          content={renderLegend}
          width={148}
          align="left"
          verticalAlign="top"
        />
        <XAxis
          domain={['dataMin', 'dataMax']}
          tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          interval={0}
          dataKey="day"
          axisLine={false}
          tickLine={false}
          stroke="#FFFFFF"
          tickMargin={20}
          padding={{ left: -20, right: -20 }}
        />
        <YAxis
          dataKey="sessionLength"
          domain={['dataMin', 'dataMax']}
          hide
        />
        <Tooltip
          labelStyle={{ display: 'none' }}
          contentStyle={{ padding: '0', width: '39px', height: '25px', backgroundColor: 'white', border: 'none', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          itemStyle={{ color: 'black', fontSize: '0.5rem' }}
          formatter={(value, name) =>
            name === "sessionLength" && [`${value} min`]
          }
          offset={-35}
          cursor={<CustomCursor />}
        />
        <Line
          type={customLineStyle}
          dataKey="sessionLength"
          stroke="url(#colorGradient)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 4,
            fill: "#FFFFFF",
            fillOpacity: 1,
            stroke: "#FFFFFF",
            strokeWidth: 8,
            strokeOpacity: 0.4,
          }}
        />

      </LineChart>
    </div>
  )

}

export default AverageSessions