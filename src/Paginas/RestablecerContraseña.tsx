import Encabezado from "../Componentes/Componentes/Encabezado"
import TituloPrimario from "../Componentes/Elementos/TituloPrimario"
import TituloQuinario from "../Componentes/Elementos/TituloQuinario"
import Pie from "../Componentes/Componentes/Pie"
import FlechaIzquierda from "../Iconos/FlechaIzquierda"
import BotonPrimario from "../Componentes/Elementos/BotonPrimario"
import EnlaceAlternativoPrimario from "../Componentes/Elementos/EnlaceAlternativoPrimario"
import { useState } from "react"
import Elementos from "../Componentes/Elementos/Indice"



export default function RestablecerContrasena() {

         const [entrada, setEntrada] = useState({ nombre: "", apellido: "", telefono: "+56 9 ", rut: "", correo: "", contrasena: "",  confirmar: "", mensaje: "", });

    return(
        <>
            <main>
                <Encabezado/>
                <section>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2.5rem", paddingBottom: "2.5rem", gap: "1rem"}}>
                        <TituloPrimario texto="Restablece tu contraseña" icono="" color="#000000ff" />
                        <TituloQuinario texto="¡Estamos casi listos! " icono="" color="#000000ff" />
                        <TituloQuinario texto="Ingresa tu nueva contraseña para volver a tu cuenta" icono="" color="#000000ff" />
                    </div>
                </section>
                <div>
                    <section style={{ padding: "1rem", paddingLeft: "27rem", paddingRight: "27rem",boxSizing: 'border-box', borderRadius: "12px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Nueva Contraseña" nombre="nueva-contraseña" valor={entrada.contrasena} accion={(e) => setEntrada({ ...entrada, contrasena: e.target.value })} informacion="Usa como mínimo un símbolo" tipo="password"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Confirma contraseña" nombre="confirmar" valor={entrada.confirmar} accion={(e) => setEntrada({ ...entrada, confirmar: e.target.value })} informacion="" tipo="password"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>
                    </section>
                </div>
                <div>
                    <section style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", paddingBottom: "2rem"}}>
                        <BotonPrimario texto="Aceptar" icono="" nivel="alto"/>

                        <EnlaceAlternativoPrimario texto="Volver atrás" icono={<FlechaIzquierda/>} enlace="/nueva-principal"/>
                    </section>
                </div>
                <Pie/>  
            </main>
        </>
    )
}