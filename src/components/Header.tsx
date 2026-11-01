import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen, toggleTheme } from "../app/uiSlice";
import type { AppDispatch, RootState } from "../app/store";
import { profile } from "../data/portfolio";

const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["skills", "Expertise"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const { theme, menuOpen, activeSection } = useSelector(
    (state: RootState) => state.ui,
  );

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(
          scrollable > 0
            ? Math.max(0, Math.min(1, window.scrollY / scrollable))
            : 0,
        );
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const navigate = (id: string) => {
    dispatch(setMenuOpen(false));
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button
          className="brand-mark"
          onClick={() => navigate("home")}
          aria-label="Go to home"
        >
          SK<span>.</span>
        </button>
        <nav
          id="primary-navigation"
          className={`main-nav${menuOpen ? " main-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([id, label]) => (
            <button
              key={id}
              className={
                activeSection === id ? "nav-link nav-link--active" : "nav-link"
              }
              onClick={() => navigate(id)}
            >
              {label}
            </button>
          ))}
          <a
            className="nav-resume"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Sudeep Kumar’s resume PDF in a new tab"
          >
            Resume <span>↗</span>
          </a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            aria-pressed={theme === "dark"}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="icon-button menu-toggle"
            onClick={() => dispatch(setMenuOpen(!menuOpen))}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
    </header>
  );
}
