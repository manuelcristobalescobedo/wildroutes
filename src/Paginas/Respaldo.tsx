import './Principal.css';
import React, { useState } from "react";
import { camposObligatorios, fechaPasada, numeroNegativo, numeroCero } from '../Validaciones/Indice';
import { validarFormulario } from "../Validaciones/Indice";

const Principal: React.FC = () => {
    const [mensajeBusqueda, setMensajeBusqueda] = useState("");
    const [visibleBusqueda, setVisibleBusqueda] = useState(false);
    const [exitoBusqueda, setExitoBusqueda] = useState(false);

    const [mensajeRegistro, setMensajeRegistro] = useState("");
    const [visibleRegistro, setVisibleRegistro] = useState(false);
    const [exitoRegistro, setExitoRegistro] = useState(false);

    const [mensajeIngreso, setMensajeIngreso] = useState("");
    const [visibleIngreso, setVisibleIngreso] = useState(false);
    const [exitoIngreso, setExitoIngreso] = useState(false);

    const handleSubmitBusqueda = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const texto = (form.querySelector('input[name="texto"]') as HTMLInputElement).value;
        const fecha = (form.querySelector('input[name="fecha"]') as HTMLInputElement).value;
        const cantidad = Number((form.querySelector('input[name="cantidad"]') as HTMLInputElement).value);

        if (camposObligatorios(texto, fecha, cantidad)) {
            setMensajeBusqueda('Todos los campos son obligatorios.');
            setExitoBusqueda(false);
        } else if (fechaPasada(fecha)) {
            setMensajeBusqueda('No puedes seleccionar una fecha pasada.');
            setExitoBusqueda(false);
        } else if (numeroNegativo(cantidad)) {
            setMensajeBusqueda('No puedes seleccionar un número negativo de personas.');
            setExitoBusqueda(false);
        } else if (numeroCero(cantidad)) {
            setMensajeBusqueda('No puedes seleccionar cero personas.');
            setExitoBusqueda(false);
        } else {
            setMensajeBusqueda('El formulario se envió correctamente.');
            setExitoBusqueda(true);
        }

        setVisibleBusqueda(true);
        setTimeout(() => setVisibleBusqueda(false), 3000);
    };

    const handleSubmitRegistro = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const datos = {
            nombre: (e.currentTarget.nombre as HTMLInputElement).value,
            apellido: (e.currentTarget.apellido as HTMLInputElement).value,
            telefono: (e.currentTarget.telefono as HTMLInputElement).value,
            rut: (e.currentTarget.rut as HTMLInputElement).value,
            correo: (e.currentTarget.correo as HTMLInputElement).value,
            contrasena: (e.currentTarget.contrasena as HTMLInputElement).value,
            repetirContrasena: (e.currentTarget.repite as HTMLInputElement).value,
        };

        const resultado = validarFormulario(datos);
        setMensajeRegistro(resultado);
        setExitoRegistro(resultado === "El formulario se envió correctamente.");
        setVisibleRegistro(true);
        setTimeout(() => setVisibleRegistro(false), 3000);
    };

    const handleSubmitIngreso = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const correo = (e.currentTarget.correo as HTMLInputElement).value;
        const contrasena = (e.currentTarget.contrasena as HTMLInputElement).value;

        console.log(`correo: '${correo}', contraseña: '${contrasena}'`);

        if (correo === '' || contrasena === '') {
            setMensajeIngreso("Todos los campos son obligatorios.");
            setExitoIngreso(false);
        } else if (correo !== 'tangananica@correo.cl' || contrasena !== 'tanganana') {
            setMensajeIngreso("El correo o la contraseña son incorrectos.");
            setExitoIngreso(false);
        } else {
            setMensajeIngreso("El formulario se envió correctamente.");
            setExitoIngreso(true);
        }

        setVisibleIngreso(true);
        setTimeout(() => setVisibleIngreso(false), 3000);
    };

    const [carroAbierto, setCarroAbierto] = useState(false);

    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);

    return (
        <div className='pagina'>
            {/* Componente: Encabezado */}
            <header className="encabezado">
                {/* Componente: Navegación */}
                <div className='navegacion'>
                    {/* Componente: Logotipo */}
                    <a className='logotipo'>
                        <svg width="inherit" height="inherit" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M0 20L0.770428 0H5.36446L4.90791 8.29132C4.86987 9.03828 4.82231 9.70121 4.76524 10.2801C4.70817 10.8403 4.6511 11.3352 4.59403 11.7647H4.62257C4.83182 11.2045 5.04107 10.6443 5.25032 10.084C5.4786 9.52381 5.71639 8.94491 5.96368 8.34734L9.41634 0H13.297L12.9831 8.34734C12.9641 8.81419 12.9451 9.22502 12.9261 9.57983C12.907 9.93464 12.888 10.2801 12.869 10.6162C12.85 10.9524 12.8214 11.3259 12.7834 11.7367H12.8405C12.9356 11.4192 13.0402 11.0924 13.1543 10.7563C13.2875 10.4015 13.4302 10.028 13.5824 9.63586C13.7345 9.2437 13.8962 8.80486 14.0674 8.31933L17.2062 0H22L14.2387 20H8.81712L8.95979 12.9412C8.95979 12.6797 8.9693 12.3996 8.98833 12.1008C9.00735 11.7834 9.02637 11.4659 9.0454 11.1485C9.08344 10.8123 9.12149 10.4855 9.15953 10.1681H9.10246C8.9693 10.5789 8.82663 10.9991 8.67445 11.4286C8.52227 11.8394 8.36057 12.2502 8.18936 12.6611L5.33593 20H0Z"/>
                        </svg>
                    </a>
                    {/* Componente: Barra de búsqueda */}
                    <form className="busqueda" onSubmit={handleSubmitBusqueda}>
                        <div>
                            <input type="text" placeholder="Ubicación" name="texto"/>
                            <input type="date" name="fecha" />
                            <input type="number" placeholder="Personas" name="cantidad"/>
                        </div>
                        <button type="submit">
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill='currentColor' d="M15.8896 16.6477L10.9265 11.6843C10.5098 12.0006 10.053 12.2455 9.55587 12.4191C9.05879 12.5927 8.5458 12.6796 8.01691 12.6796C6.71719 12.6796 5.61226 12.2246 4.70212 11.3148C3.79198 10.4049 3.33691 9.30045 3.33691 8.00143C3.33691 6.70254 3.79184 5.59768 4.70171 4.68684C5.61157 3.77615 6.71601 3.3208 8.01504 3.3208C9.31393 3.3208 10.4188 3.77587 11.3296 4.68601C12.2403 5.59615 12.6957 6.70108 12.6957 8.0008C12.6957 8.54566 12.6062 9.06663 12.4273 9.56372C12.2483 10.0609 12.006 10.5098 11.7005 10.9104L16.6636 15.8735L15.8896 16.6477ZM8.01629 11.5964C9.02059 11.5964 9.87101 11.2481 10.5675 10.5514C11.2642 9.8549 11.6125 9.00448 11.6125 8.00018C11.6125 6.99587 11.2642 6.14545 10.5675 5.44893C9.87101 4.75226 9.02059 4.40393 8.01629 4.40393C7.01198 4.40393 6.16157 4.75226 5.46504 5.44893C4.76837 6.14545 4.42004 6.99587 4.42004 8.00018C4.42004 9.00448 4.76837 9.8549 5.46504 10.5514C6.16157 11.2481 7.01198 11.5964 8.01629 11.5964Z"/>
                            </svg>
                        </button>
                    </form>
                    <button className='coche' onClick={abrirCarro}>
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill='currentColor' d="M5.62408 17.6316C5.2638 17.6316 4.95921 17.5056 4.71033 17.2537C4.46144 17.0019 4.33699 16.6958 4.33699 16.3354C4.33699 15.9751 4.46289 15.6705 4.7147 15.4216C4.96664 15.1727 5.27276 15.0483 5.63303 15.0483C5.99331 15.0483 6.2979 15.1742 6.54678 15.426C6.79567 15.6779 6.92012 15.9841 6.92012 16.3443C6.92012 16.7046 6.79421 17.0092 6.54241 17.2581C6.29046 17.5071 5.98435 17.6316 5.62408 17.6316ZM14.3676 17.6316C14.0073 17.6316 13.7028 17.5056 13.4539 17.2537C13.205 17.0019 13.0805 16.6958 13.0805 16.3354C13.0805 15.9751 13.2064 15.6705 13.4582 15.4216C13.7102 15.1727 14.0163 15.0483 14.3766 15.0483C14.7369 15.0483 15.0414 15.1742 15.2903 15.426C15.5392 15.6779 15.6637 15.9841 15.6637 16.3443C15.6637 16.7046 15.5378 17.0092 15.286 17.2581C15.034 17.5071 14.7279 17.6316 14.3676 17.6316ZM4.70553 4.2085H16.6943L14.0099 10.6316H6.60449L5.50512 12.5483H15.6637V13.6316H3.61095L5.8897 9.71495L3.12866 3.29183H1.41699V2.2085H3.85137L4.70553 4.2085Z"/>
                        </svg>
                        <span/>
                    </button>
                    <div>
                        {/* Componente:  Botón acceder*/}
                        <button className='acceder'>Ingresar</button>
                        {/* Componente:  Botón registrarse*/}
                        <button className='registrarse'>Registrarse</button>
                    </div>
                </div>
                {/* Componente:  Barra de mensaje*/}
                <div className={`mensaje ${exitoBusqueda ? 'exito' : ''} ${visibleBusqueda ? 'visible' : ''}`}>
                    <p>{mensajeBusqueda}</p>
                </div>
            </header>

            {/* Componente:  Héroe */}
            <section className="heroe">
                {/* <div style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 139, 0) 50%, rgba(0, 0, 139, 1) 100%), url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}> */}
                <div style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                    <h1>Caminata por las lagunas altiplánicas de Piedras Rojas</h1>
                    <p>Camina entre el viento, la sal y los volcanes.</p>
                    {/* Componente:  Botón conocerlo */}
                    <button className='conocerlo'>¡Quiero conocerlo!</button>
                </div>
            </section>

            {/* Componente:  Destacado */}
            <section className="destacado">
                <h3>Pensado para tí</h3>
                <div>
                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>
                </div>
            </section>

            {/* Componente:  Explora */}
            <section className='explora'>
                <h3>Explora más actividades</h3>
                <div>
                    {/* Componente:  Actividad*/}
                    <a className='actividad' style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                        <h4>Deporte aventura</h4>
                    </a>
                    {/* Componente:  Actividad*/}
                    <a className='actividad' style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                        <h4>Turismo cultural</h4>
                    </a>
                    {/* Componente:  Actividad*/}
                    <a className='actividad' style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                        <h4>Turismo escénico</h4>
                    </a>
                </div>
            </section>

            {/* Componente:  Frecuentes */}
            <section className='frecuentes'>
                <h3>Preguntas frecuentes</h3>
                <div>
                    {/* Componente:  Pregunta*/}
                    <a className='pregunta'>
                        ¿Puedo reservar una actividad sin iniciar sesión?
                        <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M8.20879 6.49707L11.7119 10.0002L8.20879 13.5033L8.20879 6.49707Z"/>
                        </svg>
                    </a>
                    {/* Componente:  Pregunta*/}
                    <a className='pregunta'>
                        ¿Qué debo hacer para cancelar una reserva?
                        <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M8.20879 6.49707L11.7119 10.0002L8.20879 13.5033L8.20879 6.49707Z"/>
                        </svg>
                    </a>
                    {/* Componente:  Pregunta*/}
                    <a className='pregunta'>
                        ¿Puedo sumar a una persona a último minuto?
                        <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M8.20879 6.49707L11.7119 10.0002L8.20879 13.5033L8.20879 6.49707Z"/>
                        </svg>
                    </a>
                    {/* Componente:  Pregunta*/}
                    <a className='pregunta'>
                        ¿Puedo cambiar el punto donde pasarán a buscarme?
                        <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M8.20879 6.49707L11.7119 10.0002L8.20879 13.5033L8.20879 6.49707Z"/>
                        </svg>
                    </a>
                </div>
            </section>

            {/* Componente:  Pie */}
            <footer className="pie">
                <div>
                    <div>
                        <div>
                            <h5>Destinos</h5>
                            <a>Zona norte</a>
                            <a>Zona centro</a>
                            <a>Zona sur</a>
                            <a>Zona austral</a>
                            <a>Zona insular</a>
                            <h5>Actividades</h5>
                            <a>Deporte aventura</a>
                            <a>Turismo cultural</a>
                            <a>Turismo escénico</a>
                        </div>
                        <div>
                            <h5>Nosotros</h5>
                            <a>Misión</a>
                            <a>Historia</a>
                            <a>Equipo</a>
                            <h5>Servicio al cliente</h5>
                            <a>Política de privacidad</a>
                            <a>Preguntas frecuentes</a>
                            <a>Trabaja con nosotros</a>
                            <a>Términos y condiciones</a>
                        </div>
                        <div>
                            {/* Componente:  Sociales*/}
                            <div className='sociales'>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M11.5512 8.37978L17.6209 1.26611H16.1826L10.9122 7.44284L6.70275 1.26611H1.84766L8.21316 10.6064L1.84766 18.0662H3.28608L8.85174 11.5433L13.2972 18.0662H18.1523L11.5512 8.37978ZM9.58099 10.6887L8.93607 9.75856L3.80436 2.35784H6.0137L10.1551 8.33047L10.8 9.26052L16.1832 17.024H13.9739L9.58099 10.6887Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.83301 9.66635C5.83301 7.34672 7.69849 5.46631 9.99967 5.46631C12.3008 5.46631 14.1663 7.34672 14.1663 9.66635C14.1663 11.9859 12.3008 13.8664 9.99967 13.8664C7.69849 13.8664 5.83301 11.9859 5.83301 9.66635ZM9.99967 7.14631C8.61892 7.14631 7.49967 8.27455 7.49967 9.66635C7.49967 11.0581 8.61892 12.1863 9.99967 12.1863C11.3804 12.1863 12.4997 11.0581 12.4997 9.66635C12.4997 8.27455 11.3804 7.14631 9.99967 7.14631Z"/>
                                        <path fill="currentColor" d="M14.3747 6.30605C14.95 6.30605 15.4163 5.83596 15.4163 5.25605C15.4163 4.67616 14.95 4.20605 14.3747 4.20605C13.7993 4.20605 13.333 4.67616 13.333 5.25605C13.333 5.83596 13.7993 6.30605 14.3747 6.30605Z"/>
                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.54906 1.32486C5.66238 1.36703 5.05687 1.50966 4.52753 1.71932C3.97969 1.93453 3.51536 2.22333 3.05335 2.69071C2.59135 3.15809 2.30684 3.62647 2.09484 4.17953C1.88967 4.71428 1.75067 5.32513 1.71151 6.21939C1.67234 7.11365 1.66367 7.40109 1.66801 9.6822C1.67234 11.9633 1.68234 12.2492 1.72534 13.1453C1.76767 14.0389 1.90867 14.6491 2.11667 15.1829C2.33051 15.7352 2.61668 16.203 3.08051 16.6689C3.54436 17.1348 4.00869 17.4209 4.5587 17.6349C5.08871 17.8414 5.69488 17.9822 6.58189 18.0213C7.4689 18.0604 7.7544 18.0695 10.0167 18.0651C12.2791 18.0608 12.5639 18.0507 13.4528 18.0082C14.7465 17.9463 16.0135 17.5883 16.9477 16.6422C17.8822 15.6958 18.2327 14.4186 18.289 13.1136C18.3278 12.217 18.337 11.9307 18.3327 9.64994C18.3283 7.36919 18.3182 7.08325 18.276 6.18747C18.2146 4.88203 17.8596 3.60684 16.9212 2.66333C15.9835 1.72056 14.7142 1.36763 13.4202 1.31125C12.5331 1.27261 12.2476 1.2627 9.98441 1.26707C7.72123 1.27144 7.4379 1.28118 6.54906 1.32486ZM6.63021 3.00287L6.6276 3.003C5.89817 3.03769 5.47518 3.14902 5.13707 3.28294L5.13272 3.28466C4.78657 3.42064 4.522 3.58514 4.23398 3.87651C3.94585 4.16798 3.78371 4.43489 3.64949 4.78504C3.51782 5.12821 3.40881 5.55684 3.37655 6.29349C3.3391 7.14859 3.33035 7.40538 3.33466 9.67901C3.33898 11.9522 3.34894 12.2074 3.39006 13.0642L3.39011 13.0652C3.425 13.8016 3.53522 14.2281 3.66794 14.5686L3.66926 14.572C3.80474 14.9219 3.96791 15.1886 4.2569 15.4788C4.54556 15.7687 4.80964 15.9316 5.15895 16.0676C5.49993 16.2004 5.92557 16.3107 6.65478 16.3429C7.50358 16.3804 7.75919 16.3894 10.0136 16.3851C12.268 16.3808 12.5231 16.3707 13.3738 16.33C14.4412 16.279 15.2364 15.9937 15.7664 15.4569C16.2977 14.9189 16.5776 14.1164 16.6239 13.0407C16.6611 12.1823 16.6703 11.9256 16.666 9.65322C16.6617 7.38068 16.6516 7.12465 16.6112 6.26709C16.5606 5.19052 16.278 4.38948 15.7442 3.85277C15.2127 3.31845 14.416 3.0362 13.3482 2.98969C12.4981 2.95265 12.2415 2.94272 9.98757 2.94707C7.73166 2.95142 7.47941 2.96114 6.63021 3.00287Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M19.1663 9.66631C19.1663 4.56316 15.0623 0.42627 9.99967 0.42627C4.93706 0.42627 0.833008 4.56316 0.833008 9.66631C0.833008 14.2782 4.18513 18.1008 8.56734 18.794V12.3372H6.23991V9.66631H8.56734V7.63057C8.56734 5.31481 9.93592 4.03565 12.0298 4.03565C13.0327 4.03565 14.0817 4.21611 14.0817 4.21611V6.49002H12.9258C11.7871 6.49002 11.4319 7.20228 11.4319 7.93297V9.66631H13.9743L13.5678 12.3372H11.4319V18.794C15.8143 18.1008 19.1663 14.2782 19.1663 9.66631Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M19.5818 4.33548C19.3522 3.45795 18.6738 2.76699 17.8137 2.53206C16.2534 2.10596 10 2.10596 10 2.10596C10 2.10596 3.74546 2.10596 2.18637 2.53206C1.32613 2.76699 0.647727 3.45795 0.418182 4.33548C4.96705e-08 5.92586 0 9.246 0 9.246C0 9.246 4.96705e-08 12.5649 0.418182 14.1565C0.647727 15.0339 1.32613 15.7249 2.18637 15.9599C3.74659 16.386 10 16.386 10 16.386C10 16.386 16.2546 16.386 17.8137 15.9599C18.6738 15.7249 19.3522 15.0339 19.5818 14.1565C20 12.5661 20 9.246 20 9.246C20 9.246 20 5.92701 19.5818 4.33548ZM7.95454 12.2598V6.23219L13.1818 9.246L7.95454 12.2598Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M15.2594 4.802C14.3328 4.18249 13.6641 3.19118 13.4555 2.03568C13.4103 1.78598 13.3857 1.52896 13.3857 1.26611H10.4287L10.4239 13.4202C10.3742 14.7813 9.282 15.8736 7.94294 15.8736C7.52671 15.8736 7.13481 15.7668 6.78996 15.5807C5.9987 15.1536 5.45724 14.303 5.45724 13.3242C5.45724 11.9185 6.57243 10.7748 7.94294 10.7748C8.19874 10.7748 8.44417 10.818 8.67642 10.8928V7.79673C8.43625 7.76313 8.19209 7.74214 7.94294 7.74214C4.94174 7.74214 2.5 10.2463 2.5 13.3242C2.5 15.2127 3.42005 16.8839 4.82365 17.8945C5.70769 18.531 6.78314 18.9062 7.94294 18.9062C10.9442 18.9062 13.3859 16.4021 13.3859 13.324V7.16092C14.5457 8.01463 15.9667 8.51771 17.5 8.51771V5.48506C16.674 5.48506 15.9047 5.23337 15.2594 4.802Z"/>
                                    </svg>
                                </a>
                            </div>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M10.0061 9.88755C10.3761 9.88755 10.6909 9.75581 10.9505 9.49234C11.2102 9.22887 11.3401 8.91213 11.3401 8.54213C11.3401 8.17213 11.2083 7.85727 10.9447 7.59755C10.6812 7.33796 10.3645 7.20817 9.99445 7.20817C9.62445 7.20817 9.30966 7.33991 9.05008 7.60338C8.79036 7.86699 8.66049 8.1838 8.66049 8.5538C8.66049 8.9238 8.7923 9.23859 9.05591 9.49817C9.31938 9.75775 9.63612 9.88755 10.0061 9.88755ZM10.0003 17.5911C7.95904 15.8557 6.42813 14.2405 5.40758 12.7455C4.38716 11.2505 3.87695 9.86942 3.87695 8.60234C3.87695 6.9015 4.44688 5.44532 5.58674 4.2338C6.72674 3.02227 8.19445 2.4165 9.98987 2.4165C11.7853 2.4165 13.2565 3.02227 14.4034 4.2338C15.5502 5.44532 16.1236 6.9015 16.1236 8.60234C16.1236 9.86942 15.617 11.2474 14.6036 12.7363C13.5903 14.225 12.0558 15.8433 10.0003 17.5911Z"/>
                                </svg>
                                Av. Rocket 654
                            </a>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M15.6878 16.5835C14.2775 16.5835 12.8427 16.244 11.3832 15.565C9.92394 14.8861 8.57088 13.9232 7.32408 12.6764C6.08269 11.4296 5.12116 10.0725 4.43949 8.60516C3.75783 7.1378 3.41699 5.70002 3.41699 4.29183V3.396H7.4122L8.17178 6.54496L5.79845 8.8512C6.15526 9.45162 6.52567 10.0095 6.9097 10.525C7.29387 11.0405 7.68998 11.505 8.09803 11.9185C8.50831 12.3395 8.96269 12.7363 9.46116 13.1091C9.95949 13.482 10.5335 13.8608 11.183 14.2454L13.5628 11.8881L16.5837 12.5258V16.5835H15.6878Z"/>
                                </svg>
                                600 5800 650
                            </a>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M2.41699 15.5832V4.4165H17.5837V15.5832H2.41699ZM10.0003 10.6313L16.5003 6.80588V5.49984L10.0003 9.229L3.50033 5.49984V6.80588L10.0003 10.6313Z"/>
                                </svg>
                                contacto@wildroutes.cl
                            </a>
                        </div>
                    </div>
                    <p>@Copyright 2025 WildRoutes - Equipo Rocket. Todos los derechos reservados.</p>
                </div>
            </footer>

            {/* Componente:  Formulario */}
            <section className='formulario'>
                <div>
                    <div style={{backgroundImage: "url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                        <div className={`error ${visibleRegistro ? "visible" : ""} ${exitoRegistro ? "exito" : ""}`}>
                            <p>{mensajeRegistro}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Regístrate</h1>
                            {/* Componente:  Registro */}
                            <form className="registro" onSubmit={handleSubmitRegistro}>
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
                                    <input type="checkbox" id="novedades" name="caja" value="valor1"/>
                                    <label htmlFor="novedades">Quiero recibir ofertas y novedades en mi correo</label>
                                </div>
                                {/* Componente:  Términos */}
                                <div className='terminos'>
                                    <input type="checkbox" id="terminos" name="caja" value="valor2"/>
                                    <label htmlFor="terminos">He leído y acepto los <a>Términos y condiciones</a> de uso</label>
                                </div>
                                <button type="submit">Registrarme</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Componente:  Pie */}
            <footer className="pie">
                <div>
                    <div>
                        <div>
                            <h5>Destinos</h5>
                            <a>Zona norte</a>
                            <a>Zona centro</a>
                            <a>Zona sur</a>
                            <a>Zona austral</a>
                            <a>Zona insular</a>
                            <h5>Actividades</h5>
                            <a>Deporte aventura</a>
                            <a>Turismo cultural</a>
                            <a>Turismo escénico</a>
                        </div>
                        <div>
                            <h5>Nosotros</h5>
                            <a>Misión</a>
                            <a>Historia</a>
                            <a>Equipo</a>
                            <h5>Servicio al cliente</h5>
                            <a>Política de privacidad</a>
                            <a>Preguntas frecuentes</a>
                            <a>Trabaja con nosotros</a>
                            <a>Términos y condiciones</a>
                        </div>
                        <div>
                            {/* Componente:  Sociales*/}
                            <div className='sociales'>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M11.5512 8.37978L17.6209 1.26611H16.1826L10.9122 7.44284L6.70275 1.26611H1.84766L8.21316 10.6064L1.84766 18.0662H3.28608L8.85174 11.5433L13.2972 18.0662H18.1523L11.5512 8.37978ZM9.58099 10.6887L8.93607 9.75856L3.80436 2.35784H6.0137L10.1551 8.33047L10.8 9.26052L16.1832 17.024H13.9739L9.58099 10.6887Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.83301 9.66635C5.83301 7.34672 7.69849 5.46631 9.99967 5.46631C12.3008 5.46631 14.1663 7.34672 14.1663 9.66635C14.1663 11.9859 12.3008 13.8664 9.99967 13.8664C7.69849 13.8664 5.83301 11.9859 5.83301 9.66635ZM9.99967 7.14631C8.61892 7.14631 7.49967 8.27455 7.49967 9.66635C7.49967 11.0581 8.61892 12.1863 9.99967 12.1863C11.3804 12.1863 12.4997 11.0581 12.4997 9.66635C12.4997 8.27455 11.3804 7.14631 9.99967 7.14631Z"/>
                                        <path fill="currentColor" d="M14.3747 6.30605C14.95 6.30605 15.4163 5.83596 15.4163 5.25605C15.4163 4.67616 14.95 4.20605 14.3747 4.20605C13.7993 4.20605 13.333 4.67616 13.333 5.25605C13.333 5.83596 13.7993 6.30605 14.3747 6.30605Z"/>
                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.54906 1.32486C5.66238 1.36703 5.05687 1.50966 4.52753 1.71932C3.97969 1.93453 3.51536 2.22333 3.05335 2.69071C2.59135 3.15809 2.30684 3.62647 2.09484 4.17953C1.88967 4.71428 1.75067 5.32513 1.71151 6.21939C1.67234 7.11365 1.66367 7.40109 1.66801 9.6822C1.67234 11.9633 1.68234 12.2492 1.72534 13.1453C1.76767 14.0389 1.90867 14.6491 2.11667 15.1829C2.33051 15.7352 2.61668 16.203 3.08051 16.6689C3.54436 17.1348 4.00869 17.4209 4.5587 17.6349C5.08871 17.8414 5.69488 17.9822 6.58189 18.0213C7.4689 18.0604 7.7544 18.0695 10.0167 18.0651C12.2791 18.0608 12.5639 18.0507 13.4528 18.0082C14.7465 17.9463 16.0135 17.5883 16.9477 16.6422C17.8822 15.6958 18.2327 14.4186 18.289 13.1136C18.3278 12.217 18.337 11.9307 18.3327 9.64994C18.3283 7.36919 18.3182 7.08325 18.276 6.18747C18.2146 4.88203 17.8596 3.60684 16.9212 2.66333C15.9835 1.72056 14.7142 1.36763 13.4202 1.31125C12.5331 1.27261 12.2476 1.2627 9.98441 1.26707C7.72123 1.27144 7.4379 1.28118 6.54906 1.32486ZM6.63021 3.00287L6.6276 3.003C5.89817 3.03769 5.47518 3.14902 5.13707 3.28294L5.13272 3.28466C4.78657 3.42064 4.522 3.58514 4.23398 3.87651C3.94585 4.16798 3.78371 4.43489 3.64949 4.78504C3.51782 5.12821 3.40881 5.55684 3.37655 6.29349C3.3391 7.14859 3.33035 7.40538 3.33466 9.67901C3.33898 11.9522 3.34894 12.2074 3.39006 13.0642L3.39011 13.0652C3.425 13.8016 3.53522 14.2281 3.66794 14.5686L3.66926 14.572C3.80474 14.9219 3.96791 15.1886 4.2569 15.4788C4.54556 15.7687 4.80964 15.9316 5.15895 16.0676C5.49993 16.2004 5.92557 16.3107 6.65478 16.3429C7.50358 16.3804 7.75919 16.3894 10.0136 16.3851C12.268 16.3808 12.5231 16.3707 13.3738 16.33C14.4412 16.279 15.2364 15.9937 15.7664 15.4569C16.2977 14.9189 16.5776 14.1164 16.6239 13.0407C16.6611 12.1823 16.6703 11.9256 16.666 9.65322C16.6617 7.38068 16.6516 7.12465 16.6112 6.26709C16.5606 5.19052 16.278 4.38948 15.7442 3.85277C15.2127 3.31845 14.416 3.0362 13.3482 2.98969C12.4981 2.95265 12.2415 2.94272 9.98757 2.94707C7.73166 2.95142 7.47941 2.96114 6.63021 3.00287Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M19.1663 9.66631C19.1663 4.56316 15.0623 0.42627 9.99967 0.42627C4.93706 0.42627 0.833008 4.56316 0.833008 9.66631C0.833008 14.2782 4.18513 18.1008 8.56734 18.794V12.3372H6.23991V9.66631H8.56734V7.63057C8.56734 5.31481 9.93592 4.03565 12.0298 4.03565C13.0327 4.03565 14.0817 4.21611 14.0817 4.21611V6.49002H12.9258C11.7871 6.49002 11.4319 7.20228 11.4319 7.93297V9.66631H13.9743L13.5678 12.3372H11.4319V18.794C15.8143 18.1008 19.1663 14.2782 19.1663 9.66631Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M19.5818 4.33548C19.3522 3.45795 18.6738 2.76699 17.8137 2.53206C16.2534 2.10596 10 2.10596 10 2.10596C10 2.10596 3.74546 2.10596 2.18637 2.53206C1.32613 2.76699 0.647727 3.45795 0.418182 4.33548C4.96705e-08 5.92586 0 9.246 0 9.246C0 9.246 4.96705e-08 12.5649 0.418182 14.1565C0.647727 15.0339 1.32613 15.7249 2.18637 15.9599C3.74659 16.386 10 16.386 10 16.386C10 16.386 16.2546 16.386 17.8137 15.9599C18.6738 15.7249 19.3522 15.0339 19.5818 14.1565C20 12.5661 20 9.246 20 9.246C20 9.246 20 5.92701 19.5818 4.33548ZM7.95454 12.2598V6.23219L13.1818 9.246L7.95454 12.2598Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M15.2594 4.802C14.3328 4.18249 13.6641 3.19118 13.4555 2.03568C13.4103 1.78598 13.3857 1.52896 13.3857 1.26611H10.4287L10.4239 13.4202C10.3742 14.7813 9.282 15.8736 7.94294 15.8736C7.52671 15.8736 7.13481 15.7668 6.78996 15.5807C5.9987 15.1536 5.45724 14.303 5.45724 13.3242C5.45724 11.9185 6.57243 10.7748 7.94294 10.7748C8.19874 10.7748 8.44417 10.818 8.67642 10.8928V7.79673C8.43625 7.76313 8.19209 7.74214 7.94294 7.74214C4.94174 7.74214 2.5 10.2463 2.5 13.3242C2.5 15.2127 3.42005 16.8839 4.82365 17.8945C5.70769 18.531 6.78314 18.9062 7.94294 18.9062C10.9442 18.9062 13.3859 16.4021 13.3859 13.324V7.16092C14.5457 8.01463 15.9667 8.51771 17.5 8.51771V5.48506C16.674 5.48506 15.9047 5.23337 15.2594 4.802Z"/>
                                    </svg>
                                </a>
                            </div>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M10.0061 9.88755C10.3761 9.88755 10.6909 9.75581 10.9505 9.49234C11.2102 9.22887 11.3401 8.91213 11.3401 8.54213C11.3401 8.17213 11.2083 7.85727 10.9447 7.59755C10.6812 7.33796 10.3645 7.20817 9.99445 7.20817C9.62445 7.20817 9.30966 7.33991 9.05008 7.60338C8.79036 7.86699 8.66049 8.1838 8.66049 8.5538C8.66049 8.9238 8.7923 9.23859 9.05591 9.49817C9.31938 9.75775 9.63612 9.88755 10.0061 9.88755ZM10.0003 17.5911C7.95904 15.8557 6.42813 14.2405 5.40758 12.7455C4.38716 11.2505 3.87695 9.86942 3.87695 8.60234C3.87695 6.9015 4.44688 5.44532 5.58674 4.2338C6.72674 3.02227 8.19445 2.4165 9.98987 2.4165C11.7853 2.4165 13.2565 3.02227 14.4034 4.2338C15.5502 5.44532 16.1236 6.9015 16.1236 8.60234C16.1236 9.86942 15.617 11.2474 14.6036 12.7363C13.5903 14.225 12.0558 15.8433 10.0003 17.5911Z"/>
                                </svg>
                                Av. Rocket 654
                            </a>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M15.6878 16.5835C14.2775 16.5835 12.8427 16.244 11.3832 15.565C9.92394 14.8861 8.57088 13.9232 7.32408 12.6764C6.08269 11.4296 5.12116 10.0725 4.43949 8.60516C3.75783 7.1378 3.41699 5.70002 3.41699 4.29183V3.396H7.4122L8.17178 6.54496L5.79845 8.8512C6.15526 9.45162 6.52567 10.0095 6.9097 10.525C7.29387 11.0405 7.68998 11.505 8.09803 11.9185C8.50831 12.3395 8.96269 12.7363 9.46116 13.1091C9.95949 13.482 10.5335 13.8608 11.183 14.2454L13.5628 11.8881L16.5837 12.5258V16.5835H15.6878Z"/>
                                </svg>
                                600 5800 650
                            </a>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M2.41699 15.5832V4.4165H17.5837V15.5832H2.41699ZM10.0003 10.6313L16.5003 6.80588V5.49984L10.0003 9.229L3.50033 5.49984V6.80588L10.0003 10.6313Z"/>
                                </svg>
                                contacto@wildroutes.cl
                            </a>
                        </div>
                    </div>
                    <p>@Copyright 2025 WildRoutes - Equipo Rocket. Todos los derechos reservados.</p>
                </div>
            </footer>

            {/* Componente:  Forma */}
            <section className='forma'>
                <div>
                    <div>
                        <div style={{backgroundImage: "url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                            <div className={`problema ${visibleIngreso ? "visible" : ""} ${exitoIngreso ? "exito" : ""}`}>
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

            {/* Componente:  Pie */}
            <footer className="pie">
                <div>
                    <div>
                        <div>
                            <h5>Destinos</h5>
                            <a>Zona norte</a>
                            <a>Zona centro</a>
                            <a>Zona sur</a>
                            <a>Zona austral</a>
                            <a>Zona insular</a>
                            <h5>Actividades</h5>
                            <a>Deporte aventura</a>
                            <a>Turismo cultural</a>
                            <a>Turismo escénico</a>
                        </div>
                        <div>
                            <h5>Nosotros</h5>
                            <a>Misión</a>
                            <a>Historia</a>
                            <a>Equipo</a>
                            <h5>Servicio al cliente</h5>
                            <a>Política de privacidad</a>
                            <a>Preguntas frecuentes</a>
                            <a>Trabaja con nosotros</a>
                            <a>Términos y condiciones</a>
                        </div>
                        <div>
                            {/* Componente:  Sociales*/}
                            <div className='sociales'>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M11.5512 8.37978L17.6209 1.26611H16.1826L10.9122 7.44284L6.70275 1.26611H1.84766L8.21316 10.6064L1.84766 18.0662H3.28608L8.85174 11.5433L13.2972 18.0662H18.1523L11.5512 8.37978ZM9.58099 10.6887L8.93607 9.75856L3.80436 2.35784H6.0137L10.1551 8.33047L10.8 9.26052L16.1832 17.024H13.9739L9.58099 10.6887Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.83301 9.66635C5.83301 7.34672 7.69849 5.46631 9.99967 5.46631C12.3008 5.46631 14.1663 7.34672 14.1663 9.66635C14.1663 11.9859 12.3008 13.8664 9.99967 13.8664C7.69849 13.8664 5.83301 11.9859 5.83301 9.66635ZM9.99967 7.14631C8.61892 7.14631 7.49967 8.27455 7.49967 9.66635C7.49967 11.0581 8.61892 12.1863 9.99967 12.1863C11.3804 12.1863 12.4997 11.0581 12.4997 9.66635C12.4997 8.27455 11.3804 7.14631 9.99967 7.14631Z"/>
                                        <path fill="currentColor" d="M14.3747 6.30605C14.95 6.30605 15.4163 5.83596 15.4163 5.25605C15.4163 4.67616 14.95 4.20605 14.3747 4.20605C13.7993 4.20605 13.333 4.67616 13.333 5.25605C13.333 5.83596 13.7993 6.30605 14.3747 6.30605Z"/>
                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.54906 1.32486C5.66238 1.36703 5.05687 1.50966 4.52753 1.71932C3.97969 1.93453 3.51536 2.22333 3.05335 2.69071C2.59135 3.15809 2.30684 3.62647 2.09484 4.17953C1.88967 4.71428 1.75067 5.32513 1.71151 6.21939C1.67234 7.11365 1.66367 7.40109 1.66801 9.6822C1.67234 11.9633 1.68234 12.2492 1.72534 13.1453C1.76767 14.0389 1.90867 14.6491 2.11667 15.1829C2.33051 15.7352 2.61668 16.203 3.08051 16.6689C3.54436 17.1348 4.00869 17.4209 4.5587 17.6349C5.08871 17.8414 5.69488 17.9822 6.58189 18.0213C7.4689 18.0604 7.7544 18.0695 10.0167 18.0651C12.2791 18.0608 12.5639 18.0507 13.4528 18.0082C14.7465 17.9463 16.0135 17.5883 16.9477 16.6422C17.8822 15.6958 18.2327 14.4186 18.289 13.1136C18.3278 12.217 18.337 11.9307 18.3327 9.64994C18.3283 7.36919 18.3182 7.08325 18.276 6.18747C18.2146 4.88203 17.8596 3.60684 16.9212 2.66333C15.9835 1.72056 14.7142 1.36763 13.4202 1.31125C12.5331 1.27261 12.2476 1.2627 9.98441 1.26707C7.72123 1.27144 7.4379 1.28118 6.54906 1.32486ZM6.63021 3.00287L6.6276 3.003C5.89817 3.03769 5.47518 3.14902 5.13707 3.28294L5.13272 3.28466C4.78657 3.42064 4.522 3.58514 4.23398 3.87651C3.94585 4.16798 3.78371 4.43489 3.64949 4.78504C3.51782 5.12821 3.40881 5.55684 3.37655 6.29349C3.3391 7.14859 3.33035 7.40538 3.33466 9.67901C3.33898 11.9522 3.34894 12.2074 3.39006 13.0642L3.39011 13.0652C3.425 13.8016 3.53522 14.2281 3.66794 14.5686L3.66926 14.572C3.80474 14.9219 3.96791 15.1886 4.2569 15.4788C4.54556 15.7687 4.80964 15.9316 5.15895 16.0676C5.49993 16.2004 5.92557 16.3107 6.65478 16.3429C7.50358 16.3804 7.75919 16.3894 10.0136 16.3851C12.268 16.3808 12.5231 16.3707 13.3738 16.33C14.4412 16.279 15.2364 15.9937 15.7664 15.4569C16.2977 14.9189 16.5776 14.1164 16.6239 13.0407C16.6611 12.1823 16.6703 11.9256 16.666 9.65322C16.6617 7.38068 16.6516 7.12465 16.6112 6.26709C16.5606 5.19052 16.278 4.38948 15.7442 3.85277C15.2127 3.31845 14.416 3.0362 13.3482 2.98969C12.4981 2.95265 12.2415 2.94272 9.98757 2.94707C7.73166 2.95142 7.47941 2.96114 6.63021 3.00287Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M19.1663 9.66631C19.1663 4.56316 15.0623 0.42627 9.99967 0.42627C4.93706 0.42627 0.833008 4.56316 0.833008 9.66631C0.833008 14.2782 4.18513 18.1008 8.56734 18.794V12.3372H6.23991V9.66631H8.56734V7.63057C8.56734 5.31481 9.93592 4.03565 12.0298 4.03565C13.0327 4.03565 14.0817 4.21611 14.0817 4.21611V6.49002H12.9258C11.7871 6.49002 11.4319 7.20228 11.4319 7.93297V9.66631H13.9743L13.5678 12.3372H11.4319V18.794C15.8143 18.1008 19.1663 14.2782 19.1663 9.66631Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M19.5818 4.33548C19.3522 3.45795 18.6738 2.76699 17.8137 2.53206C16.2534 2.10596 10 2.10596 10 2.10596C10 2.10596 3.74546 2.10596 2.18637 2.53206C1.32613 2.76699 0.647727 3.45795 0.418182 4.33548C4.96705e-08 5.92586 0 9.246 0 9.246C0 9.246 4.96705e-08 12.5649 0.418182 14.1565C0.647727 15.0339 1.32613 15.7249 2.18637 15.9599C3.74659 16.386 10 16.386 10 16.386C10 16.386 16.2546 16.386 17.8137 15.9599C18.6738 15.7249 19.3522 15.0339 19.5818 14.1565C20 12.5661 20 9.246 20 9.246C20 9.246 20 5.92701 19.5818 4.33548ZM7.95454 12.2598V6.23219L13.1818 9.246L7.95454 12.2598Z"/>
                                    </svg>
                                </a>
                                <a>
                                    <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M15.2594 4.802C14.3328 4.18249 13.6641 3.19118 13.4555 2.03568C13.4103 1.78598 13.3857 1.52896 13.3857 1.26611H10.4287L10.4239 13.4202C10.3742 14.7813 9.282 15.8736 7.94294 15.8736C7.52671 15.8736 7.13481 15.7668 6.78996 15.5807C5.9987 15.1536 5.45724 14.303 5.45724 13.3242C5.45724 11.9185 6.57243 10.7748 7.94294 10.7748C8.19874 10.7748 8.44417 10.818 8.67642 10.8928V7.79673C8.43625 7.76313 8.19209 7.74214 7.94294 7.74214C4.94174 7.74214 2.5 10.2463 2.5 13.3242C2.5 15.2127 3.42005 16.8839 4.82365 17.8945C5.70769 18.531 6.78314 18.9062 7.94294 18.9062C10.9442 18.9062 13.3859 16.4021 13.3859 13.324V7.16092C14.5457 8.01463 15.9667 8.51771 17.5 8.51771V5.48506C16.674 5.48506 15.9047 5.23337 15.2594 4.802Z"/>
                                    </svg>
                                </a>
                            </div>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M10.0061 9.88755C10.3761 9.88755 10.6909 9.75581 10.9505 9.49234C11.2102 9.22887 11.3401 8.91213 11.3401 8.54213C11.3401 8.17213 11.2083 7.85727 10.9447 7.59755C10.6812 7.33796 10.3645 7.20817 9.99445 7.20817C9.62445 7.20817 9.30966 7.33991 9.05008 7.60338C8.79036 7.86699 8.66049 8.1838 8.66049 8.5538C8.66049 8.9238 8.7923 9.23859 9.05591 9.49817C9.31938 9.75775 9.63612 9.88755 10.0061 9.88755ZM10.0003 17.5911C7.95904 15.8557 6.42813 14.2405 5.40758 12.7455C4.38716 11.2505 3.87695 9.86942 3.87695 8.60234C3.87695 6.9015 4.44688 5.44532 5.58674 4.2338C6.72674 3.02227 8.19445 2.4165 9.98987 2.4165C11.7853 2.4165 13.2565 3.02227 14.4034 4.2338C15.5502 5.44532 16.1236 6.9015 16.1236 8.60234C16.1236 9.86942 15.617 11.2474 14.6036 12.7363C13.5903 14.225 12.0558 15.8433 10.0003 17.5911Z"/>
                                </svg>
                                Av. Rocket 654
                            </a>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M15.6878 16.5835C14.2775 16.5835 12.8427 16.244 11.3832 15.565C9.92394 14.8861 8.57088 13.9232 7.32408 12.6764C6.08269 11.4296 5.12116 10.0725 4.43949 8.60516C3.75783 7.1378 3.41699 5.70002 3.41699 4.29183V3.396H7.4122L8.17178 6.54496L5.79845 8.8512C6.15526 9.45162 6.52567 10.0095 6.9097 10.525C7.29387 11.0405 7.68998 11.505 8.09803 11.9185C8.50831 12.3395 8.96269 12.7363 9.46116 13.1091C9.95949 13.482 10.5335 13.8608 11.183 14.2454L13.5628 11.8881L16.5837 12.5258V16.5835H15.6878Z"/>
                                </svg>
                                600 5800 650
                            </a>
                            {/* Componente:  Contacto*/}
                            <a className='contacto'>
                                <svg height="inherit" width="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M2.41699 15.5832V4.4165H17.5837V15.5832H2.41699ZM10.0003 10.6313L16.5003 6.80588V5.49984L10.0003 9.229L3.50033 5.49984V6.80588L10.0003 10.6313Z"/>
                                </svg>
                                contacto@wildroutes.cl
                            </a>
                        </div>
                    </div>
                    <p>@Copyright 2025 WildRoutes - Equipo Rocket. Todos los derechos reservados.</p>
                </div>
            </footer>

            {/* Componente:  Catálogo */}
            <section className="catalogo">
                {/* Componente:  Filtros*/}
                <div className='filtros'>
                    <button id='este-boton-debe-abrir-la-columna-de-filtros'>
                        <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path  fill="currentColor" d="M4.64453 15.7918V10.7437H3.14453V9.66037H7.2487V10.7437H5.72786V15.7918H4.64453ZM4.64453 9.83995V4.2085H5.72786V9.83995H4.64453ZM7.9587 7.83995V6.75662H9.4587V4.2085H10.542V6.75662H12.042V7.83995H7.9587ZM9.4587 15.7918V7.66037H10.542V15.7918H9.4587ZM14.2729 15.7918V13.2437H12.752V12.1604H16.8562V13.2437H15.3562V15.7918H14.2729ZM14.2729 12.34V4.2085H15.3562V12.34H14.2729Z"/>
                        </svg>
                        <p>Filtrar</p>
                    </button>
                    <button>
                        <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M9.41634 15.5832V10.6265L4.27051 4.4165H15.7288L10.583 10.6265V15.5832H9.41634Z"/>
                        </svg>
                        <p>Ordenar</p>
                    </button>
                </div>
                <div>
                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>

                    {/* Componente:  Tarjeta*/}
                    <a className='tarjeta'>
                        <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                        <div>★★★★★</div>
                        <p>San Pedro de Atacama, Antofagasta</p>
                        <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                        <p>19990 CLP por persona</p>
                    </a>
                </div>
            </section>

            {/* Componente:  Carro*/}
            <aside className={`carro ${carroAbierto ? "abierto" : ""}`}>
                <div>
                    <div className='contenido'>
                        <div>
                            <div>
                                <h3>Carro de compras</h3>
                                <button id='este-boton-deberia-vaciar-el-carro-de-compras'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                        <path fill="currentColor" d="m400-338.85 80-80 80 80L597.15-376l-80-80 80-80L560-573.15l-80 80-80-80L362.85-536l80 80-80 80L400-338.85ZM324.31-164q-27.31 0-45.81-18.5Q260-201 260-228.31V-696h-48v-52h172v-43.38h192V-748h172v52h-48v467.69q0 27.31-18.5 45.81Q663-164 635.69-164H324.31Z"/>
                                    </svg>
                                    <p>Vaciar carro</p>
                                </button>
                            </div>
                            <button className="cerrar" onClick={cerrarCarro}>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                                </svg>
                            </button>
                        </div>
                        {/* Componente: Item*/}
                        <div className='item'>
                            <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                            <div>
                                <div>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M3.41699 17.5835V4.41684H6.5772V2.3208H7.69262V4.41684H12.3401V2.3208H13.4235V4.41684H16.5837V17.5835H3.41699ZM4.50033 16.5002H15.5003V9.25663H4.50033V16.5002Z"/>
                                        </svg>
                                        <p>1 de febrero del 2025</p>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                            <path fill="currentColor" d="m620.92-316.92 37.16-37.16L506-506.16V-720h-52v236.15l166.92 166.93ZM480.07-116q-75.21 0-141.4-28.42-66.18-28.42-115.99-78.21-49.81-49.79-78.25-116.09Q116-405.01 116-480.39q0-75.38 28.42-141.75t78.21-115.68q49.79-49.31 116.09-77.75Q405.01-844 480.39-844q75.38 0 141.75 28.66 66.38 28.66 115.48 77.79 49.1 49.13 77.74 115.55Q844-555.58 844-480.07q0 75.21-28.42 141.4-28.42 66.18-77.71 115.99-49.29 49.81-115.76 78.25Q555.64-116 480.07-116Z"/>
                                        </svg>
                                        <p>9 AM</p>
                                    </span>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M10.0003 9.74333C9.28158 9.74333 8.67137 9.49249 8.1697 8.99083C7.6679 8.48902 7.41699 7.87874 7.41699 7.15999C7.41699 6.44124 7.6679 5.83104 8.1697 5.32937C8.67137 4.82756 9.28158 4.57666 10.0003 4.57666C10.7191 4.57666 11.3293 4.82756 11.831 5.32937C12.3328 5.83104 12.5837 6.44124 12.5837 7.15999C12.5837 7.87874 12.3328 8.48902 11.831 8.99083C11.3293 9.49249 10.7191 9.74333 10.0003 9.74333ZM4.41699 15.4229V13.9035C4.41699 13.6483 4.4931 13.4023 4.64533 13.1656C4.79755 12.929 5.01046 12.7241 5.28408 12.551C6.01046 12.1334 6.77539 11.8132 7.57887 11.5904C8.38234 11.3676 9.18949 11.2562 10.0003 11.2562C10.8112 11.2562 11.6183 11.3676 12.4218 11.5904C13.2253 11.8132 13.9902 12.1334 14.7166 12.551C14.9902 12.7102 15.2031 12.9116 15.3553 13.1552C15.5075 13.3988 15.5837 13.6483 15.5837 13.9035V15.4229H4.41699Z"/>
                                        </svg>
                                        <p>2</p>
                                    </span>
                                </div>
                                <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                                <p>39980 CLP</p>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M4.50033 15.5H5.42658L13.6237 7.30288L12.6974 6.37663L4.50033 14.5737V15.5ZM3.41699 16.5833V14.117L14.542 2.95996L17.0485 5.43434L5.88324 16.5833H3.41699ZM13.1524 6.84788L12.6974 6.37663L13.6237 7.30288L13.1524 6.84788Z"/>
                                    </svg>
                                    Editar
                                </button>
                            </div>
                            <button id='este-boton-deberia-eliminar-el-producto-del-carro-de-compras'>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                                </svg>
                            </button>
                        </div>
                        {/* Componente: Item*/}
                        <div className='item'>
                            <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                            <div>
                                <div>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M3.41699 17.5835V4.41684H6.5772V2.3208H7.69262V4.41684H12.3401V2.3208H13.4235V4.41684H16.5837V17.5835H3.41699ZM4.50033 16.5002H15.5003V9.25663H4.50033V16.5002Z"/>
                                        </svg>
                                        <p>1 de febrero del 2025</p>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                            <path fill="currentColor" d="m620.92-316.92 37.16-37.16L506-506.16V-720h-52v236.15l166.92 166.93ZM480.07-116q-75.21 0-141.4-28.42-66.18-28.42-115.99-78.21-49.81-49.79-78.25-116.09Q116-405.01 116-480.39q0-75.38 28.42-141.75t78.21-115.68q49.79-49.31 116.09-77.75Q405.01-844 480.39-844q75.38 0 141.75 28.66 66.38 28.66 115.48 77.79 49.1 49.13 77.74 115.55Q844-555.58 844-480.07q0 75.21-28.42 141.4-28.42 66.18-77.71 115.99-49.29 49.81-115.76 78.25Q555.64-116 480.07-116Z"/>
                                        </svg>
                                        <p>9 AM</p>
                                    </span>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M10.0003 9.74333C9.28158 9.74333 8.67137 9.49249 8.1697 8.99083C7.6679 8.48902 7.41699 7.87874 7.41699 7.15999C7.41699 6.44124 7.6679 5.83104 8.1697 5.32937C8.67137 4.82756 9.28158 4.57666 10.0003 4.57666C10.7191 4.57666 11.3293 4.82756 11.831 5.32937C12.3328 5.83104 12.5837 6.44124 12.5837 7.15999C12.5837 7.87874 12.3328 8.48902 11.831 8.99083C11.3293 9.49249 10.7191 9.74333 10.0003 9.74333ZM4.41699 15.4229V13.9035C4.41699 13.6483 4.4931 13.4023 4.64533 13.1656C4.79755 12.929 5.01046 12.7241 5.28408 12.551C6.01046 12.1334 6.77539 11.8132 7.57887 11.5904C8.38234 11.3676 9.18949 11.2562 10.0003 11.2562C10.8112 11.2562 11.6183 11.3676 12.4218 11.5904C13.2253 11.8132 13.9902 12.1334 14.7166 12.551C14.9902 12.7102 15.2031 12.9116 15.3553 13.1552C15.5075 13.3988 15.5837 13.6483 15.5837 13.9035V15.4229H4.41699Z"/>
                                        </svg>
                                        <p>2</p>
                                    </span>
                                </div>
                                <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                                <p>39980 CLP</p>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M4.50033 15.5H5.42658L13.6237 7.30288L12.6974 6.37663L4.50033 14.5737V15.5ZM3.41699 16.5833V14.117L14.542 2.95996L17.0485 5.43434L5.88324 16.5833H3.41699ZM13.1524 6.84788L12.6974 6.37663L13.6237 7.30288L13.1524 6.84788Z"/>
                                    </svg>
                                    Editar
                                </button>
                            </div>
                            <button id='este-boton-deberia-eliminar-el-producto-del-carro-de-compras'>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                                </svg>
                            </button>
                        </div>
                        {/* Componente: Item*/}
                        <div className='item'>
                            <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                            <div>
                                <div>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M3.41699 17.5835V4.41684H6.5772V2.3208H7.69262V4.41684H12.3401V2.3208H13.4235V4.41684H16.5837V17.5835H3.41699ZM4.50033 16.5002H15.5003V9.25663H4.50033V16.5002Z"/>
                                        </svg>
                                        <p>1 de febrero del 2025</p>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                            <path fill="currentColor" d="m620.92-316.92 37.16-37.16L506-506.16V-720h-52v236.15l166.92 166.93ZM480.07-116q-75.21 0-141.4-28.42-66.18-28.42-115.99-78.21-49.81-49.79-78.25-116.09Q116-405.01 116-480.39q0-75.38 28.42-141.75t78.21-115.68q49.79-49.31 116.09-77.75Q405.01-844 480.39-844q75.38 0 141.75 28.66 66.38 28.66 115.48 77.79 49.1 49.13 77.74 115.55Q844-555.58 844-480.07q0 75.21-28.42 141.4-28.42 66.18-77.71 115.99-49.29 49.81-115.76 78.25Q555.64-116 480.07-116Z"/>
                                        </svg>
                                        <p>9 AM</p>
                                    </span>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M10.0003 9.74333C9.28158 9.74333 8.67137 9.49249 8.1697 8.99083C7.6679 8.48902 7.41699 7.87874 7.41699 7.15999C7.41699 6.44124 7.6679 5.83104 8.1697 5.32937C8.67137 4.82756 9.28158 4.57666 10.0003 4.57666C10.7191 4.57666 11.3293 4.82756 11.831 5.32937C12.3328 5.83104 12.5837 6.44124 12.5837 7.15999C12.5837 7.87874 12.3328 8.48902 11.831 8.99083C11.3293 9.49249 10.7191 9.74333 10.0003 9.74333ZM4.41699 15.4229V13.9035C4.41699 13.6483 4.4931 13.4023 4.64533 13.1656C4.79755 12.929 5.01046 12.7241 5.28408 12.551C6.01046 12.1334 6.77539 11.8132 7.57887 11.5904C8.38234 11.3676 9.18949 11.2562 10.0003 11.2562C10.8112 11.2562 11.6183 11.3676 12.4218 11.5904C13.2253 11.8132 13.9902 12.1334 14.7166 12.551C14.9902 12.7102 15.2031 12.9116 15.3553 13.1552C15.5075 13.3988 15.5837 13.6483 15.5837 13.9035V15.4229H4.41699Z"/>
                                        </svg>
                                        <p>2</p>
                                    </span>
                                </div>
                                <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                                <p>39980 CLP</p>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M4.50033 15.5H5.42658L13.6237 7.30288L12.6974 6.37663L4.50033 14.5737V15.5ZM3.41699 16.5833V14.117L14.542 2.95996L17.0485 5.43434L5.88324 16.5833H3.41699ZM13.1524 6.84788L12.6974 6.37663L13.6237 7.30288L13.1524 6.84788Z"/>
                                    </svg>
                                    Editar
                                </button>
                            </div>
                            <button id='este-boton-deberia-eliminar-el-producto-del-carro-de-compras'>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                                </svg>
                            </button>
                        </div>
                        {/* Componente: Item*/}
                        <div className='item'>
                            <img src='https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg'/>
                            <div>
                                <div>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M3.41699 17.5835V4.41684H6.5772V2.3208H7.69262V4.41684H12.3401V2.3208H13.4235V4.41684H16.5837V17.5835H3.41699ZM4.50033 16.5002H15.5003V9.25663H4.50033V16.5002Z"/>
                                        </svg>
                                        <p>1 de febrero del 2025</p>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                            <path fill="currentColor" d="m620.92-316.92 37.16-37.16L506-506.16V-720h-52v236.15l166.92 166.93ZM480.07-116q-75.21 0-141.4-28.42-66.18-28.42-115.99-78.21-49.81-49.79-78.25-116.09Q116-405.01 116-480.39q0-75.38 28.42-141.75t78.21-115.68q49.79-49.31 116.09-77.75Q405.01-844 480.39-844q75.38 0 141.75 28.66 66.38 28.66 115.48 77.79 49.1 49.13 77.74 115.55Q844-555.58 844-480.07q0 75.21-28.42 141.4-28.42 66.18-77.71 115.99-49.29 49.81-115.76 78.25Q555.64-116 480.07-116Z"/>
                                        </svg>
                                        <p>9 AM</p>
                                    </span>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M10.0003 9.74333C9.28158 9.74333 8.67137 9.49249 8.1697 8.99083C7.6679 8.48902 7.41699 7.87874 7.41699 7.15999C7.41699 6.44124 7.6679 5.83104 8.1697 5.32937C8.67137 4.82756 9.28158 4.57666 10.0003 4.57666C10.7191 4.57666 11.3293 4.82756 11.831 5.32937C12.3328 5.83104 12.5837 6.44124 12.5837 7.15999C12.5837 7.87874 12.3328 8.48902 11.831 8.99083C11.3293 9.49249 10.7191 9.74333 10.0003 9.74333ZM4.41699 15.4229V13.9035C4.41699 13.6483 4.4931 13.4023 4.64533 13.1656C4.79755 12.929 5.01046 12.7241 5.28408 12.551C6.01046 12.1334 6.77539 11.8132 7.57887 11.5904C8.38234 11.3676 9.18949 11.2562 10.0003 11.2562C10.8112 11.2562 11.6183 11.3676 12.4218 11.5904C13.2253 11.8132 13.9902 12.1334 14.7166 12.551C14.9902 12.7102 15.2031 12.9116 15.3553 13.1552C15.5075 13.3988 15.5837 13.6483 15.5837 13.9035V15.4229H4.41699Z"/>
                                        </svg>
                                        <p>2</p>
                                    </span>
                                </div>
                                <h2>Caminata por las lagunas altiplánicas de Piedras Rojas</h2>
                                <p>39980 CLP</p>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M4.50033 15.5H5.42658L13.6237 7.30288L12.6974 6.37663L4.50033 14.5737V15.5ZM3.41699 16.5833V14.117L14.542 2.95996L17.0485 5.43434L5.88324 16.5833H3.41699ZM13.1524 6.84788L12.6974 6.37663L13.6237 7.30288L13.1524 6.84788Z"/>
                                    </svg>
                                    Editar
                                </button>
                            </div>
                            <button id='este-boton-deberia-eliminar-el-producto-del-carro-de-compras'>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                                </svg>
                            </button>
                        </div>

                        {/* Componente: Total*/}
                        <div className='total'>
                            <h4>Detalle</h4>
                            <div className='tabla'>
                                <div>
                                    <h6>Producto</h6>
                                    <h6>Precio</h6>
                                    <p>Caminata por las lagunas altiplánicas de Piedras Rojas</p>
                                    <p>39980 CLP CLP</p>
                                    <p>Caminata por las lagunas altiplánicas de Piedras Rojas</p>
                                    <p>39980 CLP CLP</p>
                                    <p>Caminata por las lagunas altiplánicas de Piedras Rojas</p>
                                    <p>39980 CLP CLP</p>
                                    <p>Caminata por las lagunas altiplánicas de Piedras Rojas</p>
                                    <p>39980 CLP CLP</p>
                                </div>
                                <div>
                                    <h5>Total</h5>
                                    <h5>159920 CLP</h5>
                                </div>
                            </div>
                        </div>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path fill='currentColor' d="M180.31-212Q154-212 135-231q-19-19-19-45.31v-407.38Q116-710 135-729q19-19 45.31-19h599.38q27.31 0 45.81 19 18.5 19 18.5 45.31v407.38Q844-250 825.5-231q-18.5 19-45.81 19H180.31ZM168-496.16h624v-111.68H168v111.68Z"/>
                            </svg>
                            <p>Pagar</p>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Principal;