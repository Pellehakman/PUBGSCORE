import type { Options } from '@/models/Options'

class Lifetime {
  state: any
  async GetLifetime(form: Options) {
    const lifetime_url = `players/${form.playerID}/seasons/lifetime`

    await fetch(`${import.meta.env.VITE_API_URL}${lifetime_url}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        this.state = await response
        console.log(this.state)
      })
  }
}

const $lifetime = new Lifetime()
export default $lifetime
