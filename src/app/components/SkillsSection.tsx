import React from "react";

type SkillCategory =
  | "languages"
  | "backend"
  | "frontend"
  | "cloud"
  | "ai"
  | "quality"
  | "leadership";

interface SkillsSectionProps {
  category?: SkillCategory;
}

const skillsByCategory: Record<SkillCategory, string[]> = {
  languages: ["C#", ".NET", "TypeScript", "JavaScript", "React", "SQL", "Java"],
  backend: [
    "REST APIs",
    "GraphQL",
    "JWT Bearer Auth",
    "Distributed Services",
    "Service Integration",
    "Caching Strategies",
    "Performance Optimization",
  ],
  frontend: [
    "React",
    "TypeScript",
    "npm Component Libraries",
    "Accessibility",
    "Frontend Observability",
    "Playwright",
    "UI Integration Testing",
  ],
  cloud: [
    "Azure",
    "Azure Container Apps",
    "AKS",
    "Azure DevOps",
    "CI/CD",
    "Automated Release Gates",
    "Zero-Downtime Deployments",
    "Infrastructure as Code",
  ],
  ai: [
    "MCP",
    "Agent Orchestration",
    "AI-Generated Summaries",
    "LLM-Integrated Workflows",
    "Responsible AI",
    "Enterprise AI Assistants",
    "Azure OpenAI",
  ],
  quality: [
    "Observability",
    "Logging & Telemetry",
    "Automated Alerts",
    "SRE Practices",
    "Unit Testing",
    "Integration Testing",
    "Accessibility Testing",
  ],
  leadership: [
    "Technical Design Docs",
    "Architecture Reviews",
    "Partner Team Onboarding",
    "API Contract Alignment",
    "Mentoring Engineers",
    "Production Readiness",
    "Cost Governance",
  ],
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ category }) => {
  const skills = category
    ? skillsByCategory[category]
    : ([] as string[]).concat(...Object.values(skillsByCategory));

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] px-2 py-1 rounded-full text-sm hover:bg-[var(--primary)] hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
