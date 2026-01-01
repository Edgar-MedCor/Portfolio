import { motion } from 'framer-motion';
import { useState } from 'react';
import { Terminal, Cpu, Shield, Database, Code2, User } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'status'>('profile');

  const stats = [
    { label: 'Projects Deployed', value: '15+', icon: Terminal },
    { label: 'Code Experience', value: '3+ Years', icon: Code2 },
    { label: 'Systems Built', value: '8+', icon: Database },
    { label: 'Uptime', value: '99.9%', icon: Shield },
  ];

  const skills = [
    { name: 'Frontend Dev', level: 95 },
    { name: 'Backend Systems', level: 90 },
    { name: 'Database Design', level: 88 },
    { name: 'API Architecture', level: 92 },
    { name: 'DevOps & CI/CD', level: 85 },
    { name: 'System Security', level: 80 },
  ];

  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        {/* Header del dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dashboard-header"
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">SYSTEM_DASHBOARD</h2>
          </div>
          <p className="text-muted">Access Level: <span className="text-primary">ROOT</span> • Session: <span className="text-primary">ACTIVE</span></p>
        </motion.div>

        {/* Tarjeta principal del usuario */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="system-card h-full">
              <div className="card-header">
                <User className="w-5 h-5" />
                <span>USER_PROFILE</span>
                <div className="status-indicator">
                  <div className="pulse-dot" />
                  <span className="text-xs">ONLINE</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="w-32 h-32 rounded-lg border-2 border-primary/30 bg-linear-to-br from-primary/10 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary">EM</div>
                        <div className="text-xs mt-2 text-muted">DEV_ID: SW-2025-019</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Edgar Medrano</h3>
                    <p className="text-primary font-mono mb-4">FULL_STACK_ENGINEER</p>
                    
                    <div className="space-y-3">
                      <p className="text-sm text-muted leading-relaxed">
                        Building robust backend systems and clean frontend interfaces. 
                        Focused on scalable architecture, clean code, and efficient solutions.
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="tag">System Architecture</span>
                        <span className="tag">API Design</span>
                        <span className="tag">Performance</span>
                        <span className="tag">Security</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="system-card"
          >
            <div className="card-header">
              <Terminal className="w-5 h-5" />
              <span>SYSTEM_STATS</span>
            </div>
            
            <div className="p-4 space-y-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="stat-item"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <div className="flex-1">
                      <div className="text-sm text-muted">{stat.label}</div>
                      <div className="text-lg font-bold">{stat.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Tabs de contenido */}
        <div className="system-card">
          <div className="tabs-container">
            <button
              onClick={() => setActiveTab('profile')}
              className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
            >
              <Terminal className="w-4 h-4" />
              ABOUT_SYSTEM
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
            >
              <Cpu className="w-4 h-4" />
              SKILL_MATRIX
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`tab ${activeTab === 'status' ? 'active' : ''}`}
            >
              <Shield className="w-4 h-4" />
              SYSTEM_STATUS
            </button>
          </div>

          {/* Contenido de tabs */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="terminal-output"
              >
                <div className="terminal-line">
                  <span className="prompt">$ whoami</span>
                  <span className="output">Edgar Medrano — Software Engineer</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$ cat about.txt</span>
                  <span className="output">Egresado de Ingeniería en Software con enfoque en sistemas escalables.</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$ philosophy</span>
                  <span className="output">"Build systems that work well before they look pretty."</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$ location</span>
                  <span className="output">Cancún, México • Remote Available</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="skill-item"
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="skill-progress"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'status' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="status-item success">
                  <div className="status-icon">✓</div>
                  <div>
                    <div className="status-label">Backend Systems</div>
                    <div className="status-desc">Operational</div>
                  </div>
                </div>
                <div className="status-item success">
                  <div className="status-icon">✓</div>
                  <div>
                    <div className="status-label">Frontend Dev</div>
                    <div className="status-desc">Active</div>
                  </div>
                </div>
                <div className="status-item warning">
                  <div className="status-icon">⚠</div>
                  <div>
                    <div className="status-label">Database Design</div>
                    <div className="status-desc">Learning</div>
                  </div>
                </div>
                <div className="status-item success">
                  <div className="status-icon">✓</div>
                  <div>
                    <div className="status-label">API Security</div>
                    <div className="status-desc">Protected</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}