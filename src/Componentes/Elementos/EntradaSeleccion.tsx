import "./EntradaSeleccion.css";

type Opcion = { valor: string; texto: string; };

type EntradaSeleccionProps = { etiqueta: string; nombre: string; valor: string; opciones: Opcion[]; accion: (e: React.ChangeEvent<HTMLSelectElement>) => void; informacion?: string; error?: string; requerido?: boolean; };

export default function EntradaSeleccion({ etiqueta, nombre, valor, opciones, accion, informacion, error, requerido, }: EntradaSeleccionProps) {
    return (
        <div className="entrada-seleccion">
            <label htmlFor={nombre} className="etiqueta">{etiqueta}</label>
            <select id={nombre} name={nombre} value={valor} onChange={accion} required={requerido} className={`campo ${error ? "estado-error" : ""}`}>
                {opciones.map((op) => (<option key={op.valor} value={op.valor}>{op.texto}</option>))}
            </select>
            <span className={error ? "mensaje-error" : "mensaje-informacion"}>{error ?? informacion ?? ""}</span>
        </div>
    );
}