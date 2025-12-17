import Encabezado from "../Componentes/Componentes/Encabezado"
import Pie from "../Componentes/Componentes/Pie"
import TituloPrimario from "../Componentes/Elementos/TituloPrimario"
import TituloQuinario from "../Componentes/Elementos/TituloQuinario"
import EntradaVerificacionPrimaria from "../Componentes/Elementos/EntradaVerificacionPrimaria"
import BotonTerciario from "../Componentes/Elementos/BotonTerciario"
import Aprobado from "../Iconos/Aprobado"
import EnlaceAlternativoSecundario from "../Componentes/Elementos/EnlaceAlternativoSecundario"
import ParrafoSecundario from "../Componentes/Elementos/ParrafoSecundario"
import { useState } from "react"
import Elementos from "../Componentes/Elementos/Indice"


export default function RegistroUsuario() {

     const [entrada, setEntrada] = useState({ nombre: "", apellido: "", telefono: "+56 9 ", rut: "", correo: "", contrasena: "",  confirmar: "", mensaje: "", });

    return(
        <>
            <main>
                <Encabezado/>
            <section style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",    // left = image, right = content
                minHeight: "100vh",
                alignItems: "stretch"
            }}>
                {/* Imagen */}
                <div style={{ display: "flex", alignContent: "center", justifyContent: "center", padding: "2rem", paddingLeft: "7rem"}}>
                    <div style={{
                        width: "100%",
                        maxWidth: "520px",
                        aspectRatio: "3 / 4",           
                        backgroundImage: "url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "20px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    }} />
                </div>

                {/* Contenido */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem", boxSizing: "border-box", paddingRight: "7rem" }}>
                    <div style={{ maxWidth: 640, width: "100%", marginLeft: "auto" }}>
                        <TituloPrimario texto="¡Regístrate ahora!" icono="" color="#000000ff" />
                        <TituloQuinario texto="Wildroutes es lo que estas buscando" icono="" color="var(--color-primario-mas-alto)" />

                        <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px", marginTop: "1rem" }}>
                            <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Nombre:" nombre="nombre" valor={entrada.nombre} accion={(e) => setEntrada({ ...entrada, nombre: e.target.value })} marcador="Usa primer nombre" informacion="" tipo="text"/>
                            <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Apellido:" nombre="apellido" valor={entrada.apellido} accion={(e) => setEntrada({ ...entrada, apellido: e.target.value })} marcador="Usa primer apellido" informacion="" tipo="text"/>
                            <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Celular:" nombre="telefono" valor={entrada.telefono} accion={(e) => setEntrada({ ...entrada, telefono: e.target.value })} marcador="ingresa tu numero de celular" informacion="" tipo="text"/>
                            <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="RUT:" nombre="rut" valor={entrada.rut} accion={(e) => setEntrada({ ...entrada, rut: e.target.value })} marcador="12345678-9" informacion="" tipo="text"/>
                            <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Correo:" nombre="correo" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="@" informacion="" tipo="text"/>
                            <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Contraseña:" nombre="contraseña" valor={entrada.contrasena} accion={(e) => setEntrada({ ...entrada, contrasena: e.target.value })} marcador="" informacion="Mínimo 8 caracteres" tipo="password"/>
                            <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Confirmar contraseña:" nombre="confirmar scontraseña" valor={entrada.confirmar} accion={(e) => setEntrada({ ...entrada, confirmar: e.target.value })} marcador="" informacion="Mínimo 8 caracteres" tipo="password"/>
                        </section>

                        <div >
                            <section style={{display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "2rem" }}>
                                <EntradaVerificacionPrimaria texto="Quiero recibir publicidad de WildRoutes en mi correo"/>
                                <EntradaVerificacionPrimaria texto="Accepto los Términos y Condiciones de WildRoutes para crear mi cuenta"/>
                            </section>

                            <section style={{ paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                                <BotonTerciario texto="Registrarse" icono={<Aprobado />} nivel="alto"/>
                                <div style={{display: "flex", flexDirection: "row", gap: "0.5rem", alignItems: "center", paddingTop: "1rem"}}>
                                    <ParrafoSecundario texto="¿Ya tienes una cuenta?" />
                                    <EnlaceAlternativoSecundario texto="Iniciar Sesión" enlace=""/>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                </section>

                <Pie />
            </main>
        </>
    )
}
