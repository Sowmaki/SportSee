// import { mockUserPerformance} from "../mocks/mockData"
import { api } from "../api"

export const useUsersPerformance = () => {
  return {
    // getUserPerformanceById: (userId) => mockUserPerformance,
    getUserPerformanceById: (userId) => api.get(`user/${userId}/performance`)
  }
}