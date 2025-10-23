# INTEGRACIONES.md

El objetivo de este archivo es documentar las integraciones de cada página de esta aplicación, señalando claramente (1) el nombre de la página, su ruta y componente, (2) su objeto principal y (3) la definición de ese objeto.

<br>

## Inicio

### Nombre de la página

Como es costumbre, la página principal de la aplicación se encuentra en la ruta `/`. La página **Inicio** se renderiza mediante el componente `Inicio.tsx`.

### Descripción de su objeto principal

La función principal de esta página es mostrar los datos de una serie de objetos de tipo `Producto` (definidos en `Producto.ts`) en la forma de tarjetas, las unidades básicas de la aplicación.

### Definición de su objeto principal

Cada objeto `Producto` está compuesto por cinco tipos relacionados (`Precios`, `Resena`, `Calendario`, `Rango` y `Producto`) de los cuales los primeros cuatro son tipos auxiliares, incluidos dentro del tipo principal `Producto`.

```
type Precios = {
    estudiante: number;
    adulto: number;
    mayor: number;
};

type Resena = {
    comentario: string;
    estrellas: number;
    usuario: string;
};

type Calendario = {
    fechas: string[];
    horas: string[];
};

type Rango = {
    minimo: number;
    maximo: number;
};

type Producto = {
    id: string;
    titulo: string;
    ubicacion: string;
    categorias: string[];
    imagenes: string[];
    descripcion: string;
    anunciante: string;
    fotografia: string;
    precios: Precios;
    resenas: Resena[];
    calendarizacion: Calendario;
    etiquetas: string[];
    caracteristicas: string;
    informacion: string;
    cancelacion: string;
    incluye: string;
    excluye: string;
    personas: Rango;
    registro: string;
    disponibilidad: boolean;
    oferta: boolean;
};
```

<br>

## Catálogo

### Nombre de la página

La página **Catálogo** encuentra en la ruta `/catalogo` y se renderiza mediante el componente `Catalogo.tsx`.

### Descripción de su objeto principal

Al igual que la página Inicio, **Catálogo** presenta la información de una serie de objetos de tipo `Producto` en la forma de tarjetas. En este caso, como resultado de una búsqueda exitosa.

### Definición de su objeto principal

Nuevamente, cada objeto `Producto` está compuesto por cuatro tipos auxiliares (`Precios`, `Resena`, `Calendario` y `Rango`) y un tipo principal (`Producto`).

Las propiedades y los valores del objeto pueden encontrarse en la descripción de la página Inicio bajo el título Definición de su objeto principal.

<br>

## Producto

### Nombre de la página

La página **Producto** encuentra en la ruta `/producto/:id` y se renderiza mediante el componente `Producto.tsx`.

### Descripción de su objeto principal

A diferencia de las páginas Inicio y Catálogo, **Producto** presenta los datos de un solo objeto de tipo `Producto` en la forma de secciones.

### Definición de su objeto principal

Nuevamente, cada objeto `Producto` está compuesto por cuatro tipos auxiliares (`Precios`, `Resena`, `Calendario` y `Rango`) y un tipo principal (`Producto`).

Las propiedades y los valores del objeto pueden encontrarse en la descripción de la página Inicio bajo el título Definición de su objeto principal.

<br>

## Acceso

### Nombre de la página

La página **Acceso** encuentra en la ruta `/acceso` y se renderiza mediante el componente `Acceso.tsx`.

### Descripción de su objeto principal

**Acceso** recibe y valida los datos de un objeto de tipo `Usuario`. 

### Definición de su objeto principal

El objeto `Usuario` contiene siete propiedades con valores de cadena (`id`, `nombre`, `apellido`, `correo`,`telefono`, `fotografia` y `registro`), una con valores booleanos (`activo`) y una con un arreglo de cadenas por valor (`reservas`).

```
type Usuario = {
    id: string;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    fotografia: string;
    registro: string;
    activo: boolean;
    reservas?: string[];
};
```

<br>

## Registro

### Nombre de la página

La página **Registro** encuentra en la ruta `/registro` y se renderiza mediante el componente `Registro.tsx`.

### Descripción de su objeto principal

Al igual que Acceso, **Registro** recibe y valida los datos de un objeto de tipo `Usuario`. 

### Definición de su objeto principal

Nuevamente, el objeto `Usuario` contiene nueve propiedades con valores de múltiples tipos.

Las propiedades y los valores del objeto pueden encontrarse en la descripción de la página Acceso bajo el título Definición de su objeto principal.