import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Servicio } from "../../Tipos/Servicio";

import "./Reservas.css";
import Elementos from "../Elementos/Indice";
import Iconos from "../../Iconos/Indice";

type Props = { servicio: Servicio };

export default function Reservas({ servicio }: Props) {
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [cupos, setCupos] = useState(1);

    const fechas = servicio.disponibilidad;
    const horarios = fechas.find(f => f.fecha === fecha)?.horarios ?? [];

    const reservar = async () => {
        if (!fecha || !hora) return;

        const reserva = {
            id: uuidv4(),
            servicio: servicio.id,
            fecha,
            hora,
            cupos,
        };

        await fetch("http://localhost:3001/reservas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reserva),
        });
    };

    return (
        <section className="Reservas">
            <Elementos.EntradaSeleccion etiqueta="Fecha" nombre="fecha" valor={fecha} opciones={[ { valor: "", texto: "Selecciona fecha" }, ...fechas.map(f => ({ valor: f.fecha, texto: f.fecha })), ]} accion={e => setFecha(e.target.value)} requerido />
            <div>
                <Elementos.EntradaSeleccion etiqueta="Hora" nombre="hora" valor={hora} opciones={[ { valor: "", texto: "Selecciona hora" }, ...horarios.map(h => ({ valor: h, texto: h })), ]} accion={e => setHora(e.target.value)} requerido />
                <Elementos.EntradaNumero nombre="cupos" etiqueta="Cupos" min={1} max={servicio.cupos} value={cupos} onChange={setCupos} />
                <Elementos.BotonPrimario texto="Agregar al carrito" nivel="alto" accion={reservar} icono={<Iconos.Carro />} />
            </div>
        </section>
    );
}