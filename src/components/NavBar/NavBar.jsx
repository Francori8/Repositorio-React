import { Link, NavLink } from "react-router-dom"
import { useParams , useLocation } from "react-router-dom"
import {rutasDeNav} from "../../Utilites/rutasDeNav.js"
import {secciones} from '../../Utilites/secciones.jsx'
import { ButtonNavegacion } from "./ButtonNavegacion.jsx"
import './navBar.css'


export function NavBar({setterSeccion , sec}){
   

    return (
        <nav className="navegacion">
            <Link className="btn-nav" title="Inicio" to={'/materias'}>🏠</Link>

            {
                Object.values(secciones).map((secc, ind) => (
                    <ButtonNavegacion seccion={secc} key={ind} setter={setterSeccion} seccionActual={sec}/>
                    
                ))
            }
         
        </nav>

    )
}