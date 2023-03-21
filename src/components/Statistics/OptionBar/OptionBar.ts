import { defineComponent, ref } from 'vue'
import triangle from '@/assets/triangle.svg'
import seasonOptions from '@/services/seasons/seasons.json'
import $lifetime from '@/services/statistics/lifetime'
import { getAuth } from 'firebase/auth'
import type { Options } from '@/models/Options'

import $seasons from '@/services/seasons/seasons'

export default defineComponent({
  name: 'OptionBar',
  setup() {
    const data = seasonOptions
    const auth = getAuth()

    const isGametype = ref('normal')
    const onGametype = (event: any) => {
      isGametype.value = event.target.value
    }

    const isAlltime = ref('alltime')
    const onAlltimeType = (event: any) => {
      isAlltime.value = event.target.value
    }

    const isGamemode = ref('squad')
    const onGameMode = (event: any) => {
      isGamemode.value = event.target.value
    }
    const isGamemodeType = ref('-fpp')
    const onGamemodeType = (event: any) => {
      isGamemodeType.value = event.target.value
    }

    const isSeason = ref('division.bro.official.pc-2018-22')
    const onSeason = (event: any) => {
      $seasons.season(event)
      isSeason.value = event.target.value
    }

    const handleOptionForm = () => {
      $seasons.GetSeasonsStats()

      if (isGamemodeType.value === '-tpp') {
        isGamemodeType.value = ''
      }

      const form: Options = {
        playerID: auth.currentUser?.displayName,
        gamemode: isGamemode.value + isGamemodeType.value,
        gametype: isGametype.value,
        alltimeType: isAlltime.value,
        season: isSeason.value
      }
      // console.log(form)
      // $lifetime.GetLifetime(form)
    }

    return {
      triangle,
      data,
      handleOptionForm,
      onSeason,
      onGametype,
      onAlltimeType,
      onGamemodeType,
      onGameMode
    }
  }
})
