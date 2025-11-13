import './Calendario.css';
import { useState } from "react";

interface CalendarioProps {
  onChange?: (date: string) => void;
}

export default function Calendario({ onChange }: CalendarioProps) {
  const today = new Date();
  const [month, setMonth] = useState<number>(today.getMonth());
  const [year, setYear] = useState<number>(today.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const handlePrev = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (month === 0) setYear((y) => y - 1);
  };

  const handleNext = () => {
    setMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (month === 11) setYear((y) => y + 1);
  };

  const handleSelectDay = (day: number) => {
    const selectedDate = new Date(year, month, day);
    const formatted = selectedDate.toISOString().split("T")[0];
    onChange?.(formatted);
  };

    return (
        <div className='agenda'>
            <div>
                <button onClick={handlePrev}>‹</button>
                <h6>{months[month]} {year}</h6>
                <button onClick={handleNext}>›</button>
            </div>
            <div>
                {weekdays.map((d) => (
                    <div className='dias' key={d}>{d}</div>
                ))}
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div className='nada' key={"empty" + i}></div>
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => (
                    <button className='numeros' key={i + 1} onClick={() => handleSelectDay(i + 1)}>{i + 1}</button>
                ))}
            </div>
    </div>
  );
}