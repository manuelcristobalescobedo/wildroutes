import "./Resultados.css"
import "../../index.css"
import { Tarjeta } from "../Componentes/Tarjeta"
import type { Servicio } from "../../Tipos/Servicio";

type ResultadosProps = { servicios: Servicio[] }

export default function Resultados({ servicios }: ResultadosProps) {
    return (
        <section className="Resultados">
            {servicios.map(servicio => (
                <Tarjeta key={servicio.id} imagenes={servicio.imagenes} titulo={servicio.titulo} ubicacion={servicio.ubicacion} calificacion={servicio.calificacion} resenas={servicio.resenas} precio={servicio.precio} descuentos={servicio.descuentos} />
            ))}
        </section>
    )
}