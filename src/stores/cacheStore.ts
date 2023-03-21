import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

export const useCache = defineStore('idfddddes', {
  state: () => ({
    cacheList: [] as Array<any>
  }),
  persist: true,
  actions: {
    letsCache(data: any) {
      if (JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.id === data.id)) {
        // console.log('CACHE: PLAYER: ALREADY DATA OR NO MATCHING ID')
      } else {
        // console.log('CACHE: PLAYER: ADD')
        this.cacheList.unshift({ ...data })
      }
    },
    letsCacheLifetime(data: any) {
      if (
        JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.id === data.id) &&
        JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.lifetime.length === 0)
      ) {
        // console.log('CACHE: LIFETIME: ADD')
        this.cacheList.find((f: any) => f.id === data.id).lifetime.push({ ...data })
      } else {
        // console.log('CACHE: LIFETIME: ALREADY DATA OR NO MATCHING ID')
      }
    },

    letsCacheLastPlayedWith(data: any) {
      if (
        JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.name === data.name) &&
        JSON.parse(JSON.stringify(this.$state.cacheList)).find(
          (f: any) => f.lastPlayedWith.length === 0
        )
      ) {
        // console.log('CACHE: LAST PLAYED WITH: ADD')
        this.cacheList
          .find((f: any) => f.name === data.name)
          .lastPlayedWith.push({ ...data.lastPlayedWith })
      } else {
        // console.log('CACHE: LIFETIME: ALREADY DATA OR NO MATCHING ID')
      }
    },
    letsCacheSeasons(data: any) {
      const run = (id: any) => {
        console.log(id)
        for (let i = 0; i < this.$state.cacheList.length; i++) {
          if (this.$state.cacheList[i].seasons[0] === id) {
            console.log('there is data with same id')
          } else {
            console.log('lets go')
            this.cacheList.find((f: any) => f.id === data.id).seasons.push({ ...data })
          }
        }
      }
      run(data.seasonId)

      // if (
      //   JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.id === data.id) &&
      //   JSON.parse(JSON.stringify(this.$state.cacheList)).find((f: any) => f.seasons.length === 0)
      // ) {
      //   this.cacheList.find((f: any) => f.id === data.id).seasons.push({ ...data })
      // } else {
      //   for (let i = 0; i < this.$state.cacheList.length; i++) {
      //     if (this.$state.cacheList[i].seasons[0].seasonId === data.seasonId) {
      //       console.log('there is data with same id')
      //     } else {
      //       console.log('lets go')
      //       this.cacheList.find((f: any) => f.id === data.id).seasons.push({ ...data })
      //     }
      //   }
      // }
    }
  }
})
// this.cacheList.find((f: any) => f.id === data.id).seasons.push({ ...data })
