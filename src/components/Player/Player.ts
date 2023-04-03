import $getPlayer from '@/services/account/getPlayer'
import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'

import { defineComponent, ref } from 'vue'
import { useDisplayPlayerStore } from '@/stores/display/displayPlayer1'

export default defineComponent({
  name: 'Player',
  props: { hej: Number },
  async setup() {
    const players = usePlayerStore()
    const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))
    const activePlayer = ref((await players.$state.player1.name) || 'SEARCH FOR PLAYER')
    const cache = useCache()
    const displayPlayer1 = useDisplayPlayerStore()

    const playerName = ref()
    const options = useOptions()
    const disp = ref()

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

    const loading = ref(false)

    const getPlayer = async () => {
      loading.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 1)
      loading.value = false
    }
    const getPlayer2 = async () => {
      loading.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 2)
      loading.value = false
    }

    return {
      loading,
      cache,
      activePlayer,
      handlePlayerDropdown,
      dropdown1,
      dropdown2,
      dropdown3,
      dropdown4,
      playerSearch,
      playerName,
      getPlayer,
      getPlayer2,
      players,
      disp,
      displayPlayer1
    }
  }
})
