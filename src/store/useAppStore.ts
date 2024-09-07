import { create } from "zustand";
import { devtools } from "zustand/middleware"; 
import { AnimeType, createAnime } from "./getAnimeSlice";
import { FavoritesSliceType,createFavorite } from "./favoriteSlice";
import { NotiSliceType,createNoti } from "./notification";

export const useAppStore = create<AnimeType & FavoritesSliceType & NotiSliceType>()(
    devtools((...a) => ({
      ...createAnime(...a),
      ...createFavorite(...a),
      ...createNoti(...a)
    }))
  );