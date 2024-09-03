import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

export default function FindCard() {
  return (
    <>
        <CCard key={anime.synopsis} className='card-container '>
              <CCardImage orientation="top" src={anime.images.jpg.image_url} className='card-img' />
              <CCardBody>
                <CCardTitle className="anime-title">
                  {anime.title_english ? anime.title_english : anime.title_japanese}
                </CCardTitle>
                <CCardText className="anime-info">
                  <p>Episodes: <span>{anime.episodes}</span></p>
                  <p>Score: <span>{anime.score}</span></p>
                </CCardText>
                <CButton className="anime-button">See synopsis</CButton>
              </CCardBody>
            </CCard>
    </>
  )
}
