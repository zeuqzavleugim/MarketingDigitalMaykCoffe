import { Head, Link } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import Desarrollo from "@/layouts/desarrollos";
import Planes from "@/layouts/planes";
import ButonContacto from "@/components/butonContacto";
import Carrousel from "@/components/carrousel";
import { Banner } from "@/imgs/banners";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Portafolio() {
    
    useEffect(() => {
        AOS.init({
            duration: 1200, // duración de animación en ms
            once: false,    // animacion
            easing: "ease-in-out"
        });
    }, []);

    return(
        <>
        <Head title="Portafolio de Sitios Web Profesionales"/>
        <Navbar/>
        <main className="banner-portafolio">
            <div className="banner-portafolio-title">
                <h1>
                    Portafolio de Sitios Web Profesionales con SEO y 
                    Diseño Estratégico
                </h1>
            </div>
            <div className="banner-portafolio-text">
                <p>
                    Explora proyectos reales de diseño web, optimización SEO y 
                    desarrollo de sitios efectivos que posicionan y venden.
                </p>
                <p>
                    Descubre cómo ayudamos a empresas reales a transformar 
                    sus ideas en sitios web funcionales, rápidos y 
                    optimizados para Google. Cada proyecto es un caso 
                    de éxito en diseño UX/UI, velocidad de carga y 
                    estrategias SEO técnicas aplicadas desde el primer 
                    clic.
                </p>
            </div>
            <div className="banner-portafolio-button">
                <ButonContacto
                    Ruta="contacto"
                    Texto="Cotiza Aqui"
                />
            </div>
        </main>
        <div className="pag-service">
            <Carrousel
                Banners={[
                    {Img: Banner.BocetoUnaPaginaPapel, Alt: 'Todo inicia desde una idea', Titulo: 'Todo inicia desde una idea'},
                    {Img: Banner.OrganizacionUnEquipo, Alt: 'Cumplimos desde la organización', Titulo: 'Cumplimos desde la organización'},
                    {Img: Banner.DisenoFigmaUnaPagina, Alt: 'Lo diseñamos y planeamos a la medida de tu negocio', Titulo: 'Lo diseñamos y planeamos a la medida de tu negocio'},
                    {Img: Banner.PaginaModernaLap, Alt: 'Plasma tu idea en el mundo digital', Titulo: 'Plasma tu idea en el mundo digital'},
                    {Img: Banner.AnalisisMostradasLap, Alt: 'Mide tu crecimiento y evoluciona antes que nadie', Titulo: 'Mide tu crecimiento y evoluciona antes que nadie'},
                ]}
                height={550}
                intervalMs={6000}
            />
        </div>
        <Desarrollo/>
        <section>
            <hr />
            <div className="container info-pryect">
                <div className="info-pryect-text">
                    <h2>¿Quieres un sitio?</h2>
                    <p>
                        Agenda una llamada y empieza tu proyecto hoy, 
                        Cotización gratuita y asesoramiento inicial 
                        incluida.
                    </p>
                </div>
                <div className="info-pryect-button">
                    <ButonContacto 
                        Ruta="contacto"
                        Texto="Cotiza ¡YA!"
                    />
                </div>
            </div>
        </section>
        <section className="img-pie-pag" data-aos="fade-up" data-aos-anchor-placement="center-center">
            <img src={Banner.PermanenciaUsuarios} alt="Tranquilidad es confiar en los mejores" title="Tranquilidad es confiar en los mejores" loading="lazy"/>
        </section>
        <Planes
            TitulH="Planes de renta mensual para tu sitio web, con mantenimiento incluido"
            plans={[
                {id: "plan1", titulo: "Portafolio personal / Landing Page", presio1: 600, datos: ["Hosting", "Dominio", "Correo", "Sitio de 1 a 3 secciones", "SEO básico"], tipo: false},
                {id: "plan2", titulo: "Pequeñas Empresas", presio1: 1200, datos: ["Hosting", "Dominio", "Correo", "Sitio completo (5 a 7 secciones)", "SEO on-page", "Diseño a medida", "Soporte mensual"], tipo: true},
                {id: "plan3", titulo: "Medianas Empresas", presio1: 2000, datos: ["Hosting", "Dominio", "Correo", "Sitio Completo", "SEO básico", "Diseño Premium", "SEO avanzado", "Reportes mensuales", "Prioridad en soporte"], tipo: false}
            ]}
        />
        <section className="section-servicios-text">
            <div className="main-services-div">
                <h2>
                    ¿Por qué trabajar con nosotros?
                </h2>
                <p>
                    Mira cómo otros negocios han logrado destacar en Google 
                    y aumentar sus conversiones gracias a nuestras soluciones.
                </p>
            </div>
        </section>
        <section className="img-pie-pag">
            <img src={Banner.EscritorioTomaPicada} alt="Tranquilidad es confiar en los mejores" title="Tranquilidad es confiar en los mejores" loading="lazy"/>
        </section>
        <Formulario/>
        <Footer/>
        </>
    );
}