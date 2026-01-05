import Encabezado from "../Componentes/Componentes/Encabezado"
import Pie from "../Componentes/Componentes/Pie"
import BotonCuaternario from "../Componentes/Elementos/BotonCuaternario"
import EnlaceAlternativoSecundario from "../Componentes/Elementos/EnlaceAlternativoSecundario"
import ParrafoSecundario from "../Componentes/Elementos/ParrafoSecundario"
import TituloPrimario from "../Componentes/Elementos/TituloPrimario"
import TituloQuinario from "../Componentes/Elementos/TituloQuinario"
import Apple from "../Iconos/Apple"
import Google from "../Iconos/Google"
import Elementos, { BotonPrimario } from "../Componentes/Elementos/Indice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { Usuario } from "../Tipos/NuevosUsuarios"

type LoginForm = Pick<Usuario, "correo" | "contrasena">;

export default function LoginUsuario() {

    const [entrada, setEntrada] = useState({correo: "", contrasena: ""});

    const navigate = useNavigate();

    const iniciarSesion = async () => {
    const response = await fetch(
    `http://localhost:3001/clientes?correo=${encodeURIComponent(
      entrada.correo
    )}&contrasena=${encodeURIComponent(entrada.contrasena)}`
  );

  if (!entrada.correo || !entrada.contrasena) {
  alert("Completa todos los campos");
  return;
}

  if (!response.ok) {
    alert("Error al conectar con el servidor");
    return;
  }

  const data = await response.json();

  if (data.length === 0) {
    alert("Correo o contraseña incorrectos");
    return;
  }

  // Login OK
  navigate("/nueva-principal"); // or /gestion-productos
};

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
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "none", padding: "2rem", paddingRight: "7rem", alignItems: "center", gap: "1rem"}}>
                            <div style={{ maxWidth: 640, width: "100%", marginLeft: "auto" }}></div>
                            <section>
                                <a>
                                    <svg viewBox="0 0 149 149" xmlns="http://www.w3.org/2000/svg" height={150}>
                                        <circle cx="74.5" cy="74.5" r="74.5" fill="white"/>
                                        <path d="M134.514 74.5002C134.514 107.645 107.645 134.514 74.5 134.514C41.3552 134.514 14.4861 107.645 14.4861 74.5002C14.4861 41.3555 41.3552 14.4863 74.5 14.4863C107.645 14.4863 134.514 41.3555 134.514 74.5002Z" fill="#ECB9BD"/>
                                        <path d="M120.028 73.4657C120.028 98.0386 99.6443 117.959 74.5 117.959C49.3557 117.959 28.9722 98.0386 28.9722 73.4657C28.9722 48.8929 49.3557 28.9727 74.5 28.9727C99.6443 28.9727 120.028 48.8929 120.028 73.4657Z" fill="#D9737B"/>
                                        <path d="M64.1723 51.9668C69.096 55.1922 80.7397 63.1082 83.1838 67.3761C85.6279 71.644 86.6058 85.7683 86.9145 91.68C86.9737 92.8131 85.7714 93.5129 84.8276 92.8947C79.904 89.6693 68.2602 81.7533 65.8161 77.4854C63.3721 73.2175 62.3942 59.0932 62.0854 53.1816C62.0262 52.0485 63.2286 51.3486 64.1723 51.9668Z" fill="#ECB9BD"/>
                                    </svg>
                                </a>
                            </section>
                        

                                <section>
                                    <div >
                                        <TituloPrimario texto="WildRoutes" color="var(--color-primario-mas-alto)" />
                                        <TituloPrimario texto="Ingresa a tu cuenta" color="#000000ff" />
                                        <TituloQuinario texto="Gestiona tu próximo destino" color="#000000ff" />
                                    </div>
                                </section>

                                <section>
                                    <div>
                                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Correo:" nombre="correo" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="@" informacion="" tipo="text"/>
                                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>

                                        <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Contraseña:" nombre="contraseña" valor={entrada.contrasena} accion={(e) => setEntrada({ ...entrada, contrasena: e.target.value })} marcador="" informacion="Mínimo 8 caracteres" tipo="password"/>
                                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>
                                    </div>
                                </section>

                                <section>
                                    <div>
                                        <BotonPrimario texto="Iniciar Sesión" accion={iniciarSesion} icono="" nivel="alto"/>
                                    </div>
                                    <div>
                                        <EnlaceAlternativoSecundario texto="¿Olvidaste tu contraseña?" enlace="/recuperar-contraseña" />
                                        <ParrafoSecundario texto="¿Eres nuevo?" color="#000000ff" icono="" />
                                        <EnlaceAlternativoSecundario texto="Crear cuenta" enlace="/registro-usuario" />
                                    </div>
                                </section>

                                <section style={{display: "flex", flexDirection: "column"}}>
                                    <div >
                                        <BotonCuaternario texto="Ingresar con Google" icono={<Google />} nivel="alto" />
                                        <BotonCuaternario texto="Ingresar con Google" icono={<Apple />} nivel="alto" />
                                    </div>
                                </section>
                                </div>
                            </section>
                            <Pie />
                        </main>
                    </>
)}