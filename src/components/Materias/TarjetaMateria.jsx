import { Link } from "react-router-dom"

export function TarjetaMateria({id, nombre}){{
    const urlCambiada = `/materia/${id}`
    
    return(
        <>  
            <Link className="tarjeta" to={urlCambiada}>{nombre}</Link>
        </>
    )
}}