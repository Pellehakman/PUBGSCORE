import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import { usePlayerStore } from '@/stores/playerStore'
import $lastPlayedWith from '../statistics/lastPlayedWith'

class GetPlayers {
  async GetPlayers(name?: any) {
    const generalStore = useGeneralStore()
    const cache = useCache()
    // zoom out of the univers instead of zooming in
    const findOut = () => {
      return name
    }

    const what = findOut()
    console.log(what)
    const player = `players?filter[playerNames]=${what}`
    const player_url = `${player}`

    await fetch(`${import.meta.env.VITE_API_URL}${player_url}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())

      .then(async (response) => {
        if (generalStore.$state.lastPlayedWith < 1) {
          $lastPlayedWith.GetLastPlayedWith(response)
        }

        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i]) {
            const data = {
              id: response.data[i].id,
              name: response.data[i].attributes.name,
              matches: response.data[i].relationships.matches.data,
              lifetime: [],
              seasons: []
            }
            cache.letsCache(data)
          }
        }
      })

      .then(async () => {
        // await $initPlayers.setInit()
        // await $activePlayers.activePlayers(what)
      })

      .catch((err) => {
        console.log(err)
      })
  }
}

const $getPlayers = new GetPlayers()
export default $getPlayers
