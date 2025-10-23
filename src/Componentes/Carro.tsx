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
    const { listaProductos, total } = useSelector((state: RootType) => state.products);

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
                                    <p>{producto.precio} CLP</p>
                                    <p>Cantidad: {producto.cantidadEnCarro}</p>
                                </div>
                                <button onClick={() => dispatch(quitarProducto({
                                    id: producto.id,
                                    fechaSeleccionada: producto.fechaSeleccionada,
                                    horaSeleccionada: producto.horaSeleccionada
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

                    {/* Componente: Item*/}
                    {/* <div className='item'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>
                            <div>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M3.41699 17.5835V4.41684H6.5772V2.3208H7.69262V4.41684H12.3401V2.3208H13.4235V4.41684H16.5837V17.5835H3.41699ZM4.50033 16.5002H15.5003V9.25663H4.50033V16.5002Z"/>
                                    </svg>
                                    <p>1 de febrero del 2025</p>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                        <path fill="currentColor" d="m620.92-316.92 37.16-37.16L506-506.16V-720h-52v236.15l166.92 166.93ZM480.07-116q-75.21 0-141.4-28.42-66.18-28.42-115.99-78.21-49.81-49.79-78.25-116.09Q116-405.01 116-480.39q0-75.38 28.42-141.75t78.21-115.68q49.79-49.31 116.09-77.75Q405.01-844 480.39-844q75.38 0 141.75 28.66 66.38 28.66 115.48 77.79 49.1 49.13 77.74 115.55Q844-555.58 844-480.07q0 75.21-28.42 141.4-28.42 66.18-77.71 115.99-49.29 49.81-115.76 78.25Q555.64-116 480.07-116Z"/>
                                    </svg>
                                    <p>9 AM</p>
                                </span>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M10.0003 9.74333C9.28158 9.74333 8.67137 9.49249 8.1697 8.99083C7.6679 8.48902 7.41699 7.87874 7.41699 7.15999C7.41699 6.44124 7.6679 5.83104 8.1697 5.32937C8.67137 4.82756 9.28158 4.57666 10.0003 4.57666C10.7191 4.57666 11.3293 4.82756 11.831 5.32937C12.3328 5.83104 12.5837 6.44124 12.5837 7.15999C12.5837 7.87874 12.3328 8.48902 11.831 8.99083C11.3293 9.49249 10.7191 9.74333 10.0003 9.74333ZM4.41699 15.4229V13.9035C4.41699 13.6483 4.4931 13.4023 4.64533 13.1656C4.79755 12.929 5.01046 12.7241 5.28408 12.551C6.01046 12.1334 6.77539 11.8132 7.57887 11.5904C8.38234 11.3676 9.18949 11.2562 10.0003 11.2562C10.8112 11.2562 11.6183 11.3676 12.4218 11.5904C13.2253 11.8132 13.9902 12.1334 14.7166 12.551C14.9902 12.7102 15.2031 12.9116 15.3553 13.1552C15.5075 13.3988 15.5837 13.6483 15.5837 13.9035V15.4229H4.41699Z"/>
                                    </svg>
                                    <p>2</p>
                                </span>
                            </div>
                            <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                            <p>39980 CLP</p>
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M4.50033 15.5H5.42658L13.6237 7.30288L12.6974 6.37663L4.50033 14.5737V15.5ZM3.41699 16.5833V14.117L14.542 2.95996L17.0485 5.43434L5.88324 16.5833H3.41699ZM13.1524 6.84788L12.6974 6.37663L13.6237 7.30288L13.1524 6.84788Z"/>
                                </svg>
                                Editar
                            </button>
                        </div>
                        <button id='este-boton-deberia-eliminar-el-producto-del-carro-de-compras'>
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                            </svg>
                        </button>
                    </div> */}
                    
                    {/* Componente: Total*/}
                    {/* <div className='total'>
                        <h4>Detalle</h4>
                        <div className='tabla'>
                            <div>
                                <h6>Producto</h6>
                                <h6>Precio</h6>
                                <p>Caminata por las lagunas altiplánicas de Piedras Rojas</p>
                                <p>39980 CLP CLP</p>
                                <p>Caminata por las lagunas altiplánicas de Piedras Rojas</p>
                                <p>39980 CLP CLP</p>
                                <p>Caminata por las lagunas altiplánicas de Piedras Rojas</p>
                                <p>39980 CLP CLP</p>
                                <p>Caminata por las lagunas altiplánicas de Piedras Rojas</p>
                                <p>39980 CLP CLP</p>
                            </div>
                            <div>
                                <h5>Total</h5>
                                <h5>159920 CLP</h5>
                            </div>
                        </div>
                    </div> */}

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

// En parte como consecuencia de la cantidad de tiempo que pasamos trabajando en productSlice.ts, store.ts y Producto.tsx, los estilos del componente Carro.tsx no recibieron todo el cariño que merecían. Eventualmente nos justaría que los items reflejaran el diseño que trabajamos junto a nuestras compañeras y compañeros de UX/UI.