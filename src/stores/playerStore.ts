import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

export const useCache = defineStore('players', {
  state: () => ({
    slot1: [] as Array<any>
  }),
  persist: true,
  actions: {
    letsCache(data: any) {
      if (!JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.id === data.id)) {
        this.slot1.unshift({ ...data })
      }
    }
  }
})
