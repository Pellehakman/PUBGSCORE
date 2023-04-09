import { useCache } from '@/stores/cacheStore'
import { usePlayerStore } from '@/stores/playerStore'
import $lifetime from '../statistics/lifetime'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class InitPlayers {
  async setInit(lastPlayedWith: any) {
    console.log(lastPlayedWith)
    // const cache = useCache()
    const players = usePlayerStore()
    const toCache = lastPlayedWith

    if (players.$state.player1.length < 1) {
      for (let i = 0; i < toCache.length; i++) {
        if (
          toCache[i] !== players.$state.player2.name &&
          toCache[i] !== players.$state.player3.name &&
          toCache[i] !== players.$state.player4.name
        ) {
          await players.setPlayer1({ name: toCache[i], id: toCache[i].id })
        }
      }
    }
  }
}

const $initPlayers = new InitPlayers()
export default $initPlayers
