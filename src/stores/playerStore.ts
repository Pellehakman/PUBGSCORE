import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

export const usePlayers = defineStore('fplayers', {
  state: () => ({
    activePlayer: [] as Array<any>
  }),
  persist: true,
  actions: {
    activePlayer(data: any) {
      this.$state.activePlayer.push(data)
      console.log(data)
    }
  }
})
