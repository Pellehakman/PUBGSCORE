import type { playerModel } from '@/models/models'
import { useCache } from '@/stores/cacheStore'
import { usePlayerStore } from '@/stores/playerStore'
import $activePlayers from './activePlayers'
import $lifetime from '../statistics/lifetime'

class GetPlayer {
  async GetPlayer(playerName: string, num: number) {
    const cache = useCache()
    const player = `players?filter[playerNames]=${playerName}`
    const player_url = `${player}`

    if (
      JSON.parse(JSON.stringify(cache.$state.cacheList)).find((f: any) => f.name === playerName)
    ) {
      console.log('PLAYER FOUND')
      $activePlayers.activePlayers(playerName, num)
    } else {
      console.log('NO PLAYER, LETS ADD')
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
              matches: response.data[0].relationships.matches.data,
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
