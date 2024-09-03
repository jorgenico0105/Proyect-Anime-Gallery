import { CCard,CCardImage,CCardBody,CCardTitle,CCardText,CButton } from '@coreui/react';
import { AnimeShowType } from '../types';



type AnimeCardProps={
    anime:AnimeShowType
}
export default function AnimeCard({anime}:AnimeCardProps) {
  return (
    <>
        <CCard className='card-container'>
            <CCardImage orientation="top" src='./img-1.jpg' className='card-img'/>
            <CCardBody>
                <CCardTitle>Hola</CCardTitle>
                <CCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </CCardText>
                <CButton color="primary" href="#">Go somewhere</CButton>
            </CCardBody>
        </CCard>
    </>
  )
}
