import $seasons from '@/services/seasons/seasons'

import { defineComponent, ref } from 'vue'

import { useChangeStore } from '@/stores/changeStore'
import { nanoid } from 'nanoid'
import { useCache } from '@/stores/cacheStore'

export default defineComponent({
  name: 'SeasonStats',
  setup() {
    const seasonStats = ref()
    const cache = useCache()
    const useChange = useChangeStore()
    const loading = ref(false)
    const playerName = ref<any | undefined>('NO PLAYER')

    const update = ref(false)
    const handleUpdate = async () => {
      update.value = true
      handleMatches()
    }
    console.log('he')
    const handleMatches = async () => {
      loading.value = true
      console.log(JSON.parse(JSON.stringify(cache.$state.cacheList.at(-1))).id)
      await $seasons.GetSeasonsStats(JSON.parse(JSON.stringify(cache.$state.cacheList.at(-1))).id)
      // await $seasons.GetSeasonsStats(cache.cacheList)
      // if (JSON.parse(JSON.stringify(useChange.change)) === true) {
      //   await $seasons.GetSeasonsStats(userStore.user.id)
      //   useChange.isChange(false)
      // }
      // if (update.value === true) {
      //   await $seasons.GetSeasonsStats(userStore.user.id)
      // }
      // if (userStore.normal) {
      //   console.log('there is data in store')
      // } else {
      //   await $seasons.GetSeasonsStats(userStore.user.id)
      //   loading.value = false
      // }
      calculateStats()
      loading.value = false
    }
    const seasonData = ref()
    const calculateStats = () => {
      //   const normalSoloFPP = Object.entries(userStore.normal['solo-fpp'])
      //   const normalDuoFPP = Object.entries(userStore.normal['duo-fpp'])
      //   const normalSquadFPP = Object.entries(userStore.normal['squad-fpp'])
      //   const normalSoloTPP = Object.entries(userStore.normal['solo'])
      //   const normalDuoTPP = Object.entries(userStore.normal['duo'])
      //   const normalSquadTPP = Object.entries(userStore.normal['squad'])
      //   const rankedSquadFPP = Object.entries(userStore.ranked['squad-fpp'])
      //   const seasonStatsCollection = [
      //     ...normalSoloFPP,
      //     ...normalDuoFPP,
      //     ...normalSquadFPP,
      //     ...normalSoloTPP,
      //     ...normalDuoTPP,
      //     ...normalSquadTPP,
      //     ...rankedSquadFPP
      //   ]
      //   const wins = seasonStatsCollection
      //     .filter((name) => name.includes('wins'))
      //     .map((f) => f[1])
      //     .reduce((a: any, b: any) => a + b, 0)
      //   const kills = seasonStatsCollection
      //     .filter((name) => name.includes('kills'))
      //     .map((f) => f[1])
      //     .reduce((a: any, b: any) => a + b, 0)
      //   const assists = seasonStatsCollection
      //     .filter((name) => name.includes('assists'))
      //     .map((f) => f[1])
      //     .reduce((a: any, b: any) => a + b, 0)
      //   const damageDealt: any = seasonStatsCollection
      //     .filter((name) => name.includes('damageDealt'))
      //     .map((f) => f[1])
      //     .reduce((a: any, b: any) => a + b, 0)
      //   const roundsPlayed = seasonStatsCollection
      //     .filter((name) => name.includes('roundsPlayed'))
      //     .map((f) => f[1])
      //     .reduce((a: any, b: any) => a + b, 0)
      //   const losses = seasonStatsCollection
      //     .filter((name) => name.includes('losses'))
      //     .map((f) => f[1])
      //     .reduce((a: any, b: any) => a + b, 0)
      //   const data = {
      //     wins: wins,
      //     kills: kills,
      //     assists: assists,
      //     damageDealt: Math.round(damageDealt),
      //     roundsPlayed: roundsPlayed,
      //     losses: losses
      //   }
      //   seasonData.value = data
    }

    handleMatches()
    return {
      // toPinia,
      handleUpdate,
      playerName,

      seasonData,
      // getPlayerNameFromAuth,
      loading,
      seasonStats
    }
  }
})
