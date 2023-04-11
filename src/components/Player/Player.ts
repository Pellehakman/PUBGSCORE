import $getPlayer from '@/services/account/getPlayer'
import { useCache } from '@/stores/cacheStore'
import { usePlayerStore } from '@/stores/playerStore'
import { defineComponent, ref } from 'vue'
import { useDisplayPlayerStore } from '@/stores/display/displayPlayer1'
import { $updateHelper } from '@/helpers/UpdateHelper'

export default defineComponent({
  name: 'Player',
  async setup() {
    const players = usePlayerStore()
    const cache = useCache()
    const displayPlayer = useDisplayPlayerStore()
    const playerName = ref()
    const resetPlayerSearch = () => {
      playerSearch.value = ''
    }
    const playerSearch = ref('')
    const dropdown1 = ref(false)
    const dropdown2 = ref(false)
    const dropdown3 = ref(false)
    const dropdown4 = ref(false)

    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest(`#playerDropdown1`)) {
        dropdown1.value = false
      }
    })
    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest(`#playerDropdown2`)) {
        dropdown2.value = false
      }
    })
    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest(`#playerDropdown3`)) {
        dropdown3.value = false
      }
    })
    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest(`#playerDropdown4`)) {
        dropdown4.value = false
      }
    })

    const handlePlayerDropdown = (index: number) => {
      resetPlayerSearch()
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

    const loadingP1 = ref(false)
    const loadingP2 = ref(false)
    const loadingP3 = ref(false)
    const loadingP4 = ref(false)

    const getPlayer = async () => {
      loadingP1.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 1)
      await $updateHelper.updateSearch()
      loadingP1.value = false
    }
    const getPlayer2 = async () => {
      loadingP2.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 2)
      await $updateHelper.updateSearch()
      loadingP2.value = false
    }
    const getPlayer3 = async () => {
      loadingP3.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 3)
      $updateHelper.updateSearch()
      loadingP3.value = false
    }
    const getPlayer4 = async () => {
      loadingP4.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 4)
      await $updateHelper.updateSearch()
      loadingP4.value = false
    }

    return {
      loadingP1,
      loadingP2,
      loadingP3,
      loadingP4,
      cache,
      handlePlayerDropdown,
      dropdown1,
      dropdown2,
      dropdown3,
      dropdown4,
      playerSearch,
      playerName,
      getPlayer,
      getPlayer2,
      getPlayer3,
      getPlayer4,
      players,
      displayPlayer
    }
  }
})
