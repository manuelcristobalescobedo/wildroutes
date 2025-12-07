import "./AccionCuaternaria.css";

type AccionCuaternariaProps = { accion?: () => void; icono?: React.ReactNode; };

export default function AccionCuaternaria({ accion, icono }: AccionCuaternariaProps) {
    return (
        <button type="button" className="accion-cuaternaria" onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
        </button>
    );
}