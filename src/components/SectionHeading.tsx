import React from "react";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${dark ? " section-heading--dark" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
}
