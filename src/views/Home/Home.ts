import AppFooter from '@/components/AppFooter/AppFooter.vue'
import Search from '@/components/Search/Search.vue'
import { useCache } from '@/stores/cacheStore'
import { useGeneralStore } from '@/stores/generalStore'
import { useOptions } from '@/stores/options'
import { usePlayerStore } from '@/stores/playerStore'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home-view',
  components: { Search, AppFooter },

  setup() {
    const cache = useCache()
    const options = useOptions()
    const player = usePlayerStore()
    const generalStore = useGeneralStore()

    const reset = () => {
      // // $fireAccount.LoginGuest()
      cache.$reset()
      options.$reset()
      player.$reset()
      generalStore.$reset()
    }
    return { reset }
  }
})
