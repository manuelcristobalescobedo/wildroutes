import { useState } from "react";
import "./Espacios.css";
import Iconos from "../../Iconos/Indice";
import Elementos from "../Elementos/Indice";

type GrupoEspacios = {
    id: string;
    horas: string[];
};

export default function Espacios() {
    const [grupos, setGrupos] = useState<GrupoEspacios[]>([
        { id: crypto.randomUUID(), horas: [""] }
    ]);

    const agregarGrupo = () => {
        setGrupos([
            ...grupos,
            { id: crypto.randomUUID(), horas: [""] }
        ]);
    };

    const agregarHora = (idGrupo: string) => {
        setGrupos(
            grupos.map(grupo =>
                grupo.id === idGrupo
                    ? { ...grupo, horas: [...grupo.horas, ""] }
                    : grupo
            )
        );
    };

    return (
        <div className="Espacios">
            <span>
                <Elementos.ParrafoSecundario texto="Fechas" />
                <Elementos.ParrafoSecundario texto="Horas" />
            </span>
            {grupos.map(grupo => (
                <div className="EspaciosGrupo" key={grupo.id}>
                    <div>
                        <input type="date" />
                        <button onClick={agregarGrupo}>
                            <Iconos.Anadir />
                        </button>
                    </div>

                    <div>
                        <div className="EspaciosHora">
                            {grupo.horas.map((_, index) => (
                                <input type="time" key={index} />
                            ))}
                        </div>

                        <button onClick={() => agregarHora(grupo.id)}>
                            <Iconos.Anadir />
                        </button>
                    </div>
                </div>
            ))}
            <span>
                <Elementos.ParrafoSecundario texto="Agrega una o más fechas" />
                <Elementos.ParrafoSecundario texto="Agrega una o más horas a esa fecha" />
            </span>
        </div>
    );
}