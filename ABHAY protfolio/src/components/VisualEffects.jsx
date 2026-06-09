import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-rose-300 to-emerald-300"
      style={{ scaleX }}
    />
  );
}

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: -120, y: -120 });

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-orb fixed z-[80] h-10 w-10 rounded-full border border-cyan-300/40 mix-blend-screen"
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      />
      <motion.div
        className="cursor-dot fixed z-[81] h-2 w-2 rounded-full bg-cyan-200 shadow-neon"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
    </>
  );
}

export function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 48 }, (_, index) => ({
        id: index,
        left: `${(index * 23) % 100}%`,
        top: `${(index * 41) % 100}%`,
        size: 2 + ((index * 7) % 5),
        delay: (index % 12) * 0.35,
        duration: 7 + (index % 8)
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(34,211,238,0.09),transparent_32%,rgba(251,113,133,0.07)_54%,transparent_76%,rgba(52,211,153,0.08))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-200/70 shadow-neon"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            y: [-18, 18, -18],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.25, 0.8]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function LoadingOverlay({ show }) {
  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto h-16 w-16 rounded-full border border-cyan-300/30 border-t-cyan-200 shadow-neon"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="mt-5 font-display text-sm uppercase tracking-[0.35em] text-cyan-100"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          Loading Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}
