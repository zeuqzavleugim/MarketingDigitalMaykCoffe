import { General } from "@/imgs/general";
import { Icons } from "@/imgs/Icons";

export default function Info(props: {Tit: string;}) {
    return(
        <>
            <header className="first-seccion" id="conoceme">
                <div className="seccion-img-perfil">
                    <img 
                        src={General.Perfil} 
                        alt="Foto estilo Funco" 
                        title="Foto estilo Funco" 
                        loading="lazy" />
                </div>
                <div className="seccion-info-perfil">
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