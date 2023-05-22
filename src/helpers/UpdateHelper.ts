import $displayPlayer from '@/services/players/displayPlayer'
import $lifetime from '@/services/statistics/lifetime'

class UpdateHelper {
  public updateSearch = async () => {
    await $lifetime.GetLifetime()
    $displayPlayer.getPlayer()
  }
}

const $updateHelper = new UpdateHelper()
export { $updateHelper }
