import { useEffect, useState } from 'react'
import {NavBar} from './NavBar/NavBar.jsx'
import './template.css'
import { useParams } from 'react-router-dom'
import { nombrePorId } from '../Utilites/fetchs.js'

export function Template({children}){
    const params = useParams()
    const [nombre, setNombre] = useState("")

    useEffect(() => {
        setNombre(nombrePorId(params.id))
    },[])

return(
    <main className='contenedor-mat'>

        <NavBar />
        <h3>{nombre}</h3>
        {children}

    </main>
)
}