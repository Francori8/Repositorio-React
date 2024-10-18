
import { Routes , Route } from 'react-router-dom'
import './App.css'
import {Home} from "./pages/Home.jsx"
import {Materia} from "./pages/Materias.jsx"
import {MateriaInfo}  from './pages/MateriaInfo.jsx'
import {MateriaVideo} from './pages/MateriaVideos.jsx'
import { MateriaApuntes } from './pages/MateriaApuntes.jsx'
import { MateriaJuego } from './pages/MateriaJuego.jsx'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/materias' element={<Materia/>}></Route>
        <Route path='/materiaInfo/:id' element={<MateriaInfo/>}></Route>
        <Route path='/materiaVideos/:id' element={<MateriaVideo/>}></Route>
        <Route path='/materiaApuntes/:id' element={<MateriaApuntes/>}></Route>
        <Route path='/materiaJuego/:id' element={<MateriaJuego/>}></Route>
      </Routes>
    </>
  )
}

export default App
