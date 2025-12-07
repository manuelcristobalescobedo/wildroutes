import "./EntradaCampo.css";

type EntradaCampoProps = { etiqueta: string; nombre: string; valor: string; accion: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; marcador?: string; informacion?: string; error?: string; tipo?: string; requerido?: boolean; };

export default function EntradaCampo({ etiqueta, nombre, valor, accion, marcador, informacion, error, requerido, }: EntradaCampoProps) {
    return (
        <div className="entrada-campo">
            <label htmlFor={nombre} className="etiqueta">{etiqueta}</label>
            <textarea id={nombre} name={nombre} value={valor} onChange={accion} placeholder={marcador} required={requerido} className={`campo ${error ? "error" : ""}`}/>
            <span className={error ? "mensaje-error" : "mensaje-informacion"}>{error ?? informacion ?? ""}</span>
        </div>
    );
}