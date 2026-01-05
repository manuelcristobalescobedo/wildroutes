import "./NuevoPago.css";
import "../index.css";
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import Elementos from "../Componentes/Elementos/Indice";
import Iconos from "../Iconos/Indice";

export default function NuevoPago() {
    return (
        <main>
            <Encabezado />
            <section className="Compra">
                <div className="Especificaciones">
                    <Elementos.AccionCuaternaria icono={<Iconos.FlechaIzquierda />} />
                    <Elementos.TituloCuaternario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Detalles de la reserva" />
                    <Elementos.BotonSecundario texto="Iniciar sesión" nivel="alto" accion={() => {}} />
                    <Elementos.EntradaTexto tipo="text" etiqueta="Nombre y apellido" nombre="nombre" valor="" accion={() => {}} />
                    <Elementos.EntradaTexto tipo="mail" etiqueta="Correo electrónico" nombre="correo" valor="" accion={() => {}} />
                    <Elementos.EntradaTexto tipo="text" etiqueta="Teléfono" nombre="correo" valor="+56 9" accion={() => {}} />
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Carro de compra" icono={<Iconos.Carro />} />
                    <table className="Tabla">
                        <tbody>
                            <tr>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                                </td>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$75.000" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                                </td>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$75.000" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                                </td>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$75.000" />
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Descuento" />
                                </td>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="0%" />
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Total" />
                                </td>
                                <td>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$225.000" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Código de descuento" icono={<Iconos.Descuento />} />
                    <Elementos.EntradaTexto tipo="text" etiqueta="" nombre="nombre" valor="" accion={() => {}} />
                    <Elementos.BotonSecundario texto="Aplicar" nivel="alto" accion={() => {}} />
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Formas de pago" icono={<Iconos.Dinero />} />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="¿Cómo vas a efectuar el pago?" />
                    <div className="Medios">
                        <div>
                            <Elementos.EntradaRadioPrimaria texto="Débito o crédito" name="pago" onChange={() => {}} checked />
                            <Iconos.Webpay />
                        </div>
                        <div>
                            <Elementos.EntradaRadioPrimaria texto="Débito, crédito o prepago" name="prepago" onChange={() => {}} checked />
                            <Iconos.Mercado />
                        </div>
                    </div>
                    <Elementos.BotonPrimario nivel="alto" texto="Pagar" icono={<Iconos.Dinero />} />
                    <div className="Ayuda">
                        <Elementos.EnlaceAlternativoPrimario texto="Políticas de devolución" enlace="/" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                        <Elementos.ParrafoPrimario texto="|" />
                        <Elementos.EnlaceAlternativoPrimario texto="¿Necesitas ayuda?" enlace="/" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                    </div>
                </div>
                <div className="Articulos">
                    <Elementos.TituloCuaternario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Detalles de tu compra" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Corrobora la información antes de pagar" />
                    <div>
                        <div className="Pieza">
                            <div>
                                <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                            </div>
                            <div>
                                <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                                <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" texto="Vicuña, Coquimbo, Chile" icono={<Iconos.Ubicacion />} />
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Fecha: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="2026-01-15" />
                                </span>
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Hora: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="09:00" />
                                </span>
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Personas: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="1" />
                                </span>
                                <div>
                                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$75.000" />
                                    <div>
                                        <Elementos.AccionTerciaria accion={()=>{}} icono={<Iconos.Editar />} />
                                        <Elementos.AccionTerciaria accion={()=>{}} icono={<Iconos.Borrar />} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Pieza">
                            <div>
                                <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                            </div>
                            <div>
                                <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                                <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" texto="Vicuña, Coquimbo, Chile" icono={<Iconos.Ubicacion />} />
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Fecha: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="2026-01-15" />
                                </span>
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Hora: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="09:00" />
                                </span>
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Personas: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="1" />
                                </span>
                                <div>
                                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$75.000" />
                                    <div>
                                        <Elementos.AccionTerciaria accion={()=>{}} icono={<Iconos.Editar />} />
                                        <Elementos.AccionTerciaria accion={()=>{}} icono={<Iconos.Borrar />} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Pieza">
                            <div>
                                <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                            </div>
                            <div>
                                <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                                <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" texto="Vicuña, Coquimbo, Chile" icono={<Iconos.Ubicacion />} />
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Fecha: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="2026-01-15" />
                                </span>
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Hora: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="09:00" />
                                </span>
                                <span>
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Personas: " />
                                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="1" />
                                </span>
                                <div>
                                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$75.000" />
                                    <div>
                                        <Elementos.AccionTerciaria accion={()=>{}} icono={<Iconos.Editar />} />
                                        <Elementos.AccionTerciaria accion={()=>{}} icono={<Iconos.Borrar />} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Pie />
        </main>
    );
}