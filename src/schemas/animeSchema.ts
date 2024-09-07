import { z } from "zod";

export const animeSchema = z.array(
  z.object({
    mal_id:z.number(),
    images: z.object({
      jpg: z.object({
        image_url: z.string(),
      }),
    }),
    title_english: z.string().nullable(),  
    title_japanese: z.string().nullable(),  
    episodes: z.number().nullable(),        
    score: z.number().nullable(),           
    synopsis: z.string().nullable(),  
    genres: z.array(
      z.object({
        name: z.string(),
      })
    )        
  })
);

export const animeLookSchema = z.object({
  anime: z.string(),
});

export const animeFindSchema = z.array(
  z.object({
    mal_id:z.number(),
    images: z.object({
      jpg: z.object({
        image_url: z.string(),
      }),
    }),
    title_english: z.string().nullable(),  
    title_japanese: z.string().nullable(),  
    episodes: z.number().nullable(),        
    score: z.number().nullable(),           
    synopsis: z.string().nullable(),  
    genres: z.array(
      z.object({
        name: z.string(),
      })
    )        
  })
);
export const listSchema=z.object({
  data: z.array(
    z.object({
      mal_id: z.number(),
      name: z.string(),
      url: z.string().url(),
      count: z.number(),
    })
  ),
});
export const getAnimeListSchema = z.object({
  idgender:z.number(),
});
export const animeByGenderSchema = z.array(
  z.object({
    mal_id:z.number(),
    images: z.object({
      jpg: z.object({
        image_url: z.string(),
      }),
    }),
    title_english: z.string().nullable(),  
    title_japanese: z.string().nullable(),  
    episodes: z.number().nullable(),        
    score: z.number().nullable(),           
    synopsis: z.string().nullable(),  
    genres: z.array(
      z.object({
        name: z.string(),
      })
    )        
  })
);
export const favoriteAnimeSchema = 
  z.object({
    mal_id:z.number(),
    images: z.object({
      jpg: z.object({
        image_url: z.string(),
      }),
    }),
    title_english: z.string().nullable(),  
    title_japanese: z.string().nullable(),  
    episodes: z.number().nullable(),        
    score: z.number().nullable(),           
    synopsis: z.string().nullable(),  
    genres: z.array(
      z.object({
        name: z.string(),
      })
    )        
  });
  export const favoriteAnimesSchema = z.array(favoriteAnimeSchema);