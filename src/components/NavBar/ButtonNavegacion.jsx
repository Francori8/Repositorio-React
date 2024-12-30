export function ButtonNavegacion({seccion , setter , seccionActual}){
    const handlerButton = () => {
        
        setter(seccion)
    }
   
    const SonIgualesSeccion = seccion.texto == seccionActual.texto

    return (
        <button className="btn-nav" disabled={SonIgualesSeccion} onClick={handlerButton} title={seccion.texto}>{seccion.logo} </button>
    )
}