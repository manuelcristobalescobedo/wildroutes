import React from "react";
import "./TituloQuinario.css";

type TituloQuinarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function TituloQuinario({ texto, icono, color = "#000000", }: TituloQuinarioProps) {
    return (
        <h1 className="titulo-quinario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}