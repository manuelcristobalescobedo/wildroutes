import React from "react";
import "./TituloCuaternario.css";

type TituloCuaternarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function TituloCuaternario({ texto, icono, color = "#000000", }: TituloCuaternarioProps) {
    return (
        <h1 className="titulo-cuaternario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </h1>
    );
}