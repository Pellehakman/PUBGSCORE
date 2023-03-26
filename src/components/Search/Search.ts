import PlayerName from '@/components/PlayerName/PlayerName.vue'
import { useCache } from '@/stores/cacheStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'go-pro',
  components: { PlayerName },
  setup() {
    const cache = useCache()
    const options = useOptions()
    const player = usePlayerStore()
    // cache.$reset()
    const pubgError = ref('')

    const handleError = (fromError: string) => {
      pubgError.value = fromError
    }

    const handleSerach = () => {
      console.log('search')
    }

    const reset = () => {
      // // $fireAccount.LoginGuest()
      cache.$reset()
      options.$reset()
      player.$reset()
    }

    return {
      reset,
      // handleGuest,
      pubgError,
      handleSerach,
      handleError
    }
  }
})
