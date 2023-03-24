import { useCache } from '@/stores/cacheStore'

class Matches {
  state: any
  async GetMatches() {
    const cache = useCache()
    // console.log(JSON.parse(JSON.stringify(cache.$state.cacheList)))
    //last match at(0)
    const match = `matches/${cache.$state.cacheList.at(0).matches.at(0).id}`
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
            if (f.attributes.stats.name === cache.$state.cacheList.at(0).name) return f
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

        const lastPlayedWith = getPlayedWith().map((f: any) => f.attributes.stats.playerId)

        const data = {
          name: cache.$state.cacheList.at(0).name,
          lastPlayedWith: lastPlayedWith
        }

        cache.letsCacheLastPlayedWith({ ...data })
      })
  }
}

const $matches = new Matches()
export default $matches
