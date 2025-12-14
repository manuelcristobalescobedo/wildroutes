import "./EntradaVerificacionPrimaria.css";
import Iconos from "../../Iconos/Indice";

type EntradaVerificacionPrimariaProps = {
    texto: string;
};

export default function EntradaVerificacionPrimaria({ texto }: EntradaVerificacionPrimariaProps) {
    return (
        <label className="entrada-verificacion-primaria">
            <input type="checkbox" />
            <span className="entrada-verificacion-primaria-marca">
                <Iconos.Aprobado />
            </span>
            <span className="entrada-verificacion-primaria-texto">{texto}</span>
        </label>
    );
}