import { Head } from "@inertiajs/react";
import Navbar from "../layouts/navbar";
import Footer from "@/layouts/footer";
import Info from "@/layouts/Info";
import Desarrollo from "@/layouts/desarrollos";
import Planes from "@/layouts/planes";
import Formulario from "@/layouts/formulario";
import Servicios from "@/layouts/servicios";
import Carrousel from "@/components/carrousel";
import { Paginas } from "@/imgs/pag";

export default function Home() {
    return(
        <>
            <Head title="Agencia de Desarrollo Web y SEO en CDMX" />
            <Navbar />
            <section className="desarrollos">
                <h1>
                    Agencia de Desarrollo Web y SEO en CDMX para Impulsar tu Negocio Online
                </h1>
            </section>
            <Carrousel
                Banners={[
                    {Img: Paginas.Decoracion, Alt: 'Diseño de página web para empresa de decoración corporativa enfocada en medianas y grandes empresas', Titulo: 'Decoración de Oficinas', Parrafo: 'Diseño web para empresa de decoración que transforma espacios corporativos. ¡Descubre el proyecto!'},
                    {Img: Paginas.Beckman, Alt: 'Diseño de tienda en línea para venta de mochilas en México', Titulo: 'Beckman Mexico', Parrafo: 'Así luce un e-commerce para mochilas hecho a medida para el mercado mexicano. ¡Descúbrelo!'},
                    {Img: Paginas.Textiles, Alt: 'Página web para venta de textiles industriales a empresas', Titulo: 'Textiles', Parrafo: 'Sitio web para empresa de textiles industriales, orientado a ventas B2B. ¡Conoce el proyecto!'},
                    {Img: Paginas.Romo, Alt: 'Diseño de página web para firma de abogados en Estados Unidos', Titulo: 'Romo & Becerril', Parrafo: 'Página web para firma de abogados ofreciendo servicios legales en Estados Unidos.'},
                    {Img: Paginas.Impresos, Alt: 'Página web para empresa de decoración dirigida a pequeñas empresas', Titulo: 'Magic pop Impresos', Parrafo: 'Así luce una página web creada para negocios de decoración que venden a pymes.'},
                    {Img: Paginas.TuDesarrollo, Alt: 'Ejemplo de página web, tu próximo proyecto puede lucir así', Titulo: '¿Listo para ver cómo puede lucir tu próximo proyecto digital?', Parrafo: 'Tu próximo sitio web podría verse así. ¡Descúbrelo!'}
                ]}
                height={350}
            />
            <Info 
                Tit="Desarrollo de páginas web rápidas y seguras"
            />
            <section className="desarrollos">
                <hr />
                <h2>
                    Diseño y SEO para atraer más clientes 
                    sin depender solo de anuncios.
                </h2>
            </section>
            <Planes
                TitulH="Planes de renta mensual para tu sitio web, con mantenimiento incluido"
                plans={[
                    {id: "plan1", titulo: "Portafolio personal / Landing Page", presio1: 600, presio2: 900, datos: ["Hosting", "Dominio", "Correo", "Sitio de 1 a 3 secciones", "SEO básico"], tipo: false},
                    {id: "plan2", titulo: "Pequeñas Empresas", presio1: 1200, presio2: 1800, datos: ["Hosting", "Dominio", "Correo", "Sitio completo (5 a 7 secciones)", "SEO on-page", "Diseño a medida", "Soporte mensual"], tipo: true},
                    {id: "plan3", titulo: "Medianas Empresas", presio1: 2000, presio2: 3500, datos: ["Hosting", "Dominio", "Correo", "Sitio Completo", "SEO básico", "Diseño Premium", "SEO avanzado", "Reportes mensuales", "Prioridad en soporte"], tipo: false}
                ]}
                bakColor="background-imag"
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
            <section className=" ">
                <Formulario/>
            </section>
            <Footer />
        </>
    );
}