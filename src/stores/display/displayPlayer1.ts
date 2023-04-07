import { defineStore } from 'pinia'
import { useOptions } from '../options'
import $displayPlayer from '@/services/players/displayPlayer'

export const useDisplayPlayerStore = defineStore('dispStore', {
  state: () => ({
    displayPlayer1: null as any,
    displayPlayer2: null as any,
    gamemode: null as any
  }),
  getters: {
    p1: (state) => state.displayPlayer1?.gameModeStats[state.gamemode],
    p2: (state) => state.displayPlayer2?.gameModeStats[state.gamemode]
  },

  persist: true,
  actions: {
    async setDisplayPlayer1(data: any) {
      const options = useOptions()
      this.displayPlayer1 = await data
      this.gamemode = options.$state.options?.gamemode
    },
    async setDisplayPlayer2(data: any) {
      this.displayPlayer2 = await data
    }
  }
})
