import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import $getPlayers from '../account/getPlayers'

class LastPlayedWith {
  state: any
  async GetLastPlayedWith(data: any) {
    const last_match_id = data.data[0].relationships.matches.data[0].id

    const player_id = data.data[0].attributes.name
    const match = `matches/${last_match_id}`
    const match_url = `${match}`

    // console.log(JSON.parse(JSON.stringify(cache.$state.cacheList.at(-1).matches.at(-1).id)))
    await fetch(`${import.meta.env.VITE_API_URL}${match_url}`, {
      method: 'GET',
      headers: {
        // authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        // finding playerRosterId based on name or id
        const playerRosterId = response.included
          .filter((f: any) => f.type === 'participant')
          .filter((f: any) => {
            if (f.attributes.stats.name === player_id) return f
          })

        const rosters = response.included
          .filter((f: any) => f.type === 'roster')
          .map((f: any) => f.relationships.participants.data)

        const team = rosters
          .find((arr: any) => arr.some((obj: any) => obj.id === playerRosterId[0].id))
          .map((f: any) => f.id)

        function getLastPlayedWithBySlot(num: string) {
          return response.included
            .filter((f: any) => f.type === 'participant')
            .filter((v: any) => v.id === team[num])
        }
        function getPlayedWith() {
          const a = getLastPlayedWithBySlot('0')
          const b = getLastPlayedWithBySlot('1')
          const c = getLastPlayedWithBySlot('2')
          const d = getLastPlayedWithBySlot('3')
          return a.concat(b, c, d)
        }
        const generalStore = useGeneralStore()

        // const lastPlayedWith = Object.values(
        //   getPlayedWith().map((f: any) => f.attributes.stats.playerId)
        // ).join(',')
        const lastPlayedWith = Object.values(
          getPlayedWith().map((f: any) => f.attributes.stats.name)
        ).join(',')

        generalStore.setSearchName(lastPlayedWith)
        console.log(lastPlayedWith)
        await $getPlayers.GetPlayers(lastPlayedWith)
      })
  }
}

const $lastPlayedWith = new LastPlayedWith()
export default $lastPlayedWith
