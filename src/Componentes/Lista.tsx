import './Lista.css';
import type { Producto } from '../Tipos/Producto';

interface ListaProps {
    abrirFiltro: () => void;
    productos: Producto[];
}

const Lista: React.FC<ListaProps> = ({ abrirFiltro, productos }) => {
    return (
        <section className="lista">
            {/* Componente:  Cedazo*/}
            <div className='cedazo'>
                <button onClick={abrirFiltro}>
                    <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path  fill="currentColor" d="M4.64453 15.7918V10.7437H3.14453V9.66037H7.2487V10.7437H5.72786V15.7918H4.64453ZM4.64453 9.83995V4.2085H5.72786V9.83995H4.64453ZM7.9587 7.83995V6.75662H9.4587V4.2085H10.542V6.75662H12.042V7.83995H7.9587ZM9.4587 15.7918V7.66037H10.542V15.7918H9.4587ZM14.2729 15.7918V13.2437H12.752V12.1604H16.8562V13.2437H15.3562V15.7918H14.2729ZM14.2729 12.34V4.2085H15.3562V12.34H14.2729Z"/>
                    </svg>
                    <p>Filtrar</p>
                </button>
                <button>
                    <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M9.41634 15.5832V10.6265L4.27051 4.4165H15.7288L10.583 10.6265V15.5832H9.41634Z"/>
                    </svg>
                    <p>Ordenar</p>
                </button>
            </div>
            <div>
                {productos.map((producto) => (
                    <a key={producto.id} className='tarjeta' onClick={() => window.location.href = `/producto/${producto.id}`}>
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

export default Lista;