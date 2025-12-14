import "./EnlaceAlternativoSecundario.css";

type EnlaceAlternativoSecundarioProps = { texto: string; enlace: string; icono?: React.ReactNode; color?: string; flotar?: string; };

export default function EnlaceAlternativoSecundario({ texto, enlace, icono, color = "#000000", flotar = "#000000", }: EnlaceAlternativoSecundarioProps) {
    return (        
        <a className="enlace-alternativo-secundario" href={enlace} style={{ "--color-enlace-alternativo-secundario": color, "--color-flotar-enlace-alternativo-secundario": flotar, } as React.CSSProperties}>
            {icono && <span className="enlace-alternativo-secundario-icono">{icono}</span>}
            <span className="enlace-alternativo-secundario-texto">{texto}</span>
        </a>
    );
}