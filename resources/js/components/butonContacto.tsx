export default function ButonContacto(porps:{Ruta: string, Texto: string}) {
    return (
        <>
            <a href={route( porps.Ruta )} className="butonEsp">{porps.Texto}</a>
        </>
    )
}