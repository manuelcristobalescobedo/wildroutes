import "./BotonPrimario.css";

type BotonPrimarioProps = { texto: string; nivel: "alto" | "base" | "bajo"; accion?: () => void; icono?: React.ReactNode; };

export default function BotonPrimario({ texto, nivel, accion, icono }: BotonPrimarioProps) {
    return (
        <button type="button" className={`boton-primario ${nivel}`} onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
            <span className="texto">{texto}</span>
        </button>
    );
}