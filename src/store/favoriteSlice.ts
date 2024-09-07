import { StateCreator } from "zustand";
import { FavoriteAnimeType } from '../types/index';



export type FavoritesSliceType={
    favorites: FavoriteAnimeType[]
    handleClickFav:(anime:FavoriteAnimeType)=>void
    favoExist:(id:FavoriteAnimeType['mal_id'])=>boolean
    loadFromStorage: () => void
}
export const createFavorite: StateCreator<FavoritesSliceType>=(set,get)=>({
    favorites:[],
    handleClickFav:(recipe)=>{
        if(get().favorites.some(favo=>favo===recipe)){
            set((state)=>({
                favorites:state.favorites.filter(favo=>favo!==recipe)
            }))
          
        }else{
            set((state)=>({ 
                favorites:[...state.favorites,recipe]
            }))
            
        }
        localStorage.setItem('favorites',JSON.stringify(get().favorites))
    },
    favoExist:(id)=>{
        return get().favorites.some(favo=>favo.mal_id==id)
    },
    loadFromStorage:()=>{
        const storaFav=localStorage.getItem('favorites')
        if(storaFav){
            set({
                favorites:JSON.parse(storaFav)
            })
        }
    }
})