import { Head } from "@inertiajs/react"
import Navbar from "@/layouts/navbar"
import Footer from "@/layouts/footer"
import ButonContacto from "@/components/butonContacto"
import { Banner } from "@/imgs/banners"
import { servicio } from "@/imgs/servises"
import Formulario from "@/layouts/formulario"
import Planes from "@/layouts/planes"

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
                            title="landing-page-profesional-mexico"
                            className="img-service-landing"/>
                    </div>
                </div>
                <div className="main-servises">
                    <div className="img-services">
                        <img src={servicio.LandingPage} 
                            alt="Ejemplo de landing page profesional diseñada para convertir visitantes en clientes" 
                            title="landing-page-profesional-mexico"
                            className="img-service-landing"/>
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
                <Planes
                    TitulH="Planes de renta mensuales para tu Landing Page"
                    plans={[
                        {id: "plan1Landing", titulo: "Starter", presio1: 600, presio2: 900, datos: ["Sitio de 1-3 secciones", "Diseño básico", "Hosting", "Correo", "SEO básico", "Dominio"], tipo: false},
                        {id: "plan2Landing", titulo: "Plus", presio1: 1500, presio2: 2000, datos: ["Sitio de 1-3 secciones", "Diseño premium con animaciones", "SEO avanzado", "Reportes mensuales", "Prioridad en soporte", "Hosting", "Correo", "Dominio"], tipo: true},
                        {id: "plan3Landing", titulo: "Pro", presio1: 1000, presio2: 1400, datos: ["Sitio de 1-3 secciones", "Diseño a medida", "Optimizacion Google", "Formulario + WhatsApp","Hosting", "Correo", "Dominio"], tipo: false}
                    ]}
                    bakColor="background-sin"
                />
                <div className="main-servises">
                    <div className="main-services-info">
                        <div>
                            <h2>
                                No necesitas una web enorme. Necesitas una 
                                página que cierre ventas
                            </h2>
                        </div>
                        <div>
                            <ul>
                                <li>CTA’s diseñadas con neuroventas y UX</li>
                                <li>Carga en menos de 2s</li>
                                <li>Enfocadas en conversión (una sola acción)</li>
                                <li>Responsive real (probado en dispositivos reales)</li>
                                <li>100% medible (Google Analytics y píxeles)</li>
                            </ul>
                            
                        </div>
                        <div>
                            <ButonContacto
                                Ruta="contacto"
                                Texto="Quiero una landing que venda"
                            />
                        </div>
                    </div>
                    <div className="img-services">
                        <img src={Banner.ArbolYHorizonte} 
                            alt="Ejemplo de landing page profesional diseñada para convertir visitantes en clientes" 
                            title="landing-page-profesional-mexico"
                            className="img-service-landing"/>
                    </div>
                </div>
            </main>
            <Formulario/>
            <Footer/>
        </>
    )
}