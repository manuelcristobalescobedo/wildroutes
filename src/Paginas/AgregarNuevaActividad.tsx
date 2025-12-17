
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import TituloPrimario from "../Componentes/Elementos/TituloPrimario";
import Actividad from "../Iconos/Actividad";
import Elementos, { BotonPrimario } from "../Componentes/Elementos/Indice";
import { useState } from "react";
import Anadir from "../Iconos/Anadir";

export default function AgregarNuevaActividad() {

    const [entrada, setEntrada] = useState({ nombre: "", apellido: "", telefono: "+56 9 ", rut: "", correo: "", contrasena: "",  confirmar: "", mensaje: "", });

    return(
        <>
            <main>
                <Encabezado />
                    <section style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "2rem"}}>
                        <TituloPrimario texto="Agregar Nueva Actividad" color="#000000ff" icono={<Actividad />} />
                    </section>
                    <section>
                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Nombre de actividad:" nombre="actividad" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>
                        
                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Descripción de Actividad:" nombre="descripción" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="Escribe algo..." informacion="0/200"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Precio por Persona:" nombre="precio" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Cantidad Máxima de Personas por Actividad :" nombre="CantMaxima" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Cantidad Mínima de Personas por Actividad :" nombre="CantMínima" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Zona" nombre="categoria-zona" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Región" nombre="categoria-region" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Comuna" nombre="categoria-comuna" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>



                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Politica de devolución" nombre="devolución" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Tipo de Reembolso" nombre="reembolso" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" />
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>



                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="En que consiste la Actividad:" nombre="Actividad" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="¿Que incluye la Actividad?" nombre="Actividad" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="¿Que no incluye la Actividad?" nombre="Actividad" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Información adicional de la Actividad:" nombre="Actividad" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="escribe algo..." informacion="0/200" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="" nombre="photo" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>


                        <section>
                            <BotonPrimario texto="Cargar Imagen" icono={<Anadir />} nivel="alto"/>
                        </section>
                        
                        <section style={{ padding: "1rem", borderRadius: "12px", display: "flex", flexDirection: "row", gap: "2rem", justifyContent: "center"}}>
                            <Elementos.BotonPrimario texto="Cancelar" icono={""} nivel="base"/>
                            <Elementos.BotonPrimario texto="Agregar" icono={""} nivel="alto"/>
                            
                        </section>
                        </section>
                <Pie />
            </main>        
        </>
    )
}