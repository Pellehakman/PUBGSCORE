import { defineComponent, ref } from 'vue'
import triangle from '@/assets/triangle.svg'
import seasonOptions from '@/services/seasons/seasons.json'
import type { Options } from '@/models/Options'
import $seasons from '@/services/seasons/seasons'
import { useOptions } from '@/stores/options'

export default defineComponent({
  name: 'OptionBar',
  setup() {
    const data = seasonOptions
    const options = useOptions()

    const isGametype = ref('normal')
    const onGametype = (event: any) => {
      isGametype.value = event.target.value
    }

    const isAlltime = ref('alltime')
    const onAlltimeType = (event: any) => {
      isAlltime.value = event.target.value
    }

    const isGamemode = ref('squad-fpp')
    const onGameMode = (event: any) => {
      isGamemode.value = event.target.value
    }

    const isSeason = ref('division.bro.official.pc-2018-22')
    const onSeason = (event: any) => {
      $seasons.season(event)
      isSeason.value = event.target.value
    }

    const handleOptionForm = () => {
      const form: Options = {
        gamemode: isGamemode.value,
        gametype: isGametype.value,
        alltimeType: isAlltime.value,
        season: isSeason.value
      }
      options.storeOptions(form)
    }

    return {
      triangle,
      data,
      handleOptionForm,
      onSeason,
      onGametype,
      onAlltimeType,
      onGameMode
    }
  }
})
