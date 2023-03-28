import $lifetime from '@/services/statistics/lifetime'
import { collection } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('fpeladsyers', {
  state: () => ({
    player1: '',
    player2: '',
    player3: '',
    player4: ''
  }),

  persist: true,
  actions: {
    async setPlayer1(data: any) {
      this.player1 = await data
    },
    async setPlayer2(data: any) {
      this.player2 = await data
    },
    async setPlayer3(data: any) {
      this.player3 = await data
    },
    async setPlayer4(data: any) {
      this.player4 = await data
    }
  }
})
