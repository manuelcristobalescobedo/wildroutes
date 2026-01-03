export type Ubicacion = {
    comuna: string;
    region: string;
    pais: string;
};

export type Informacion = {
    duracion: string;
    inicio: string;
    edad: string;
    requisitos: string;
    idiomas: string;
};

export type Servicio = {
    id: string;
    imagenes: string[];
    titulo: string;
    descripcion: string;
    consiste: string;
    ubicacion: Ubicacion;
    calificacion: number;
    resenas: number;
    precio: string;
    intereses: boolean;
    descuentos: boolean;
    zona: string;
    ideal: string;
    actividad: string;
    incluye: string[];
    excluye: string[];
    informacion: Informacion;
    politicas: string;
};