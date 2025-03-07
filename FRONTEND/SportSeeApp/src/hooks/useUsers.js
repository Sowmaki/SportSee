// import { mockUserMainData } from "../mocks/mockData"
import { api } from "../api"

export const useUsers = () => {
  return {
    // getUserById: (userId) => mockUserMainData.find(user => user.id === userId),
    getUserById: (userId) => api.get(`user/${userId}`)
  }
}