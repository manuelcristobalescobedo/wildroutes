function CampoTexto({ label, placeholder }: { label: string, placeholder?: string }) {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                placeholder={placeholder}
            />
        </div>
    );
}

function CampoContraseña({label}: {label: string}) {
    return(
        <div className="campo-contraseña">
            <label>{label}</label>
            <input type="password" placeholder="Contraseña" />
                <small style={{ opacity: 0.6 }}>Mínimo 8 caracteres</small>
        </div>
    )
}

function CampoNumero({label}: {label: string}) {
    return(
        <div className="campo-numero">
            <label>{label}</label>
            <input type="number" placeholder="Cúantas" />
        </div>
    )
}

function CampoArchivo({label}: ({label: string})) {
    return (
        <div>
            <label className="campo-archivo">{label}</label>
            <div>
                <span role="img" style={{ fontSize: "3rem" }}>🖼</span>
            </div>
            <small style={{ opacity: 0.6 }}>Máximo 3 fotografias</small>
        </div>
    )
}

function Selector({ label, opciones = [] }: { label: string, opciones: string[] }) {
    return (
        <div className="selector">
            <label>{label}</label>
            <select>
                {opciones.length > 0
                    ? opciones.map(op => <option key={op}>{op}</option>)
                    : <option disabled>Sin opciones</option>}
            </select>
        </div>
    );
}


function SelectorFecha({ label }: { label: string }) {
    return (
        <div className="selector-fecha">
            <label>{label}</label>
            <input
                type="date"
            />
        </div>
    );
}

function CasillaVerificacion({ texto }: { texto: string }) {
    return (
        <label className="casilla-verificación">
            <input type="checkbox"/>
            {texto}
        </label>
    );
}


export { CampoTexto, CampoContraseña, CampoNumero, CampoArchivo, Selector, SelectorFecha, CasillaVerificacion };