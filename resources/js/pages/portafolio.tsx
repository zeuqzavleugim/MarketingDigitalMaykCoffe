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
        <Planes/>
        <Formulario/>
        <Footer/>
        </>
    );
}