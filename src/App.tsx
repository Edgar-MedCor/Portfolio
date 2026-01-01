import { useEffect, useState } from 'react';
import MatrixRain from './Components/MatrixRain';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Dashboard from './Components/Dashboard';
import Projects from './Components/Projects';
import TechDashboard from './Components/TechDashboard';
import ContactTerminal from './Components/ContactTerminal';
import SystemStatus from './Components/SystemStatus';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'dashboard', 'projects', 'tech', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hacker-portfolio">
      {/* Efectos de fondo */}
      <MatrixRain />
      <div className="grid-overlay" />
      
      {/* Sistema de navegación */}
      <Navigation activeSection={activeSection} />
      
      {/* Header con datos personales */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Dashboard principal - Reemplaza IDCard y AboutTerminal */}
      <section id="dashboard">
        <Dashboard />
      </section>
      
      {/* Proyectos en formato tarjetas de acceso */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* Tech Stack como terminal de comandos */}
      <section id="tech">
        <TechDashboard />
      </section>
      
      {/* Status del sistema */}
      <SystemStatus />
      
      {/* Contacto como consola de comando */}
      <section id="contact">
        <ContactTerminal />
      </section>
      
      {/* Footer del sistema */}
      <footer className="system-footer">
        <div className="terminal-line">
          <span className="prompt">root@portfolio:~$</span>
          <span className="command">system_status --check</span>
          <span className="output">[OK] All systems operational</span>
        </div>
        <div className="terminal-line">
          <span className="prompt">root@portfolio:~$</span>
          <span className="command">last_updated</span>
          <span className="output">[{new Date().toLocaleDateString()}] v2.5.1</span>
        </div>
      </footer>
    </div>
  );
}

export default App;