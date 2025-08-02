import { Link } from "@inertiajs/react";

export default function ServiciosTipo(props:{Tipo: boolean, Titulo: string, Texto: Array<string>, Ruta: string, RutaSitio: string, Imagen: string}) {
    if (props.Tipo === true) {
        return(
            <>
                <div className="cart-services-uno">
                    <div className="cart-services-imag">
                        <img src={props.Imagen} alt={`Imagen-${props.Titulo}`} />
                    </div>
                    <div className="cart-services-info-text">
                        <div>
                            <h2> {props.Titulo} </h2>
                        </div>
                        <div>
                            {/* aqui usar mejor .map */}
                            {props.Texto.map((texto, index) =>(
                                <p key={index}>{texto}</p>
                            ))}
                        </div>
                        <div className="cart-services-butons">
                            <a href={route(props.Ruta)} title={props.Titulo} className="butonEsp">Cotiza</a>
                            <a href={route(props.RutaSitio)} title={props.Titulo} className="butonEsp">Saber más</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }else if (props.Tipo === false){
        return(
            <>
            <div className="cart-services-uno">
                <div className="cart-services-info-text">
                    <div>
                        <h2> {props.Titulo} </h2>
                    </div>
                    <div>
                        {/* aqui usar mejor .map */}
                        {props.Texto.map((texto, index) =>(
                            <p key={index}>{texto}</p>
                        ))}
                    </div>
                    <div className="cart-services-butons"> 
                        <a href={route(props.Ruta)} title={props.Titulo} className="butonEsp">Cotiza</a>
                        <a href={route(props.RutaSitio)} title={props.Titulo} className="butonEsp">Saber más</a>
                    </div>
                </div>
                <div className="cart-services-imag">
                    <img src={props.Imagen} alt={`Imagen-${props.Titulo}`} />
                </div>
            </div>
            </>
        );
    }
}