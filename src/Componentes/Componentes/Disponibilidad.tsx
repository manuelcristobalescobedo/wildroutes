import type { Disponibilidad } from "../../Tipos/Servicio";
import "./Disponibilidad.css";

type Props = {
    value: Disponibilidad[];
    onChange: (value: Disponibilidad[]) => void;
};

export default function DisponibilidadForm({ value, onChange }: Props) {
    const agregarGrupo = () => {
        onChange([...value, { fecha: "", horarios: [""] }]);
    };

    const actualizarFecha = (i: number, fecha: string) => {
        const copia = [...value];
        copia[i].fecha = fecha;
        onChange(copia);
    };

    const actualizarHorario = (grupo: number, i: number, hora: string) => {
        const copia = [...value];
        copia[grupo].horarios[i] = hora;
        onChange(copia);
    };

    const agregarHorario = (grupo: number) => {
        const copia = [...value];
        copia[grupo].horarios.push("");
        onChange(copia);
    };

    return (
        <div className="Disponibilidad">
            <div className="DisponibilidadLayout">
                <div className="DisponibilidadGrupos">
                    {value.map((disp, grupoIndex) => (
                        <div key={grupoIndex} className="DisponibilidadGrupo">
                            <div className="GrupoLayout">
                                <div className="GrupoCampos">
                                    <input
                                        type="date"
                                        value={disp.fecha}
                                        onChange={(e) =>
                                            actualizarFecha(grupoIndex, e.target.value)
                                        }
                                    />

                                    <div className="Horarios">
                                        {disp.horarios.map((hora, horaIndex) => (
                                            <input
                                                key={horaIndex}
                                                type="time"
                                                value={hora}
                                                onChange={(e) =>
                                                    actualizarHorario(
                                                        grupoIndex,
                                                        horaIndex,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="BotonAgregar"
                                    onClick={() => agregarHorario(grupoIndex)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="BotonAgregar"
                    onClick={agregarGrupo}
                >
                    +
                </button>
            </div>
        </div>
    );
}