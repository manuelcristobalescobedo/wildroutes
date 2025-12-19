import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Principal from '../Paginas/Principal';
import Registro from '../Paginas/Registro';
import Catalogo from '../Paginas/Catalogo';
import Ingreso from '../Paginas/Ingreso';
import Producto from '../Paginas/Producto';

const Rutas: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/catalogo" element={<Catalogo/>}/>
                <Route path="/ingreso" element={<Ingreso/>}/>
                <Route path="/producto" element={<Producto/>}/>
            </Routes>
        </Router>
    );
};

export default Rutas;