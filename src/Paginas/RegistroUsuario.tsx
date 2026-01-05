import { useState } from "react";
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import BotonCuaternario from "../Componentes/Elementos/BotonCuaternario";
import EnlaceAlternativoSecundario from "../Componentes/Elementos/EnlaceAlternativoSecundario";
import ParrafoSecundario from "../Componentes/Elementos/ParrafoSecundario";
import TituloPrimario from "../Componentes/Elementos/TituloPrimario";
import TituloQuinario from "../Componentes/Elementos/TituloQuinario";
import Apple from "../Iconos/Apple";
import Google from "../Iconos/Google";
import Elementos, { BotonPrimario} from "../Componentes/Elementos/Indice";
import type { Usuario } from "../Tipos/NuevosUsuarios"
import { useNavigate } from "react-router-dom";

type LoginForm = Pick<Usuario, "correo" | "contrasena">;

export default function RegistroUsuario() {
  const [entrada, setEntrada] = useState<LoginForm>({
    correo: "",
    contrasena: ""
  });

  const navigate = useNavigate();

  const crearUsuario = async () => {
  const response = await fetch("http://localhost:3001/clientes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      correo: entrada.correo,
      contrasena: entrada.contrasena
    })
  });

  if (!response.ok) {
    alert("Error al crear usuario");
    return;
  }

  navigate("/"); // or wherever makes sense
};

  return (
    <main>
      <Encabezado />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
          alignItems: "stretch"
        }}
      >
        {/* Imagen */}
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            padding: "2rem",
            paddingLeft: "7rem"
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              aspectRatio: "3 / 4",
              backgroundImage:
                "url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
            }}
          />
        </div>

        {/* Contenido */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            paddingRight: "7rem",
            alignItems: "center",
            gap: "1rem"
          }}
        >
          <section>
            <svg viewBox="0 0 149 149" xmlns="http://www.w3.org/2000/svg" height={150}>
              <circle cx="74.5" cy="74.5" r="74.5" fill="white" />
              <path
                d="M134.514 74.5002C134.514 107.645 107.645 134.514 74.5 134.514C41.3552 134.514 14.4861 107.645 14.4861 74.5002C14.4861 41.3555 41.3552 14.4863 74.5 14.4863C107.645 14.4863 134.514 41.3555 134.514 74.5002Z"
                fill="#ECB9BD"
              />
            </svg>
          </section>

          <section>
            <TituloPrimario texto="WildRoutes" color="var(--color-primario-mas-alto)" />
            <TituloPrimario texto="Ingresa a tu cuenta" color="#000000ff" />
            <TituloQuinario texto="Gestiona tu próximo destino" color="#000000ff" />
          </section>

          <section>
            <Elementos.EntradaTexto
              estilo="var(--color-neutro-mas-mas-mas-mas-alto)"
              etiqueta="Correo:"
              nombre="correo"
              valor={entrada.correo}
              accion={(e) =>
                setEntrada({ ...entrada, correo: e.target.value })
              }
              marcador="@"
              informacion=""
              tipo="text"
            />

            <Elementos.EntradaTexto
              estilo="var(--color-neutro-mas-mas-mas-mas-alto)"
              etiqueta="Contraseña:"
              nombre="contrasena"
              valor={entrada.contrasena}
              accion={(e) =>
                setEntrada({ ...entrada, contrasena: e.target.value })
              }
              marcador=""
              informacion="Mínimo 8 caracteres"
              tipo="password"
            />
          </section>

          <section>
            <BotonPrimario texto="Iniciar Sesión" accion={crearUsuario} icono="" nivel="alto"/>

            <EnlaceAlternativoSecundario
              texto="¿Olvidaste tu contraseña?"
              enlace=""
            />

            <ParrafoSecundario texto="¿Eres nuevo?" color="#000000ff" icono="" />

            <EnlaceAlternativoSecundario texto="Crear cuenta" enlace="" />
          </section>

          <section style={{ display: "flex", flexDirection: "column" }}>
            <BotonCuaternario texto="Ingresar con Google" icono={<Google />} nivel="alto" />
            <BotonCuaternario texto="Ingresar con Apple" icono={<Apple />} nivel="alto" />
          </section>
        </div>
      </section>

      <Pie />
    </main>
  );
}
