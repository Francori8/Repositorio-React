import api from '../mock/api.json'
import nombreYId from '../mock/nombreYId.json'

export const videosPorId = (id) => {
    const materia = api.find((mat)=> mat.id == id)
    
    const videos = materia.videos
    
    return  videos
    
}

export const archivosPorId = (id) => {
    const materia = api.find((mat)=> mat.id == id)
    
    const apuntesPractico = materia.apuntespracticos
    const apuntesTeoricos = materia.apuntesteoricos
    
    return {
        apuntesPractico,
        apuntesTeoricos

    }
}

export const juegosPorId = (id) => {
    const materia = api.find((mat)=> mat.id == id)
    


    return{
        juegos:materia.juego
    }
}

export const infoPorId = (id) => {
    const materia = api.find((mat)=> mat.id == id)
  
   
    
    const condicion = materia.programa.substring(37,41).startsWith("&pid") || materia.programa.substring(37,41).startsWith("null") 
    const programaADevolver = condicion ? null : materia.programa
    
    return{
        id:id,
        nombre: materia.nombre,
        cargaHoraria : materia.cargaHoraria,
        links : materia.links,
        programa: programaADevolver,
        observacion: materia.observacion,
       
    }
}

export const nombrePorId = (id) => {
    return nombreYId.find((mat ) => mat.id == id).nombre
}