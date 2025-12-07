import "./EnlaceTerciario.css";

type EnlaceTerciarioProps = { texto: string; nivel: "alto" | "base" | "bajo"; enlace: string; icono?: React.ReactNode; };

export default function EnlaceTerciario({ texto, nivel, enlace, icono }: EnlaceTerciarioProps) {
    return (
        <a className={`enlace-terciario ${nivel}`} href={enlace}>
            {icono && <span className="icono">{icono}</span>}
            <span className="texto">{texto}</span>
        </a>
    );
}