// import { mockUserActivity} from "../mocks/mockData"
import { api } from "../api"

export const useUsersActivity = () => {
  return {
    // getUserActivityById: (userId) => mockUserActivity,
    getUserActivityById: (userId) => api.get(`user/${userId}/activity`)
  }
}