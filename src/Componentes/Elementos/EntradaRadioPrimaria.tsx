import "./EntradaRadioPrimaria.css";
import Iconos from "../../Iconos/Indice";

type EntradaRadioPrimariaProps = {
    texto: string;
};

export default function EntradaRadioPrimaria({ texto }: EntradaRadioPrimariaProps) {
    return (
        <label className="entrada-radio-primaria">
            <input type="radio" />
            <span className="entrada-radio-primaria-marca">
                <Iconos.Circulo />
            </span>
            <span className="entrada-radio-primaria-texto">{texto}</span>
        </label>
    );
}