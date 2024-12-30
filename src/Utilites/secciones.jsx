import { SeccionApuntes } from "../components/SeccionApuntes/SeccionApuntes.jsx"
import {SeccionInfo} from "../components/SeccionInfo/SeccionInfo.jsx"
import { SeccionVideos } from "../components/SeccionVideos/SeccionVideos.jsx"
import {SeccionJuego} from "../components/SeccionJuego/SeccionJuego.jsx"


export const secciones = {
    info : {
        texto:"informacion",
        componente:<SeccionInfo></SeccionInfo>,
        logo: "📄",
    },
    apunte:  {
        texto:"apunte",
        componente:<SeccionApuntes></SeccionApuntes>,
        logo:"✍",
    },
    video: {
        texto:"video",
        componente:<SeccionVideos></SeccionVideos>,
        logo:"▶",
    },
    juego :  {
        texto:"juego",
        componente:<SeccionJuego></SeccionJuego>,
        logo: "❔",
    },
}