import { useEffect, useState } from "react"
import { videosPorId } from "../../Utilites/fetchs"
import { LinkVideo } from "./LinkVideo"
import { useParams } from "react-router-dom"
import './videos.css'

export function ListVideos({setterVideo, videos}){
    const params = useParams()
    const [listaVideos, setListaVideos] = useState([])
   
    const setter = setterVideo
    useEffect(() => {
        setListaVideos(videosPorId(params.id))
    },[])


    return (
        <section className="contenedor-videos">
        {
            listaVideos.map(videos => (
                <LinkVideo key={videos.indice} setterVideo={setter} video={videos}></LinkVideo>
            ))
        }
        </section>
    )
}