import './Frecuentes.css';

const Frecuentes: React.FC = () => {
    return (
        <section className='frecuentes'>
            <h3>Preguntas frecuentes</h3>
            <div>
                {/* Componente:  Pregunta*/}
                <a className='pregunta'>
                    ¿Puedo reservar una actividad sin iniciar sesión?
                    <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M8.20879 6.49707L11.7119 10.0002L8.20879 13.5033L8.20879 6.49707Z"/>
                    </svg>
                </a>
                {/* Componente:  Pregunta*/}
                <a className='pregunta'>
                    ¿Qué debo hacer para cancelar una reserva?
                    <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M8.20879 6.49707L11.7119 10.0002L8.20879 13.5033L8.20879 6.49707Z"/>
                    </svg>
                </a>
                {/* Componente:  Pregunta*/}
                <a className='pregunta'>
                    ¿Puedo sumar a una persona a último minuto?
                    <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M8.20879 6.49707L11.7119 10.0002L8.20879 13.5033L8.20879 6.49707Z"/>
                    </svg>
                </a>
                {/* Componente:  Pregunta*/}
                <a className='pregunta'>
                    ¿Puedo cambiar el punto donde pasarán a buscarme?
                    <svg width="inherit" height="inherit" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M8.20879 6.49707L11.7119 10.0002L8.20879 13.5033L8.20879 6.49707Z"/>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Frecuentes;