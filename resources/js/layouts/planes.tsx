import CartPlans from "@/components/cartsPlans";

// 1) Definimos la forma de las props con TypeScript
interface PlanItem {
  id?: string;         // opcional, pero recomendable para usar como key
  titulo: string;
  presio1: number;
  presio2: number;
  datos: string[];
  tipo: boolean;
}

interface PlanesProps {
  TitulH: string;
  plans: PlanItem[];   // array con los 3 (o N) planes
  bakColor?: string;   // opcional: si no viene, usamos valor por defecto
}

// 2) Componente funcional con desestructuración y valor por defecto
export default function Planes({
  TitulH,
  plans,
  bakColor = ""      // valor por defecto si no pasas bakColor
}: PlanesProps) {

  // 3) Construimos la clase del section de forma segura (evita "undefined")
  const sectionClass = ["planes", bakColor].filter(Boolean).join(" ");

  return (
    <section className={sectionClass}>
      <h3 id="planes">{TitulH}</h3>

      <div className="carts-div">
        {plans.map((plan, index) => (
          <CartPlans
            key={plan.id ?? index}          // usa id si existe, si no fallback a index
            Titulo={plan.titulo}
            Presio1={plan.presio1}
            Presio2={plan.presio2}
            Datos={plan.datos}
            Tipo={plan.tipo}
          />
        ))}
      </div>
    </section>
  );
}