import { Routes, Route } from 'react-router-dom';
import PaginaIconos from './Paginas/PaginaIconos';
import PaginaElementos from './Paginas/PaginaElementos';
import NuevaPrincipal from './Paginas/NuevaPrincipal';
import RecuperarCuenta from './Paginas/RecuperarCuenta';
import RestablecerContrasena from './Paginas/RestablecerContraseña';
import RegistroUsuario from './Paginas/RegistroUsuario';
import LoginUsuario from './Paginas/LoginUsuario';
import GestionProductos from './Paginas/GestionProductos';
import AgregarNuevaActividad from './Paginas/AgregarNuevaActividad';
import EditarActividad from './Paginas/EditarActividad';
import NuevoCatalogo from './Paginas/NuevoCatalogo';
import NuevoServicio from './Paginas/NuevoServicio';
import NuevoPago from './Paginas/NuevoPago';
import NuevoCarro from './Paginas/NuevoCarro';


function App() {
    return (
        <Routes>
            <Route path="/" element={<NuevaPrincipal />} />
            <Route path="/registro" element={<RegistroUsuario />} />
            <Route path="/catalogo" element={<NuevoCatalogo />} />
            <Route path="/ingreso" element={<LoginUsuario />} />
            <Route path="/servicio/:id" element={<NuevoServicio />} />
            <Route path='/pago' element={<NuevoPago />} />
            <Route path='/carro' element={<NuevoCarro />} />
            <Route path="/recuperar" element={<RecuperarCuenta />} />
            <Route path="/restablecer" element={<RestablecerContrasena />} />
            <Route path="/gestion" element={<GestionProductos />} />
            <Route path="/agregar" element={<AgregarNuevaActividad />} />
            <Route path="/editar/:id" element={<EditarActividad />} />

            <Route path="/iconos" element={<PaginaIconos />} />
            <Route path="/elementos" element={<PaginaElementos />} />
        </Routes>
    );
}

export default App;