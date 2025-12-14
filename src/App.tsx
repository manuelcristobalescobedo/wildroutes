import { Routes, Route } from 'react-router-dom';
import Principal from './Paginas/Principal';
import Registro from './Paginas/Registro';
import Catalogo from './Paginas/Catalogo';
import Ingreso from './Paginas/Ingreso';
import Producto from './Paginas/Producto';
import PaginaIconos from './Paginas/PaginaIconos';
import PaginaElementos from './Paginas/PaginaElementos';
import NuevaPrincipal from './Paginas/NuevaPrincipal';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/ingreso" element={<Ingreso />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/iconos" element={<PaginaIconos />} />
            <Route path="/elementos" element={<PaginaElementos />} />
            <Route path="/nueva-principal" element={<NuevaPrincipal />} />
        </Routes>
    );
}

export default App;