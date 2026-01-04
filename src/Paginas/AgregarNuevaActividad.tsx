import "./AgregarNuevaActividad.css"
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import Elementos, { BotonPrimario } from "../Componentes/Elementos/Indice";
import { useState } from "react";
import Anadir from "../Iconos/Anadir";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import DisponibilidadForm from "../Componentes/Componentes/Disponibilidad";
import type { Disponibilidad } from "../Tipos/Servicio";
import Iconos from "../Iconos/Indice";
import Espacios from "../Componentes/Componentes/Espacios";

export default function AgregarNuevaActividad() {
    const navigate = useNavigate();

    const [entrada, setEntrada] = useState({ titulo: "", 
      descripcion: "", 
      consiste: "",
      precio: "",
      zona: "",
      ideal: "",
      actividad: "",
      politicas: "",
      imagenes: [],
      ubicacion: { comuna: "", region: "", pais: ""},
      informacion: {duracion: "", inicio: "", edad: "", requisitos: "", idiomas: ""},
      cupos: 0});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEntrada(prev => ({ ...prev, [name]: value }));
  };

  const guardarActividad = async () => {
  const nuevaActividad = {
    id: uuidv4(),
    imagenes: imagenes,                 
    titulo: entrada.titulo,
    descripcion: entrada.descripcion,
    consiste: entrada.consiste,
    ubicacion: entrada.ubicacion,
    calificacion: 0,
    resenas: 0,
    precio: entrada.precio,
    intereses: false,
    descuentos: false,
    zona: entrada.zona,
    ideal: entrada.ideal,
    actividad: entrada.actividad,
    incluye: incluye,
    excluye: [],                         // default empty
    informacion: entrada.informacion,
    politicas: entrada.politicas,
    disponibilidad: disponibilidad,
    cupos: entrada.cupos
  };

  await fetch("http://localhost:3001/actividades", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevaActividad),
  });

  navigate("/gestion-productos");
};

    const [incluye, setIncluye] = useState<string[]>([""]);

    const [disponibilidad, setDisponibilidad] = useState<Disponibilidad[]>([
        { fecha: "", horarios: [""] }
    ]);

    const [imagenes, setImagenes] = useState<string[]>([""]);

    return(
        <>
            <main>
                <Encabezado />
                    <section className="TituloActividad" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "2rem", }}>
                        <Elementos.TituloTerciario texto="Agregar Nueva Actividad" color="var(--color-neutro-mas-mas-mas-mas-alto)" icono={<Iconos.Actividad />} />
                    </section>
                    <section style={{paddingRight: "2rem", paddingLeft: "2rem", gap: "1rem"}}>
                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Nombre de actividad:" nombre="titulo" valor={entrada.titulo} accion={handleChange} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>
                        
                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Descripción de Actividad:" nombre="descripcion" valor={entrada.descripcion} accion={handleChange} marcador="Escribe algo..." informacion="0/200"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Precio por Persona:" nombre="precio" valor={entrada.precio} accion={handleChange} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Zona" nombre="zona" valor={entrada.zona} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "Norte", texto: "Zona Norte" }, { valor: "Centro", texto: "Zona Centro" }, { valor: "Sur", texto: "Zona Sur" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Región" nombre="region" valor={entrada.ubicacion.region} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "Atacama", texto: "Atacama" }, { valor: "Valparaiso", texto: "Valparaiso" }, { valor: "Los Lagos", texto: "Los Lagos" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Comuna" nombre="comuna" valor={entrada.ubicacion.comuna} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "Antofagasta", texto: "Antofagasta" }, { valor: "El Tabo", texto: "El Tabo" }, { valor: "Chiloe", texto: "Chiloe" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>



                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Politica de devolución" nombre="devolucion" valor={entrada.politicas} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Tipo de Reembolso" nombre="reembolso" valor={entrada.informacion.requisitos} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>



                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="En que consiste la Actividad:" nombre="actividad" valor={entrada.informacion.inicio} accion={handleChange} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="¿Que incluye la Actividad?" nombre="act2" valor={entrada.informacion.duracion} accion={handleChange} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="¿Que no incluye la Actividad?" nombre="act3" valor={entrada.informacion.edad} accion={handleChange} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Información adicional de la Actividad:" nombre="act4" valor={entrada.informacion.idiomas} accion={handleChange} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <h4 style={{ fontFamily: "sans-serif" }}>Imágenes (URLs)</h4>

                          <Elementos.EntradaLista
                            value={imagenes}
                            onChange={setImagenes}
                          />

                        <h4 style={{ fontFamily: "sans-serif" }}>Incluye</h4>

                        <Elementos.EntradaLista value={incluye} onChange={setIncluye} />

                        <h4 style={{ fontFamily: "sans-serif" }}>Disponibilidad</h4>

                        <DisponibilidadForm value={disponibilidad} onChange={setDisponibilidad} />

                        <Espacios />

                        <section>
                            <BotonPrimario texto="Cargar Imagen" icono={<Anadir />} nivel="alto"/>
                        </section>
                        
                        <section style={{ padding: "1rem", borderRadius: "12px", display: "flex", flexDirection: "row", gap: "2rem", justifyContent: "center"}}>
                            <Elementos.BotonPrimario texto="Cancelar" icono={""} nivel="base" accion={() => navigate(-1)} />
                            <Elementos.BotonPrimario texto="Agregar" icono={""} nivel="alto" accion={guardarActividad} />
                            
                        </section>
                        </section>
                <Pie />
            </main>        
        </>
    )
  }