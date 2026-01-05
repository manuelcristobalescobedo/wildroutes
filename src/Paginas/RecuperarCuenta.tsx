import CirculoAprobado from "../Iconos/CirculoAprobado"
import Encabezado from "../Componentes/Componentes/Encabezado"
import Pie from "../Componentes/Componentes/Pie"
import TituloPrimario from "../Componentes/Elementos/TituloPrimario"
import TituloQuinario from "../Componentes/Elementos/TituloQuinario"
import BotonSecundario from "../Componentes/Elementos/BotonSecundario"
import FlechaIzquierda from "../Iconos/FlechaIzquierda"
import Elementos, { EnlaceAlternativoPrimario} from "../Componentes/Elementos/Indice"
import { useState } from "react"


export default function RecuperarCuenta() {

    const [entrada, setEntrada] = useState({ correo: ""});
    const [error, setError] = useState("");

    const enviarCorreo = async () => {
  setError("");

  if (!entrada.correo) {
    setError("El correo es obligatorio");
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3001/clientes?correo=${encodeURIComponent(
        entrada.correo
      )}`
    );

    const data = await response.json();

    if (data.length === 0) {
      setError("No se encontró una cuenta con ese correo");
      return;
    }

    alert("Enlace enviado (simulado)");
  } catch (err) {
    setError("Error al conectar con el servidor");
  }
};

    return(
        <>
            <main>
                <Encabezado />
                <section style={{flexDirection: "column", display: "flex", alignItems: "center", paddingTop: "2.5rem", paddingBottom: "2.5rem", marginBottom: ""}}>

                        <TituloPrimario texto="Recupera tu cuenta WildRoutes" icono="" color="#000000ff" />
                    <div style={{paddingTop: "1rem"}}>
                        <TituloQuinario texto="Ingresa tu correo para restablecer tu contraseña" icono="" color="#000000ff" />
                    </div>
                </section>
                    <div>
                        <section style={{ padding: "1rem", borderRadius: "12px", paddingLeft: "27rem", paddingRight: "27rem", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center"}}>
                            <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Correo electrónico" nombre="correo" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="ejemplo@correo.cl" informacion="" tipo="text"/>
                        <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}></p>
                        </section>

                        <section style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", paddingBottom: "2rem"}}>       
                            <BotonSecundario texto="Enviame el enlace mágico" icono={<CirculoAprobado />} nivel="alto" accion={enviarCorreo}/>
                            
                            <EnlaceAlternativoPrimario  texto="Volver atras" enlace="/nueva-principal" icono={<FlechaIzquierda />} />
                        </section>
                    </div>
                <Pie />
            </main>
        </>
    )
}