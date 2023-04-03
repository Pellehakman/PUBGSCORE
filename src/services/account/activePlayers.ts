import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
import $seasons from '../seasons/seasons'
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
    const sendData = {
      player: num,
      id: await data.id,
      name: await data.name
    }

    switch (num) {
      case 1:
        await players.setPlayer1(sendData)
        break
      case 2:
        await players.setPlayer2(sendData)
        break
      case 3:
        await players.setPlayer3(sendData)
        break
      case 4:
        await players.setPlayer4(sendData)
        break
    }

    // await $lifetime.GetLifetime()
    // await $seasons.GetSeasonsStats()
  }
}

const $activePlayers = new ActivePlayers()
export default $activePlayers
