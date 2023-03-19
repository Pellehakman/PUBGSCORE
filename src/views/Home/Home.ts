import AppFooter from '@/components/AppFooter/AppFooter.vue'
import Search from '@/components/Search/Search.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home-view',
  components: { Search, AppFooter },

  setup() {
    return {}
  }
})
