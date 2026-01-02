import "./Resultados.css"
import "../../index.css"
import { Tarjeta } from "../Componentes/Tarjeta"

type Ubicacion = { comuna: string; region: string; pais: string }
type Servicio = { id: number; imagen: string; titulo: string; ubicacion: Ubicacion; calificacion: number; resenas: number; precio: string; descuentos?: boolean }

type ResultadosProps = { servicios: Servicio[] }

export default function Resultados({ servicios }: ResultadosProps) {
    return (
        <section className="Resultados">
            {servicios.map(servicio => (
                <Tarjeta key={servicio.id} id={servicio.id} imagen={servicio.imagen} titulo={servicio.titulo} ubicacion={servicio.ubicacion} calificacion={servicio.calificacion} resenas={servicio.resenas} precio={servicio.precio} descuentos={servicio.descuentos} />
            ))}
        </section>
    )
}