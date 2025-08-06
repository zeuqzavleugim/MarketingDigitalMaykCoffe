import { Head } from "@inertiajs/react"
import Navbar from "@/layouts/navbar"
import Footer from "@/layouts/footer"
import Formulario from "@/layouts/formulario"
import { Banner } from "@/imgs/banners"
import ButonContacto from "@/components/butonContacto"
import { General } from "@/imgs/general"

export default function Servicios() {
    return (
        <>
        <Head title="Servicios de Desarrollo Web, Landing Pages y SEO" />
        <Navbar/>
        <main className="pag-service" >
            <div className="main-servises">
                <div className="main-services-info">
                    <div>
                        <h1>
                            Servicios Profesionales en Desarrollo Web, Landing 
                            Pages y SEO en México
                        </h1>
                    </div>
                    <div>
                        <p>
                            Haz que tu negocio destaque con soluciones digitales 
                            diseñadas para atraer, convertir y escalar. 
                        </p>
                        <p>
                            Creamos sitios web con enfoque estratégico, landing 
                            pages que venden y optimización SEO que te pone al 
                            frente en Google. Todo con atención personalizada y 
                            resultados medibles.
                        </p>
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Cotiza Aqui"
                        />
                    </div>
                </div>
                <div className="img-services">
                    <img src={Banner.Servicios} alt="los servicios dan tranquilidad" />
                </div>
            </div>
            <section className="section-servicios-text">
                <div className="main-services-div">
                    <h2>
                        ¿Por qué trabajar con nosotros?
                    </h2>
                    <p>
                        Mira cómo otros negocios han logrado destacar en Google 
                        y aumentar sus conversiones gracias a nuestras soluciones.
                    </p>
                </div>
                <div className="main-services-div-buton">
                    <ButonContacto
                        Ruta="contacto"
                        Texto="Cotiza YA"
                    />
                </div>
            </section>
            <section className="img-pie-pag">
                <img src={General.FuncoEnOficinaDePie} alt="" />
            </section>
        </main>
        <Formulario/>
        <Footer/>
        </>
    )
}