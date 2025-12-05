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

export default function PaginaElementos() {
    return (
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem", }}>
            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloPrimario texto="Turismo y excursionismo" icono={<Iconos.Favorito/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloPrimario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloPrimario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloPrimario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSecundario texto="Turismo y excursionismo" icono={<Iconos.Enlace/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSecundario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSecundario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSecundario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloTerciario texto="Turismo y excursionismo" icono={<Iconos.Estrella/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloTerciario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloTerciario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloTerciario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloCuaternario texto="Turismo y excursionismo" icono={<Iconos.Correo/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloCuaternario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloCuaternario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloCuaternario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloQuinario texto="Turismo y excursionismo" icono={<Iconos.Telefono/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloQuinario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloQuinario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloQuinario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSextario texto="Turismo y excursionismo" icono={<Iconos.Foro/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSextario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSextario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSextario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSeptenario texto="Turismo y excursionismo" icono={<Iconos.Favorito/>} color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSeptenario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <TituloSeptenario texto="Turismo y excursionismo" color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>TituloSeptenario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <ParrafoPrimario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoPrimario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <ParrafoSecundario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoSecundario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <ParrafoTerciario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoTerciario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <ParrafoCuaternario texto="Turismo es un término que comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros." color="#333333"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>ParrafoCuaternario</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EtiquetaPrimaria texto="Artículo" icono={<Iconos.Vender/>} color="#606060"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaPrimaria</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EtiquetaSecundaria texto="Artículo" icono={<Iconos.Vender/>} color="#606060"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaSecundaria</p>
            </section>

            <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <EtiquetaTerciaria texto="Artículo" icono={<Iconos.Vender/>} color="#606060"/>
                <p style={{ fontFamily: "sans-serif", margin: "0", padding: "0" }}>EtiquetaTerciaria</p>
            </section>

        </div>
    );
}