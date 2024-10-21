export function Apunte({apunte,setter}) {
   
    const handler = () => {
        
        setter(apunte.src)
    }
    
    return(
        <button onClick={handler} className="apunte apunteT">
            <div className="tarjeta-encabezado">
                <span>{apunte.indice} </span>
                <time dateTime={apunte.fecha}>{apunte.fecha}</time>
                <span>{apunte.tipo.at(0)}</span>
            </div>
                
            <h3>{apunte.titulo} </h3>
            <p>{apunte.tema}</p>
            { apunte.correspondencia  &&<p> Video: {apunte.correspondencia}  </p>}
            { apunte.tp  &&<p> Tp: {apunte.tp} Ej :{apunte.ejercicios} </p>}
        </button>
    )
}