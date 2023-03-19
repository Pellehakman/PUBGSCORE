import type { playerModel } from '@/models/models'
import $fireAccount from './fireAccount'

class ApiAccount {
  fetchPlayer: playerModel | undefined | any
  error: string | undefined

  get FetchPlayer() {
    return this.fetchPlayer
  }
  get Error() {
    return this.error
  }

  async GetPlayer(playerName: string) {
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
          this.fetchPlayer = await response.data[0]
          this.error = ''
          $fireAccount.LoginGuest(this.fetchPlayer)
          console.log('LoginGuest triggered from $apiAccount service')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const $apiAccount = new ApiAccount()
export default $apiAccount
