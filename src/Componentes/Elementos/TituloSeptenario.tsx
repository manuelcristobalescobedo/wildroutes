import React from "react";
import "./TituloSeptenario.css";

type TituloSeptenarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function TituloSeptenario({ texto, icono, color = "#000000", }: TituloSeptenarioProps) {
    return (
        <h1 className="titulo-septenario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}