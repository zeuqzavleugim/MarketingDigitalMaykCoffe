export default function TarjetaBlog(props: { Tit: string, Img: string, Rut: string}) {
    return(
        <>
            <a href={route(props.Rut)} className="tarjet-blog">
                <div>
                    <img src={props.Img} alt={props.Tit} />
                    <div>
                        <h2>{props.Tit}</h2>
                    </div>
                </div>
            </a>
        </>
    );
}