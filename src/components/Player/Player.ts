import $initPlayers from '@/services/account/initPlayers'
import $getPlayer from '@/services/account/getPlayer'
import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'
import { defineComponent, ref } from 'vue'
import $activePlayers from '@/services/account/activePlayers'
import $getPlayers from '@/services/account/getPlayers'
import $lifetime from '@/services/statistics/lifetime'

export default defineComponent({
  name: 'Player',
  props: { hej: Number },
  setup() {
    const parseJSON = (data: any) => JSON.parse(JSON.stringify(data))
    const activePlayer = ref('SEARCH FOR PLAYER')
    const cache = useCache()
    const players = usePlayerStore()
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

    const getPlayer = async () => {
      await $getPlayer.GetPlayer(playerSearch.value, 1)

      // await $lifetime.GetLifetime()

      loading.value = false
    }
    const getPlayer2 = async () => {
      await $getPlayer.GetPlayer(playerSearch.value, 2)

      // await $lifetime.GetLifetime()

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
      getPlayer2,
      players
    }
  }
})
