import { Icons } from "@/imgs/Icons";
import { Link } from "@inertiajs/react";
import WhatsButon from "./whatsButon";

export default function Footer() {
    return(
        <>
            <WhatsButon />
            <footer>
                <div className="footer-info">
                    <div className="footer-icons">
                        <a href={route("home")} className="footer-logo" title="maykcoffe">
                            <img src={Icons.Logo} alt="Logotipo" title="Logotipo" loading="lazy" />
                        </a>
                        <a href="mailto:contacto@maykcoffe.com.mx" title="Correo"><img src={Icons.Correo} alt="Correo" title="Correo" loading="lazy"/></a>
                        <a href="http://www.linkedin.com/in/miguel-angel-vazquez-aviles-170abb15a/" target="_blank" title="Linkeding"><img src={Icons.Linkedin} alt="Linkeding" title="Linkeding" loading="lazy"/></a>
                        <a href="https://www.instagram.com/mayk.vaz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" title="Instagram"><img src={Icons.Instagram} alt="Instagram" title="Instagram" loading="lazy"/></a>
                        <a href="https://l.instagram.com/?u=https%3A%2F%2Fopen.spotify.com%2Fshow%2F72eFnr649lyiQw7anRhlxi%3Fsi%3DX3aXjHRHRf2_NVMA5hU4LA%26fbclid%3DPAZXh0bgNhZW0CMTEAAadj8km-SNi4Nf2xwD7sNOL5CYWUxnXZ6qC3Rn8o3tH-WJbsW72ZUzS956OlYQ_aem_S75gX6EOgST0UbSpQObyhQ&e=AT11EJw_peN5zHvUlUBmYpgMrxwvCdSth8BNS-7Tb6S-Q_MAmCs-l7M7mBayUSQx7b3LKxcsTIsq2RqAXdOhHG45VqcE5Y0cdfwghTF7AEdsOE_kEuNKgQ" target="_blank" title="Spotify"><img src={Icons.Spotify} alt="Spotify" title="Spotify" loading="lazy"/></a>
                    </div>
                </div>
                <div className="footer-sitios">
                    <div className="footer-sitio">
                        <a href={route("portafolio")} title="Desarrollos">Portafolios</a>
                        <a href={route("construccion")} title="conoceme">Conoceme</a>
                        <a href={route("servicios")} title="Servicios">Servicios</a>
                    </div>
                    <div className="footer-sitio">
                        {/* <a href={route("construccion")} title="Planes">Planes</a> */}
                        <a href={route("contacto")} title="contacto">Contacto</a>
                        <a href={route("blogs")} title="Blogs">Blogs</a>
                        <a href={route("politicas")} title="Blogs">Terminos y condiciones</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
                                