import PlayerName from '@/components/PlayerName/PlayerName.vue'
import $matches from '@/services/statistics/matches'
import { useCache } from '@/stores/cacheStore'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'go-pro',
  components: { PlayerName },
  setup() {
    const cache = useCache()
    
    const pubgError = ref('')

    const handleError = (fromError: string) => {
      pubgError.value = fromError
    }

    const handleSerach = () => {
      console.log('search')
    }

    // const handleGuest = () => {
    //   $fireAccount.LoginGuest()
    // }

    return {
      // handleGuest,
      pubgError,
      handleSerach,
      handleError
    }
  }
})
