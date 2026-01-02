import "./EntradaVerificacionPrimaria.css";
import Iconos from "../../Iconos/Indice";

type EntradaVerificacionPrimariaProps = {
    texto: string;
    checked: boolean;
    onChange: () => void;
};

export default function EntradaVerificacionPrimaria({ texto, checked, onChange }: EntradaVerificacionPrimariaProps) {
    return (
        <label className="entrada-verificacion-primaria">
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <span className="entrada-verificacion-primaria-marca">
                <Iconos.Aprobado />
            </span>
            <span className="entrada-verificacion-primaria-texto">{texto}</span>
        </label>
    );
}