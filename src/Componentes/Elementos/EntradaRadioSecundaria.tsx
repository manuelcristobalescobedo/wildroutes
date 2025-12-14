import "./EntradaRadioSecundaria.css";
import Iconos from "../../Iconos/Indice";

type EntradaRadioSecundariaProps = {
    texto: string;
};

export default function EntradaRadioSecundaria({ texto }: EntradaRadioSecundariaProps) {
    return (
        <label className="entrada-radio-secundaria">
            <input type="radio" />
            <span className="entrada-radio-secundaria-marca">
                <Iconos.Circulo />
            </span>
            <span className="entrada-radio-secundaria-texto">{texto}</span>
        </label>
    );
}