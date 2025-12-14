import { useState } from "react";
import "./Encabezado.css";
import Elementos from "../Elementos/Indice.ts";
import "../../index.css"
import Iconos from "../../Iconos/Indice";

export default function Encabezado() {
    const [entrada, setEntrada] = useState({ nombre: "", apellido: "", telefono: "+56 9 ", rut: "", correo: "", contrasena: "",  confirmar: "", mensaje: "", });
    
    return (
        <header className="Encabezado">
            <div>
                <Elementos.EnlaceAlternativoSecundario texto="Destinos" icono={<Iconos.Ubicacion/>} enlace="google.com" color="var(--color-secundario-alto)" flotar="var(--color-secundario-alto)"/>
                <Elementos.EnlaceAlternativoSecundario texto="Actividades" icono={<Iconos.Actividad/>} enlace="google.com" color="var(--color-secundario-alto)" flotar="var(--color-secundario-alto)"/>
                <Elementos.EnlaceAlternativoSecundario texto="Quiénes somos" icono={<Iconos.Soporte/>} enlace="google.com" color="var(--color-secundario-alto)" flotar="var(--color-secundario-alto)"/>
                <Elementos.EnlaceAlternativoSecundario texto="Contacto" icono={<Iconos.Explorar/>} enlace="google.com" color="var(--color-secundario-alto)" flotar="var(--color-secundario-alto)"/>
            </div>
            <div>
                <a>
                    <svg viewBox="0 0 149 149" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="74.5" cy="74.5" r="74.5" fill="white"/>
                        <path d="M134.514 74.5002C134.514 107.645 107.645 134.514 74.5 134.514C41.3552 134.514 14.4861 107.645 14.4861 74.5002C14.4861 41.3555 41.3552 14.4863 74.5 14.4863C107.645 14.4863 134.514 41.3555 134.514 74.5002Z" fill="#ECB9BD"/>
                        <path d="M120.028 73.4657C120.028 98.0386 99.6443 117.959 74.5 117.959C49.3557 117.959 28.9722 98.0386 28.9722 73.4657C28.9722 48.8929 49.3557 28.9727 74.5 28.9727C99.6443 28.9727 120.028 48.8929 120.028 73.4657Z" fill="#D9737B"/>
                        <path d="M64.1723 51.9668C69.096 55.1922 80.7397 63.1082 83.1838 67.3761C85.6279 71.644 86.6058 85.7683 86.9145 91.68C86.9737 92.8131 85.7714 93.5129 84.8276 92.8947C79.904 89.6693 68.2602 81.7533 65.8161 77.4854C63.3721 73.2175 62.3942 59.0932 62.0854 53.1816C62.0262 52.0485 63.2286 51.3486 64.1723 51.9668Z" fill="#ECB9BD"/>
                    </svg>
                </a>
                <div>
                    <Elementos.EntradaTexto apariencia="var(--color-secundario-bajo)" estilo="var(--color-neutro-mas-mas-mas-bajo)" etiqueta="Tu próximo destino" nombre="nombre" valor={entrada.nombre} accion={(e) => setEntrada({ ...entrada, nombre: e.target.value })} marcador="¿A dónde?" informacion="Usa solo caracteres alfabéticos" tipo="text"/>
                    <Elementos.EntradaTexto apariencia="var(--color-secundario-bajo)" estilo="var(--color-neutro-mas-mas-mas-bajo)" etiqueta="Fecha" nombre="nombre" valor={entrada.nombre} accion={(e) => setEntrada({ ...entrada, nombre: e.target.value })} marcador="¿Cuándo?" informacion="Usa solo caracteres alfabéticos" tipo="text"/>
                    <Elementos.EntradaNumero estilo="var(--color-neutro-mas-mas-mas-bajo)" nombre="cantidad" etiqueta="Personas" min={1} max={999} step={1} value={1} />
                    <Elementos.AccionTerciaria icono={<Iconos.Buscar/>} />
                </div>
                <div>
                    <Elementos.AccionPrimaria icono={<Iconos.Carro/>} />
                    <Elementos.AccionPrimaria icono={<Iconos.Persona/>} />
                </div>
            </div>
        </header>
    );
}