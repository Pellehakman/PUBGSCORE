import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('fplasyers', {
  state: () => ({
    playerOne: [] as any,
    playerTwo: [] as any,
    playerThree: [] as any,
    playerFour: [] as any
  }),
  persist: true,
  actions: {
    setPlayerOne(data: any) {
      this.playerOne = data
      console.log(data)
    },
    setPlayerTwo(data: any) {
      this.playerTwo = data
      console.log(data)
    },
    setPlayerThree(data: any) {
      this.playerThree = data
      console.log(data)
    },
    setPlayerFour(data: any) {
      this.playerFour = data
      console.log(data)
    }
  }
})
