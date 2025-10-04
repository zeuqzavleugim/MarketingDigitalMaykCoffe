interface ListaRutasProps{
    Listas: string[];
    Lrutas: string[];
}

export default function LineaRuta({Listas, Lrutas}:ListaRutasProps) {
    
    return(
        <>
        <nav aria-label="breadcrumb" className="navRuts">
            <ol className="breadcrumb">
                {Listas.map((lista, index) =>(
                    <li className="breadcrumb-item" key={index}>
                        <a href={route(Lrutas[index])} title={lista}>{lista}</a>
                    </li>    
                ))}
            </ol>
        </nav>
        </>
    );
}