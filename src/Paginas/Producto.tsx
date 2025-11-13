import './Producto.css';
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Pie from '../Componentes/Pie';
import { useDispatch } from 'react-redux';
import { agregarProducto } from '../Redux/productSlice';
import { useParams } from "react-router-dom";
import type { Producto as TipoProducto } from '../Tipos/Producto';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendario from "../Componentes/Calendario.tsx";

export type ProductoEnCarro = TipoProducto & {
    cantidadEnCarro: number;
    fechaSeleccionada: string;
};

function mapearProductoBackend(data: any): TipoProducto {
    return {
        id: data.id,
        uuid: data.uuid || "",
        nombre: data.nombre || "",
        personas: data.personas || 0,
        descripcion: data.descripcion || "",
        categoria: data.categoria || "",
        lugar: data.lugar || "",
        tourOperador: data.tourOperador || "",
        destacado: !!data.destacado,
        promocion: !!data.promocion,
        imagenes: data.imagenes || [],
        precios: data.precios || [],
        tags: data.tags || [],
        reseñas: data.reseñas || [],
        fechasDisponibles: data.fechasDisponibles || [],
    };
}

const Producto: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const [producto, setProducto] = useState<TipoProducto | null>(null);
    const [carroAbierto, setCarroAbierto] = useState(false);
    const [fechaSeleccionada, setFechaSeleccionada] = useState('');
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        async function getProducto() {
            try {
                const response = await axios.get(`http://13.218.227.241:9461/productos/2/${id}`);
                const productoMapeado = mapearProductoBackend(response.data);
                setProducto(productoMapeado);
            } catch (error) {
                console.error("Error al obtener producto:", error);
            }
        }

        if (id) getProducto();
    }, [id]);

    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);

    const agregarAlCarro = () => {
        if (!producto) return alert('Producto no encontrado');
        if (!fechaSeleccionada) return alert('Selecciona una fecha');

        const productoConExtras: ProductoEnCarro = {
            ...producto,
            cantidadEnCarro: cantidad,
            fechaSeleccionada,
        };

        dispatch(agregarProducto(productoConExtras));
        abrirCarro();
    };

    if (!producto) return <p>Cargando producto...</p>;

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro} />

            <section className='presentacion'>
                <div>
                    <h1>{producto.nombre}</h1>
                    <p>{producto.comuna}, {producto.region}</p>
                    <div>
                        <a>{producto.categoria}</a>
                        {producto.tags?.map((tag, i) => (
                            <a key={i}>{tag}</a>
                        ))}
                    </div>
                </div>
            </section>

            <section className='galeria'>
                <div>
                    {producto.imagenes.map((img, i) => (
                        <div key={i}>
                            <img src={img} alt={producto.nombre} />
                        </div>
                    ))}
                </div>
            </section>

            <section className='detalles'>
                <div>
                    <div>
                        <p>{producto.descripcion}</p>
                        <div>
                            <div>
                                {producto.fotografia && (
                                    <img src={producto.fotografia} alt={producto.anunciante} />
                                )}
                            </div>
                            <h4>{producto.anunciante}</h4>
                        </div>
                    </div>
                    <div>
                        {producto.precios.map((precio, i) => (
                            <p key={i}>
                                {precio.precio} CLP por {precio.segmento.toLowerCase()}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <section className='resenas'>
                <div>
                    {producto.reseñas?.map((resena, index) => (
                        <div key={index} className="resena">
                            <p>{resena}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='opciones'>
                <div>
                    <Calendario onChange={setFechaSeleccionada} />
                    <div>
                        {fechaSeleccionada && (
                            <p>Fecha seleccionada: {fechaSeleccionada}</p>
                        )}
                        <select
                            value={fechaSeleccionada}
                            onChange={e => setFechaSeleccionada(e.target.value)}
                        >
                            <option value="">Selecciona una fecha</option>
                            {producto.fechasDisponibles?.map((fecha, i) => (
                                <option key={i} value={fecha}>{fecha}</option>
                            ))}
                        </select>

                        <input
                            type="number"
                            min={1}
                            value={cantidad}
                            onChange={e => setCantidad(Number(e.target.value))}
                        />
                        <button onClick={agregarAlCarro}>Agregar al carro</button>
                    </div>
                </div>
            </section>

            <section className='importante'>
                <div>
                    <div>
                        <h5>Incluye</h5>
                        <p>Información disponible próximamente</p>
                    </div>
                    <div>
                        <h5>No incluye</h5>
                        <p>Información disponible próximamente</p>
                    </div>
                    <div>
                        <h5>Cancelación</h5>
                        <p>Información disponible próximamente</p>
                    </div>
                </div>
            </section>

            <Pie />
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
        </div>
    );
};

export default Producto;