import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const glitchText = (text: string) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
        className="inline-block hover:text-[#00ff9d] transition-colors cursor-default"
        whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid dinámico */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0e17_1px,transparent_1px),linear-gradient(180deg,#0a0e17_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.1)_0%,transparent_70%)]"
        />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,157,0.03)_50%)] bg-[size:100%_4px] opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Status indicator */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-[#00ff9d] tracking-widest">
                AVAILABLE FOR WORK
              </span>
            </div>
            <div className="h-4 w-px bg-[#00ff9d]/50"></div>
            <span className="font-mono text-sm text-[#8b949e]">
              SW_ENGINEER • FULL_STACK
            </span>
          </div>

          {/* Nombre con efecto glitch */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
            <span className="block text-[#e1e1e6]">
              {glitchText('EDGAR')}
            </span>
            <span className="block text-[#00ff9d]">
              {glitchText('MEDRANO')}
            </span>
          </h1>

          {/* Typing animation */}
          <div className="h-20 mb-8">
            <TypeAnimation
              sequence={[
                '> Software Engineer',
                2000,
                '> Full Stack Developer',
                2000,
                '> Problem Solver',
                2000,
                '> System Architect',
                2000,
              ]}
              wrapper="div"
              speed={50}
              deletionSpeed={70}
              repeat={Infinity}
              className="font-mono text-xl md:text-2xl text-[#8b949e]"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-2xl mx-auto text-lg text-[#8b949e] leading-relaxed mb-12 font-mono"
          >
            Building robust systems with clean architecture and efficient code.
            Specializing in full-stack development with focus on performance
            and scalability.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-[#00ff9d] text-[#0a0e17] font-mono font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] transition-shadow"
            >
              VIEW PROJECTS
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 border-2 border-[#00ff9d] text-[#00ff9d] font-mono font-bold rounded-lg hover:bg-[#00ff9d]/10 transition-colors"
            >
              INITIATE CONTACT
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}