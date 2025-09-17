import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import TarjetaBlog from "@/components/tarjetaBlog";
import { Paginas } from "@/imgs/pag";
import { General } from "@/imgs/general";
import { Banner } from "@/imgs/banners";

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
            <TarjetaBlog
                Tit="Marketing Digital Orgánico: qué es, diferencias y cómo aplicarlo en tu negocio"
                Img= {Banner.AnalisisGoogle}
                Rut= "MarketingDigitalOrganico"
            />
            <TarjetaBlog
                Tit="Marketing digital B2B en 2025: estrategias que sí generan resultados"
                Img= {Banner.OrganizacionUnEquipo}
                Rut= "MarketingDigitalB2B"
            />
            <TarjetaBlog
                Tit="Marketing digital para PyMES en 2025: guía práctica para crecer en línea"
                Img= {Banner.AnalisisMetricasGoogle}
                Rut= "MaketingDigitalPymes"
            />
        </main>
        <Formulario/>
        <Footer/>
        </>
    );
}