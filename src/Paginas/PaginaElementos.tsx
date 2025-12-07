import { useState } from "react";

import TituloPrimario from "../Componentes/Elementos/TituloPrimario.tsx";
import TituloSecundario from "../Componentes/Elementos/TituloSecundario.tsx";
import TituloTerciario from "../Componentes/Elementos/TituloTerciario.tsx";
import TituloCuaternario from "../Componentes/Elementos/TituloCuaternario.tsx";
import TituloQuinario from "../Componentes/Elementos/TituloQuinario.tsx";
import TituloSextario from "../Componentes/Elementos/TituloSextario.tsx";
import TituloSeptenario from "../Componentes/Elementos/TituloSeptenario.tsx";

import Iconos from "../Iconos/Indice";
import ParrafoPrimario from "../Componentes/Elementos/ParrafoPrimario.tsx";
import ParrafoSecundario from "../Componentes/Elementos/ParrafoSecundario.tsx";
import ParrafoTerciario from "../Componentes/Elementos/ParrafoTerciario.tsx";
import ParrafoCuaternario from "../Componentes/Elementos/ParrafoCuaternario.tsx";
import EtiquetaPrimaria from "../Componentes/Elementos/EtiquetaPrimaria.tsx";
import EtiquetaSecundaria from "../Componentes/Elementos/EtiquetaSecundaria.tsx";
import EtiquetaTerciaria from "../Componentes/Elementos/EtiquetaTerciaria.tsx";
import EnlacePrimario from "../Componentes/Elementos/EnlacePrimario.tsx";
import EnlaceSecundario from "../Componentes/Elementos/EnlaceSecundario.tsx";
import EnlaceTerciario from "../Componentes/Elementos/EnlaceTerciario.tsx";
import EnlaceCuaternario from "../Componentes/Elementos/EnlaceCuaternario.tsx";
import BotonPrimario from "../Componentes/Elementos/BotonPrimario.tsx";
import BotonSecundario from "../Componentes/Elementos/BotonSecundario.tsx";
import BotonTerciario from "../Componentes/Elementos/BotonTerciario.tsx";
import BotonCuaternario from "../Componentes/Elementos/BotonCuaternario.tsx";
import AccionPrimaria from "../Componentes/Elementos/AccionPrimaria.tsx";
import AccionSecundaria from "../Componentes/Elementos/AccionSecundaria.tsx";
import AccionTerciaria from "../Componentes/Elementos/AccionTerciaria.tsx";
import AccionCuaternaria from "../Componentes/Elementos/AccionCuaternaria.tsx";
import AccionQuinaria from "../Componentes/Elementos/AccionQuinaria.tsx";
import EntradaTexto from "../Componentes/Elementos/EntradaTexto.tsx";
import EntradaCampo from "../Componentes/Elementos/EntradaCampo.tsx";
import EntradaSeleccion from "../Componentes/Elementos/EntradaSeleccion.tsx";
import EntradaNumero from "../Componentes/Elementos/EntradaNumero.tsx";

