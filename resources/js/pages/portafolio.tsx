import { Head, Link } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import Desarrollo from "@/layouts/desarrollos";
import Planes from "@/layouts/planes";
import ButonContacto from "@/components/butonContacto";

export default function Portafolio() {
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
        <Planes
            TitulH="Planes de renta mensual para tu sitio web, con mantenimiento incluido"
            plans={[
                {id: "plan1", titulo: "Portafolio personal / Landing Page", presio1: 600, presio2: 900, datos: ["Hosting", "Dominio", "Correo", "Sitio de 1 a 3 secciones", "SEO básico"], tipo: false},
                {id: "plan2", titulo: "Pequeñas Empresas", presio1: 1200, presio2: 1800, datos: ["Hosting", "Dominio", "Correo", "Sitio completo (5 a 7 secciones)", "SEO on-page", "Diseño a medida", "Soporte mensual"], tipo: true},
                {id: "plan3", titulo: "Medianas Empresas", presio1: 2000, presio2: 3500, datos: ["Hosting", "Dominio", "Correo", "Sitio Completo", "SEO básico", "Diseño Premium", "SEO avanzado", "Reportes mensuales", "Prioridad en soporte"], tipo: false}
            ]}
        />
        <Formulario/>
        <Footer/>
        </>
    );
}