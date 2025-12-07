import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [visitCount, setVisitCount] = useState(0); // Contador de visitas
  const [isLoading, setIsLoading] = useState(false); // Para futuras cargas

  // Trackeo de visitas al portfolio
  useEffect(() => {
    // Incrementar contador de visitas en localStorage
    const storedVisits = localStorage.getItem('portfolioVisits') || 0;
    const newVisitCount = parseInt(storedVisits) + 1;
    
    setVisitCount(newVisitCount);
    localStorage.setItem('portfolioVisits', newVisitCount);
    
    // Solo para desarrollo
    console.log(`Visita número: ${newVisitCount} a tu portfolio`);
  }, []); // Se ejecuta solo al montar el componente

  // Cambiar título de la página según la navegación
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
    
    // Log de navegación
    console.log(`Navegación a: ${currentPage}`);
  }, [currentPage]); // Se ejecuta cada vez que cambia currentPage

  return (
    <div className="app">
      {/* Estado de carga (oculto, preparado para futuro) */}
      {isLoading && <div style={{display: 'none'}}>Cargando...</div>}
      
      <Header setCurrentPage={setCurrentPage} />
      <MainContent 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        visitCount={visitCount} // Pasamos el contador de visitas
      />
      <Footer />
    </div>
  );
}

export default App;