import { Link } from "react-router-dom"
import { useParams , useLocation } from "react-router-dom"
import {rutasDeNav} from "../../Utilites/rutasDeNav"
import './navBar.css'


export function NavBar(){
    const param = useParams()
    const  id = param.id
    
    const ruta = useLocation().pathname
    
    const rutasAMover = rutasDeNav(id,ruta)
    
    return (
        <nav className="navegacion">
            {
                rutasAMover.map((ruta, index) => (
                    <Link className="btn-nav" key={index} to={ruta.url}>{ruta.logo}</Link>
                ))
            }
         
        </nav>

    )
}