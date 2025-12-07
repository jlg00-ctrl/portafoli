import React, { useState, useEffect } from 'react';

const Header = ({ setCurrentPage }) => {
  // Estado para menú móvil (para futuro uso)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      // Cerrar menú móvil si la ventana es grande
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Limpiar event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Función para navegar entre páginas
  const handleNavigation = (page) => {
    setCurrentPage(page);
    
    // Log para tracking
    console.log(`Navegación a: ${page} desde Header`);
    
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
        <button onClick={() => handleNavigation('inicio')}>Inicio</button>
        <button onClick={() => handleNavigation('proyectos')}>Proyectos</button>
        <button onClick={() => handleNavigation('habilidades')}>Habilidades</button>
        <button onClick={() => handleNavigation('contacto')}>Contacto</button>
        <button onClick={() => handleNavigation('newsletter')}>Newsletter</button>
      </div>

      {/* Menú móvil (oculto por ahora, preparado para futuro) */}
      <div style={{display: 'none'}}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Header;