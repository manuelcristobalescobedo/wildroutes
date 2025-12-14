import "./EntradaCampo.css";

type EntradaCampoProps = { etiqueta: string; nombre: string; valor: string; accion: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; marcador?: string; informacion?: string; error?: string; tipo?: string; requerido?: boolean; estilo?: string; apariencia?: string; };

export default function EntradaCampo({ etiqueta, nombre, valor, accion, marcador, informacion, error, requerido, estilo, apariencia, }: EntradaCampoProps) {
    return (
        <div className="entrada-campo">
            <label htmlFor={nombre} className="etiqueta" style={{ color: estilo }}>{etiqueta}</label>
            <textarea id={nombre} name={nombre} value={valor} onChange={accion} placeholder={marcador} required={requerido} className={`campo ${error ? "error" : ""}`}/>
            <span className={error ? "mensaje-error" : "mensaje-informacion"} style={{ color: apariencia }}>{error ?? informacion ?? ""}</span>
        </div>
    );
}