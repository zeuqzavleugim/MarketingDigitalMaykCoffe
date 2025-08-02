import { Head, Link } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import Desarrollo from "@/layouts/desarrollos";
import Planes from "@/layouts/planes";

export default function Portafolio() {
    return(
        <>
        <Head title="Portafolio de Sitios Web Profesionales | MaykCoffe"/>
        <Navbar/>
        <main></main>
        <Desarrollo/>
        <section>
            <hr />
            <div>
                <div>
                    <h2>¿Quieres un sitio?</h2>
                    <p>
                        Agenda una llamada y empieza tu proyecto hoy, 
                        Cotización gratuita y asesoramiento inicial 
                        incluida.
                    </p>
                </div>
                <div>
                    <a href={route("contacto")} className="butonEsp">Cotisa ¡YA!</a>
                </div>
            </div>
        </section>
        <Planes/>
        <Formulario/>
        <Footer/>
        </>
    );
}