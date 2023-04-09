import { defineStore } from 'pinia'
import { useOptions } from '../options'

export const useDisplayPlayerStore = defineStore('dispStore', {
  state: () => ({
    displayPlayer1: null as any,
    displayPlayer2: null as any,
    displayPlayer3: null as any,
    displayPlayer4: null as any,
    gamemode: null as any
  }),
  getters: {
    p1: (state) => state.displayPlayer1?.gameModeStats[state.gamemode],
    p2: (state) => state.displayPlayer2?.gameModeStats[state.gamemode],
    p3: (state) => state.displayPlayer3?.gameModeStats[state.gamemode],
    p4: (state) => state.displayPlayer4?.gameModeStats[state.gamemode]
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
    },
    async setDisplayPlayer3(data: any) {
      this.displayPlayer3 = await data
    },
    async setDisplayPlayer4(data: any) {
      this.displayPlayer4 = await data
    }
  }
})
