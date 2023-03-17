import AppFooter from '@/components/AppFooter/AppFooter.vue'
import GoPro from '@/components/GoPro/GoPro.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home-view',
  components: { GoPro, AppFooter },

  setup() {
    return {}
  }
})
