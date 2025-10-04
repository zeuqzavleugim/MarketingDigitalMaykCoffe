import { Icons } from "@/imgs/Icons";

export default function ProcesoDeTrabajo() {
    return(
        <>
        <section className="procesoDeTrabajo">
            <div className="tarjeta">
                <img src={Icons.Uno} alt="Uno" title="Uno"/>
                <div>
                    <h3>
                        Platica del proyecto y Analisis de competencia
                    </h3>
                    <p>
                        Ponemos tus ideas en orden, Analisamos a tu competencia 
                        y explotamos tus fortalezas
                    </p>
                </div>
            </div>
            <div className="tarjeta">
                <img src={Icons.Dos} alt="Dos" title="Dos" />
                <div>
                    <h3>
                        Desarrollo de Diseño
                    </h3>
                    <p>
                        Desarrollamos un diseño que compita con los mejores, 
                        transformando tus ideas para tu sitio
                    </p>
                </div>
            </div>
            <div className="tarjeta">
                <img src={Icons.Tres} alt="Tres" title="Tres" />
                <div>
                    <h3>
                        Desarrollo del proyecto en codigo
                    </h3>
                    <p>
                        Nos ponemos manos a la obra y convertimos el diseño 
                        en tu sitio de forma responsiva, optimizo velocidad 
                        y experiencia de tus clientes.
                    </p>
                </div>
            </div>
            <div className="tarjeta">
                <img src={Icons.Cuatro} alt="Cuatro" title="Cuatro" />
                <div>
                    <h3>
                        Entrega del proyecto
                    </h3>
                    <p>
                        Mantenemos comunicación constante para ajustar detalles 
                        técnicos sin alterar el diseño original hasta el lansamiento 
                        de tu sitio al mundo digital.
                    </p>
                </div>
            </div>
            <div className="tarjeta">
                <img src={Icons.Cinco} alt="Cinco" title="Cinco" />
                <div>
                    <h3>
                        Seguimiento
                    </h3>
                    <p>
                        Damos servicio de Mantenimiento para  que tu sitio no tenga 
                        problemas, actualización de informacion o de productos, 
                        analisis de crecimiento en linea para tu toma de desiciones.
                    </p>
                </div>
            </div>
        </section>
        </>
    );
}