  import { useAppStore } from "../store/useAppStore";
  import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
  import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
  import "animate.css/animate.compat.css";
  import 'animate.css';
  import { useState } from "react";
  import TransitionsModal from "../Components/Modal";
  import { FavoriteAnimeType } from "../types";
  import { toast } from 'sonner';


  export default function IndexPage() {
    const { animeShow, animefind, looking,listAnime,getAnimeByGender,lookingG,animesByGender,setLookinByGender,isNotLooking,handleClickFav,favoExist } = useAppStore();
    const [openModal, setOpenModal] = useState(false); 
    const [modalContent, setModalContent] = useState({description: '' });
    const [filter,setFilter]=useState({
      idgender:0
    })
    const handleChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
      setFilter({
        ...filter,
        [e.target.name]:e.target.value
      })
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(Object.values(filter).includes(0)){
        toast.error('Enter anime category',{
          position:'bottom-center',
          duration: 1000,
          style:{
              background:'red',
              height:'80px',
              fontSize:'20px'
          }
      })
        return
      }
      
      getAnimeByGender(filter)
      setLookinByGender()
      isNotLooking()
      setFilter({
        idgender:0
      })
      toast.error(`Loking animes whit the category`,{
        position:'bottom-center',
        duration: 1000,
        style:{
            background:'green',
            height:'80px',
            fontSize:'20px'
        }
    })
    
    }
    const handleOpenModal = (anime:FavoriteAnimeType) => {
      setModalContent({
        description: anime.synopsis || 'No synopsis available.',
      });
      setOpenModal(true);
    };

    const handleCloseModal = () => setOpenModal(false);

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
      <form className="form-gender" onSubmit={handleSubmit}>
        <label htmlFor="gender">Filter by Gender</label>
        <select 
        onChange={handleChange}
        name="idgender" 
        id="idgender">
          <option>--Select Gender--</option>
          {listAnime.data.map(gender=>(
            <option value={gender.mal_id} key={gender.mal_id}>{gender.name}</option>
          ))}
        </select>
        <button 
            className="search-filter"
            type="submit"
            >
            <MagnifyingGlassIcon className="icon-filter"/>
                          
        </button>
      </form>
      <h1 className="text-anime">{looking ? 'Animes Found ' : 'Most Popular Animes'}</h1>
        
        {!looking && !lookingG && (
          <div className="grid-cards animate__animated animate__zoomIn">
            {animeShow.map(anime => (
              <CCard key={anime.mal_id} className={` ${favoExist(anime.mal_id) ? 'favorite' : 'card-container'}`}  onDoubleClick={()=>handleClick(anime)}>
                <CCardImage orientation="top" src={anime.images.jpg.image_url} className='card-img' />
                <CCardBody>
                  <CCardTitle  className={` ${favoExist(anime.mal_id) ? 'favorite-title' : 'anime-title'}`}>
                    {anime.title_english ? anime.title_english : anime.title_japanese}
                  </CCardTitle>
                  <CCardText className="anime-info">
                    <p>Episodes: <span>{anime.episodes}</span></p>
                    <p>Score: <span>{anime.score}</span></p>
                    <p>Gender: <span>{anime.genres.map(gen=>(gen.name+' '))}</span></p>
                  </CCardText>
                  <CButton  className={` ${favoExist(anime.mal_id) ? 'favorite-but' : 'anime-button'}`}  onClick={() => handleOpenModal(anime)}>See synopsis</CButton>
                </CCardBody>
              </CCard>
            ))}
          </div>
        )}
        
        {looking && (
          <div className="grid-cards">
            {animefind.map(anime => (
                <CCard key={anime.mal_id} className={` ${favoExist(anime.mal_id) ? 'favorite' : 'card-container'}  animate__animated animate__zoomIn`}  onDoubleClick={()=>handleClick(anime)}>
                <CCardImage orientation="top" src={anime.images.jpg.image_url} className='card-img' />
                <CCardBody>
                  <CCardTitle  className={` ${favoExist(anime.mal_id) ? 'favorite-title' : 'anime-title'}`}>
                    {anime.title_english ? anime.title_english : anime.title_japanese}
                  </CCardTitle>
                  <CCardText className="anime-info">
                    <p>Episodes: <span>{anime.episodes}</span></p>
                    <p>Score: <span>{anime.score}</span></p>
                    <p>Gender: <span>{anime.genres.map(gen=>(gen.name+' '))}</span></p>
                  </CCardText>
                  <CButton  className={` ${favoExist(anime.mal_id) ? 'favorite-but' : 'anime-button'}`}  onClick={() => handleOpenModal(anime)}>See synopsis</CButton>
                </CCardBody>
                </CCard>
            
            ))}
          </div>
        )}
        {lookingG && (
          <div className="grid-cards">
            {animesByGender.map(anime => (
             <CCard key={anime.mal_id} className={` ${favoExist(anime.mal_id) ? 'favorite' : 'card-container'}  animate__animated animate__zoomIn`}  onDoubleClick={()=>handleClick(anime)}>
             <CCardImage orientation="top" src={anime.images.jpg.image_url} className='card-img' />
             <CCardBody>
               <CCardTitle  className={` ${favoExist(anime.mal_id) ? 'favorite-title' : 'anime-title'}`}>
                 {anime.title_english ? anime.title_english : anime.title_japanese}
               </CCardTitle>
               <CCardText className="anime-info">
                 <p>Episodes: <span>{anime.episodes}</span></p>
                 <p>Score: <span>{anime.score}</span></p>
                 <p>Gender: <span>{anime.genres.map(gen=>(gen.name+' '))}</span></p>
               </CCardText>
               <CButton  className={` ${favoExist(anime.mal_id) ? 'favorite-but' : 'anime-button'}`}  onClick={() => handleOpenModal(anime)}>See synopsis</CButton>
             </CCardBody>
             </CCard>
            
            ))}
          </div>
        )}
        <TransitionsModal
          open={openModal}
          handleClose={handleCloseModal}
          description={modalContent.description}
        />
      </>
    );
  }
