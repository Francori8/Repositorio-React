import { NavBar } from "../components/NavBar/NavBar"
import {secciones} from '../Utilites/secciones.jsx'
import { useState } from "react"
import './materia.css'

export function Materia(){

    const [seccion, setSeccion] = useState(secciones.info)
    
    
    
    return(
         <section className="contenedor-mat">
            <NavBar setterSeccion={setSeccion} sec = {seccion} />
            {seccion.componente}        
        </section>
        
    )
}