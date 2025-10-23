import type { Producto } from "../Tipos/Producto";

interface Props {
  producto: Producto;
}

export default function Resenas({ producto }: Props) {
  return (
    <>
      <h2 style={{color: "darkblue", display: "flex", justifyContent: "center"}}>Reseñas</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
          marginBottom: "4rem",
          color: "white"
        }}
      >
        {producto.resenas.map((r, i) => (
          <div
            key={i}
            style={{
              padding: "2rem",
              background: "royalblue",
              borderRadius: "15px",
            }}
          >
            <h3>{r.comentario}</h3>
            <p>{"★".repeat(r.estrellas)}</p>
            <p>{r.usuario}</p>
          </div>
        ))}
      </div>
    </>
  );
}