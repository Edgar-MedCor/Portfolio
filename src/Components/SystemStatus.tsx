import { motion } from 'framer-motion';
import { Cpu, Server, Shield, Zap, Database, Globe } from 'lucide-react';

export default function SystemStatus() {
  const systems = [
    { icon: Cpu, label: 'Frontend Systems', status: 'operational', latency: '12ms' },
    { icon: Server, label: 'Backend Services', status: 'operational', latency: '24ms' },
    { icon: Database, label: 'Database Cluster', status: 'operational', latency: '8ms' },
    { icon: Shield, label: 'Security Layer', status: 'protected', latency: '5ms' },
    { icon: Zap, label: 'API Gateway', status: 'operational', latency: '16ms' },
    { icon: Globe, label: 'CDN Network', status: 'operational', latency: '32ms' },
  ];

  return (
    <div className="system-status">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="status-container"
        >
          <div className="status-header">
            <div className="flex items-center gap-2">
              <div className="pulse-dot" />
              <span className="font-mono">SYSTEM_STATUS</span>
            </div>
            <div className="uptime">UPTIME: 99.9%</div>
          </div>
          
          <div className="systems-grid">
            {systems.map((system, idx) => {
              const Icon = system.icon;
              return (
                <motion.div
                  key={system.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="system-item"
                >
                  <div className="system-icon">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="system-info">
                    <div className="system-label">{system.label}</div>
                    <div className="system-stats">
                      <span className={`status-badge ${system.status}`}>
                        {system.status.toUpperCase()}
                      </span>
                      <span className="latency">{system.latency}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="status-footer">
            <div className="log-line">
              <span className="timestamp">[{new Date().toLocaleTimeString()}]</span>
              <span className="event">All systems operational</span>
              <span className="level info">INFO</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}