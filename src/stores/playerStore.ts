import $lifetime from '@/services/statistics/lifetime'
import { collection } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('fpelasyers', {
  state: () => ({
    player1: [] as any,
    player2: [] as any,
    player3: [] as any,
    player4: [] as any
  }),

  persist: true,
  actions: {
    async setPlayer1(data: any) {
      this.player1 = await data
      console.log(data)
    },
    async setPlayer2(data: any) {
      this.player2 = await data
      console.log(data)
    },
    async setPlayer3(data: any) {
      this.player3 = await data
      console.log(data)
    },
    async setPlayer4(data: any) {
      this.player4 = await data
      console.log(data)
    }
  }
})
