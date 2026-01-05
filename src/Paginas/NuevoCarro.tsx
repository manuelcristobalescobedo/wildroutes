import "./NuevoCarro.css";
import "../index.css";
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import Elementos from "../Componentes/Elementos/Indice";
import Iconos from "../Iconos/Indice";

export default function NuevoCarro() {
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
                    <Elementos.BotonPrimario nivel="alto" texto="Pegar" icono={<Iconos.Dinero />} />
                    <div className="Ayuda">
                        <Elementos.EnlaceAlternativoPrimario texto="Políticas de devolución" enlace="/" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                        <Elementos.ParrafoPrimario texto="|" />
                        <Elementos.EnlaceAlternativoPrimario texto="¿Necesitas ayuda?" enlace="/" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
                    </div>
                </div>
                <div className="Articulos"></div>
            </section>
            <Pie />
        </main>
    );
}