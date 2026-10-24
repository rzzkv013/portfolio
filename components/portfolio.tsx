"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Menu,
  MoveUpRight,
  Send,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedCursor from "@/components/animated-cursor";
import ParticleField from "@/components/particle-field";
import Scene from "@/components/scene";

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Material UI",
  "Ant Design",
  "JavaScript",
  "Git",
  "HTML5",
  "CSS3",
];

const projects = [
  {
    number: "01",
    name: "Ustabozor",
    type: "Xizmatlar bozori · Veb-ilova",
    description:
      "Mijozlarni ishonchli mahalliy mutaxassislar bilan bog‘laydigan xizmatlar bozori. Kerakli yordamni topish jarayonini qulaylashtirish uchun yaratilgan.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "Xizmatlar bozori",
  },
  {
    number: "02",
    name: "Moshina",
    type: "Avtomobillar · Veb-ilova",
    description:
      "Avtomobillarni qulay ko‘rish, saralash va ular haqidagi batafsil ma’lumotlarga oson o‘tish imkonini beruvchi platforma.",
    tags: ["Next.js", "React", "JavaScript"],
    category: "Avtomobillar",
  },
  {
    number: "03",
    name: "Oltin Don",
    type: "Savdo · Brend sahifasi",
    description:
      "O‘ziga xos brend uslubi va qulay xarid jarayonini uyg‘unlashtirgan oziq-ovqat mahsulotlari uchun raqamli do‘kon.",
    tags: ["React", "Material UI", "CSS3"],
    category: "Savdo",
  },
  {
    number: "04",
    name: "Food By Me",
    type: "Taomlar · Veb-sahifa",
    description:
      "Menyu va sevimli taomlarni foydalanish oson, jozibali interfeysda birlashtirgan taomlar sahifasi.",
    tags: ["React", "Ant Design", "JavaScript"],
    category: "Taomlar",
  },
  {
    number: "05",
    name: "Zeus",
    type: "Mahsulot · Veb-platforma",
    description:
      "Aniq vizual tartib, moslashuvchan sahifalar va tezkor ishlashga asoslangan mahsulot platformasi.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Mahsulot",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    detail: "rzzkv013",
    href: "https://github.com/rzzkv013",
    icon: Github,
  },
  {
    label: "Telegram",
    detail: "@rzzkv_i7",
    href: "https://t.me/rzzkv_i7",
    icon: Send,
  },
  {
    label: "LinkedIn",
    detail: "Profilni qidirish",
    href: "https://www.linkedin.com/search/results/people/?keywords=Javohir%20Abdurazzoqov",
    icon: Linkedin,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell">
      <AnimatedCursor />
      <ParticleField />
      <div className="site-noise" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Javohir Abdurazzoqov — bosh sahifa">
          <span className="wordmark-mark">j.</span>
          <span className="wordmark-name">JAVOHIR<span>AB.</span></span>
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Asosiy menyu">
          <a href="#about" onClick={closeMenu}>Men haqimda</a>
          <a href="#stack" onClick={closeMenu}>Texnologiyalar</a>
          <a href="#projects" onClick={closeMenu}>Loyihalar</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Bog‘lanish <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-grid-lines" aria-hidden="true" />
        <Scene />
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
        >
          <motion.div className="eyebrow" variants={itemVariants}>
            <span className="eyebrow-line" />
            FRONTEND DASTURCHI <span className="eyebrow-dot">/</span> TOSHKENT, O‘ZBEKISTON
          </motion.div>
          <motion.h1 variants={itemVariants}>
            Raqamli
            <br />
            <span className="hero-title-muted">olamni</span> quraman<span className="hero-period">.</span>
          </motion.h1>
          <motion.p className="hero-intro" variants={itemVariants}>
            Men — <strong>Javohir Abdurazzoqov</strong>, puxta kod va qiziquvchanlik bilan qulay
            raqamli tajribalar yaratuvchi frontend React dasturchiman.
          </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <a className="button button-primary" href="#projects">
              Loyihalarimni ko‘rish <ArrowDownRight size={16} />
            </a>
            <a className="text-link" href="#about">
              Men haqimda <ArrowDown size={14} />
            </a>
          </motion.div>
          <motion.div className="hero-index mono" variants={itemVariants}>
            <span>01 — 05</span>
            <span>KO‘RISH UCHUN PASTGA O‘TING</span>
          </motion.div>
        </motion.div>
        <div className="hero-side-note mono" aria-hidden="true">PUXTA YARATILGAN INTERFEYSLAR</div>
      </section>

      <section id="about" className="about-section section-wrap section-spacing">
        <div className="section-heading">
          <p className="section-kicker mono">01 / MEN HAQIMDA</p>
          <h2>O‘zim <span>haqimda.</span></h2>
        </div>
        <div className="about-grid">
          <motion.div
            className="about-card glass-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-card-top">
              <div className="avatar-mark">JA<span>.</span></div>
              <div>
                <p className="about-name">Javohir Abdurazzoqov</p>
                <p className="about-role mono">FRONTEND REACT DASTURCHI</p>
              </div>
              <span className="availability"><i /> ISH VA LOYIHALAR UCHUN OCHIQ</span>
            </div>
            <div className="about-copy">
              <span className="quote-mark">&ldquo;</span>
              <p>
                G‘oyalarni sodda va puxta veb-tajribalarga aylantiraman. Har bir mayda jihatga —
                qulay harakatlar, tushunarli sahifalar va foydalanuvchiga mos yechimlarga e’tibor beraman.
              </p>
              <p>
                React texnologiyalari yordamida foydali, puxta va ishlatish yoqimli mahsulotlar
                yaratish uchun yaxshi jamoalar bilan ishlashni yoqtiraman.
              </p>
            </div>
            <div className="social-links">
              {socialLinks.map(({ label, detail, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label}: ${detail}`}
                  className="social-link"
                >
                  <Icon size={15} />
                  <span>{label}</span>
                  <ArrowUpRight size={12} className="social-arrow" />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.aside
            className="about-aside"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aside-topline mono"><Code2 size={14} /> QISQACHA MEN HAQIMDA</div>
            <p className="aside-quote">
              Yaxshi dizayn e’tiboringizni tortadi. <span>Yaxshi kod esa ishonchingizni qozonadi.</span>
            </p>
            <div className="aside-divider" />
            <div className="stat-row">
              <span className="stat-number">05<span>+</span></span>
              <span className="stat-label">E’tibor bilan<br />yaratilgan loyihalar</span>
            </div>
            <div className="stat-row">
              <span className="stat-number">10<span>+</span></span>
              <span className="stat-label">Har kuni ishlatadigan<br />texnologiyalar</span>
            </div>
            <a className="aside-link mono" href="#contact">YANGI LOYIHALAR UCHUN OCHIQ <ArrowUpRight size={14} /></a>
          </motion.aside>
        </div>
      </section>

      <section id="stack" className="stack-section section-wrap section-spacing">
        <div className="section-heading">
          <p className="section-kicker mono">02 / TEXNOLOGIYALAR</p>
          <h2>Ish qurollarim <span>bilan tanishing.</span></h2>
          <p className="section-description">
            Samarali va foydalanish yoqimli mahsulotlar yaratishda foydalanadigan texnologiyalarim.
          </p>
        </div>
        <div className="stack-stage">
          <div className="stage-grid" aria-hidden="true" />
          <div className="stage-orbit orbit-one" aria-hidden="true" />
          <div className="stage-orbit orbit-two" aria-hidden="true" />
          <div className="stage-center">
            <div className="stage-center-icon"><Layers3 size={21} strokeWidth={1.3} /></div>
            <span className="stage-center-title">TEXNOLOGIYALAR</span>
            <span className="stage-center-subtitle mono">YARATISH UCHUN</span>
          </div>
          {technologies.map((technology, index) => (
            <motion.div
              key={technology}
              className={`tech-chip chip-${index + 1}`}
              animate={{ y: [0, index % 2 ? -8 : 7, 0] }}
              transition={{
                duration: 4.5 + (index % 4) * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.17,
              }}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <span className="chip-indicator" />
              {technology}
            </motion.div>
          ))}
          <div className="stage-corner stage-corner-left mono">REACT EKOTIZIMI</div>
          <div className="stage-corner stage-corner-right mono">DOIM O‘RGANISHDA ↗</div>
        </div>
      </section>

      <section id="projects" className="projects-section section-wrap section-spacing">
        <div className="projects-heading-row">
          <div className="section-heading">
            <p className="section-kicker mono">03 / TANLANGAN ISHLAR</p>
              <h2>E’tibor bilan <span>yaratilgan.</span></h2>
          </div>
          <span className="project-count mono">05 TA LOYIHA</span>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.button
              key={project.name}
              type="button"
              className={`project-card project-card-${index + 1}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
              whileHover={{ y: -5 }}
              aria-label={`${project.name} loyihasi tafsilotlarini ko‘rish`}
            >
              <div className="project-visual">
                <div className="project-visual-grid" />
                <ProjectVisual index={index} />
                <span className="project-number mono">{project.number} / 05</span>
                <span className="project-open"><ArrowUpRight size={16} /></span>
                <div className="project-preview-label mono">LOYIHA KO‘RINISHI</div>
              </div>
              <div className="project-card-info">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>
                <ArrowUpRight size={17} className="project-info-arrow" />
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.button>
          ))}
        </div>
        <p className="projects-note mono"><span>*</span> DEMO VA MANBA KODI HAVOLALARI SO‘ROV BO‘YICHA TAQDIM ETILADI.</p>
      </section>

      <section id="contact" className="contact-section section-wrap section-spacing">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-content">
            <p className="section-kicker mono">04 / BOG‘LANISH</p>
            <h2>Yaxshi bir<br /><span>g‘oyangiz bormi?</span></h2>
            <p className="contact-copy">
              Loyihangiz bormi yoki shunchaki salomlashmoqchimisiz? Menga yozing.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href="https://t.me/rzzkv_i7"
                target="_blank"
                rel="noreferrer"
              >
                Telegramda yozish <ArrowUpRight size={16} />
              </a>
              <a className="contact-telegram" href="https://github.com/rzzkv013" target="_blank" rel="noreferrer">
                GitHub profilimga o‘tish <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="contact-orbit" aria-hidden="true">
            <div className="contact-orbit-ring" />
            <div className="contact-orbit-core">JA<span>.</span></div>
            <div className="contact-orbit-satellite" />
          </div>
          <div className="contact-bottom mono">
            <span>MA’NOLI LOYIHA YARATAMIZ</span>
            <MoveUpRight size={15} />
          </div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">j.</span>
          <span className="wordmark-name">JAVOHIR<span>AB.</span></span>
        </a>
        <p className="footer-note mono">PUXTA DIZAYN. REACT BILAN YARATILDI.</p>
        <a className="back-to-top mono" href="#home">YUQORIGA QAYTISH <ArrowRight size={13} /></a>
        <span className="footer-year mono">© JAVOHIR</span>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <div className="modal-topbar mono">
                <span>LOYIHA / {selectedProject.number}</span>
                <button type="button" aria-label="Loyiha tafsilotlarini yopish" onClick={() => setSelectedProject(null)}>
                  <X size={17} />
                </button>
              </div>
              <div className={`modal-visual project-visual project-card-${projects.indexOf(selectedProject) + 1}`}>
                <div className="project-visual-grid" />
                <ProjectVisual index={projects.indexOf(selectedProject)} />
              </div>
              <div className="modal-content">
                <p className="section-kicker mono">{selectedProject.category} <span>/</span> {selectedProject.type}</p>
                <h2 id="project-modal-title">{selectedProject.name}</h2>
                <p>{selectedProject.description}</p>
                <div className="project-tags modal-tags">
                  {selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="modal-actions">
                  <a href="https://t.me/rzzkv_i7" target="_blank" rel="noreferrer">
                      Demo haqida so‘rash <ExternalLink size={14} />
                  </a>
                  <a href={`https://github.com/search?q=user%3Arzzkv013+${encodeURIComponent(selectedProject.name)}&type=repositories`} target="_blank" rel="noreferrer">
                    GitHubda manbani qidirish <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function ProjectVisual({ index }: { index: number }) {
  const wordmarks = ["USTABOZOR", "MOSHINA", "OLTIN DON", "FOOD BY ME", "ZEUS"];
  const subtitles = [
    "O‘Z ODAMLARINGIZNI TOPING",
    "O‘Z YO‘LINGIZNI TANLANG",
    "MEHR BILAN YETISHTIRILGAN",
    "MAZALI TAOM, A’LO KAYFIYAT",
    "G‘OYANI AMALGA OSHIRING",
  ];

  return (
    <div className={`project-mockup mockup-${index + 1}`} aria-hidden="true">
      <div className="mockup-browser">
        <div className="mockup-browser-bar">
          <span /><span /><span />
          <div className="mockup-address" />
          <div className="mockup-menu-lines"><i /><i /></div>
        </div>
        <div className="mockup-content">
          <div className="mockup-copy">
            <span className="mockup-overline mono">YAXSHIROG‘INI KASHF ETING</span>
            <span className="mockup-title">{wordmarks[index]}</span>
            <span className="mockup-subtitle">{subtitles[index]}</span>
            <div className="mockup-cta" />
          </div>
          <div className="mockup-art">
            <div className="mockup-art-shape shape-one" />
            <div className="mockup-art-shape shape-two" />
            <div className="mockup-art-shape shape-three" />
            <div className="mockup-art-label mono">JA. / 00{index + 1}</div>
          </div>
        </div>
        <div className="mockup-foot">
          <span>{wordmarks[index]}</span>
          <span>KO‘RISH UCHUN PASTGA ↓</span>
          <span>PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}
