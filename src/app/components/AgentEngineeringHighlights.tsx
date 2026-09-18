import type { ReactNode } from "react";

function Highlight({
  id,
  icon,
  title,
  status,
  children,
}: {
  id: string;
  icon: string;
  title: string;
  status: string;
  children: ReactNode;
}) {
  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      className="ms-card border-l-4 border-l-[var(--primary)] scroll-mt-24 min-w-0"
    >
      <div className="flex items-start gap-3 mb-5">
        <span className="text-2xl shrink-0" aria-hidden="true">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="inline-flex rounded-full bg-[var(--muted)] border border-[var(--border)] px-2.5 py-0.5 text-xs font-medium mb-2">
            {status}
          </p>
          <h3 id={`${id}-title`} className="text-xl font-semibold leading-snug">
            {title}
          </h3>
        </div>
      </div>
      <div className="space-y-6 text-sm leading-relaxed">{children}</div>
    </article>
  );
}

function FlowPath({ label, steps }: { label: string; steps: string[] }) {
  return (
    <ol role="list" aria-label={label} className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex flex-col items-start sm:flex-row sm:items-center gap-2 min-w-0"
        >
          {index > 0 && (
            <span aria-hidden="true" className="shrink-0">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
          <span className="rounded border border-[var(--border)] bg-[var(--muted)] px-3 py-2">
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function AgentEngineeringHighlights() {
  return (
    <div className="space-y-6 mb-8">
      <Highlight
        id="agent-notification-feed"
        icon="🔔"
        title="Agent Notification & Action Feed"
        status="Shipped · End-to-end feature"
      >
        <p className="text-[var(--muted-foreground)]">
          Backend services and agentic workflows needed a shared way to proactively surface
          actionable work to users. I designed and implemented the shipped notification and action
          feed across the backend and React frontend.
        </p>

        <div>
          <h4 className="font-semibold mb-3">Event-driven architecture</h4>
          <FlowPath
            label="Notification delivery path"
            steps={[
              "Backend or agent workflow",
              ".NET notification services",
              "Cosmos DB",
              "Service Bus",
              "SignalR",
              "React UI",
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Actionable work</h4>
            <p className="text-[var(--muted-foreground)]">
              Users can submit, approve, navigate to an external URL, continue an agent
              conversation, or invoke a curated agent prompt.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Reliability & live updates</h4>
            <p className="text-[var(--muted-foreground)]">
              Feed items are persistently stored in Cosmos DB. Idempotency keys support safe retries
              and prevent duplicate creation in edge cases, while Service Bus and SignalR deliver
              live UI updates and toast notifications.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Automated quality coverage</h4>
            <p className="text-[var(--muted-foreground)]">
              Automated unit tests, API integration tests, Playwright end-to-end tests, and
              accessibility coverage support the feature.
            </p>
          </div>
        </div>

        <p className="border-t border-[var(--border)] pt-4 text-[var(--muted-foreground)]">
          <span className="font-medium text-[var(--foreground)]">My ownership:</span> Feature
          design, backend implementation, frontend implementation, and automated testing.
        </p>
      </Highlight>

      <Highlight
        id="agent-evaluation-framework"
        icon="🧪"
        title="Agent Evaluation Framework — Tool Routing & LLM-as-Judge"
        status="Built · Initial evaluation framework"
      >
        <p className="text-[var(--muted-foreground)]">
          I built an initial evaluation framework for a multi-team, multi-MCP agent ecosystem. Two
          complementary layers evaluate exact tool-selection regressions and the semantic
          appropriateness of agent behavior.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Deterministic tool-selection evaluation</h4>
            <p className="text-[var(--muted-foreground)] mb-3">
              Curated prompts and expected tool behavior provide exact regression checks across
              single-tool and multi-tool routing scenarios. Repeatable offline evaluation checks
              these cases as prompts, tool descriptions, and MCP integrations evolve.
            </p>
            <p className="border-l-2 border-[var(--border)] pl-3">
              <span className="font-medium">The question:</span> Did the agent perform the exact
              expected behavior for this known regression case?
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">LLM-as-judge evaluation</h4>
            <p className="text-[var(--muted-foreground)] mb-3">
              Uses{" "}
              <span className="[overflow-wrap:anywhere]">Microsoft.Extensions.AI.Evaluation</span>{" "}
              with a dedicated judge model, such as GPT-4.1, to evaluate Tool Call Accuracy, Task
              Adherence, and Intent Resolution.
            </p>
            <p className="border-l-2 border-[var(--border)] pl-3">
              <span className="font-medium">The question:</span> Was the behavior semantically
              appropriate given the request, conversation, and available tools?
            </p>
          </div>
        </div>

        <section
          aria-labelledby="evaluation-planned-extension"
          className="rounded-lg border border-dashed border-[var(--border)] border-l-4 border-l-[var(--accent)] p-4 sm:p-5"
        >
          <h4 id="evaluation-planned-extension" className="font-semibold mb-2">
            Planned Extension · POC 2
          </h4>
          <p className="text-[var(--muted-foreground)] mb-4">
            Not yet implemented. This planned extension would add response-quality coverage after
            tool execution and synthesis:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[var(--muted-foreground)] mb-5">
            <li>
              <span className="font-medium text-[var(--foreground)]">Groundedness:</span> Whether
              final-response claims are supported by MCP or tool outputs.
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)]">Completeness:</span> Whether
              important tool-returned information was omitted.
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)]">Coherence (optional):</span>{" "}
              Whether the answer is logically organized and understandable.
            </li>
          </ul>
          <p className="font-medium mb-3">Planned full evaluation path</p>
          <FlowPath
            label="Planned full evaluation path"
            steps={[
              "User intent",
              "Tool selection",
              "Tool execution",
              "Tool-result synthesis",
              "Final response quality",
            ]}
          />
        </section>
      </Highlight>
    </div>
  );
}
