import { defineComponent, onMounted, ref } from 'vue'
import seasonOptions from '@/services/seasons/seasons.json'
import { useOptions } from '@/stores/options'
import $lifetime from '@/services/statistics/lifetime'

export default defineComponent({
  name: 'OptionBar',
  setup() {
    const data = seasonOptions
    const options = useOptions()
    const save = ref(false)
    onMounted(() => {
      handleOptionForm()

      if (gametype.value === 'ranked') {
        gamemode.value = 'squad-fpp'
      }

      if (alltime.value === 'alltime') {
        isActive.value = true
      }
      if (alltime.value === 'season') {
        isActive.value = false
      }
    })

    const gamemode = ref(
      JSON.parse(JSON.stringify(options.$state.options)).gamemode || data.gamemode[0].id
    )

    const updateGamemodeOptions = () => {
      save.value = true
    }

    const gametype = ref(
      JSON.parse(JSON.stringify(options.$state.options)).gametype || data.gametype[0].id
    )

    const updateGametypeOptions = (event: any) => {
      save.value = true
      if (event?.target.value === 'ranked') {
        gamemode.value = 'squad-fpp'
      }
    }

    const seasons = ref(
      JSON.parse(JSON.stringify(options.$state.options)).season || data.season[0].id
    )

    const alltime = ref(
      JSON.parse(JSON.stringify(options.$state.options)).alltime || data.alltimeTypes[0].id
    )

    const updateSeasonOptions = () => {
      save.value = true
    }
    const updateAlltimeOptions = (event: any) => {
      save.value = true
      if (event?.target.value === 'alltime') {
        isActive.value = true
      }
      if (event?.target.value === 'season') {
        isActive.value = false
      }
    }

    const isActive = ref(false)

    const handleOptionForm = () => {
      const data = {
        gamemode: gamemode.value,
        gametype: gametype.value,
        season: seasons.value,
        alltime: alltime.value
      }

      options.storeOptions(data)
      save.value = false
    }

    return {
      save,
      data,
      gamemode,
      gametype,
      isActive,
      seasons,
      alltime,
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
