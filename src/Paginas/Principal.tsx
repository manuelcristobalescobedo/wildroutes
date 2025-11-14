import './Principal.css';
import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Heroe from '../Componentes/Heroe';
import Destacado from '../Componentes/Destacado';
import Explora from '../Componentes/Explora';
import Frecuentes from '../Componentes/Frecuentes';
import Pie from '../Componentes/Pie';
import Filtros from '../Componentes/Filtros';
import Lista from '../Componentes/Lista';
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

const Principal: React.FC = () => {
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

    // 🔹 Obtener productos desde backend
    useEffect(() => {
        async function getProductos() {
            try {
                const response = await axios.get(`http://18.215.170.96:9461/productos/2`, {
                    timeout: 5000,
                });
                console.log("Productos desde backend:", response.data);
                setProductos(response.data);
            } catch (error) {
                console.error("Error al obtener productos del backend:", error);
                setProductos([]);
            }
        }
        getProductos();
    }, []);

    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);

    const enCambioDeFiltro = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type,} = e.target;

        // Si es checkbox de tipo múltiple (precio o cupos)
        if (type === "checkbox") {
            setFiltros(prev => {
                const currentValues = prev[name as keyof FiltrosState] as string[];

                // Alternar el valor (agregar o quitar)
                const updatedValues = currentValues.includes(value)
                    ? currentValues.filter(v => v !== value)
                    : [...currentValues, value];

                return { ...prev, [name]: updatedValues };
            });
        } else {
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

    // ✅ Filtrado de productos
    const productosFiltrados = useMemo(() => {
        return productos.filter(p => {
            if (appliedFiltros.ubicacion && !p.lugar?.toLowerCase().includes(appliedFiltros.ubicacion.toLowerCase()))
                return false;

            if (appliedFiltros.fecha && !p.fechasDisponibles?.some(f => f === appliedFiltros.fecha))
                return false;

            if (appliedFiltros.personas && p.personas < parseInt(appliedFiltros.personas))
                return false;

            if (appliedFiltros.categoria && p.categoria.toLowerCase() !== appliedFiltros.categoria.toLowerCase())
                return false;

            // Precio y cupos podrían aplicarse aquí según estructura del producto
            return true;
        });
    }, [appliedFiltros, productos]);

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro} />
            <Heroe />

            {appliedFiltros.ubicacion || appliedFiltros.fecha || appliedFiltros.personas || appliedFiltros.categoria ? (
                <Lista productos={productosFiltrados} />
            ) : (
                <Destacado productos={productos} />
            )}

            <Explora />
            <Frecuentes />

            <Filtros
                filtros={filtros}
                enCambioDeFiltro={enCambioDeFiltro}
                onClearFilters={limpiarFiltros}
                onApplyFilters={aplicarFiltros}
            />

            <Pie />
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
        </div>
    );
};

export default Principal;
