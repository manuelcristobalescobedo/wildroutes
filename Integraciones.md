<br>
Este archivo documenta las integraciones de cada página de esta aplicación, señalando el nombre de la página, su ruta y componente, su objeto principal, la definición de ese objeto, el enlace del servicio de Swagger responsable de ese objeto, el enlace de la tarea asociada su desarrollo en Github y el estado de la integración.

## Principal

### Ruta y compontente

La página **Principal** se encuentra en la ruta `/` y se reproduce a partir del componente `Principal.tsx`.

### Objeto principal

La página **Principal** presenta los datos de una serie de objetos de tipo `Producto` (definidos en `Producto.ts`) en forma de tarjetas.

### Definición del objeto

Cada objeto `Producto` está compuesto por varios tipos relacionados (`Precio`, `Hora`, `Dia`, `DetalleProducto` y `Producto`), de los cuales los primeros tres (`Precio`, `Hora` y `Dia`) funcionan como tipos auxiliares incluidos dentro del tipo principal `Producto`, mientras que `DetalleProducto` actúa como un complemento separado que la API entrega junto al producto principal.

Los alias `Imagenes`, `Resenas`, `Tags` y `FechasDisponibles` son nombres abreviados que representan arreglos de texto que se utilizan en distintas partes del modelo.

```
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
```

### Enlace del objeto
http://13.218.227.241:9461/doc/productos

### Enlace de la tarea
https://github.com/bootcamp-uchile-2025/grupo-6-frontend/issues/227

### Estado de la integración
En progreso

<br>

## Catálogo

### Ruta y compontente

La página **Catálogo** se encuentra en la ruta `/catalogo` y se reproduce a partir del componente `Catalogo.tsx`.

### Objeto principal

La página **Catálogo** presenta los datos de una serie de objetos de tipo `Producto` (definidos en `Producto.ts`) en forma de tarjetas que, en este caso, aparecen como resultado de una búsqueda exitosa.

### Definición del objeto

Las propiedades y tipos del objeto principal de la página **Catálogo** pueden encontrarse en la descripción de la página **Principal** bajo el título **Definición del objeto**.

### Enlace del objeto
http://13.218.227.241:9461/doc/productos

### Enlace de la tarea
https://github.com/bootcamp-uchile-2025/grupo-6-frontend/issues/225

### Estado de la integración
En progreso

<br>

## Producto

### Ruta y compontente

La página **Producto** se encuentra en la ruta `/producto/:id` y se reproduce a partir del componente `Producto.tsx`.

### Objeto principal

La página **Producto** presenta los datos de un solo objeto de tipo `Producto` en la forma de secciones.

### Definición del objeto

Las propiedades y tipos del objeto principal de la página **Producto** pueden encontrarse en la descripción de la página **Principal** bajo el título **Definición del objeto**.

### Enlace del objeto
http://13.218.227.241:9461/doc/productos

### Enlace de la tarea
https://github.com/bootcamp-uchile-2025/grupo-6-frontend/issues/231

### Estado de la integración
En progreso

<br>

## Acceso

### Ruta y compontente

La página **Acceso** se encuentra en la ruta `/acceso` y se reproduce a partir del componente `Acceso.tsx`.

### Objeto principal

La página **Acceso** recibe y valida los datos de un objeto de tipo `Usuario`. 

### Definición del objeto

El objeto `Usuario` está compuesto por campos primarios (`nombre`, `apellidos`, `correo`, `celular`, `direccion`, `rut`, `contrasena` y `confirmarContrasena`), por lo que no depende de tipos auxiliares ni estructuras adicionales.

```
export type Usuario = {
    nombre: string;
    apellidos: string;
    correo: string;
    celular: string;
    direccion: string;
    rut: string;
    contrasena: string;
    confirmarContrasena: string;
};
```

### Enlace del objeto
http://18.215.170.96:9461/doc/usuarios 

### Enlace de la tarea
No existe

### Estado de la integración
Pendiente

<br>

## Registro

### Ruta y compontente

La página **Registro** se encuentra en la ruta `/registro` y se reproduce a partir del componente `Registro.tsx`.

### Objeto principal

La página **Registro** recibe y valida los datos de un objeto de tipo `Usuario`. 


### Definición del objeto

Las propiedades y tipos del objeto principal de la página **Registro** pueden encontrarse en la descripción de la página **Acceso** bajo el título **Definición del objeto**.

### Enlace del objeto
http://18.215.170.96:9461/doc/usuarios 

### Enlace de la tarea
No existe

### Estado de la integración
Pendiente