import {z} from 'zod'
import { animeFindSchema, animeLookSchema, animeSchema, listSchema,getAnimeListSchema, animeByGenderSchema, favoriteAnimeSchema, favoriteAnimesSchema } from '../schemas/animeSchema'

export type AnimeShowType=z.infer<typeof animeSchema>
export type AnimeLookType=z.infer<typeof animeLookSchema>
export type AnimeFindType=z.infer<typeof animeFindSchema>
export type AnimeList=z.infer<typeof listSchema>
export type AnimeByGenderType=z.infer<typeof getAnimeListSchema>
export type AnimeResByGenderType=z.infer<typeof animeByGenderSchema>
export type FavoriteAnimeType=z.infer<typeof favoriteAnimeSchema>
export type FavoriteAnimesType=z.infer<typeof favoriteAnimesSchema>