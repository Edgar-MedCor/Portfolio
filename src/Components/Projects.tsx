import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, Server, Database, Shield } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 'project-01',
    title: 'Administrative Control System',
    description: 'Internal dashboard for operational reporting and decision-making tools.',
    category: 'Backend System',
    status: 'DEPLOYED',
    security: 'HIGH',
    tech: ['React', 'TypeScript', 'Node.js', 'MySQL', 'JWT'],
    features: ['Role-based access', 'Real-time reports', 'Audit logging', 'Data export'],
    icon: Shield,
  },
  {
    id: 'project-02',
    title: 'Asset Management Platform',
    description: 'Complete system for tracking IT assets, maintenance, and lifecycle management.',
    category: 'Full Stack',
    status: 'PRODUCTION',
    security: 'MEDIUM',
    tech: ['React', 'Express', 'MySQL', 'Docker'],
    features: ['QR code tracking', 'Preventive maintenance', 'Inventory management', 'Reporting'],
    icon: Database,
  },
  {
    id: 'project-03',
    title: 'Transport Reservation System',
    description: 'Web application for managing transportation services and reservations.',
    category: 'Web Application',
    status: 'LIVE',
    security: 'MEDIUM',
    tech: ['React', 'Tailwind', 'Express', 'MySQL'],
    features: ['Booking system', 'Driver assignment', 'Payment integration', 'Admin panel'],
    icon: Server,
  },
  {
    id: 'project-04',
    title: 'API Gateway & Microservices',
    description: 'Scalable backend architecture with multiple microservices.',
    category: 'Backend',
    status: 'DEVELOPMENT',
    security: 'HIGH',
    tech: ['Node.js', 'Docker', 'Redis', 'JWT', 'Swagger'],
    features: ['Rate limiting', 'Authentication', 'Load balancing', 'Monitoring'],
    icon: Lock,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="flex items-center gap-3 mb-2">
            <Server className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold">PROJECT_ACCESS</h2>
          </div>
          <p className="text-muted">
            Deployed systems and applications • Access Level Required
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="filters-container">
          <div className="filter-tags">
            {['ALL', 'BACKEND', 'FULL_STACK', 'WEB_APP', 'API'].map((filter) => (
              <button key={filter} className="filter-tag">
                {filter}
              </button>
            ))}
          </div>
          <div className="access-indicator">
            <div className="pulse-dot" />
            <span className="text-sm">PROJECTS_ACTIVE: {projects.length}</span>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="projects-grid">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="project-card group"
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Header de la tarjeta */}
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <div className="project-icon">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`status-badge ${project.status.toLowerCase()}`}>
                          {project.status}
                        </span>
                        <span className="security-badge">
                          <Lock className="w-3 h-3" />
                          {project.security}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="access-button">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Descripción */}
                <p className="project-description">{project.description}</p>

                {/* Features */}
                <div className="features-list">
                  {project.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="project-overlay"
                  >
                    <div className="overlay-content">
                      <button className="view-details">
                        <Github className="w-4 h-4" />
                        VIEW_CODE
                      </button>
                      <button className="view-details">
                        <ExternalLink className="w-4 h-4" />
                        LIVE_DEMO
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Efecto de scanline */}
                <div className="scanline" />
              </motion.div>
            );
          })}
        </div>

        {/* Terminal de proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="project-terminal"
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="dot red" />
              <div className="dot yellow" />
              <div className="dot green" />
            </div>
            <span className="terminal-title">project_terminal</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">projects --list --status=active</span>
            </div>
            {projects.map((project, idx) => (
              <div key={project.id} className="terminal-line output">
                <span className="text-primary">[{idx + 1}]</span>
                <span>{project.title}</span>
                <span className="text-muted ml-auto">{project.status}</span>
              </div>
            ))}
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command text-primary">_</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}