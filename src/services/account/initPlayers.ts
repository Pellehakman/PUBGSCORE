import { useCache } from '@/stores/cacheStore'
import { usePlayerStore } from '@/stores/playerStore'
import $lifetime from '../statistics/lifetime'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class InitPlayers {
  async setInit(search: any) {
    const cache = useCache()
    const players = usePlayerStore()
    const toCache = parseJSON(cache.$state.cacheList)

    for (let i = 0; i < toCache.length; i++) {
      if (toCache[i].name === search) {
        players.setPlayer1({ name: toCache[i].name, id: toCache[i].id })
      }
    }

    for (let i = 0; i < toCache.length; i++) {
      if (
        toCache[i].name !== players.$state.player1.name &&
        toCache[i].name !== players.$state.player3.name &&
        toCache[i].name !== players.$state.player4.name
      ) {
        await players.setPlayer2({ name: toCache[i].name, id: toCache[i].id })
      }
    }

    for (let i = 0; i < toCache.length; i++) {
      if (
        toCache[i].name !== players.$state.player1.name &&
        toCache[i].name !== players.$state.player2.name &&
        toCache[i].name !== players.$state.player4.name
      ) {
        await players.setPlayer3({ name: toCache[i].name, id: toCache[i].id })
      }
    }

    for (let i = 0; i < toCache.length; i++) {
      if (
        toCache[i].name !== players.$state.player1.name &&
        toCache[i].name !== players.$state.player2.name &&
        toCache[i].name !== players.$state.player3.name
      ) {
        await players.setPlayer4({ name: toCache[i].name, id: toCache[i].id })
      }
    }

    await $lifetime.GetLifetime()
  }
}

const $initPlayers = new InitPlayers()
export default $initPlayers
