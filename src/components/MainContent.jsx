// COMPONENTE: MainContent - Contenido principal dinámico del portfolio
import React, { useState, useEffect } from 'react';

const MainContent = ({ currentPage, setCurrentPage, visitCount }) => {
  // 🔹 Estado para futura carga dinámica de proyectos
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Script de Backup Automatizado',
      description: 'Desarrollo de script en Bash para backups automáticos de configuraciones de servidores. Programación con cron y compresión de archivos.',
      tech: ['Bash', 'Cron', 'Linux'],
      featured: true
    },
    {
      id: 2,
      title: 'Monitorización de Servidores',
      description: 'Implementación de sistema de monitorización básico con alertas por email. Uso de herramientas como htop y configuración de logs.',
      tech: ['htop', 'Email alerts', 'Logging'],
      featured: true
    },
    {
      id: 3,
      title: 'Gestión de Usuarios Active Directory',
      description: 'Automatización de creación y gestión de usuarios en AD. Scripts PowerShell para altas, bajas y modificaciones de cuentas.',
      tech: ['PowerShell', 'Active Directory', 'Automation'],
      featured: true
    },
    {
      id: 4,
      title: 'Web Corporativa DigitalEvolution',
      description: 'Desarrollo frontend de la página web de la empresa usando React. Diseño responsive y optimización para SEO.',
      tech: ['React', 'CSS', 'SEO'],
      featured: true
    }
  ]);

  // 🔹 Estado para manejar formulario del newsletter
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // 🔹 Estado para habilidades
  const [skills, setSkills] = useState({
    sistemas: [],
    desarrollo: []
  });

  // 🔹 Estado para el formulario de contacto
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    acceptedTerms: false
  });

  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactSubmitStatus, setContactSubmitStatus] = useState({
    success: false,
    error: ''
  });

  // 🔹 useEffect 1: Carga inicial de datos
  useEffect(() => {
    console.log('📂 Datos de proyectos cargados:', projects.length);
    
    // Cargar habilidades iniciales
    setSkills({
      sistemas: [
        'Windows Server', 'Active Directory', 'PowerShell', 
        'Bash Scripting', 'Monitorización', 'Backup & Recovery'
      ],
      desarrollo: [
        'React', 'JavaScript', 'HTML/CSS', 
        'AWS', 'Docker', 'Git'
      ]
    });
  }, []);

  // 🔹 useEffect 2: Efecto al cambiar de página
  useEffect(() => {
    // Scroll suave al cambiar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Guardar la última página visitada
    localStorage.setItem('lastVisitedPage', currentPage);
    
    // Log para analíticas (invisible)
    if (visitCount) {
      console.log(`👤 Visita ${visitCount} - Página: ${currentPage}`);
    }
  }, [currentPage, visitCount]);

  // 🔹 Función para manejar suscripción al newsletter
  const handleSubscribe = () => {
    // Guardar el email actual
    const currentEmail = email;
    
    // Validar y guardar si es válido
    if (currentEmail && currentEmail.includes('@')) {
      localStorage.setItem('newsletterEmail', currentEmail);
      console.log('✅ Email guardado:', currentEmail);
      
      // Mostrar feedback visual breve
      setIsSubscribed(true);
      
      // Limpiar después de 300ms (para que se vea el ✅)
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
        setCurrentPage('ejemplo-newsletter');
      }, 300);
    } else {
      // Si no hay email válido, navegar igual pero sin guardar
      setCurrentPage('ejemplo-newsletter');
      
      // Limpiar campo
      setEmail('');
    }
  };

  // 🔹 Función para manejar cambios en el formulario de contacto
  const handleContactChange = (field, value) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpiar mensajes de error al editar
    if (contactSubmitStatus.error) {
      setContactSubmitStatus({ success: false, error: '' });
    }
  };

  // 🔹 Función para enviar el formulario de contacto
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    // Validación
    if (!contactForm.acceptedTerms) {
      setContactSubmitStatus({ 
        success: false, 
        error: 'Debes aceptar los términos para enviar el mensaje' 
      });
      return;
    }

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactSubmitStatus({ 
        success: false, 
        error: 'Por favor completa los campos requeridos' 
      });
      return;
    }

    setIsSubmittingContact(true);
    
    try {
      // Simulación de envío
      console.log('📤 Enviando formulario de contacto:', contactForm);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Éxito
      setContactSubmitStatus({ success: true, error: '' });
      
      // Guardar en localStorage
      const contacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      contacts.push({
        ...contactForm,
        date: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(contacts));
      
      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: '',
          acceptedTerms: false
        });
        setContactSubmitStatus({ success: false, error: '' });
      }, 3000);
      
    } catch (error) {
      setContactSubmitStatus({ 
        success: false, 
        error: 'Error al enviar el mensaje. Intenta nuevamente.' 
      });
      console.error('❌ Error en formulario:', error);
    } finally {
      setIsSubmittingContact(false);
    }
  };

  // FUNCIÓN: renderPage - Renderizado condicional basado en la página actual
  const renderPage = () => {
    switch(currentPage) {
      case 'inicio':
        return (
          <div className="page">
            <div className="hero-with-photo">
              <div className="profile-section">
                <div className="profile-image">
                  <img src="/images/foto-jorge.jpg" alt="Jorge Lopez - Administrador de Sistemas" />
                </div>
                <div className="profile-info">
                  <h1>¡Hola! soy Jorge 👋</h1>
                  <p className="profile-title">Administrador de Sistemas en DigitalEvolution S.A</p>
                  <p className="profile-subtitle">Especialista en infraestructuras IT y soluciones cloud</p>
                  <button onClick={() => setCurrentPage('proyectos')}>Ver mis proyectos</button>
                  
                  {/* Contador invisible de visitas */}
                  <div style={{display: 'none'}}>
                    <p>Visitas totales: {visitCount || 0}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'proyectos':
        return (
          <div className="page">
            <h1>Mis Proyectos 🚀</h1>
            {/* Ahora usamos el estado projects */}
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {/* Tags preparados para futuro uso */}
                  <div style={{display: 'none'}}>
                    {project.tech.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'habilidades':
        return (
          <div className="page">
            <h1>Tecnologías & Habilidades 🛠️</h1>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Administración de Sistemas</h3>
                <div className="skills-list">
                  {skills.sistemas.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Desarrollo & Cloud</h3>
                <div className="skills-list">
                  {skills.desarrollo.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      


// 🔹 Reemplaza SOLO el caso 'contacto' con este código que coincide con la imagen:

// 🔹 Reemplaza SOLO el caso 'contacto' con este código:

case 'contacto':
  return (
    <div className="page contact-page">
      <div className="contact-wrapper-reverse">
        {/* Sección izquierda: Información de contacto */}
        <div className="contact-info-section-left">
          <div className="contact-info-header-left">
            <h3 className="contact-info-title-left">Información de contacto</h3>
            <p className="contact-info-subtitle-left">Contáctame directamente</p>
          </div>

          <div className="contact-info-content-left">
            <div className="contact-info-item-left">
              <span className="contact-info-icon-left">📧</span>
              <div className="contact-info-details-left">
                <p className="contact-info-label-left">Email</p>
                <p className="contact-info-value-left">jig00@iesemilidarder.com</p>
              </div>
            </div>

            <div className="contact-info-item-left">
              <span className="contact-info-icon-left">📱</span>
              <div className="contact-info-details-left">
                <p className="contact-info-label-left">Teléfono</p>
                <p className="contact-info-value-left">+34 643 957 615</p>
              </div>
            </div>

            <div className="contact-info-item-left">
              <span className="contact-info-icon-left">🏢</span>
              <div className="contact-info-details-left">
                <p className="contact-info-label-left">Empresa</p>
                <p className="contact-info-value-left">DigitalEvolution S.A</p>
              </div>
            </div>

            <div className="contact-info-item-left">
              <span className="contact-info-icon-left">💼</span>
              <div className="contact-info-details-left">
                <p className="contact-info-label-left">Cargo</p>
                <p className="contact-info-value-left">Administrador de Sistemas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección derecha: Formulario */}
        <div className="contact-form-section-right">
          <div className="contact-form-header-right">
            <h2 className="contact-form-title-right">Envíame un mensaje</h2>
            <p className="contact-form-subtitle-right">Responderé en menos de 24 horas</p>
          </div>
          
          <form className="contact-form-clean-right" onSubmit={handleContactSubmit}>
            {/* Nombre completo */}
            <div className="form-group-clean-right">
              <label className="form-label-clean-right">Nombre completo*</label>
              <input
                type="text"
                className="form-input-clean-right"
                value={contactForm.name}
                onChange={(e) => handleContactChange('name', e.target.value)}
                required
                placeholder="Tu nombre"
              />
            </div>

            {/* Correo electrónico */}
            <div className="form-group-clean-right">
              <label className="form-label-clean-right">Correo electrónico*</label>
              <input
                type="email"
                className="form-input-clean-right"
                value={contactForm.email}
                onChange={(e) => handleContactChange('email', e.target.value)}
                required
                placeholder="tu@email.com"
              />
            </div>

            {/* Asunto */}
            <div className="form-group-clean-right">
              <label className="form-label-clean-right">Asunto</label>
              <input
                type="text"
                className="form-input-clean-right"
                value={contactForm.subject}
                onChange={(e) => handleContactChange('subject', e.target.value)}
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            {/* Mensaje */}
            <div className="form-group-clean-right">
              <label className="form-label-clean-right">Mensaje*</label>
              <textarea
                className="form-textarea-clean-right"
                value={contactForm.message}
                onChange={(e) => handleContactChange('message', e.target.value)}
                required
                rows="6"
                placeholder="Describe tu proyecto o consulta..."
              />
            </div>

            {/* Checkbox */}
            <div className="checkbox-group-clean-right">
              <input
                type="checkbox"
                id="privacy-clean-right"
                className="checkbox-clean-right"
                checked={contactForm.acceptedTerms}
                onChange={(e) => handleContactChange('acceptedTerms', e.target.checked)}
              />
              <label htmlFor="privacy-clean-right" className="checkbox-label-clean-right">
                Acepto que mis datos sean tratados según la política de privacidad
              </label>
            </div>

            {/* Botón de envío */}
            <button 
              type="submit" 
              className="submit-btn-clean-right"
              disabled={isSubmittingContact}
            >
              {isSubmittingContact ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {/* Mensajes de estado */}
            {contactSubmitStatus.success && (
              <div className="success-message-clean-right">
                ✅ ¡Mensaje enviado correctamente!
              </div>
            )}
            
            {contactSubmitStatus.error && (
              <div className="error-message-clean-right">
                ❌ {contactSubmitStatus.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
      
      case 'newsletter':
        return (
          <div className="page">
            <h1>Newsletter 📰</h1>
            <p>Suscríbete para recibir noticias mensuales sobre ciberseguridad y administración de sistemas</p>
            
            <div className="newsletter-form">
              {/* Input controlado por estado */}
              <input 
                type="email" 
                placeholder="Tu email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
              />
              
              {/* Botón con estado controlado */}
              <button 
                onClick={handleSubscribe}
                disabled={!email || !email.includes('@')}
                style={!email || !email.includes('@') ? {opacity: 0.7} : {}}
              >
                {isSubscribed ? '✅ Suscrito' : 'Suscribirme'}
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

  // 🔹 useEffect adicional: Limpieza al desmontar
  useEffect(() => {
    return () => {
      // Función de limpieza (opcional)
      console.log('🧹 MainContent desmontado');
    };
  }, []);

  return (
    <main className="main-content">
      {renderPage()}
    </main>
  );
};

export default MainContent;