import type { playerModel } from '@/models/models'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: [] as unknown as playerModel,
    normal: [] as unknown as any,
    ranked: [] as unknown as any
  }),
  persist: true,

  actions: {
    addUser(user: playerModel) {
      this.user = user
    },
    addNormalLifetime(normal: any) {
      this.normal = normal
      // console.log(normal)
    },
    addRankedLifetime(ranked: any) {
      this.ranked = ranked
      // console.log(ranked)
    }
  }
})
