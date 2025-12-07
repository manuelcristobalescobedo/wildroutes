import "./EnlaceCuaternario.css";

type EnlaceCuaternarioProps = { texto: string; nivel: "alto" | "base" | "bajo"; enlace: string; icono?: React.ReactNode; };

export default function EnlaceCuaternario({ texto, nivel, enlace, icono }: EnlaceCuaternarioProps) {
    return (
        <a className={`enlace-cuaternario ${nivel}`} href={enlace}>
            {icono && <span className="icono">{icono}</span>}
            <span className="texto">{texto}</span>
        </a>
    );
}