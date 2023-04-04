import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'
import $displayPlayer from '../players/displayPlayer'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class Seasons {
  normal: any
  data: any

  async GetSeasonsStats() {
    const options = useOptions()
    const players = usePlayerStore()
    const cache = useCache()
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
    const ign_id_url = `players?filter[playerIds]=${playersString}&filter[gamepad]=false`
    const gamemode_url = parseJSON(options.$state.options).gamemode

    const season_id_url = `seasons/${parseJSON(options.$state.options).season}`

    if (parseJSON(options.$state.options).alltime === 'season') {
      await fetch(
        `${import.meta.env.VITE_API_URL}${season_id_url}/gameMode/${gamemode_url}/${ign_id_url} `,
        {
          method: 'GET',
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            Accept: 'application/vnd.api+json'
          }
        }
      )
        .then((response) => response.json())
        .then(async (response) => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i]) {
              const data = {
                id: response.data[i].relationships.player.data.id,
                seasonId: options.$state.options.season,
                gamemode: JSON.parse(JSON.stringify(options.$state.options)).gamemode,
                gameModeStats: response.data[i].attributes.gameModeStats
              }
              cache.letsCacheSeasons({ ...data })
            }
          }
        })

        .catch((error: any) => {
          console.log(error)
        })
    }
    await $displayPlayer.getPlayer()
  }
}

const $seasons = new Seasons()
export default $seasons
