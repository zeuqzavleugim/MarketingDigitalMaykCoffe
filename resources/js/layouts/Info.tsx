import { General } from "@/imgs/general";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Info(props: {Tit: string;}) {
    useEffect(() => {
        AOS.init({
            duration: 1200, // duración de animación en ms
            once: true,    // animacion
            easing: "ease-in-out"
            });
    }, []);
    return(
        <>
            <header className="first-seccion" id="conoceme" data-aos="fade-up">
                <div className="seccion-img-perfil" data-aos="zoom-in" >
                    <img 
                        src={General.Perfil} 
                        alt="Foto estilo Funco" 
                        title="Foto estilo Funco" 
                        loading="lazy" />
                </div>
                <div className="seccion-info-perfil" data-aos="fade-left">
                    <h2>
                        {props.Tit}
                    </h2>
                    <p>
                        Creamos páginas web y aplicaciones modernas, 
                        rápidas y optimizadas para Google. 
                        <br /><br />
                        En MaykCoffe diseñamos estrategias SEO que 
                        mejoran tu posición en buscadores, analizamos 
                        el rendimiento con herramientas de Google y 
                        transformamos tu negocio en un imán de clientes.
                        <br /><br />
                        ¿Necesitas un sitio corporativo, un portafolio 
                        o una tienda online? Te ayudamos a crecer con 
                        marketing digital, posicionarte en Google y 
                        atraer más ventas.
                        <br /><br />
                        ¡Cotiza tu proyecto sin costo y lleva tu 
                        negocio al siguiente nivel!.
                    </p>
                    <div className="seccion-icons">
                        <a href={route("contacto")} className="navbar-blue">Cotiza Aqui</a>
                    </div>
                </div>
            </header>
        </>
    );
}