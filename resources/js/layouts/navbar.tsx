import { Icons } from "@/imgs/Icons";

export default function Navbar() {
    return(
        <>
        <nav className="navbar navbar-contraint">
            <div className="container-fluid nav-var-expain">
                <a className="navbar-brand" href={route("home")} title="maykcoffe">
                    <img 
                        src={Icons.Logo} 
                        className="iconsLogo" 
                        alt="Logotipo" 
                        title="Logotipo" 
                        loading="lazy"/>
                </a>
                <ul className="navbar-nava">
                    <li className="nav-item">
                        <a className="nav-link" href={route("portafolio")} title="portafolios">Portafolios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={route("construccion")} title="conoceme">Conoceme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href={route("construccion")} title="servicios">Servicios</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Landing Page</a></li>
                            <li><a className="dropdown-item" href="#">Creación de sitios web</a></li>
                            <li><a className="dropdown-item" href="#">Consultoria SEO</a></li>
                            <li><a className="dropdown-item" href="#">Optimización para motores de búsqueda</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={route("construccion")} title="planes">Planes</a>
                    </li>
                    <li className="navbar-blue">
                        <a className="nav-link" href={route("contacto")} title="contacto">Contacto</a>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h4 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img 
                            src={Icons.Logo} 
                            className="iconsLogo" 
                            alt="Logotipo" 
                            title="Logotipo" 
                            loading="lazy"/>
                        </h4>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" href={route("home")} title="desarrollos">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={route('portafolio')} title="desarrollos">Desarrollos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={route('construccion')} title="conoceme">Conoceme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={route('construccion')} title="servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={route('construccion')} title="planes">Planes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={route("contacto")} title="contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}