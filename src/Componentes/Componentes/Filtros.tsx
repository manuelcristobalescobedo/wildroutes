import "./Filtros.css"
import "../../index.css"
import EntradaRadioSecundaria from "../Elementos/EntradaRadioSecundaria"
import EntradaVerificacionSecundaria from "../Elementos/EntradaVerificacionSecundaria"
import Elementos from "../Elementos/Indice"
import Iconos from "../../Iconos/Indice"

type FiltrosState = {
    precio: "menor" | "medio" | "mayor" | null
    zona: string[]
    ideal: string[]
    actividad: string[]
}

type FiltrosProps = {
    filtros: FiltrosState;
    setFiltros: React.Dispatch<React.SetStateAction<FiltrosState>>;
};

export default function Filtros({ filtros, setFiltros }: FiltrosProps) {

    return (
        <form className="Filtros">
            <Elementos.TituloSextario texto="Filtros" icono={<Iconos.Mezcla />} color="var(--color-secundario-mas-alto)" />
            <fieldset>
                <legend>
                    <Elementos.TituloSeptenario texto="Precio" color="var(--color-secundario-mas-alto)" />
                </legend>
                <EntradaRadioSecundaria texto="Menor a $50.000" name="precio" checked={filtros.precio === "menor"} onChange={() => setFiltros(f => ({ ...f, precio: "menor" }))}/>
                <EntradaRadioSecundaria texto="Entre $50.000 y $100.000" name="precio" checked={filtros.precio === "medio"} onChange={() => setFiltros(f => ({ ...f, precio: "medio" }))}/>
                <EntradaRadioSecundaria texto="Mayor a $100.000" name="precio" checked={filtros.precio === "mayor"} onChange={() => setFiltros(f => ({ ...f, precio: "mayor" }))}/>
            </fieldset>

            <fieldset>
                <legend>
                    <Elementos.TituloSeptenario texto="Zona" color="var(--color-secundario-mas-alto)" />
                </legend>
                <EntradaVerificacionSecundaria texto="Zona norte" checked={filtros.zona.includes("Zona norte")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    zona: prev.zona.includes("Zona norte")
                        ? prev.zona.filter(v => v !== "Zona norte")
                        : [...prev.zona, "Zona norte"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Zona centro" checked={filtros.zona.includes("Zona centro")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    zona: prev.zona.includes("Zona centro")
                        ? prev.zona.filter(v => v !== "Zona centro")
                        : [...prev.zona, "Zona centro"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Zona sur" checked={filtros.zona.includes("Zona sur")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    zona: prev.zona.includes("Zona sur")
                        ? prev.zona.filter(v => v !== "Zona sur")
                        : [...prev.zona, "Zona sur"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Zona austral" checked={filtros.zona.includes("Zona austral")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    zona: prev.zona.includes("Zona austral")
                        ? prev.zona.filter(v => v !== "Zona austral")
                        : [...prev.zona, "Zona austral"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Zona insular" checked={filtros.zona.includes("Zona insular")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    zona: prev.zona.includes("Zona insular")
                        ? prev.zona.filter(v => v !== "Zona insular")
                        : [...prev.zona, "Zona insular"]
                    }))
                }/>
            </fieldset>

            <fieldset>
                <legend>
                    <Elementos.TituloSeptenario texto="Ideal para" color="var(--color-secundario-mas-alto)" />
                </legend>
                <EntradaVerificacionSecundaria texto="Familias" checked={filtros.ideal.includes("Familias")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    ideal: prev.ideal.includes("Familias")
                        ? prev.ideal.filter(v => v !== "Familias")
                        : [...prev.ideal, "Familias"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Amigos" checked={filtros.ideal.includes("Amigos")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    ideal: prev.ideal.includes("Amigos")
                        ? prev.ideal.filter(v => v !== "Amigos")
                        : [...prev.ideal, "Amigos"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Parejas" checked={filtros.ideal.includes("Parejas")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    ideal: prev.ideal.includes("Parejas")
                        ? prev.ideal.filter(v => v !== "Parejas")
                        : [...prev.ideal, "Parejas"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Niños" checked={filtros.ideal.includes("Niños")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    ideal: prev.ideal.includes("Niños")
                        ? prev.ideal.filter(v => v !== "Niños")
                        : [...prev.ideal, "Niños"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Personas con necesidades especiales" checked={filtros.ideal.includes("Personas con necesidades especiales")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    ideal: prev.ideal.includes("Personas con necesidades especiales")
                        ? prev.ideal.filter(v => v !== "Personas con necesidades especiales")
                        : [...prev.ideal, "Personas con necesidades especiales"]
                    }))
                }/>
            </fieldset>

            <fieldset>
                <legend>
                    <Elementos.TituloSeptenario texto="Actividad" color="var(--color-secundario-mas-alto)" />
                </legend>
                <EntradaVerificacionSecundaria texto="Deporte aventura" checked={filtros.actividad.includes("Deporte aventura")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    actividad: prev.actividad.includes("Deporte aventura")
                        ? prev.actividad.filter(v => v !== "Deporte aventura")
                        : [...prev.actividad, "Deporte aventura"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Turismo escénico" checked={filtros.actividad.includes("Turismo escénico")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    actividad: prev.actividad.includes("Turismo escénico")
                        ? prev.actividad.filter(v => v !== "Turismo escénico")
                        : [...prev.actividad, "Turismo escénico"]
                    }))
                }/>
                <EntradaVerificacionSecundaria texto="Gastronomía" checked={filtros.actividad.includes("Gastronomía")} onChange={() =>
                    setFiltros(prev => ({
                    ...prev,
                    actividad: prev.actividad.includes("Gastronomía")
                        ? prev.actividad.filter(v => v !== "Gastronomía")
                        : [...prev.actividad, "Gastronomía"]
                    }))
                }/>
            </fieldset>
        </form>
    )
}