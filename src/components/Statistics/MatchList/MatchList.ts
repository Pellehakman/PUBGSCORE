import type { userModel } from '@/models/models'
import $matchlist from '@/services/statistics/matchlist'
import { useUserStore } from '@/stores/userStore'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PlayerStats',
  components: {},
  async setup() {
    // const userStore = useUserStore()
    const loading = ref(false)
    const matchlist = ref()
    const matchlistError = ref('')
    // const datas: userModel = userStore.user

    const handleMatches = async () => {
      loading.value = true
      // await $matchlist.GetMatchlist(datas.pubgname)
      loading.value = false
      nextStep()
    }
    const nextStep = async () => {
      matchlist.value = $matchlist.state
    }
    handleMatches()

    return {
      loading,
      matchlist,
      matchlistError
    }
  }
})
