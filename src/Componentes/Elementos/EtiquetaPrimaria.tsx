import "./EtiquetaPrimaria.css";

type EtiquetaPrimariaProps = { texto: string; primerIcono?: React.ReactNode; segundoIcono?: React.ReactNode; enlace?: string; accion?: () => void; };

export default function EtiquetaPrimaria({ texto, primerIcono, segundoIcono, enlace, accion }: EtiquetaPrimariaProps) {
    return (
        <span className="etiqueta-primaria">
            {primerIcono && <span className="icono-inicio">{primerIcono}</span>}
            {enlace ? (<a className="texto" href={enlace}>{texto}</a>) : (<span className="texto">{texto}</span>)}
            {segundoIcono && (<span className="icono-fin" onClick={accion}>{segundoIcono}</span>)}
        </span>
    );
}