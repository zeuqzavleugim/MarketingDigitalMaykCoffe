import { Head, Link } from "@inertiajs/react";
import Navbar from "../layouts/navbar";
import Footer from "@/layouts/footer";
import Info from "@/layouts/Info";
import Desarrollo from "@/layouts/desarrollos";
import Planes from "@/layouts/planes";
import Formulario from "@/layouts/formulario";
import Servicios from "@/layouts/servicios";

export default function Home() {
    return(
        <>
            <Head title="Agencia de Desarrollo Web y SEO en CDMX" />
            <Navbar />
            <hr />
            <Info />
            <hr />
            <section className="desarrollos">
                <h2>
                    Diseño y SEO para atraer más clientes 
                    sin depender solo de anuncios.
                </h2>
            </section>
            <Desarrollo/>
            <section className="desarrollos">
                <hr />
                <h2>
                    Desarrollo de páginas web rápidas y seguras
                </h2>
            </section>
            <Planes
                TitulH="Planes de renta mensual para tu sitio web, con mantenimiento incluido"
                plans={[
                    {id: "plan1", titulo: "Portafolio personal / Landing Page", presio1: 600, presio2: 900, datos: ["Hosting", "Dominio", "Correo", "Sitio de 1 a 3 secciones", "SEO básico"], tipo: false},
                    {id: "plan2", titulo: "Pequeñas Empresas", presio1: 1200, presio2: 1800, datos: ["Hosting", "Dominio", "Correo", "Sitio completo (5 a 7 secciones)", "SEO on-page", "Diseño a medida", "Soporte mensual"], tipo: true},
                    {id: "plan3", titulo: "Medianas Empresas", presio1: 2000, presio2: 3500, datos: ["Hosting", "Dominio", "Correo", "Sitio Completo", "SEO básico", "Diseño Premium", "SEO avanzado", "Reportes mensuales", "Prioridad en soporte"], tipo: false}
                ]}
            />
            <section className="desarrollos">
                <hr />
                <h2>
                    Páginas web modernas, SEO técnico y 
                    marketing digital que posiciona tu 
                    empresa en Google.
                </h2>
                <hr />
            </section>
            <Servicios/>
            <section className="desarrollos">
                <hr />
                <h2>
                    Consultoría en marketing digital para 
                    escalar tu negocio
                </h2>
                <hr />
            </section>
            <Formulario/>
            <Footer />
        </>
    );
}