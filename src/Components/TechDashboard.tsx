import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Terminal, Cpu, Database, Code2, Server, Wrench, GitBranch } from 'lucide-react';

const techCategories = {
  'LANGUAGES': [
    { name: 'JavaScript', level: 95, icon: 'JS', color: '#F7DF1E' },
    { name: 'TypeScript', level: 90, icon: 'TS', color: '#3178C6' },
    { name: 'Python', level: 80, icon: 'PY', color: '#3776AB' },
    { name: 'C#', level: 75, icon: 'C#', color: '#239120' },
  ],
  'FRONTEND': [
    { name: 'React', level: 95, icon: '⚛', color: '#61DAFB' },
    { name: 'Next.js', level: 85, icon: '▲', color: '#000000' },
    { name: 'Tailwind', level: 92, icon: 'TW', color: '#06B6D4' },
    { name: 'Vite', level: 88, icon: '⚡', color: '#646CFF' },
  ],
  'BACKEND': [
    { name: 'Node.js', level: 92, icon: '🟢', color: '#339933' },
    { name: 'Express', level: 90, icon: '🚂', color: '#000000' },
    { name: '.NET', level: 80, icon: '.NET', color: '#512BD4' },
    { name: 'FastAPI', level: 75, icon: '⚡', color: '#009688' },
  ],
  'DATABASES': [
    { name: 'MySQL', level: 88, icon: '🐬', color: '#4479A1' },
    { name: 'PostgreSQL', level: 85, icon: '🐘', color: '#4169E1' },
    { name: 'MongoDB', level: 80, icon: '🍃', color: '#47A248' },
    { name: 'Redis', level: 75, icon: '🛑', color: '#DC382D' },
  ],
  'TOOLS': [
    { name: 'Git', level: 95, icon: '📦', color: '#F05032' },
    { name: 'Docker', level: 82, icon: '🐳', color: '#2496ED' },
    { name: 'AWS', level: 70, icon: '☁️', color: '#FF9900' },
    { name: 'Linux', level: 85, icon: '🐧', color: '#FCC624' },
  ],
};

const commands = [
  { cmd: 'skills --list', output: 'Listing all technical skills...' },
  { cmd: 'proficiency --frontend', output: 'Frontend: React (95%), TypeScript (90%), Tailwind (92%)' },
  { cmd: 'experience --backend', output: 'Backend: Node.js (3+ years), Express, .NET, Database Design' },
  { cmd: 'tools --devops', output: 'DevOps: Docker, Git, CI/CD, AWS, Linux Administration' },
];

export default function TechDashboard() {
  const [activeCategory, setActiveCategory] = useState<string>('LANGUAGES');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const executeCommand = (cmd: string) => {
    setCommandHistory([...commandHistory, `$ ${cmd}`]);
    setCurrentCommand('');
  };

  return (
    <section id="tech" className="tech-section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold">TECH_MATRIX</h2>
          </div>
          <p className="text-muted">
            Interactive technology dashboard • Proficiency levels visualized
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Panel izquierdo - Categorías */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="system-card h-full">
              <div className="card-header">
                <Code2 className="w-5 h-5" />
                <span>TECH_STACK_VISUALIZATION</span>
              </div>

              {/* Categorías */}
              <div className="categories-grid">
                {Object.keys(techCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`category-card ${activeCategory === category ? 'active' : ''}`}
                  >
                    <div className="category-icon">
                      {category === 'LANGUAGES' && <Code2 className="w-5 h-5" />}
                      {category === 'FRONTEND' && <Terminal className="w-5 h-5" />}
                      {category === 'BACKEND' && <Server className="w-5 h-5" />}
                      {category === 'DATABASES' && <Database className="w-5 h-5" />}
                      {category === 'TOOLS' && <Wrench className="w-5 h-5" />}
                    </div>
                    <span className="category-name">{category}</span>
                  </button>
                ))}
              </div>

              {/* Skills de categoría activa */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="skills-container"
                >
                  <h3 className="text-lg font-bold mb-4">{activeCategory} SKILLS</h3>
                  <div className="space-y-4">
                    {techCategories[activeCategory as keyof typeof techCategories].map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="skill-visualization"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="skill-icon"
                            style={{ backgroundColor: skill.color }}
                          >
                            {skill.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-primary font-mono">{skill.level}%</span>
                            </div>
                            {/* Barra de progreso */}
                            <div className="skill-bar">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: idx * 0.2 }}
                                className="skill-progress"
                                style={{ backgroundColor: skill.color }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Panel derecho - Terminal interactivo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="system-card"
          >
            <div className="card-header">
              <Terminal className="w-5 h-5" />
              <span>TECH_TERMINAL</span>
            </div>

            <div className="terminal-container">
              <div className="terminal-header">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs">tech_commands.sh</span>
              </div>

              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="text-primary">#</span>
                  <span className="text-muted"> Type commands to query tech stack</span>
                </div>
                
                {commandHistory.map((cmd, idx) => (
                  <div key={idx} className="terminal-line">
                    <span className="prompt">$</span>
                    <span>{cmd.replace('$ ', '')}</span>
                  </div>
                ))}

                {/* Comandos predefinidos */}
                <div className="commands-list">
                  {commands.map((cmd, idx) => (
                    <button
                      key={idx}
                      onClick={() => executeCommand(cmd.cmd)}
                      className="command-button"
                    >
                      <span className="prompt">$</span>
                      <span>{cmd.cmd}</span>
                    </button>
                  ))}
                </div>

                {/* Input de comando */}
                <div className="command-input">
                  <span className="prompt">$</span>
                  <input
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && executeCommand(currentCommand)}
                    placeholder="Type a command..."
                    className="flex-1 bg-transparent outline-none"
                  />
                  <button
                    onClick={() => executeCommand(currentCommand)}
                    className="execute-button"
                  >
                    EXECUTE
                  </button>
                </div>
              </div>
            </div>

            {/* Stats rápidas */}
            <div className="quick-stats">
              <div className="stat-box">
                <div className="stat-value">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">95%</div>
                <div className="stat-label">Avg Proficiency</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">3+</div>
                <div className="stat-label">Years Exp</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Matrix de tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tech-matrix"
        >
          <div className="matrix-header">
            <GitBranch className="w-5 h-5" />
            <span>TECHNOLOGY_MATRIX</span>
          </div>
          <div className="matrix-grid">
            {Object.values(techCategories).flat().map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="matrix-cell"
                style={{ 
                  backgroundColor: `${tech.color}20`,
                  borderColor: tech.color,
                  boxShadow: `0 0 20px ${tech.color}40`
                }}
              >
                <div className="matrix-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <div className="matrix-name">{tech.name}</div>
                <div className="matrix-level">{tech.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}