import React, { useState } from "react";

interface FiltrosProps {
    filtros: {
        ubicacion: string;
        fecha: string;
        personas: string;
        categoria: string;
    };
    onFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onClearFilters: () => void;
    onApplyFilters: () => void;
}

export default function Filtros({ filtros, onFilterChange, onClearFilters, onApplyFilters }: FiltrosProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
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

      {/* OVERLAY (only visible when open) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: "0",
            background: "rgba(0, 0, 0, 0.4)", // translucent dark overlay
            zIndex: "10",
          }}
        />
      )}

      {/* FILTER PANEL */}
      <aside
        style={{
          position: "fixed",
          top: "0",
          right: isOpen ? "0" : "-450px",
          width: "400px",
          height: "100vh",
          background: "darkblue",
          padding: "1.5rem",
          boxShadow: isOpen ? "0 0 20px rgba(0,0,0,0.2)" : "none",
          transition: "right 0.4s ease",
          zIndex: isOpen ? "1001" : "20",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          overflowY: "auto",
          color: "white",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #000",
            paddingBottom: "0.5rem",
            color: "white"
          }}
        >
          <h2 style={{ fontWeight: "600", margin: "0", color: "white" }}>Filtros</h2>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "darkblue",
              color: "white",
              border: "none",
              fontSize: "0.9rem",
              cursor: "pointer",
              borderRadius: "4px",
              width: "2rem",
              height: "2rem",
              paddingRight: "1.8rem",
              paddingBottom: "1.8rem"
            }}
          >
            ✕
          </button>
        </div>

        {/* CAMPOS DE FILTRO */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "white" }}>
          {/* UBICACIÓN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontWeight: "500", color: "white" }}>Ubicación</label>
            <input
              name="ubicacion"
              type="text"
              placeholder="Buscar ciudad o región"
              value={filtros.ubicacion}
              onChange={onFilterChange}
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkblue",
                backgroundColor: "white",
              }}
            />
          </div>

          {/* FECHA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontWeight: "500", color: "white" }}>Fecha</label>
            <input
              name="fecha"
              type="date"
              value={filtros.fecha}
              onChange={onFilterChange}
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkblue",
                backgroundColor: "white",
              }}
            />
          </div>

          {/* NÚMERO DE PERSONAS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontWeight: "500", color: "white" }}>Número de personas</label>
            <input
              name="personas"
              type="number"
              min="1"
              placeholder="Ej: 2"
              value={filtros.personas}
              onChange={onFilterChange}
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkblue",
                backgroundColor: "white",
              }}
            />
          </div>

          {/* CATEGORÍA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontWeight: "500", color: "white" }}>Categoría</label>
            <select
              name="categoria"
              value={filtros.categoria}
              onChange={onFilterChange}
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkblue",
                backgroundColor: "white",
              }}
            >
              <option value="">Selecciona una categoría</option>
              <option value="Deporte aventura">Deporte aventura</option>
              <option value="Turismo cultural">Turismo cultural</option>
              <option value="Turismo escénico">Turismo escénico</option>
            </select>
          </div>
        </div>

        {/* BOTONES */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginBottom: "4rem"
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
            onClick={onClearFilters}
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
            Limpiar filtros
          </button>
        </div>
      </aside>
    </>
  );
}