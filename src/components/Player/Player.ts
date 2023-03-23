import $pubgINIT from '@/services/account/pubgINIT'

import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Player',
  setup() {
    const options = useOptions()
    const cache = useCache()

    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest('#playerSearchDropdown')) {
        playerDropdown.value = false
      }
    })
    const playerDropdown = ref(false)
    const handlePlayerDropdown = () => {
      playerDropdown.value = !playerDropdown.value
    }
    const playerSearch = ref('')
    const findPlayer = () => {
      if (
        JSON.parse(JSON.stringify(cache.$state.cacheList)).find(
          (f: any) => f.name === playerSearch.value
        )
      ) {
        return JSON.parse(JSON.stringify(cache.$state.cacheList)).find(
          (f: any) => f.name === playerSearch.value
        )
      } else {
        return $pubgINIT.GetPlayer(playerSearch.value)
      }
    }

    // division.bro.official.pc-2018-22
    const findSeason = (player: any) => {
      const season = player.seasons.filter(async (f: any) => {
        if (f.seasonId === 'division.bro.official.pc-2018-22') {
          return f
        }
      })
      return season
    }

    const filterData = async () => {
      const player = await findPlayer()
      const season = await findSeason(player)
      console.log(await JSON.parse(JSON.stringify(cache.$state.cacheList)))

      console.log(season)
    }

    return { handlePlayerDropdown, playerDropdown, playerSearch, filterData }
  }
})
