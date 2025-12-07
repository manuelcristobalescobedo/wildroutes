import "./AccionSecundaria.css";

type AccionSecundariaProps = { accion?: () => void; icono?: React.ReactNode; };

export default function AccionSecundaria({ accion, icono }: AccionSecundariaProps) {
    return (
        <button type="button" className="accion-secundaria" onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
        </button>
    );
}