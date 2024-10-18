
import './videos.css'

export function LinkVideo({setterVideo , video}){
    const setter = setterVideo
    const videoActual = video
   
    const handleClick = () => {
        setter(videoActual.src)
        window.scrollTo(0,0)
    }
    
    return(
        <article className="tarjeta-video">
                <button onClick={handleClick}>
                    <h3>{videoActual.titulo}</h3>   
                    <time dateTime={videoActual.fecha}>{videoActual.fecha}</time>
                    <p>{videoActual.tema}</p>       
                </button>   
        </article>
        
    )
}