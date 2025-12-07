import "./InputTexto.css";

type InputTextoProps = { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string; informacion?: string; error?: string; type?: string; required?: boolean; };

export default function InputTexto({ label, name, value, onChange, placeholder, informacion, error, type = "text", required, }: InputTextoProps) {
    return (
        <div className="input-texto">
            <label htmlFor={name} className="label">{label}</label>
            <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} className={`campo ${error ? "error" : ""}`}/>
            {error ? (<span className="mensaje-error">{error}</span>) : informacion ? (<span className="mensaje-informacion">{informacion}</span>) : null}
        </div>
    );
}