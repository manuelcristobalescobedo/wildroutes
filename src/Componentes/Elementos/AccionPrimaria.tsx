import "./AccionPrimaria.css";

type AccionPrimariaProps = { accion?: () => void; icono?: React.ReactNode; };

export default function AccionPrimaria({ accion, icono }: AccionPrimariaProps) {
    return (
        <button type="button" className="accion-primaria" onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
        </button>
    );
}