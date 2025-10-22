import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Paginas/Principal.tsx'; // ajusta la ruta si tu archivo está en otra carpeta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App;