import React from "react";
import type { Producto } from "../Tipos/Producto";

interface ReseñasProps {
    producto: Producto;
}

const Reseñas: React.FC<ReseñasProps> = ({ producto }) => {
    return (
        <section className="reseñas">
            <h3>Reseñas</h3>
            {producto.reseñas && producto.reseñas.length > 0 ? (
                <ul>
                    {producto.reseñas.map((texto, i) => (
                        <li key={i}>
                            <p>“{texto}”</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay reseñas disponibles para este producto.</p>
            )}
        </section>
    );
};

export default Reseñas;
