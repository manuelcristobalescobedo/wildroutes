import React from "react";
import "./ParrafoPrimario.css";

type ParrafoPrimarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function ParrafoPrimario({ texto, icono, color = "#000000", }: ParrafoPrimarioProps) {
    return (
        <h1 className="parrafo-primario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}