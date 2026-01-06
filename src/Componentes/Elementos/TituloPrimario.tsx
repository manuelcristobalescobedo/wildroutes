import React from "react";
import "./TituloPrimario.css";

type Fuente = "sans" | "serif";

type TituloPrimarioProps = { texto: string; icono?: React.ReactNode; color?: string; fuente?: Fuente; };

export default function TituloPrimario({ texto, icono, color = "#000000", fuente = "sans", }: TituloPrimarioProps) {
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
        <h1 className="titulo-primario" style={{ color, fontFamily: fuenteConfiguracion.family, fontWeight: fuenteConfiguracion.weight, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}