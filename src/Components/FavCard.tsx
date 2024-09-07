import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { FavoriteAnimeType } from '../types';
import { useAppStore } from "../store/useAppStore";
import {toast} from 'sonner'

type FavProps={
    anime:FavoriteAnimeType
}


export default function FavCard({anime}:FavProps) {
    const {handleClickFav,favoExist}=useAppStore()
    
    const handleClick=(anime:FavoriteAnimeType)=>{
        handleClickFav(anime)
        toast.success(`${favoExist(anime.mal_id) ? 'Added': 'Removed'} from favorites`,{
          position:'bottom-center',
          duration: 1000,
          style:{
              background:'green',
              height:'80px',
              fontSize:'20px'
          }
      })
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
