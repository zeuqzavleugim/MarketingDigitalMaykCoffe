import { Head, Link } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import Desarrollo from "@/layouts/desarrollos";
import Planes from "@/layouts/planes";
import ButonContacto from "@/components/butonContacto";

export default function Blogs() {
    return(
        <>
        <Head title="..."/>
        <Navbar/>
        <main className="banner-portafolio">
            <div className="banner-portafolio-title">
                <h1>
                    ...
                </h1>
            </div>
            <div className="banner-portafolio-text">
                <p>
                    ...
                </p>
                <p>
                    ...
                </p>
            </div>
        </main>
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
        <Formulario/>
        <Footer/>
        </>
    );
}