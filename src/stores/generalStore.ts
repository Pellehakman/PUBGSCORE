import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', {
  state: () => ({
    lastPlayedWith: [] as any
  }),
  persist: true,
  actions: {
    setSearchName(data: any) {
      this.lastPlayedWith = data
    }
  }
})
