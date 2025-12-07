import "./AccionQuinaria.css";

type AccionQuinariaProps = { accion?: () => void; icono?: React.ReactNode; };

export default function AccionQuinaria({ accion, icono }: AccionQuinariaProps) {
    return (
        <button type="button" className="accion-quinaria" onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
        </button>
    );
}