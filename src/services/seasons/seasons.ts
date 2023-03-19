import { useUserStore } from '@/stores/userStore'

class Seasons {
  // normal: any
  // ranked: any
  async GetSeasonsStats(ign_id: string) {
    const userStore: any = useUserStore()
    const ign_id_url = `players/${ign_id}/`
    const seasonId = 'division.bro.official.pc-2018-22'
    const season_id_url = `seasons/${seasonId}`

    await fetch(`${import.meta.env.VITE_API_URL}${ign_id_url}${season_id_url}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        console.log('NORMAL GAME MODE FETCH')
        userStore.addNormalLifetime(response.data.attributes.gameModeStats)
      })
      .catch((error: any) => {
        console.log(error)
      })

    await fetch(`${import.meta.env.VITE_API_URL}${ign_id_url}${season_id_url}/ranked`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        console.log('RANKED GAME MODE FETCH')
        userStore.addRankedLifetime(response.data.attributes.rankedGameModeStats)
      })
  }
}

const $seasons = new Seasons()
export default $seasons
