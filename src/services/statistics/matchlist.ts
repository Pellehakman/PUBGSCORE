import { getAuth } from 'firebase/auth'

class Matchlist {
  state: any
  async GetMatchlist(ign: string) {
    const player = `players?filter[playerNames]=${ign}`
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
      })
  }
}

const $matchlist = new Matchlist()
export default $matchlist
