import "./PaginaIconos.css";

import { Actividad, Anadir, Apple, Borrar, Buscar, Calendario, Carro, Cerrar, CerrarPequeno, Correo, Descuento, Editar, Estrella, Explorar, FlechaAbajo, FlechaArriba, FlechaDerecha, FlechaIzquierda, Google, Historial, Imagen, Persona, Repetir, Soporte, Sustraer, Telefono, Ubicacion, Visibilidad } from "../Iconos/Indice";

export default function PaginaIconos() {
    return (
        <div className="iconos-page">
            <h1>Iconos</h1>

            <div className="iconos-grid">

                <div className="icon-card">
                    <Actividad/>
                    <p>Actividad</p>
                </div>
                <div className="icon-card">
                    <Anadir/>
                    <p>Anadir</p>
                </div>
                <div className="icon-card">
                    <Apple/>
                    <p>Apple</p>
                </div>
                <div className="icon-card">
                    <Borrar/>
                    <p>Borrar</p>
                </div>
                <div className="icon-card">
                    <Buscar/>
                    <p>Buscar</p>
                </div>
                <div className="icon-card">
                    <Calendario/>
                    <p>Calendario</p>
                </div>
                <div className="icon-card">
                    <Carro/>
                    <p>Carro</p>
                </div>
                <div className="icon-card">
                    <Cerrar/>
                    <p>Cerrar</p>
                </div>
                <div className="icon-card">
                    <CerrarPequeno/>
                    <p>CerrarPequeno</p>
                </div>
                <div className="icon-card">
                    <Correo/>
                    <p>Correo</p>
                </div>
                <div className="icon-card">
                    <Descuento/>
                    <p>Descuento</p>
                </div>
                <div className="icon-card">
                    <Editar/>
                    <p>Editar</p>
                </div>
                <div className="icon-card">
                    <Estrella/>
                    <p>Estrella</p>
                </div>
                <div className="icon-card">
                    <Explorar/>
                    <p>Explorar</p>
                </div>
                <div className="icon-card">
                    <FlechaAbajo/>
                    <p>FlechaAbajo</p>
                </div>
                <div className="icon-card">
                    <FlechaArriba/>
                    <p>FlechaArriba</p>
                </div>
                <div className="icon-card">
                    <FlechaDerecha/>
                    <p>FlechaDerecha</p>
                </div>
                <div className="icon-card">
                    <FlechaIzquierda/>
                    <p>FlechaIzquierda</p>
                </div>
                <div className="icon-card">
                    <Google/>
                    <p>Google</p>
                </div>
                <div className="icon-card">
                    <Historial/>
                    <p>Historial</p>
                </div>
                <div className="icon-card">
                    <Imagen/>
                    <p>Imagen</p>
                </div>
                <div className="icon-card">
                    <Persona/>
                    <p>Persona</p>
                </div>
                <div className="icon-card">
                    <Repetir/>
                    <p>Repetir</p>
                </div>
                <div className="icon-card">
                    <Soporte/>
                    <p>Soporte</p>
                </div>
                <div className="icon-card">
                    <Sustraer/>
                    <p>Sustraer</p>
                </div>
                <div className="icon-card">
                    <Telefono/>
                    <p>Telefono</p>
                </div>
                <div className="icon-card">
                    <Ubicacion/>
                    <p>Ubicacion</p>
                </div>
                <div className="icon-card">
                    <Visibilidad/>
                    <p>Visibilidad</p>
                </div>

            </div>
        </div>
    );
}