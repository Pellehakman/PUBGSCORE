import $lifetime from '@/services/statistics/lifetime'
import { collection } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('fplasyers', {
  state: () => ({
    playerOne: [] as any,
    playerTwo: [] as any,
    playerThree: [] as any,
    playerFour: [] as any,
    newCollection: [] as any
  }),

  persist: true,
  actions: {
    async setPlayerOne(data: any) {
      this.playerOne = data
    },
    async setPlayerTwo(data: any) {
      this.playerTwo = data
    },
    setPlayerThree(data: any) {
      this.playerThree = data
    },
    setPlayerFour(data: any) {
      this.playerFour = data
    },
    collection() {
      this.newCollection = [
        this.$state.playerOne,
        this.$state.playerTwo,
        this.$state.playerThree,
        this.$state.playerFour
      ]
    }
  }
})
