import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  MoveUpRight,
} from "lucide-react";
import { profile } from "../data/portfolio";
import profileImage from "../../public/Profile.jpeg";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero-section">
      <div className="hero-grain" />
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="hero-content page-wrap">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" /> OPEN TO WORK
          </div>
          <div className="hero-profile">
            <img src={profileImage} alt={profile.name} />
            <div className="hero-profile__copy">
              <p className="hero-profile__eyebrow">HELLO, I’M</p>
              <h2 className="hero-profile__name">{profile.name}</h2>
              <p className="hero-profile__role">
                {profile.role} <span>·</span> {profile.location}
              </p>
            </div>
          </div>
          <h1>
            Thoughtful code.
            <br />
            <span>Meaningful</span> impact.
          </h1>
          <p className="hero-intro">
            {profile.intro}
          </p>
          <div className="hero-actions">
            <button
              className="button button--light"
              onClick={() => scrollTo("projects")}
            >
              Explore my work <ArrowUpRight size={17} />
            </button>
            <button
              className="button button--quiet"
              onClick={() => scrollTo("contact")}
            >
              Let’s connect <ArrowDownRight size={17} />
            </button>
            <a
              className="button button--quiet"
              href={profile.resume}
              download="Sudeep-Kumar-Resume.pdf"
            >
              Download CV <Download size={17} />
            </a>
          </div>
          <div className="hero-socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MoveUpRight size={17} />
            </a>
            <span className="hero-socials__label">Connect with me</span>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Abstract illustration representing connected software systems"
        >
          <div className="hero-art__halo" />
          <div className="hero-art__orbit hero-art__orbit--a" />
          <div className="hero-art__orbit hero-art__orbit--b" />
          <div className="system-card system-card--main">
            <div className="system-card__top">
              <span className="system-dot" />
              <span>system / status</span>
              <span className="system-live">LIVE</span>
            </div>
            <div className="system-card__title">
              Everything
              <br />
              in sync.
            </div>
            <div className="system-flow">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="system-card__bottom">
              <span>EVENT-DRIVEN ARCHITECTURE</span>
              <span>↗</span>
            </div>
          </div>
          <div className="floating-chip floating-chip--top">
            <span className="chip-spark">✳</span> Resilient by design
          </div>
          <div className="floating-chip floating-chip--bottom">
            <span className="chip-pulse" /> Performance, measured
          </div>
          <div className="hero-art__caption">
            ENGINEERING AT EVERY LAYER <span>01 — 04</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom page-wrap">
        <span>SCROLL TO DISCOVER</span>
        <div className="scroll-line" />
        <span>01 / 05</span>
      </div>
    </section>
  );
}
