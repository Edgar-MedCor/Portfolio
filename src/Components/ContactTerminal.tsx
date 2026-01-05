import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, Terminal } from 'lucide-react';

export default function ContactTerminal() {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      setMessage('');
      
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'edgarmen159@gmail.com',
      action: 'mailto:edgarmen159@gmail.com',
      color: '#00ff9d',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Edgar-MedCor',
      action: '#',
      color: '#f0f6fc',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/edgar-medrano-07a5a7250/',
      action: '#',
      color: '#0a66c2',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download PDF',
      action: '#',
      color: '#ff6b6b',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold">CONTACT_TERMINAL</h2>
          </div>
          <p className="text-muted">
            Initiate connection • Available for collaborations and opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Panel izquierdo - Métodos de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="system-card">
              <div className="card-header">
                <Send className="w-5 h-5" />
                <span>CONNECTION_METHODS</span>
              </div>
              
              <div className="p-6 space-y-4">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.label}
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="contact-method"
                      style={{ '--method-color': method.color } as React.CSSProperties}
                    >
                      <div className="method-icon">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="method-label">{method.label}</div>
                        <div className="method-value">{method.value}</div>
                      </div>
                      <div className="method-arrow">→</div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Status */}
            <div className="system-card">
              <div className="card-header">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>AVAILABILITY_STATUS</span>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="status-item">
                    <div className="status-dot success" />
                    <span>Currently available for freelance work</span>
                  </div>
                  <div className="status-item">
                    <div className="status-dot success" />
                    <span>Open to full-time opportunities</span>
                  </div>
                  <div className="status-item">
                    <div className="status-dot warning" />
                    <span>Response time: 24-48 hours</span>
                  </div>
                  <div className="status-item">
                    <div className="status-dot success" />
                    <span>Remote work preferred</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Panel derecho - Terminal de mensaje */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="system-card h-full">
              <div className="card-header">
                <Terminal className="w-5 h-5" />
                <span>SEND_MESSAGE</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="terminal-output mb-6">
                  <div className="terminal-line">
                    <span className="prompt">$</span>
                    <span className="command">contact --initiate</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">Initializing secure connection...</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">Connection established ✓</span>
                  </div>
                  <div className="terminal-line">
                    <span className="output">Ready to receive message</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="input-label">Subject</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Project inquiry / Job opportunity / Collaboration"
                      required
                    />
                  </div>

                  <div>
                    <label className="input-label">Your Email</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="user@domain.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="input-label">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input-field h-32 resize-none"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="send-button"
                  >
                    {isSending ? (
                      <>
                        <div className="loading-spinner" />
                        SENDING...
                      </>
                    ) : sent ? (
                      <>
                        ✓ MESSAGE SENT
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SEND_MESSAGE
                      </>
                    )}
                  </motion.button>

                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="success-message"
                    >
                      ✓ Message queued for delivery. I'll respond within 24 hours.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Comando rápido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="quick-command"
        >
          <div className="command-line">
            <span className="prompt">$</span>
            <span className="command">echo "Let's build something amazing together."</span>
            <span className="output">Let's build something amazing together.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}