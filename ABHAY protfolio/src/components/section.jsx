import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      className={`mx-auto mb-12 max-w-3xl ${align === "left" ? "text-left" : "text-center"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-300">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
