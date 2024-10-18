import { Link } from "react-router-dom"

export function TarjetaMateria({id, nombre}){{
    const urlCambiada = `/materiaInfo/${id}`
    
    return(
        <>  
            <Link className="tarjeta" to={urlCambiada}>{nombre}</Link>
        </>
    )
}}