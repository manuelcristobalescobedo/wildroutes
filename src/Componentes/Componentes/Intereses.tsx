import { useEffect, useState } from "react"
import { Tarjeta } from "../Componentes/Tarjeta"
import "./Intereses.css"
import "../../index.css"
import type { Servicio } from "../../Tipos/Servicio";

export default function Intereses() {
    const [servicios, setServicios] = useState<Servicio[]>([])

    useEffect(() => {
        fetch("http://localhost:3001/servicios")
        .then(res => res.json())
        .then(data => setServicios(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <section className="Intereses">
            {servicios.filter(servicio => servicio.intereses).slice(0,4).map(servicio => (
                <Tarjeta key={servicio.id} id={servicio.id} imagenes={servicio.imagenes} titulo={servicio.titulo} ubicacion={servicio.ubicacion} calificacion={servicio.calificacion} resenas={servicio.resenas} precio={servicio.precio} />
            ))}
        </section>
    )
}