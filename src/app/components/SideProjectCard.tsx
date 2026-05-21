import React from "react";

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--muted)] border border-[var(--border)] px-2.5 py-0.5 text-xs font-medium text-[var(--foreground)]">
      {label}
    </span>
  );
}

const techTags = [
  "Next.js",
  "React",
  "TypeScript",
  "Backend APIs",
  "Postgres",
  "MCP",
  "Claude Desktop",
  "Inventory Analytics",
  "Business Automation",
  "AI Operations Assistant",
];

const highlights = [
  "Built web app with Next.js, React, and TypeScript for business operations workflows.",
  "Designed backend APIs, data service, and Postgres schema for structured inventory and operational analysis.",
  "Built an authorized MCP server with tools and prompts for Claude Desktop access.",
  "Enabled natural-language analysis of business data through controlled, predefined tools.",
  "Added intelligent stock and inventory alerts to reduce recurring manual review.",
  "Kept business actions reviewable and controlled rather than allowing unrestricted automation.",
];

export default function SideProjectCard() {
  return (
    <div className="ms-card border-l-4 border-l-[var(--accent)]">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl" aria-hidden="true">
          🏭
        </span>
        <div>
          <h3 className="text-lg font-semibold leading-snug">
            Southern Sales Operations Assistant
          </h3>
          <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
            Full-Stack AI Application · Personal Project
          </p>
        </div>
      </div>

      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
        Built a full-stack AI operations assistant for a family wholesale supplement and chemical
        products business. The system combines a Next.js/React/TypeScript web app, backend APIs,
        Postgres-backed data services, and an authorized MCP server for Claude Desktop. The
        assistant helps automate inventory analysis, stock alerts, and operational reporting,
        reducing recurring manual analysis while keeping business actions reviewable and controlled.
      </p>

      <ul className="space-y-1.5 mb-5">
        {highlights.map(highlight => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
            <span className="text-[var(--primary)] mt-0.5 shrink-0" aria-hidden="true">
              ›
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {techTags.map(tag => (
          <TechBadge key={tag} label={tag} />
        ))}
      </div>

      <p className="text-xs text-[var(--muted-foreground)] italic border-t border-[var(--border)] pt-4">
        <span className="font-medium not-italic text-[var(--foreground)]">Why it matters:</span>{" "}
        Shows practical application of full-stack engineering, MCP tooling, AI-assisted workflows,
        and product thinking for a real business user.
      </p>
    </div>
  );
}
