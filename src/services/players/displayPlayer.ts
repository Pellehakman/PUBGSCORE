import { useCache } from '@/stores/cacheStore'
import { useDisplayPlayerStore } from '@/stores/display/displayPlayer1'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
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
      if ((await options.$state.options.alltime) === 'alltime') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player1.name
        )
        // Check if data is undefined
        if (data !== undefined) {
          return await calcLife(data)
        } else {
          console.log('No data found for player 1!')
          return null
        }
      } else if (options.$state.options.alltime === 'season') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player1.name
        )
        // Check if data is undefined
        if (data !== undefined) {
          return await calcSeason(data)
        } else {
          console.log('No data found for player 1!')
          return null
        }
      }
    }

    displayPlayers.setDisplayPlayer1(findPlayer1())

    const findPlayer2 = async () => {
      if ((await options.$state.options.alltime) === 'alltime') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player2.name
        )
        // Check if data is undefined
        if (data !== undefined) {
          return await calcLife(data)
        } else {
          console.log('No data found for player 2!')
          return null
        }
      } else if (options.$state.options.alltime === 'season') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player2.name
        )
        // Check if data is undefined
        if (data !== undefined) {
          return await calcSeason(data)
        } else {
          console.log('No data found for player 2!')
          return null
        }
      }
    }

    displayPlayers.setDisplayPlayer2(findPlayer2())

    const findPlayer3 = async () => {
      if ((await options.$state.options.alltime) === 'alltime') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player3.name
        )
        // Check if data is undefined
        if (data !== undefined) {
          return await calcLife(data)
        } else {
          console.log('No data found for player 3!')
          return null
        }
      } else if (options.$state.options.alltime === 'season') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player3.name
        )
        // Check if data is undefined
        if (data !== undefined) {
          return await calcSeason(data)
        } else {
          console.log('No data found for player 3!')
          return null
        }
      }
    }

    displayPlayers.setDisplayPlayer3(findPlayer3())

    const findPlayer4 = async () => {
      if ((await options.$state.options.alltime) === 'alltime') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player4.name
        )
        // Check if data is undefined
        if (data !== undefined) {
          return await calcLife(data)
        } else {
          console.log('No data found for player 4!')
          return null
        }
      } else if (options.$state.options.alltime === 'season') {
        const data = parseJSON(cache.$state.cacheList).find(
          (f: any) => f.name === players.$state.player4.name
        )
        // Check if data is undefined
        if (data !== undefined) {
          return await calcSeason(data)
        } else {
          console.log('No data found for player 4!')
          return null
        }
      }
    }

    displayPlayers.setDisplayPlayer4(findPlayer4())
  }
}

const $displayPlayer = new DisplayPlayer()
export default $displayPlayer
