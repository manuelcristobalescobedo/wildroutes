import { Routes, Route } from 'react-router-dom';
import Principal from './Paginas/Principal';
import Registro from './Paginas/Registro';
import Catalogo from './Paginas/Catalogo';
import Ingreso from './Paginas/Ingreso';
import Producto from './Paginas/Producto';
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
            <Route path="/nuevo-catalogo" element={<NuevoCatalogo />} />
            <Route path="/nuevo-servicio/:id" element={<NuevoServicio />} />
            <Route path="/recuperar-cuenta" element={<RecuperarCuenta />} />
            <Route path="/restablecer-contraseña" element={<RestablecerContrasena />} />
            <Route path="/registro-usuario" element={<RegistroUsuario />} />
            <Route path="/login-usuario" element={<LoginUsuario />} />
            <Route path="/gestion-productos" element={<GestionProductos />} />
            <Route path="/agregar-actividad" element={<AgregarNuevaActividad />} />
            <Route path="/editar-actividad/:id" element={<EditarActividad />} />
        </Routes>
    );
}

export default App;