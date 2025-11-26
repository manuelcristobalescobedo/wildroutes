import './Titulos.css';

function TituloPrimario( {children }: { children: React.ReactNode }) {
    return (
        <h1 className="titulo-primario">
        {children}
        </h1>
    )
}
 function TituloSecundario( {children }: { children: React.ReactNode }) {
    return (
        <h2 className="titulo-secundario">
        {children}
        </h2>
    )
}

function TituloTerciario( {children }: { children: React.ReactNode }) {
    return (
        <h3 className="titulo-terciario">
        {children}
        </h3>
    )
}

function TituloCuaternario( {children }: { children: React.ReactNode }) {
    return (
        <h4 className="titulo-cuaternario">
        {children}
        </h4>
    )
}
 function TituloQuintario( {children }: { children: React.ReactNode }) {
    return (
        <h5 className="titulo-quintario">
        {children}
        </h5>
    )
}

function TituloSextario( {children }: { children: React.ReactNode }) {
    return (
        <h6 className="titulo-sextario">
        {children}
        </h6>
    )
}

 export { TituloPrimario, TituloSecundario, TituloTerciario, TituloCuaternario, TituloQuintario, TituloSextario};
