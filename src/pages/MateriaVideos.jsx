import {Template} from '../components/Template.jsx'
import { useParams } from 'react-router-dom'
import {videosPorId} from '../Utilites/fetchs.js'
import { SeccionVideos } from '../components/SeccionVideos/SeccionVideos.jsx'

export function MateriaVideo(){
    
    
    return(
        
            <Template>
                <SeccionVideos></SeccionVideos>
            </Template>
       
    )
}