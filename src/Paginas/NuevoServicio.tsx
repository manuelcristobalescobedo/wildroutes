import "./NuevoServicio.css";
import "../index.css";
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import Camino from "../Componentes/Componentes/Camino";
import Elementos from "../Componentes/Elementos/Indice";
import Iconos from "../Iconos/Indice";
import Calificacion from "../Componentes/Componentes/Calificacion";
import { useState } from "react";

export default function NuevoServicio() {
    const [calificacion, setCalificacion] = useState(0)

    return (
        <main>
            <Encabezado />
            <Camino items={[ { texto: "Inicio", enlace: "/nueva-principal" }, { texto: "Catálogo", enlace: "/nuevo-catalogo" }, { texto: "Cabalgata por el Valle del Elqui", enlace: "/nuevo-servicio" }, ]} />
            <section className="Nombre">
                <Elementos.TituloCuaternario texto="Cabalgata por el Valle del Elqui" color="var(--color-neutro-mas-mas-mas-mas-alto)"/>
            </section>
            <section className="Lugar">
                <Elementos.ParrafoPrimario texto="Vicuña, Coquimbo, Chile" color="var(--color-neutro-mas-mas-mas-mas-alto)" icono={<Iconos.Ubicacion />}/>
            </section>
            <section className="Etiquetas">
                <Elementos.EtiquetaPrimaria texto="Zona centro" />
                <Elementos.EtiquetaPrimaria texto="Parejas" />
                <Elementos.EtiquetaPrimaria texto="Turismo escénico" />
            </section>
            <section className="Galeria">
                <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                <div>
                    <div>
                        <img src="https://i.postimg.cc/XX6SBc6D/imagen-8.jpg"/>
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/BtfbZKY8/imagen-9.jpg"/>
                    </div>
                </div>
            </section>
            <section className="Detalles">
                <div>
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Descubre el Valle del Elqui desde una perspectiva única, dejándote llevar por el ritmo del caballo y la inmensidad del paisaje. Una experiencia pensada para desconectarte, respirar aire puro y disfrutar el entorno con calma, guiado por expertos que hacen de cada recorrido un momento especial, ideal para compartir y crear recuerdos memorables." />
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="¿En qué consiste?" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Un recorrido guiado a caballo por los paisajes más característicos del Valle del Elqui, donde avanzarás por senderos naturales a un ritmo tranquilo, disfrutando vistas abiertas de cerros, ríos y viñedos. La experiencia está pensada para conectar con el entorno y vivir el valle desde una perspectiva auténtica, con el acompañamiento permanente de guías especializados." />
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Incluye" />
                    <Elementos.ListaPrimaria color="var(--color-neutro-mas-mas-mas-mas-alto)" items={["Guía local especializado en cabalgatas", "Caballo entrenado y equipo básico de seguridad", "Inducción inicial y acompañamiento durante el recorrido", "Botella de agua", "Seguro básico de accidentes", "Registro fotográfico digital de la experiencia"]} />
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="No incluye" />
                    <Elementos.ListaPrimaria color="var(--color-neutro-mas-mas-mas-mas-alto)" items={["Alimentación o bebidas adicionales", "Propinas para el guía (opcional)", "Ropa cómoda o calzado adecuado para la actividad", "Gastos personales no especificados"]} />
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Más información" />
                    <div className="Informacion">
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Detalle" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Información" />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Duración" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Entre 2 y 3 horas" />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Hora de inicio" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="9:00 AM" />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Edad mínima" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="6 años" />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Requisitos" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Capacidad para montar y seguir instrucciones básicas" />
                        </div>
                        <div>
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Idiomas ofrecidos" />
                            <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Español e inglés" />
                        </div>
                    </div>
                    <Elementos.TituloQuinario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Políticas de cancelación y modificación" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Las reservas pueden modificarse o cancelarse sin costo hasta 48 horas antes de la fecha del tour." />
                </div>
                <div>
                    <div>
                        <img />
                        <Elementos.ParrafoSecundario texto="Alfatur" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                    </div>
                    <Elementos.TituloCuaternario texto="$75.000" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                    <Elementos.ParrafoPrimario texto="por persona" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                </div>
            </section>
            <section className="Resenas">
                <Elementos.TituloSextario texto="Deja una reseña" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                <div>
                    <div>
                        <Elementos.EntradaTexto valor="" accion={() => {}} informacion="" tipo="text" estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Título" nombre="titulo" />
                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Reseña" nombre="resena" valor="" accion={() => {}} marcador="Escribe tu reseña"/>
                    </div>
                    <div>
                        <Calificacion etiqueta="Calificación" valor={calificacion} alCambiar={setCalificacion} />
                        <Elementos.EntradaVerificacionSecundaria checked onChange={() => {}} texto="Acepto publicar mi nombre y foto de perfil junto con esta reseña" />
                        <Elementos.EntradaVerificacionSecundaria checked onChange={() => {}} texto="Al publicar esta reseña, me adhiero a las Guías comunitarias de Wildroutes" />
                        <Elementos.BotonSecundario texto="Publicar" nivel="alto" accion={() => {}}/>
                    </div>
                </div>
            </section>
            <Pie />
        </main>
    );
}