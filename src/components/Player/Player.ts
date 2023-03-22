import { useCache } from '@/stores/cacheStore'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Player',
  setup() {
    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest('#playerSearchDropdown')) {
        playerDropdown.value = false
      }
    })
    const playerDropdown = ref(false)
    const handlePlayerDropdown = () => {
      playerDropdown.value = !playerDropdown.value
    }
    const cache = useCache()
    const data = cache.$state.cacheList

    const playerSearch = ref('')

    return { handlePlayerDropdown, playerDropdown, playerSearch, data }
  }
})
