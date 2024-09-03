import './App.css'
import Gestion from './components/Gestion/Gestion';
import Header from './components/Layout/Header'
import Musics from './components/Musics/Music'
import MusicByCategories from './components/Musics/MusicByCategories'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Musics/>}/>
        <Route path='/:categoriesId' element={<MusicByCategories/>}/>
        <Route path='/gestion' element={<Gestion/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
