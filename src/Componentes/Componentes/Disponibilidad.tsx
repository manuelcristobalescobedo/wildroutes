import type { Disponibilidad } from "../../Tipos/Servicio";

type Props = {
  value: Disponibilidad[];
  onChange: (value: Disponibilidad[]) => void;
};

export default function DisponibilidadForm({ value, onChange }: Props) {
    const agregarGrupo = () => {
        onChange([
        ...value,
        { fecha: "", horarios: [""] }
        ]);
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
        <div>
        {value.map((disp, grupoIndex) => (
            <div key={grupoIndex} style={{ marginBottom: 16 }}>
            {/* Fecha */}
            <input
                type="date"
                value={disp.fecha}
                onChange={(e) => actualizarFecha(grupoIndex, e.target.value)}
            />

            {/* Horarios */}
            {disp.horarios.map((hora, horaIndex) => (
                <div key={horaIndex} style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <input
                    type="time"
                    value={hora}
                    onChange={(e) =>
                    actualizarHorario(grupoIndex, horaIndex, e.target.value)
                    }
                />

                {horaIndex === disp.horarios.length - 1 && (
                    <button
                    type="button"
                    onClick={() => agregarHorario(grupoIndex)}
                    >
                    +
                    </button>
                )}
                </div>
            ))}

            {/* Botón + del grupo */}
            {grupoIndex === value.length - 1 && (
                <button
                type="button"
                style={{ marginTop: 8 }}
                onClick={agregarGrupo}
                >
                +
                </button>
            )}
            </div>
        ))}
        </div>
    );
}