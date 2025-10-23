import './Heroe.css';
import type { Producto } from '../Tipos/Producto';
import productosJson from '../Datos/Productos.json'

const productos: Producto[] = productosJson;

const Heroe: React.FC = () => {
    return (
        <section className="heroe">
            {productos.slice(0, 1).map((producto) => (
                <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url(${producto.imagenes[0]})`,}}>
                    <h1>{producto.nombre}</h1>
                    <p>{producto.lema}</p>
                    <button className='conocerlo' onClick={() => window.location.href = `/producto/${producto.id}`}>¡Quiero conocerlo!</button>
                </div>
            ))}
        </section>
    );
};

export default Heroe;