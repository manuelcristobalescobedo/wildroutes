import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import TituloPrimario from "../Componentes/Elementos/TituloPrimario";
import TituloQuinario from "../Componentes/Elementos/TituloQuinario";
import Elementos, { BotonPrimario } from "../Componentes/Elementos/Indice";
import EnlaceAlternativoSecundario from "../Componentes/Elementos/EnlaceAlternativoSecundario";

export default function RegistroUsuario() {
  const navigate = useNavigate();

  const [entrada, setEntrada] = useState({
    nombre: "",
    apellido: "",
    telefono: "+56 9 ",
    rut: "",
    correo: "",
    contrasena: "",
    confirmar: "",
    publicidad: false,
    terminos: false,
  });

  const [error, setError] = useState("");

  const registrar = async () => {
    setError("");

    if (
      !entrada.nombre ||
      !entrada.apellido ||
      !entrada.correo ||
      !entrada.contrasena ||
      !entrada.confirmar
    ) {
      setError("Completa todos los campos");
      return;
    }

    if (entrada.contrasena.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    if (entrada.contrasena !== entrada.confirmar) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (!entrada.terminos) {
      setError("Debes aceptar los términos y condiciones");
      return;
    }

    try {
      await fetch("http://localhost:3001/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: entrada.nombre,
          apellido: entrada.apellido,
          telefono: entrada.telefono,
          rut: entrada.rut,
          correo: entrada.correo,
          contrasena: entrada.contrasena,
          publicidad: entrada.publicidad,
        }),
      });

      alert("Cuenta creada correctamente");
      navigate("/login");
    } catch {
      setError("Error al crear la cuenta");
    }
  };

  return (
    <main>
      <Encabezado />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
        }}
      >
        {/* Imagen */}
        <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              aspectRatio: "3 / 4",
              backgroundImage:
                "url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')",
              backgroundSize: "cover",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Formulario */}
        <div style={{ padding: "2rem", maxWidth: 480 }}>
          <TituloPrimario texto="¡Regístrate ahora!" color="#000" />
          <TituloQuinario texto="WildRoutes es lo que estás buscando." color="#7a1e2b" />

          <Elementos.EntradaTexto etiqueta="Nombre" nombre="nombre" valor={entrada.nombre}
            accion={(e) => setEntrada({ ...entrada, nombre: e.target.value })} />

          <Elementos.EntradaTexto etiqueta="Apellido" nombre="apellido" valor={entrada.apellido}
            accion={(e) => setEntrada({ ...entrada, apellido: e.target.value })} />

          <Elementos.EntradaTexto etiqueta="Celular" nombre="telefono" valor={entrada.telefono}
            accion={(e) => setEntrada({ ...entrada, telefono: e.target.value })} />

          <Elementos.EntradaTexto etiqueta="RUT" nombre="rut" valor={entrada.rut}
            accion={(e) => setEntrada({ ...entrada, rut: e.target.value })} />

          <Elementos.EntradaTexto etiqueta="Correo" nombre="correo" valor={entrada.correo}
            accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} />

          <Elementos.EntradaTexto etiqueta="Contraseña" nombre="contrasena" tipo="password"
            valor={entrada.contrasena}
            accion={(e) => setEntrada({ ...entrada, contrasena: e.target.value })} />

          <Elementos.EntradaTexto etiqueta="Confirmar contraseña" nombre="confirmar"tipo="password"
            valor={entrada.confirmar}
            accion={(e) => setEntrada({ ...entrada, confirmar: e.target.value })} />

          <label>
            <input
              type="checkbox"
              checked={entrada.publicidad}
              onChange={(e) =>
                setEntrada({ ...entrada, publicidad: e.target.checked })
              }
            />{" "}
            Quiero recibir publicidad
          </label>

          <label>
            <input
              type="checkbox"
              checked={entrada.terminos}
              onChange={(e) =>
                setEntrada({ ...entrada, terminos: e.target.checked })
              }
            />{" "}
            Acepto los Términos y Condiciones
          </label>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <BotonPrimario texto="Registrarse" nivel="alto" accion={registrar} />

          <EnlaceAlternativoSecundario
            texto="¿Ya tienes cuenta? Iniciar sesión"
            enlace="/login"
          />
        </div>
      </section>

      <Pie />
    </main>
  );
}
