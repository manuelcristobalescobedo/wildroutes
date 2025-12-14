import React from "react";
import "./ParrafoCuaternario.css";

type ParrafoCuaternarioProps = {
    texto: string;
    icono?: React.ReactNode;
    color?: string;
};

export default function ParrafoCuaternario({ texto, icono, color = "#000000", }: ParrafoCuaternarioProps) {
    return (
        <p className="parrafo-cuaternario" style={{ color, display: "flex", alignItems: "center", gap: "0.5rem", }}>
            {icono && <span>{icono}</span>}
            <span>{texto}</span>
        </p>
    );
}