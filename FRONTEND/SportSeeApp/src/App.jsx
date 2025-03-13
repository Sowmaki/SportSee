import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile";
import './styles/App.scss';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
        {/* <Route path="/user/:userId/activity" element={<Activity />} />
        <Route path="/user/:userId/average-sessions" element={<AverageSessions />} />
        <Route path="/user/:userId/performance" element={<Performance />} />
        <Route path="/*" element={<Erreur />} /> */}
      </Routes>
    </Router>

  )
}

export default App

