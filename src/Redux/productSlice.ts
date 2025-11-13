import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Producto } from "../Tipos/Producto";

export type ProductoCarro = Producto & {
    cantidadEnCarro: number;
    fechaSeleccionada: string;
    horaSeleccionada?: string;
};

type TipoSliceProducto = {
    listaProductos: ProductoCarro[];
    total: number;
    creadoEn: number;
};

const estadoInicialPorDefecto: TipoSliceProducto = {
    listaProductos: [],
    total: 0,
    creadoEn: new Date().getTime(),
};

const estadoInicial = (): TipoSliceProducto => {
    try {
        if (typeof window === "undefined" || typeof localStorage === "undefined") {
            return estadoInicialPorDefecto;
        }

        const fechaActual = new Date().getTime();
        const duracionCarro = 60 * 60 * 24;
        const estadoCarro = localStorage.getItem("carro");

        if (estadoCarro) {
            const carroRespaldado = JSON.parse(estadoCarro) as TipoSliceProducto;
            const segundosTranscurridosCarro = (fechaActual - carroRespaldado.creadoEn) / 1000;

            if (segundosTranscurridosCarro < duracionCarro) {
                return carroRespaldado;
            }
        }
    } catch (error) {
        console.error(error);
    }

    return estadoInicialPorDefecto;
};

const guardarCarro = (estado: TipoSliceProducto) => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        localStorage.setItem("carro", JSON.stringify(estado));
    }
};

export const sliceProducto = createSlice({
    name: "productos",
    initialState: estadoInicial(),
    reducers: {
        agregarProducto: (estado, accion: PayloadAction<ProductoCarro>) => {
            const nuevoProducto = { ...accion.payload, cantidadEnCarro: 1 };

            const fd = nuevoProducto.calendarizacion?.find(
                (fd) => fd.fecha === nuevoProducto.fechaSeleccionada
            );

            const horaObj = fd?.horas.find(
                (h) => h.hora === nuevoProducto.horaSeleccionada
            );

            const maxCupos = horaObj?.cupos ?? 1;

            const productoExistente = estado.listaProductos.find(
                (p) =>
                    p.id === nuevoProducto.id &&
                    p.fechaSeleccionada === nuevoProducto.fechaSeleccionada &&
                    p.horaSeleccionada === nuevoProducto.horaSeleccionada
            );

            if (productoExistente) {
                if (productoExistente.cantidadEnCarro < maxCupos) {
                    productoExistente.cantidadEnCarro++;
                }
            } else {
                if (nuevoProducto.cantidadEnCarro <= maxCupos) {
                    estado.listaProductos.push(nuevoProducto);
                }
            }

            estado.total = estado.listaProductos.reduce((acc, p) => {
                const precio = p.precios?.[0]?.precio ?? 0;
                return acc + precio * p.cantidadEnCarro;
            }, 0);

            estado.creadoEn = new Date().getTime();
            guardarCarro(estado);
        },

        quitarProducto: (
            estado,
            accion: PayloadAction<{
                id: number;
                fechaSeleccionada: string;
                horaSeleccionada: string;
            }>
        ) => {
            estado.listaProductos = estado.listaProductos.filter(
                (p) =>
                    !(
                        p.id === accion.payload.id &&
                        p.fechaSeleccionada === accion.payload.fechaSeleccionada &&
                        p.horaSeleccionada === accion.payload.horaSeleccionada
                    )
            );

            estado.total = estado.listaProductos.reduce((acc, p) => {
                const precio = p.precios?.[0]?.precio ?? 0;
                return acc + precio * p.cantidadEnCarro;
            }, 0);

            estado.creadoEn = new Date().getTime();
            guardarCarro(estado);
        },

        vaciarProductos: (estado) => {
            estado.listaProductos = [];
            estado.total = 0;
            estado.creadoEn = new Date().getTime();
            guardarCarro(estado);
        },
    },
});

export const { agregarProducto, quitarProducto, vaciarProductos } = sliceProducto.actions;
export default sliceProducto.reducer;