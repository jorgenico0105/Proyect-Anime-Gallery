import {z} from 'zod'
import { animeFindSchema, animeLookSchema, animeSchema, listSchema,getAnimeListSchema, animeByGenderSchema } from '../schemas/animeSchema'

export type AnimeShowType=z.infer<typeof animeSchema>
export type AnimeLookType=z.infer<typeof animeLookSchema>
export type AnimeFindType=z.infer<typeof animeFindSchema>
export type AnimeList=z.infer<typeof listSchema>
export type AnimeByGenderType=z.infer<typeof getAnimeListSchema>
export type AnimeResByGenderType=z.infer<typeof animeByGenderSchema>