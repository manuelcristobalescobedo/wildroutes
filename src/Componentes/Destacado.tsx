import './Destacado.css';
import type { Producto } from '../Tipos/Producto';

interface DestacadoProps {
    productos: Producto[];
}

const Destacado: React.FC<DestacadoProps> = ({ productos }) => {
    return (
        <section className="destacado">
            <h3>Pensado para tí</h3>
            <div className="tarjetas-container">
                {productos.slice(0, 6).map((producto) => (
                    <a
                        key={producto.id}
                        className="tarjeta"
                        style={{ marginBottom: "4rem" }}
                        onClick={() => (window.location.href = `/producto/${producto.id}`)}
                    >
                        <img src={producto.imagenes[0]} alt={producto.nombre} />
                        <div>★★★★★</div>
                        <p>{producto.comuna}, {producto.region}</p>
                        <h2>{producto.nombre}</h2>
                        <p>{producto.precios[0].precio} CLP por persona</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Destacado;