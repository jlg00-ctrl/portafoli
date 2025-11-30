// COMPONENTE: Footer - Pie de página con información de contacto
// ALUMNO ASIX: Jorge Lopez - Integración de servicios externos y enlaces
import React from 'react';
import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* INFORMACIÓN LEGAL: Copyright y datos de la empresa */}
        <p>&copy; 2025 DigitalEvolution S.A. - Jorge Lopez</p>
        <p>Administrador de Sistemas & Desarrollador Full Stack</p>
        
        {/* REDES SOCIALES: Enlaces externos a plataformas */}
        <div className="footer-social">
          {/* INSTAGRAM: Perfil personal con target _blank para seguridad */}
          <a href="https://instagram.com/srto.lopez87" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          {/* GITHUB: Repositorio de proyectos técnicos */}
          <a href="https://github.com/jlg00-ctrl" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          {/* WHATSAPP: Contacto directo para consultas */}
          <a href="https://wa.me/34643957615" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>

        {/* CONTACTO DIRECTO: Email y teléfono profesional */}
        <div className="footer-links">
          <span>📧 jlg00@iesemilidarder.com</span>
          <span>📱 +34 643 957 615</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;