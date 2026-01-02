import "./EntradaRadioSecundaria.css";
import Iconos from "../../Iconos/Indice";

type EntradaRadioSecundariaProps = {
    texto: string;
    name: string;
    checked: boolean;
    onChange: () => void;
};

export default function EntradaRadioSecundaria({ texto, name, checked, onChange }: EntradaRadioSecundariaProps) {
    return (
        <label className="entrada-radio-secundaria">
            <input type="radio" name={name} checked={checked} onChange={onChange}/>
            <span className="entrada-radio-secundaria-marca">
                <Iconos.Circulo />
            </span>
            <span className="entrada-radio-secundaria-texto">{texto}</span>
        </label>
    );
}