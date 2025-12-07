import "./EntradaTexto.css";

type EntradaTextoProps = { etiqueta: string; nombre: string; valor: string; accion: (e: React.ChangeEvent<HTMLInputElement>) => void; marcador?: string; informacion?: string; error?: string; tipo?: string; requerido?: boolean; };

export default function EntradaTexto({ etiqueta, nombre, valor, accion, marcador, informacion, error, tipo = "text", requerido, }: EntradaTextoProps) {
    return (
        <div className="entrada-texto">
            <label htmlFor={nombre} className="etiqueta">{etiqueta}</label>
            <input id={nombre} name={nombre} type={tipo} value={valor} onChange={accion} placeholder={marcador} required={requerido} className={`campo ${error ? "error" : ""}`}/>
            <span className={error ? "mensaje-error" : "mensaje-informacion"}>{error ?? informacion ?? ""}</span>
        </div>
    );
}