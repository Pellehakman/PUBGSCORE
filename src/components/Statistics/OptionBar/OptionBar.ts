import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue'
import triangle from '@/assets/triangle.svg'
import seasonOptions from '@/services/seasons/seasons.json'
import { useOptions } from '@/stores/options'

export default defineComponent({
  name: 'OptionBar',
  setup() {
    const data = seasonOptions
    const options = useOptions()
    const isAlltime = ref(true)

    const optionForm = reactive({
      gamemode: JSON.parse(JSON.stringify(options.$state.options)).gamemode || data.gamemode[0].id,
      gametype: JSON.parse(JSON.stringify(options.$state.options)).gametype || data.gametype[0].id,
      season: JSON.parse(JSON.stringify(options.$state.options)).season || data.season[0].id,
      alltimeType:
        JSON.parse(JSON.stringify(options.$state.options)).alltimeType || data.alltimeTypes[0].id
    })

    onMounted(() => {
      isAlltime.value = optionForm.alltimeType == 'alltime'
    })

    watch(
      () => optionForm.alltimeType,
      (alltimeType) => {
        isAlltime.value = alltimeType == 'alltime'
      }
    )

    const handleOptionForm = () => {
      options.storeOptions(optionForm)
    }

    return {
      ...toRefs(optionForm),
      triangle,
      data,
      isAlltime,
      optionForm,
      handleOptionForm
    }
  }
})
