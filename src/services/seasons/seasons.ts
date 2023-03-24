import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

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

    const ign_id_url = `players/${cache.$state.cacheList.at(0).id}/`
    console.log(JSON.parse(JSON.stringify(options.$state.options)).season)

    const season_id_url = `seasons/${this.seasonId.value}`

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

    await fetch(`${import.meta.env.VITE_API_URL}${ign_id_url}${season_id_url}/ranked`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        console.log('RANKED GAME MODE FETCH')

        this.data = {
          id: this.normal.data.relationships.player.data.id,
          seasonId: this.normal.data.relationships.season.data.id,
          normal: [this.normal.data.attributes.gameModeStats],
          ranked: [response.data.attributes.rankedGameModeStats]
        }
      })
      .then(() => {
        cache.letsCacheSeasons(this.data)
      })
  }
}

const $seasons = new Seasons()
export default $seasons
