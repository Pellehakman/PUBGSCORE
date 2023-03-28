import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import { usePlayerStore } from '@/stores/playerStore'
import { parse } from '@vue/compiler-dom'
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
          players.setPlayer1(toCache[i].name)
        }
      }
    }
    console.log(parseJSON(players.$state.player1))

    if (players.$state.player2.length < 1) {
      for (let i = 0; i < toCache.length; i++) {
        if (
          toCache[i].name !== players.$state.player1 &&
          toCache[i].name !== players.$state.player3 &&
          toCache[i].name !== players.$state.player4
        ) {
          await players.setPlayer2(await toCache[i].name)
        }
      }
    }

    if (players.$state.player3.length < 1) {
      for (let i = 0; i < toCache.length; i++) {
        if (
          toCache[i].name !== players.$state.player1 &&
          toCache[i].name !== players.$state.player2 &&
          toCache[i].name !== players.$state.player4
        ) {
          await players.setPlayer3(await toCache[i].name)
        }
      }
    }

    if (players.$state.player4.length < 1) {
      for (let i = 0; i < toCache.length; i++) {
        if (
          toCache[i].name !== players.$state.player1 &&
          toCache[i].name !== players.$state.player2 &&
          toCache[i].name !== players.$state.player3
        ) {
          await players.setPlayer4(await toCache[i].name)
        }
      }
    }
    console.log(parseJSON(players.$state))
  }
}

const $activePlayers = new ActivePlayers()
export default $activePlayers
