import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayers } from '@/stores/playerStore'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Player',
  setup() {
    const options = useOptions()
    const cache = useCache()
    const players = usePlayers()
    const playerName = ref()
    const playerSearch = ref('')
    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest('#playerSearchDropdown')) {
        playerDropdown.value = false
      }
    })
    const playerDropdown = ref(false)
    const handlePlayerDropdown = () => {
      playerDropdown.value = !playerDropdown.value
    }

    const handleHistoryName = (date: any) => {
      playerName.value = date.name
      playerSearch.value = date.name
    }

    const handleData = async (data: any) => {
      console.log(JSON.parse(JSON.stringify(options.$state.options)))
    }

    // search for player
    // if player === cache.player
    // get all data
    // listen to options (golbal)
    // loop data matching options

    const getPlayer = () => {
      if (
        JSON.parse(JSON.stringify(cache.$state.cacheList)).find(
          (f: any) => f.name === playerSearch.value
        )
      ) {
        const data = JSON.parse(JSON.stringify(cache.$state.cacheList)).filter(
          (f: any) => f.name === playerSearch.value
        )
        handleData(data)
        console.log('yes')
      } else {
        console.log('no')
      }
    }

    return {
      handlePlayerDropdown,
      playerDropdown,
      playerSearch,
      playerName,
      getPlayer,
      players,
      handleHistoryName
    }
  }
})
