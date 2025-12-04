import React, { useState, useEffect } from 'react';

const Header = ({ setCurrentPage }) => {
  // 🔹 Estado para menú móvil (preparado para futuro)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 🔹 useEffect: Detectar cambios en el tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      // Cerrar menú móvil si la ventana es grande
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Limpieza del event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // 🔹 Función para navegación con tracking
  const handleNavigation = (page) => {
    setCurrentPage(page);
    
    // Tracking invisible
    console.log(`📍 Navegación a: ${page} desde Header`);
    
    // Cerrar menú móvil si está abierto
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">
          <div className="gear large"></div>
          <div className="gear small"></div>
        </div>
        <span className="logo-text">DigitalEvolution</span>
      </div>

      <div className="nav-buttons">
        {/* Usamos la nueva función de navegación */}
        <button onClick={() => handleNavigation('inicio')}>Inicio</button>
        <button onClick={() => handleNavigation('proyectos')}>Proyectos</button>
        <button onClick={() => handleNavigation('habilidades')}>Habilidades</button>
        <button onClick={() => handleNavigation('contacto')}>Contacto</button>
        <button onClick={() => handleNavigation('newsletter')}>Newsletter</button>
      </div>

      {/* Menú móvil preparado para futuro (oculto por ahora) */}
      <div style={{display: 'none'}}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Header;