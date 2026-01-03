import Iconos from "../../Iconos/Indice"
import "./Calificacion.css"

type PropsCalificacion = { etiqueta: string, valor: number, alCambiar: (calificacion: number) => void, informacion?: string, error?: string, estilo?: string, apariencia?: string }

export default function Calificacion({ etiqueta, valor, alCambiar, informacion, error, estilo, apariencia }: PropsCalificacion) {
    return (
        <div className="calificacion">
            <label className="etiqueta" style={{ color: estilo }}>
                {etiqueta}
            </label>
            <div className="campo-calificacion">
                {Array.from({ length: 5 }).map((_, indice) => {
                    const valorEstrella = indice + 1
                    const activa = valorEstrella <= valor

                    return (
                        <button key={valorEstrella} type="button" onClick={() => alCambiar(valorEstrella)} aria-label={`Calificación ${valorEstrella}`} className="estrella" style={{ color: activa ? "var(--color-terciario-bajo)" : "var(--color-neutro-mas-alto)" }}>
                            <Iconos.Estrella />
                        </button>
                    )
                })}
            </div>
            <span className={error ? "mensaje-error" : "mensaje-informacion"} style={{ color: apariencia }}>
                {error ?? informacion ?? ""}
            </span>
        </div>
    )
}