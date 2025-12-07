import "./BotonSecundario.css";

type BotonSecundarioProps = { texto: string; nivel: "alto" | "base" | "bajo"; accion?: () => void; icono?: React.ReactNode; };

export default function BotonSecundario({ texto, nivel, accion, icono }: BotonSecundarioProps) {
    return (
        <button type="button" className={`boton-secundario ${nivel}`} onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
            <span className="texto">{texto}</span>
        </button>
    );
}