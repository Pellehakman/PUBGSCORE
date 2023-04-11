import $displayPlayer from '@/services/players/displayPlayer'
import $seasons from '@/services/seasons/seasons'
import $lifetime from '@/services/statistics/lifetime'

class UpdateHelper {
  public updateSearch = async () => {
    await $lifetime.GetLifetime()
    $displayPlayer.getPlayer()
  }
}

const $updateHelper = new UpdateHelper()
export { $updateHelper }
