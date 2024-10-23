export function Detalles({info}){

    return(
        <section className="info">
            <p ><span className="item-info">Carga Horaria:</span><span>{info.cargaHoraria}hrs</span></p>
           { info.links && <p ><span className="item-info">Links Utiles:</span><span dangerouslySetInnerHTML = {{__html :info.links}}></span> </p> }
           { info.observacion && <p ><span className="item-info">Observacion:</span>  <span> {info.observacion}</span> </p> }
        </section>
    )
}