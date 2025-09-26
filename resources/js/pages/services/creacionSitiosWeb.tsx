import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import ButonContacto from "@/components/butonContacto";
import { servicio } from "@/imgs/servises";
import Planes from "@/layouts/planes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Banner } from "@/imgs/banners";

export default function CreacionSitiosWeb() {

    useEffect(() => {
        AOS.init({
            duration: 1200, // duración de animación en ms
            once: true,    // animacion
            easing: "ease-in-out"
        });
    }, []);

    return (
        <>
        <Head title="Diseño Web Profesional en México | Páginas que Venden" />
        <Navbar />
        <main className="pag-landing">
            <div className="banner-pag-servces">
                <img src={Banner.PaginaLapModerna} alt="¿Ya viste tu negocio en linea?" title="¿Ya viste tu negocio en linea?" />
            </div>
            <div className="main-servises" ata-aos="fade-up">
                <div className="main-services-info" data-aos="fade-right">
                    <div>
                        <h1>
                            Diseño Web Estratégico <br /> Agencia Digital 
                            Especializada en Páginas Web que Venden 24/7
                        </h1>
                    </div>
                    <div>
                        <p>
                            En nuestra agencia digital desarrollamos sitios 
                            web a medida para emprendedores y empresas que 
                            buscan resultados reales: más tráfico, más leads 
                            y más ventas. <br />
                            Cada página que diseñamos combina estrategia, 
                            practicidad y estética, asegurando un equilibrio 
                            perfecto entre la experiencia del usuario y los 
                            objetivos de negocio. <br />
                            Nuestros programadores implementan un código 
                            limpio, veloz y 100% adaptable a dispositivos 
                            móviles, lo que garantiza mejor posicionamiento 
                            en Google y mayor conversión.
                        </p>
                        <p>
                            Tu sitio web no será solo presencia online, será 
                            una herramienta de ventas activa 24/7.
                        </p>
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Solicita tu cotización ¡YA!"
                        />
                    </div>
                </div>
                <div className="img-services" data-aos="zoom-in" >
                    <img src={servicio.CreacionSitiosWeb} 
                        alt="Ejemplo de sitio profesional diseñada para convertir visitantes en clientes" 
                        title="Sitio web para ti"
                        className="img-service-landing"/>
                </div>
            </div>
            <div className="main-fute-page-services">
                <h2>
                    Diseño de Páginas Web Profesionales para Empresas 
                    y Emprendedores
                </h2>
                <p>
                    En nuestra agencia digital creamos sitios web a 
                    medida, únicos y optimizados para resultados 
                    reales: más visibilidad, más clientes y más ventas. <br />
                    Cada proyecto está diseñado con estrategia, 
                    velocidad de carga, seguridad y adaptación a todos 
                    los dispositivos móviles, asegurando la mejor 
                    experiencia para tus usuarios y el máximo impacto 
                    en Google. <br />
                    Ya sea que necesites una página web dinámica o 
                    estática, desarrollamos portales personalizados, 
                    originales y de alto rendimiento que harán que tu 
                    negocio destaque frente a la competencia.
                </p>
            </div>
            <section className="img-pie-pag" data-aos="fade-up" >
                <img src={Banner.EscritorioTomaPicada} alt="Tranquilidad es confiar en los mejores" title="Tranquilidad es confiar en los mejores" loading="lazy"/>
            </section>
            <section className="section-servicios-text">
                <div className="main-services-div-buton">
                    <ButonContacto
                        Ruta="contacto"
                        Texto="Cotiza YA"
                    />
                </div>
            </section>
            <div className="main-servises" ata-aos="fade-up">
                <div className="main-services-info" data-aos="fade-right">
                    <div>
                        <h2>
                            Diseño de Páginas Web Dinámicas: modernas, 
                            interactivas y pensadas para tu negocio
                        </h2>
                    </div>
                    <div>
                        <p>
                            Una página web dinámica no es solo un 
                            sitio atractivo: es una herramienta digital 
                            que evoluciona y se actualiza en tiempo real, 
                            ofreciendo a tus clientes una experiencia 
                            fluida, interactiva y personalizada. <br />
                            En el diseño web dinámico, trabajamos 
                            dos aspectos clave:
                        </p>
                        <ul>
                            <li>
                                <b>Diseño visual atractivo:</b> animaciones, 
                                efectos y transiciones que hacen que tu 
                                marca se vea moderna y memorable.
                            </li>
                            <li>
                                <b>Funcionalidad adaptable:</b> integración 
                                con bases de datos, paneles de administración 
                                y sistemas automatizados para que tu sitio 
                                siempre esté actualizado sin esfuerzo
                            </li>
                        </ul>
                        <p>
                            Ya sea que busques un portal corporativo, 
                            un ecommerce o una web con actualizaciones 
                            automáticas, desarrollamos páginas dinámicas 
                            optimizadas para SEO, rápidas y seguras, 
                            listas para atraer más tráfico y convertir 
                            visitantes en clientes.
                        </p>
                    </div>
                </div>
                <div className="main-services-info" data-aos="fade-left">
                    <div>
                        <h2>
                            Diseño de Páginas Web Estáticas: simples, 
                            rápidas y accesibles para tu negocio
                        </h2>
                    </div>
                    <div>
                        <p>
                            Una página web estática es ideal para 
                            empresas y emprendedores que necesitan 
                            una presencia profesional en internet 
                            sin requerir actualizaciones constantes 
                            o funcionalidades avanzadas. <br />
                            Este tipo de sitios se caracterizan por:
                        </p>
                        <ul>
                            <li>
                                <b>Velocidad superior de carga</b>, 
                                gracias a un código limpio y ligero.
                            </li>
                            <li>
                                <b>Diseño sobrio y profesional</b>, 
                                sin animaciones innecesarias, 
                                transmitiendo confianza y seriedad.
                            </li>
                            <li>
                                <b>Costos accesibles</b>, perfectos 
                                para quienes inician o desean un 
                                sitio funcional con inversión moderada.
                            </li>
                            <li>
                                <b>Compatibilidad total en dispositivos móviles</b>, 
                                optimizadas para navegadores y buscadores.
                            </li>
                        </ul>
                        <p>
                            En nuestra agencia digital desarrollamos 
                            páginas estáticas optimizadas para SEO, 
                            asegurando que tu negocio no solo tenga un 
                            sitio bonito, sino también visible en 
                            Google y capaz de atraer clientes reales.
                        </p>
                    </div>
                </div>
            </div>
            <div className="main-fute-page-services">
                <div>
                    <ButonContacto
                        Ruta="contacto"
                        Texto="A cotizar ¡YA!"
                    />
                </div>
            </div>
            <section className="img-pie-pag" data-aos="fade-up" >
                <img src={Banner.PaginaLapSencillaPicada} alt="Tranquilidad es confiar en los mejores" title="Tranquilidad es confiar en los mejores" loading="lazy"/>
            </section>
            <div className="main-servises" ata-aos="fade-up">
                <div className="img-services" data-aos="zoom-in">
                    <img src={servicio.SitioWebBanner} 
                        alt="Ejemplo de sitio profesional diseñada para convertir visitantes en clientes" 
                        title="Sitio web para ti"
                        className="img-service-landing"/>
                </div>
                <div className="main-services-info" data-aos="fade-left">
                    <div>
                        <h2>
                            ¿Por qué nuestros sitios web generan resultados reales?
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>Estructura enfocada en conversión, experiencia de usuario (UX) y objetivos comerciales.</li>
                            <li>Posicionamiento orgánico desde el día uno, con arquitectura semántica y etiquetas limpias.</li>
                            <li>Adaptabilidad total en celulares, tablets y pantallas grandes.</li>
                            <li>Hosting optimizado, compresión de recursos y carga veloz (Core Web Vitals en verde).</li>
                            <li>Certificado SSL, backups automáticos y preparado para crecer contigo.</li>
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
            <div className="main-servises" ata-aos="fade-up">
                <div className="main-services-info" data-aos="fade-right">
                    <div>
                        <h2>
                            Destaca en Google y consigue más clientes potenciales
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>URLs limpias, H1-H6 estructurados, sitemap y robots.txt automáticos</li>
                            <li>Integración desde el día uno con Google Search Console y Analytics</li>
                            <li>Investigación previa de palabras clave específicas de tu rubro</li>
                            <li>Optimización de tiempo de carga, imágenes y código</li>
                            <li>UX/UI pensada para bajar el rebote y subir tu autoridad</li>
                        </ul>                       
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Quiero recibir mi cotización"
                        />
                    </div>
                </div>
                <div className="img-services" data-aos="zoom-in">
                    <img src={servicio.SiguientePaso} 
                        alt="Ejemplo de landing page profesional diseñada para convertir visitantes en clientes" 
                        title="landing-page-profesional-mexico"
                        className="img-service-landing"/>
                </div>
            </div>
            <Planes
                TitulH="Planes de renta mensual para tu Sitio Web"
                plans={[
                    {id: "plan1SitioWeb", titulo: "Starter", presio1: 600, datos: ["Sitio de 1-3 secciones", "Diseño básico", "Hosting", "Correo", "SEO básico", "Dominio"], tipo: false},
                    {id: "plan2SitioWeb", titulo: "Plus", presio1: 2000, datos: ["Sitio completo", "Diseño premium con animaciones", "SEO avanzado, Optimizacion con Google, Formulario + WhatsApp", "Reportes mensuales", "Reportes mensuales", "Prioridad en soporte","Hosting", "Correo", "Dominio"], tipo: true},
                    {id: "plan3SitioWeb", titulo: "Pro", presio1: 1200, datos: ["Sitio completo (5-7 secciones)", "Diseño a medida", "Optimizacion Google", "Formulario + WhatsApp","Hosting", "Correo", "Dominio"], tipo: false}
                ]}
                bakColor="background-sin"
            />
            <div className="main-fute-page-services" ata-aos="fade-up"  data-aos="fade-up">
                <h2>
                    Diseño Web Responsivo: tu sitio optimizado 
                    para cualquier dispositivo
                </h2>
                <p>
                    Hoy en día, más del 70% de las visitas a 
                    internet provienen de teléfonos móviles. 
                    Por eso, contar con un diseño web responsivo 
                    ya no es una opción, sino una necesidad 
                    para tu negocio.
                </p>
                <p>
                    Un sitio web responsivo garantiza que tu 
                    página se adapte de forma automática a 
                    cualquier pantalla: smartphones, tablets, 
                    laptops o computadoras de escritorio, 
                    ofreciendo siempre una navegación fluida y 
                    una experiencia de usuario impecable.
                </p>
                <div>
                    <ButonContacto
                        Ruta="contacto"
                        Texto="A cotizar ¡YA!"
                    />
                </div>
            </div>
            <div className="main-servises" ata-aos="fade-up">
                <div className="main-services-info" data-aos="fade-right">
                    <div>
                        <h2>
                            Beneficios del diseño web responsivo:
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <b>Experiencia uniforme en todos los dispositivos</b>, 
                                mejorando la confianza de tus clientes.
                            </li>
                            <li>
                                <b>Carga rápida y optimizada</b>, reduciendo 
                                la tasa de rebote.
                            </li>
                            <li>
                                <b>Mejor posicionamiento en Google</b>, 
                                ya que el SEO premia la adaptabilidad móvil.
                            </li>
                            <li>
                                <b>Más ventas y conversiones</b>, al 
                                facilitar que tus usuarios interactúen 
                                y compren sin fricciones.
                            </li>
                        </ul>
                        <p>
                            En nuestra agencia digital creamos páginas 
                            web responsivas, modernas y optimizadas 
                            para SEO, listas para captar clientes desde 
                            cualquier dispositivo.
                        </p>
                    </div>
                </div>
                <div className="main-services-info" data-aos="fade-left">
                    <div>
                        <h2>
                            ¿Por qué elegirnos para crear tu sitio web?
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <b>Un vendedor digital disponible 24/7</b>, 
                                que trabaja para atraer prospectos y generar 
                                ventas mientras tú escalas tu negocio.
                            </li>
                            <li>
                                <b>Diseños únicos y responsivos</b>, 
                                que se adaptan a cualquier dispositivo 
                                con rapidez y elegancia.
                            </li>
                            <li>
                                <b>Enfoque en resultados</b>, más 
                                tráfico, más leads y más conversiones.
                            </li>
                            <li>
                                <b>SEO integrado desde el inicio</b>, 
                                asegurando que tu sitio aparezca en 
                                Google y crezca de forma sostenible.
                            </li>
                        </ul>
                        <p>
                            No necesitas “otra página más”. Necesitas 
                            un sitio estratégico que impulse tu marca 
                            y se convierta en el motor de tus ventas.
                        </p>
                    </div>
                </div>
            </div>
            <section className="img-pie-pag" data-aos="fade-up" >
                <img src={Banner.GraficasPermanencia} alt="Tranquilidad es confiar en los mejores" title="Tranquilidad es confiar en los mejores" loading="lazy"/>
            </section>
            <div className="main-fute-page-services" ata-aos="fade-up" data-aos="fade-down">
                <h2>
                    Diseño Web Profesional en México: tu 
                    mejor vendedor digital 24/7
                </h2>
                <p>
                    En la era digital, tu sitio web no 
                    solo debe existir… debe inspirar 
                    confianza y convertir visitas en 
                    clientes reales.
                </p>
                <p>
                    En nuestra agencia de diseño web 
                    profesional en México desarrollamos 
                    páginas a la medida con la mejor 
                    tecnología: HTML, CSS, JavaScript 
                    y gestores de contenido para que 
                    tu portal sea moderno y fácil de 
                    actualizar.
                </p>
                <div>
                    <ButonContacto
                        Ruta="contacto"
                        Texto="A cotizar ¡YA!"
                    />
                </div>
            </div>
        </main>
        <Formulario />
        <Footer />
        </>
    );
}