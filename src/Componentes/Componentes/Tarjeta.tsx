import "./Tarjeta.css";
import "../../index.css";
import Elementos from "../Elementos/Indice";
import Iconos from "../../Iconos/Indice";
import type { Servicio } from "../../Tipos/Servicio";

type TarjetaProps = Pick< Servicio, | "id" | "imagenes" | "titulo" | "ubicacion" | "calificacion" | "resenas" | "precio" > & { descuentos?: boolean };

export function Tarjeta({ id, imagenes, titulo, ubicacion, calificacion, resenas, precio, descuentos }: TarjetaProps) {
    return (
        <div className="Tarjeta">
            <img src={imagenes?.[0] ?? "https://i.postimg.cc/vTMyTwF6/imagen-0.png"} alt={titulo} />
            <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={titulo}/>
            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto={`${ubicacion.comuna}, ${ubicacion.region}, ${ubicacion.pais}`}/>
            <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto={`${calificacion} (${resenas} reseñas)`} color="var(--color-terciario-bajo)"/>
            <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={precio}/>
            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona"/>
            <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace={`/servicio/${id}`} />
            {descuentos && <Iconos.Rebaja />}
        </div>
    )
}