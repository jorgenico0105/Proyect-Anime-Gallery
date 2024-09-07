import { create } from "zustand";
import { devtools } from "zustand/middleware"; 
import { AnimeType, createAnime } from "./getAnimeSlice";
import { FavoritesSliceType,createFavorite } from "./favoriteSlice";


export const useAppStore = create<AnimeType & FavoritesSliceType >()(
    devtools((...a) => ({
      ...createAnime(...a),
      ...createFavorite(...a),

    }))
  );