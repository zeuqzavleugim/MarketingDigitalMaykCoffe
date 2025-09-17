import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import { Banner } from "@/imgs/banners";
import LineaRuta from "@/components/lineaRuta";

export default function MarketingDigitalOrganico() {
    return(
        <>
            <Head title="Marketing Digital Orgánico | Qué es, diferencias con el pago y beneficios para tu negocio" />
            <Navbar/>
            <main>
                <div className="div-baner-img">
                    <img src={Banner.AnalisisGoogle} alt="Marketing Digital Orgánico" title="Marketing Digital Orgánico" />
                </div>
            </main>
            <section className="padContend">
                <LineaRuta
                    Listas={['Inicio', 'Blogs', 'Marketing Digital Orgánico: qué es, diferencias y cómo aplicarlo en tu negocio']}
                    Lrutas={['home','blogs', 'MarketingDigitalOrganico']}
                />
            </section>
            <section className="blog-body">
                <h1 className="text-center">
                    Marketing Digital Orgánico: qué es, diferencias y cómo aplicarlo en tu negocio
                </h1>
                <h2>
                    ¿Qué es el marketing digital orgánico?
                </h2>
                <p>
                    El marketing digital orgánico es la práctica de atraer tráfico y 
                    generar interacción con tu marca de manera natural, sin pagar 
                    directamente por cada clic o visualización.
                </p>
                <p>
                    A diferencia de la publicidad pagada, que impulsa tu contenido a 
                    través de anuncios, el marketing orgánico crea valor a largo 
                    plazo mediante:
                </p>
                <ul>
                    <li>
                        Publicaciones no pagadas en redes sociales.
                    </li>
                    <li>
                        Blogs y artículos optimizados para SEO.
                    </li>
                    <li>
                        Contenido generado por los usuarios.
                    </li>
                    <li>
                        Newsletters y correos no patrocinados.
                    </li>
                    <li>
                        Optimización en motores de búsqueda (SEO).
                    </li>
                </ul>
                <p>
                    Importante: “orgánico” no significa gratuito. Inviertes en tiempo, 
                    estrategia y herramientas, pero no en promoción directa de cada contenido.
                </p>
                <h2>
                    ¿Por qué es importante el marketing orgánico?
                </h2>
                <p>
                    El 61% de los especialistas en marketing considera que el 
                    crecimiento orgánico y el SEO son su mayor prioridad dentro 
                    del inbound marketing.
                </p>
                <p>
                    Algunos beneficios clave:
                </p>
                <ul>
                    <li>
                        <b>Costo accesible:</b> ideal para negocios con 
                        presupuesto limitado.
                    </li>
                    <li>
                        <b>Credibilidad:</b> las interacciones son más 
                        auténticas que un anuncio pagado.
                    </li>
                    <li>
                        <b>Visibilidad sostenida:</b> una publicación 
                        optimizada puede atraer tráfico por meses o años.
                    </li>
                    <li>
                        <b>Compatibilidad móvil:</b> más del 50% de las 
                        búsquedas orgánicas se realizan desde smartphones, 
                        lo que hace que el contenido orgánico optimizado 
                        para móviles sea aún más relevante.
                    </li>
                </ul>
                <h2>
                    Marketing orgánico vs. marketing pagado
                </h2>
                <p>
                    Aunque ambos enfoques pueden trabajar en conjunto, es 
                    vital conocer sus diferencias:
                </p>
                <h3>
                    Marketing orgánico
                </h3>
                <ul>
                    <li>
                        Construye relaciones auténticas con la audiencia.
                    </li>
                    <li>
                        Favorece la creación de una marca con propósito y valores claros.
                    </li>
                    <li>
                        Genera tráfico sostenido desde blogs, SEO y redes sociales.
                    </li>
                    <li>
                        Se enfoca en atraer clientes de manera natural y duradera.
                    </li>
                </ul>
                <p>
                    Ejemplo: Lush Cosmetics utiliza contenido generado por 
                    usuarios (#LushShowAndTell) para fortalecer su comunidad 
                    sin invertir en anuncios.
                </p>
                <h3>
                    Marketing pagado
                </h3>
                <ul>
                    <li>
                        Permite resultados rápidos.
                    </li>
                    <li>
                        Se centra en acciones inmediatas: compras, registros o descargas.
                    </li>
                    <li>
                        Implica una inversión directa en anuncios patrocinados.
                    </li>
                    <li>
                        Es ideal para lanzamientos o promociones específicas.
                    </li>
                </ul>
                <h2>
                    Consejos para aplicar el marketing digital orgánico
                </h2>
                <ul>
                    <li>
                        Optimiza tu SEO On-Page: cuida títulos, meta descripciones y uso de palabras clave.
                    </li>
                    <li>
                        Crea contenido de valor: artículos de blog, guías, casos de estudio.
                    </li>
                    <li>
                        Sé activo en redes sociales: publica de forma constante y fomenta la interacción.
                    </li>
                    <li>
                        Impulsa contenido generado por usuarios: anima a tu comunidad a compartir experiencias con tu marca.
                    </li>
                    <li>
                        Email marketing no invasivo: newsletters con información útil, no solo promociones
                    </li>
                </ul>
                <h2>
                    Conclusión: el valor de lo orgánico
                </h2>
                <p>
                    El marketing digital orgánico es una estrategia rentable, sostenible y poderosa para construir confianza y atraer clientes de forma natural.
                    <br /><br />
                    Requiere tiempo, constancia y creatividad, pero sus resultados son más duraderos que los de una campaña pagada.
                </p>
                <br />
                <small className="text-center">
                    <strong>¿Listo para dar el siguiente paso?</strong> <br />
                    Escríbenos y agenda una <em>asesoría gratuita </em> 
                    con nuestros expertos. Tu crecimiento digital comienza 
                    hoy.
                </small>
                <a href={route('creacionDeSitiosWeb')} className="butonEsp" title="consultoriaSEO">
                    ¡Visita!
                </a>
            </section>
            <Formulario/>
            <Footer/>
        </>
    );
}