import './Explora.css';

const Explora: React.FC = () => {
    return (
        <section className='explora'>
            <h3>Explora más actividades</h3>
            <div>
                {/* Componente:  Actividad*/}
                <a className='actividad' style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                    <h4>Deporte aventura</h4>
                </a>
                {/* Componente:  Actividad*/}
                <a className='actividad' style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                    <h4>Turismo cultural</h4>
                </a>
                {/* Componente:  Actividad*/}
                <a className='actividad' style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url('https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg')"}}>
                    <h4>Turismo escénico</h4>
                </a>
            </div>
        </section>
    );
};

export default Explora;