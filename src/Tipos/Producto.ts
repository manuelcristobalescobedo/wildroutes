type Resena = {
    comentario: string;
    estrellas: number;
    usuario: string;
};

type Horas = {
    hora: string;
    cupos: number;
};

type Fechas = {
    fecha: string;
    horas: Horas[];
};

type Rango = {
    minimo: number;
    maximo: number;
};

type Producto = {
    id: number;
    uuid: string;
    nombre: string;
    comuna: string;
    region: string;
    categorias: string[];
    imagenes: string[];
    descripcion: string;
    lema: string;
    anunciante: string;
    fotografia: string;
    precio: number;
    resenas: Resena[];
    calendarizacion: Fechas[];
    etiquetas: string[];
    caracteristicas: string;
    informacion: string;
    cancelacion: string;
    incluye: string;
    excluye: string;
    cantidad: Rango;
    creacion: string;
    disponible: boolean;
    oferta: boolean;
    heroe: boolean;
};

export type { Producto, Fechas, Horas };

// A medida que refinamos los flujos del usuario la estructura de nuestro tipo Producto ha cambiado en maneras simples pero significativas. En esta iteración, el nombre calendarizacion pasó de ser un objeto plano con dos propiedades a una estructura jerárquica de objetos que refleja la necesidad de asociar un conjunto de cupos a una hora y un conjunto de esas horas a una fecha determinada.