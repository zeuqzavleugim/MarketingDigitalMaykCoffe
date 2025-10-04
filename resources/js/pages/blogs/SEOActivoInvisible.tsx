import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import { Banner } from "@/imgs/banners";
import LineaRuta from "@/components/lineaRuta";

export default function SEOActivoInvisible() {
    return(
        <>
            <Head title="SEO:el activo invisible que genera ventas a largo plazo" />
            <Navbar/>
            <main>
                <div className="div-baner-img">
                    <img src={Banner.BannerHambienteOficinba} alt="SEO:el activo invisible" title="SEO:el activo invisible" />
                </div>
            </main>
            <section className="padContend">
                <LineaRuta
                    Listas={['Inicio', 'Blogs', 'SEO: el activo invisible que genera ventas a largo plazo']}
                    Lrutas={['home','blogs', 'SEOActivoInvisible']}
                />
            </section>
            <section className="blog-body">
                <h1 className="text-center">
                    <strong>SEO:</strong> el activo invisible que genera ventas a largo plazo
                </h1>
                <p>
                    El SEO ya no es opcional: es la base de cualquier 
                    estrategia digital. Más que posicionamiento, el SEO 
                    es experiencia de usuario, visibilidad y confianza.
                </p>
                <h2>
                    Los 3 pilares del SEO
                </h2>
                <ul>
                    <li>
                        <b>SEO Técnico:</b> Velocidad de carga, optimización móvil, estructura limpia.
                    </li>
                    <li>
                        <b>SEO On-Page:</b> Contenido optimizado con palabras clave, títulos claros y metaetiquetas.
                    </li>
                    <li>
                        <b>SEO Off-Page:</b> Estrategia de backlinks, menciones y autoridad de marca.
                    </li>
                </ul>
                <h2>
                    Analogía clara
                </h2>
                <p>
                    Un sitio web sin SEO es como una cafetería sin dirección en Google Maps. Puede ser excelente, pero nadie la encontrará.
                </p>
                <h2>
                    Impacto real en las ventas
                </h2>
                <p>
                    El SEO bien implementado trae tráfico orgánico, reduce costos en publicidad y genera ventas sostenibles en el tiempo.
                </p>
                <h3>
                    Conclusión:
                </h3>
                <p>
                    Invertir en SEO desde el día uno no es un gasto, es una inversión estratégica en la visibilidad digital y en las ventas futuras.
                </p>
                <br />
                <small>Puedes visitar:</small>
                <a href={route('consultoriaSEO')} className="butonEsp" title="consultoriaSEO">
                    Consultoria SEO
                </a>
            </section>
            <Formulario/>
            <Footer/>
        </>
    );
}