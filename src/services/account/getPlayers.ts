import type { playerModel } from '@/models/models'
import { useChangeStore } from '@/stores/changeStore'
import { useCache } from '@/stores/cacheStore'
import $lifetime from '../statistics/lifetime'
import $matches from '../statistics/matches'

class GetPlayers {
  fetchPlayer: playerModel | undefined | any
  error: string | undefined
  change: boolean | undefined

  get FetchPlayer() {
    return this.fetchPlayer
  }
  get Error() {
    return this.error
  }

  async GetPlayers() {
    const cache = useCache()

    const hej = JSON.parse(JSON.stringify(cache.$state.cacheList.at(0).lastPlayedWith[0]))

    const values = Object.values(hej)
    const string = values.join(',')

    const players = `players?filter[playerIds]=${string}`
    const player_url = `${players}`

    // if (
    //   JSON.parse(JSON.stringify(cache.$state.cacheList)).find((f: any) => f.name === playerName)
    // ) {
    //   console.log('PLAYER FOUND')
    // } else {
    //   console.log('NO PLAYER, LETS ADD')
    await fetch(`${import.meta.env.VITE_API_URL}${player_url}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.data[0]) {
          const data = {
            id: response.data[0].id,
            name: response.data[0].attributes.name,
            matches: response.data[0].relationships.matches.data,
            lifetime: [],
            lastPlayedWith: [],
            seasons: []
          }
          cache.letsCache(data)
        }
        if (response.data[1]) {
          const data = {
            id: response.data[1].id,
            name: response.data[1].attributes.name,
            matches: response.data[1].relationships.matches.data,
            lifetime: [],
            lastPlayedWith: [],
            seasons: []
          }
          cache.letsCache(data)
        }
        if (response.data[2]) {
          const data = {
            id: response.data[2].id,
            name: response.data[2].attributes.name,
            matches: response.data[2].relationships.matches.data,
            lifetime: [],
            lastPlayedWith: [],
            seasons: []
          }
          cache.letsCache(data)
        }
        if (response.data[3]) {
          const data = {
            id: response.data[3].id,
            name: response.data[3].attributes.name,
            matches: response.data[3].relationships.matches.data,
            lifetime: [],
            lastPlayedWith: [],
            seasons: []
          }
          cache.letsCache(data)
        }
      })
      .then(() => {
        $lifetime.GetLifetime()
      })

      .catch((err) => {
        console.log(err)
      })
    //     .then(async (response) => {
    //       if (response.errors) {
    //         console.log('ERROR: service:getPlayer.ts', response.errors)
    //         this.error = await response.errors[0].detail
    //       } else {
    //         console.log(response)
    //         const data = {
    //           id: response.data[0].id,
    //           name: response.data[0].attributes.name,
    //           matches: response.data[0].relationships.matches.data,
    //           lifetime: [],
    //           lastPlayedWith: [],
    //           seasons: []
    //         }
    //         cache.letsCache(data)
    //         changeStore.isChange(true)
    //         await $lifetime.GetLifetime()
    //         await $matches.GetMatches()

    //         this.error = ''
    //       }
    //     })

    // .catch((err) => {
    //   console.log(err)
    // })
    // }
  }
}

const $getPlayers = new GetPlayers()
export default $getPlayers
