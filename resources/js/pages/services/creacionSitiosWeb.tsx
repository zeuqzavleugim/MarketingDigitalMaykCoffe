import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import ButonContacto from "@/components/butonContacto";
import { servicio } from "@/imgs/servises";
import Planes from "@/layouts/planes";
import { Banner } from "@/imgs/banners";

export default function CreacionSitiosWeb() {
    return (
        <>
        <Head title="Diseño de Sitios Web Profesionales | Desarrollo Web" />
        <Navbar />
        <main className="pag-landing">
            <div className="main-servises">
                <div className="main-services-info">
                    <div>
                        <h1>
                            Sitios web estratégicos que venden por ti 24/7
                        </h1>
                    </div>
                    <div>
                        <p>
                            Desarrollamos sitios web a medida para emprendedores 
                            y empresas que necesitan resultados reales: más tráfico, 
                            más leads y más ventas.
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
                    <img src={servicio.CreacionSitiosWeb} 
                        alt="Ejemplo de sitio profesional diseñada para convertir visitantes en clientes" 
                        title="Sitio web para ti"
                        className="img-service-landing"/>
                </div>
            </div>
            <div className="main-servises">
                <div className="img-services">
                    <img src={servicio.SitioWebBanner} 
                        alt="Ejemplo de sitio profesional diseñada para convertir visitantes en clientes" 
                        title="Sitio web para ti"
                        className="img-service-landing"/>
                </div>
                <div className="main-services-info">
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
            <Planes
                TitulH="Planes de renta mensual para tu Sitio Web"
                plans={[
                    {id: "plan1SitioWeb", titulo: "Starter", presio1: 600, presio2: 1100, datos: ["Sitio de 1-3 secciones", "Diseño básico", "Hosting", "Correo", "SEO básico", "Dominio"], tipo: false},
                    {id: "plan2SitioWeb", titulo: "Plus", presio1: 2000, presio2: 3500, datos: ["Sitio completo", "Diseño premium con animaciones", "SEO avanzado, Optimizacion con Google, Formulario + WhatsApp", "Reportes mensuales", "Reportes mensuales", "Prioridad en soporte","Hosting", "Correo", "Dominio"], tipo: true},
                    {id: "plan3SitioWeb", titulo: "Pro", presio1: 1200, presio2: 1900, datos: ["Sitio completo (5-7 secciones)", "Diseño a medida", "Optimizacion Google", "Formulario + WhatsApp","Hosting", "Correo", "Dominio"], tipo: false}
                ]}
                bakColor="background-sin"
            />
            <div className="main-servises">
                <div className="main-services-info">
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
                <div className="img-services">
                    <img src={servicio.SiguientePaso} 
                        alt="Ejemplo de landing page profesional diseñada para convertir visitantes en clientes" 
                        title="landing-page-profesional-mexico"
                        className="img-service-landing"/>
                </div>
            </div>
            <div className="main-fute-page-services">
                <h2>
                    Tu sitio web debe inspirar confianza… y convertir.
                </h2>
                <p>
                    No necesitas un sitio más, necesitas un vendedor digital que trabaje por ti 24/7. 
                    Yo lo diseño. Tú enfócate en escalar tu negocio.
                    <br /><br />
                    Estoy listo para crear tu sitio web
                </p>
            </div>
        </main>
        <Formulario />
        <Footer />
        </>
    );
}