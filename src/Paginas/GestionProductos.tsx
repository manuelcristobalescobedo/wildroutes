import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import BotonPrimario from "../Componentes/Elementos/BotonPrimario";
import TituloPrimario from "../Componentes/Elementos/TituloPrimario";

import Actividad from "../Iconos/Actividad";
import Anadir from "../Iconos/Anadir";
import Editar from "../Iconos/Editar";
import Borrar from "../Iconos/Borrar";
import Visibilidad from "../Iconos/Visibilidad";
import "./GestionProductos.css";


interface ActividadItem {
  id: string;
  nombre: string;
  descripcion: string;
}

export default function GestionProductos() {
  const navigate = useNavigate();
  const [actividades, setActividades] = useState<ActividadItem[]>([]);

  useEffect(() => {
    const cargarActividades = async () => {
      const response = await fetch("http://localhost:3001/actividades");
      const data: ActividadItem[] = await response.json();
      setActividades(data);
    };

    cargarActividades();
  }, []);

  const eliminarActividad = async (id: string) => {
    await fetch(`http://localhost:3001/actividades/${id}`, {
      method: "DELETE"
    });

    setActividades(prev =>
      prev.filter(actividad => actividad.id !== id)
    );
  };

  return (
    <main>
      <Encabezado />

      {/* Header */}
      <section className="header">
        <div className="header-dos">
        <TituloPrimario
          texto="Mis Actividades"
          icono={<Actividad />}
          color="#000000ff"
        />
        </div>
        <BotonPrimario
          texto="Nueva Actividad"
          icono={<Anadir />}
          nivel="alto"
          accion={() => navigate("/agregar-actividad")}
        />
      </section>

      {/* Contenido */}
      <section style={{ padding: "0 21.5rem 3rem" }}>
        {actividades.length === 0 ? (
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              padding: "3rem",
              color: "#666"
            }}
          >
            <p>No hay actividades registradas</p>
          </section>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#eceaf7" }}>
                <th style={thStyle}>N°</th>
                <th style={thStyle}>DESCRIPCIÓN</th>
                <th style={thStyle}>ACCIONES</th>
              </tr>
            </thead>

            <tbody>
              {actividades.map((actividad, index) => (
                <tr key={actividad.id} style={{ background: "#f5f4fb" }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{actividad.nombre}</td>

                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    <div style={accionesStyle}>
                      <button
                        onClick={() =>
                          navigate(`/editar-actividad/${actividad.id}`)
                        }
                        style={iconButtonStyle}
                        aria-label="Editar actividad"
                      >
                        <Editar width={20} height={20} />
                      </button>

                      <button
                        onClick={() => eliminarActividad(actividad.id)}
                        style={iconButtonStyle}
                        aria-label="Eliminar actividad"
                      >
                        <Borrar width={20} height={20} />
                      </button>

                      <button
                        onClick={() =>
                          navigate(`/ver-actividad/${actividad.id}`)
                        }
                        style={iconButtonStyle}
                        aria-label="Ver actividad"
                      >
                        <Visibilidad width={20} height={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <Pie />
    </main>
  );
}

/* ================== estilos ================== */

const thStyle = {
  padding: "0.75rem",
  textAlign: "left" as const,
  fontWeight: 600
};

const tdStyle = {
  padding: "0.75rem"
};

const accionesStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem"
};

const iconButtonStyle = {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  color: "#4a4a4a"
};
