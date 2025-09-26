import { Head } from "@inertiajs/react";
import Navbar from "../layouts/navbar";
import Footer from "@/layouts/footer";
import Info from "@/layouts/Info";
import Planes from "@/layouts/planes";
import Formulario from "@/layouts/formulario";
import Servicios from "@/layouts/servicios";
import Carrousel from "@/components/carrousel";
import { Paginas } from "@/imgs/pag";
import { General } from "@/imgs/general";
import { Banner } from "@/imgs/banners";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButonContacto from "@/components/butonContacto";

export default function Home() {
    
    useEffect(() => {
            AOS.init({
                duration: 1200, // duración de animación en ms
                once: true,    // animacion
                easing: "ease-in-out"
            });
        }, []);

    return(
        <>
            <Head title="Agencia de Desarrollo Web en CDMX |Sitios que Venden" />
            <Navbar />
            <Carrousel
                Banners={[
                    {Img: Banner.BusquedaGoogle, Alt: 'Tu pagina en Google', Titulo: 'Tu pagina en Google'},
                    {Img: Banner.BocetoUnaPaginaPapel, Alt: 'Del papel a la web', Titulo: 'Del papel a la web'},
                    {Img: Banner.DisenoFigmaUnaPagina, Alt: 'Desde el siseño hasta la implementación', Titulo: 'Desde el siseño hasta la implementación'},
                    {Img: Banner.PaginaAnaliticaGraficas, Alt: 'Medimos todo para tu facilidad', Titulo: 'Medimos todo para tu tranquilidad'},
                    {Img: Banner.GraficasPermanencia, Alt: 'Que tu pagina llegue a tu publico objetivo', Titulo: 'Tu pagina llega a tus clientes'},
                    {Img: Paginas.TuDesarrollo, Alt: 'Ejemplo de página web, tu próximo proyecto puede lucir así', Titulo: '¿Listo para ver cómo aumentar tus ventas?'}
                ]}
                height={420}
                intervalMs={6000}
            />
            <section className="desarrollos">
                <h1>
                    Agencia de Desarrollo Web y SEO en CDMX para Impulsar tu Negocio Online
                </h1>
            </section>
            <Info 
                Tit="Desarrollo de páginas web rápidas, seguras y optimizadas"
            />
            <section className="desarrollos">
                <h2>
                    SEO Técnico en CDMX para posicionarte en Google
                </h2>
            </section>
            <section className="desarrollos" data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
                <img src={General.Analytics} alt="SEO Técnico en CDMX para posicionarte en Google" title="SEO Técnico en CDMX para posicionarte en Google" loading="lazy" />
                <img src={Banner.AnalisisMetricasGoogle} alt="SEO Técnico en CDMX para posicionarte en Google" title="SEO Técnico en CDMX para posicionarte en Google" loading="lazy" />
            </section>
            <div className="desarrollos">
                <ButonContacto
                    Ruta="contacto"
                    Texto="Agenda una consulta"
                />
            </div>
            <Planes
                TitulH="Planes mensuales flexibles para PyMEs y emprendedores"
                plans={[
                    {id: "plan1", titulo: "Portafolio personal / Landing Page", presio1: 600, datos: ["Hosting", "Dominio", "Correo", "Sitio de 1 a 3 secciones", "SEO básico"], tipo: false},
                    {id: "plan2", titulo: "PyMEs", presio1: 1200, datos: ["Hosting", "Dominio", "Correo", "Sitio completo (5 a 7 secciones)", "SEO on-page", "Diseño a medida", "Soporte mensual"], tipo: true},
                    {id: "plan3", titulo: "Medianas Empresas", presio1: 2000, datos: ["Hosting", "Dominio", "Correo", "Sitio Completo", "SEO básico", "Diseño Premium", "SEO avanzado", "Reportes mensuales", "Prioridad en soporte"], tipo: false}
                ]}
                bakColor="background-imag"
            />
            <section className="desarrollos">
                <h2>
                    Diseño web estratégico para atraer más clientes
                </h2>
            </section>
            <section className="desarrollos" data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
                <img src={General.MonitorBienIluminado} alt="SEO Técnico en CDMX para posicionarte en Google" title="SEO Técnico en CDMX para posicionarte en Google" loading="lazy" />
                <img src={Banner.PaginaLapTomaPicada} alt="SEO Técnico en CDMX para posicionarte en Google" title="SEO Técnico en CDMX para posicionarte en Google" loading="lazy" />
            </section>
            <div className="desarrollos">
                <ButonContacto
                    Ruta="contacto"
                    Texto="Agenda una consulta"
                />
            </div>
            <Servicios/>
            <section className="desarrollos">
                <h2>
                    ¿Listo para vender más con tu sitio web?
                </h2>
            </section>
            <section className="desarrollos">
                <h3>Cotiza hoy</h3>
            </section>
            <section className=" ">
                <Formulario/>
            </section>
            <Footer />
        </>
    );
}