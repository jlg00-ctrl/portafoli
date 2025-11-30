// COMPONENTE: Header - Navegación principal del portfolio
// ALUMNO ASIX: Jorge Lopez - Gestión de interfaces de usuario web
import React from 'react';

const Header = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      {/* LOGO CON ANIMACIÓN: Representa la marca DigitalEvolution */}
      <div className="logo">
        <div className="logo-icon">
          <div className="gear large"></div>
          <div className="gear small"></div>
        </div>
        <span className="logo-text">DigitalEvolution</span>
      </div>

      {/* BOTONES DE NAVEGACIÓN: Controlan el estado de la página actual */}
      <div className="nav-buttons">
        <button onClick={() => setCurrentPage('inicio')}>Inicio</button>
        <button onClick={() => setCurrentPage('proyectos')}>Proyectos</button>
        <button onClick={() => setCurrentPage('habilidades')}>Habilidades</button>
        <button onClick={() => setCurrentPage('contacto')}>Contacto</button>
        <button onClick={() => setCurrentPage('newsletter')}>Newsletter</button>
      </div>
    </nav>
  );
};

export default Header;