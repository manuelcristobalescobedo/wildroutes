import React from "react";
import "./TituloQuinario.css";

type Fuente = "sans" | "serif";

type TituloQuinarioProps = { texto: string; icono?: React.ReactNode; color?: string; fuente?: Fuente; };

export default function TituloQuinario({ texto, icono, color = "#000000", fuente = "sans", }: TituloQuinarioProps) {
    const Fuentes = {
        sans: {
            family: '"Nunito Sans", sans-serif',
            weight: 700,
        },
        serif: {
            family: '"Ledger", serif',
            weight: 400,
        },
    } as const;

    const fuenteConfiguracion = Fuentes[fuente];

    return (
        <h1 className="titulo-quinario" style={{ color, fontFamily: fuenteConfiguracion.family, fontWeight: fuenteConfiguracion.weight, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}