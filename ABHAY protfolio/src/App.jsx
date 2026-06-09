import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Send,
  Sparkles,
  Sun,
  Trophy,
  X
} from "lucide-react";
import { AnimatedCursor, LoadingOverlay, ParticleField, ScrollProgress } from "./components/VisualEffects.jsx";
import { Reveal, SectionHeader } from "./components/section.jsx";
import {
  aboutStats,
  achievements,
  aiProjects,
  analyticsProjects,
  certifications,
  education,
  experience,
  machineLearningProjects,
  navLinks,
  profile,
  repositoryShowcase,
  skillGroups,
  streamlitApps
} from "./data/portfolio.js";

const accentStyles = {
  cyan: "from-cyan-400 to-cyan-200 text-cyan-300 shadow-cyan-500/25",
  emerald: "from-emerald-400 to-cyan-200 text-emerald-300 shadow-emerald-500/25",
  violet: "from-violet-400 to-fuchsia-200 text-violet-300 shadow-violet-500/25",
  rose: "from-rose-400 to-orange-200 text-rose-300 shadow-rose-500/25",
  amber: "from-amber-300 to-emerald-200 text-amber-300 shadow-amber-500/25"
};

const projectFilters = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "ai", label: "AI", icon: Bot },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "ml", label: "ML", icon: BrainCircuit },
  { id: "streamlit", label: "Streamlit", icon: Code2 }
];

const sectionMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("all");
  const [projectQuery, setProjectQuery] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored || (preferredDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("light-mode", !isDark);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const projectSections = useMemo(
    () => [
      {
        id: "ai",
        eyebrow: "AI Projects",
        title: "Generative AI and Applied Intelligence",
        description:
          "Premium AI project cards with space for screenshots, architecture previews, and production links.",
        projects: aiProjects,
        Card: AIProjectCard
      },
      {
        id: "analytics",
        eyebrow: "Data Analytics",
        title: "Dashboards and Business Intelligence",
        description:
          "Professional analytics work covering dashboards, datasets, insights, and reporting workflows.",
        projects: analyticsProjects,
        Card: AnalyticsProjectCard
      },
      {
        id: "ml",
        eyebrow: "Machine Learning",
        title: "Predictive Modeling and ML Systems",
        description:
          "Model-focused case studies with scores, algorithms, datasets, problem statements, and outcomes.",
        projects: machineLearningProjects,
        Card: MLProjectCard
      },
      {
        id: "streamlit",
        eyebrow: "Streamlit Apps",
        title: "Live Data Products",
        description:
          "Deployed Streamlit application placeholders with direct live app and repository actions.",
        projects: streamlitApps,
        Card: StreamlitProjectCard
      }
    ],
    []
  );

  const query = projectQuery.trim().toLowerCase();
  const filteredProjectSections = projectSections
    .filter((section) => projectFilter === "all" || section.id === projectFilter)
    .map((section) => ({
      ...section,
      projects: section.projects.filter((project) =>
        JSON.stringify(project).toLowerCase().includes(query)
      )
    }));

  const totalVisibleProjects = filteredProjectSections.reduce(
    (total, section) => total + section.projects.length,
    0
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-ink dark:text-slate-100">
      <AnimatePresence>{loading ? <LoadingOverlay show={loading} /> : null}</AnimatePresence>
      <ScrollProgress />
      <ParticleField />
      <AnimatedCursor />
      <SiteHeader
        theme={theme}
        setTheme={setTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
          projectQuery={projectQuery}
          setProjectQuery={setProjectQuery}
          filteredProjectSections={filteredProjectSections}
          totalVisibleProjects={totalVisibleProjects}
        />
        <Certifications />
        <Education />
        <Experience />
        <Achievements />
        <GithubStats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function SiteHeader({ theme, setTheme, menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="container-wide glass-panel flex h-16 items-center justify-between rounded-lg px-4">
        <a href="#home" className="font-display text-lg font-bold tracking-wide text-slate-950 dark:text-white">
          ABHAY<span className="text-cyan-500 dark:text-cyan-300">.AI</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/60 bg-white/65 text-slate-800 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:text-cyan-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/60 bg-white/65 text-slate-800 lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="container-wide glass-panel mt-3 rounded-lg p-3 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section-pad flex min-h-screen items-center pt-32">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-neon dark:text-cyan-200">
            <Sparkles size={16} />
            AI and Data Science Professional
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-cyan-700 dark:text-cyan-200 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={profile.resumeUrl} variant="primary" icon={Download}>
              Resume Download
            </ButtonLink>
            <ButtonLink href={profile.linkedinUrl} icon={Linkedin}>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.githubUrl} icon={Github}>
              GitHub
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
        >
          <div className="glass-panel neon-border relative aspect-[4/5] overflow-hidden rounded-lg p-3">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('Picsart_26-03-13_00-27-42-721.png')` }} />
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
              {["AI", "ML", "BI"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/15 bg-slate-950/45 px-3 py-2 text-center text-xs font-bold text-white backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="About Me"
          title="Data storytelling meets intelligent systems"
          description="A concise professional overview for an AI and data science portfolio, ready for your exact career details."
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="glass-panel rounded-lg p-6 sm:p-8">
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                I am an AI and Data Science professional focused on transforming complex datasets into
                clear decisions, automated workflows, and intelligent products. My work spans business
                intelligence dashboards, predictive machine learning systems, and generative AI solutions
                built for practical adoption.
              </p>
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Career summary placeholder: add your experience, internships, industry exposure,
                achievements, domain expertise, and measurable outcomes here. Keep this section specific
                to the problems you solve and the value you create.
              </p>
              <div className="mt-8 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-5">
                <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                  Mission Statement
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  To build responsible, high-impact data and AI systems that make analytics faster,
                  decisions sharper, and technology more useful for people and organizations.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
                  <div className={`mb-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${stat.accent}`} />
                  <p className="font-display text-3xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Skills"
          title="Technical stack with measurable depth"
          description="Animated skill cards grouped by the tools, platforms, and AI capabilities expected from a modern data professional."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.04}>
              <article className="glass-panel h-full rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-neon">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                    {group.category}
                  </h3>
                  <span
                    className={`h-10 w-10 rounded-lg bg-gradient-to-br ${accentStyles[group.accent]} shadow-lg`}
                  />
                </div>
                <div className="space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                        <span className={accentStyles[group.accent].split(" ").find((item) => item.startsWith("text-"))}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-slate-300/60 dark:bg-white/10">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${accentStyles[group.accent]}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({
  projectFilter,
  setProjectFilter,
  projectQuery,
  setProjectQuery,
  filteredProjectSections,
  totalVisibleProjects
}) {
  return (
    <section id="projects" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Projects"
          title="Searchable project portfolio"
          description="Filter by project type or search across titles, technologies, datasets, features, algorithms, and results."
        />

        <Reveal>
          <div className="glass-panel mb-12 rounded-lg p-4">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  value={projectQuery}
                  onChange={(event) => setProjectQuery(event.target.value)}
                  className="h-12 w-full rounded-lg border border-slate-300/70 bg-white/70 pl-11 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/20 dark:border-white/10 dark:bg-slate-950/50 dark:text-white"
                  placeholder="Search projects, tools, datasets, algorithms..."
                />
              </label>
              <div className="flex flex-wrap gap-2">
                {projectFilters.map((filter) => {
                  const Icon = filter.icon;
                  const active = projectFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setProjectFilter(filter.id)}
                      className={`inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-bold transition ${
                        active
                          ? "bg-slate-950 text-white shadow-neon dark:bg-white dark:text-slate-950"
                          : "border border-slate-300/70 bg-white/60 text-slate-700 hover:border-cyan-400 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                      }`}
                    >
                      <Icon size={16} />
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Filter size={16} />
              <span>{totalVisibleProjects} matching project placeholders</span>
            </div>
          </div>
        </Reveal>

        {totalVisibleProjects === 0 ? (
          <div className="glass-panel rounded-lg p-8 text-center text-slate-600 dark:text-slate-300">
            No projects match the current search.
          </div>
        ) : (
          <div className="space-y-20">
            {filteredProjectSections.map((section) =>
              section.projects.length ? <ProjectSection key={section.id} section={section} /> : null
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectSection({ section }) {
  const Card = section.Card;

  return (
    <div>
      <SectionHeader
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
        align="left"
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {section.projects.map((project, index) => (
          <Card key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

function AIProjectCard({ project, index }) {
  return (
    <ProjectCardBase index={index}>
      <PlaceholderVisual />
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
        <TagList items={project.technologies} />
        <ul className="mt-5 space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-500" size={16} />
              {feature}
            </li>
          ))}
        </ul>
        <ProjectActions githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      </div>
    </ProjectCardBase>
  );
}

function AnalyticsProjectCard({ project, index }) {
  return (
    <ProjectCardBase index={index}>
      <PlaceholderVisual icon={BarChart3} />
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="mt-5 rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
            Dataset Information
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.dataset}</p>
        </div>
        <TagList items={project.tools} label="Tools Used" />
        <ProjectActions githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      </div>
    </ProjectCardBase>
  );
}

function MLProjectCard({ project, index }) {
  return (
    <ProjectCardBase index={index}>
      <div className="relative">
        <PlaceholderVisual icon={BrainCircuit} />
        <span className="absolute right-4 top-4 rounded-full bg-cyan-300 px-3 py-1 text-sm font-black text-slate-950 shadow-neon">
          {project.accuracy}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        <InfoBlock label="Problem Statement" text={project.problem} />
        <InfoBlock label="Dataset Details" text={project.dataset} />
        <InfoBlock label="Results" text={project.results} />
        <TagList items={project.algorithms} label="Algorithms Used" />
        <ProjectActions githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      </div>
    </ProjectCardBase>
  );
}

function StreamlitProjectCard({ project, index }) {
  return (
    <ProjectCardBase index={index}>
      <PlaceholderVisual icon={Code2} />
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ButtonLink href={project.streamlitUrl} icon={ExternalLink} compact>
            Streamlit Live
          </ButtonLink>
          <ButtonLink href={project.githubUrl} icon={Github} compact>
            Repository
          </ButtonLink>
        </div>
      </div>
    </ProjectCardBase>
  );
}

function ProjectCardBase({ children, index }) {
  return (
    <motion.article
      className="glass-panel neon-border h-full overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:shadow-violet"
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.58, delay: index * 0.04, ease: "easeOut" }}
    >
      {children}
    </motion.article>
  );
}

function PlaceholderVisual({ icon: Icon = Database }) {
  return (
    <div className="blank-placeholder relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <Icon className="text-slate-400/55 dark:text-white/35" size={48} strokeWidth={1.4} />
    </div>
  );
}

function TagList({ items, label }) {
  return (
    <div className="mt-5">
      {label ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          {label}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoBlock({ label, text }) {
  return (
    <div className="mt-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">{label}</p>
      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

function ProjectActions({ githubUrl, demoUrl }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      <ButtonLink href={githubUrl} icon={Github} compact>
        GitHub
      </ButtonLink>
      <ButtonLink href={demoUrl} icon={ExternalLink} compact>
        Live Demo
      </ButtonLink>
    </div>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Certifications"
          title="Credentials and continuous learning"
          description="A polished certification grid designed for credential links, issue dates, and issuing organizations."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {certifications.map((certification, index) => (
            <Reveal key={certification.name} delay={index * 0.03}>
              <article className="glass-panel h-full rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
                <FileText className="mb-5 text-cyan-500 dark:text-cyan-300" size={28} />
                <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">
                  {certification.name}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{certification.organization}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                  {certification.date}
                </p>
                <a
                  href={certification.link}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300"
                >
                  Credential Link <ArrowUpRight size={15} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation"
          description="An elegant vertical timeline for degrees, institutions, scores, duration, and key subjects."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-emerald-300 sm:left-1/2" />
          <div className="space-y-8">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 0.08}>
                <article className={`relative pl-12 sm:w-1/2 ${index % 2 ? "sm:ml-auto sm:pl-10" : "sm:pr-10"}`}>
                  <span className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full bg-cyan-300 text-slate-950 shadow-neon sm:-left-4">
                    <GraduationCap size={17} />
                  </span>
                  <div className="glass-panel rounded-lg p-6">
                    <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{item.degree}</h3>
                    <p className="mt-2 font-semibold text-cyan-700 dark:text-cyan-300">{item.institution}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.duration}</p>
                    <p className="mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-300">{item.score}</p>
                    <TagList items={item.subjects} label="Key Subjects" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Experience"
          title="Professional impact"
          description="Editable experience cards for companies, roles, responsibilities, duration, and technology stacks."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.position}`} delay={index * 0.08}>
              <article className="glass-panel h-full rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-300 to-emerald-300 text-slate-950 shadow-neon">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">{item.position}</h3>
                    <p className="mt-1 font-semibold text-cyan-700 dark:text-cyan-300">{item.company}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.duration}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-1 shrink-0 text-emerald-500" size={16} />
                      {responsibility}
                    </li>
                  ))}
                </ul>
                <TagList items={item.technologies} label="Technologies Used" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Achievements"
          title="Momentum in numbers"
          description="Animated counters for portfolio proof points and public development activity."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.label} delay={index * 0.05}>
              <div className="glass-panel rounded-lg p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-neon">
                <Trophy className="mx-auto mb-5 text-amber-500 dark:text-amber-300" size={34} />
                <p className="font-display text-4xl font-bold text-slate-950 dark:text-white">
                  <CountUp value={achievement.value} suffix={achievement.suffix} />
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{achievement.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubStats() {
  return (
    <section id="github" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="GitHub Stats"
          title="Open-source activity snapshot"
          description="Static placeholders structured for a contribution graph, GitHub stats, language usage, and repository showcase."
        />
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="glass-panel rounded-lg p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                  GitHub Contribution Graph
                </h3>
                <Github className="text-cyan-500 dark:text-cyan-300" size={24} />
              </div>
              <ContributionGraph />
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <div className="glass-panel rounded-lg p-6">
                <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">GitHub Stats Card</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    ["Repositories", "32+"],
                    ["Stars", "150+"],
                    ["Commits", "1.2k+"],
                    ["Pull Requests", "80+"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-white/10 bg-white/40 p-4 dark:bg-white/5">
                      <p className="font-display text-2xl font-bold text-slate-950 dark:text-white">{value}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-panel rounded-lg p-6">
                <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">Most Used Languages</h3>
                <div className="mt-5 space-y-3">
                  {[
                    ["Python", 46, "bg-cyan-300"],
                    ["SQL", 24, "bg-emerald-300"],
                    ["JavaScript", 18, "bg-amber-300"],
                    ["Jupyter", 12, "bg-rose-300"]
                  ].map(([language, value, color]) => (
                    <div key={language}>
                      <div className="mb-1 flex justify-between text-sm font-semibold text-slate-600 dark:text-slate-300">
                        <span>{language}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-300/70 dark:bg-white/10">
                        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {repositoryShowcase.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.05}>
              <article className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
                <Github className="mb-4 text-cyan-500 dark:text-cyan-300" size={24} />
                <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{repo.name}</h3>
                <p className="mt-2 min-h-14 text-sm leading-6 text-slate-600 dark:text-slate-300">{repo.description}</p>
                <span className="mt-4 inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {repo.language}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Contact"
          title="Let us build something intelligent"
          description="A clean contact section with editable placeholders for direct outreach and social links."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-panel rounded-lg p-6">
              <div className="space-y-4">
                <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <ContactRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
                <ContactRow icon={MapPin} label="Location" value={profile.location} />
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <ButtonLink href={profile.linkedinUrl} icon={Linkedin}>
                  LinkedIn
                </ButtonLink>
                <ButtonLink href={profile.githubUrl} icon={Github}>
                  GitHub
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="glass-panel rounded-lg p-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Name" name="name" placeholder="Your name" />
                <FormField label="Email" name="email" type="email" placeholder="Your Email" />
              </div>
              <FormField label="Subject" name="subject" placeholder="Project inquiry" />
              <FormField label="Message" name="message" placeholder="Tell me about your project" textarea />
              <button
                type="submit"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200 px-6 text-sm font-black text-slate-950 shadow-neon transition hover:-translate-y-0.5 sm:w-auto"
              >
                Send Message <Send size={17} />
              </button>
              {sent ? (
                <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                  Message placeholder submitted. Connect this form to your preferred backend.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-300/40 bg-white/60 px-4 py-10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="container-wide grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <p className="font-display text-xl font-bold text-slate-950 dark:text-white">{profile.name}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Copyright {new Date().getFullYear()} - All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-3 md:justify-center">
          <IconLink href={profile.linkedinUrl} icon={Linkedin} label="LinkedIn" />
          <IconLink href={profile.githubUrl} icon={Github} label="GitHub" />
          <IconLink href={`mailto:${profile.email}`} icon={Mail} label="Email" />
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-slate-950 shadow-neon"
            aria-label="Back to top"
          >
            <ArrowUpRight size={18} className="-rotate-45" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/40 p-4 transition hover:border-cyan-300/50 dark:bg-white/5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyan-300/15 text-cyan-600 dark:text-cyan-300">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{label}</p>
        <p className="mt-1 font-semibold text-slate-800 dark:text-slate-100">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function FormField({ label, name, type = "text", placeholder, textarea = false }) {
  const shared =
    "mt-2 w-full rounded-lg border border-slate-300/70 bg-white/75 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/20 dark:border-white/10 dark:bg-slate-950/50 dark:text-white";

  return (
    <label className="mt-4 block text-sm font-bold text-slate-700 dark:text-slate-200">
      {label}
      {textarea ? (
        <textarea name={name} rows={5} placeholder={placeholder} className={`${shared} resize-none`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={shared} />
      )}
    </label>
  );
}

function ButtonLink({ href, icon: Icon, children, variant = "secondary", compact = false }) {
  const primary =
    "bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200 text-slate-950 shadow-neon";
  const secondary =
    "border border-slate-300/70 bg-white/70 text-slate-800 hover:border-cyan-400 dark:border-white/10 dark:bg-white/10 dark:text-slate-100";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-sm font-black transition hover:-translate-y-0.5 ${
        compact ? "min-h-11 px-4" : "min-h-12 px-5"
      } ${variant === "primary" ? primary : secondary}`}
    >
      <Icon size={17} />
      {children}
    </a>
  );
}

function IconLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
}

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let frameId;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function ContributionGraph() {
  const cells = Array.from({ length: 98 }, (_, index) => {
    const level = (index * 17 + index * index) % 5;
    return level;
  });
  const colors = [
    "rgba(148, 163, 184, 0.16)",
    "rgba(34, 211, 238, 0.28)",
    "rgba(52, 211, 153, 0.36)",
    "rgba(251, 191, 36, 0.46)",
    "rgba(251, 113, 133, 0.58)"
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/35 p-4 dark:bg-slate-950/45">
      <div className="grid grid-flow-col grid-rows-7 gap-1">
        {cells.map((level, index) => (
          <motion.span
            key={`${level}-${index}`}
            className="aspect-square rounded-[3px]"
            style={{ backgroundColor: colors[level] }}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, delay: index * 0.006 }}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Less</span>
        <div className="flex gap-1">
          {colors.map((color) => (
            <span key={color} className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: color }} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}

export default App;
