import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServiciosTipo(props:{Tipo: boolean, Titulo: string, Texto: Array<string>, Ruta: string, RutaSitio: string, Imagen: string}) {
    
    useEffect(() => {
            AOS.init({
                duration: 1200, // duración de animación en ms
                once: false,    // animacion
                easing: "ease-in-out"
            });
        }, []);
    
    if (props.Tipo === true) {
        return(
            <>
                <div className="cart-services-uno" data-aos="fade-down-right">
                    <div className="cart-services-imag">
                        <img src={props.Imagen} alt={`Imagen-${props.Titulo}`} title={`Imagen-${props.Titulo}`} loading="lazy"/>
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
            <div className="cart-services-uno" data-aos="fade-up-left">
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
                    <img src={props.Imagen} alt={`Imagen-${props.Titulo}`} title={`Imagen-${props.Titulo}`} loading="lazy"/>
                </div>
            </div>
            </>
        );
    }
}