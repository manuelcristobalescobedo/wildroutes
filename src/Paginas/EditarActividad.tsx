import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import TituloPrimario from "../Componentes/Elementos/TituloPrimario";
import Elementos from "../Componentes/Elementos/Indice";

import ActividadIcono from "../Iconos/Actividad";

/* ================== tipos ================== */
interface ActividadForm {
  nombre: string;
  descripcion: string;
  precio: string;
  maxPersonas: string;
  minPersonas: string;
  zona: string;
  region: string;
  comuna: string;
  devolucion: string;
  reembolso: string;
  actividad: string;
  act2: string;
  act3: string;
  act4: string;
}

interface Actividad extends ActividadForm {
  id: number;
}

/* ================== componente ================== */
export default function EditarActividad() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [entrada, setEntrada] = useState<ActividadForm>({
    nombre: "",
    descripcion: "",
    precio: "",
    maxPersonas: "",
    minPersonas: "",
    zona: "",
    region: "",
    comuna: "",
    devolucion: "",
    reembolso: "",
    actividad: "",
    act2: "",
    act3: "",
    act4: ""
  });

  /* ================== cargar actividad ================== */
  useEffect(() => {
    const actividades: Actividad[] = JSON.parse(
      localStorage.getItem("actividades") || "[]"
    );

    const actividadEditar = actividades.find(
      act => act.id === Number(id)
    );

    if (!actividadEditar) {
      navigate("/gestion-productos");
      return;
    }

    setEntrada({
      nombre: actividadEditar.nombre,
      descripcion: actividadEditar.descripcion,
      precio: actividadEditar.precio,
      maxPersonas: actividadEditar.maxPersonas,
      minPersonas: actividadEditar.minPersonas,
      zona: actividadEditar.zona,
      region: actividadEditar.region,
      comuna: actividadEditar.comuna,
      devolucion: actividadEditar.devolucion,
      reembolso: actividadEditar.reembolso,
      actividad: actividadEditar.actividad,
      act2: actividadEditar.act2,
      act3: actividadEditar.act3,
      act4: actividadEditar.act4
    });
  }, [id, navigate]);

  /* ================== handlers ================== */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEntrada(prev => ({ ...prev, [name]: value }));
  };

  const guardarCambios = () => {
    const actividades: Actividad[] = JSON.parse(
      localStorage.getItem("actividades") || "[]"
    );

    const actualizadas = actividades.map(act =>
      act.id === Number(id)
        ? { ...act, ...entrada }
        : act
    );

    localStorage.setItem("actividades", JSON.stringify(actualizadas));
    navigate("/gestion-productos");
  };

  /* ================== UI ================== */
  return (
    <main>
      <Encabezado />

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem"
        }}
      >
        <TituloPrimario
          texto="Editar Actividad"
          icono={<ActividadIcono />}
          color="#000000ff"
        />
      </section>

      <section>
        <Elementos.EntradaTexto
          etiqueta="Nombre de actividad"
          nombre="nombre"
          valor={entrada.nombre}
          accion={handleChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Descripción"
          nombre="descripcion"
          valor={entrada.descripcion}
          accion={handleChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Precio"
          nombre="precio"
          valor={entrada.precio}
          accion={handleChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Máx personas"
          nombre="maxPersonas"
          valor={entrada.maxPersonas}
          accion={handleChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Mín personas"
          nombre="minPersonas"
          valor={entrada.minPersonas}
          accion={handleChange}
        />

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem"
          }}
        >
          <Elementos.BotonPrimario
            texto="Cancelar"
            nivel="base"
            accion={() => navigate(-1)}
          />

          <Elementos.BotonPrimario
            texto="Guardar cambios"
            nivel="alto"
            accion={guardarCambios}
          />
        </section>
      </section>

      <Pie />
    </main>
  );
}
