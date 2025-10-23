import './Principal.css';
import React, { useState, useMemo } from "react";
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Heroe from '../Componentes/Heroe';
import Destacado from '../Componentes/Destacado';
import Explora from '../Componentes/Explora';
import Frecuentes from '../Componentes/Frecuentes';
import Pie from '../Componentes/Pie';
import Filtros from '../Componentes/Filtros';
import productos from '../Datos/Productos.json';
import type { Producto } from '../Tipos/Producto';
import Lista from '../Componentes/Lista';

const Principal: React.FC = () => {
    const [carroAbierto, setCarroAbierto] = useState(false);
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

    const productosFiltrados = useMemo(() => {
        return (productos as Producto[]).filter(p => {
            if (appliedFiltros.ubicacion && !`${p.comuna}, ${p.region}`.toLowerCase().includes(appliedFiltros.ubicacion.toLowerCase())) return false;
            if (appliedFiltros.fecha && !p.calendarizacion.some(c => c.fecha === appliedFiltros.fecha)) return false;
            if (appliedFiltros.personas && p.calendarizacion.every(c => c.horas.every(h => h.cupos < parseInt(appliedFiltros.personas)))) return false;
            if (appliedFiltros.categoria && !p.categorias.includes(appliedFiltros.categoria)) return false;
            return true;
        });
    }, [appliedFiltros]);

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro}/>
            <Heroe/>
            {appliedFiltros.ubicacion || appliedFiltros.fecha || appliedFiltros.personas || appliedFiltros.categoria ? <Lista productos={productosFiltrados} /> : <Destacado />}
            <Explora/>
            <Frecuentes/>
            
            <Filtros filtros={filtros} onFilterChange={handleFilterChange} onClearFilters={limpiarFiltros} onApplyFilters={aplicarFiltros} />
            <Pie/>
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
        </div>
    );
};

export default Principal;