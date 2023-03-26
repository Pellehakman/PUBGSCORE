import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import { usePlayerStore } from '@/stores/playerStore'
import $lifetime from '../statistics/lifetime'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class ActivePlayers {
  async setInit(data: any) {
    const cache = useCache()
    const players = usePlayerStore()

    players.setPlayerOne(parseJSON(cache.$state.cacheList).find((f: any) => f.name === data))
    
    
    
    
    
    
    
    
    
    
    
    
    // HÄR SLUTAT DU! <----------------









    // find whos in setPLayerOne and take anyone else then that.
    players.setPlayerTwo(parseJSON(cache.$state.cacheList).find)
    // $lifetime.GetLifetime()
  }
}

const $activePlayers = new ActivePlayers()
export default $activePlayers
