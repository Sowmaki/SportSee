import { Legend, PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import "./DayGoal.scss";

const DayGoal = ({ data }) => {

  const score = (data.todayScore || data.score) * 100

  const renderLegend = () => {
    return (
      <p className="dayGoal__title">Score</p>
    )
  }

  return (
    <div className="dayGoal">
      <RadialBarChart
        style={{ backgroundColor: '#FBFBFB' }}
        width={258}
        height={263}
        innerRadius="130%"
        outerRadius="200%"
        data={[{ score: score }]}
        startAngle={570}
        endAngle={210}
        className="dayGoal__chart"
      >
        <circle cx="50%" cy="50%" r="80" fill="white" />

        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey="score"
          angleAxisId={0}
          tick={false}
        />

        <text fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan x="52%" y="46%" fontSize="1.625rem" fontWeight="bolder">{`${score}%`}</tspan>
          <tspan x="50%" y="56%" fill="grey" fontSize="1rem">de votre</tspan>
          <tspan x="50%" y="65%" fill="grey" fontSize="1rem">objectif</tspan>
        </text>

        <RadialBar minAngle={15} fill="#FF0000" width={10} cornerRadius={50} background clockWise={true} dataKey='score' barSize={10} />
        <Legend content={renderLegend} iconSize={10} width={120} height={140} layout='vertical' verticalAlign='top' align="left" />
      </RadialBarChart>
    </div>
  )
}

export default DayGoal