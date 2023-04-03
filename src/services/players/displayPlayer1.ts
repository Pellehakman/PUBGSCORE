import { useCache } from '@/stores/cacheStore'
import { useDisplayPlayerStore } from '@/stores/display/displayPlayer1'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class DisplayPlayer1 {
  displayData: any

  get DisplayData() {
    return this.displayData
  }
  async getPlayer1() {
    const cache = useCache()
    const displayPlayer1 = useDisplayPlayerStore()
    const players = usePlayerStore()
    const options = useOptions()

    const data = parseJSON(cache.$state.cacheList).find(
      (f: any) => f.name === players.$state.player1.name
    )

    const findData = () => {
      if (options.$state.options.alltime === 'alltime') {
        return data.lifetime.find((f: any) => f.gamemode === options.$state.options.gamemode)
          .gameModeStats[options.$state.options.gamemode]
      } else if (options.$state.options.alltime === 'season') {
        return data.seasons.find((f: any) => f.seasonId === options.$state.options.season)
      }
    }
    displayPlayer1.setDisplayPlayer1(await findData())

    // this.displayData = calcData()
  }
}

const $displayPlayer1 = new DisplayPlayer1()
export default $displayPlayer1
