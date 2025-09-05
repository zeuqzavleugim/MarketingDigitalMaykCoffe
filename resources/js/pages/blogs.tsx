import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import TarjetaBlog from "@/components/tarjetaBlog";
import { Paginas } from "@/imgs/pag";

export default function Blogs() {
    return(
        <>
        <Head title="Blog de Marketing Digital"/>
        <Navbar/>
        <main className="banner-portafolio">
            <div className="banner-portafolio-title">
                <h1>
                    ¿Listo para transformar tu negocio? 
                </h1>
                <h2>
                    ¡Hablemos hoy mismo!
                </h2>
            </div>
            <div className="banner-portafolio-text">
                <p>
                    En MaykCoffe, somos una agencia digital en 
                    CDMX especializada en desarrollo web, SEO 
                    y marketing digital para empresas en México. 
                </p>
                <p>
                    Creamos páginas web rápidas, optimizadas para 
                    Google, y estrategias personalizadas para que 
                    tu negocio aparezca primero en buscadores y 
                    aumente sus ventas.
                </p>
                <p>
                    Cotiza gratis tu proyecto y descubre cuánto 
                    puede crecer tu empresa con un sitio web que 
                    realmente vende.
                </p>
            </div>
        </main>
        <main className="blogs-tarjet">
            <TarjetaBlog
                Tit="SEO: el activo invisible que genera ventas a largo plazo"
                Img= {Paginas.TuDesarrollo}
                Rut= "SEOActivoInvisible"
            />
        </main>
        <Formulario/>
        <Footer/>
        </>
    );
}