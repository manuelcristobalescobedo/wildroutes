import { TituloPrimario, TituloSecundario, TituloTerciario, TituloCuaternario, TituloQuintario, TituloSextario } from "../Componentes/Libreria Visual Componentes/Titulos/Titulos";
import { ParrafoPrimario, ParrafoSecundario } from "../Componentes/Libreria Visual Componentes/Parrafos/Parrafos";
import FormulariosUI from "../Componentes/Libreria Visual Componentes/Formularios/Formularios";
import { EtiquetaPrimaria, EtiquetaSecundaria, EtiquetaTerciaria } from "../Componentes/Libreria Visual Componentes/Etiquetas/Etiquetas";
import { BotonPrimario, BotonSecundario, BotonTerciario, BotonMarca, BotonCuaternario, BotonQuinario, BotonUsuario} from "../Componentes/Libreria Visual Componentes/Botones/Botones";
import { EnlacePrimario, EnlaceSecundario } from "../Componentes/Libreria Visual Componentes/Enlaces/Enlaces";

export default function LibreriaVisual() {

    return (
        <>
        <section>
            <TituloPrimario>La región de Coquimbo</TituloPrimario>
            <TituloSecundario>La región de Coquimbo</TituloSecundario>
            <TituloTerciario>La región de Coquimbo</TituloTerciario>
            <TituloCuaternario>La región de Coquimbo</TituloCuaternario>
            <TituloQuintario>La región de Coquimbo</TituloQuintario>
            <TituloSextario>La región de Coquimbo</TituloSextario>
        </section>
        <div>
            <ParrafoPrimario>La región de Coquimbo</ParrafoPrimario>
            <ParrafoSecundario>La región de Coquimbo</ParrafoSecundario>
        </div>
        <div>
            <EtiquetaPrimaria svg={<img src="/icono-descuento.svg"/>}>Descuento</EtiquetaPrimaria>
            <EtiquetaSecundaria svg={<img src="/icono-ubicación.svg" />}>Descuento</EtiquetaSecundaria>
            <EtiquetaTerciaria svg={<img src="/icono-cancelar.svg" />}>Descuento</EtiquetaTerciaria>
        </div>
        <div>
            <EnlacePrimario>Enlace</EnlacePrimario>
            <EnlaceSecundario>Enlace</EnlaceSecundario>
        </div>
        <div>
            <BotonPrimario svg={<img src="/icono-más.svg"/>}>Cargar Imagen</BotonPrimario>
            <BotonSecundario svg={<img src="/icono-busqueda.svg"/>}>""</BotonSecundario>
            <BotonTerciario svg={<img src="/icono-reintento.svg"/>}>Envíame el enlace Magico</BotonTerciario>
            <BotonCuaternario svg={<img src="/icono-Editar.svg"/>}>Editar</BotonCuaternario>
            <BotonQuinario numero={1}></BotonQuinario>
            <BotonMarca svg={<img src="/icono-Google.svg"/>}>Ingresar con Google</BotonMarca>
            <BotonUsuario svg={<img src="/icono-Usuario.svg"/>}></BotonUsuario>
        </div>
        <div>
            <FormulariosUI.CampoTexto label="Primer nombre" placeholder="Tu nombre"></FormulariosUI.CampoTexto>
            <FormulariosUI.CampoContraseña label="Contraseña"></FormulariosUI.CampoContraseña>
            <FormulariosUI.CampoArchivo label="Fotografías"></FormulariosUI.CampoArchivo>
            <FormulariosUI.CampoNumero label="Cantidad"></FormulariosUI.CampoNumero>
            <FormulariosUI.Selector label="Categoría" opciones={["Turismo", "Aventura", "Trekking"]}></FormulariosUI.Selector>
            <FormulariosUI.SelectorFecha label="Fecha de Registro"></FormulariosUI.SelectorFecha>
        </div>
        <div>
            <FormulariosUI.CasillaVerificacion texto="Accepto términos y condiciones"></FormulariosUI.CasillaVerificacion>
        </div>
        </>
    )

}