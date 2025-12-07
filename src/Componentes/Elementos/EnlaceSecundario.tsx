import "./EnlaceSecundario.css";

type EnlaceSecundarioProps = { texto: string; nivel: "alto" | "base" | "bajo"; enlace: string; icono?: React.ReactNode; };

export default function EnlaceSecundario({ texto, nivel, enlace, icono }: EnlaceSecundarioProps) {
    return (
        <a className={`enlace-secundario ${nivel}`} href={enlace}>
            {icono && <span className="icono">{icono}</span>}
            <span className="texto">{texto}</span>
        </a>
    );
}