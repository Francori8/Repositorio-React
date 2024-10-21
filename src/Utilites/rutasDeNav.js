const rutas =
    [
        {
            url: () => '/materias',
            logo:"🏠",
            title:"Inicio"
        },
        {
            url:(id) => `/materiaVideos/${id}`,
            logo:"▶",
            title:"Videos"
        },
        {
            url:(id) => `/materiaApuntes/${id}`,
            logo:"✍",
            titlle:"Apuntes"
        },
        {
            url:(id) => `/materiaJuego/${id}`,
            logo: "❔",
            title:"Juego"
        },
        {
            url: (id) => `/materiaInfo/${id}`,
            logo: "📄",
            title:"Informacion"
        }
    ]


export const rutasDeNav = (id, pathName) => {
    const rutasConId =rutas.map(ruta => { 
        return {url : ruta.url(id), logo:ruta.logo}
    })
    
    return rutasConId
}

