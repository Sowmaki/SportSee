// import { mockUserAverageSessions} from "../mocks/mockData"
import { api } from "../api"

export const useUsersAverageSessions = () => {
  return {
    // getUserAverageSessionsById: (userId) => mockUserAverageSessions,
    getUserAverageSessionsById: (userId) => api.get(`user/${userId}/average-sessions`)
  }
}