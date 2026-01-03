import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Servicio } from "../Tipos/Servicio";

type Props = { servicio: Servicio };

export default function Reservas({ servicio }: Props) {
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [cupos, setCupos] = useState(1);

    const fechas = servicio.disponibilidad;
    const horarios = fechas.find(f => f.fecha === fecha)?.horarios ?? [];

    const reservar = async () => {
        if (!fecha || !hora) return;

        const reserva = { id: uuidv4(), servicio: servicio.id, fecha, hora, cupos };

        await fetch("http://localhost:3001/reservas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reserva)
        });
    };

    return (
        <section>
            <select value={fecha} onChange={e => setFecha(e.target.value)}>
                <option value="">Fecha</option>
                {fechas.map(f => (
                    <option key={f.fecha} value={f.fecha}>{f.fecha}</option>
                ))}
            </select>
            <select value={hora} onChange={e => setHora(e.target.value)}>
                <option value="">Hora</option>
                {horarios.map(h => (
                    <option key={h.hora} value={h.hora}>
                        {h.hora} ({h.cupos} cupos)
                    </option>
                ))}
            </select>
            <input type="number" min={1} value={cupos} onChange={e => setCupos(Number(e.target.value))}/>
            <button onClick={reservar}>Agregar al carrito</button>
        </section>
    );
}