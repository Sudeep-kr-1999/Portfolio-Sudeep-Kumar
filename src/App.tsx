import { useEffect, useLayoutEffect } from "react";
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

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.ui.theme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#111114" : "#f4f8fe");
  }, [theme]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root || !("IntersectionObserver" in window)) return;

    const ids = [
      "home",
      "about",
      "experience",
      "skills",
      "projects",
      "education",
      "contact",
    ];
    const observed = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) dispatch(setActiveSection(visible.target.id));
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    const observeSections = () =>
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && !observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    observeSections();
    const mutations = new MutationObserver(observeSections);
    mutations.observe(root, {
      childList: true,
      subtree: true,
    });
    return () => {
      observer.disconnect();
      mutations.disconnect();
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

    const observed = new WeakSet<Element>();
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
    const observeElements = () =>
      root.querySelectorAll(revealTargets).forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element);
          element.classList.add("reveal-on-scroll");
          observer.observe(element);
        }
      });

    observeElements();
    const mutations = new MutationObserver(observeElements);
    mutations.observe(root, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return (
    <div className="app-shell">
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
