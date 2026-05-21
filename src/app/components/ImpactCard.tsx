import React from "react";

interface ImpactCardProps {
  title: string;
  description: string;
  icon: string;
  metric?: string;
  metricLabel?: string;
}

export default function ImpactCard({
  title,
  description,
  icon,
  metric,
  metricLabel,
}: ImpactCardProps) {
  return (
    <div className="ms-card flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="text-3xl">{icon}</div>
      {metric && (
        <div>
          <span className="text-2xl font-bold text-[var(--primary)]">{metric}</span>
          {metricLabel && (
            <span className="text-xs text-[var(--muted-foreground)] ml-1">{metricLabel}</span>
          )}
        </div>
      )}
      <h3 className="font-semibold text-base leading-snug">{title}</h3>
      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{description}</p>
    </div>
  );
}
