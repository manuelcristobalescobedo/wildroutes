import "./EnlaceAlternativoPrimario.css";

type EnlaceAlternativoPrimarioProps = { texto: string; enlace: string; icono?: React.ReactNode; color?: string; flotar?: string; };

export default function EnlaceAlternativoPrimario({ texto, enlace, icono, color = "#000000", flotar = "#000000", }: EnlaceAlternativoPrimarioProps) {
    return (        
        <a className="enlace-alternativo-primario" href={enlace} style={{ "--color-enlace-alternativo-primario": color, "--color-flotar-enlace-alternativo-primario": flotar, } as React.CSSProperties}>
            {icono && <span className="enlace-alternativo-primario-icono">{icono}</span>}
            <span className="enlace-alternativo-primario-texto">{texto}</span>
        </a>
    );
}