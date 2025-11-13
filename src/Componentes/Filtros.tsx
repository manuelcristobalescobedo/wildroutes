import React, { useState } from "react";

interface FiltrosProps {
  filtros: {
    precio: string[];
    ubicacion: string;
    fecha: string;
    personas: string;
    categoria: string;
    cupos: string[];
    checked: string[];
  };
  enCambioDeFiltro: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onClearFilters: () => void;
  onApplyFilters: () => void;
}

export default function Filtros({
  filtros,
  enCambioDeFiltro,
  onClearFilters,
  onApplyFilters,
}: FiltrosProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Open Filters Button */}
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem 0" }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            margin: "1rem",
            padding: "0.6rem 1.2rem",
            background: "darkblue",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Abrir filtros
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: "0",
            background: "rgba(0, 0, 0, 0.4)",
            zIndex: 10,
          }}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-700px",
          width: "600px",
          height: "100vh",
          background: "aliceblue",
          padding: "1.5rem",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          transition: "right 0.4s ease",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          overflowY: "auto",
          color: "black",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #000",
            paddingBottom: "0.5rem",
          }}
        >
          <h2 style={{ fontWeight: "600", margin: "0" }}>Filtros</h2>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              color: "black",
              border: "none",
              fontSize: "1.4rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* filtros de precio */}
        <h4>Rango de precios</h4>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <label>
            <input
              type="checkbox"
              name="precio"
              value="bajo"
              checked={filtros.precio.includes("bajo")}
              onChange={enCambioDeFiltro}
            />
            Hasta 24.990
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="precio"
              value="medio"
              checked={filtros.precio.includes("medio")}
              onChange={enCambioDeFiltro}
            />
            Desde 25.000 hasta 49.990
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="precio"
              value="alto"
              checked={filtros.precio.includes("alto")}
              onChange={enCambioDeFiltro}
            />
            Desde 50.000
          </label>
        </div>

           {/* Cupos disponibles */}
          <h4>Cupos disponibles</h4>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <label >
              <input type="checkbox" 
                      name="cupos" value="bajo" 
                      checked={filtros.cupos.includes("bajo")} 
                      onChange={enCambioDeFiltro}/>
                                Menos de 9
            </label>
            <label>
              <input type="checkbox" 
                      name="cupos" 
                      value="medio" 
                      checked={filtros.cupos.includes("medio")} 
                      onChange={enCambioDeFiltro}/>
                                Entre 10 y 19
            </label>
            <label>
              <input type="checkbox" 
                      name="cupos" 
                      value="alto" 
                      checked={filtros.cupos.includes("alto")} 
                      onChange={enCambioDeFiltro}/>
                                Más de 20
           </label>
        </div>        

          {/* Categoría */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginTop: "1rem" }}>
            <label style={{ fontWeight: "500" }}>Categoría</label>
            <select
              name="categoria"
              value={filtros.categoria}
              onChange={enCambioDeFiltro}
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkblue",
                backgroundColor: "white",
                marginTop: "1rem",
              }}
            >
              <option value="">Selecciona una categoría</option>
              <option value="Deporte aventura">Deporte aventura</option>
              <option value="Turismo cultural">Turismo cultural</option>
              <option value="Turismo escénico">Turismo escénico</option>
            </select>
          </div>
        

        {/* Buttons */}
        <div className="Aplicar-filtros"
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginBottom: "4rem",
          }}
        >
          <button 
            onClick={() => {
              onApplyFilters();
              setIsOpen(false);
            }}
            style={{
              padding: "0.6rem 1.2rem",
              background: "royalblue",
              color: "white",
              border: "2px solid darkblue",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Aplicar filtros
          </button>

          <button
            className="Limpiar-filtros"
            onClick={onClearFilters}
            style={{
              padding: "0.6rem 1.2rem",
              background: "lightgray",
              color: "black",
              border: "2px solid darkblue",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Limpiar filtros
          </button>
        </div>
      </aside>
    </>
  );
}
