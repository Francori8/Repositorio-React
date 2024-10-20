export function ApuntePractico({apunte, setter}){
    
    const handler = () => {
        
        setter(apunte.src)
    }
    
    return(
        <button onClick={handler} className="apunte apunteP">
            <div className="tarjeta-encabezado">
                <span>{apunte.indice} </span>
                <time dateTime={apunte.fecha}>{apunte.fecha}</time>
                <span>{apunte.tipo}</span>
            </div>
            <h3>{apunte.titulo} </h3>
            <p>{apunte.tema}</p>
           
        </button>
    )
}