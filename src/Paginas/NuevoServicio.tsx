import "./NuevoServicio.css";
import "../index.css";
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import Camino from "../Componentes/Componentes/Camino";
import Elementos from "../Componentes/Elementos/Indice";
import Iconos from "../Iconos/Indice";
// import Calificacion from "../Componentes/Componentes/Calificacion";
import { useState, useEffect } from "react";
import Resena from "../Componentes/Componentes/Resena";
import type { Servicio } from "../Tipos/Servicio";
import { useParams } from "react-router-dom";
import Opiniones from "../Componentes/Componentes/Opiniones";
import Reservas from "../Componentes/Componentes/Reservas";

export default function NuevoServicio() {
    const { id } = useParams<{ id: string }>();
    const [servicio, setServicio] = useState<Servicio | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:3001/servicios/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Fetch failed");
                return res.json();
            })
            .then(data => {
                setServicio(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <main>Cargando servicio...</main>;
    if (error || !servicio) return <main>Error al cargar servicio</main>;

    return (
        <main>
            <Encabezado />
            <Camino items={[
                { texto: "Inicio", enlace: "/nueva-principal" },
                { texto: "Catálogo", enlace: "/nuevo-catalogo" },
                { texto: servicio.titulo, enlace: `/nuevo-servicio/${servicio.id}` },
            ]} />
            <section className="Nombre">
                <Elementos.TituloCuaternario texto={servicio.titulo} color="var(--color-neutro-mas-mas-mas-mas-alto)" />
            </section>
            <section className="Lugar">
                <Elementos.ParrafoPrimario
                    texto={`${servicio.ubicacion.comuna}, ${servicio.ubicacion.region}, ${servicio.ubicacion.pais}`}
                    color="var(--color-neutro-mas-mas-mas-mas-alto)"
                    icono={<Iconos.Ubicacion />}
                />
            </section>
            <section className="Etiquetas">
                <Elementos.EtiquetaPrimaria texto={servicio.zona} />
                <Elementos.EtiquetaPrimaria texto={servicio.ideal} />
                <Elementos.EtiquetaPrimaria texto={servicio.actividad} />
            </section>
            <section className="Galeria">
                <img src={servicio.imagenes[0]} />
                <div>
                    <div>
                        <img src={servicio.imagenes[1]} />
                    </div>
                    <div>
                        <img src={servicio.imagenes[2]} />
                    </div>
                </div>
            </section>
            <section className="Detalles">
                <div>
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={servicio.descripcion} />
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="¿En qué consiste?" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={servicio.consiste} />
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Incluye" />
                    <Elementos.ListaPrimaria color="var(--color-neutro-mas-mas-mas-mas-alto)" items={servicio.incluye} />
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="No incluye" />
                    <Elementos.ListaPrimaria color="var(--color-neutro-mas-mas-mas-mas-alto)" items={servicio.excluye} />
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Más información" />
                    <div className="Informacion">
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Duración" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={servicio.informacion.duracion} />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Hora de inicio" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={servicio.informacion.inicio} />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Edad mínima" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={servicio.informacion.edad} />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Requisitos" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={servicio.informacion.requisitos} />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Idiomas ofrecidos" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={servicio.informacion.idiomas} />
                        </div>
                    </div>
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Políticas de cancelación y modificación" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto={servicio.politicas} />
                </div>
                <div>
                    <div>
                        <img />
                        <Elementos.ParrafoSecundario texto="Alfatur" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                    </div>
                    <Elementos.TituloCuaternario texto={servicio.precio} color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                    <Elementos.ParrafoPrimario texto="por persona" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                </div>
            </section>
            <Resena />
            <Opiniones />
            <Reservas servicio={servicio} />
            <Pie />
        </main>
    );
}