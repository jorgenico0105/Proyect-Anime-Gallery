import {Outlet} from 'react-router-dom'
import Header from './Header';
import { useEffect} from 'react';
import { useAppStore } from '../store/useAppStore';
import {Toaster} from 'sonner'
export default function Layout() {
  const {showAnimes,listGender,loadFromStorage}=useAppStore()
  useEffect(()=>{
    showAnimes()
    
  },[])
  useEffect(()=>{
    listGender()
  },[])
  useEffect(()=>{
    loadFromStorage()
  },[])
  return (
    <>
        <Header></Header>
            <main className='container'>
                <Outlet></Outlet>
            </main>
     
            <Toaster></Toaster>
    </>
  )
}
