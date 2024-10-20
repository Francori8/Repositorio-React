import './Apunte.css'
export function ContenedorApuntes({apuntes}){
    const [apuntePractico, apunteTeorico] = apuntes

    return (
        <section className="contenedor-apuntes">
            <iframe className='frame' src={apuntePractico} ></iframe>
            <iframe className='frame' src={apunteTeorico} ></iframe>
        </section>
    )

}