import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class ActivePlayers {
  async activePlayers(searchName: any) {
    const cache = useCache()
    const players = usePlayerStore()
    const options = useOptions()

    const data = parseJSON(cache.$state.cacheList).find(
      (f: any) => f.name === players.$state.player1.name
    )

    if (options.$state.options.alltime === 'alltime') {
      return data.lifetime.find((f: any) => f.gamemode === options.$state.options.gamemode)
    }
  }
}

const $activePlayers = new ActivePlayers()
export default $activePlayers
