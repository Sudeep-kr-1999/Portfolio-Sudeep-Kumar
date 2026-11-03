import { memo, useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "./app/uiSlice";
import type { AppDispatch, RootState } from "./app/store";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { profile } from "./data/portfolio";

const sectionIds = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "education",
  "contact",
];
const revealTargets = [
  ".section-heading",
  ".about-main-copy",
  ".principle-row",
  ".metric-card",
  ".timeline-item",
  ".skill-card",
  ".project-card",
  ".education-card",
  ".contact-direct",
  ".contact-form",
].join(",");

const ThemeSync = memo(function ThemeSync() {
  const theme = useSelector((state: RootState) => state.ui.theme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#111114" : "#f4f8fe");
  }, [theme]);

  return null;
});

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const activeSectionRef = useRef("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const marker =
      Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop,
      ) || 0;
    let frame = 0;
    let navigationTarget: string | null = null;
    let navigationTimer = 0;
    const updateActiveSection = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (navigationTarget) return;
        let active = sections[0];

        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
        ) {
          active = sections[sections.length - 1];
        } else {
          for (const section of sections) {
            const bounds = section.getBoundingClientRect();
            if (bounds.top <= marker) active = section;
            if (bounds.top <= marker && bounds.bottom > marker) {
              active = section;
              break;
            }
          }
        }

        if (active && active.id !== activeSectionRef.current) {
          activeSectionRef.current = active.id;
          dispatch(setActiveSection(active.id));
        }
      });
    };
    const handleSectionNavigation = (event: Event) => {
      if (event instanceof CustomEvent && typeof event.detail === "string") {
        navigationTarget = event.detail;
        activeSectionRef.current = event.detail;
        window.clearTimeout(navigationTimer);
        navigationTimer = window.setTimeout(() => {
          navigationTarget = null;
          updateActiveSection();
        }, 160);
      }
    };
    const handleScroll = () => {
      if (navigationTarget) {
        window.clearTimeout(navigationTimer);
        navigationTimer = window.setTimeout(() => {
          navigationTarget = null;
          updateActiveSection();
        }, 160);
      }
      updateActiveSection();
    };

    updateActiveSection();
    window.addEventListener("sectionnavigation", handleSectionNavigation);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(navigationTimer);
      window.removeEventListener("sectionnavigation", handleSectionNavigation);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [dispatch]);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const root = document.getElementById("root");
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );
    root.querySelectorAll(revealTargets).forEach((element) => {
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-shell">
      <ThemeSync />
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <ProjectsSection />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <a className="footer-brand" href="#home">
            SK<span>.</span>
          </a>
          <p>Designed with intent. Built with curiosity.</p>
          <div className="footer-right">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
