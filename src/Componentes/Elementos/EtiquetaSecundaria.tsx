import "./EtiquetaSecundaria.css";
import Iconos from "../../Iconos/Indice";

type EtiquetaSecundariaProps = { texto: string; icono?: React.ReactNode; color?: string; };

export default function EtiquetaSecundaria({ texto, icono, color = "#000000", }: EtiquetaSecundariaProps) {
    return (
        <h1 className="etiqueta-secundaria" style={{ color, borderColor: color }}>
            {icono && icono}
            <span>{texto}</span>
            <Iconos.Cerrar />
        </h1>
    );
}