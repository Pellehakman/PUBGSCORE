import $lifetime from '@/services/statistics/lifetime'
import { defineStore } from 'pinia'

export const useOptions = defineStore('options', {
  state: () => ({
    options: [] as any
  }),
  persist: true,
  actions: {
    storeOptions(data: any) {
      this.options = data
      $lifetime.GetLifetime()
    }
  }
})
