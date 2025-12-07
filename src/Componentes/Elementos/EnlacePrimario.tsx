import "./EnlacePrimario.css";

type EnlacePrimarioProps = { texto: string; nivel: "alto" | "base" | "bajo"; enlace: string; icono?: React.ReactNode; };

export default function EnlacePrimario({ texto, nivel, enlace, icono }: EnlacePrimarioProps) {
    return (
        <a className={`enlace-primario ${nivel}`} href={enlace}>
            {icono && <span className="icono">{icono}</span>}
            <span className="texto">{texto}</span>
        </a>
    );
}