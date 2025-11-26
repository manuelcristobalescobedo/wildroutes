function BotonPrimario({ svg, texto }: { svg: React.ReactNode, texto: string }) {
    return (
        <button className="boton-primario">
            {svg} {texto}
        </button>
    );
}

function BotonSecundario({ svg, texto }: { svg: React.ReactNode, texto: string }) {
    return (
        <button className="boton-secundario">
            {svg} {texto}
        </button>
    );
}

function BotonTerciario({ svg, texto }: { svg: React.ReactNode, texto: string }) {
    return (
        <button className="boton-terciario">
            {svg} {texto}
        </button>
    );
}

function BotonCuaternario({ svg, texto }: { svg: React.ReactNode, texto: string }) {
    return (
        <button className="boton-cuaternario">
            {svg} {texto}
        </button>
    );
}

function BotonQuinario ({ numero }: { numero: number}) {
    return (
        <button className="boton-quinario">
           {numero}
        </button>
    );
}

function BotonMarca ({ svg, texto }: { svg: React.ReactNode, texto: string }) {
    return (
        <button className="boton-marca">
           {svg} {texto}
        </button>
    );
}

function BotonUsuario ({ size = "4rem" }: { size?: string}) {
    return (
        <div>
            {size}
            <img src="/placeholder-user.png"> </img>
        </div>
    )
}

export { BotonPrimario, BotonSecundario, BotonTerciario, BotonCuaternario, BotonQuinario, BotonMarca, BotonUsuario };