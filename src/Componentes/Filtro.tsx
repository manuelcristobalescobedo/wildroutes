

// export default function FiltrosExtras() {

//     return(
//         <>
//              {/* Otros filtros */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//           {/* Ubicación */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
//             <label style={{ fontWeight: "500" }}>Ubicación</label>
//             <input
//               name="ubicacion"
//               type="text"
//               placeholder="Buscar ciudad o región"
//               value={filtros.ubicacion}
//               onChange={enCambioDeFiltro}
//               style={{
//                 padding: "0.5rem",
//                 borderRadius: "6px",
//                 border: "1px solid darkblue",
//                 backgroundColor: "white",
//               }}
//             />
//           </div>
        
//           {/* Fecha */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
//             <label style={{ fontWeight: "500" }}>Fecha</label>
//             <input
//               name="fecha"
//               type="date"
//               value={filtros.fecha}
//               onChange={enCambioDeFiltro}
//               style={{
//                 padding: "0.5rem",
//                 borderRadius: "6px",
//                 border: "1px solid darkblue",
//                 backgroundColor: "white",
//               }}
//             />
//           </div>

//           {/* Personas */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
//             <label style={{ fontWeight: "500" }}>Número de personas</label>
//             <input
//               name="personas"
//               type="number"
//               min="1"
//               placeholder="Ej: 2"
//               value={filtros.personas}
//               onChange={enCambioDeFiltro}
//               style={{
//                 padding: "0.5rem",
//                 borderRadius: "6px",
//                 border: "1px solid darkblue",
//                 backgroundColor: "white",
//               }}
//             />
//           </div>
//         </>
//     )
// }