import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import seasonOptions from '@/services/seasons/seasons.json'
import { usePlayerStore } from '@/stores/playerStore'

class Lifetime {
  async GetLifetime(player1: any) {
    const cache = useCache()
    const data = seasonOptions
    const options = useOptions()
    const player = usePlayerStore()
    console.log(player1)
    // if players in cache, check default options value and then run lifetime.
    // active players should only be id. playerone is always the name you searched for
    // the other ones is the rest

    // const gamemode = ref(
    //   (await JSON.parse(JSON.stringify(options.$state.options.gamemode))) || data.gamemode[0].id
    // )
    // console.log('gamemon', gamemode)
    // function getAllUserBookings() {
    //   const a = JSON.parse(JSON.stringify(player.$state.playerOne.id))
    //   const b = JSON.parse(JSON.stringify(player.$state.playerTwo.id))
    //   const c = JSON.parse(JSON.stringify(player.$state.playerThree.id))
    //   const d = JSON.parse(JSON.stringify(player.$state.playerFour.id))
    //   return a.concat(b, c, d)
    // }

    // const findBookings = getAllUserBookings()

    //   const players = JSON.parse(JSON.stringify(cache.$state.cacheList))
    //     .map((f: any) => f.id)
    //     .join(',')
    // }
    const lastPlayedWith = JSON.parse(
      JSON.stringify(cache.$state.cacheList.at(-1).lastPlayedWith[0])
    )
    const values = Object.values(lastPlayedWith)
    const lastPlayedWithString = values.join(',')

    const lifetime_url = `seasons/lifetime/gameMode/${
      JSON.stringify(options.$state.options.gamemode) || data.gamemode[0].id
    }/players?filter[playerIds]=${lastPlayedWithString}`

    await fetch(`${import.meta.env.VITE_API_URL}${lifetime_url}`, {
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
            id: response.data[0].relationships.player.data.id,
            gamemode: JSON.parse(JSON.stringify(options.$state.options)).gamemode,
            gameModeStats: response.data[0].attributes.gameModeStats
          }
          cache.letsCacheLifetime({ ...data })
        }
        if (response.data[1]) {
          const data = {
            id: response.data[1].relationships.player.data.id,
            gamemode: JSON.parse(JSON.stringify(options.$state.options)).gamemode,
            gameModeStats: response.data[1].attributes.gameModeStats
          }
          cache.letsCacheLifetime({ ...data })
        }
        if (response.data[2]) {
          const data = {
            id: response.data[2].relationships.player.data.id,
            gamemode: JSON.parse(JSON.stringify(options.$state.options)).gamemode,
            gameModeStats: response.data[2].attributes.gameModeStats
          }
          cache.letsCacheLifetime({ ...data })
        }
        if (response.data[3]) {
          const data = {
            id: response.data[3].relationships.player.data.id,
            gamemode: JSON.parse(JSON.stringify(options.$state.options)).gamemode,
            gameModeStats: response.data[3].attributes.gameModeStats
          }
          cache.letsCacheLifetime({ ...data })
        }
      })
  }
}

const $lifetime = new Lifetime()
export default $lifetime
