import { Head } from "@inertiajs/react";
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
        <Desarrollo/>
        <section>
            <hr />
        </section>
        <Planes/>
        <Formulario/>
        <Footer/>
        </>
    );
}