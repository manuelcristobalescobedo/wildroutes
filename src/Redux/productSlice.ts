import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Producto } from "../Tipos/Producto";

export type ProductoCarro = Producto & {
    cantidadEnCarro: number;
    fechaSeleccionada: string;
    horaSeleccionada: string;
};

type TipoSliceProducto = {
    listaProductos: ProductoCarro[],
    total: number,
    creadoEn: number
}

const estadoInicialPorDefecto: TipoSliceProducto = {
    listaProductos: [],
    total: 0,

    creadoEn: new Date().getTime()
}

const estadoInicial = () => {
    const fechaActual = new Date().getTime();
    const duracionCarro = 60 * 60 * 24
    const estadoCarro = localStorage.getItem("carro");

    if (estadoCarro) {
        const carroRespaldado = JSON.parse(estadoCarro) as TipoSliceProducto;
        const segundosTranscurridosCarro = (fechaActual - carroRespaldado.creadoEn) / 1000;
        if (segundosTranscurridosCarro < duracionCarro) {
            return carroRespaldado;
        }
    }
    return estadoInicialPorDefecto;
}

export const sliceProducto = createSlice({
    name: 'productos',
    initialState: estadoInicial(),
    reducers: {
        agregarProducto: (estado, accion: PayloadAction<ProductoCarro>) => {
            const nuevoProducto = accion.payload;

            const fd = nuevoProducto.calendarizacion.find(fd => fd.fecha === nuevoProducto.fechaSeleccionada);
            const horaObj = fd?.horas.find(h => h.hora === nuevoProducto.horaSeleccionada);
            const maxCupos = horaObj?.cupos ?? 1;

            let existe = false;
            estado.listaProductos.forEach((producto) => {
                if (
                    producto.id === nuevoProducto.id &&
                    producto.fechaSeleccionada === nuevoProducto.fechaSeleccionada &&
                    producto.horaSeleccionada === nuevoProducto.horaSeleccionada
                ) {
                    if (producto.cantidadEnCarro < maxCupos) {
                        producto.cantidadEnCarro += nuevoProducto.cantidadEnCarro;
                    }
                    existe = true;
                }
            });

            if (!existe && nuevoProducto.cantidadEnCarro <= maxCupos) {
                estado.listaProductos.push(nuevoProducto);
            }

            estado.total = estado.listaProductos.reduce((acc, p) => acc + p.precio * p.cantidadEnCarro, 0);
            estado.creadoEn = new Date().getTime();
        },

        quitarProducto: (estado, accion: PayloadAction<{ id: number, fechaSeleccionada: string, horaSeleccionada: string }>) => {
            estado.listaProductos = estado.listaProductos.filter(p =>
                !(p.id === accion.payload.id &&
                p.fechaSeleccionada === accion.payload.fechaSeleccionada &&
                p.horaSeleccionada === accion.payload.horaSeleccionada)
            );
            estado.total = estado.listaProductos.reduce((acc, p) => acc + p.precio * p.cantidadEnCarro, 0);
            estado.creadoEn = new Date().getTime();
        }
        ,
        vaciarProductos: (estado) => {
            estado.listaProductos = [];
            estado.total = 0;
            estado.creadoEn = new Date().getTime();
        },
    }
})

export const { agregarProducto, quitarProducto, vaciarProductos } = sliceProducto.actions;
export default sliceProducto.reducer;

// Trabajar en este archivo fue una pesadilla. Para más información, visite Paginas/Producto.tsx