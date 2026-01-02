import "./Tarjeta.css";
import "../../index.css";
import Elementos from "../Elementos/Indice";
import Iconos from "../../Iconos/Indice";

type Ubicacion = { comuna: string; region: string; pais: string }
type Props = { id: number, imagen: string, titulo: string, ubicacion: Ubicacion, calificacion: number, resenas: number, precio: string, descuentos?: boolean, intereses?: boolean }

export function Tarjeta({ imagen, titulo, ubicacion, calificacion, resenas, precio, descuentos }: Props) {
    return (
        <div className="Tarjeta">
            <img src={imagen} alt={titulo} />
            <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={titulo}/>
            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto={`${ubicacion.comuna}, ${ubicacion.region}, ${ubicacion.pais}`}/>
            <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto={`${calificacion} (${resenas} reseñas)`} color="var(--color-terciario-bajo)"/>
            <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={precio}/>
            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona"/>
            <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com"/>
            {descuentos && <Iconos.Rebaja />}
        </div>
    )
}