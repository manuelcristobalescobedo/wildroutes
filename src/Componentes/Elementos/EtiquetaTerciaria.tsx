import "./EtiquetaTerciaria.css";

type EtiquetaTerciariaProps = { texto: string; primerIcono?: React.ReactNode; segundoIcono?: React.ReactNode; enlace?: string; accion?: () => void; };

export default function EtiquetaTerciaria({ texto, primerIcono, segundoIcono, enlace, accion }: EtiquetaTerciariaProps) {
    return (
        <h1 className="etiqueta-terciaria">
            {primerIcono && <span className="icono-inicio">{primerIcono}</span>}
            {enlace ? (<a className="texto" href={enlace}>{texto}</a>) : (<span className="texto">{texto}</span>)}
            {segundoIcono && (<span className="icono-fin" onClick={accion ?? undefined} style={{ cursor: accion ? "pointer" : "default" }}>{segundoIcono}</span>)}
        </h1>
    );
}