export default function PaginaElementos() {
    const [entrada, setEntrada] = useState({ nombre: "", apellido: "", telefono: "+56 9 ", rut: "", correo: "", contrasena: "",  confirmar: "", mensaje: "", });

    const [form, setForm] = useState({
        categoria: "",
    });

    const [errores, setErrores] = useState({
        categoria: "",
    });

    const manejarCambio = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        // Ejemplo de error simple
        if (e.target.value === "") {
            setErrores({
                ...errores,
                [e.target.name]: "Debes seleccionar una categoría",
            });
        } else {
            setErrores({
                ...errores,
                [e.target.name]: "",
            });
        }
    };

    return (
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem", }}>
            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloPrimario texto="Turismo y excursionismo" icono={<Iconos.Favorito/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloPrimario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSecundario texto="Turismo y excursionismo" icono={<Iconos.Enlace/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSecundario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloTerciario texto="Turismo y excursionismo" icono={<Iconos.Estrella/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloTerciario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloCuaternario texto="Turismo y excursionismo" icono={<Iconos.Correo/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloCuaternario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloQuinario texto="Turismo y excursionismo" icono={<Iconos.Telefono/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloQuinario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloQuinario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloQuinario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSextario texto="Turismo y excursionismo" icono={<Iconos.Foro/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSextario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSextario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSextario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSeptenario texto="Turismo y excursionismo" icono={<Iconos.Favorito/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSeptenario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSeptenario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSeptenario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <ParrafoPrimario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <ParrafoSecundario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <ParrafoTerciario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <ParrafoCuaternario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EtiquetaPrimaria texto="Artículo" primerIcono={<Iconos.Vender/>} segundoIcono={<Iconos.Cerrar/>} enlace="google.com"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaPrimaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EtiquetaSecundaria texto="Artículo" primerIcono={<Iconos.Vender/>} segundoIcono={<Iconos.Cerrar/>} enlace="google.com"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaSecundaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EtiquetaTerciaria texto="Artículo" primerIcono={<Iconos.Vender/>} segundoIcono={<Iconos.Cerrar/>} enlace="google.com"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaTerciaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlacePrimario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlacePrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlacePrimario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlacePrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlacePrimario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlacePrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceSecundario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceSecundario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceSecundario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceTerciario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceTerciario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceTerciario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EnlaceCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonPrimario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonPrimario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonPrimario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonSecundario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonSecundario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonSecundario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonTerciario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonTerciario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonTerciario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <BotonCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <AccionPrimaria icono={<Iconos.Persona/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionPrimaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <AccionSecundaria icono={<Iconos.Borrar/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionSecundaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <AccionTerciaria icono={<Iconos.Borrar/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionTerciaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <AccionCuaternaria icono={<Iconos.FlechaDerecha/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionCuaternaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <AccionQuinaria icono={<Iconos.Cerrar/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionQuinaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaTexto  etiqueta="Nombre" nombre="nombre" valor={entrada.nombre} accion={(e) => setEntrada({ ...entrada, nombre: e.target.value })} marcador="Primer nombre" informacion="Usa solo caracteres alfabéticos" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaTexto  etiqueta="Apellido" nombre="apellido" valor={entrada.apellido} accion={(e) => setEntrada({ ...entrada, apellido: e.target.value })} marcador="Primer apellido" informacion="Usa solo caracteres alfabéticos" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", border: "1px so boxSizing: 'border-box',lid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>                
                <EntradaTexto  etiqueta="Teléfono" nombre="telefono" valor={entrada.telefono} accion={(e) => setEntrada({ ...entrada, telefono: e.target.value })} informacion="Usa solo caracteres numéricos" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaTexto  etiqueta="RUT" nombre="rut" valor={entrada.rut} accion={(e) => setEntrada({ ...entrada, rut: e.target.value })} marcador="Primer apellido" informacion="Usa solo caracteres alfanuméricos" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaTexto  etiqueta="Correo electrónico" nombre="correo" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="ejemplo@correo.cl" informacion="" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaTexto  etiqueta="Contraseña" nombre="contrasena" valor={entrada.contrasena} accion={(e) => setEntrada({ ...entrada, contrasena: e.target.value })} informacion="Usa como mínimo un símbolo" tipo="password"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaTexto  etiqueta="Confirmar contraseña" nombre="confirmar" valor={entrada.confirmar} accion={(e) => setEntrada({ ...entrada, confirmar: e.target.value })} informacion="Usa como mínimo un símbolo" tipo="password"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaCampo  etiqueta="Mensaje" nombre="mensaje" valor={entrada.mensaje} accion={(e) => setEntrada({ ...entrada, mensaje: e.target.value })} marcador="Escribe tu mensaje"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaCampo</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaSeleccion  etiqueta="Categoría" nombre="categoria" valor={form.categoria} accion={manejarCambio} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" error={errores.categoria} />
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaSeleccion</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EntradaNumero nombre="cantidad" etiqueta="Cantidad" min={1} max={999} step={1} value={1} />
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaSeleccion</p>
            </section>

        </div>
    );
}