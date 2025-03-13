import Dashboard from "../../components/Dashboard/Dashboard"
import HorizonNav from '../../components/HorizonNav/HorizonNav'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import "./UserProfile.scss"

const UserProfile = () => {

  return (
    <>
      <HorizonNav />
      <div className="verticalNavAndDashboard">
        <VerticalNav />
        <Dashboard />
      </div>
    </>
  )
}

export default UserProfile