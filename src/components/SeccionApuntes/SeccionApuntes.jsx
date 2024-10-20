import { useState } from "react"
import {ContenedorApuntes} from './ContenedorApuntes.jsx'
import { ListApuntes } from "./ListApuntes.jsx"

export function SeccionApuntes(){
    const [apunteTeorico, setApunteTeorico] = useState("")
    const [apuntePractico, setApuntePractico] = useState("")
    
    return (
        <>
            <ContenedorApuntes apuntes={[apuntePractico, apunteTeorico]}></ContenedorApuntes>
            <ListApuntes setter={[setApuntePractico, setApunteTeorico]}></ListApuntes>
        </>
    )
}