import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'tech', label: 'TECH' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navigation({ activeSection }: { activeSection: string }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e17]/80 backdrop-blur-sm border-b border-[#00ff9d]/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse"></div>
              <span className="font-mono text-sm tracking-widest">EDGAR_MEDRANO</span>
              <span className="text-xs text-[#8b949e]">@PORTFOLIO</span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative px-4 py-2 text-sm font-mono"
                >
                  <span className={`transition-colors ${
                    activeSection === item.id ? 'text-[#00ff9d]' : 'text-[#8b949e]'
                  }`}>
                    {item.label}
                  </span>
                  
                  {(hovered === item.id || activeSection === item.id) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff9d]"
                    />
                  )}
                  
                  {activeSection === item.id && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00ff9d] rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs">
              <span className="text-[#00ff9d]">●</span>
              <span>DEV_MODE</span>
            </div>
            <div className="text-xs font-mono px-3 py-1 border border-[#00ff9d]/30 rounded">
              v2.0
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}