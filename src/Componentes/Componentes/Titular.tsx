import Elementos from "../Elementos/Indice";

type TitularProps = {
    texto: string;
    icono: React.ReactNode;
    color?: string;
};

export default function Titular({ texto, icono, color }: TitularProps) {
    return (
        <section className="Titular">
            <div />
            <Elementos.TituloCuaternario texto={texto} icono={icono} color={color} />
            <div />
        </section>
    );
}