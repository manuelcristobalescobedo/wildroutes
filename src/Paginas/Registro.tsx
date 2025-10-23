import './Registro.css';
import React, { useState } from "react";
import Encabezado from '../Componentes/Encabezado';
import Carro from '../Componentes/Carro';
import Pie from '../Componentes/Pie';
import Formulario from '../Componentes/Formulario';

const Registro: React.FC = () => {
    const [carroAbierto, setCarroAbierto] = useState(false);

    const abrirCarro = () => setCarroAbierto(true);
    const cerrarCarro = () => setCarroAbierto(false);

    return (
        <div className='pagina'>
            <Encabezado abrirCarro={abrirCarro}/>
            <Formulario/>
            <Pie/>
            <Carro carroAbierto={carroAbierto} cerrarCarro={cerrarCarro} />
        </div>
    );
};

export default Registro;