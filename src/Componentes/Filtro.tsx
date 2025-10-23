import './Filtro.css';

interface FiltroProps {
    filtroAbierto: boolean;
    cerrarFiltro: () => void;
    filtros: {
        precio: string[];
        cupos: string[];
        categoria: string[];
    };
    actualizarFiltro: (tipo: "precio" | "cupos" | "categoria", valor: string, checked: boolean) => void;
    limpiarFiltros: () => void;
}

const Filtro: React.FC<FiltroProps> = ({ filtroAbierto, cerrarFiltro, filtros, actualizarFiltro, limpiarFiltros }) => {    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        actualizarFiltro(name as "precio" | "cupos" | "categoria", value, checked);
    };

    return (
        <aside className={`filtro ${filtroAbierto ? "abierto" : ""}`}>
            <div>
                <div>
                    <div>
                        <div>
                            <h3>Filtros de búsqueda</h3>
                            <button onClick={limpiarFiltros}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                    <path fill="currentColor" d="m400-338.85 80-80 80 80L597.15-376l-80-80 80-80L560-573.15l-80 80-80-80L362.85-536l80 80-80 80L400-338.85ZM324.31-164q-27.31 0-45.81-18.5Q260-201 260-228.31V-696h-48v-52h172v-43.38h192V-748h172v52h-48v467.69q0 27.31-18.5 45.81Q663-164 635.69-164H324.31Z"/>
                                </svg>
                                <p>Limpiar los filtros</p>
                            </button>
                        </div>
                        <button className="cerrar" onClick={cerrarFiltro}>
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M6.06204 14.7115L5.28809 13.9375L9.22559 10L5.28809 6.06253L6.06204 5.28857L9.99954 9.22607L13.937 5.28857L14.711 6.06253L10.7735 10L14.711 13.9375L13.937 14.7115L9.99954 10.774L6.06204 14.7115Z"/>
                            </svg>
                        </button>
                    </div>

                    <div className="coladores">
                        <div>
                            <h4>Rango de precios</h4>
                            <label>
                                <input type="checkbox" name="precio" value="bajo" checked={filtros.precio.includes("bajo")} onChange={manejarCambio}/>
                                Hasta 24.990
                            </label>
                            <label>
                                <input type="checkbox" name="precio" value="medio" checked={filtros.precio.includes("medio")} onChange={manejarCambio}/>
                                Desde 25.000 hasta 49.990
                            </label>
                            <label>
                                <input type="checkbox" name="precio" value="alto" checked={filtros.precio.includes("alto")} onChange={manejarCambio}/>
                                Desde 50.000
                            </label>
                        </div>

                        <div>
                            <h4>Cupos disponibles</h4>
                            <label>
                                <input type="checkbox" name="cupos" value="bajo" checked={filtros.cupos.includes("bajo")} onChange={manejarCambio}/>
                                Menos de 9
                            </label>
                            <label>
                                <input type="checkbox" name="cupos" value="medio" checked={filtros.cupos.includes("medio")} onChange={manejarCambio}/>
                                Entre 10 y 19
                            </label>
                            <label>
                                <input type="checkbox" name="cupos" value="alto" checked={filtros.cupos.includes("alto")} onChange={manejarCambio}/>
                                Más de 20
                            </label>
                        </div>

                        <div>
                            <h4>Categorías</h4>
                            <label>
                                <input type="checkbox" name="categoria" value="aventura" checked={filtros.categoria.includes("aventura")} onChange={manejarCambio}/>
                                Deporte aventura
                            </label>
                            <label>
                                <input type="checkbox" name="categoria" value="cultural" checked={filtros.categoria.includes("cultural")} onChange={manejarCambio}/>
                                Turismo cultural
                            </label>
                            <label>
                                <input type="checkbox" name="categoria" value="escenico" checked={filtros.categoria.includes("escenico")} onChange={manejarCambio}/>
                                Turismo escénico
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Filtro;