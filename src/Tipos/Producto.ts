export interface Precio {
    segmento: string;
    precio: number;
}

export interface Hora {
    hora: string;
    cupos: number;
}

export interface Dia {
    fecha: string;
    horas: Hora[];
}

export interface Producto {
    id: number;
    uuid: string;
    nombre: string;
    personas: number;
    descripcion: string;
    categoria: string;
    lugar: string;
    tourOperador: string;
    destacado?: boolean;
    promocion?: boolean;
    imagenes: string[];
    precios: Precio[];
    tags?: string[];
    reseñas?: string[];
    comuna?: string;
    region?: string;
    lema?: string;
    anunciante?: string;
    fotografia?: string;
    heroe?: boolean;
    calendarizacion?: Dia[];
    fechasDisponibles?: string[];
}

export type Imagenes = string[];
export type Resenas = string[];
export type Tags = string[];
export type FechasDisponibles = string[];

export interface DetalleProducto {
    id: number;
    incluye: string;
    noIncluye: string;
    cancelacion: string;
}