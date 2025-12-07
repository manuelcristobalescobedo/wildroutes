import "./BotonCuaternario.css";

type BotonCuaternarioProps = { texto: string; nivel: "alto" | "base" | "bajo"; accion?: () => void; icono?: React.ReactNode; };

export default function BotonCuaternario({ texto, nivel, accion, icono }: BotonCuaternarioProps) {
    return (
        <button type="button" className={`boton-cuaternario ${nivel}`} onClick={accion}>
            {icono && <span className="icono">{icono}</span>}
            <span className="texto">{texto}</span>
        </button>
    );
}