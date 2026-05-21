import React from "react";

interface MetricTile {
  value: string;
  label: string;
}

const metrics: MetricTile[] = [
  { value: "~10K", label: "Target user scale for Customer Success platform" },
  { value: "13+", label: "Downstream services on shared agent platform" },
  { value: "~6.5K/mo", label: "AI Approval Summary uses" },
  { value: "~90%", label: "Incident triage time reduction" },
  { value: "$284.8K", label: "Azure cost savings delivered" },
  { value: "<2s", label: "API p95 latency" },
  { value: "<5s", label: "UI load time" },
  { value: "4–5 teams", label: "Using shared React/npm component libraries" },
];

export default function MetricsStrip() {
  return (
    <section className="bg-[var(--primary)] text-white py-8">
      <div className="ms-container">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {metrics.map(metric => (
            <div key={metric.label} className="text-center">
              <p className="text-2xl font-bold tracking-tight">{metric.value}</p>
              <p className="text-xs mt-1 opacity-80 leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
