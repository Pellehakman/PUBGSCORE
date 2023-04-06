import { defineStore } from 'pinia'
import { useOptions } from '../options'

export const useDisplayPlayerStore = defineStore('dispStore', {
  state: () => ({
    displayPlayer1: null as any,
    displayPlayer2: null as any
  }),

  persist: true,
  actions: {
    async setDisplayPlayer1(data: any) {
      const options = useOptions()

      const newData = data
      console.log(data)
      this.displayPlayer1 = await newData
    },
    async setDisplayPlayer2(data: any) {
      this.displayPlayer2 = await data
    }
  }
})
