import './Lista.css';
import type { Producto } from '../Tipos/Producto';

interface ListaProps {
    productos: Producto[];
    abrirFiltro?: () => void;
}

const Lista: React.FC<ListaProps> = ({ productos, abrirFiltro }) => {
    return (
        <section className="lista">
            {abrirFiltro && (
                <div className="cedazo">
                    <button onClick={abrirFiltro}>
                        <svg
                            width="inherit"
                            height="inherit"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M4.64453 15.7918V10.7437H3.14453V9.66037H7.2487V10.7437H5.72786V15.7918H4.64453ZM4.64453 9.83995V4.2085H5.72786V9.83995H4.64453ZM7.9587 7.83995V6.75662H9.4587V4.2085H10.542V6.75662H12.042V7.83995H7.9587ZM9.4587 15.7918V7.66037H10.542V15.7918H9.4587ZM14.2729 15.7918V13.2437H12.752V12.1604H16.8562V13.2437H15.3562V15.7918H14.2729ZM14.2729 12.34V4.2085H15.3562V12.34H14.2729Z"
                            />
                        </svg>
                        <p>Filtrar</p>
                    </button>
                </div>
            )}

            <div className="tarjetas-container">
                {productos.map((producto) => {
                    // Simulación de "promedio de estrellas"
                    // Si reseñas es un string[], usamos su largo como referencia
                    const promedioEstrellas =
                        producto.reseñas && producto.reseñas.length > 0
                            ? Math.min(producto.reseñas.length, 5) // máximo 5 estrellas
                            : 5;

                    return (
                        <a
                            key={producto.id}
                            className="tarjeta"
                            href={`/producto/${producto.id}`}
                        >
                            <img
                                src={producto.imagenes[0]}
                                alt={producto.nombre}
                            />
                            <div>
                                {'★'.repeat(promedioEstrellas)}
                            </div>
                            <p>
                                {producto.comuna}, {producto.region}
                            </p>
                            <h2>{producto.nombre}</h2>
                            <p>
                                {producto.precios?.[0]?.precio ?? '—'} CLP por persona
                            </p>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Lista;
