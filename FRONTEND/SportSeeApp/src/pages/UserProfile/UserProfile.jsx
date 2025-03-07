import Dashboard from "../../components/Dashboard/Dashboard"
import HorizonNav from '../../components/HorizonNav/HorizonNav'
import VerticalNav from '../../components/VerticalNav/VerticalNav'

const UserProfile = () => {

  return (
    <>
      <HorizonNav className="horizonNav" />
      <div>
        <VerticalNav className="verticalNav" />
        <Dashboard className="dashboard" />
      </div>
    </>
  )
}

export default UserProfile