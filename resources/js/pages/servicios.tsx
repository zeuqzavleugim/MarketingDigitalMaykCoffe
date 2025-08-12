import { Head } from "@inertiajs/react"
import Navbar from "@/layouts/navbar"
import Footer from "@/layouts/footer"
import Formulario from "@/layouts/formulario"
import { Banner } from "@/imgs/banners"
import ButonContacto from "@/components/butonContacto"
import { General } from "@/imgs/general"
import ServiciosTipo from "@/components/servicesTipo"
import { servicio } from "@/imgs/servises"

export default function Servicios() {
    return (
        <>
        <Head title="Servicios de Desarrollo Web, Landing Pages y SEO" />
        <Navbar/>
        <main className="pag-service" >
            <div className="main-servises">
                <div className="main-services-info">
                    <div>
                        <h1>
                            Servicios Profesionales en Desarrollo Web, Landing 
                            Pages y SEO en México
                        </h1>
                    </div>
                    <div>
                        <p>
                            Haz que tu negocio destaque con soluciones digitales 
                            diseñadas para atraer, convertir y escalar. 
                        </p>
                        <p>
                            Creamos sitios web con enfoque estratégico, landing 
                            pages que venden y optimización SEO que te pone al 
                            frente en Google. Todo con atención personalizada y 
                            resultados medibles.
                        </p>
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Cotiza Aqui"
                        />
                    </div>
                </div>
                <div className="img-services">
                    <img src={Banner.Servicios} alt="los servicios dan tranquilidad"  title="los servicios dan tranquilidad"/>
                </div>
            </div>
            <section className="seccion-serviceses">
                <h3>¿Que servicios ofrecemos?</h3>
                <ServiciosTipo
                    Imagen={servicio.LandingPage}
                    Tipo={true}
                    Titulo="Landing Pages de Alto Rendimiento"
                    Texto={[
                        'Diseñadas para una sola acción: convertir.',
                        'Integramos WhatsApp, CRMs, correos automáticos y analítica para medir resultados.'
                    ]}
                    Ruta="contacto"
                    RutaSitio="landingPage"
                />
                <ServiciosTipo
                    Imagen={servicio.CreacionSitiosWeb}
                    Tipo={false}
                    Titulo="Desarrollo de Sitios Web Profesionales"
                    Texto={[
                        'Desde un sitio informativo hasta un ecommerce completo.',
                        'Código limpio, velocidad optimizada y diseño UX/UI que representa tu marca.'
                    ]}
                    Ruta="contacto"
                    RutaSitio="construccion"
                />
                <ServiciosTipo
                    Imagen={servicio.ConsultoriaSEO}
                    Tipo={true}
                    Titulo="Consultoría SEO Técnica y Estratégica"
                    Texto={[
                        'Auditamos, planificamos y ejecutamos estrategias SEO personalizadas para llevar tu sitio a los primeros lugares de Google.'
                    ]}
                    Ruta="contacto"
                    RutaSitio="construccion"
                />
                <ServiciosTipo
                    Imagen={servicio.SEOOptimizacion}
                    Tipo={false}
                    Titulo=" Optimización SEO On-Page & Técnica"
                    Texto={[
                        'Velocidad, estructura, metas, sitemap, robots.txt, indexación, semántica y contenido optimizado sin perder estilo.'
                    ]}
                    Ruta="construccion"
                    RutaSitio="construccion"
                />
            </section>
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
                <div className="main-services-div-buton">
                    <ButonContacto
                        Ruta="contacto"
                        Texto="Cotiza YA"
                    />
                </div>
            </section>
            <section className="img-pie-pag">
                <img src={General.FuncoEnOficinaDePie} alt="Tranquilidad se confiar en los mejores" title="Tranquilidad se confiar en los mejores" />
            </section>
        </main>
        <Formulario/>
        <Footer/>
        </>
    )
}