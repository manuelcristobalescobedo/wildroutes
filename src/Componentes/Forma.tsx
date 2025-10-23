import './Forma.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iniciarSesion } from "../Redux/userSlice";
import type { RootType } from "../Redux/store";

const Forma: React.FC = () => {
    const [mensajeIngreso, setMensajeIngreso] = useState("");
    const [visibleIngreso, setVisibleIngreso] = useState(false);
    const [exitoIngreso, setExitoIngreso] = useState(false);
    const [errorIngreso, setErrorIngreso] = useState(false);

    const dispatch = useDispatch();
    const usuarioActivo = useSelector((state: RootType) => state.users.usuarioActivo);

    const handleSubmitIngreso = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const correo = (e.currentTarget.correo as HTMLInputElement).value;
        const contrasena = (e.currentTarget.contrasena as HTMLInputElement).value;

        if (!correo || !contrasena) {
            setMensajeIngreso("Todos los campos son obligatorios.");
            setExitoIngreso(false);
            setErrorIngreso(true);
            setVisibleIngreso(true);
            setTimeout(() => setVisibleIngreso(false), 3000);
            return;
        }

        // Despacha la acción de login
        dispatch(iniciarSesion({ correo, contrasena }));
    };

    useEffect(() => {
        if (usuarioActivo) {
            setMensajeIngreso("Inicio de sesión exitoso.");
            setExitoIngreso(true);
            setErrorIngreso(false);
            setVisibleIngreso(true);
            setTimeout(() => setVisibleIngreso(false), 3000);
        }
    }, [usuarioActivo]);

    return (
        <section className='forma'>
            <div>
                <div>
                    <div style={{backgroundImage: "url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                            <div className={`problema ${visibleIngreso ? "visible" : ""} ${exitoIngreso ? "exito" : errorIngreso ? "error" : ""}`}>
                            <p>{mensajeIngreso}</p>
                        </div>
                    </div>
                    <div>
                        <h1>Ingresa a tu cuenta</h1>
                        {/* Componente:  Ingreso */}
                        <form className="ingreso" onSubmit={handleSubmitIngreso}>
                            <div>
                                {/* Componente:  Etiqueta */}
                                <label className='etiqueta' htmlFor='correo'>Correo</label>
                                {/* Componente:  Entrada */}
                                <input className='entrada' type="text" placeholder="Correo" id="correo" name="correo"/>
                                {/* Componente:  Etiqueta */}
                                <label className='etiqueta' htmlFor='contrasena'>Contraseña</label>
                                {/* Componente:  Entrada */}
                                <input className='entrada' type="password" placeholder="Contraseña" id="contrasena" name="contrasena"/>
                            </div>
                            <a>¿Olvidaste tu contraseña?</a>
                            <button type="submit">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Forma;