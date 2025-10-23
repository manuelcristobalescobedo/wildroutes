import './Destacado.css';
import type { Producto } from '../Tipos/Producto';
import productosJson from '../Datos/Productos.json'

const productos: Producto[] = productosJson;

const Destacado: React.FC = () => {
    return (
        <section className="destacado">
            <h3>Pensado para tí</h3>
            <div className="tarjetas-container">
                {productos.slice(0, 6).map((producto) => (
                    <a style={{marginBottom: "4rem"}}key={producto.id} className='tarjeta' onClick={() => window.location.href = `/producto/${producto.id}`}>
                        <img src={producto.imagenes[0]} alt={producto.nombre}/>
                        <div>★★★★★</div>
                        <p>{producto.comuna}, {producto.region}</p>
                        <h2>{producto.nombre}</h2>
                        <p>{producto.precio} CLP por persona</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Destacado;