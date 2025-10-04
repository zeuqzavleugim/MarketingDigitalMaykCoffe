interface Data {
  Titulo: string;
  Texto: string;
  id?: string;
}

interface DatosProps {
  Datos: Data[];
}

export default function Accordion({ Datos }: DatosProps) {
  return (
    <div className="accordion accordion-flush" id="accordionExample">
      {Datos.map((item, index) => {
        const collapseId = `flush-collapse-${item.id ?? index}`;
        const headingId = `flush-heading-${item.id ?? index}`;

        return (
          <div key={item.id ?? index} className="accordion-item">
            <h3 className="accordion-header" id={headingId}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false"
                data-bs-target={`#${collapseId}`} aria-controls={collapseId}
              >
                {item.Titulo}
              </button>
            </h3>
            <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={headingId} data-bs-parent="#accordionExample" >
              <div className="accordion-body">{item.Texto}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}