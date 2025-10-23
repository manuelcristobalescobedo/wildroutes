import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Pie from '../Componentes/Pie';
import { useDispatch } from 'react-redux';
import { agregarProducto } from '../Redux/productSlice';
import productos from '../Datos/Productos.json';
import { useParams } from "react-router-dom";
import type { Producto as TipoProducto, Fechas, Horas } from '../Tipos/Producto';
import React, { useState, useEffect } from 'react';

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

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro} />

            <main style={{ padding: '10rem 2rem', textAlign: 'center' }}>
                <h1>{producto.nombre}</h1>
                <h2>{producto.lema}</h2>
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Comuna: {producto.comuna} | Región: {producto.region}</p>
                <p>Categorías: {producto.categorias.join(', ')}</p>
                <p>Incluye: {producto.incluye}</p>
                <p>Excluye: {producto.excluye}</p>
                <p>Información: {producto.informacion}</p>
                <p>Cancelación: {producto.cancelacion}</p>
                <div style={{ margin: '2rem 0' }}>
                    {producto.imagenes.map((img, i) => (
                        <img key={i} src={img} alt={producto.nombre} style={{ maxWidth: '300px', margin: '1rem' }} />
                    ))}
                </div>

                <select value={fechaSeleccionada} onChange={e => {
                    setFechaSeleccionada(e.target.value);
                    setHoraSeleccionada('');
                }}>
                    <option value="">Selecciona una fecha</option>
                    {producto.calendarizacion.map((fd: Fechas) => (
                        <option key={fd.fecha} value={fd.fecha}>{fd.fecha}</option>
                    ))}
                </select>

                <select 
                    value={horaSeleccionada} 
                    onChange={e => setHoraSeleccionada(e.target.value)} 
                    disabled={!fechaSeleccionada}
                >
                    <option value="">Selecciona una hora</option>
                    {fechaSeleccionada && producto.calendarizacion
                        .find((fd: Fechas) => fd.fecha === fechaSeleccionada)?.horas.map((horaObj: Horas) => (
                            <option key={horaObj.hora} value={horaObj.hora}>
                                {horaObj.hora} (Cupos: {horaObj.cupos})
                            </option>
                        ))
                    }
                </select>

                <input 
                    type="number" 
                    min={1} 
                    max={horaSeleccionada
                        ? producto.calendarizacion
                            .find(fd => fd.fecha === fechaSeleccionada)?.horas
                            .find(h => h.hora === horaSeleccionada)?.cupos ?? 1
                        : 1
                    }
                    value={cantidad} 
                    onChange={e => setCantidad(Number(e.target.value))}
                />

                <button 
                    style={{ padding: '0.5rem 1rem', marginTop: '1rem', cursor: 'pointer' }}
                    onClick={agregarAlCarro}
                >
                    Agregar al carro
                </button>
            </main>

            <Pie />
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
        </div>
    );
};

export default Producto;

// Junto con productSlice.ts, construir la estructura de este archivo resultó ridículamente desafiante. Nuestras propuestas de interfaces que nos permitieran agregar un servicio con un número mínimo y máximo de cupos, asociados a un número de horarios que (a su vez) están asociados a un número de días se volvieron exponencialmente más enredadas a medida que nos alejábamos de los ejemplos que vimos en clase. Nos obligó a rehacer muchos componentes y funciones. Necesitamos múltiples conversaciones con ChatGPT, a lo largo de una cantidad vergonzosa de horas, para llegar a una solución lo suficientemente básica para que la entendiéramos y lo suficientemente efectiva para cubrir las bases necesarias del flujo de usuario.