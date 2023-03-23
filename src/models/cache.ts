import type { cacheStatistics } from './models'

export type cacheModel = {
  id: string
  lastPlayedWith: []
  lifetime: []
  matches: []
  name: string
  seasons: {
    id: string
    seasonId: string
    normal: cacheStatistics
    ranked: cacheStatistics
  }
}
