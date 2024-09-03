import { useAppStore } from "../store/useAppStore";
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import "animate.css/animate.compat.css";
import 'animate.css';
import { useState } from "react";
import TransitionsModal from "../Components/Modal";

  
export default function IndexPage() {
  const { animeShow, animefind, looking,listAnime,getAnimeByGender,lookingG,animesByGender,setLookinByGender,isNotLooking } = useAppStore();
  const [openModal, setOpenModal] = useState(false); // Estado para manejar el modal
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
      console.log('Ingrese la categoria')
      return
    }
    
    getAnimeByGender(filter)
    setLookinByGender()
    isNotLooking()
    setFilter({
      idgender:0
    })
    
  }
  const handleOpenModal = (anime: any) => {
    setModalContent({
      description: anime.synopsis || 'No synopsis available.',
    });
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);
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
          {animeShow.data.map(anime => (
            <CCard key={anime.synopsis} className='card-container '>
              <CCardImage orientation="top" src={anime.images.jpg.image_url} className='card-img' />
              <CCardBody>
                <CCardTitle className="anime-title">
                  {anime.title_english ? anime.title_english : anime.title_japanese}
                </CCardTitle>
                <CCardText className="anime-info">
                  <p>Episodes: <span>{anime.episodes}</span></p>
                  <p>Score: <span>{anime.score}</span></p>
                  <p>Gender: <span>{anime.genres.map(gen=>(gen.name+' '))}</span></p>
                </CCardText>
                <CButton className="anime-button" onClick={() => handleOpenModal(anime)}>See synopsis</CButton>
              </CCardBody>
            </CCard>
          ))}
        </div>
      )}
      
      {looking && (
        <div className="grid-cards">
          {animefind.map(anime => (

            <CCard key={anime.synopsis} className='card-container animate__animated  animate__fadeInDownBig'>
              <CCardImage orientation="top" src={anime.images.jpg.image_url} className='card-img' />
              <CCardBody>
                <CCardTitle className="anime-title">
                  {anime.title_english ? anime.title_english : anime.title_japanese}
                </CCardTitle>
                <CCardText className="anime-info">
                  <p>Episodes: <span>{anime.episodes}</span></p>
                  <p>Score: <span>{anime.score}</span></p>
                  <p>Score: <span>{anime.genres.map(gen=>(gen.name+" "))}</span></p>
                </CCardText>
                <CButton className="anime-button" onClick={() => handleOpenModal(anime)}>See synopsis</CButton>
              </CCardBody>
            </CCard>
           
          ))}
        </div>
      )}
      {lookingG && (
        <div className="grid-cards">
          {animesByGender.map(anime => (
            <CCard key={anime.synopsis} className='card-container animate__animated animate__zoomIn'>
              <CCardImage orientation="top" src={anime.images.jpg.image_url} className='card-img' />
              <CCardBody>
                <CCardTitle className="anime-title">
                  {anime.title_english ? anime.title_english : anime.title_japanese}
                </CCardTitle>
                <CCardText className="anime-info">
                  <p>Episodes: <span>{anime.episodes}</span></p>
                  <p>Score: <span>{anime.score}</span></p>
                  <p>Score: <span>{anime.genres.map(gen=>(gen.name+" "))}</span></p>
                </CCardText>
                <CButton className="anime-button" onClick={() => handleOpenModal(anime)}>See synopsis</CButton>
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
