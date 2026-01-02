import "./NuevoCatalogo.css";
import "../index.css";
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import Iconos from "../Iconos/Indice";
import Descuentos from "../Componentes/Componentes/Descuentos";
import Filtros from "../Componentes/Componentes/Filtros";
import Resultados from "../Componentes/Componentes/Resultados";

import { useState, useEffect, useMemo } from "react";
import Camino from "../Componentes/Componentes/Camino";
import Titular from "../Componentes/Componentes/Titular";

type FiltrosState = {
  precio: "menor" | "medio" | "mayor" | null;
  zona: string[];
  ideal: string[];
  actividad: string[];
};

type Ubicacion = { comuna: string; region: string; pais: string };
type Servicio = { id: number; imagen: string; titulo: string; ubicacion: Ubicacion; calificacion: number; resenas: number; precio: string; intereses?: boolean; descuentos?: boolean; zona?: string; ideal?: string; actividad?: string };

export default function NuevoCatalogo() {
    const [filtros, setFiltros] = useState<FiltrosState>({
        precio: null,
        zona: [],
        ideal: [],
        actividad: []
    });

    const [servicios, setServicios] = useState<Servicio[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/Datos.json")
        .then(res => res.json())
        .then(data => {
            setServicios(Array.isArray(data.servicios) ? data.servicios : []);
            setLoading(false);
        })
        .catch(err => {
            console.error("Error cargando servicios:", err);
            setLoading(false);
        });
    }, []);

    const serviciosFiltrados = useMemo(() => {
        return servicios.filter(s => {
        if (filtros.zona.length && (!s.zona || !filtros.zona.includes(s.zona))) return false;

        if (filtros.ideal.length && (!s.ideal || !filtros.ideal.includes(s.ideal))) return false;

        if (filtros.actividad.length && (!s.actividad || !filtros.actividad.includes(s.actividad))) return false;

        // Filtrar por precio (muy básico, opcional)
        if (filtros.precio) {
            const precioNum = Number(s.precio.replace(/\D/g, ""));
            if (filtros.precio === "menor" && precioNum > 50000) return false;
            if (filtros.precio === "medio" && (precioNum < 50000 || precioNum > 100000)) return false;
            if (filtros.precio === "mayor" && precioNum <= 100000) return false;
        }

        return true;
        });
    }, [servicios, filtros]);

    if (loading) return <p>Cargando servicios...</p>;

    return (
        <main>
            <Encabezado />
            <Camino items={[ { texto: "Inicio", enlace: "/nueva-principal" }, { texto: "Catálogo", enlace: "/nuevo-catalogo" }, ]}/>
            <Titular texto="Ofertas especiales" icono={<Iconos.Vender />} color="var(--color-secundario-mas-alto)" />
            <Descuentos />
            <Titular texto="Catálogo" icono={<Iconos.Todo />} color="var(--color-secundario-mas-alto)" />
            <section className="Lista">
                <Filtros filtros={filtros} setFiltros={setFiltros} />
                <Resultados servicios={serviciosFiltrados} />
            </section>
            <Pie />
        </main>
    );
}