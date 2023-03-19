import type { userModel } from '@/models/models'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userObject: [] as unknown as userModel
  }),

  getters: {
    UserObject(state) {
      return state.userObject
    }
  },

  actions: {
    addUser(user: userModel) {
      this.userObject = user
      console.log(user)
    }
  }
})
