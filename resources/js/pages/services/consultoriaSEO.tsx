import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import ButonContacto from "@/components/butonContacto";
import { servicio } from "@/imgs/servises";
import Planes from "@/layouts/planes";
import { Banner } from "@/imgs/banners";
import ProcesoDeTrabajo from "@/layouts/ProcesoDeTrabajo";

export default function ConsultoriaSEO() {
    return (
        <>
        <Head title="Consultoría SEO Técnica y Estratégica" />
        <Navbar />
        <main className="pag-landing">
            <div className="banner-pag-servces">
                <img src={Banner.BusquedaGoogle} alt="Tu pagina en Google" title="Tu pagina en Google" />
            </div>
            <div className="main-servises">
                <div className="main-services-info">
                    <div>
                        <h1>
                            Impulsa tu sitio web al siguiente nivel en Google
                        </h1>
                        <h2>
                            ¿Qué es y por qué necesitas este servicio?
                        </h2>
                    </div>
                    <div>
                        <br />
                        <p>
                            La consultoría SEO técnica y estratégica es la clave 
                            para que tu sitio web sea visible, rápido y eficiente. 
                            <br />
                            No solo se trata de diseño; se trata de rendimiento, 
                            estructura, estrategia y resultados reales. Es el 
                            impulso que tu negocio necesita para destacar en los 
                            motores de búsqueda.
                        </p>
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Solicita tu cotización gratis"
                        />
                    </div>
                </div>
                <div className="img-services">
                    <img src={servicio.ConsultoriaSEO} 
                        alt="Estrategias para mejorar tu sitio" 
                        title="Estrategias para mejorar tu sitio"
                        className="img-service-landing"
                        loading="lazy"/>
                </div>
            </div>
            <div className="main-servises">
                <div className="img-services">
                    <img src={servicio.AnalisisSEO} 
                        alt="Analisis de ti sitio en forma estricta" 
                        title="Analisis de ti sitio en forma estricta"
                        className="img-service-landing"
                        loading="lazy"/>
                </div>
                <div className="main-services-info">
                    <div>
                        <h2>
                            ¿Qué incluye nuestro servicio?
                        </h2>
                        <h2>
                            SEO Técnico
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>Auditoría completa de sitio (velocidad, errores, estructura)</li>
                            <li>Optimización de Core Web Vitals (Google PageSpeed)</li>
                            <li>Arquitectura de URLs, sitemap, robots.txt, canonical, etc.</li>
                            <li>Indexación y crawl budget</li>
                            <li>Encabezados jerárquicos y marcado semántico</li>
                        </ul>
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Quiero recibir mi cotización"
                        />
                    </div>
                </div>
            </div>
            <div className="main-servises">
                <div className="main-services-info">
                    <div>
                        <h2>
                            SEO Estratégico
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>Análisis de palabras clave con intención de compra</li>
                            <li>Benchmark competitivo</li>
                            <li>Clústeres de contenido y páginas pilares</li>
                            <li>Calendario de contenido SEO</li>
                            <li>Estrategia SEO local (si aplica)</li>
                        </ul>
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Quiero recibir mi cotización"
                        />
                    </div>
                </div>
                <div className="img-services">
                    <img src={servicio.SEOTecnico} 
                        alt="Estrategias para mejorar tu sitio" 
                        title="Estrategias para mejorar tu sitio"
                        className="img-service-landing"
                        loading="lazy"/>
                </div>
            </div>
            <Planes
                TitulH="Planes de renta mensual para tu Consultoria"
                plans={[
                    {id: "plan1ConsultoriaSEO", titulo: "Estrategia inicial", presio1: 1000, datos: ["Diagnóstico único con recomendaciones escritas", "sin mantenimiento"], tipo: false},
                    {id: "plan2ConsultoriaSEO", titulo: "SEO Growth", presio1: 2000, datos: ["Plan estratégico con objetivos", "Ajustes mensuales", "Seguimiento de ranking", "Capacitaciones express"], tipo: true},
                    {id: "plan3ConsultoriaSEO", titulo: "Consultoría mensual", presio1: 1200, datos: ["Asesoría continua", "Seguimiento de ranking", "Ajustes mensuales"], tipo: false}
                ]}
                bakColor="background-sin"
            />
            <div className="main-servises">
                <div className="main-services-info">
                    <div>
                        <h2>
                            Este servicio es para ti si...
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>Tu sitio web no aparece o aparece mal en Google</li>
                            <li>Ya inviertes en marketing sin resultados visibles</li>
                            <li>Tu web es lenta o confusa para el usuario</li>
                            <li>Necesitas una estrategia clara y efectiva</li>
                        </ul>                       
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Quiero recibir mi cotización"
                        />
                    </div>
                </div>
                <div className="img-services">
                    <img src={Banner.ArbolTranquilidad} 
                        alt="Ejemplo de landing page profesional diseñada para convertir visitantes en clientes" 
                        title="landing-page-profesional-mexico"
                        className="img-service-landing"
                        loading="lazy"/>
                </div>
            </div>
        </main>
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
        <ProcesoDeTrabajo/>
        <Formulario />
        <Footer />
        </>
    );
}