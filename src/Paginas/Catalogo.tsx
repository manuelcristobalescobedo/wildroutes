import './Catalogo.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Pie from '../Componentes/Pie';
import Lista from '../Componentes/Lista';
import Filtro from '../Componentes/Filtro';
import type { Producto } from '../Tipos/Producto';
import productosJson from '../Datos/Productos.json';

const Catalogo: React.FC = () => {
    const [carroAbierto, setCarroAbierto] = useState(false);
    const [filtroAbierto, setFiltroAbierto] = useState(false);
    const [productos, setProductos] = useState<Producto[]>([]);
    const [filtros, setFiltros] = useState({
        precio: [] as string[],
        cupos: [] as string[],
        categoria: [] as string[],
    });

    // Backend
    useEffect(() => {
        async function getProductos() {
            try {
                const response = await axios.get('http://54.242.124.35:9461/doc/productos');
                console.log("Productos desde backend:", response.data);
                setProductos(response.data);
            } catch (error) {
                console.error("Error al obtener productos del backend, usando datos locales:", error);
                setProductos(productosJson as Producto[]);
            }
        }

        getProductos();
    }, []);

    // 🔹 Control de carro y filtro
    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);
    const abrirFiltro = () => setFiltroAbierto(true);
    const cerrarFiltro = () => setFiltroAbierto(false);

    // 🔹 Actualizar filtros
    const actualizarFiltro = (tipo: "precio" | "cupos" | "categoria", valor: string, checked: boolean) => {
        setFiltros(prev => {
            const prevValores = prev[tipo];
            const nuevosValores = checked
                ? [...prevValores, valor]
                : prevValores.filter(v => v !== valor);
            return { ...prev, [tipo]: nuevosValores };
        });
    };

    const limpiarFiltros = () => {
        setFiltros({
            precio: [],
            cupos: [],
            categoria: [],
        });
    };

    // 🔹 Aplicar filtros
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
            <Encabezado abrirCarro={abrirCarro} />
            <Lista abrirFiltro={abrirFiltro} productos={productosFiltrados} />
            <Pie />
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
            <Filtro
                filtroAbierto={filtroAbierto}
                cerrarFiltro={cerrarFiltro}
                filtros={filtros}
                actualizarFiltro={actualizarFiltro}
                limpiarFiltros={limpiarFiltros}
            />
        </div>
    );
};

export default Catalogo;