import "./BotonTerciario.css";

type BotonTerciarioProps = { texto: string; nivel: "alto" | "base" | "bajo"; accion?: () => void; icono?: React.ReactNode; };

export default function BotonTerciario({ texto, nivel, accion, icono }: BotonTerciarioProps) {
    return (
        <button type="button" className={`boton-terciario ${nivel}`} onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
            <span className="texto">{texto}</span>
        </button>
    );
}