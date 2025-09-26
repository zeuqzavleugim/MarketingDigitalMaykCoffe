import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import ButonContacto from "@/components/butonContacto";
import { servicio } from "@/imgs/servises";
import Planes from "@/layouts/planes";
import { Banner } from "@/imgs/banners";
import Acordion from "@/components/acordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ConsultoriaSEO() {

    useEffect(() => {
            AOS.init({
                duration: 1200, // duración de animación en ms
                once: true,    // animacion
                easing: "ease-in-out"
            });
        }, []);

    return (
        <>
        <Head title="Optimización SEO On-Page y Técnica en México | Posiciona tu Negocio en Google" />
        <Navbar />
        <main className="pag-landing" ata-aos="fade-up">
            <div className="banner-pag-servces">
                <img src={Banner.AnalisisMostradasLap} alt="Si no lo puedes medir, no lo puedes vender" title="Si no lo puedes medir, no lo puedes vender" />
            </div>
            <div className="main-servises" >
                <div className="main-services-info" data-aos="fade-right">
                    <div>
                        <h1>
                            Optimización SEO On-Page y Técnica en México 
                            Mejora tu Posicionamiento Web
                        </h1>
                        <p>
                            Haz que Google te ame y que tus clientes 
                            te encuentren primero.
                        </p>
                    </div>
                    <div>
                        <p>
                            En la era digital, no basta con tener una 
                            página bonita: necesitas que Google la 
                            encuentre, la entienda y la posicione en 
                            los primeros lugares. <br />
                            Con nuestra estrategia de SEO On-Page y SEO 
                            Técnico, optimizamos cada detalle de tu sitio 
                            web para que atraigas más tráfico orgánico 
                            y clientes reales.
                        </p>
                        <p>
                            Aplicamos prácticas clave como:
                        </p>
                        <Acordion 
                            Datos={[
                                {id: '1', Titulo: 'Optimización de títulos, meta etiquetas y estructura H1-H6', Texto: 'para que Google interprete correctamente tu contenido.'},
                                {id: '2', Titulo: 'Velocidad de carga y Core Web Vitals en verde', Texto: 'asegurando un sitio rápido y eficiente.'},
                                {id: '3', Titulo: 'Diseño responsivo', Texto: 'indispensable para que tu web destaque en dispositivos móviles.'},
                                {id: '4', Titulo: 'Sitemap, robots.txt y arquitectura semántica', Texto: 'que facilitan la indexación en buscadores.'},
                                {id: '5', Titulo: 'Optimización de enlaces internos y externos', Texto: 'mejorando tu autoridad y relevancia.'},
                            ]}
                        />
                        <p>
                            No sólo optimizamos tu web para Google: la 
                            optimizamos para convertir visitantes en clientes. <br />
                            Con nuestro servicio de SEO, tu negocio no tendrá 
                            solo visibilidad… tendrá resultados.
                        </p>
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Solicita tu cotización gratis"
                        />
                    </div>
                </div>
                <div className="img-services" data-aos="zoom-in">
                    <img src={servicio.SEOOptimizacion} 
                        alt="Estrategias para mejorar tu sitio" 
                        title="Estrategias para mejorar tu sitio"
                        className="img-service-landing"
                        loading="lazy"/>
                </div>
            </div>
            <div className="main-servises">
                <div className="img-services" data-aos="zoom-in">
                    <img src={servicio.SeoSeo} 
                        alt="Analisis de ti sitio en forma estricta" 
                        title="Analisis de ti sitio en forma estricta"
                        className="img-service-landing"
                        loading="lazy"/>
                </div>
                <div className="main-services-info" data-aos="fade-left">
                    <div>
                        <h2>
                            Agencia Digital Especializada en Estrategias 
                            SEO On-Page y Técnicas
                        </h2>
                    </div>
                    <div>
                        <p>
                            Qué comiencen los resultados: optimizamos 
                            tu web para Google y para tus clientes. <br />
                            En el mundo digital actual, tener un sitio 
                            web ya no es suficiente: necesitas que 
                            Google lo entienda, lo valore y lo posicione 
                            en los primeros resultados. <br /> 
                            En nuestra agencia digital especializada 
                            en SEO On-Page y SEO Técnico, combinamos 
                            experiencia, estrategia y tecnología para 
                            lograr que tu negocio reciba más tráfico 
                            orgánico, leads de calidad y conversiones 
                            reales.
                        </p>
                        <p>
                            Nuestros objetivos con tu proyecto:
                        </p>
                        <ul>
                            <li>
                                Que Google indexe e interprete tu web 
                                correctamente
                            </li>
                            <li>
                                Que tus visitantes disfruten de una 
                                experiencia clara, ágil y confiable.
                            </li>
                            <li>
                                Que tu negocio reciba más visibilidad, 
                                tráfico de calidad y ventas sostenibles.
                            </li>
                        </ul>
                        <p>
                            El SEO no es magia, es estrategia. Y con 
                            nuestro equipo, tu sitio no solo tendrá 
                            presencia en internet: será una herramienta 
                            activa de crecimiento para tu negocio.
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
                <div className="main-services-info" data-aos="fade-right">
                    <div>
                        <h2>
                            Elementos Clave de la Optimización SEO 
                            On-Page para Posicionar tu Sitio Web
                        </h2>
                    </div>
                    <div>
                        <p>
                            El SEO On-Page es la base del posicionamiento 
                            orgánico: cada ajuste interno en tu sitio web 
                            ayuda a que Google comprenda mejor tu contenido, 
                            lo indexe con precisión y lo muestre en los 
                            primeros resultados de búsqueda. <br />
                            En nuestra agencia digital trabajamos los 
                            factores esenciales que marcan la diferencia 
                            entre un sitio que existe y un sitio que vende 
                            en automático:
                        </p>
                        <Acordion 
                            Datos={[
                                {id: '6', Titulo: 'Estructura del contenido', Texto: 'Organizamos títulos, subtítulos y párrafos de forma jerárquica y clara (H1-H6), facilitando la lectura tanto a usuarios como a buscadores.'},
                                {id: '7', Titulo: 'Metaetiquetas optimizadas', Texto: 'Diseñamos titles y descriptions atractivas que mejoran el CTR en Google y aumentan la visibilidad de tu marca.'},
                                {id: '8', Titulo: 'Palabras clave estratégicas', Texto: 'Investigamos e integramos keywords relevantes, adaptadas a tu sector y al comportamiento de tus clientes ideales'},
                                {id: '9', Titulo: 'Experiencia de usuario (UX)', Texto: 'Optimizamos diseño, velocidad y navegabilidad para reducir el rebote y aumentar la permanencia en el sitio.'},
                                {id: '10', Titulo: 'Contenido optimizado', Texto: 'Creamos textos persuasivos, claros y útiles que resuelven la intención de búsqueda y generan confianza en tu negocio.'},
                            ]}
                        />
                        <p>
                            Con una estrategia sólida de SEO On-Page, tu página no 
                            solo sube posiciones en Google, también gana relevancia, 
                            autoridad y convierte visitas en clientes reales.
                        </p>
                    </div>
                </div>
                <div className="main-services-info" data-aos="fade-left">
                    <div>
                        <h2>
                            Elementos Clave del SEO Técnico: la base 
                            para un sitio rápido, seguro y optimizado 
                            para Google
                        </h2>
                    </div>
                    <div>
                        <p>
                            El SEO Técnico es el cimiento de todo sitio 
                            web que aspira a posicionarse en los 
                            primeros resultados de Google. No basta 
                            con tener un diseño atractivo: tu web debe 
                            ser rápida, accesible, segura y fácilmente 
                            rastreable por los buscadores. <br />
                            En nuestra agencia trabajamos los aspectos 
                            técnicos más importantes para que tu página 
                            cumpla con los estándares que Google premia 
                            y que tus usuarios disfruten de una 
                            experiencia impecable:
                        </p>
                        <Acordion 
                            Datos={[
                                {id: '11', Titulo: 'Velocidad de carga optimizada', Texto: 'Reducimos tiempos al máximo con código limpio, compresión de imágenes y recursos ligeros, logrando Core Web Vitals en verde.'},
                                {id: '12', Titulo: 'Arquitectura del sitio clara y ordenada', Texto: 'Construimos una estructura interna que facilita la navegación del usuario y el rastreo de Google'},
                                {id: '13', Titulo: 'Indexación correcta', Texto: 'Implementamos sitemap, robots.txt y etiquetas técnicas que aseguran que tu contenido se indexe y posicione de forma efectiva.'},
                                {id: '14', Titulo: 'Mobile First', Texto: 'Optimizamos tu web para que sea 100% funcional en dispositivos móviles, asegurando mejor ranking y mayor conversión.'},
                                {id: '15', Titulo: 'Core Web Vitals', Texto: 'Medimos y optimizamos métricas clave como LCP, CLS y FID, garantizando que tu sitio sea rápido, estable y fácil de usar.'},
                            ]}
                        />
                        <p>
                            Con una estrategia sólida de SEO Técnico, 
                            tu página no solo cumple con las reglas 
                            de Google, sino que también ofrece una 
                            experiencia de usuario superior que 
                            convierte visitas en clientes.
                        </p>
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
                    {id: "plan1OptimizacionSEO", titulo: "Básico", presio1: 600, datos: ["Optimización velocidad", "keywords", "meta etiquetas", "Reporte básico"], tipo: false},
                    {id: "plan2OptimizacionSEO", titulo: "Premium", presio1: 1600, datos: ["Optimización avanzada + link", "building inicial", "auditoría trimestral completa", "Google Analytics", "Search Console", "Reportes mensuales"], tipo: true},
                    {id: "plan3OptimizacionSEO", titulo: "Avanzado", presio1: 1000, datos: ["SEO técnico + estrategia on-page", "Google Analytics", "Search Console", "Reportes mensuales"], tipo: false}
                ]}
                bakColor="background-sin"
            />
            <div className="main-servises" data-aos="fade-left">
                <div className="main-services-info">
                    <div>
                        <h2>
                            Herramientas SEO Avanzadas
                        </h2>
                        <p>
                            Usamos las mejores tecnologías 
                            para detectar oportunidades y 
                            optimizar tu sitio web:
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                Análisis de visibilidad y palabras clave.
                            </li>
                            <li>
                                Detección de fortalezas y debilidades.
                            </li>
                            <li>
                                Métricas claras para mejorar rendimiento.
                            </li>
                        </ul>                       
                    </div>
                    <div>
                        <h2>
                            Decisiones Basadas en Datos
                        </h2>
                        <p>
                            No improvisamos: trabajamos con un enfoque 
                            100% data-driven. Analizamos informes, métricas 
                            y comportamiento de usuarios para diseñar las 
                            acciones SEO que aumentan tu visibilidad y 
                            generan resultados reales.
                        </p>
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
            <div className="main-servises">
                <div className="main-services-info" data-aos="fade-right">
                    <div>
                        <h2>
                            Más Allá de tu Sitio: Autoridad y Backlinks
                        </h2>
                        <p>
                            El SEO actual va más allá de tu página. 
                            Potenciamos tu autoridad digital con 
                            estrategias externas:
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                Backlinks de calidad.
                            </li>
                            <li>
                                Optimización de reputación digital.
                            </li>
                            <li>
                                Marketing de contenidos estratégicos.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-services-info" data-aos="fade-left">
                    <div>
                        <h2>
                            Experiencias Digitales que Venden 24/7
                        </h2>
                        <p>
                            Un sitio optimizado no solo aparece en 
                            Google: atrae, convierte y fideliza 
                            clientes. Creamos experiencias digitales 
                            que generan poder de negocios y llevan 
                            tu marca al siguiente nivel.
                        </p>
                    </div>
                </div>
            </div>
        </main>
        <Formulario />
        <Footer />
        </>
    );
}