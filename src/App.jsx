
import { Routes , Route } from 'react-router-dom'
import './App.css'
import {Home} from "./pages/Home.jsx"
import {Materias} from "./pages/Materias.jsx"

import {Materia} from './pages/Materia.jsx'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/materias' element={<Materias/>}></Route>
        <Route path='/materia/:id' element={<Materia/>}></Route>
      </Routes>
    </>
  )
}

export default App
