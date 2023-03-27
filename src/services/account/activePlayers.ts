import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import { usePlayerStore } from '@/stores/playerStore'
import $lifetime from '../statistics/lifetime'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class ActivePlayers {
  async setInit(search: any) {
    const cache = useCache()
    const players = usePlayerStore()
    const toCache = parseJSON(cache.$state.cacheList)

    if (players.$state.player1.length < 1) {
      for (let i = 0; i < toCache.length; i++) {
        if (toCache[i].name === search) {
          await players.setPlayer1(await toCache[i])
        }
      }
    }

    if (players.$state.player2.length < 1) {
      for (let i = 0; i < toCache.length; i++) {
        if (
          i > 0 &&
          toCache[i].name !== players.$state.player1.name &&
          toCache[i].name !== players.$state.player3.name &&
          toCache[i].name !== players.$state.player4.name
        ) {
          await players.setPlayer2(await toCache[i])
        }
      }
    }

    if (players.$state.player3.length < 1) {
      for (let i = 0; i < toCache.length; i++) {
        if (
          i > 0 &&
          toCache[i].name !== players.$state.player1.name &&
          toCache[i].name !== players.$state.player2.name &&
          toCache[i].name !== players.$state.player4.name
        ) {
          await players.setPlayer3(await toCache[i])
        }
      }
    }

    if (players.$state.player4.length < 1) {
      for (let i = 0; i < toCache.length; i++) {
        if (
          i > 0 &&
          toCache[i].name !== players.$state.player1.name &&
          toCache[i].name !== players.$state.player2.name &&
          toCache[i].name !== players.$state.player3.name
        ) {
          await players.setPlayer4(await toCache[i])
        }
      }
    }

    console.log(parseJSON(players.$state.player4))
  }
}

const $activePlayers = new ActivePlayers()
export default $activePlayers
