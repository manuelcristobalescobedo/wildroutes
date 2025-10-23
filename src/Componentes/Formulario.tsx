import './Formulario.css';
import React, { useState } from "react";
import { validarFormulario } from "../Validaciones/Indice";
import { useDispatch } from "react-redux";
import { registrarUsuario } from "../Redux/userSlice";
import type { DatosFormulario } from "../Tipos/Usuario";

const Formulario: React.FC = () => {
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [visibleFormulario, setVisibleFormulario] = useState(false);
    const [exitoFormulario, setExitoFormulario] = useState(false);
    const dispatch = useDispatch();

    const handleSubmitFormulario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const datosFormulario: DatosFormulario = {
            nombre: e.currentTarget.nombre.value,
            apellido: e.currentTarget.apellido.value,
            telefono: e.currentTarget.telefono.value,
            rut: e.currentTarget.rut.value,
            correo: e.currentTarget.correo.value,
            contrasena: e.currentTarget.contrasena.value,
            repetirContrasena: e.currentTarget.repite.value,
            novedades: e.currentTarget.novedades.checked
        };

        const resultado = validarFormulario(datosFormulario);
        setMensajeFormulario(resultado);
        setExitoFormulario(resultado === "El formulario se envió correctamente.");
        setVisibleFormulario(true);

        if (resultado === "El formulario se envió correctamente.") {
            dispatch(registrarUsuario({
                nombre: datosFormulario.nombre,
                apellido: datosFormulario.apellido,
                telefono: datosFormulario.telefono,
                rut: datosFormulario.rut,
                correo: datosFormulario.correo,
                contrasena: datosFormulario.contrasena,
                novedades: datosFormulario.novedades
            }));
        }

        setTimeout(() => setVisibleFormulario(false), 3000);
    };

    return (
        <section className='formulario'>
            <div>
                <div style={{backgroundImage: "url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                    <div className={`error ${visibleFormulario ? "visible" : ""} ${exitoFormulario ? "exito" : ""}`}>
                        <p>{mensajeFormulario}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Regístrate</h1>
                        {/* Componente:  Inscripcion */}
                        <form className="inscripcion" onSubmit={handleSubmitFormulario}>
                            <div>
                                <label htmlFor='nombre'>Nombre</label>
                                {/* Componente:  Entrada */}
                                <input className="entrada" type="text" placeholder="Nombre" id="nombre" name="nombre"/>
                                <label htmlFor='apellido'>Apellido</label>
                                {/* Componente:  Entrada */}
                                <input className="entrada" type="text" placeholder="Apellido" id="apellido" name="apellido"/>
                                <label htmlFor='telefono'>Teléfono</label>
                                {/* Componente:  Entrada */}
                                <input className='entrada' type="text" placeholder="Teléfono" id="telefono" name="telefono"/>
                                <label htmlFor='rut'>RUT</label>
                                {/* Componente:  Entrada */}
                                <input className='entrada' type="text" placeholder="RUT" id="rut" name="rut"/>
                                <label htmlFor='correo'>Correo</label>
                                {/* Componente:  Entrada */}
                                <input className='entrada' type="text" placeholder="Correo" id="correo" name="correo"/>
                                <label htmlFor='contrasena'>Contraseña</label>
                                {/* Componente:  Entrada */}
                                <input className='entrada' type="password" placeholder="Contraseña" id="contrasena" name="contrasena"/>
                                <label htmlFor='repite'>Repite la contraseña</label>
                                {/* Componente:  Entrada */}
                                <input className='entrada' type="password" placeholder="Repite la contraseña" id="repite" name="repite"/>
                            </div>
                            {/* Componente:  Novedades */}
                            <div className='novedades'>
                                <input type="checkbox" id="novedades" name="novedades" />
                                <label htmlFor="novedades">Quiero recibir ofertas y novedades en mi correo</label>
                            </div>
                            {/* Componente:  Términos */}
                            <div className='terminos'>
                                <input type="checkbox" id="terminos" name="terminos" />
                                <label htmlFor="terminos">He leído y acepto los <a>Términos y condiciones</a> de uso</label>
                            </div>
                            <button type="submit">Registrarme</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Formulario;

// Los archivos store.ts, Producto.tsx y Formulario.tsx han generado tantos errores de lint que ya no se parecen en nada a su versión original