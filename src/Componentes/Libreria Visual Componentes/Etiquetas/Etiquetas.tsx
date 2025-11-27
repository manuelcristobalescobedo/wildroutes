import './Etiquetas.css';

function EtiquetaPrimaria({ svg, children }: { svg?: React.ReactNode, children: React.ReactNode }) {
    return (
        <p className="etiqueta-primaria">
            {svg && <span>{svg}</span>}
            {children}
        </p>
    );
}

function EtiquetaSecundaria({ svg, children }: { svg?: React.ReactNode, children: React.ReactNode }) {
    return (
        <p className="etiqueta-secundaria">
            {svg && <span>{svg}</span>}
            {children}
        </p>
    );
}

function EtiquetaTerciaria({ svg, children }: { svg?: React.ReactNode, children: React.ReactNode }) {
    return (
        <p className="etiqueta-terciaria">
            {svg && <span>{svg}</span>}
            {children}
        </p>
    );
}

export { EtiquetaPrimaria, EtiquetaSecundaria, EtiquetaTerciaria };



