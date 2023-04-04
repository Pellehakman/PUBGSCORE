import { useCache } from '@/stores/cacheStore'
import { useDisplayPlayerStore } from '@/stores/display/displayPlayer1'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
import { parse } from '@fortawesome/fontawesome-svg-core'
const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))

class DisplayPlayer {
  async getPlayer() {
    const cache = useCache()
    const displayPlayers = useDisplayPlayerStore()
    const players = usePlayerStore()
    const options = useOptions()

    function calcLife(data: any) {
      console.log('life 2')
      return data.lifetime.find((f: any) => f.gamemode === options.$state.options.gamemode)
    }

    async function calcSeason(data: any) {
      return parseJSON(cache.$state.cacheList)
        .find((f: any) => f.id === data.id)
        .seasons.find(
          (v: any) =>
            v.gamemode === options.$state.options.gamemode &&
            v.seasonId === options.$state.options.season
        )
    }

    const findPlayer1 = async () => {
      if (options.$state.options.alltime === 'alltime') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player1.name
        )
        return await calcLife(data)
      } else if (options.$state.options.alltime === 'season') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player1.name
        )
        return await calcSeason(data)
      }
    }
    displayPlayers.setDisplayPlayer1(findPlayer1())

    const findPlayer2 = async () => {
      if (options.$state.options.alltime === 'alltime') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player2.name
        )
        return await calcLife(data)
      } else if (options.$state.options.alltime === 'season') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player2.name
        )
        return await calcSeason(data)
      }
    }
    displayPlayers.setDisplayPlayer2(findPlayer2())

    // if (players.$state.player2) {
    //   const findPlayer2 = async () => {
    //     const data = parseJSON(cache.$state.cacheList).find(
    //       (f: any) => f.name === players.$state.player2.name
    //     )
    //     if (options.$state.options.alltime === 'alltime') {
    //       return data.lifetime.find((f: any) => f.gamemode === options.$state.options.gamemode)
    //         .gameModeStats[options.$state.options.gamemode]
    //     } else if (options.$state.options.alltime === 'season') {
    //       return parseJSON(cache.$state.cacheList)
    //         .find((f: any) => f.id === data.id)
    //         .seasons.find(
    //           (g: any) =>
    //             g.seasonId === options.$state.options.season &&
    //             g.gamemode === options.$state.options.gamemode
    //         )
    //     }
    //   }
    //   displayPlayers.setDisplayPlayer2(findPlayer2())
    // }
  }
}

const $displayPlayer = new DisplayPlayer()
export default $displayPlayer
