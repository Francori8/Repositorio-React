import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { archivosPorId } from "../../Utilites/fetchs"
import {Apunte} from "./Apunte.jsx"


export function ListApuntes({setter}){
    const params =  useParams()
    const [setterApuntePractico , settertApunteTeorico] = setter
    const [apuntesPractico, setApuntesPractico] = useState([])
    const [apuntesTeorico, setApuntesTeorico] = useState([])

    useEffect(() => {
        const {apuntesPractico, apuntesTeoricos} = archivosPorId(params.id)
        setApuntesPractico(apuntesPractico)
        setApuntesTeorico(apuntesTeoricos)
    },[])

    return(
        <>
            <section className="seccion-apuntes">
                <div>
                    {
                        apuntesPractico.map(apunt => (
                            
                            <Apunte key={apunt.indice +"app"} apunte={apunt} setter={setterApuntePractico}></Apunte>
                        
                        ))
                    }
                </div>
                <div>
                    {
                        apuntesTeorico.map(apunt => (
                            <Apunte key={apunt.indice +"apt"} apunte={apunt} setter={settertApunteTeorico}></Apunte>
                        ))
                    }
                </div>
            </section>
        </>

    )
}