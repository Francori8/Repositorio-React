
import {ContenedorMaterias} from "../components/Materias/ContenedorMaterias.jsx"
import { Header } from "../components/Header/Header.jsx"

export function Materias(){

    return(
        <main className="main-materia">
            <Header></Header>
            
            <ContenedorMaterias></ContenedorMaterias>
            
            {/*  <Footer></Footer> */} 
            
            
        </main>
    )
}