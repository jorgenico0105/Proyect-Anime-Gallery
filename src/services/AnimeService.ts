import axios from "axios"
import { animeByGenderSchema, animeFindSchema, animeSchema, listSchema } from "../schemas/animeSchema"
import { AnimeByGenderType, AnimeLookType } from "../types"

export async function fetchAnime(){
    const url='https://api.jikan.moe/v4/anime?limit=12'
    const {data:{data}}=await axios(url)
    const result=animeSchema.safeParse(data)
    if (result.success){    
        return result.data
    }
}
export async function findAnime(anime:AnimeLookType){
    const url=`https://api.jikan.moe/v4/anime?q=${anime.anime}`
    const {data:{data}}=await axios(url)
    const result=animeFindSchema.safeParse(data)
    if(result.success){
        return result.data
    }
}
export async function fetchListAnime(){
  const url='https://api.jikan.moe/v4/genres/anime'
  const {data}=await axios(url)
  const result=listSchema.safeParse(data)
  if(result.success){
    return result.data
  }
}
export async function fetchAnimeBygender(gender:AnimeByGenderType){
    const url=`https://api.jikan.moe/v4/anime?genres=${gender.idgender}`
    const {data:{data}}=await axios(url)
    console.log(data)
    const result=animeByGenderSchema.safeParse(data)
    if(result.success){
        return result.data
    }
  }
