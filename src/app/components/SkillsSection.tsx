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
  languages: ["C#", ".NET", "TypeScript", "JavaScript", "React", "SQL"],
  backend: ["REST APIs", "GraphQL", "JWT authentication", "Caching", "Performance optimization"],
  frontend: [
    "React",
    "TypeScript",
    "npm component libraries",
    "Accessibility",
    "Playwright",
    "UI integration testing",
  ],
  cloud: [
    "Azure",
    "Azure Container Apps",
    "Azure Functions",
    "Service Bus",
    "Azure SQL",
    "Azure Cosmos DB",
    "Azure DevOps",
    "CI/CD",
    "Infrastructure as Code",
  ],
  ai: ["MCP", "Responsible AI", "Azure OpenAI"],
  quality: [
    "Observability",
    "Logging",
    "Telemetry",
    "Automated alerts",
    "SRE practices",
    "Unit testing",
    "Integration testing",
    "Accessibility testing",
  ],
  leadership: [
    "Design docs",
    "Technical reviews",
    "API contract design",
    "Mentoring engineers",
    "Cost governance",
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
