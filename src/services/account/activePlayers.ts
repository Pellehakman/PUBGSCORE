import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
import $lifetime from '../statistics/lifetime'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class ActivePlayers {
  async activePlayers(playerName: string, num: number) {
    const cache = useCache()
    const players = usePlayerStore()

    const what = () => {
      const data = parseJSON(cache.$state.cacheList).find((f: any) => f.name === playerName)
      return data
    }
    const data = what()

    console.log(data)
    switch (num) {
      case 1:
        players.setPlayer1(data)
        break
      case 2:
        players.setPlayer2(data)
        break
      case 3:
        players.setPlayer3(data)
        break
      case 4:
        players.setPlayer4(data)
        break
    }

    $lifetime.GetLifetime()
    // const data = parseJSON(cache.$state.cacheList).find(
    //   (f: any) => f.name === players.$state.player1.name
    // )

    // if (options.$state.options.alltime === 'alltime') {
    //   return data.lifetime.find((f: any) => f.gamemode === options.$state.options.gamemode)
    // }
  }
}

const $activePlayers = new ActivePlayers()
export default $activePlayers
