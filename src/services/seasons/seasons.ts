class Seasons {
  normal: any
  ranked: any
  async GetSeasonsStats(ign_id: string) {
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
        this.normal = await response.data.attributes.gameModeStats

        sessionStorage.setItem('_user_season_stats_normal', JSON.stringify(this.normal))
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
        this.ranked = await response.data.attributes.rankedGameModeStats
        sessionStorage.setItem('_user_season_stats_ranked', JSON.stringify(this.ranked))
      })
  }
}

const $seasons = new Seasons()
export default $seasons
