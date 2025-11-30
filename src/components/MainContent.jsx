// COMPONENTE: MainContent - Contenido principal dinámico del portfolio
// ALUMNO ASIX: Jorge Lopez - Gestión de contenido dinámico y routing
import React from 'react';

const MainContent = ({ currentPage, setCurrentPage }) => {
  // FUNCIÓN: renderPage - Renderizado condicional basado en la página actual
  // TÉCNICA: Switch statement para gestión de vistas (similar a routing en servidores)
  const renderPage = () => {
    switch(currentPage) {
      case 'inicio':
        return (
          <div className="page">
            {/* HERO SECTION: Presentación personal con foto y call-to-action */}
            <div className="hero-with-photo">
              <div className="profile-section">
                <div className="profile-image">
                  <img src="/images/foto-jorge.jpg" alt="Jorge Lopez - Administrador de Sistemas" />
                </div>
                <div className="profile-info">
                  <h1>¡Hola! soy Jorge 👋</h1>
                  <p className="profile-title">Administrador de Sistemas en DigitalEvolution S.A</p>
                  <p className="profile-subtitle">Especialista en infraestructuras IT y soluciones cloud</p>
                  {/* BOTÓN: Navegación a proyectos - UX de funnel */}
                  <button onClick={() => setCurrentPage('proyectos')}>Ver mis proyectos</button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'proyectos':
        return (
          <div className="page">
            <h1>Mis Proyectos 🚀</h1>
            {/* GRID DE PROYECTOS: Muestra trabajos técnicos realizados */}
            <div className="projects-grid">
              <div className="project-card">
                <h3>Script de Backup Automatizado</h3>
                <p>Desarrollo de script en Bash para backups automáticos de configuraciones de servidores. Programación con cron y compresión de archivos.</p>
              </div>
              <div className="project-card">
                <h3>Monitorización de Servidores</h3>
                <p>Implementación de sistema de monitorización básico con alertas por email. Uso de herramientas como htop y configuración de logs.</p>
              </div>
              <div className="project-card">
                <h3>Gestión de Usuarios Active Directory</h3>
                <p>Automatización de creación y gestión de usuarios en AD. Scripts PowerShell para altas, bajas y modificaciones de cuentas.</p>
              </div>
              <div className="project-card">
                <h3>Web Corporativa DigitalEvolution</h3>
                <p>Desarrollo frontend de la página web de la empresa usando React. Diseño responsive y optimización para SEO.</p>
              </div>
            </div>
          </div>
        );

      case 'habilidades':
        return (
          <div className="page">
            <h1>Tecnologías & Habilidades 🛠️</h1>
            {/* GRID DE HABILIDADES: Organizadas por categorías técnicas */}
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Administración de Sistemas</h3>
                <div className="skills-list">
                  <span className="skill-item">Windows Server</span>
                  <span className="skill-item">Active Directory</span>
                  <span className="skill-item">PowerShell</span>
                  <span className="skill-item">Bash Scripting</span>
                  <span className="skill-item">Monitorización</span>
                  <span className="skill-item">Backup & Recovery</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Desarrollo & Cloud</h3>
                <div className="skills-list">
                  <span className="skill-item">React</span>
                  <span className="skill-item">JavaScript</span>
                  <span className="skill-item">HTML/CSS</span>
                  <span className="skill-item">AWS</span>
                  <span className="skill-item">Docker</span>
                  <span className="skill-item">Git</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contacto':
        return (
          <div className="page">
            <h1>Contacto 📞</h1>
            {/* INFORMACIÓN DE CONTACTO: Datos profesionales */}
            <div className="contact-info">
              <p>📧 jlg00@iesemilidarder.com</p>
              <p>📱 +34 643 957 615</p>
              <p>🏢 DigitalEvolution S.A</p>
              <p>💼 Administrador de Sistemas</p>
            </div>
          </div>
        );
      
      case 'newsletter':
        return (
          <div className="page">
            <h1>Newsletter 📰</h1>
            <p>Suscríbete para recibir noticias mensuales sobre ciberseguridad y administración de sistemas</p>
            {/* FORMULARIO SIMULADO: Captura de emails (sin backend) */}
            <div className="newsletter-form">
              <input type="email" placeholder="Tu email" />
              <button onClick={() => setCurrentPage('ejemplo-newsletter')}>
                Suscribirme
              </button>
              <p className="newsletter-note">
                Al suscribirte, podrás ver un ejemplo del newsletter mensual que recibirás
              </p>
            </div>
          </div>
        );

      case 'ejemplo-newsletter':
        return (
          <div className="page">
            <h1>Newsletter Mensual DigitalEvolution 📰</h1>
            {/* EJEMPLO DE NEWSLETTER: Contenido demostrativo */}
            <div className="newsletter-example">
              <div className="newsletter-header">
                <h2>DigitalEvolution News - Enero 2025</h2>
                <p>Tu boletín mensual de tecnología y ciberseguridad</p>
              </div>
              
              <div className="newsletter-content">
                <div className="newsletter-article">
                  <h3>🔥 Últimas tendencias en Ciberseguridad</h3>
                  <p>Este mes analizamos el aumento de ataques ransomware y las mejores prácticas para proteger tus sistemas. Implementa estrategias de backup 3-2-1 y mantén tus sistemas actualizados.</p>
                </div>

                <div className="newsletter-article">
                  <h3>🛠️ Herramienta del Mes: Monitoriz Pro</h3>
                  <p>Descubre esta herramienta de monitorización que está revolucionando la administración de sistemas. Alertas automáticas, dashboards personalizados y reporting avanzado.</p>
                </div>

                <div className="newsletter-article">
                  <h3>📈 Caso de Éxito: Infraestructura Cloud</h3>
                  <p>Cómo implementamos una infraestructura cloud escalable para TechStartup Inc. Resultados: 99.9% uptime y reducción de costes del 40%.</p>
                </div>

                <div className="newsletter-article">
                  <h3>🎓 Consejo Práctico: Scripting PowerShell</h3>
                  <p>Aprende a automatizar tareas repetitivas en Active Directory con nuestros scripts PowerShell optimizados. Descarga gratuita disponible.</p>
                </div>
              </div>

              <div className="newsletter-footer">
                <p>¡Gracias por suscribirte! Este es el tipo de contenido que recibirás cada mes.</p>
                <button onClick={() => setCurrentPage('inicio')}>
                  🏠 Volver al Inicio
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Página no encontrada</div>;
    }
  };

  return (
    <main className="main-content">
      {renderPage()}
    </main>
  );
};

export default MainContent;