import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'
import $displayPlayer1 from '../players/displayPlayer1'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class Seasons {
  seasonId = ref('division.bro.official.pc-2018-22')
  normal: any
  data: any

  season(event: any) {
    this.seasonId.value = event.target.value
  }
  async GetSeasonsStats() {
    const cache = useCache()
    const options = useOptions()
    const players = usePlayerStore()
    const getIdsFromActive = () => {
      const ids = [] as any
      if (players.$state.player1.id) {
        ids.push(players.$state.player1.id)
      }
      if (players.$state.player2.id) {
        ids.push(players.$state.player2.id)
      }
      return ids
    }
    const idsFromFunction = getIdsFromActive()
    const playersString = Object.values([idsFromFunction]).join(',')
    const ign_id_url = `players/${playersString}/`
    const season_id_url = `seasons/${parseJSON(options.$state.options).season}`
    if (
      JSON.parse(JSON.stringify(cache.$state.cacheList)).find(
        (f: any) => f.seasons === options.$state.options.season
      )
    ) {
      console.log('PLAYER FOUND')
    } else {
      console.log('NO PLAYER, LETS ADD')
      if (parseJSON(options.$state.options).alltime === 'season') {
        await fetch(`${import.meta.env.VITE_API_URL}${ign_id_url}${season_id_url}`, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            Accept: 'application/vnd.api+json'
          }
        })
          .then((response) => response.json())
          .then(async (response) => {
            console.log(response)
            this.normal = response
          })
          .catch((error: any) => {
            console.log(error)
          })
      }

      await fetch(`${import.meta.env.VITE_API_URL}${ign_id_url}${season_id_url}/ranked`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          Accept: 'application/vnd.api+json'
        }
      })
        .then((response) => response.json())
        .then(async (response) => {
          this.data = {
            id: this.normal.data.relationships.player.data.id,
            seasonId: this.normal.data.relationships.season.data.id,
            normal: [this.normal.data.attributes.gameModeStats],
            ranked: [response.data.attributes.rankedGameModeStats]
          }
        })

        .then(async () => {
          cache.letsCacheSeasons(this.data)
          await $displayPlayer1.getPlayer1()
        })
    }
  }
}

const $seasons = new Seasons()
export default $seasons
