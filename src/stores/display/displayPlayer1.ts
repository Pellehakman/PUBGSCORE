import { defineStore } from 'pinia'

export const useDisplayPlayerStore = defineStore('dispStore', {
  state: () => ({
    displayPlayer1: [] as any
  }),

  persist: true,
  actions: {
    async setDisplayPlayer1(data: any) {
      this.displayPlayer1 = await data
    }
  }
})
