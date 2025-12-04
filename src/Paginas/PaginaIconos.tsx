import "./PaginaIconos.css";
import Iconos from "../Iconos/Indice";

export default function PaginaIconos() {
    return (
        <div className="iconos-page">
            <h1>Iconos</h1>

            <div className="iconos-grid">

                {Object.entries(Iconos).map(([nombre, Icono]) => (
                    <div className="icon-card" key={nombre}>
                        <Icono />
                        <p>{nombre}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}