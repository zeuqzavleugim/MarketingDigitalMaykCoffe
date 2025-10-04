import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import { Banner } from "@/imgs/banners";
import LineaRuta from "@/components/lineaRuta";
import { General } from "@/imgs/general";

export default function RazonesContratarAgencia() {
    return(
        <>
            <Head title="Razones para contratar una agencia de marketing digital | Aumenta tu visibilidad y ventas" />
            <Navbar/>
            <main>
                <div className="div-baner-img">
                    <img src={General.Analytics} alt="SEO:el activo invisible" title="SEO:el activo invisible" />
                </div>
            </main>
            <section className="padContend">
                <LineaRuta
                    Listas={['Inicio', 'Blogs', 'Razones para contratar una agencia de marketing digital']}
                    Lrutas={['home','blogs', 'RazonesContratarAgencia']}
                />
            </section>
            <section className="blog-body">
                <h1 className="text-center">
                    Razones para contratar una agencia de marketing digital
                </h1>
                <p>
                    En un mercado cada vez más competitivo, 
                    <strong>contratar una agencia de marketing digital en México</strong> 
                    ya no es un lujo: es una necesidad. Una agencia te ayuda a mejorar 
                    la visibilidad de tu negocio, atraer clientes potenciales y aumentar 
                    tus ventas con estrategias profesionales que cumplen con los 
                    estándares que Google y las plataformas digitales premian.
                </p>
                <h2>
                    Por qué invertir en marketing digital en México
                </h2>
                <p>
                    Las empresas que apuestan por <strong>estrategias digitales</strong> 
                    logran crecer más rápido que aquellas que intentan hacerlo por 
                    cuenta propia. Sin una estrategia clara, el aprendizaje es lento, 
                    costoso y lleno de prueba y error. Con una agencia, obtienes un plan 
                    personalizado, medible y enfocado en resultados.
                </p>
                <h2>
                    Dos caminos: hacerlo tú mismo vs. contratar expertos
                </h2>
                <h3>
                    Hacerlo por tu cuenta
                </h3>
                <ul>
                    <li>Diseñar estrategias desde cero.</li>
                    <li>Aprender sobre SEO, SEM, redes sociales y analítica digital.</li>
                    <li>Invertir tiempo y dinero en prueba y error.</li>
                </ul>
                <h3>
                    Contratar una agencia de marketing digital
                </h3>
                <ul>
                    <li>Ahorra tiempo y recursos.</li>
                    <li>Accede a expertos con experiencia probada.</li>
                    <li>Obtén resultados más rápidos y sostenibles.</li>
                </ul>
                <h2>
                    Beneficios de contratar una agencia de marketing digital
                </h2>
                <h3>
                    1. Estrategias de posicionamiento efectivas
                </h3>
                <p>
                    La agencia diseña <strong>estrategias SEO y SEM</strong> 
                    con palabras clave relevantes, contenido optimizado y 
                    campañas de anuncios dirigidas para que tu marca aparezca 
                    en los primeros lugares de Google y redes sociales.
                </p>
                <h3>
                    2. Plan de acción claro y medible
                </h3>
                <p>
                    No más improvisación. Obtienes un calendario de 
                    actividades, métricas de desempeño y reportes 
                    constantes que permiten optimizar cada campaña.
                </p>
                <h3>
                    3. Acceso a herramientas premium
                </h3>
                <p>
                    Las agencias cuentan con software especializado 
                    en SEO, analítica, gestión de campañas y 
                    automatización que normalmente tendría un costo 
                    elevado para un negocio individual.
                </p>
                <h3>
                    4. Equipo experto a tu servicio
                </h3>
                <p>
                    Diseñadores, estrategas, redactores y analistas 
                    trabajan en conjunto para potenciar tu marca, 
                    sin que tengas que contratar especialistas por 
                    separado.
                </p>
                <h3>
                    5. Mayor presencia digital
                </h3>
                <p>
                    Desde <strong>contenido optimizado</strong> hasta 
                    <strong>campañas segmentadas</strong>, tu negocio 
                    tendrá más visibilidad en buscadores y redes 
                    sociales, generando confianza y autoridad en tu 
                    sector.
                </p>
                <h3>
                    6. Ahorro de tiempo y foco en tu negocio
                </h3>
                <p>
                    Mientras la agencia gestiona tu crecimiento digital, 
                    tú puedes enfocarte en atender clientes, mejorar 
                    productos y escalar tu empresa.
                </p>
                <h3>
                    7. Estrategias multicanal integradas
                </h3>
                <p>
                    Las agencias coordinan campañas en 
                    <strong>Google, redes sociales, email marketing y más</strong>, 
                    asegurando coherencia en el mensaje y mayor impacto en tu audiencia.
                </p>
                <h2>
                    Conclusión: No te quedes atrás
                </h2>
                <p>
                    Si tu negocio no aparece en Google o redes sociales, 
                    es como si no existiera para tus clientes potenciales. 
                    <strong>Una agencia de marketing digital</strong> es el 
                    socio estratégico que necesitas para competir, crecer y 
                    vender más.
                </p>
                <br />
                <small className="text-center">
                    <strong>¿Listo para dar el siguiente paso?</strong> <br />
                    Escríbenos y agenda una <em>asesoría gratuita</em> 
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