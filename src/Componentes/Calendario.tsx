//lo estaremos usando...


export default function DisponibilidadCalendario() {

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "2rem",
        backgroundColor: "royalblue",
        padding: "2rem",
        color: "darkgreen",
        borderRadius: "15px",
        marginTop: "5rem",
      }}
    >
      {/* ─── CALENDARIO ───*/}
      <div className="ComponenteCalendario">
        <h3 style={{ marginBottom: "1rem", color: "white" }}>Disponibilidad</h3>

        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          {/* Enero */}
          <div>
            <h4 style={{ margin: "0 0 1rem", color: "white" }}>Enero de 2026</h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "0.5rem",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              {[
                "29",
                "30",
                "31",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
              ].map((day, i) => (
                <a
                  key={i}
                  href="#"
                  style={{color: "darkblue"  
                  }}
                >
                  {day}
                </a>
              ))}
            </div>
          </div>

          {/* Febrero */}
          <div>
            <h4 style={{ margin: "0 0 1rem", color: "white"}}>Febrero de 2026</h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "0.5rem",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              {[
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
              ].map((day, i) => (
                <a
                  key={i}
                  href="#"
                  style={{color: "darkblue"
                  }}
                >
                  {day}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── ACTIVIDAD ───────────────────────────── */}
      <div className="ComponenteActividad">
        <h3 style={{ marginBottom: "1rem", color: "white" }}>Actividad ideal para</h3>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {["Familia", "Amigos", "Solo", "Pareja"].map((tipo, i) => (
            <a
              key={i}
              href="#"
              style={{
                padding: "0.25rem 0.75rem",
                borderRadius: "6px",
                backgroundColor: "darkblue",
                border: "2px white solid",
                textDecoration: "none",
                color: "white",
                fontWeight: "500",
              }}
            >
              {tipo}
            </a>
          ))}
        </div>

        <button
          style={{
            display: "block",
            width: "100%",
            marginBottom: "0.5rem",
            color: "white",
            background: "darkblue",
            fontFamily: "inherit",
            fontSize: "1rem",
            borderRadius: "4px",
            padding: "0.75rem",
            cursor: "pointer",
          }}
        >
          Pagar
        </button>

        <button
          style={{
            display: "block",
            width: "100%",
            marginBottom: "0.5rem",
            color: "white",
            background: "darkblue",
            fontFamily: "inherit",
            fontSize: "1rem",
            borderRadius: "4px",
            padding: "0.75rem",
            cursor: "pointer",
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}