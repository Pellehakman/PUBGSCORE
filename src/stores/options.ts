import { defineStore } from 'pinia'

export const useOptions = defineStore('options', {
  state: () => ({
    options: [] as any
  }),
  persist: true,
  actions: {
    storeOptions(data: any) {
      this.options = data
      console.log(data)
    }
  }
})
