import AppFooter from '@/components/AppFooter/AppFooter.vue'
import MatchList from '@/components/Statistics/MatchList/MatchList.vue'
import OptionBar from '@/components/Statistics/OptionBar/OptionBar.vue'
import PlayerStats from '@/components/Statistics/PlayerStats/PlayerStats.vue'
import SeasonStats from '@/components/Statistics/SeasonStats/SeasonStats.vue'
import { defineComponent } from 'vue'
import { useCache } from '@/stores/cacheStore'

export default defineComponent({
  name: 'statistics-view',
  components: {
    AppFooter,
    SeasonStats,
    OptionBar,
    PlayerStats,
    MatchList
  },

  setup() {
    const cache = useCache()
    console.log(JSON.parse(JSON.stringify(cache.$state.cacheList)))

    return {}
  }
})
