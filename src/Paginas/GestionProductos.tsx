import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import BotonPrimario from "../Componentes/Elementos/BotonPrimario";
import TituloPrimario from "../Componentes/Elementos/TituloPrimario";
import Actividad from "../Iconos/Actividad";
import Anadir from "../Iconos/Anadir";

export default function GestionProductos() {

    return(
        <>
            <main>
                <Encabezado />
                <section style={{display: "flex", flexDirection: "row", paddingLeft: "21.5rem", paddingTop: "2.5rem", paddingBottom: "2.5rem",gap: "22.2rem"}}>

                    <TituloPrimario texto="Mis Actividades" icono={<Actividad />} color="#000000ff" />
                
                    <BotonPrimario texto="Nueva Actividad" icono={<Anadir />} nivel="alto" />
                </section>
                
                <Pie />
            </main>
        </>
    )
}