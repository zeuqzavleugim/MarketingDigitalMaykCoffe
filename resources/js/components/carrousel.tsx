import { useEffect, useId } from "react";

interface BannersItems {
  id?: string;
  Img: string;
  Titulo?: string;
  Parrafo?: string;
  Alt: string;
  Url?: string;
}

interface BannersProps {
  Banners: BannersItems[];
  intervalMs?: number; // opcional: controlas el tiempo del slide
  height?: number;     // opcional: altura fija para evitar “reflows”
}

export default function Carrousel({
    Banners,
    intervalMs = 5000,
    height = 480,
}: BannersProps) {
    const carouselId = useId();

    useEffect(() => {
        if (!Banners || Banners.length <= 1) return;
        const toPreload = Banners.slice(1, 3);
        toPreload.forEach((b) => {
        const img = new Image();
        img.src = b.Img;
        });
    }, [Banners]);

    if (!Banners || Banners.length === 0) return null;

    return (
        <div
        id={carouselId}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={intervalMs}
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
                className={index === 0 ? "active" : undefined}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
            />
            ))}
        </div>

        {/* Diapositivas */}
        <div className="carousel-inner">
            {Banners.map((banner, index) => {
            const content = (
                <>
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
                    title={banner.Alt}
                    style={{ objectFit: "cover", height: "100%" }}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                />
                </>
            );

            return (
                <div
                key={banner.id ?? index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ height }}
                >
                {banner.Url ? (
                    <a href={route(banner.Url)} title={banner.Titulo}>{content}</a>
                ) : (
                    content
                )}
                </div>
            );
            })}
        </div>

        {/* Controles */}
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
        </button>

        <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
        </button>
        </div>
    );
}
