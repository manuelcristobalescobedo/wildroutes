import './Ingreso.css';
import React, { useState } from "react";
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Pie from '../Componentes/Pie';
import Forma from '../Componentes/Forma';

const Ingreso: React.FC = () => {
    const [carroAbierto, setCarroAbierto] = useState(false);

    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro}/>
            <Forma/>
            <Pie/>
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
        </div>
    );
};

export default Ingreso;