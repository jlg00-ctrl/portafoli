import React, { useState, useEffect } from 'react'; // Añadimos useEffect
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [visitCount, setVisitCount] = useState(0); // Nuevo estado invisible
  const [isLoading, setIsLoading] = useState(false); // Para futuras cargas

  // 🔹 useEffect 1: Trackeo de visitas (totalmente invisible)
  useEffect(() => {
    // Incrementar contador de visitas en localStorage
    const storedVisits = localStorage.getItem('portfolioVisits') || 0;
    const newVisitCount = parseInt(storedVisits) + 1;
    
    setVisitCount(newVisitCount);
    localStorage.setItem('portfolioVisits', newVisitCount);
    
    // Solo para desarrollo - puedes quitarlo en producción
    console.log(`🏆 Visita número: ${newVisitCount} a tu portfolio`);
  }, []); // Se ejecuta solo al montar el componente

  // 🔹 useEffect 2: Cambio de título dinámico según página
  useEffect(() => {
    const pageTitles = {
      'inicio': 'Jorge Lopez - Admin Sistemas',
      'proyectos': 'Mis Proyectos - Jorge Lopez',
      'habilidades': 'Habilidades Técnicas',
      'contacto': 'Contacto Profesional',
      'newsletter': 'Newsletter DigitalEvolution',
      'ejemplo-newsletter': 'Ejemplo Newsletter'
    };
    
    document.title = pageTitles[currentPage] || 'Portfolio Jorge Lopez';
    
    // También podríamos trackear analíticas de página
    console.log(`📊 Navegación a: ${currentPage}`);
  }, [currentPage]); // Se ejecuta cada vez que cambia currentPage

  return (
    <div className="app">
      {/* Estado de carga preparado para futuro uso */}
      {isLoading && <div style={{display: 'none'}}>Cargando...</div>}
      
      <Header setCurrentPage={setCurrentPage} />
      <MainContent 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        visitCount={visitCount} // Pasamos datos invisibles
      />
      <Footer />
    </div>
  );
}

export default App;