import './Etiquetas.css';

function EtiquetaPrimaria( {svg, texto }: { svg: React.ReactNode, texto: string }) {
    return (
        <p className="etiqueta-primaria">
        {svg} {texto}
        </p>
    )};

function EtiquetaSecundaria( {svg, texto }: { svg: React.ReactNode, texto: string }) {
    return (
        <p className="etiqueta-secundaria">
        {svg} {texto}
        </p>
    )};

    function EtiquetaTerciaria( {svg, texto }: { svg: React.ReactNode, texto: string }) {
        return (
            <p className="etiqueta-terciaria">
            {svg} {texto}
            </p>
        )};

export { EtiquetaPrimaria, EtiquetaSecundaria, EtiquetaTerciaria };


