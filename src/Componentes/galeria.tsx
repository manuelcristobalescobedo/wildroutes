import type { Producto } from "../Tipos/Producto";

interface Props {
  producto: Producto;
}

export default function Galeria({ producto }: Props) {
  if (!producto) return <div>Producto no disponible</div>;
  if (!producto.imagenes || producto.imagenes.length === 0)
    return <div>No hay imágenes disponibles</div>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto auto",
        gap: "0.5rem",
        marginBottom: "4rem",
      }}
    >
      {producto.imagenes.map((img: string, i: number) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${img})`,
            width: "100%",
            aspectRatio: "4 / 3",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            gridColumn: i === 0 ? "1 / 3" : undefined,
            gridRow: i === 0 ? "1 / 3" : undefined,
            borderRadius: "6px",
          }}
        />
      ))}
    </div>
  );
}
