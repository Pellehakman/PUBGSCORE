import type { playerModel } from '@/models/models'
import { defineStore } from 'pinia'

export const useChangeStore = defineStore('change', {
  state: () => ({
    change: false
  }),

  actions: {
    isChange(change: boolean) {
      this.change = change
      // console.log(change)
    }
  }
})
