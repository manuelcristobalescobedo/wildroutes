import './Encabezado.css';
import React, { useState } from "react";
import { camposObligatorios, fechaPasada, numeroNegativo, numeroCero } from '../Validaciones/Indice';
import { useSelector } from "react-redux";
import type { RootType } from "../Redux/store";
import { Link } from 'react-router-dom';

interface EncabezadoProps {
    abrirCarro: () => void;
}

const Encabezado: React.FC<EncabezadoProps> = ({ abrirCarro }) => {
    const [mensajeBusqueda, setMensajeBusqueda] = useState("");
    const [visibleBusqueda, setVisibleBusqueda] = useState(false);
    const [exitoBusqueda, setExitoBusqueda] = useState(false);

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

    const usuarioActivo = useSelector((state: RootType) => state.users.usuarioActivo);

    return (
        <header className="encabezado">
            {/* Componente: Navegación */}
            <div className='navegacion'>
                {/* Componente: Logotipo */}
                <Link to="/" className='logotipo'>
                    <svg width="inherit" height="inherit" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M0 20L0.770428 0H5.36446L4.90791 8.29132C4.86987 9.03828 4.82231 9.70121 4.76524 10.2801C4.70817 10.8403 4.6511 11.3352 4.59403 11.7647H4.62257C4.83182 11.2045 5.04107 10.6443 5.25032 10.084C5.4786 9.52381 5.71639 8.94491 5.96368 8.34734L9.41634 0H13.297L12.9831 8.34734C12.9641 8.81419 12.9451 9.22502 12.9261 9.57983C12.907 9.93464 12.888 10.2801 12.869 10.6162C12.85 10.9524 12.8214 11.3259 12.7834 11.7367H12.8405C12.9356 11.4192 13.0402 11.0924 13.1543 10.7563C13.2875 10.4015 13.4302 10.028 13.5824 9.63586C13.7345 9.2437 13.8962 8.80486 14.0674 8.31933L17.2062 0H22L14.2387 20H8.81712L8.95979 12.9412C8.95979 12.6797 8.9693 12.3996 8.98833 12.1008C9.00735 11.7834 9.02637 11.4659 9.0454 11.1485C9.08344 10.8123 9.12149 10.4855 9.15953 10.1681H9.10246C8.9693 10.5789 8.82663 10.9991 8.67445 11.4286C8.52227 11.8394 8.36057 12.2502 8.18936 12.6611L5.33593 20H0Z"/>
                    </svg>
                </Link>
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
                {usuarioActivo && (
                    <button className='coche' onClick={abrirCarro}>
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill='currentColor' d="M5.62408 17.6316C5.2638 17.6316 4.95921 17.5056 4.71033 17.2537C4.46144 17.0019 4.33699 16.6958 4.33699 16.3354C4.33699 15.9751 4.46289 15.6705 4.7147 15.4216C4.96664 15.1727 5.27276 15.0483 5.63303 15.0483C5.99331 15.0483 6.2979 15.1742 6.54678 15.426C6.79567 15.6779 6.92012 15.9841 6.92012 16.3443C6.92012 16.7046 6.79421 17.0092 6.54241 17.2581C6.29046 17.5071 5.98435 17.6316 5.62408 17.6316ZM14.3676 17.6316C14.0073 17.6316 13.7028 17.5056 13.4539 17.2537C13.205 17.0019 13.0805 16.6958 13.0805 16.3354C13.0805 15.9751 13.2064 15.6705 13.4582 15.4216C13.7102 15.1727 14.0163 15.0483 14.3766 15.0483C14.7369 15.0483 15.0414 15.1742 15.2903 15.426C15.5392 15.6779 15.6637 15.9841 15.6637 16.3443C15.6637 16.7046 15.5378 17.0092 15.286 17.2581C15.034 17.5071 14.7279 17.6316 14.3676 17.6316ZM4.70553 4.2085H16.6943L14.0099 10.6316H6.60449L5.50512 12.5483H15.6637V13.6316H3.61095L5.8897 9.71495L3.12866 3.29183H1.41699V2.2085H3.85137L4.70553 4.2085Z"/>
                        </svg>
                        <span/>
                    </button>
                )}
                <div>
                    <Link to="/ingreso">
                        {/* Componente:  Botón acceder*/}
                        <button className='acceder'>Ingresar</button>
                    </Link>
                    <Link to="/registro">
                        {/* Componente:  Botón registrarse*/}
                        <button className='registrarse'>Registrarse</button>
                    </Link>
                </div>
            </div>
            {/* Componente:  Barra de mensaje*/}
            <div className={`mensaje ${exitoBusqueda ? 'exito' : ''} ${visibleBusqueda ? 'visible' : ''}`}>
                <p>{mensajeBusqueda}</p>
            </div>
        </header>
    );
}

export default Encabezado;