import { Head } from "@inertiajs/react"
import Navbar from "@/layouts/navbar"
import Footer from "@/layouts/footer"
import ButonContacto from "@/components/butonContacto"
import { Banner } from "@/imgs/banners"
import { servicio } from "@/imgs/servises"
import Formulario from "@/layouts/formulario"

export default function LandingPage() {
    return (
        <>
            <Head title="Landing Pages que Venden | Diseño SEO y Conversiones" />
            <Navbar/>
            <main className="pag-landing">
                <div className="main-servises">
                    <div className="main-services-info">
                        <div>
                            <h1>
                                Landing Pages que Convierten, No que Decoran
                            </h1>
                        </div>
                        <div>
                            <p>
                                Desata el potencial de tu negocio con una Landing 
                                Page que vende desde el primer clic.
                            </p>
                            <p>
                                Landing pages diseñadas para captar leads, generar 
                                ventas y posicionarte en Google desde el día uno.
                            </p>
                        </div>
                        <div>
                            <ButonContacto
                                Ruta="contacto"
                                Texto="Quiero una landing que venda"
                            />
                        </div>
                    </div>
                    <div className="img-services">
                        <img src={servicio.LandingPage} 
                            alt="Ejemplo de landing page profesional diseñada para convertir visitantes en clientes" 
                            title="landing-page-profesional-mexico"/>
                    </div>
                </div>
                <div className="main-servises">
                    <div className="img-services">
                        <img src={servicio.LandingPage} 
                            alt="Ejemplo de landing page profesional diseñada para convertir visitantes en clientes" 
                            title="landing-page-profesional-mexico"/>
                    </div>
                    <div className="main-services-info">
                        <div>
                            <h2>
                                ¿Qué es una landing page profesional?
                            </h2>
                        </div>
                        <div>
                            <p>
                                Es una herramienta de marketing enfocada 
                                en una sola acción: que el visitante compre, 
                                agende o deje sus datos.
                            </p>
                            <ul>
                                <li>Captación de leads</li>
                                <li>Promociones</li>
                                <li>Cursos / eventos</li>
                                <li>Productos digitales o físicos</li>
                            </ul>
                        </div>
                        <div>
                            <ButonContacto
                                Ruta="contacto"
                                Texto="Quiero una landing que venda"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Formulario/>
            <Footer/>
        </>
    )
}