import $activePlayers from '@/services/account/activePlayers'
import { defineStore } from 'pinia'

export const useOptions = defineStore('options', {
  state: () => ({
    options: [] as any
  }),
  persist: true,
  actions: {
    async storeOptions(data: any) {
      this.options = data
      // await $activePlayers.activePlayers()
    }
  }
})
