import { useState } from "react";
import "./NuevaPrincipal.css";
import "../index.css";
import Encabezado from "../Componentes/Componentes/Encabezado";
import Pie from "../Componentes/Componentes/Pie";
import Elementos from "../Componentes/Elementos/Indice";
import Iconos from "../Iconos/Indice";

export default function NuevaPrincipal() {
    const diapositivas = [
        {
            imagen: "https://i.postimg.cc/vT6Lzh7M/imagen-1.jpg",
            titulo: "Rapa Nui",
            texto: "Descubre el misterio, explora los icónicos Moai, la cultura ancestral y sus paisajes volcánicos únicos.",
            enlace: "/rapa-nui"
        },
        {
            imagen: "https://i.postimg.cc/tTJz1pYV/imagen-2.jpg",
            titulo: "San José de Maipo",
            texto: "Explora montañas, ríos y senderos andinos, termas naturales, cielos claros y naturaleza viva siempre.",
            enlace: "/san-jose-de-maipo"
        },
        {
            imagen: "https://i.postimg.cc/s2rWdypG/imagen-5.jpg",
            titulo: "Puerto Montt",
            texto: "Conoce fiordos, mercados, mar y lluvias del sur, puertas a la Patagonia y sabores del océano austral.",
            enlace: "/puerto-montt"
        },
        {
            imagen: "https://i.postimg.cc/1tXKgs42/imagen-4.jpg",
            titulo: "Chiloé",
            texto: "Sumérgete en mitos, iglesias, palafitos y tradiciones isleñas, entre bosques, mar y cultura viva local.",
            enlace: "/chiloe"
        }
    ];

    const [actual, setActual] = useState(0);

    const anterior = () => { setActual(prev => prev === 0 ? diapositivas.length - 1 : prev - 1 ); };
    const siguiente = () => { setActual(prev => prev === diapositivas.length - 1 ? 0 : prev + 1 ); };

    return (
        <main>
            <Encabezado />
            <section className="Carrusel">
                <div className="CarruselDiapositivas">
                    <div className="Diapositiva" style={{ backgroundImage: `url(${diapositivas[actual].imagen})` }}>

                        <div>
                            <div>Oferta del mes</div>
                            <div>
                                <div>
                                    <h2>{diapositivas[actual].titulo}</h2>
                                    <p>{diapositivas[actual].texto}</p>
                                </div>
                                <div>
                                    <Elementos.EnlaceTerciario texto="¡Quiero verlo!" nivel="alto" enlace="{diapositivas[actual].enlace}" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="CarruselNavegacion">
                    <Elementos.AccionCuaternaria icono={<Iconos.FlechaIzquierda />} accion={anterior} />
                    <Elementos.AccionCuaternaria icono={<Iconos.FlechaDerecha />} accion={siguiente} />
                </div>
                <div className="CarruselMarcadores">
                    {diapositivas.map((_, index) => (
                        <span key={index} className={`CarruselMarcador ${ index === actual ? "Activo" : "" }`} onClick={() => setActual(index)} />
                    ))}
                </div>                
            </section>
            <section className="Titular">
                <div/>
                <Elementos.TituloCuaternario texto="¡Mira esto! Está pensado para tí" icono={<Iconos.Voluntariado/>} color="var(--color-secundario-mas-alto)"/>
                <div/>
            </section>
            <section className="Intereses">
                <a className="Tarjeta">
                    <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                    <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto="Elqui, Región de Coquimbo, Chile" />
                    <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto="4.9 (200 reseñas)" color="var(--color-terciario-bajo)"/>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$500.000" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona" />
                    <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com" />
                </a>
                <a className="Tarjeta">
                    <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                    <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto="Elqui, Región de Coquimbo, Chile" />
                    <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto="4.9 (200 reseñas)" color="var(--color-terciario-bajo)"/>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$500.000" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona" />
                    <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com" />
                </a>
                <a className="Tarjeta">
                    <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                    <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto="Elqui, Región de Coquimbo, Chile" />
                    <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto="4.9 (200 reseñas)" color="var(--color-terciario-bajo)"/>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$500.000" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona" />
                    <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com" />
                </a>
                <a className="Tarjeta">
                    <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                    <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto="Elqui, Región de Coquimbo, Chile" />
                    <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto="4.9 (200 reseñas)" color="var(--color-terciario-bajo)"/>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$500.000" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona" />
                    <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com" />
                </a>
            </section>
            <section className="Titular">
                <div/>
                <Elementos.TituloCuaternario texto="Descuentos exclusivos" icono={<Iconos.Vender/>} color="var(--color-secundario-mas-alto)"/>
                <div/>
            </section>
            <section className="Descuentos">
                <a className="Tarjeta">
                    <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                    <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto="Elqui, Región de Coquimbo, Chile" />
                    <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto="4.9 (200 reseñas)" color="var(--color-terciario-bajo)"/>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$500.000" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona" />
                    <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com" />
                    <Iconos.Rebaja />
                </a>
                <a className="Tarjeta">
                    <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                    <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto="Elqui, Región de Coquimbo, Chile" />
                    <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto="4.9 (200 reseñas)" color="var(--color-terciario-bajo)"/>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$500.000" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona" />
                    <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com" />
                    <Iconos.Rebaja />
                </a>
                <a className="Tarjeta">
                    <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                    <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto="Elqui, Región de Coquimbo, Chile" />
                    <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto="4.9 (200 reseñas)" color="var(--color-terciario-bajo)"/>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$500.000" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona" />
                    <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com" />
                    <Iconos.Rebaja />
                </a>
                <a className="Tarjeta">
                    <img src="https://i.postimg.cc/zGZfHP83/imagen-6.jpg"/>
                    <Elementos.TituloSeptenario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="Cabalgata por el Valle del Elqui" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-alto)" icono={<Iconos.Ubicacion />} texto="Elqui, Región de Coquimbo, Chile" />
                    <Elementos.ParrafoPrimario icono={<Iconos.Estrella />} texto="4.9 (200 reseñas)" color="var(--color-terciario-bajo)"/>
                    <Elementos.TituloSextario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="$500.000" />
                    <Elementos.ParrafoPrimario color="var(--color-neutro-mas-mas-mas-mas-alto)" texto="por persona" />
                    <Elementos.EnlaceSecundario nivel="alto" texto="Ver detalles" enlace="google.com" />
                    <Iconos.Rebaja />
                </a>
            </section>
            <section className="Titular">
                <div/>
                <Elementos.TituloCuaternario texto="Explora más atividades" icono={<Iconos.Mapa/>} color="var(--color-secundario-mas-alto)"/>
                <div/>
            </section>
            <section className="Explorar">
                <a className="Aventura" href="google.com" style={{ backgroundImage: 'url(https://i.postimg.cc/tTJz1pYV/imagen-2.jpg)' }}>
                    <Elementos.TituloQuinario color="var(--color-primario)" texto="Deporte aventura" />
                </a>
                <a className="Aventura" href="google.com" style={{ backgroundImage: 'url(https://i.postimg.cc/tTJz1pYV/imagen-2.jpg)' }}>
                    <Elementos.TituloQuinario color="var(--color-primario)" texto="Deporte aventura" />
                </a>
                <a className="Aventura" href="google.com" style={{ backgroundImage: 'url(https://i.postimg.cc/tTJz1pYV/imagen-2.jpg)' }}>
                    <Elementos.TituloQuinario color="var(--color-primario)" texto="Deporte aventura" />
                </a>
            </section>
            <section className="Preguntas">
                <div style={{ backgroundImage: 'url(https://i.postimg.cc/0Nk4MqQy/imagen-7.jpg)' }}>
                    <Elementos.ParrafoPrimario icono={<Iconos.Ubicacion />} texto="Museo Precolombino, Región Metropolitana" color="var(--color-neutro-mas-mas-mas-bajo)"/>
                </div>
                <div>
                    <Elementos.TituloCuaternario icono={<Iconos.Soporte />} texto="Preguntas frecuentes" color="var(--color-secundario-mas-alto)" />
                    <Elementos.EnlacePrimario nivel="alto" texto="¿Puedo reservar una actividada sin iniciar sesión?" enlace="google.com" />
                    <Elementos.EnlacePrimario nivel="alto" texto="¿Qué debo hacer para cancelar una reserva?" enlace="google.com" />
                    <Elementos.EnlacePrimario nivel="alto" texto="¿Puedo sumar una persona a último minuto?" enlace="google.com" />
                    <Elementos.EnlacePrimario nivel="alto" texto="¿Puedo cambiar mi lugar de pick up más adelante?" enlace="google.com" />
                    <Elementos.EnlacePrimario nivel="alto" texto="Ver más" enlace="google.com" icono={<Iconos.Anadir />}/>
                </div>
            </section>
            {/*
            <section className="Espaciador" />
            */}
            <Pie />
        </main>
    );
}