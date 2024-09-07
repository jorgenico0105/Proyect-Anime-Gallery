import { StateCreator } from "zustand"
import { fetchAnime, findAnime,fetchListAnime,fetchAnimeBygender } from "../services/AnimeService"
import { AnimeByGenderType, AnimeFindType, AnimeList, AnimeLookType, AnimeResByGenderType, AnimeShowType } from "../types"


export type AnimeType={
   animeShow:AnimeShowType,
   animefind:AnimeFindType,
   looking:boolean,
   lookingG:boolean,
   listAnime:AnimeList
   animesByGender:AnimeResByGenderType
   showAnimes: () => void,
   isAnimeLooking: () => void,
   listGender: () => void
   getAnimes: (animeSearch:AnimeLookType) => void,
   isNotLooking:() => void,
   getAnimeByGender:(filter:AnimeByGenderType)=>void
   setLookinByGender:()=>void
   setNotLookinByGender:()=>void

}
export const createAnime: StateCreator<AnimeType>=(set)=>({
   animeShow:[] as AnimeShowType,
    looking:false,
    lookingG:false,
    animefind:[] as AnimeFindType,
    listAnime:{
        data: []
      },
      animesByGender:[] as AnimeResByGenderType,
      
   showAnimes:async ()=>{
    const animeShow=await fetchAnime()
    console.log(animeShow)
    set({
        animeShow,
    })
   },
   getAnimes:async(anime)=>{
        const animefind=await findAnime(anime)
        set({
            animefind
        })
   },
   isAnimeLooking:()=>{
    set({
        looking:true
    })
   },
   isNotLooking:()=>{
    set({
        looking:false
    })
   },
   listGender:async ()=>{
    const listAnime=await fetchListAnime()
    set({
        listAnime
    })
   },
   getAnimeByGender:async(gender)=>{
    const animesByGender=await fetchAnimeBygender(gender)
    set({
        animesByGender
    })
   },
   setLookinByGender:()=>{
     set({
        lookingG:true
     })
   },
   setNotLookinByGender:()=>{
        set({
            lookingG:false
        })
   },
})
