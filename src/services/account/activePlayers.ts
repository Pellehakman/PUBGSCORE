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

    function howYouGetDataFromActivePlayer(num: string) {
      return parseJSON(cache.$state.cacheList).find((f: any) => f.name === num)
    }

    const activePlayer1 = howYouGetDataFromActivePlayer(parseJSON(players.$state.player1))
    console.log(activePlayer1)

    const data = [activePlayer1.id]
    // HÄR SLUTADE DU... Prova att skicka alla ids till lifetime och sen kör du lifetime
    // istället för att för från cachelist, kör från active players.ALLTID
    console.log(data)
    // $lifetime()

    console.log(options.$state.options)
  }
}

const $activePlayers = new ActivePlayers()
export default $activePlayers
