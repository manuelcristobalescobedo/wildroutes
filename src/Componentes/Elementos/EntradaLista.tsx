import { useState } from "react";

type Props = {
  value: string[];
  onChange: (values: string[]) => void;
};

export default function EntradaLista({ value, onChange }: Props) {
    const agregar = () => onChange([...value, ""]);

    const actualizar = (i: number, texto: string) => {
        const copia = [...value];
        copia[i] = texto;
        onChange(copia);
    };

    return (
        <div>
        {value.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input
                type="text"
                value={item}
                onChange={(e) => actualizar(i, e.target.value)}
            />
            {i === value.length - 1 && (
                <button type="button" onClick={agregar}>+</button>
            )}
            </div>
        ))}
        </div>
    );
}