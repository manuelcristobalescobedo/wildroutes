import "./ListaPrimaria.css";

type ListaPrimariaProps = {
    items: string[]
    color?: string
}

export default function ListaPrimaria({ items, color }: ListaPrimariaProps) {
    return (
        <ul className="ListaPrimaria" style={{ color }}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}