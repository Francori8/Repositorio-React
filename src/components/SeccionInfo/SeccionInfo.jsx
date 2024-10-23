import { useEffect, useState } from 'react'
import {Detalles} from './Detalles.jsx'
import {Programa} from './Programa.jsx'
import { infoPorId } from '../../Utilites/fetchs.js'
import { useParams } from 'react-router-dom'
import "./informacion.css"
export function SeccionInfo(){
    const params = useParams()
    const [informacion, setInformacion] = useState({})

    useEffect(() => {
        setInformacion(infoPorId(params.id))
       
    },[])

    return(
        <>
            <Detalles info={informacion}></Detalles>
            { informacion.programa && <Programa programa={informacion.programa}></Programa>} 
        </>
    )
}