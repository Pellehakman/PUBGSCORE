import { useCache } from '@/stores/cacheStore'
import $activePlayers from './activePlayers'

class GetPlayer {
  async GetPlayer(playerName: string, num: number) {
    const cache = useCache()
    const player = `players?filter[playerNames]=${playerName}`
    const player_url = `${player}`

    if (
      JSON.parse(JSON.stringify(cache.$state.cacheList)).find((f: any) => f.name === playerName)
    ) {
      $activePlayers.activePlayers(playerName, num)
    } else {
      await fetch(`${import.meta.env.VITE_API_URL}${player_url}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          Accept: 'application/vnd.api+json'
        }
      })
        .then((response) => response.json())
        .then(async (response) => {
          if (response.errors) {
            console.log('ERROR: service:getPlayer.ts', response.errors)
          } else {
            const data = {
              id: response.data[0].id,
              name: response.data[0].attributes.name,
              lifetime: [],
              seasons: []
            }
            cache.letsCache(data)
            $activePlayers.activePlayers(playerName, num)
          }
        })

        .catch((err) => {
          console.log(err)
        })
    }
  }
}

const $getPlayer = new GetPlayer()
export default $getPlayer
