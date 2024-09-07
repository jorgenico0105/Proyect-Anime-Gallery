import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { FavoriteAnimeType } from '../types';
import { useAppStore } from "../store/useAppStore";

type FavProps={
    anime:FavoriteAnimeType
}


export default function FavCard({anime}:FavProps) {
    const {handleClickFav}=useAppStore()
    
    const handleClick=(anime:FavoriteAnimeType)=>{
        handleClickFav(anime)
       }
  return (
    <>
            <CCard key={anime.mal_id} className='card-container animate__animated animate__zoomIn' onDoubleClick={()=>handleClick(anime)}>
              <CCardImage orientation="top" src={anime.images.jpg.image_url} className='card-img' />
              <CCardBody>
                <CCardTitle className="anime-title">
                  {anime.title_english ? anime.title_english : anime.title_japanese}
                </CCardTitle>
                <CCardText className="anime-info">
                  <p>Episodes: <span>{anime.episodes}</span></p>
                  <p>Score: <span>{anime.score}</span></p>
                </CCardText>
               
              </CCardBody>
            </CCard>
    </>
  )
}
