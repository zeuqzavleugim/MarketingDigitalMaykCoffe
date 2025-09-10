import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import TarjetaBlog from "@/components/tarjetaBlog";
import { Paginas } from "@/imgs/pag";
import { General } from "@/imgs/general";

export default function Blogs() {
    return(
        <>
        <Head title="Blog de Marketing Digital"/>
        <Navbar/>
        <main className="banner-portafolio">
            <div className="banner-portafolio-title">
                <h1>
                    Blog
                </h1>
                <h2>
                    ¿Listo para transformar tu negocio? 
                </h2>
            </div>
        </main>
        <main className="blogs-tarjet">
            <TarjetaBlog
                Tit="SEO: el activo invisible que genera ventas a largo plazo"
                Img= {Paginas.TuDesarrollo}
                Rut= "SEOActivoInvisible"
            />
            <TarjetaBlog
                Tit="Razones para contratar una agencia de marketing digital"
                Img= {General.Analytics}
                Rut= "RazonesContratarAgencia"
            />
        </main>
        <Formulario/>
        <Footer/>
        </>
    );
}