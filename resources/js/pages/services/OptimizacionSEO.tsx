import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import ButonContacto from "@/components/butonContacto";
import { servicio } from "@/imgs/servises";
import Planes from "@/layouts/planes";
import { Banner } from "@/imgs/banners";

export default function ConsultoriaSEO() {
    return (
        <>
        <Head title="Optimización SEO On-Page & Técnica | Aumenta tu Visibilidad" />
        <Navbar />
        <main className="pag-landing">
            <div className="main-servises">
                <div className="main-services-info">
                    <div>
                        <h1>
                            Optimización SEO On-Page & Técnica
                        </h1>
                    </div>
                    <div>
                        <p>
                            Haz que Google te ame y que los usuarios te encuentren primero
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
                    <img src={servicio.SEOOptimizacion} 
                        alt="Estrategias para mejorar tu sitio" 
                        title="Estrategias para mejorar tu sitio"
                        className="img-service-landing"
                        loading="lazy"/>
                </div>
            </div>
            <div className="main-servises">
                <div className="img-services">
                    <img src={servicio.SeoSeo} 
                        alt="Analisis de ti sitio en forma estricta" 
                        title="Analisis de ti sitio en forma estricta"
                        className="img-service-landing"
                        loading="lazy"/>
                </div>
                <div className="main-services-info">
                    <div>
                        <h2>
                            ¿Qué es la Optimización SEO On-Page & Técnica?
                        </h2>
                    </div>
                    <div>
                        <p>
                            Es el proceso integral de mejorar tanto el 
                            contenido visible como la estructura interna 
                            y técnica de tu sitio web para lograr tres 
                            objetivos clave:
                        </p>
                        <ul>
                            <li>Que Google entienda, indexe y valore correctamente tu sitio.</li>
                            <li>Que tus visitantes tengan una experiencia clara, útil y confiable.</li>
                            <li>Que tu negocio reciba tráfico de calidad y aumente sus conversiones.</li>
                        </ul>
                        <p>
                            Este servicio pone fin al juego de las escondidas con los buscadores. 
                            <br />
                            Tu sitio aparecerá cuando tu cliente ideal lo necesita.
                        </p>
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
                            Elementos que trabajamos en la Optimización SEO On-Page
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>Estructura del contenido</li>
                            <li>Metaetiquetas</li>
                            <li>Palabras clave estratégicas</li>
                            <li>Experiencia de usuario (UX)</li>
                            <li>Contenido optimizado</li>
                        </ul>
                    </div>
                </div>
                <div className="main-services-info">
                    <div>
                        <h2>
                            Elementos que trabajamos en el SEO Técnico
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>Velocidad de carga</li>
                            <li>Arquitectura del sitio</li>
                            <li>Indexación correcta</li>
                            <li>Mobile First</li>
                            <li>Core Web Vitals</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ButonContacto
                    Ruta="contacto"
                    Texto="Quiero recibir mi cotización"
                />
            </div>
            <Planes
                TitulH="Planes de renta mensual para tu Consultoria"
                plans={[
                    {id: "plan1OptimizacionSEO", titulo: "Básico", presio1: 600, presio2: 900, datos: ["Optimización velocidad", "keywords", "meta etiquetas", "Reporte básico"], tipo: false},
                    {id: "plan2OptimizacionSEO", titulo: "Premium", presio1: 1600, presio2: 2000, datos: ["Optimización avanzada + link", "building inicial", "auditoría trimestral completa", "Google Analytics", "Search Console", "Reportes mensuales"], tipo: true},
                    {id: "plan3OptimizacionSEO", titulo: "Avanzado", presio1: 1000, presio2: 1500, datos: ["SEO técnico + estrategia on-page", "Google Analytics", "Search Console", "Reportes mensuales"], tipo: false}
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
                            <li>Tu sitio web ya existe pero no aparece en Google.</li>
                            <li>Estás por lanzar una web nueva y quieres empezar con el pie derecho.</li>
                            <li>Quieres atraer más clientes sin depender de anuncios pagos.</li>
                            <li>Necesitas una web más rápida, limpia y alineada con Google.</li>
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
        <Formulario />
        <Footer />
        </>
    );
}