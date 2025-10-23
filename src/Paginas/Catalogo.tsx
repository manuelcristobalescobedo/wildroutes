import './Catalogo.css';
import React, { useState } from "react";
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Pie from '../Componentes/Pie';
import Lista from '../Componentes/Lista';
import Filtro from '../Componentes/Filtro';
import type { Producto } from '../Tipos/Producto';
import productosJson from '../Datos/Productos.json'

const Catalogo: React.FC = () => {
    const [carroAbierto, setCarroAbierto] = useState(false);
    const [filtroAbierto, setFiltroAbierto] = useState(false);

    const [filtros, setFiltros] = useState({
        precio: [] as string[],
        cupos: [] as string[],
        categoria: [] as string[]
    });

    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);
    const abrirFiltro = () => setFiltroAbierto(true);
    const cerrarFiltro = () => setFiltroAbierto(false);

    const productos: Producto[] = productosJson;

    const actualizarFiltro = (tipo: "precio" | "cupos" | "categoria", valor: string, checked: boolean) => {
        setFiltros(prev => {
            const prevValores = prev[tipo];
            let nuevosValores;
            if (checked) {
                nuevosValores = [...prevValores, valor];
            } else {
                nuevosValores = prevValores.filter(v => v !== valor);
            }
            return { ...prev, [tipo]: nuevosValores };
        });
    };

    const limpiarFiltros = () => {
        setFiltros({
            precio: [],
            cupos: [],
            categoria: []
        });
    };

    const productosFiltrados = productos.filter(p => {
        if (filtros.precio.length) {
            const precioNum = p.precio;
            const coincidePrecio =
                (filtros.precio.includes("bajo") && precioNum <= 24990) ||
                (filtros.precio.includes("medio") && precioNum >= 25000 && precioNum <= 49990) ||
                (filtros.precio.includes("alto") && precioNum >= 50000);
            if (!coincidePrecio) return false;
        }

        if (filtros.cupos.length) {
            const cuposNum = p.calendarizacion?.[0]?.horas?.[0]?.cupos ?? 0;
            const coincideCupos =
                (filtros.cupos.includes("bajo") && cuposNum < 9) ||
                (filtros.cupos.includes("medio") && cuposNum >= 10 && cuposNum <= 19) ||
                (filtros.cupos.includes("alto") && cuposNum >= 20);
            if (!coincideCupos) return false;
        }

        if (filtros.categoria.length && !p.categorias.some(cat => filtros.categoria.includes(cat))) {
            return false;
        }

        return true;
    });

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro}/>
            <Lista abrirFiltro={abrirFiltro} productos={productosFiltrados}/>
            <Pie/>
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
            <Filtro filtroAbierto={filtroAbierto} cerrarFiltro={cerrarFiltro} filtros={filtros} actualizarFiltro={actualizarFiltro} limpiarFiltros={limpiarFiltros}/>
        </div>
    );
};

export default Catalogo;