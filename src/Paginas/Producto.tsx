import './Producto.css';
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Pie from '../Componentes/Pie';
import { useDispatch } from 'react-redux';
import { agregarProducto } from '../Redux/productSlice';
import productos from '../Datos/Productos.json';
import { useParams } from "react-router-dom";
import type { Producto as TipoProducto, Fechas, Horas } from '../Tipos/Producto';
import React, { useState, useEffect } from 'react';
import Calendario from "../Componentes/Calendario.tsx";

export type ProductoEnCarro = TipoProducto & {
    cantidadEnCarro: number;
    fechaSeleccionada: string;
    horaSeleccionada: string;
};

const Producto: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [carroAbierto, setCarroAbierto] = useState(false);
    const dispatch = useDispatch();
    const [fechaSeleccionada, setFechaSeleccionada] = useState('');
    const [horaSeleccionada, setHoraSeleccionada] = useState('');
    const [cantidad, setCantidad] = useState(1);

    const producto: TipoProducto | undefined = (productos as TipoProducto[]).find(
        p => p.id === Number(id)
    );

    useEffect(() => {
        if (!producto) return;
        const maxCupos = producto.calendarizacion
            .find(fd => fd.fecha === fechaSeleccionada)?.horas
            .find(h => h.hora === horaSeleccionada)?.cupos ?? 1;
        if (cantidad > maxCupos) setCantidad(maxCupos);
    }, [fechaSeleccionada, horaSeleccionada, cantidad, producto]);

    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);

    const agregarAlCarro = () => {
        if (!fechaSeleccionada || !horaSeleccionada) {
            return alert('Selecciona fecha y hora');
        }

        const productoConExtras: ProductoEnCarro = {
            ...producto!,
            cantidadEnCarro: cantidad,
            fechaSeleccionada,
            horaSeleccionada
        };

        dispatch(agregarProducto(productoConExtras));
        abrirCarro();
    };

    if (!producto) return <p>Producto no encontrado</p>;

    const [fecha, setFecha] = useState("");

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro}/>
            <section className='presentacion'>
                <div>
                    <h1>{producto.nombre}</h1>
                    <p>{producto.comuna}, {producto.region}</p>
                    <div>
                        <a>{producto.categorias[0]}</a>
                        <a>{producto.categorias[1]}</a>
                        <a>{producto.categorias[2]}</a>
                    </div>
                </div>
            </section>
            <section className='galeria'>
                <div>
                    <div>
                        <img src={producto.imagenes[0]}/>
                    </div>
                    <div>
                        <img src={producto.imagenes[1]}/>
                    </div>
                    <div>
                        <img src={producto.imagenes[2]}/>
                    </div>
                </div>
            </section>
            <section className='detalles'>
                <div>
                    <div>
                        <p>{producto.descripcion}</p>
                        <div>
                            <div>
                                <img src={producto.fotografia}/>
                            </div>
                            <h4>{producto.anunciante}</h4>
                        </div>
                    </div>
                    <div>
                        <h2>{producto.calendarizacion[0].horas[0].segmentos.adulto.precio} CLP por adulto</h2>
                        <p>{producto.calendarizacion[0].horas[0].segmentos.mayor.precio} CLP por adulto mayor</p>
                        <p>{producto.calendarizacion[0].horas[0].segmentos.nino.precio} CLP por niña o niño</p>
                    </div>
                </div>
            </section>
            
            <section className="resenas">
                <div>
                    {producto.resenas.map((resena, index) => (
                        <div key={index} className="resena">
                            <div>
                                <div>
                                    {[...Array(resena.estrellas)].map((_, i) => (
                                        <svg width="inherit" height="inherit" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M4.83952 14.894L6.41806 9.77717L2.29785 6.41655H7.36681L8.99973 1.44238L10.6326 6.41655H15.7016L11.5814 9.77717L13.1599 14.894L8.99973 11.737L4.83952 14.894Z"/>
                                        </svg>
                                    ))}
                                </div>
                                <p>{resena.comentario}</p>
                            </div>
                            <div>
                                <div>
                                    <img src={resena.perfil}/>
                                </div>
                                <p>{resena.usuario}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='opciones'>
                <div>
                    <Calendario onChange={setFecha}/>
                    <div>
                        {fecha && <p>Fecha seleccionada: {fecha}</p>}
                        <select value={fechaSeleccionada} onChange={e => {setFechaSeleccionada(e.target.value); setHoraSeleccionada('');}}>
                            <option value="">Selecciona una fecha</option>
                            {producto.calendarizacion.map((fd: Fechas) => (
                                <option key={fd.fecha} value={fd.fecha}>{fd.fecha}</option>
                            ))}
                        </select>
                        <select value={horaSeleccionada} onChange={e => setHoraSeleccionada(e.target.value)} disabled={!fechaSeleccionada}>
                            <option value="">Selecciona una hora</option>
                            {fechaSeleccionada && producto.calendarizacion
                                .find((fd: Fechas) => fd.fecha === fechaSeleccionada)?.horas.map((horaObj: Horas) => (
                                    <option key={horaObj.hora} value={horaObj.hora}>
                                        {horaObj.hora} (Cupos: {horaObj.cupos})
                                    </option>
                                ))
                            }
                        </select>
                        <input type="number" min={1} max={horaSeleccionada ? producto.calendarizacion .find(fd => fd.fecha === fechaSeleccionada)?.horas .find(h => h.hora === horaSeleccionada)?.cupos ?? 1 : 1} value={cantidad} onChange={e => setCantidad(Number(e.target.value))}/>
                        <button onClick={agregarAlCarro}>Agregar al carro</button>
                    </div>
                </div>
            </section>

            <section className='importante'>
                <div>
                    <div>
                        <h5>Incluye</h5>
                        <p>{producto.incluye}</p>
                    </div>
                    <div>
                        <h5>No incluye</h5>
                        <p>{producto.excluye}</p>
                    </div>
                    <div>
                        <h5>Información</h5>
                        <p>{producto.informacion}</p>
                    </div>
                    <div>
                        <h5>Cancelación</h5>
                        <p>{producto.cancelacion}</p>
                    </div>
                </div>
            </section>
    
            <Pie />
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro}/>
        </div>
    );
};

export default Producto;

// Junto con productSlice.ts, construir la estructura de este archivo resultó ridículamente desafiante. Nuestras propuestas de interfaces que nos permitieran agregar un servicio con un número mínimo y máximo de cupos, asociados a un número de horarios que (a su vez) están asociados a un número de días se volvieron exponencialmente más enredadas a medida que nos alejábamos de los ejemplos que vimos en clase. Nos obligó a rehacer muchos componentes y funciones. Necesitamos múltiples conversaciones con ChatGPT, a lo largo de una cantidad vergonzosa de horas, para llegar a una solución lo suficientemente básica para que la entendiéramos y lo suficientemente efectiva para cubrir las bases necesarias del flujo de usuario.