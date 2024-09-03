import {Outlet} from 'react-router-dom'
import Header from './Header';
import { useEffect} from 'react';
import { useAppStore } from '../store/useAppStore';
export default function Layout() {
  const {showAnimes,listGender}=useAppStore()
  useEffect(()=>{
    showAnimes()
  },[])
  useEffect(()=>{
    listGender()
  },[])
  return (
    <>
        <Header></Header>
            <main className='container'>
                <Outlet></Outlet>
            </main>
      
    </>
  )
}
