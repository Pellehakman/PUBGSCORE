import $pubgINIT from '@/services/account/pubgINIT'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PlayerName',
  props: { edit: Boolean, editStyle: Boolean },
  emits: ['onError', 'onLoading'],

  setup(props, { emit }) {
    const loading = ref(false)
    const playerName = ref<any | string>('')
    const error = ref<string>('')
    const ifDisable = ref(false)

    const handlePlayerName = async () => {
      loading.value = true
      if (playerName.value.length < 1) {
        error.value = 'Please search for player'
        console.log(error.value)
      } else {
        await $pubgINIT.GetPlayer(playerName.value)
        ifDisable.value = true
      }

      loading.value = false
      emit('onLoading', loading.value)
      emit('onError', error.value)
    }

    return {
      props,
      playerName,
      handlePlayerName,
      loading,
      error
    }
  }
})
