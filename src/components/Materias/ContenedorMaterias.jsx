import { useEffect , useState} from "react"
import {TarjetaMateria} from "./TarjetaMateria.jsx"
import MockJson from '../../mock/nombreYId.json'
import './ContenedorMaterias.css'

export function ContenedorMaterias(){
    const [materias, setMaterias] = useState([])
   
  useEffect(() => {
   /* fetch('../mock/nombreYId.json')
      .then((response) => {
        return response.json()
      })
      .then((materias) => {
        setMaterias(materias)
        console.log(articulos)
      })*/
    setMaterias(MockJson)
    

  }, [])

    
    return(
        <section className="contenedor-materias">
            { materias.map(mat => (
                 
                 <TarjetaMateria key={mat.id} id={mat.id} nombre={mat.nombre} ></TarjetaMateria>
))}
        </section>
            
        
    )

}