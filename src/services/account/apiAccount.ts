import type { playerModel } from '@/models/models'
import { useChangeStore } from '@/stores/changeStore'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
import $fireAccount from './fireAccount'
import { useCache } from '@/stores/cacheStore'

class ApiAccount {
  fetchPlayer: playerModel | undefined | any
  error: string | undefined
  change: boolean | undefined

  get FetchPlayer() {
    return this.fetchPlayer
  }
  get Error() {
    return this.error
  }

  async GetPlayer(playerName: string) {
    const cache = useCache()
    const changeStore: any = useChangeStore()
    const player = `players?filter[playerNames]=${playerName}`
    const player_url = `${player}`

    await fetch(`${import.meta.env.VITE_API_URL}${player_url}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.errors) {
          console.log('ERROR: service:apiAccount.ts', response.errors)
          this.error = await response.errors[0].detail
        } else {
          // userStore.addUser(response.data[0])
          cache.letsCache(response.data[0])
          changeStore.isChange(true)
          router.push('/statistics')

          this.fetchPlayer = await response.data[0]
          this.error = ''
          $fireAccount.LoginGuest(this.fetchPlayer)
          // console.log('LoginGuest triggered from $apiAccount service')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const $apiAccount = new ApiAccount()
export default $apiAccount
