import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mockupRestaurantProject from "./assets/pictures/mockupRestaurantProject.webp";
import mockupNotedProject from "./assets/pictures/mockupNotedProject.webp";
import manefisto from "./assets/pictures/manefisto.webp";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const heroImageRef = useRef(null);

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-DZ", {
      timeZone: "Africa/Algiers",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-DZ", {
          timeZone: "Africa/Algiers",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Cursor logic removed per user request

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-overlay",
        { opacity: 1 },
        { opacity: 0, duration: 1.5, ease: "power3.inOut" }
      )

        .fromTo(
          ".hero-line",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=1.5"
        );

      // Hero Parallax
      gsap.to(heroImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headers Fade In
      const sectionHeadings = gsap.utils.toArray(".section-heading");
      sectionHeadings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
            },
          }
        );
      });

      // Projects cinematic reveal
      const projects = gsap.utils.toArray(".project-card");
      projects.forEach((proj) => {
        gsap.fromTo(
          proj,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: proj,
              start: "top 80%",
            },
          }
        );
      });

      // Skills stagger
      gsap.fromTo(
        ".skill-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
          },
        }
      );

      // About Text Reveal
      gsap.fromTo(
        ".about-reveal-word",
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".about-container",
            start: "top 75%",
            end: "+=300",
            scrub: true,
          },
        }
      );

      // Process progress line
      gsap.fromTo(
        ".process-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          ease: "none",
          scrollTrigger: {
            trigger: ".process-container",
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const pullQuote =
    "I build high-performance web applications and automated systems. Not because it's easy — because the web should feel like a digital instrument, not a generic template.";
  const aboutWords = pullQuote.split(" ");

  const projects = [
    {
      num: "01",
      title: "Fable Flav'",
      desc: "A restaurant website for booking tables, viewing the menu, and getting in touch easily.",
      tech: "React / Supabase / Tailwind CSS / SASS / React Query / Redux Toolkit / React Form Hook / Zod",
      image: mockupRestaurantProject,
      url: "https://fableflav.netlify.app",
    },
    {
      num: "02",
      title: "Noted",
      desc: "A note-taking app with Markdown support, intuitive design, and activity-tracking stats.",
      tech: "React / Tiptap / Framer Motion / Supabase / Redux / react hook form / Zod / apex charts / nivo",
      image: mockupNotedProject,
      url: "https://app-noted.netlify.app",
    },
  ];

  const processSteps = [
    {
      title: "Understand the problem",
      desc: "Break down the core requirements and map out the exact objective.",
    },
    {
      title: "Build in public",
      desc: "Develop iteratively with clean architecture and brutalist precision.",
    },
    {
      title: "Ship with intention",
      desc: "Deploy optimized, high-performance instruments, not standard websites.",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "CRUD Operations",
    "API Integration",
    "JavaScript (ES6+)",
    "React.js",
    "Redux Toolkit",
    "TypeScript",
    "Tailwind CSS",
    "SASS / SCSS",
    "GSAP Animations",
    "Framer Motion",
    "Supabase",
    "React Query",
    "React Hook Form",
    "Zod",
    "Python",
    "DSA",
    "AI Automations",
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen text-ink overflow-x-hidden bg-bg"
    >
      <div className="hero-overlay fixed inset-0 bg-bg z-[100] pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="w-full px-4 py-6 md:px-12 flex justify-between items-start absolute top-0 left-0 right-0 z-50 mix-blend-difference text-bg">
        <div className="flex flex-col">
          <span className="font-display font-bold text-2xl tracking-tight leading-none">
            Djillali Tareb
          </span>
          <span className="font-mono text-xs mt-2 uppercase tracking-widest opacity-70">
            PORTFOLIO — {new Date().getFullYear()}
          </span>
        </div>
        <div className="hidden md:flex gap-12 font-mono text-sm uppercase tracking-widest">
          <a href="#work" className="hover:opacity-50 transition-opacity">
            Work
          </a>
          <a href="#about" className="hover:opacity-50 transition-opacity">
            About
          </a>
          <a href="#skills" className="hover:opacity-50 transition-opacity">
            Skills
          </a>
          <a href="#process" className="hover:opacity-50 transition-opacity">
            Process
          </a>
        </div>
        <a
          href="#contact"
          className="hidden md:block font-mono text-sm uppercase tracking-widest border border-bg px-6 py-2 hover:bg-bg hover:text-ink transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* HERO Sect */}
      <section className="hero-section h-screen w-full relative overflow-hidden flex flex-col justify-end px-4 pb-12 md:px-12">
        <div className="absolute inset-0 z-0">
          <div
            ref={heroImageRef}
            className="w-full h-[120%] -top-[10%] relative"
          >
            <div className="absolute top-1/4 right-[10%] w-[50vw] aspect-square bg-accent/15 rounded-full filter blur-[50px] mix-blend-multiply animate-[spin_25s_ease-in-out_infinite_alternate] transform-gpu pointer-events-none origin-bottom-left"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-display font-bold text-[clamp(4rem,15vw,16rem)] leading-[0.8] tracking-tighter uppercase inline-block mx-auto md:mx-0">
            <div className="overflow-hidden p-2">
              <span className="hero-line block text-accent">Djillali</span>
            </div>
            <div className="overflow-hidden p-2 -mt-[2%] md:-mt-[4%]">
              <span className="hero-line block">Tareb</span>
            </div>
          </h1>

          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mt-8 border-t-2 border-ink/30 pt-4">
            <div className="overflow-hidden">
              <p className="hero-line font-body text-xl md:text-2xl max-w-xl text-ink/80 mb-4 md:mb-0">
                CS student, web developer &{" "}
                <span className="text-accent italic font-semibold">
                  automation builder.
                </span>
              </p>
            </div>
            <div className="overflow-hidden">
              <div className="hero-line font-mono text-xs md:text-sm uppercase tracking-widest text-ink/60 flex flex-col md:text-right">
                <span>Available for projects — Algeria</span>
                <span className="mt-1">LOCAL TIME: {time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-32 px-4 md:px-12 bg-bg">
        <h2 className="section-heading font-display font-bold text-[clamp(3rem,8vw,6rem)] leading-none uppercase mb-20 tracking-tighter border-b-2 border-ink pb-8">
          Selected
          <br />
          Work{" "}
          <span className="text-accent text-4xl align-top md:ml-4">(02)</span>
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.url}
              target="_blank"
              rel="noreferrer"
              className="project-card flex flex-col md:flex-row gap-8 md:gap-16 items-center group cursor-pointer"
            >
              <div className="w-full md:w-3/5 overflow-hidden aspect-video border-[1px] border-ink/20 relative">
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col">
                <span className="font-mono text-5xl md:text-7xl text-ink/10 font-bold mb-4 group-hover:text-accent/30 transition-colors duration-500">
                  {proj.num}
                </span>
                <h3 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="font-body text-lg md:text-xl text-ink/80 mb-8 max-w-md">
                  {proj.desc}
                </p>
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-ink/60 flex flex-wrap gap-2">
                  {proj.tech.split(" / ").map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-ink/20 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLSET */}
      <section
        id="skills"
        className="py-32 px-4 md:px-12 bg-ink text-bg overflow-hidden relative"
      >
        <h2 className="section-heading font-display font-bold text-[clamp(3rem,8vw,6rem)] leading-none uppercase mb-16 tracking-tighter">
          The Arsenal
        </h2>

        <div className="skills-grid grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 max-w-6xl relative z-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item flex flex-col border-t border-bg/20 pt-4 group"
            >
              <span className="font-mono text-xs tracking-widest text-accent mb-2">
                0{idx + 1 > 9 ? idx + 1 : `0${idx + 1}`}
              </span>
              <span className="font-display font-bold text-xl md:text-2xl uppercase group-hover:text-accent transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute -bottom-20 -right-20 font-display font-bold text-[20vw] leading-none text-bg/5 select-none pointer-events-none tracking-tighter mix-blend-overlay">
          SKILLS
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-4 md:px-12 bg-surface">
        <div className="section-heading font-mono text-sm uppercase tracking-widest mb-16 border-b-2 border-ink pb-4">
          THE MANIFESTO / [03]
        </div>
        <div className="flex flex-col md:flex-row gap-16 md:gap-12 about-container relative">
          <div className="w-full md:w-[60%] z-10">
            <h2 className="font-display font-bold text-3xl md:text-[3.5rem] leading-[1.1] uppercase tracking-tight">
              {aboutWords.map((word, i) => (
                <span
                  key={i}
                  className="about-reveal-word inline-block mr-[0.2em]"
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>
          <div className="w-full md:w-[40%] flex flex-col">
            <div className="aspect-[4/5] w-full mb-8 relative overflow-hidden group border border-ink/20">
              <img
                src={manefisto}
                alt="Workspace and notebook"
                className="w-full h-full object-cover mix-blend-multiply grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <p className="font-body text-lg leading-relaxed text-ink/80">
              Based in Algeria, I approach every project not just as a piece of
              software, but as a deliberate structure. The code is the
              foundation, and the design is the signal.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="py-32 px-4 md:px-12 bg-bg process-container relative"
      >
        <h2 className="section-heading font-display font-bold text-[clamp(3rem,8vw,6rem)] leading-none uppercase mb-20 tracking-tighter border-b-2 border-ink pb-8">
          The Method
        </h2>

        <div className="relative mt-12 pb-12">
          <div className="absolute top-8 left-4 md:left-8 w-[2px] h-full bg-ink/10 md:w-full md:h-[2px] md:top-24 md:left-0 hidden md:block"></div>
          <div className="process-line absolute top-8 left-4 md:left-8 w-[2px] h-full bg-accent md:w-full md:h-[2px] md:top-24 md:left-0 hidden md:block"></div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between relative z-10 pt-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex-1 transition-all group pl-8 md:pl-0"
              >
                <div className="font-mono text-5xl md:text-8xl font-bold text-ink/10 mb-6 group-hover:text-accent transition-colors duration-500">
                  0{idx + 1}
                </div>
                <h4 className="font-display font-bold text-2xl uppercase mb-4 tracking-tight">
                  {step.title}
                </h4>
                <p className="font-body text-lg leading-relaxed text-ink/70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-40 px-4 md:px-12 bg-ink text-bg flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="font-display text-[150vw] leading-none select-none">
            *
          </span>
        </div>

        <h2 className="section-heading font-display font-bold text-[clamp(2.5rem,10vw,10rem)] leading-none uppercase mb-16 tracking-tighter z-10">
          Let's build
          <br />
          <span className="text-accent italic">something.</span>
        </h2>
        <a
          href="mailto:djitrb100@gmail.com"
          className="font-display font-bold text-3xl md:text-5xl border-b-2 border-bg hover:border-accent hover:text-accent transition-colors pb-2 mb-20 z-10 tracking-tight"
        >
          djitrb100@gmail.com
        </a>
        <div className="flex gap-12 font-mono text-sm md:text-lg uppercase tracking-widest z-10">
          <a
            href="https://github.com/djulTrb"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent flex items-center group transition-colors"
          >
            GitHub
            <span className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/djillali-tareb-b47040361"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent flex items-center group transition-colors"
          >
            LinkedIn
            <span className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full relative overflow-hidden flex flex-col bg-bg border-t-2 border-ink">
        {/* Marquee Strip */}
        <div className="w-full bg-accent text-bg whitespace-nowrap overflow-hidden py-4 font-mono select-none border-b-2 border-ink">
          <div className="inline-block animate-[marquee_20s_linear_infinite] uppercase tracking-widest">
            AVAILABLE FOR FREELANCE — WEB DEVELOPMENT — AI AUTOMATION — ALGERIA
            — {new Date().getFullYear()} — AVAILABLE FOR FREELANCE — WEB
            DEVELOPMENT — AI AUTOMATION — ALGERIA — {new Date().getFullYear()} —
            AVAILABLE FOR FREELANCE — WEB DEVELOPMENT — AI AUTOMATION — ALGERIA
            — {new Date().getFullYear()} —
          </div>
        </div>

        {/* Colophon */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-8 md:px-12 font-mono text-xs uppercase tracking-widest text-ink">
          <span>Djillali Tareb © {new Date().getFullYear()}</span>
          <span className="mt-4 md:mt-0 font-bold">
            Designed & Built with Intent
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
