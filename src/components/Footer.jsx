import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  // Estado para contar clicks en redes sociales
  const [socialClicks, setSocialClicks] = useState({
    instagram: 0,
    github: 0,
    whatsapp: 0
  });

  // Función para manejar clicks en redes sociales
  const handleSocialClick = (platform) => {
    // Actualizar contador
    setSocialClicks(prev => ({
      ...prev,
      [platform]: prev[platform] + 1
    }));
    
    // Guardar en localStorage
    const clicks = JSON.parse(localStorage.getItem('socialClicks') || '{}');
    clicks[platform] = (clicks[platform] || 0) + 1;
    localStorage.setItem('socialClicks', JSON.stringify(clicks));
    
    console.log(`Click en ${platform}: Total ${clicks[platform]}`);
  };

  // Cargar clicks guardados al inicio
  useEffect(() => {
    const savedClicks = localStorage.getItem('socialClicks');
    if (savedClicks) {
      setSocialClicks(JSON.parse(savedClicks));
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 DigitalEvolution S.A. Todos los derechos reservados </p>
         <p>Jorge Lopez Glyn</p>
        <p>Administrador de Sistemas & Desarrollador Full Stack</p>
        
        <div className="footer-social">
          <a 
            href="https://instagram.com/srto.lopez87" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            onClick={() => handleSocialClick('instagram')}
          >
            <FaInstagram />
          </a>
          
          <a 
            href="https://github.com/jlg00-ctrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            onClick={() => handleSocialClick('github')}
          >
            <FaGithub />
          </a>
          
          <a 
            href="https://wa.me/34643957615" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            onClick={() => handleSocialClick('whatsapp')}
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="footer-links">
          <span>📧 jlg00@iesemilidarder.com</span>
          <span>📱 +34 643 957 615</span>
        </div>

        {/* Tracking invisible para analíticas */}
        <div style={{display: 'none'}}>
          <p>Clicks en redes: Instagram({socialClicks.instagram}), 
             GitHub({socialClicks.github}), 
             WhatsApp({socialClicks.whatsapp})</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;