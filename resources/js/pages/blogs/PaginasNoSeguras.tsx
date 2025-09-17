import { Head } from "@inertiajs/react";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import Formulario from "@/layouts/formulario";
import { Banner } from "@/imgs/banners";
import LineaRuta from "@/components/lineaRuta";

export default function PaginasNoSeguras() {
    return(
        <>
            <Head title="Páginas Web No Seguras: Qué Son y Cómo Protegerte en 2025" />
            <Navbar/>
            <main>
                <div className="div-baner-img">
                    <img src={Banner.BusquedaGoogle} alt="eCommerce y por qué es clave" title="eCommerce y por qué es clave" />
                </div>
            </main>
            <section className="padContend">
                <LineaRuta
                    Listas={['Inicio', 'Blogs', 'Páginas Web No Seguras: Qué Son y Cómo Protegerte en 2025']}
                    Lrutas={['home','blogs', 'PaginasNoSeguras']}
                />
            </section>
            <section className="blog-body">
                <h1 className="text-center">
                    Páginas Web No Seguras: Qué Son y Cómo Protegerte en 2025
                </h1>
                <p>
                    En el mundo digital actual, la seguridad en línea es más 
                    importante que nunca. Todos los días millones de usuarios 
                    en México navegan, compran y comparten información personal 
                    en internet. Sin embargo, hacerlo en páginas web no seguras 
                    representa un riesgo enorme: robo de datos, estafas, malware 
                    o incluso ataques cibernéticos.
                </p>
                <p>
                    En este artículo descubrirás qué son las páginas web no 
                    seguras, cómo identificarlas y qué medidas tomar para 
                    proteger tu información en línea.
                </p>
                <h2>
                    ¿Qué es una página web no segura?
                </h2>
                <p>
                    Una página web no segura es aquella que utiliza el protocolo 
                    HTTP en lugar de HTTPS.
                </p>
                <ul>
                    <li>
                        <b>HTTP:</b> No cifra la información transmitida entre 
                        el usuario y el sitio web. Esto significa que datos como 
                        contraseñas, correos o números de tarjetas pueden ser 
                        interceptados por terceros.
                    </li>
                    <li>
                        <b>HTTPS:</b> Cifra la comunicación con un certificado SSL 
                        (Secure Sockets Layer), lo que garantiza que la información 
                        esté protegida y no pueda ser manipulada.
                    </li>
                </ul>
                <p>
                    En pocas palabras: si una página no tiene HTTPS, no es confiable 
                    para ingresar datos personales o financieros.
                </p>
                <h2>
                    Cómo Identificar Páginas Web No Seguras
                </h2>
                <p>
                    Existen señales claras que te ayudarán a reconocer si un sitio 
                    no es seguro:
                </p>
                <h3>
                    1. Falta de HTTPS en la URL
                </h3>
                <ul>
                    <li>
                        Si el sitio comienza con http:// en lugar de https://, tus 
                        datos no estarán cifrados.
                    </li>
                    <li>
                        Navegadores como Google Chrome o Microsoft Edge marcan con 
                        advertencias o iconos rojos las páginas no seguras.
                    </li>
                </ul>
                <h3>
                    2. Advertencias del navegador
                </h3>
                <ul>
                    <li>
                        Mensajes como “Este sitio no es seguro” o “Tu conexión no es 
                        privada” son señales de que debes salir de inmediato.
                    </li>
                </ul>
                <h3>
                    3. Diseño y contenido sospechoso
                </h3>
                <ul>
                    <li>
                        Sitios con diseño poco profesional, exceso de anuncios invasivos 
                        o promociones demasiado buenas para ser verdad son una alerta roja.
                    </li>
                    <li>
                        Muchos de estos sitios buscan engañar al usuario para obtener datos 
                        mediante técnicas de phishing.
                    </li>
                </ul>
                <h2>
                    Precauciones al Navegar en Línea
                </h2>
                <p>
                    Para mantener tu seguridad en internet en 2025, sigue estas 
                    recomendaciones:
                </p>
                <h3>
                    Mantén tu software actualizado
                </h3>
                <ul>
                    <li>
                        Actualiza sistema operativo, navegador y aplicaciones.
                    </li>
                    <li>
                        Las actualizaciones incluyen parches de seguridad contra 
                        vulnerabilidades conocidas.
                    </li>
                </ul>
                <h3>
                    Usa una solución de seguridad confiable
                </h3>
                <ul>
                    <li>
                        Instala un antivirus actualizado que detecte páginas peligrosas.
                    </li>
                    <li>
                        Configúralo para actualizaciones automáticas.
                    </li>
                </ul>
                <h3>
                    Sé cuidadoso con tu información personal
                </h3>
                <ul>
                    <li>
                        No ingreses datos sensibles (contraseñas, tarjetas, CURP, RFC) 
                        en sitios sin HTTPS.
                    </li>
                    <li>
                        Revisa siempre que sea la página oficial de la empresa o servicio.
                    </li>
                    <li>
                        Crea contraseñas seguras y únicas para cada cuenta.
                    </li>
                    <li>
                        Desconfía de correos o mensajes sospechosos que pidan 
                        información personal.
                    </li>
                </ul>
                <h2>
                    Páginas Web Seguras: Cómo Verificarlas
                </h2>
                <p>
                    Si quieres asegurarte de que un sitio sea seguro:
                </p>
                <ul>
                    <li>
                        Busca el candado verde o gris en la barra del navegador.
                    </li>
                    <li>
                        Verifica que la URL comience con https://.
                    </li>
                    <li>
                        Usa herramientas en línea para comprobar si un certificado SSL 
                        es válido.
                    </li>
                </ul>
                <h2>
                    Conclusión
                </h2>
                <p>
                    Las páginas web no seguras son una amenaza real en 2025, especialmente 
                    en un contexto donde el comercio electrónico y la digitalización crecen 
                    día a día en México.
                </p>
                <p>
                    Para proteger tu información:
                </p>
                <ul>
                    <li>
                        Navega solo en sitios con HTTPS y certificado SSL válido.
                    </li>
                    <li>
                        Evita ingresar datos en páginas que generen desconfianza.
                    </li>
                    <li>
                        Mantén buenas prácticas de seguridad digital en todo momento.
                    </li>
                </ul>
                <p>
                    Recuerda: la prevención y la cautela son tu mejor defensa para disfrutar 
                    de internet de forma segura y sin contratiempos.
                </p>
                <br />
                <small className="text-center">
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