import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
import $lifetime from '../statistics/lifetime'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class ActivePlayers {
  async activePlayers() {
    const cache = useCache()
    const players = usePlayerStore()
    const toCache = parseJSON(cache.$state.cacheList)
    const options = useOptions()
  }
}

const $activePlayers = new ActivePlayers()
export default $activePlayers
