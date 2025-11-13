import './Catalogo.css';
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Pie from '../Componentes/Pie';
import Lista from '../Componentes/Lista';
import Filtros from '../Componentes/Filtros';
import type { Producto } from '../Tipos/Producto';

interface FiltrosState {
    precio: string[];
    ubicacion: string;
    fecha: string;
    personas: string;
    categoria: string;
    cupos: string[];
    checked: string[];
}

const Catalogo: React.FC = () => {
    const [carroAbierto, setCarroAbierto] = useState(false);
    const [productos, setProductos] = useState<Producto[]>([]);
    const [filtros, setFiltros] = useState<FiltrosState>({
        precio: [],
        ubicacion: '',
        fecha: '',
        personas: '',
        categoria: '',
        cupos: [],
        checked: [],
    });
    const [appliedFiltros, setAppliedFiltros] = useState<FiltrosState>({
        precio: [],
        ubicacion: '',
        fecha: '',
        personas: '',
        categoria: '',
        cupos: [],
        checked: [],
    });

    // 🔹 Obtener productos desde el backend
    useEffect(() => {
        async function getProductos() {
            try {
                const response = await axios.get(`http://13.218.227.241:9461/productos/2`);
                console.log("✅ Productos desde backend:", response.data);
                setProductos(response.data);
            } catch (error) {
                console.error("❌ Error al obtener productos del backend:", error);
                setProductos([]);
            }
        }

        getProductos();
    }, []);

    // 🔹 Control del carro
    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);

    // 🔹 Manejar cambio de filtros
const enCambioDeFiltro = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Si el evento viene de un checkbox (HTMLInputElement con type="checkbox")
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
        const { checked } = e.target;
        setFiltros(prev => {
            const currentValues = prev[name as keyof FiltrosState] as string[];
            const updatedValues = checked
                ? [...currentValues, value]
                : currentValues.filter(v => v !== value);

            return { ...prev, [name]: updatedValues };
        });
    } else {
        // Si no es checkbox, se trata de un select u otro input
        setFiltros(prev => ({ ...prev, [name]: value }));
    }
};

    const limpiarFiltros = () => {
        const empty: FiltrosState = {
            precio: [],
            ubicacion: '',
            fecha: '',
            personas: '',
            categoria: '',
            cupos: [],
            checked: [],
        };
        setFiltros(empty);
        setAppliedFiltros(empty);
    };

    const aplicarFiltros = () => {
        setAppliedFiltros(filtros);
    };

    // 🔹 Aplicar filtros con useMemo
    const productosFiltrados = useMemo(() => {
        return productos.filter(p => {
            // Filtro por precio
            if (appliedFiltros.precio.length) {
                const precioNum = p.precios?.[0]?.precio ?? 0;
                const coincidePrecio =
                    (appliedFiltros.precio.includes("bajo") && precioNum <= 24990) ||
                    (appliedFiltros.precio.includes("medio") && precioNum >= 25000 && precioNum <= 49990) ||
                    (appliedFiltros.precio.includes("alto") && precioNum >= 50000);
                if (!coincidePrecio) return false;
            }

            // Filtro por cupos
            if (appliedFiltros.cupos.length) {
                const cuposNum = p.calendarizacion?.[0]?.horas?.[0]?.cupos ?? 0;
                const coincideCupos =
                    (appliedFiltros.cupos.includes("bajo") && cuposNum < 9) ||
                    (appliedFiltros.cupos.includes("medio") && cuposNum >= 10 && cuposNum <= 19) ||
                    (appliedFiltros.cupos.includes("alto") && cuposNum >= 20);
                if (!coincideCupos) return false;
            }

            // Filtro por categoría
            if (appliedFiltros.categoria && p.categoria.toLowerCase() !== appliedFiltros.categoria.toLowerCase())
                return false;

            return true;
        });
    }, [appliedFiltros, productos]);

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro} />
            <Lista productos={productosFiltrados} />
            <Pie />
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />

            <Filtros
                filtros={filtros}
                enCambioDeFiltro={enCambioDeFiltro}
                onClearFilters={limpiarFiltros}
                onApplyFilters={aplicarFiltros}
            />
        </div>
    );
};

export default Catalogo;

