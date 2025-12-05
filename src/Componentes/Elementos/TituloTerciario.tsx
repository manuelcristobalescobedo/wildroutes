import React from "react";
import "./TituloTerciario.css";

type TituloTerciarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function TituloTerciario({ texto, icono, color = "#000000", }: TituloTerciarioProps) {
    return (
        <h1 className="titulo-terciario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}