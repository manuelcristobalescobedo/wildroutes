import { useState } from "react";
import Iconos from "../Iconos/Indice";
import Elementos from "../Componentes/Elementos/Indice";

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
                <Elementos.TituloPrimario texto="Turismo y excursionismo" icono={<Iconos.Favorito/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloPrimario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloSecundario texto="Turismo y excursionismo" icono={<Iconos.Enlace/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloSecundario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloTerciario texto="Turismo y excursionismo" icono={<Iconos.Estrella/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloTerciario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloCuaternario texto="Turismo y excursionismo" icono={<Iconos.Correo/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloCuaternario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloQuinario texto="Turismo y excursionismo" icono={<Iconos.Telefono/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloQuinario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloQuinario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloQuinario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloSextario texto="Turismo y excursionismo" icono={<Iconos.Foro/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSextario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloSextario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSextario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloSeptenario texto="Turismo y excursionismo" icono={<Iconos.Favorito/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSeptenario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.TituloSeptenario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSeptenario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.ParrafoPrimario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.ParrafoSecundario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.ParrafoTerciario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.ParrafoCuaternario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EtiquetaPrimaria texto="Artículo" primerIcono={<Iconos.Vender/>} segundoIcono={<Iconos.Cerrar/>} enlace="google.com"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaPrimaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EtiquetaSecundaria texto="Artículo" primerIcono={<Iconos.Vender/>} segundoIcono={<Iconos.Cerrar/>} enlace="google.com"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaSecundaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EtiquetaTerciaria texto="Artículo" primerIcono={<Iconos.Vender/>} segundoIcono={<Iconos.Cerrar/>} enlace="google.com"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaTerciaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlacePrimario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlacePrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlacePrimario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlacePrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlacePrimario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlacePrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceSecundario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceSecundario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceSecundario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceTerciario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceTerciario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceTerciario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} enlace="google.com" nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceAlternativoPrimario texto="Inicia sesión" icono={<Iconos.Enlace/>} enlace="google.com" color="#B66C0C" flotar="#B66C0C"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceAlternativoPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EnlaceAlternativoSecundario texto="Inicia sesión" icono={<Iconos.Enlace/>} enlace="google.com" color="#B66C0C" flotar="#B66C0C"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EnlaceAlternativoPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonPrimario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonPrimario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonPrimario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonSecundario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonSecundario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonSecundario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonSecundario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonTerciario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonTerciario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonTerciario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonTerciario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="alto"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="base"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.BotonCuaternario texto="Anchor text" icono={<Iconos.Calendario/>} nivel="bajo"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>BotonCuaternario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.AccionPrimaria icono={<Iconos.Persona/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionPrimaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.AccionSecundaria icono={<Iconos.Borrar/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionSecundaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.AccionTerciaria icono={<Iconos.Borrar/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionTerciaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.AccionCuaternaria icono={<Iconos.FlechaDerecha/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionCuaternaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.AccionQuinaria icono={<Iconos.Cerrar/>}/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>AccionQuinaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Nombre" nombre="nombre" valor={entrada.nombre} accion={(e) => setEntrada({ ...entrada, nombre: e.target.value })} marcador="Primer nombre" informacion="Usa solo caracteres alfabéticos" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Apellido" nombre="apellido" valor={entrada.apellido} accion={(e) => setEntrada({ ...entrada, apellido: e.target.value })} marcador="Primer apellido" informacion="Usa solo caracteres alfabéticos" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", border: "1px so boxSizing: 'border-box',lid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>                
                <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Teléfono" nombre="telefono" valor={entrada.telefono} accion={(e) => setEntrada({ ...entrada, telefono: e.target.value })} informacion="Usa solo caracteres numéricos" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="RUT" nombre="rut" valor={entrada.rut} accion={(e) => setEntrada({ ...entrada, rut: e.target.value })} marcador="Primer apellido" informacion="Usa solo caracteres alfanuméricos" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Correo electrónico" nombre="correo" valor={entrada.correo} accion={(e) => setEntrada({ ...entrada, correo: e.target.value })} marcador="ejemplo@correo.cl" informacion="" tipo="text"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Contraseña" nombre="contrasena" valor={entrada.contrasena} accion={(e) => setEntrada({ ...entrada, contrasena: e.target.value })} informacion="Usa como mínimo un símbolo" tipo="password"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaTexto estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Confirmar contraseña" nombre="confirmar" valor={entrada.confirmar} accion={(e) => setEntrada({ ...entrada, confirmar: e.target.value })} informacion="Usa como mínimo un símbolo" tipo="password"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaTexto</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaCampo estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Mensaje" nombre="mensaje" valor={entrada.mensaje} accion={(e) => setEntrada({ ...entrada, mensaje: e.target.value })} marcador="Escribe tu mensaje"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaCampo</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaSeleccion estilo="var(--color-neutro-mas-mas-mas-mas-alto)" etiqueta="Categoría" nombre="categoria" valor={form.categoria} accion={manejarCambio} requerido opciones={[ { valor: "", texto: "Selecciona una categoría" }, { valor: "ropa", texto: "Ropa" }, { valor: "electronica", texto: "Electrónica" }, { valor: "hogar", texto: "Hogar" }, ]} informacion="Elige una opción válida" error={errores.categoria} />
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaSeleccion</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaNumero estilo="var(--color-neutro-mas-mas-mas-mas-alto)" nombre="cantidad" etiqueta="Cantidad" min={1} max={999} step={1} value={1} />
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaNumero</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaVerificacionPrimaria texto="Acepto los términos y condiciones" />
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaVerificacionPrimaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaVerificacionSecundaria texto="Acepto los términos y condiciones" />
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaVerificacionSecundaria</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaRadioPrimaria texto="Primera opción" />
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaRadioPrimario</p>
            </section>

            <section style={{ padding: "1rem", boxSizing: 'border-box', border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Elementos.EntradaRadioSecundaria texto="Primera opción" />
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EntradaRadioSecundario</p>
            </section>
        </div>
    );
}