import $seasons from '@/services/seasons/seasons'
import $lifetime from '@/services/statistics/lifetime'

class UpdateHelper {
  public updateSearch = async () => {
   
    await $lifetime.GetLifetime()
  }
}

const $updateHelper = new UpdateHelper()
export { $updateHelper }
