import React from "react";
import "./ParrafoSecundario.css";

type ParrafoSecundarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function ParrafoSecundario({ texto, icono, color = "#000000", }: ParrafoSecundarioProps) {
    return (
        <h1 className="parrafo-secundario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}