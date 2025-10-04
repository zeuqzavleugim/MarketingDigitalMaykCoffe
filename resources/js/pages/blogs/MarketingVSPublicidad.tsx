import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import { Banner } from "@/imgs/banners";
import LineaRuta from "@/components/lineaRuta";

export default function MarketingVSPublicidad() {
    return(
        <>
            <Head title="Diferencias entre una Agencia de Marketing y una Agencia de Publicidad en Ciudad de México" />
            <Navbar/>
            <main>
                <div className="div-baner-img">
                    <img src={Banner.EscritorioTomaPicada} alt="Agencia de Marketing y una Agencia de Publicidad" title="Agencia de Marketing y una Agencia de Publicidad" />
                </div>
            </main>
            <section className="padContend">
                <LineaRuta
                    Listas={['Inicio', 'Blogs', 'Diferencias entre una Agencia de Marketing y una Agencia de Publicidad en Ciudad de México']}
                    Lrutas={['home','blogs', 'MarketingVSPublicidad']}
                />
            </section>
            <section className="blog-body">
                <h1 className="text-center">
                    Diferencias entre una Agencia de Marketing y una Agencia de 
                    Publicidad en Ciudad de México
                </h1>
                <p>
                    En el mundo de los negocios en la Ciudad de México, es común 
                    escuchar los términos “agencia de marketing” y “agencia de 
                    publicidad”. Aunque ambas trabajan en la promoción de productos 
                    y servicios, existen diferencias clave en su alcance, objetivos 
                    y forma de aportar valor a una empresa. Conocer estas diferencias 
                    es fundamental para elegir la mejor opción para tu negocio.
                </p>
                <h2>
                    ¿Qué es una Agencia de Publicidad?
                </h2>
                <p>
                    Una agencia de publicidad está especializada en la creación y 
                    ejecución de campañas publicitarias. Su objetivo principal es 
                    diseñar mensajes persuasivos y creativos que logren captar la 
                    atención del público objetivo.
                </p>
                <p>
                    Sus principales actividades incluyen:
                </p>
                <ul>
                    <li>
                        Diseño de anuncios gráficos y audiovisuales.
                    </li>
                    <li>
                        Campañas en televisión, radio, prensa y medios digitales.
                    </li>
                    <li>
                        Estrategias de visibilidad para incrementar el reconocimiento 
                        de marca.
                    </li>
                </ul>
                <p>
                    En pocas palabras, la publicidad busca impactar al consumidor de 
                    forma directa para motivarlo a tomar una acción, ya sea comprar un 
                    producto, contratar un servicio o recordar una marca.
                </p>
                <h2>
                    ¿Qué es una Agencia de Marketing?
                </h2>
                <p>
                    Una agencia de marketing en Ciudad de México ofrece un enfoque más 
                    amplio que va mucho más allá de la publicidad. Su objetivo es 
                    comprender y satisfacer las necesidades del mercado, identificar 
                    oportunidades de crecimiento y crear estrategias integrales para 
                    lograr los objetivos de un negocio.
                </p>
                <p>
                    Entre sus áreas principales destacan:
                </p>
                <ul>
                    <li>
                        Investigación y análisis de mercado.
                    </li>
                    <li>
                        Estrategias de SEO y marketing digital.
                    </li>
                    <li>
                        Desarrollo de branding y posicionamiento.
                    </li>
                    <li>
                        Gestión de redes sociales y marketing de 
                        contenidos.
                    </li>
                    <li>
                        Estrategias de precios, distribución y 
                        fidelización de clientes.
                    </li>
                </ul>
                <p>
                    En este sentido, el marketing no solo busca visibilidad, 
                    sino construir relaciones sólidas y sostenibles con los 
                    clientes.
                </p>
                <h2>
                    Diferencias Clave entre Marketing y Publicidad
                </h2>
                <h3>
                    1. Enfoque:
                </h3>
                <ul>
                    <li>
                        La publicidad se centra en campañas persuasivas para 
                        aumentar visibilidad.
                    </li>
                    <li>
                        El marketing abarca un plan integral que incluye análisis, 
                        estrategia y ejecución en múltiples canales.
                    </li>
                </ul>
                <h3>
                    2. Alcance:
                </h3>
                <ul>
                    <li>
                        La publicidad impacta a corto plazo con anuncios.
                    </li>
                    <li>
                        El marketing busca un crecimiento sostenible y medible 
                        a largo plazo.
                    </li>
                </ul>
                <h3>
                    3. Objetivos:
                </h3>
                <ul>
                    <li>
                        La publicidad quiere generar interés inmediato.
                    </li>
                    <li>
                        El marketing busca posicionamiento, lealtad de clientes 
                        y retorno de inversión (ROI).
                    </li>
                </ul>
                <h3>
                    4. Colaboración:
                </h3>
                <ul>
                    <li>
                        La publicidad trabaja en proyectos puntuales.
                    </li>
                    <li>
                        El marketing desarrolla relaciones estratégicas a 
                        largo plazo con las empresas.
                    </li>
                </ul>
                <h2>
                    ¿Qué opción es mejor para tu negocio en CDMX?
                </h2>
                <p>
                    La respuesta depende de tus necesidades:
                </p>
                <ul>
                    <li>
                        Si buscas impacto inmediato, una agencia de publicidad 
                        en Ciudad de México puede ayudarte con campañas 
                        creativas y llamativas.
                    </li>
                    <li>
                        Si tu meta es construir una marca sólida, atraer clientes 
                        de forma constante y crecer a largo plazo, una agencia de 
                        marketing digital en CDMX es la elección más inteligente.
                    </li>
                </ul>
                <h2>
                    Conclusión
                </h2>
                <p>
                    Tanto el marketing como la publicidad cumplen un rol fundamental 
                    en la promoción de empresas. Sin embargo, la combinación de ambas 
                    disciplinas es la estrategia más poderosa. Una campaña publicitaria 
                    bien ejecutada, respaldada por un plan de marketing integral, puede 
                    multiplicar la visibilidad y el crecimiento de tu negocio en la 
                    Ciudad de México.
                </p>
                <br />
                <small className="text-center">
                    Si quieres llevar tu marca al siguiente nivel con SEO, marketing 
                    digital y campañas publicitarias efectivas, en nuestra agencia en 
                    CDMX diseñamos estrategias personalizadas que generan resultados 
                    reales. <br /><br />
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