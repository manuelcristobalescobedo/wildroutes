import './Carro.css';
import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../Redux/store";
import { quitarProducto, vaciarProductos } from "../Redux/productSlice";

interface CarroProps {
    carroAbierto: boolean;
    cerrarCarro: () => void;
}

const Carro: React.FC<CarroProps> = ({ carroAbierto, cerrarCarro }) => {
    const dispatch = useDispatch();
    const { listaProductos, total } = useSelector((state: RootType) => state.productos);

    return (
        <aside className={`carro ${carroAbierto ? "abierto" : ""}`}>
            <div>
                <div className='contenido'>
                    <div>
                        <div>
                            <h3>Carro de compras</h3>
                            <button onClick={() => dispatch(vaciarProductos())}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                    <path fill="currentColor" d="m400-338.85 80-80 80 80L597.15-376l-80-80 80-80L560-573.15l-80 80-80-80L362.85-536l80 80-80 80L400-338.85ZM324.31-164q-27.31 0-45.81-18.5Q260-201 260-228.31V-696h-48v-52h172v-43.38h192V-748h172v52h-48v467.69q0 27.31-18.5 45.81Q663-164 635.69-164H324.31Z"/>
                                </svg>
                                <p>Vaciar carro</p>
                            </button>
                        </div>
                        <button className="cerrar" onClick={cerrarCarro}>
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                            </svg>
                        </button>
                    </div>

                    {listaProductos.length === 0 ? (
                        <p className="vacio">Tu carro está vacío</p>
                    ) : (
                        listaProductos.map((producto) => (
                            <div className="item" key={producto.id}>
                                <img src={producto.imagenes[0]} alt={producto.nombre} />
                                <div>
                                    <h2>{producto.nombre}</h2>
                                    <p>{producto.precios[0].precio} CLP</p>
                                    <p>Cantidad: {producto.cantidadEnCarro}</p>
                                </div>
                                <button
                                    onClick={() => dispatch(quitarProducto({
                                        id: producto.id,
                                        fechaSeleccionada: producto.fechaSeleccionada,
                                        horaSeleccionada: producto.horaSeleccionada ?? ''
                                    }))}>
                                    <svg width="20" height="20" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}

                    <div className="total">
                        <h3>Total: {total} CLP</h3>
                    </div>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                            <path fill='currentColor' d="M180.31-212Q154-212 135-231q-19-19-19-45.31v-407.38Q116-710 135-729q19-19 45.31-19h599.38q27.31 0 45.81 19 18.5 19 18.5 45.31v407.38Q844-250 825.5-231q-18.5 19-45.81 19H180.31ZM168-496.16h624v-111.68H168v111.68Z"/>
                        </svg>
                        <p>Pagar</p>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Carro;