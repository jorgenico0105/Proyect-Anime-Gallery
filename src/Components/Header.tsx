import { useState } from "react"
import {NavLink} from "react-router-dom"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useAppStore } from "../store/useAppStore"

export default function Header() {
    const {getAnimes,isAnimeLooking,isNotLooking,setNotLookinByGender}=useAppStore()
    const [animeSearch,setAnimeSearch]=useState({
        anime:''
    })
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(Object.values(animeSearch).includes('')){
            return
        }
        getAnimes(animeSearch)
        setAnimeSearch({
            anime:''
        })
        isAnimeLooking()
        setNotLookinByGender()
    }
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setAnimeSearch({
            ...animeSearch,
            [e.target.name]:e.target.value
        })
    }
    const handleClick=()=>{
        isNotLooking()
        setNotLookinByGender()
    }

  return (
    <header >
        <div className="header-container">
            <div className="img-container">
                <img src="./onepi.png" alt="Imagen-logo" />
            </div>
            <div>
                <form className="form-styles" onSubmit={handleSubmit}>
                    <label htmlFor="anime">Search anime</label>
                    <input type="text" 
                    name="anime" 
                    id="anime" 
                    value={animeSearch.anime}
                    placeholder="Naruto,One Piece, Etc."
                    onChange={handleChange}
                    />
                    <button 
                    className="search-button"
                    type="submit"
                    >
                    <MagnifyingGlassIcon className="icon-class" />
                         
                    </button>
                </form>
            </div>
            <div className="navar-cont">
                <nav className="nava">

                    <NavLink 
                    className={({isActive})=> isActive ? 'navLink active' :'navLink'}
                    to='/'
                    onClick={handleClick}
                    >
                        Home
                    </NavLink>
                    <NavLink
                    className={({isActive})=> isActive ? 'navLink active' :'navLink'}
                    to='/fav'
                    >
                        Favorites
                    </NavLink >
                </nav>
            </div>
            
        </div>    
            
    </header>
  )
}