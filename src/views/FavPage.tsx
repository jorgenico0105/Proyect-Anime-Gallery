
import "animate.css/animate.compat.css";
import 'animate.css';
import { useAppStore } from "../store/useAppStore";
import FavCard from '../Components/FavCard';

export default function FavPage() {
  const {favorites}=useAppStore()
  return (
    <>
      <h1 className="text-anime">{favorites && 'Favorite Animes'}</h1>
      <div className="grid-cards">
          {favorites.map(favo=>(
            <FavCard
              anime={favo}
            >
            </FavCard>
      
          ))}
      </div>
    </>
  )
}
