export type Usuario = {
    nombre: string;
    apellido: string;
    telefono: string;
    rut: string;
    correo: string;
    contrasena: string;
    novedades: boolean;
};

export type DatosFormulario = Usuario & {
    repetirContrasena: string;
};