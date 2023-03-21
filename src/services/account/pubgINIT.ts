import type { playerModel } from '@/models/models'
import { useChangeStore } from '@/stores/changeStore'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
import $fireAccount from './fireAccount'
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
          // router.push('/statistics')

          this.error = ''
        }
      })
      .then(() => {
        $lifetime.GetLifetime()
      })
      .then(() => {
        $matches.GetMatches()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const $pubgINIT = new PubgINIT()
export default $pubgINIT
