import { useEffect, useId, memo } from "react";

interface BannersItems{
    id?:string;
    Img: string;
    Titulo: string;
    Parrafo: string;
    Alt: string;
}

interface BannersProps{
    Banners: BannersItems[];
    intervalMs?: number; // opcional: controlas el tiempo del slide
    height?: number;     // opcional: altura fija para evitar “reflows”
}

export default function Carrousel({ Banners, intervalMs = 5000, height = 480 }: BannersProps ) {
    // id único para que puedas tener varios carousels en la misma página
    const carouselId = useId();

    // Pre-carga simple: precarga las 2 próximas imágenes para que el cambio sea fluido
    useEffect(() => {
        // evita trabajo innecesario si hay 0 o 1 banners
        if (!Banners || Banners.length <= 1) return;

        // precarga las siguientes 2 imágenes si existen
        const toPreload = Banners.slice(1, 3);
        toPreload.forEach(b => {
        const img = new Image();
        img.src = b.Img;
        });
    }, [Banners]);

    if (!Banners || Banners.length === 0) return null;

    return(
        <>
        <div 
            id={carouselId} 
            className="carousel slide" 
            data-bs-ride="carousel" 
            data-bs-interval={intervalMs}
            // altura fija para evitar saltos de layout (ajusta a tu diseño)
            style={{ maxHeight: height, overflow: "hidden" }}
        >
            {/* Indicadores */}
            <div className="carousel-indicators">
                {Banners.map((banner, index) => (
                <button
                    key={banner.id ?? index}
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : undefined}   // ✅ solo el primero activo
                    aria-current={index === 0 ? "true" : undefined}  // ✅ solo el primero
                    aria-label={`Slide ${index + 1}`}
                />
                ))}
            </div>

            {/* Diapositivas */}
            <div className="carousel-inner">
                {Banners.map((banner, index) => (
                <div key={banner.id ?? index} className={`carousel-item ${index === 0 ? "active" : ""}`}
                    style={{ height }} // evita CLS: fuerza la misma altura
                >
                    {(banner.Titulo || banner.Parrafo) && (
                    <div className="carousel-caption d-md-block">
                        {banner.Titulo && <h2>{banner.Titulo}</h2>}
                        {banner.Parrafo && <p>{banner.Parrafo}</p>}
                    </div>
                    )}
                    <img
                        src={banner.Img}
                        className="d-block w-100"
                        alt={banner.Alt}
                        // Mantén encuadre bonito si la imagen no tiene la misma relación de aspecto
                        style={{ objectFit: "cover", height: "100%" }}
                        // Rendimiento de carga:
                        loading={index === 0 ? "eager" : "lazy"}     // ✅ la 1ra se carga ya
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "auto"} // ✅ prioridad alta en la 1ra
                    />
                </div>
                ))}
            </div>

            {/* Controles */}
            <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev" >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Anterior</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next" >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
        </>
    );
}