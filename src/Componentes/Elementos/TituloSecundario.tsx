import React from "react";
import "./TituloSecundario.css";

type TituloSecundarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function TituloSecundario({ texto, icono, color = "#000000", }: TituloSecundarioProps) {
    return (
        <h1 className="titulo-secundario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}