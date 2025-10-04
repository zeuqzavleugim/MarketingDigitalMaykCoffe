import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import { Banner } from "@/imgs/banners";
import LineaRuta from "@/components/lineaRuta";

export default function DisenoPaginasWeb() {
    return(
        <>
            <Head title="Diseño de páginas web: ¿de qué se trata y cuáles son sus elementos esenciales?" />
            <Navbar/>
            <main>
                <div className="div-baner-img">
                    <img src={Banner.DisenoFigmaUnaPagina} alt="Diseño de páginas web" title="Diseño de páginas web" />
                </div>
            </main>
            <section className="padContend">
                <LineaRuta
                    Listas={['Inicio', 'Blogs', 'Diseño de páginas web: ¿de qué se trata y cuáles son sus elementos esenciales?']}
                    Lrutas={['home','blogs', 'DisenoPaginasWeb']}
                />
            </section>
            <section className="blog-body">
                <h1 className="text-center">
                    Diseño de páginas web: ¿de qué se trata y cuáles son sus 
                    elementos esenciales?
                </h1>
                <p>
                    Un diseño web profesional no es solo estética: es la clave para 
                    atraer, retener y convertir usuarios en clientes. Hoy, en un 
                    mundo digital donde competimos por segundos de atención, un 
                    sitio bien diseñado puede marcar la diferencia entre un clic 
                    perdido y una venta asegurada.
                </p>
                <p>
                    Si tu página carga lento, no se adapta al móvil o la tipografía 
                    es poco legible, los usuarios la abandonarán sin pensarlo dos 
                    veces. Pero si tu diseño es claro, atractivo y funcional, 
                    aumentarán las conversiones, la confianza en tu marca y el 
                    posicionamiento en Google.
                </p>
                <p>
                    En este artículo, exploraremos qué es el diseño web, sus elementos 
                    fundamentales y por qué vale la pena invertir en él en 2025.
                </p>
                <h2>
                    ¿Qué es el diseño de páginas web?
                </h2>
                <p>
                    El diseño web es la disciplina que combina creatividad, 
                    funcionalidad y estrategia para crear sitios que no solo 
                    se vean bien, sino que también ofrezcan una experiencia 
                    fluida y optimizada al usuario.
                </p>
                <p>
                    No se trata únicamente de elegir colores o tipografías; un buen 
                    diseño web conecta la identidad de tu marca con las necesidades 
                    del usuario y los objetivos de negocio. En otras palabras, es tu 
                    carta de presentación digital.
                </p>
                <h2>
                    Elementos esenciales del diseño web en 2025
                </h2>
                <p>
                    Un diseño web exitoso debe integrar varios factores que, 
                    combinados, generan confianza y mejoran la experiencia del 
                    usuario. Estos son los más relevantes:
                </p>
                <h3>
                    1. Sitio responsivo y mobile-first
                </h3>
                <p>
                    Más del 70% del tráfico web proviene de dispositivos móviles. 
                    Por eso, un diseño responsivo ya no es opcional: tu web debe 
                    adaptarse automáticamente a cualquier pantalla. Google prioriza 
                    los sitios mobile-first, lo que significa que si no está 
                    optimizado para móviles, perderás visibilidad y clientes.
                </p>
                <h3>
                    2. Tipografía clara y coherente
                </h3>
                <p>
                    La tipografía es un elemento estratégico. Una fuente mal elegida 
                    puede arruinar la experiencia de lectura. En cambio, tipografías 
                    limpias y consistentes refuerzan la identidad de tu marca y guían 
                    al usuario de forma natural por tu contenido.
                </p>
                <h3>
                    3. Velocidad de carga
                </h3>
                <p>
                    En internet, 2 segundos de espera pueden costarte un cliente. La 
                    velocidad de carga es vital no solo para la experiencia del 
                    usuario, sino también para el SEO. Una página lenta reduce las 
                    conversiones y afecta negativamente tu posicionamiento en Google.
                </p>
                <h3>
                    4. Navegación intuitiva
                </h3>
                <p>
                    El diseño debe facilitar la exploración del sitio. Un menú claro, 
                    llamados a la acción visibles y una arquitectura bien estructurada 
                    ayudan a que el usuario encuentre lo que busca en segundos.
                </p>
                <h3>
                    5. Identidad visual y branding
                </h3>
                <p>
                    Tu sitio debe reflejar quién eres como marca. Colores, imágenes, 
                    íconos y disposición del contenido deben transmitir confianza y 
                    profesionalismo. Recuerda: tu web es tu vendedor digital disponible 
                    24/7.
                </p>
                <h2>
                    ¿Por qué invertir en diseño web profesional?
                </h2>
                <p>
                    Un diseño web estratégico no es un gasto, es una inversión con 
                    beneficios tangibles:
                </p>
                <ul>
                    <li>
                        <b>Refleja tu marca:</b> un sitio obsoleto transmite desconfianza. 
                        En cambio, un diseño moderno y profesional genera credibilidad 
                        inmediata.
                    </li>
                    <li>
                        <b>Mejora el SEO:</b> Google premia los sitios con buena experiencia 
                        de usuario, estructura clara y velocidad óptima.
                    </li>
                    <li>
                        <b>Ventaja competitiva:</b> en un mercado saturado, tu web puede ser 
                        el factor que te diferencie frente a competidores con sitios 
                        descuidados.
                    </li>
                    <li>
                        <b>Incrementa ingresos:</b> un sitio atractivo y funcional 
                        convierte más visitantes en clientes, aumentando ventas de 
                        manera sostenida.
                    </li>
                </ul>
                <h2>
                    Conclusión
                </h2>
                <p>
                    En 2025, el diseño de páginas web sigue siendo un pilar fundamental 
                    para cualquier negocio que busque crecer en el mundo digital. Un 
                    sitio lento, poco responsivo o con mala estructura puede costarte 
                    clientes y reputación.
                </p>
                <p>
                    Invertir en un diseño web profesional significa ofrecer a tus usuarios 
                    una experiencia memorable, mejorar tu visibilidad en Google y abrir la 
                    puerta a nuevas oportunidades de negocio.
                </p>
                <br />
                <small className="text-center">
                    <b>Recuerda:</b> tu sitio web es el corazón de tu presencia 
                    digital. Cuídalo, actualízalo y hazlo trabajar para ti. <br /> <br />
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