import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import IndexPage from "./views/IndexPage"
import FavPage
 from "./views/FavPage"
export default function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
            <Route element={<Layout></Layout>}>
                <Route path="/" element={<IndexPage></IndexPage>} index/>
                <Route path="/fav" element={<FavPage></FavPage>}/>  
            </Route>
        </Routes>
    </BrowserRouter>
  )
}


