import "./EntradaVerificacionSecundaria.css";
import Iconos from "../../Iconos/Indice";
import type { ChangeEvent } from "react";

type EntradaVerificacionSecundariaProps = {
    texto: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function EntradaVerificacionSecundaria({ texto, checked, onChange }: EntradaVerificacionSecundariaProps) {
    return (
        <label className="entrada-verificacion-secundaria">
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <span className="entrada-verificacion-secundaria-marca">
                <Iconos.Aprobado />
            </span>
            <span className="entrada-verificacion-secundaria-texto">{texto}</span>
        </label>
    );
}