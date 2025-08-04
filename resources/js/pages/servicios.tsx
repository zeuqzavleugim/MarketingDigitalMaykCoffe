import { Head } from "@inertiajs/react"
import Navbar from "@/layouts/navbar"
import Footer from "@/layouts/footer"
import Formulario from "@/layouts/formulario"
import { Banner } from "@/imgs/banners"
import ButonContacto from "@/components/butonContacto"

export default function Servicios() {
    return (
        <>
        <Head title="Servicios de Desarrollo Web, Landing Pages y SEO" />
        <Navbar/>
        <main className="pag-service" >
            <div>
                <div>
                    <div>
                        <h1>
                            Servicios Profesionales en Desarrollo Web, Landing Pages y SEO en México
                        </h1>
                    </div>
                    <div>
                        <p>
                            Haz que tu negocio destaque con soluciones digitales diseñadas para atraer, convertir y escalar. 
                        </p>
                        <p>
                            Creamos sitios web con enfoque estratégico, landing pages que venden y optimización SEO que te pone al frente en Google. Todo con atención personalizada y resultados medibles.
                        </p>
                    </div>
                    <div>
                        <ButonContacto
                            Ruta="contacto"
                            Texto="Cotiza Aqui"
                        />
                    </div>
                </div>
                <div>
                    <img src={Banner.Servicios} alt="los servicios dan tranquilidad" />
                </div>
            </div>
        </main>
        <Formulario/>
        <Footer/>
        </>
    )
}