import React from "react";
import "./ParrafoTerciario.css";

type ParrafoTerciarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function ParrafoTerciario({ texto, icono, color = "#000000", }: ParrafoTerciarioProps) {
    return (
        <p className="parrafo-terciario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </p>
    );
}