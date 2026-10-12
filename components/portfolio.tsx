"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { ReactNode } from "react";

const navigation = [
    ["Work", "#work"],
    ["Stack", "#stack"],
    ["Journey", "#journey"],
    ["Contact", "#contact"],
] as const;

const stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "VS Code",
    "Git",
    "GitHub",
    "UI / UX",
    "Creative design",
];

const hackathons = [
    "Odoo",
    "Smart India Hackathon 2025",
    "Smart India Hackathon 2026",
    "ISRO",
    "IIM Indore",
];

const projects = [
    {
        number: "01",
        eyebrow: "PWA · PRODUCTIVITY",
        title: "Habit Tracker",
        description:
            "A progressive web app for tracking daily habits and uncovering consistency through streak-based analysis.",
        tags: ["PWA", "Daily habits", "Streak analysis"],
        theme: "habit",
        sticker: "BUILT WITH ♥",
    },
    {
        number: "02",
        eyebrow: "BRAND DESIGN · VISUAL STORYTELLING",
        title: "Sparsh Divine Art Studio",
        description:
            "Mascot designs for a handcrafted studio brand, a logo animation video, and Instagram post graphics.",
        tags: ["Mascot design", "Logo animation", "Social graphics"],
        theme: "sparsh",
        sticker: "MADE BY HAND",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: ReactNode }) {
    return <p className="section-label">{children}</p>;
}

