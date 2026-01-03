import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Iconos from "../../Iconos/Indice";
import Elementos from "../Elementos/Indice";
import type { Resena } from "../../Tipos/Resena";
import "./Opiniones.css";

export default function Opiniones() {
    const { id } = useParams<{ id: string }>();
    const [opiniones, setOpiniones] = useState<Resena[]>([]);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:3001/resenas?servicio=${id}`)
            .then(res => res.json())
            .then(data => setOpiniones(data.slice(0, 3)))
            .catch(() => {});
    }, [id]);

    return (
        <section className="Opiniones">
            {opiniones.map(opinion => (
                <div key={opinion.id}>
                    <span>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span className={i < opinion.calificacion ? "Seleccionadas" : ""}>
                                <Iconos.Estrella />
                            </span>
                        ))}
                    </span>
                    <Elementos.TituloSextario texto={opinion.titulo} />
                    <Elementos.ParrafoPrimario texto={opinion.contenido} />
                    <div>
                        <img />
                        <Elementos.ParrafoPrimario texto="Usuario anónimo" />
                    </div>
                </div>
            ))}
        </section>
    );
}