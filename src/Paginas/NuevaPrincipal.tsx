import { useState } from "react";
import "./NuevaPrincipal.css";
import Elementos from "../Componentes/Elementos/Indice";
import "../index.css";
import Iconos from "../Iconos/Indice";

export default function PaginaElementos() {
    const [entrada, setEntrada] = useState({ nombre: "", apellido: "", telefono: "+56 9 ", rut: "", correo: "", contrasena: "",  confirmar: "", mensaje: "", });
    
    return (
        <main>
            <section className="Encabezado">
                <div>
                    <Elementos.EnlaceAlternativoPrimario texto="Destinos" icono={<Iconos.Ubicacion/>} enlace="google.com" color="var(--color-secundario-alto)" flotar="#B66C0C"/>
                    <Elementos.EnlaceAlternativoPrimario texto="Actividades" icono={<Iconos.Actividad/>} enlace="google.com" color="var(--color-secundario-alto)" flotar="#B66C0C"/>
                    <Elementos.EnlaceAlternativoPrimario texto="Quiénes somos" icono={<Iconos.Soporte/>} enlace="google.com" color="var(--color-secundario-alto)" flotar="#B66C0C"/>
                    <Elementos.EnlaceAlternativoPrimario texto="Contacto" icono={<Iconos.Explorar/>} enlace="google.com" color="var(--color-secundario-alto)" flotar="#B66C0C"/>
                </div>
                <div>
                    <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-bajo)" etiqueta="Tu próximo destino" nombre="nombre" valor={entrada.nombre} accion={(e) => setEntrada({ ...entrada, nombre: e.target.value })} marcador="¿A dónde?" informacion="Usa solo caracteres alfabéticos" tipo="text"/>
                    <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-bajo)" etiqueta="Fecha" nombre="nombre" valor={entrada.nombre} accion={(e) => setEntrada({ ...entrada, nombre: e.target.value })} marcador="¿Cuándo?" informacion="Usa solo caracteres alfabéticos" tipo="text"/>
                    <Elementos.EntradaNumero estilo="var(--color-neutro-mas-mas-mas-bajo)" nombre="cantidad" etiqueta="Personas" min={1} max={999} step={1} value={1} />
                </div>
            </section>
        </main>
    );
}