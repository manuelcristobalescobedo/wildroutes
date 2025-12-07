import { useState } from "react";
import "./EntradaNumero.css";
import Iconos from "../../Iconos/Indice";

interface EntradaNumeroProps { nombre: string; etiqueta: string; min?: number; max?: number; step?: number; value?: number; onChange?: (value: number) => void; }

export default function EntradaNumero({ nombre, etiqueta, min = 0, max = 9999, step = 1, value = 0, onChange, }: EntradaNumeroProps) {
    const [internal, setInternal] = useState(value);

    const updateValue = (val: number) => {
        const clamped = Math.min(max, Math.max(min, val));
        setInternal(clamped);
        onChange?.(clamped);
    };

    return (
        <div className="entrada-numero">
            <label htmlFor={nombre} className="etiqueta">{etiqueta}</label>
            <div>
                <button type="button" className="btn-menos" onClick={() => updateValue(internal - step)}><Iconos.Sustraer/></button>
                <input type="number" value={internal} onChange={(e) => updateValue(Number(e.target.value))}/>
                <button type="button" className="btn-mas" onClick={() => updateValue(internal + step)}><Iconos.Anadir/></button>
            </div>
        </div>
    );
}