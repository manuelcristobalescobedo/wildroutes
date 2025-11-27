import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Principal from '../Paginas/Principal';
import Registro from '../Paginas/Registro';
import Catalogo from '../Paginas/Catalogo';
import Ingreso from '../Paginas/Ingreso';
import Producto from '../Paginas/Producto';
import LibreriaVisual from '../Paginas/Libreria';

const Rutas: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/catalogo" element={<Catalogo/>}/>
                <Route path="/ingreso" element={<Ingreso/>}/>
                <Route path="/producto" element={<Producto/>}/>
                <Route path="/libreria" element={<LibreriaVisual/>}/>
            </Routes>
        </Router>
    );
};

export default Rutas;