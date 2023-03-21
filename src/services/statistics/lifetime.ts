import { useCache } from '@/stores/cacheStore'

class Lifetime {
  async GetLifetime() {
    const cache = useCache()
    const lifetime_url = `players/${cache.$state.cacheList.at(0).id}/seasons/lifetime`

    await fetch(`${import.meta.env.VITE_API_URL}${lifetime_url}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/vnd.api+json'
      }
    })
      .then((response) => response.json())
      .then(async (response) => {
        const data = {
          id: response.data.relationships.player.data.id,
          bestRankPoint: response.data.attributes.bestRankPoint,
          gameModeStats: response.data.attributes.gameModeStats
        }
        cache.letsCacheLifetime(data)
      })
  }
}

const $lifetime = new Lifetime()
export default $lifetime
