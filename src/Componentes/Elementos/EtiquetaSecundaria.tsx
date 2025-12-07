import "./EtiquetaSecundaria.css";

type EtiquetaSecundariaProps = { texto: string; primerIcono?: React.ReactNode; segundoIcono?: React.ReactNode; enlace?: string; accion?: () => void; };

export default function EtiquetaSecundaria({ texto, primerIcono, segundoIcono, enlace, accion }: EtiquetaSecundariaProps) {
    return (
        <span className="etiqueta-secundaria">
            {primerIcono && <span className="icono-inicio">{primerIcono}</span>}
            {enlace ? (<a className="texto" href={enlace}>{texto}</a>) : (<span className="texto">{texto}</span>)}
            {segundoIcono && (<span className="icono-fin" onClick={accion}>{segundoIcono}</span>)}
        </span>
    );
}