function TopNavigation() {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="site-nav">
                <Link aria-label="Dhyey Trivedi home" className="monogram" href="#top">
                    D<span>.</span>
                </Link>

                <button
                    aria-controls="primary-navigation"
                    aria-expanded={open}
                    aria-label={open ? "Close navigation" : "Open navigation"}
                    className={`menu-toggle ${open ? "is-open" : ""}`}
                    onClick={() => setOpen((value) => !value)}
                    type="button"
                >
                    <span />
                    <span />
                </button>

                <nav
                    aria-label="Main navigation"
                    className={`navigation-panel ${open ? "is-open" : ""}`}
                    id="primary-navigation"
                >
                    {navigation.map(([label, href]) => (
                        <Link href={href} key={href} onClick={() => setOpen(false)}>
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[number];
    index: number;
}) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            className={`project-card ${project.theme}`}
            layout
            initial="hidden"
            whileInView="visible"
            whileHover={reduceMotion ? undefined : { y: -7, x: -3 }}
            whileTap={reduceMotion ? undefined : { y: 3, x: 3, boxShadow: "2px 2px 0 #101010" }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.42, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
        >
            <span className="project-sticker">{project.sticker}</span>
            <p className="project-number">{project.number} / 03</p>
            <div className="project-copy">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
            </div>
            <div className={`project-art ${project.theme}`} aria-hidden="true">
                {project.theme === "habit" ? (
                    <div className="habit-ui">
                        <div className="habit-ui-top"><b>HABIT CHECK-IN</b><span>✳ 12 DAY STREAK</span></div>
                        {["Move your body", "Read something", "Make something"].map((item, i) => (
                            <div className="habit-ui-row" key={item}>
                                <span>{item}</span><b>{i < 2 ? "✓" : "+"}</b>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="sparsh-art">
                        <div className="sparsh-logo">SPARSH<span>✳</span></div>
                        <b>DIVINE<br />ART STUDIO</b>
                        <small>MADE WITH A HUMAN TOUCH</small>
                    </div>
                )}
            </div>
            <div className="tag-list">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
            <a className="text-link" href="#contact">Let&apos;s talk about it <span>↗</span></a>
        </motion.article>
    );
}

function Marquee() {
    return (
        <div aria-label="Frontend developer, UI/UX designer, member of AiRA Lab, design with purpose" className="marquee">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                aria-hidden="true"
                className="marquee-track"
                transition={{ duration: 24, ease: "linear", repeat: Infinity }}
            >
                {[0, 1].map((copy) => (
                    <span key={copy}>
                        FRONTEND DEVELOPER <i>✳</i> UI/UX DESIGNER <i>✳</i> MEMBER OF AiRA LAB <i>✳</i> DESIGN WITH PURPOSE <i>✳</i>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

export default function Portfolio() {
    const reduceMotion = useReducedMotion();

    return (
        <MotionConfig reducedMotion="user">
        <>
            <TopNavigation />
            <main id="top">
                <section aria-labelledby="hero-heading" className="hero-section">
                    <div className="hero-shell">
                        <motion.div
                            className="hero-copy neo-card neo-outline neo-shadow"
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.62, ease: "easeOut" }}
                            variants={fadeUp}
                        >
                            <p className="eyebrow"><span className="live-dot" /> FRONTEND DEVELOPER · CREATIVE DESIGNER</p>
                            <h1 id="hero-heading">Design it.<br />Build it.<br /><span>Make it matter.</span></h1>
                            <p className="hero-description">
                                I&apos;m Dhyey Trivedi — a frontend developer with a passion for UI/UX
                                and creative design. I turn ideas into expressive digital experiences.
                            </p>
                            <div className="hero-actions">
                                <Link className="button button-dark" href="#work">Explore my work <span>↘</span></Link>
                                <Link className="button button-light" href="#contact">Say hello <span>↗</span></Link>
                            </div>
                            <div className="hero-facts">
                                <div><small>MY WORLD</small><b>Frontend · UI/UX · Design</b></div>
                                <div><small>BASED IN</small><b>India</b></div>
                            </div>
                        </motion.div>

                        <motion.div
                            aria-label="Portrait of Dhyey Trivedi"
                            className="hero-portrait"
                            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="portrait-grid" />
                            <span className="sticker portrait-sticker">DESIGN<br />THINKER</span>
                            <div className="portrait-card">
                                <div className="portrait-meta"><span>CREATIVE DEVELOPER</span><span>DT / 26</span></div>
                                <Image
                                    alt="Dhyey Trivedi"
                                    className="portrait-image"
                                    height={560}
                                    priority
                                    src="/images/profile.png"
                                    width={560}
                                />
                                <h2>Dhyey<br />Trivedi<span>.</span></h2>
                                <p>Frontend · UI/UX · Creative</p>
                            </div>
                            <span className="sticker orbit-sticker">IDEAS<br />IN MOTION ✳</span>
                        </motion.div>
                    </div>
                    <Marquee />
                </section>

                <section className="section-wrap about-section" id="about">
                    <div className="section-heading">
                        <SectionLabel>01 / A LITTLE ABOUT ME</SectionLabel>
                        <h2>Code with a <span>creative edge.</span></h2>
                    </div>
                    <motion.div
                        className="about-card neo-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        variants={fadeUp}
                    >
                        <span className="about-mark">D<span>.</span></span>
                        <div>
                            <p>I&apos;m a frontend developer who cares about how digital experiences work — and how they make people feel.</p>
                            <p>I bring together frontend development, UI/UX thinking, and creative design to make ideas clear, useful, and memorable.</p>
                        </div>
                        <span className="about-spark" aria-hidden="true">✳</span>
                    </motion.div>
                </section>

                <section className="section-wrap work-section" id="work">
                    <div className="section-heading heading-row">
                        <div>
                            <SectionLabel>02 / SELECTED WORK</SectionLabel>
                            <h2>Good ideas.<br /><span>Made real.</span></h2>
                        </div>
                        <p>Small details. Big energy. A selection of things I&apos;ve designed, built, and explored.</p>
                    </div>
                    <div className="project-grid">
                        {projects.map((project, index) => (
                            <ProjectCard index={index} key={project.number} project={project} />
                        ))}
                        <motion.article
                            className="research-card"
                            layout
                            initial="hidden"
                            whileInView="visible"
                            whileHover={reduceMotion ? undefined : { y: -7, x: -3 }}
                            whileTap={reduceMotion ? undefined : { y: 3, x: 3, boxShadow: "2px 2px 0 #101010" }}
                            viewport={{ once: true, amount: 0.18 }}
                            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                            variants={fadeUp}
                        >
                            <div className="research-copy">
                                <p className="project-number">03 / 03 · RESEARCH POSTER</p>
                                <p className="project-eyebrow">COLLEGE INTERNATIONAL CONFERENCE · XAI</p>
                                <h3>Explainable AI for student education systems.</h3>
                                <p className="project-description">
                                    Exploring how explanations can help teachers understand student mistakes,
                                    guide improvement, and support stronger academic performance.
                                </p>
                                <div className="tag-list"><span className="tag">Explainable AI</span><span className="tag">Student learning</span><span className="tag">Research</span></div>
                            </div>
                            <div className="research-visual" aria-label="Research visual showing understand, explain, improve">
                                <div className="research-title">MAKE THE<br /><span>WHY</span> VISIBLE.</div>
                                <div className="research-steps">
                                    <span>01 / UNDERSTAND</span><b>→</b><span>02 / EXPLAIN</span><b>→</b><span>03 / IMPROVE</span>
                                </div>
                                <span className="research-stamp">XAI<br />✳<br />EDU</span>
                            </div>
                        </motion.article>
                    </div>
                </section>

                <section className="stack-section" id="stack">
                    <div className="section-wrap stack-layout">
                        <div className="stack-intro">
                            <SectionLabel>03 / TOOLBOX</SectionLabel>
                            <h2>Tools of<br />the <span>trade.</span></h2>
                            <p>A practical mix for building polished, human-friendly digital products.</p>
                        </div>
                        <motion.div
                            className="stack-board"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.045 } },
                            }}
                        >
                            {stack.map((item, index) => (
                                <motion.span
                                    className={`stack-sticker sticker-${index % 4}`}
                                    key={item}
                                    layout
                                    variants={fadeUp}
                                    whileHover={reduceMotion ? undefined : { y: -5, rotate: index % 2 ? 3 : -3 }}
                                    whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="section-wrap journey-section" id="journey">
                    <div className="section-heading">
                        <SectionLabel>04 / THE HACKATHON CIRCUIT</SectionLabel>
                        <h2>Show up.<br /><span>Build together.</span></h2>
                    </div>
                    <div className="hackathon-grid">
                        {hackathons.map((name, index) => (
                            <motion.div
                                className="hackathon-badge"
                                key={name}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={reduceMotion ? undefined : { y: -5, rotate: index % 2 ? 2 : -2 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                                variants={fadeUp}
                            >
                                <span>0{index + 1}</span><b>{name}</b><small>HACKATHON</small>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="section-wrap contact-section" id="contact">
                    <motion.div
                        className="contact-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        variants={fadeUp}
                    >
                        <SectionLabel>05 / YOUR MOVE</SectionLabel>
                        <h2>Have a good<br />one? <span>Let&apos;s build it.</span></h2>
                        <p>For ideas, collaborations, or a friendly hello, get in touch.</p>
                        <a className="button button-dark" href="mailto:your-email@example.com">Start a conversation <span>↗</span></a>
                        <span className="contact-doodle" aria-hidden="true">✳</span>
                    </motion.div>
                </section>
            </main>

            <footer className="site-footer">
                <div><span className="footer-monogram">D.</span><p>© 2026 Dhyey Trivedi · Made with curiosity.</p></div>
                <a href="#top">Back to the top ↑</a>
            </footer>
        </>
        </MotionConfig>
    );
}
