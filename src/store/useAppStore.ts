import { create } from "zustand";
import { devtools } from "zustand/middleware"; 
import { AnimeType, createAnime } from "./getAnimeSlice";

export const useAppStore = create<AnimeType>()(
    devtools((...a) => ({
      ...createAnime(...a),
    }))
  );