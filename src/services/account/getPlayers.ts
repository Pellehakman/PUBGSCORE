import type { playerModel } from '@/models/models'
import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import { ref } from 'vue'
import $lastPlayedWith from '../statistics/lastPlayedWith'
import $matches from '../statistics/lastPlayedWith'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))
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

  async GetPlayers(name?: any) {
    const generalStore = useGeneralStore()

    const findOut = () => {
      if (parseJSON(generalStore.$state.lastPlayedWith.length < 1)) {
        return name
      } else {
        return parseJSON(generalStore.$state.lastPlayedWith)
      }
    }




    
    // HÄR SLUTADE DU--------------------------------------









    
    const what = findOut()
    console.log('here', what)

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
        console.log(response)
        if (response.data.length === 1) {
          $lastPlayedWith.GetLastPlayedWith(response)
        } else {
          console.log('hej')
        }
      })
      // .then(async (response) => {
      //   if (response.data[0]) {
      //     const data = {
      //       id: response.data[0].id,
      //       name: response.data[0].attributes.name,
      //       matches: response.data[0].relationships.matches.data,
      //       lifetime: [],
      //       seasons: []
      //     }
      //     cache.letsCache(data)
      //   }
      //   if (response.data[1]) {
      //     const data = {
      //       id: response.data[1].id,
      //       name: response.data[1].attributes.name,
      //       matches: response.data[1].relationships.matches.data,
      //       lifetime: [],
      //       seasons: []
      //     }

      //     cache.letsCache(data)
      //   }
      //   if (response.data[2]) {
      //     const data = {
      //       id: response.data[2].id,
      //       name: response.data[2].attributes.name,
      //       matches: response.data[2].relationships.matches.data,
      //       lifetime: [],
      //       seasons: []
      //     }

      //     cache.letsCache(data)
      //   }
      //   if (response.data[3]) {
      //     const data = {
      //       id: response.data[3].id,
      //       name: response.data[3].attributes.name,
      //       matches: response.data[3].relationships.matches.data,
      //       lifetime: [],
      //       seasons: []
      //     }

      //     cache.letsCache(data)
      //   }
      // })
      // .then(() => {
      //   $lifetime.GetLifetime()
      // })

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
