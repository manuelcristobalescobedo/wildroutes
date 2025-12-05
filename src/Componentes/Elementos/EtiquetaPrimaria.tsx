import "./EtiquetaPrimaria.css";
import Iconos from "../../Iconos/Indice";

type EtiquetaPrimariaProps = { texto: string; icono?: React.ReactNode; color?: string; };

export default function EtiquetaPrimaria({ texto, icono, color = "#000000", }: EtiquetaPrimariaProps) {
    return (
        <h1 className="etiqueta-primaria" style={{ color, borderColor: color }}>
            {icono && icono}
            <span>{texto}</span>
            <Iconos.Cerrar />
        </h1>
    );
}