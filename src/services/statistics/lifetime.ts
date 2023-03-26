import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import seasonOptions from '@/services/seasons/seasons.json'
import { ref } from 'vue'

class Lifetime {
  async GetLifetime() {
    const cache = useCache()
    const data = seasonOptions
    console.log(data)
    const options = useOptions()
    // const gamemode = ref(
    //   (await JSON.parse(JSON.stringify(options.$state.options.gamemode))) || data.gamemode[0].id
    // )
    // console.log('gamemon', gamemode)

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
