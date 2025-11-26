import './Parrafos.css';


function ParrafoPrimario( {children }: { children: React.ReactNode }) {
    return (
        <p className="parrafo-primario">
        {children}
        </p>
    )};

function ParrafoSecundario( {children }: { children: React.ReactNode }) {
    return (
        <p className="parrafo-secundario">
        {children}
        </p>
    )};



export { ParrafoPrimario, ParrafoSecundario };