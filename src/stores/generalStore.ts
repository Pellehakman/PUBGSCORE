import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', {
  state: () => ({
    searchName: [] as any
  }),
  persist: true,
  actions: {
    setSearchName(data: any) {
      this.searchName = data
      console.log(data)
    }
  }
})
