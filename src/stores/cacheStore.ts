import { defineStore } from 'pinia'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))
export const useCache = defineStore('efid', {
  state: () => ({
    cacheList: [] as Array<any>
  }),
  persist: true,
  actions: {
    letsCache(data: any) {
      if (!JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.id === data.id)) {
        this.cacheList.unshift({ ...data })
      }
    },
    letsCacheLifetime(data: any) {
      if (
        this.$state.cacheList
          .find((f: any) => f.id === data.id)
          .lifetime.find((g: any) => g.gamemode === data.gamemode)
      ) {
        console.log('already data')
      } else {
        this.cacheList.find((f: any) => f.id === data.id).lifetime.push({ ...data })
      }
    },

    letsCacheLastPlayedWith(data: any) {
      if (
        JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.name === data.name) &&
        JSON.parse(JSON.stringify(this.$state.cacheList)).find(
          (f: any) => f.lastPlayedWith.length === 0
        )
      ) {
        this.cacheList
          .find((f: any) => f.name === data.name)
          .lastPlayedWith.push({ ...data.lastPlayedWith })
      }
    },
    letsCacheSeasons(data: any) {
      const newArr = JSON.parse(JSON.stringify(this.$state.cacheList)).map((f: any) => f.seasons)
      if (newArr.find((arr: any) => arr.some((obj: any) => obj.seasonId === data.seasonId))) {
        console.log('data with same id')
      } else {
        console.log('nope, lets add')
        this.cacheList.find((f: any) => f.id === data.id).seasons.push({ ...data })
      }
    }
  }
})
