import React, { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Sudeep,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="START A CONVERSATION"
          title={
            <>
              Have a good problem
              <br />
              <span className="text-gradient">to solve?</span>
            </>
          }
          description="Whether it’s building a product, improving a system or exchanging ideas, I’d be glad to hear from you."
        />
        <div className="contact-grid">
          <div className="contact-direct">
            <span className="contact-label">THE DIRECT LINE</span>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={23} />
            </a>
            <a
              className="contact-phone"
              href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            >
              <Phone size={17} />
              <span>{profile.phone}</span>
              <ArrowUpRight size={14} />
            </a>
            <button className="copy-email" onClick={copyEmail}>
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Email copied" : "Copy email address"}
            </button>
            <div className="contact-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="contact-location">
              <span className="location-pulse" /> Based in {profile.location}
            </div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-topline">
              <Mail size={17} />
              <span>DROP A NOTE</span>
              <span className="form-topline__right">I’LL GET BACK TO YOU</span>
            </div>
            <label>
              Your name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="How should I address you?"
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
              />
            </label>
            <label>
              Your message
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a little about what you have in mind..."
              />
            </label>
            <button className="button button--dark form-submit" type="submit">
              Prepare email <Send size={16} />
            </button>
            <p className="form-note">
              This opens your email app with the message ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
