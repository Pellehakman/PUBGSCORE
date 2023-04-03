import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import seasonOptions from '@/services/seasons/seasons.json'
import { usePlayerStore } from '@/stores/playerStore'
import $player1 from '../players/displayPlayer1'
import $displayPlayer1 from '../players/displayPlayer1'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class Lifetime {
  async GetLifetime() {
    const players = usePlayerStore()
    const cache = useCache()
    const data = seasonOptions
    const options = useOptions()

    const getIdsFromActive = () => {
      const ids = [] as any
      if (players.$state.player1.id) {
        ids.push(players.$state.player1.id)
      }
      if (players.$state.player2.id) {
        ids.push(players.$state.player2.id)
      }
      return ids
    }
    const idsFromFunction = getIdsFromActive()

    const playersString = Object.values([idsFromFunction]).join(',')

    const lifetime_url = `seasons/lifetime/gameMode/${
      parseJSON(options.$state.options.gamemode) || data.gamemode[0].id
    }/players?filter[playerIds]=${playersString}`

    await fetch(`${import.meta.env.VITE_API_URL}${lifetime_url}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i]) {
            const data = {
              id: response.data[i].relationships.player.data.id,
              gamemode: JSON.parse(JSON.stringify(options.$state.options)).gamemode,
              gameModeStats: response.data[i].attributes.gameModeStats
            }

            cache.letsCacheLifetime({ ...data })
          }
        }
      })
    // <--- här slutade du, hämta "num" i getplauer
    await $displayPlayer1.getPlayer1()
  }
}

const $lifetime = new Lifetime()
export default $lifetime
