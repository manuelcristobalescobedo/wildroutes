import "./AgregarNuevaActividad.css"
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import Elementos, { BotonPrimario } from "../Componentes/Elementos/Indice";
import { useState } from "react";
import Anadir from "../Iconos/Anadir";
import { useNavigate } from "react-router-dom";
import Iconos from "../Iconos/Indice";
import {v4 as uuidv4} from "uuid";

export default function AgregarNuevaActividad() {
    const navigate = useNavigate();

    const [entrada, setEntrada] = useState({ nombre: "", descripcion: "", precio: "", maxPersonas: "", minPersonas: "", zona: "",  region: "", comuna: "", devolucion: "", reembolso: "", actividad: "", act2: "", act3: "", act4: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEntrada(prev => ({ ...prev, [name]: value }));
  };

  const guardarActividad = async () => {
  const nuevaActividad = {
    id: uuidv4(),
    ...entrada,
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

    return(
        <>
            <main>
                <Encabezado />
                    <section className="TituloActividad" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "2rem", }}>
                        <Elementos.TituloTerciario texto="Agregar Nueva Actividad" color="var(--color-neutro-mas-mas-mas-mas-alto)" icono={<Iconos.Actividad />} />
                    </section>
                    <section style={{paddingRight: "2rem", paddingLeft: "2rem", gap: "1rem"}}>
                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Nombre de actividad:" nombre="nombre" valor={entrada.nombre} accion={handleChange} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>
                        
                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Descripción de Actividad:" nombre="descripcion" valor={entrada.descripcion} accion={handleChange} marcador="Escribe algo..." informacion="0/200"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Precio por Persona:" nombre="precio" valor={entrada.precio} accion={handleChange} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Cantidad Máxima de Personas por Actividad :" nombre="maxPersonas" valor={entrada.maxPersonas} accion={handleChange} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Cantidad Mínima de Personas por Actividad :" nombre="minPersonas" valor={entrada.minPersonas} accion={handleChange} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Zona" nombre="zona" valor={entrada.zona} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "Norte", texto: "Zona Norte" }, { valor: "Centro", texto: "Zona Centro" }, { valor: "Sur", texto: "Zona Sur" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Región" nombre="region" valor={entrada.region} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "Atacama", texto: "Atacama" }, { valor: "Valparaiso", texto: "Valparaiso" }, { valor: "Los Lagos", texto: "Los Lagos" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Comuna" nombre="comuna" valor={entrada.comuna} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "Antofagasta", texto: "Antofagasta" }, { valor: "El Tabo", texto: "El Tabo" }, { valor: "Chiloe", texto: "Chiloe" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>



                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Politica de devolución" nombre="devolucion" valor={entrada.devolucion} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Tipo de Reembolso" nombre="reembolso" valor={entrada.reembolso} accion={handleChange} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>



                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="En que consiste la Actividad:" nombre="actividad" valor={entrada.actividad} accion={handleChange} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="¿Que incluye la Actividad?" nombre="act2" valor={entrada.act2} accion={handleChange} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="¿Que no incluye la Actividad?" nombre="act3" valor={entrada.act3} accion={handleChange} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Información adicional de la Actividad:" nombre="act4" valor={entrada.act4} accion={handleChange} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="" nombre="photo" valor={""} accion={handleChange} marcador="" informacion="" tipo="file"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaLista value={incluye} onChange={setIncluye} />


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