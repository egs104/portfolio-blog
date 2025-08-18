import React from "react";

interface SkillsSectionProps {
  category?: "frontend" | "backend" | "tools";
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ category }) => {
  // Define skills by category
  const skillsByCategory = {
    frontend: [
      "React",
      "Angular",
      "TypeScript",
      "HTML5/CSS3",
      "Sass/SCSS",
      "Vite",
      "Webpack",
      "Next.js",
    ],
    backend: ["C#", ".NET", "SQL", "NoSQL", "Redis", "REST APIs", "GraphQL", "Authentication"],
    tools: [
      "Git & GitHub",
      "Azure",
      "Azure OpenAI",
      "MCP Server & Tools",
      "CI/CD",
      "Jest",
      "Playwright",
      "Figma",
      "Docker",
      "Agile",
    ],
  };

  // Select skills based on the provided category or use all skills if no category provided
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
