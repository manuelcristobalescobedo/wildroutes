export function camposObligatorios(texto: string, fecha: string, cantidad: number) {
    return texto === '' || fecha === '' || cantidad === null;
}

export function fechaPasada(fecha: string) {
    const hoy = new Date();
    const seleccion = new Date(fecha);

    seleccion.setMinutes(seleccion.getMinutes() + seleccion.getTimezoneOffset());

    hoy.setHours(0, 0, 0, 0);
    seleccion.setHours(0, 0, 0, 0);

    return seleccion.getTime() < hoy.getTime();
}

export function numeroNegativo(cantidad: number) {
    return cantidad < 0;
}

export function numeroCero(cantidad: number) {
    return cantidad === 0;
}

// Intenté construir la función fechaPasada de manera más simple usando return seleccion < hoy.setHours(0,0,0,0);, pero "El operador '<' no se puede aplicar a los tipos 'Fecha' y 'número'". Después de perder la paciencia por decimoquinta vez tratando de entender cómo JavaScript interpreta las zonas horarias negativas, ChatGPT me enseñó cómo convertir ambos valores al mismo tipo antes de compararlos sin que el navegador asuma que el día de hoy es "una fecha pasada".

export function validarFormulario(datos: {
    nombre: string;
    apellido: string;
    telefono: string;
    rut: string;
    correo: string;
    contrasena: string;
    repetirContrasena: string;
}): string {
  
    if (
        !datos.nombre ||
        !datos.apellido ||
        !datos.telefono ||
        !datos.rut ||
        !datos.correo ||
        !datos.contrasena ||
        !datos.repetirContrasena
    ) {
        return "Todos los campos son obligatorios.";
    }

    const telefonoValido = /^[0-9]{8,9}$/;
    if (!telefonoValido.test(datos.telefono)) {
        return "El teléfono debe tener entre 8 y 9 números.";
    }

    const rutValido = /^\d{1,2}\.?\d{3}\.?\d{3}-[\dkK]$/;
    if (!rutValido.test(datos.rut)) {
        return "El RUT no tiene un formato válido.";
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoValido.test(datos.correo)) {
        return "El correo no tiene un formato válido.";
    }

    if (datos.contrasena.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

    if (datos.contrasena !== datos.repetirContrasena) {
        return "Las contraseñas no coinciden.";
    }

    return "El formulario se envió correctamente.";
}

// Todas estas funciones están lejos de conformar un proceso de validación robusto (lo único que hace la función responsable de validar el RUT es revisar que la entrada tenga el formato correcto), pero cumplen con el objetivo de entregarle al usuario información importante en caso de encontrar un error.

export function validarIngreso(correo: string, contrasena: string): string {
    if (!correo || !contrasena) {
        return "Todos los campos son obligatorios.";
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoValido.test(correo)) {
        return "El correo no tiene un formato válido.";
    }

    const correoCorrecto = "tangananica@correo.cl";
    const contrasenaCorrecta = "tanganana";

    if (correo !== correoCorrecto || contrasena !== contrasenaCorrecta) {
        return "El correo o la contraseña son incorrectos.";
    }

    return "El formulario se envió correctamente.";
}