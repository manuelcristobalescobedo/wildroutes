import React from "react";
import "./TituloSextario.css";

type TituloSextarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function TituloSextario({ texto, icono, color = "#000000", }: TituloSextarioProps) {
    return (
        <h1 className="titulo-sextario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}