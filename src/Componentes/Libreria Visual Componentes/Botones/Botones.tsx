import type React from 'react';
import './Botones.css'

function BotonPrimario({ svg, children }: { svg?: React.ReactNode, children: React.ReactNode }) {
    return (
        <button className="boton-primario">
            {svg && <span>{svg}</span>}
            {children}
        </button>
    );
}

function BotonSecundario({ svg, children }: { svg?: React.ReactNode, children: React.ReactNode }) {
    return (
        <button className="boton-secundario">
            {svg && <span>{svg}</span>}
            {children}
        </button>
    );
}

function BotonTerciario({ svg, children }: { svg?: React.ReactNode, children: React.ReactNode }) {
    return (
        <button className="boton-terciario">
            {svg && <span>{svg}</span>}
            {children}
        </button>
    );
}

function BotonCuaternario({ svg, children }: { svg?: React.ReactNode, children: React.ReactNode }) {
    return (
        <button className="boton-cuaternario">
            {svg && <span>{svg}</span>}
            {children}
        </button>
    );
}

function BotonQuinario({ numero }: { numero: number }) {
    return (
        <button className="boton-quinario">
            {numero}
        </button>
    );
}

function BotonMarca({ svg, children }: { svg?: React.ReactNode, children: React.ReactNode }) {
    return (
        <button className="boton-marca">
            {svg && <span>{svg}</span>}
            {children}
        </button>
    );
}

function BotonUsuario({ svg, size = 40 }: { svg?: React.ReactNode, size?: number | string }) {
    return (
        <button className="boton-usuario" style={{ width: size, height: size }}>
            {svg ? (
                <span>{svg}</span>
            ) : (
                <img
                    src="/placeholder-user.png"
                    alt="Usuario"
                    style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
            )}
        </button>
    );
}

export { BotonPrimario, BotonSecundario, BotonTerciario, BotonCuaternario, BotonQuinario, BotonMarca, BotonUsuario };
