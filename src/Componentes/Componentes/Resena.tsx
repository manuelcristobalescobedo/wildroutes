import { useState } from "react";
import Elementos from "../Elementos/Indice";
import Calificacion from "../Componentes/Calificacion";
import { v4 as uuidv4 } from "uuid";
import type { Resena } from "../../Tipos/Resena";


export default function Resena() {
    const [resena, setResena] = useState<Omit<Resena, "id">>({ titulo: "", contenido: "", calificacion: 0, perfil: false, guias: false });

    const publicarResena = async () => {
        if (!resena.guias) return;

        const resenaConId = { id: uuidv4(), ...resena };

        await fetch("http://localhost:3001/resenas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resenaConId)
        });

        setResena({ titulo: "", contenido: "", calificacion: 0, perfil: false, guias: false });
    };

    return (
        <section className="Resenas">
            <Elementos.TituloSextario texto="Deja una reseña" color="var(--color-neutro-mas-mas-mas-mas-alto)" />
            <div>
                <div>
                    <Elementos.EntradaTexto etiqueta="Título" nombre="titulo" valor={resena.titulo} accion={e => setResena({ ...resena, titulo: e.target.value })} estilo="var(--color-neutro-mas-mas-mas-mas-alto)" />
                    <Elementos.EntradaCampo etiqueta="Reseña" nombre="contenido" valor={resena.contenido} accion={e => setResena({ ...resena, contenido: e.target.value })} marcador="Escribe tu reseña" estilo="var(--color-neutro-mas-mas-mas-mas-alto)" />
                </div>
                <div>
                    <Calificacion etiqueta="Calificación" valor={resena.calificacion} alCambiar={valor => setResena({ ...resena, calificacion: valor })} />
                    <Elementos.EntradaVerificacionSecundaria checked={resena.perfil} onChange={e => setResena({ ...resena, perfil: e.target.checked })} texto="Acepto publicar mi nombre y foto de perfil junto con esta reseña" />
                    <Elementos.EntradaVerificacionSecundaria checked={resena.guias} onChange={e => setResena({ ...resena, guias: e.target.checked })} texto="Al publicar esta reseña, me adhiero a las Guías comunitarias de Wildroutes" />
                    <Elementos.BotonSecundario texto="Publicar" nivel="alto" accion={publicarResena} />
                </div>
            </div>
        </section>
    );
}