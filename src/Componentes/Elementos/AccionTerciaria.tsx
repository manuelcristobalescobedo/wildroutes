import "./AccionTerciaria.css";

type AccionTerciariaProps = { accion?: () => void; icono?: React.ReactNode; };

export default function AccionTerciaria({ accion, icono }: AccionTerciariaProps) {
    return (
        <button type="button" className="accion-terciaria" onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
        </button>
    );
}