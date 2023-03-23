import type { playerModel } from '@/models/models'
import { useChangeStore } from '@/stores/changeStore'
import { useCache } from '@/stores/cacheStore'
import $lifetime from '../statistics/lifetime'
import $matches from '../statistics/matches'

class PubgINIT {
  fetchPlayer: playerModel | undefined | any
  error: string | undefined
  change: boolean | undefined

  get FetchPlayer() {
    return this.fetchPlayer
  }
  get Error() {
    return this.error
  }

  async GetPlayer(playerName: string) {
    const cache = useCache()
    const changeStore: any = useChangeStore()
    const player = `players?filter[playerNames]=${playerName}`
    const player_url = `${player}`

    if (
      JSON.parse(JSON.stringify(cache.$state.cacheList)).find((f: any) => f.name === playerName)
    ) {
      console.log('PLAYER FOUND')
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
            console.log('ERROR: service:pubgINIT.ts', response.errors)
            this.error = await response.errors[0].detail
          } else {
            console.log(response)
            const data = {
              id: response.data[0].id,
              name: response.data[0].attributes.name,
              matches: response.data[0].relationships.matches.data,
              lifetime: [],
              lastPlayedWith: [],
              seasons: []
            }
            cache.letsCache(data)
            changeStore.isChange(true)
            await $lifetime.GetLifetime()
            await $matches.GetMatches()

            this.error = ''
          }
        })

        .catch((err) => {
          console.log(err)
        })
    }
  }
}

const $pubgINIT = new PubgINIT()
export default $pubgINIT
