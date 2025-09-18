import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import { Banner } from "@/imgs/banners";
import LineaRuta from "@/components/lineaRuta";

export default function TiposDePaginas() {
    return(
        <>
            <Head title="Tipos de páginas web: guía completa 2025" />
            <Navbar/>
            <main>
                <div className="div-baner-img">
                    <img src={Banner.PaginaLapTomaPicada} alt="Tipos de páginas web" title="Tipos de páginas web" />
                </div>
            </main>
            <section className="padContend">
                <LineaRuta
                    Listas={['Inicio', 'Blogs', 'Tipos de páginas web: guía completa 2025']}
                    Lrutas={['home','blogs', 'TiposDePaginas']}
                />
            </section>
            <section className="blog-body">
                <h1 className="text-center">
                    Tipos de páginas web: guía completa 2025
                </h1>
                <p>
                    Hoy en día, una marca sin presencia en internet es como si 
                    no existiera. Adaptar los objetivos de tu empresa al tipo 
                    correcto de página web es vital para crecer, atraer clientes 
                    y generar ventas.
                </p>
                <p>
                    De acuerdo con Internet Live Stats, actualmente existen más 
                    de 1,700 millones de páginas web en el mundo. En este mar 
                    de opciones, elegir el formato adecuado puede marcar la 
                    diferencia entre pasar desapercibido o destacar en tu sector.
                </p>
                <p>
                    En esta guía te contamos cuáles son los tipos de páginas web 
                    más utilizados, sus características principales y qué factores 
                    debes tomar en cuenta al momento de crearlas.
                </p>
                <h2>
                    Principales tipos de páginas web
                </h2>
                <p>
                    Existen múltiples clasificaciones de páginas web, pero las más 
                    comunes —y útiles para negocios y marcas personales— son estas:
                </p>
                <h3>
                    1. eCommerce o tiendas en línea
                </h3>
                <p>
                    Su objetivo es vender productos o servicios directamente al 
                    usuario.
                </p>
                <ul>
                    <li>
                        Incluyen catálogos, carritos de compra y pasarelas de pago 
                        seguras.
                    </li>
                    <li>
                        Plataformas como Shopify, WordPress (WooCommerce) o 
                        PrestaShop facilitan su creación.
                    </li>
                    <li>
                        Ejemplo: Amazon, Mercado Libre o tu propia tienda online.
                    </li>
                </ul>
                <h3>
                    2. Blogs
                </h3>
                <p>
                    Son sitios enfocados en generar contenido de valor para atraer 
                    tráfico y posicionarse en buscadores mediante keywords.
                </p>
                <ul>
                    <li>
                        Ideales para trabajar el marketing de contenidos.
                    </li>
                    <li>
                        Pueden ser temáticos (tecnología, moda, finanzas, salud, 
                        etc.).
                    </li>
                    <li>
                        Ejemplo: un blog corporativo con artículos que refuercen tu 
                        marca.
                    </li>
                </ul>
                <h3>
                    3. Páginas corporativas
                </h3>
                <p>
                    Sirven para presentar la información básica de una empresa u 
                    organización.
                </p>
                <ul>
                    <li>
                        Incluyen secciones como Quiénes somos, Servicios, Contacto 
                        y Ubicación.
                    </li>
                    <li>
                        Generan confianza y credibilidad en clientes potenciales.
                    </li>
                    <li>
                        Ejemplo: la web oficial de una agencia o despacho.
                    </li>
                </ul>
                <h3>
                    4. Foros y comunidades
                </h3>
                <p>
                    Están diseñados para fomentar la interacción entre usuarios en 
                    torno a un tema específico.
                </p>
                <ul>
                    <li>
                        Los visitantes pueden debatir, compartir experiencias y 
                        dejar opiniones.
                    </li>
                    <li>
                        Aunque han perdido popularidad frente a redes sociales, siguen 
                        siendo útiles en nichos muy concretos.
                    </li>
                </ul>
                <h2>
                    Características de una página web
                </h2>
                <p>
                    Más allá del tipo de sitio, existen elementos esenciales que 
                    determinan si una página web tendrá éxito o no:
                </p>
                <h3>
                    Diseño web
                </h3>
                <ul>
                    <li>
                        Todo parte del HTML, base de los navegadores, complementado 
                        con CSS, JavaScript o frameworks modernos.
                    </li>
                    <li>
                        Debe ser coherente con la identidad visual de la marca: 
                        colores, tipografías y estilo gráfico.
                    </li>
                </ul>
                <h3>
                    Optimización web (SEO)
                </h3>
                <ul>
                    <li>
                        Una página web bien optimizada aparece en los primeros 
                        resultados de Google.
                    </li>
                    <li>
                        Incluye un código limpio, estructura clara y contenido con 
                        palabras clave.
                    </li>
                    <li>
                        Mejora la visibilidad, atrae tráfico orgánico y reduce costos 
                        en publicidad.
                    </li>
                </ul>
                <h3>
                    Alojamiento web (Hosting)
                </h3>
                <ul>
                    <li>
                        Es el espacio donde se almacenan imágenes, videos y datos del 
                        sitio.
                    </li>
                    <li>
                        Puede gestionarse de manera interna o a través de proveedores 
                        de hosting especializados.
                    </li>
                    <li>
                        Factores clave: velocidad, seguridad y soporte técnico.
                    </li>
                </ul>
                <h3>
                    Páginas dinámicas vs. estáticas
                </h3>
                <ul>
                    <li>
                        <b>Estáticas:</b> muestran contenido fijo en HTML. Son 
                        rápidas, pero con poca interacción.
                    </li>
                    <li>
                        <b>Dinámicas:</b> generadas con lenguajes como PHP, 
                        permiten interacción y personalización.
                    </li>
                </ul>
                <h3>
                    Páginas públicas o privadas
                </h3>
                <ul>
                    <li>
                        <b>Públicas:</b> accesibles para cualquier usuario con 
                        internet.
                    </li>
                    <li>
                        <b>Privadas:</b> requieren acceso restringido mediante 
                        registro o contraseña.
                    </li>
                </ul>
                <h2>
                    ¿Cómo debe ser una página web exitosa en 2025?
                </h2>
                <p>
                    Para destacar entre los millones de sitios existentes, tu 
                    web debe cumplir con estas características:
                </p>
                <ul>
                    <li>
                        Cargar rápido y ser ligera.
                    </li>
                    <li>
                        Ser responsive (adaptarse a móviles y desktops).
                    </li>
                    <li>
                        Contar con navegación intuitiva y accesible para 
                        cualquier usuario.
                    </li>
                    <li>
                        Mantener un diseño coherente y legible.
                    </li>
                    <li>
                        Incluir un buscador interno.
                    </li>
                    <li>
                        Tener contenido actualizado y de valor.
                    </li>
                    <li>
                        Mostrar enlaces a redes sociales.
                    </li>
                    <li>
                        Evitar publicidad invasiva.
                    </li>
                    <li>
                        Optimizarse para SEO técnico y de contenidos.
                    </li>
                    <li>
                        Actualizarse de forma constante.
                    </li>
                </ul>
                <h2>
                    Conclusión
                </h2>
                <p>
                    Los distintos tipos de páginas web cumplen funciones 
                    específicas: algunos venden, otros informan, otros 
                    generan comunidad. Lo importante es que definas tu 
                    objetivo principal y elijas la estructura que mejor 
                    lo respalde.
                </p>
                <br />
                <small className="text-center">
                    En 2025, una página web no solo es tu carta de presentación 
                    digital, sino también una herramienta estratégica que 
                    puede marcar la diferencia en el crecimiento de tu negocio. <br />
                    Escríbenos y agenda una <em>asesoría gratuita </em> 
                    con nuestros expertos. Tu crecimiento digital comienza 
                    hoy.
                </small>
                <a href={route('home')} className="butonEsp" title="consultoriaSEO">
                    ¡Visita!
                </a>
            </section>
            <Formulario/>
            <Footer/>
        </>
    );
}