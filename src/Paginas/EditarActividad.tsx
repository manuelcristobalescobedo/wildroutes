import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import TituloPrimario from "../Componentes/Elementos/TituloPrimario";
import Elementos from "../Componentes/Elementos/Indice";
import ActividadIcon from "../Iconos/Actividad";

import type { Servicio } from "../Tipos/Servicio";

import "./EditarActividad.css";

type FormEvent =
  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export default function EditarActividad() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [actividad, setActividad] = useState<Servicio | null>(null);

  /* ================== cargar actividad ================== */
  useEffect(() => {
    if (!id) return;

    const cargarActividad = async () => {
      const response = await fetch(
        `http://localhost:3001/actividades/${id}`
      );

      if (!response.ok) {
        navigate("/gestion-productos");
        return;
      }

      const data: Servicio = await response.json();
      setActividad(data);
    };

    cargarActividad();
  }, [id, navigate]);

  /* ================== handlers ================== */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setActividad(prev =>
      prev ? { ...prev, [name]: value } : prev
    );
  };

  const handleUbicacionChange = (e: FormEvent) => {
  const { name, value } = e.target;

  setActividad(prev =>
    prev
      ? {
          ...prev,
          ubicacion: {
            ...prev.ubicacion,
            [name]: value
          }
        }
      : prev
  );
};

const handleInformacionChange = (e: FormEvent) => {
  const { name, value } = e.target;

  setActividad(prev =>
    prev
      ? {
          ...prev,
          informacion: {
            ...prev.informacion,
            [name]: value
          }
        }
      : prev
  );
};


  const guardarCambios = async () => {
    if (!id || !actividad) return;

    await fetch(`http://localhost:3001/actividades/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(actividad)
    });

    navigate("/gestion-productos");
  };

  /* ================== loading guard ================== */
  if (!actividad) return null;

  /* ================== UI ================== */
  return (
    <main>
      <Encabezado />

      <section className="seccion-encabezado">
        <TituloPrimario
          texto="Editar Actividad"
          icono={<ActividadIcon />}
          color="#000000ff"
        />
      </section>

      <section className="editar-actividad-container">
        <Elementos.EntradaTexto
          etiqueta="Nombre de actividad"
          nombre="titulo"
          valor={actividad.titulo}
          accion={handleChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Descripción"
          nombre="descripcion"
          valor={actividad.descripcion}
          accion={handleChange}
        />

        <Elementos.EntradaTexto
          etiqueta="¿En qué consiste?"
          nombre="consiste"
          valor={actividad.consiste}
          accion={handleChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Precio"
          nombre="precio"
          valor={actividad.precio}
          accion={handleChange}
        />

        <Elementos.EntradaSeleccion
          etiqueta="Zona"
          nombre="zona"
          valor={actividad.zona}
          accion={handleChange}
          opciones={[
            { valor: "", texto: "Selecciona una opción" },
            { valor: "Zona Norte", texto: "Zona Norte" },
            { valor: "Zona Centro", texto: "Zona Centro" },
            { valor: "Zona Sur", texto: "Zona Sur" }
          ]}
        />

        <Elementos.EntradaTexto
          etiqueta="Ideal para"
          nombre="ideal"
          valor={actividad.ideal}
          accion={handleChange}
        />

        {/* ================== Ubicación ================== */}

        <Elementos.EntradaSeleccion
          etiqueta="Región"
          nombre="region"
          valor={actividad.ubicacion.region}
          accion={handleUbicacionChange}
          opciones={[
            { valor: "", texto: "Selecciona una región" },
            { valor: "Atacama", texto: "Atacama" },
            { valor: "Valparaíso", texto: "Valparaíso" },
            { valor: "Los Lagos", texto: "Los Lagos" }
          ]}
        />

        <Elementos.EntradaTexto
          etiqueta="Comuna"
          nombre="comuna"
          valor={actividad.ubicacion.comuna}
          accion={handleUbicacionChange}
        />

        {/* ================== Información ================== */}

        <Elementos.EntradaTexto
          etiqueta="Duración"
          nombre="duracion"
          valor={actividad.informacion.duracion}
          accion={handleInformacionChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Hora de inicio"
          nombre="inicio"
          valor={actividad.informacion.inicio}
          accion={handleInformacionChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Edad mínima"
          nombre="edad"
          valor={actividad.informacion.edad}
          accion={handleInformacionChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Idiomas"
          nombre="idiomas"
          valor={actividad.informacion.idiomas}
          accion={handleInformacionChange}
        />

        <Elementos.EntradaTexto
          etiqueta="Requisitos"
          nombre="requisitos"
          valor={actividad.informacion.requisitos}
          accion={handleInformacionChange}
        />

        {/* ================== Botones ================== */}
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
