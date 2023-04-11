import $getPlayer from '@/services/account/getPlayer'
import { useCache } from '@/stores/cacheStore'
import { usePlayerStore } from '@/stores/playerStore'
import { defineComponent, ref } from 'vue'
import { useDisplayPlayerStore } from '@/stores/display/displayPlayer1'
import { $updateHelper } from '@/helpers/UpdateHelper'

export default defineComponent({
  name: 'Player',
  props: { hej: Number },
  async setup() {
    const players = usePlayerStore()
    const cache = useCache()
    const displayPlayer = useDisplayPlayerStore()
    const playerName = ref()


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
      $updateHelper.updateSearch()
    }
    const getPlayer2 = async () => {
      loading.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 2)
      loading.value = false
      $updateHelper.updateSearch()
    }
    const getPlayer3 = async () => {
      loading.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 3)
      loading.value = false
      $updateHelper.updateSearch()
    }
    const getPlayer4 = async () => {
      loading.value = true
      await $getPlayer.GetPlayer(playerSearch.value, 4)
      loading.value = false
      $updateHelper.updateSearch()
    }

    return {
      loading,
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
