import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { flushSync } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen, toggleTheme } from "../app/uiSlice";
import type { AppDispatch, RootState } from "../app/store";
import { profile } from "../data/portfolio";
import profileImage from "../../public/Profile.jpeg";

const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["skills", "Expertise"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>;
  };
};

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

  useEffect(() => {
    const profileImage = document.querySelector<HTMLImageElement>(
      ".hero-profile img",
    );
    const brandMark = document.querySelector<HTMLButtonElement>(".brand-mark");
    const brandImage =
      brandMark?.querySelector<HTMLImageElement>(".brand-mark__avatar");
    const brandText = brandMark?.querySelector<HTMLSpanElement>(":scope > span");

    if (!profileImage || !brandMark || !brandImage || !brandText) {
      return;
    }

    const flight = document.createElement("div");
    const flightImage = profileImage.cloneNode() as HTMLImageElement;
    flight.className = "profile-brand-flight";
    flight.setAttribute("aria-hidden", "true");
    flightImage.alt = "";
    flight.append(flightImage);
    document.body.append(flight);

    let frame = 0;
    const reset = () => {
      profileImage.style.opacity = "";
      brandImage.style.opacity = "";
      brandText.style.opacity = "";
      flight.style.display = "none";
    };

    const updateFlight = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const source = profileImage.getBoundingClientRect();
        const target = brandImage.getBoundingClientRect();
        const headerBottom =
          document.querySelector(".site-header")?.getBoundingClientRect().bottom ??
          66;
        const rawProgress = Math.max(
          0,
          Math.min(
            1,
            (headerBottom - source.top) / Math.max(source.height + 60, 1),
          ),
        );
        const linearProgress = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches
          ? Number(rawProgress >= 0.5)
          : rawProgress;
        const progress =
          linearProgress * linearProgress * (3 - 2 * linearProgress);

        if (progress === 0) {
          reset();
          return;
        }

        const mix = (from: number, to: number) =>
          from + (to - from) * progress;
        brandText.style.opacity = `${1 - progress}`;
        brandImage.style.opacity = `${progress}`;
        profileImage.style.opacity = "0";

        if (progress === 1) {
          flight.style.display = "none";
          return;
        }

        flight.style.display = "block";
        flight.style.left = `${mix(source.left, target.left)}px`;
        flight.style.top = `${mix(source.top, target.top)}px`;
        flight.style.width = `${mix(source.width, target.width)}px`;
        flight.style.height = `${mix(source.height, target.height)}px`;
      });
    };

    updateFlight();
    window.addEventListener("scroll", updateFlight, { passive: true });
    window.addEventListener("resize", updateFlight);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateFlight);
      window.removeEventListener("resize", updateFlight);
      reset();
      flight.remove();
    };
  }, []);

  const navigate = (id: string) => {
    dispatch(setMenuOpen(false));
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const changeTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const transitionDocument = document as ViewTransitionDocument;
    const startViewTransition = transitionDocument.startViewTransition;

    if (
      !startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      dispatch(toggleTheme());
      return;
    }

    const buttonBounds = event.currentTarget.getBoundingClientRect();
    root.style.setProperty(
      "--theme-origin-x",
      `${buttonBounds.left + buttonBounds.width / 2}px`,
    );
    root.style.setProperty(
      "--theme-origin-y",
      `${buttonBounds.top + buttonBounds.height / 2}px`,
    );
    root.classList.add("theme-transition-active");

    const transition = startViewTransition.call(transitionDocument, () => {
      flushSync(() => dispatch(toggleTheme()));
    });
    const cleanup = () => root.classList.remove("theme-transition-active");
    transition.finished.then(cleanup, cleanup);
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
          <img className="brand-mark__avatar" src={profileImage} alt="" />
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
            onClick={changeTheme}
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
