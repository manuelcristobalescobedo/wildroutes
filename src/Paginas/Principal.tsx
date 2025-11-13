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

const Principal: React.FC = () => {
    const [carroAbierto, setCarroAbierto] = useState(false);
    const [productos, setProductos] = useState<Producto[]>([]);
    const [filtros, setFiltros] = useState({
        ubicacion: '',
        fecha: '',
        personas: '',
        categoria: ''
    });
    const [appliedFiltros, setAppliedFiltros] = useState({
        ubicacion: '',
        fecha: '',
        personas: '',
        categoria: ''
    });

    // 🔹 Obtener productos desde backend
    useEffect(() => {
        async function getProductos() {
            try {
                const response = await axios.get('http://54.242.124.35:9461/doc/productos');
                console.log("Productos desde backend:", response.data);
                setProductos(response.data);
            } catch (error) {
                console.error("Error al obtener productos del backend:", error);
            }
        }
        getProductos();
    }, []);

    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFiltros(prev => ({ ...prev, [name]: value }));
    };

    const limpiarFiltros = () => {
        const emptyFilters = { ubicacion: '', fecha: '', personas: '', categoria: '' };
        setFiltros(emptyFilters);
        setAppliedFiltros(emptyFilters);
    };

    const aplicarFiltros = () => {
        setAppliedFiltros(filtros);
    };

    // ✅ Filtrado según estructura real de Producto.ts
    const productosFiltrados = useMemo(() => {
        return productos.filter(p => {
            // Ubicación
            if (appliedFiltros.ubicacion && !p.lugar?.toLowerCase().includes(appliedFiltros.ubicacion.toLowerCase()))
                return false;

            // Fecha
            if (appliedFiltros.fecha && !p.fechasDisponibles?.some(f => f === appliedFiltros.fecha))
                return false;

            // Personas
            if (appliedFiltros.personas && p.personas < parseInt(appliedFiltros.personas))
                return false;

            // Categoría
            if (appliedFiltros.categoria && p.categoria.toLowerCase() !== appliedFiltros.categoria.toLowerCase())
                return false;

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
                onFilterChange={handleFilterChange}
                onClearFilters={limpiarFiltros}
                onApplyFilters={aplicarFiltros}
            />

            <Pie />
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
        </div>
    );
};

export default Principal;
