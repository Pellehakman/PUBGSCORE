import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

export const useCache = defineStore('id2', {
  state: () => ({
    cacheList: [] as Array<any>
  }),
  persist: true,
  actions: {
    letsCache(response: any) {
      // console.log(response.id)
      console.log(JSON.parse(JSON.stringify(this.$state.cacheList)))

      if (
        JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.id === response.id)
      ) {
        console.log('ALREADY USER WITH NAME')
      } else {
        console.log('ADDED USER')
        this.cacheList.push({ ...response })
      }
    }
  }
})
