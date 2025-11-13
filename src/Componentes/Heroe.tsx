import './Heroe.css';
import type { Producto } from '../Tipos/Producto';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Heroe: React.FC = () => {
    const [productoHeroe, setProductoHeroe] = useState<Producto | null>(null);

    useEffect(() => {
        async function getProductoHeroe() {
            try {
                const response = await axios.get('http://54.242.124.35:9461/doc/productos');
                // 🔹 Toma el primer producto como destacado
                const producto = response.data[0];
                setProductoHeroe(producto);
            } catch (error) {
                console.error("Error al obtener producto destacado desde el backend:", error);
            }
        }

        getProductoHeroe();
    }, []);

    if (!productoHeroe) return null;

    return (
        <section className="heroe">
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url(${productoHeroe.imagenes[0]})`,
                }}
            >
                <h1>{productoHeroe.nombre}</h1>
                <p>{productoHeroe.lema}</p>
                <button
                    className="conocerlo"
                    onClick={() => (window.location.href = `/producto/${productoHeroe.id}`)}
                >
                    ¡Quiero conocerlo!
                </button>
            </div>
        </section>
    );
};

export default Heroe;