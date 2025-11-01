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
    //new date, es un objeto fecha en javascript
    //getTime devuelve los milisegundos transcurridos
    creadoEn: new Date().getTime()
}

const estadoInicial = () => {
    try {
        // Do not access localStorage during SSR
        if (typeof window === "undefined" || typeof localStorage === "undefined") {
            return estadoInicialPorDefecto;
        }

        const fechaActual = new Date().getTime(); //saca los segundos del dia
        const duracionCarro = 60 * 60 * 24 //segundos * minutos * horas del dia
        const estadoCarro = localStorage.getItem("carro"); //se obtiene de localstorage "carro"

        if (estadoCarro) {
            const carroRespaldado = JSON.parse(estadoCarro) as TipoSliceProducto;
            const segundosTranscurridosCarro = (fechaActual - carroRespaldado.creadoEn) / 1000;
            if (segundosTranscurridosCarro < duracionCarro) { //se ocupa este "if" para que los productos que están en el carrito perduren 24 horas
                return carroRespaldado;
            }
        }

    } catch (error) {
        console.log(error);
    }
     return estadoInicialPorDefecto;
}

const guardarCarro = (estado: TipoSliceProducto) => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        localStorage.setItem("carro", JSON.stringify(estado));
    }
}

export const sliceProducto = createSlice({
    name: 'productos',

    initialState: estadoInicial(),

    reducers: {
        agregarProducto: (estado, accion: PayloadAction<ProductoCarro>) => {

            const nuevoProducto = { ...accion.payload, cantidadEnCarro: 1 };

            // Encuentra los cupos máximos para la fecha y hora seleccionadas
            const fd = nuevoProducto.calendarizacion?.find
            (fd => fd.fecha === nuevoProducto.fechaSeleccionada);

            const horaObj = fd?.horas.find
            (h => h.hora === nuevoProducto.horaSeleccionada);

            const maxCupos = horaObj?.cupos ?? 1;

            // Busca si ya existe un producto idéntico en el carro
            const productoExistente = estado.listaProductos.find(p =>
                p.id === nuevoProducto.id &&
                p.fechaSeleccionada === nuevoProducto.fechaSeleccionada &&
                p.horaSeleccionada === nuevoProducto.horaSeleccionada
            );

            if (productoExistente) {
                // Si existe y no hemos alcanzado el máximo de cupos, incrementa la cantidad
                if (productoExistente.cantidadEnCarro < maxCupos) {
                    productoExistente.cantidadEnCarro++;
                }
            } else {
                // Si no existe, lo agrega al carro con cantidad 1
                if (nuevoProducto.cantidadEnCarro <= maxCupos) {
                    estado.listaProductos.push(nuevoProducto);
                }
            }

            estado.total = estado.listaProductos.reduce((acc, p) => acc + p.precio * p.cantidadEnCarro, 0);

            estado.creadoEn = new Date().getTime();
            guardarCarro(estado);
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
            guardarCarro(estado);
        },
    }
})

export const { agregarProducto, quitarProducto, vaciarProductos } = sliceProducto.actions;
export default sliceProducto.reducer;

// Trabajar en este archivo fue una pesadilla. Para más información, visite Paginas/Producto.tsx