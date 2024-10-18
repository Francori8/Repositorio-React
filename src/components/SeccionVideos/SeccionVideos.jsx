import {  useState } from "react"
import {Video} from './Video.jsx'
import { ListVideos } from "./ListVideos.jsx"


export function SeccionVideos(){
    
   
    const [video, setVideo] = useState("")
    
    
    return(
        <>  
           
            <Video link={video}></Video>
            <ListVideos  setterVideo={setVideo}></ListVideos>
        </>
    )
}