import "./EntradaVerificacionSecundaria.css";
import Iconos from "../../Iconos/Indice";

type EntradaVerificacionSecundariaProps = {
    texto: string;
};

export default function EntradaVerificacionSecundaria({ texto }: EntradaVerificacionSecundariaProps) {
    return (
        <label className="entrada-verificacion-secundaria">
            <input type="checkbox" />
            <span className="entrada-verificacion-secundaria-marca">
                <Iconos.Aprobado />
            </span>
            <span className="entrada-verificacion-secundaria-texto">{texto}</span>
        </label>
    );
}