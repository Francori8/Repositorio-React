const rutas =
    [
        {
            url: () => '/materias',
            logo:"🏠"
        },
        {
            url:(id) => `/materiaVideos/${id}`,
            logo:"▶"
        },
        {
            url:(id) => `/materiaApuntes/${id}`,
            logo:"✍"
        },
        {
            url:(id) => `/materiaJuego/${id}`,
            logo: "❔"
        },
        {
            url: (id) => `/materiaInfo/${id}`,
            logo: "📄"
        }
    ]


export const rutasDeNav = (id, pathName) => {
    const rutasConId =rutas.map(ruta => { 
        return {url : ruta.url(id), logo:ruta.logo}
    })
    
    return rutasConId.filter(ruta => ruta.url !== pathName)
}

