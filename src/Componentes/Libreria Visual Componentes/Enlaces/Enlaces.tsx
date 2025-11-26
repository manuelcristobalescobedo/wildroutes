function EnlacePrimario({ children }: { children: React.ReactNode }) {
    return (
        <a className="enlace-primario">
            {children}
        </a>
    );
}

function EnlaceSecundario({ children }: { children: React.ReactNode }) {
    return (
        <a className="enlace-secundario">
            {children}
        </a>
    );
}

export { EnlacePrimario, EnlaceSecundario };