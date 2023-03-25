import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue'
import triangle from '@/assets/triangle.svg'
import seasonOptions from '@/services/seasons/seasons.json'
import { useOptions } from '@/stores/options'

export default defineComponent({
  name: 'OptionBar',
  setup() {
    const data = seasonOptions
    const options = useOptions()

    const cunt = ref(true)
    const gamemode = ref(
      JSON.parse(JSON.stringify(options.$state.options)).gamemode || data.gamemode[0].id
    )

    if (cunt.value === true) {
      gamemode.value = 'squad-fpp'
    }
    const gametype = ref('normal')
    const isActive = ref(false)

    const seasons = ref(
      JSON.parse(JSON.stringify(options.$state.options)).season || data.season[0].id
    )

    const updateGametypeOptions = (event: any) => {
      console.log(event.target.value)
      if (event?.target.value === 'ranked') {
        gamemode.value = 'squad-fpp'
      }
    }
    const updateGamemodeOptions = (event: any) => {
      console.log(event.target.value)
    }

    const updateAlltimeOptions = (event: any) => {
      console.log(event.target.value)
      if (event?.target.value === 'alltime') {
        isActive.value = true
      }
      if (event?.target.value === 'season') {
        isActive.value = false
      }
    }
    const updateSeasonOptions = (event: any) => {
      console.log(event.target.value)
    }
    const handleOptionForm = () => {
      // options.storeOptions(optionForm)
    }

    return {
      data,
      gamemode,
      gametype,
      isActive,
      seasons,
      handleOptionForm,
      updateAlltimeOptions,
      updateGamemodeOptions,
      updateGametypeOptions,
      updateSeasonOptions
      // gamemode,
      // gametype,
      // options,
      // handleOptionForm,
      // triangle,
      // // isRanked,
      // data,
      // hej
    }
  }
})
