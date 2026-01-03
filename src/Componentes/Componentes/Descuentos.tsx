import { useEffect, useState } from "react"
import { Tarjeta } from "../Componentes/Tarjeta"
import "./Descuentos.css"
import "../../index.css"

type Ubicacion = { comuna: string; region: string; pais: string }
type Servicio = { id: number, imagenes: string[], titulo: string, ubicacion: Ubicacion, calificacion: number, resenas: number, precio: string, descuentos?: boolean, intereses?: boolean }

export default function Descuentos() {
    const [servicios, setServicios] = useState<Servicio[]>([])

    useEffect(() => {
        fetch("http://localhost:3001/servicios")
        .then(res => res.json())
        .then(data => setServicios(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <section className="Descuentos">
            {servicios.filter(servicio => servicio.descuentos).slice(0,4).map(servicio => (
                <Tarjeta key={servicio.id} id={servicio.id} imagenes={servicio.imagenes} titulo={servicio.titulo} ubicacion={servicio.ubicacion} calificacion={servicio.calificacion} resenas={servicio.resenas} precio={servicio.precio} descuentos={servicio.descuentos}/>
            ))}
        </section>
    )
}