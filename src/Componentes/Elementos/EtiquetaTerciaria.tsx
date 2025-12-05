import "./EtiquetaTerciaria.css";
import Iconos from "../../Iconos/Indice";

type EtiquetaTerciariaProps = { texto: string; icono?: React.ReactNode; color?: string; };

export default function EtiquetaTerciaria({ texto, icono, color = "#000000", }: EtiquetaTerciariaProps) {
    return (
        <h1 className="etiqueta-terciaria" style={{ color, borderColor: color }}>
            {icono && icono}
            <span>{texto}</span>
            <Iconos.Cerrar />
        </h1>
    );
}