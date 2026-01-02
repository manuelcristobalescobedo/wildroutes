import Elementos from "../Elementos/Indice";
import Iconos from "../../Iconos/Indice";
import "./Camino.css"

type CaminoItem = {
    texto: string;
    enlace: string;
};

type CaminoProps = {
    items: CaminoItem[];
};

export default function Camino({ items }: CaminoProps) {
    if (!items || items.length === 0) return null;

    return (
        <section className="Camino">
            {items.map((item, index) => (
                <span key={index}>
                    <Elementos.EnlaceAlternativoPrimario enlace={item.enlace} texto={item.texto} color="var(--color-secundario-mas-alto)" flotar="var(--color-secundario-mas-alto)"/>
                    {index < items.length - 1 && <Iconos.FlechaDerecha />}
                </span>
            ))}
        </section>
    );
}