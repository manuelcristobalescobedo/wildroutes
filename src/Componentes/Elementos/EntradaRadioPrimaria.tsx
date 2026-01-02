import "./EntradaRadioPrimaria.css";
import Iconos from "../../Iconos/Indice";

type EntradaRadioPrimariaProps = {
    texto: string;
    name: string;
    checked: boolean;
    onChange: () => void;
};

export default function EntradaRadioPrimaria({ texto, name, checked, onChange }: EntradaRadioPrimariaProps) {
    return (
        <label className="entrada-radio-primaria">
            <input type="radio" name={name} checked={checked} onChange={onChange}/>
            <span className="entrada-radio-primaria-marca">
                <Iconos.Circulo />
            </span>
            <span className="entrada-radio-primaria-texto">{texto}</span>
        </label>
    );
}