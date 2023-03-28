import $activePlayers from '@/services/account/activePlayers'
import $getPlayer from '@/services/account/getPlayer'
import $lifetime from '@/services/statistics/lifetime'
import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
import { defineComponent, onMounted, reactive, ref, watch } from 'vue'

export default defineComponent({
  name: 'Player',
  props: { hej: Number },
  setup() {
    const options = useOptions()
    const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))
    const activePlayer = ref('SEARCH FOR PLAYER')
    const cache = useCache()
    const players = usePlayerStore()
    const generalStore = useGeneralStore()
    const playerName = ref()
    const playerSearch = ref('')
    const dropdown1 = ref(false)
    const dropdown2 = ref(false)
    const dropdown3 = ref(false)
    const dropdown4 = ref(false)

    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest(`#playerDropdown`)) {
        dropdown1.value = false
        dropdown2.value = false
        dropdown3.value = false
        dropdown4.value = false
      }
    })

    const handlePlayerDropdown = (index: number) => {
      if (index === 1) {
        dropdown1.value = !dropdown1.value
      }
      if (index === 2) {
        dropdown2.value = !dropdown2.value
      }
      if (index === 3) {
        dropdown3.value = !dropdown3.value
      }
      if (index === 4) {
        dropdown4.value = !dropdown4.value
      }
    }
    const displayPlayer1 = ref()
    const loading = ref(false)
    console.log(parseJSON(players.$state))

    const getPlayer = async () => {
      // loading.value = true
      // const data = parseJSON(cache.$state.cacheList).find((f: any) => f.name === playerSearch.value)
      // if (data) {
      //   players.setPlayerOne(data)
      // } else {

      await $getPlayer.GetPlayer(playerSearch.value)
      await $activePlayers.setInit(playerSearch.value)
      // await $activePlayers.setInit()
      // await $lifetime.GetLifetime()
      //   players.setPlayerOne(
      //     parseJSON(cache.$state.cacheList).find((f: any) => f.name === playerSearch.value)
      //   )
      // }
      // if (parseJSON(cache.$state.cacheList.length > 1)) {
      //   players.setPlayerTwo(parseJSON(cache.$state.cacheList.at(0)))
      // }
      loading.value = false
    }

    return {
      loading,
      cache,
      displayPlayer1,

      activePlayer,
      handlePlayerDropdown,
      dropdown1,
      dropdown2,
      dropdown3,
      dropdown4,
      playerSearch,
      playerName,
      getPlayer,
      players
    }
  }
})
