import Image from "next/image";
import ImpactCard from "./components/ImpactCard";
import SideProjectCard from "./components/SideProjectCard";
import SkillsSection from "./components/SkillsSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

const impactItems = [
  {
    icon: "🤖",
    title: "AI Approval Summary",
    metric: "~6.5K/mo",
    metricLabel: "uses",
    description:
      "Delivered an AI-generated summary experience for approval workflows, driving ~6.5K monthly uses and helping users review and act on requests in an average of ~146 seconds per decision.",
  },
  {
    icon: "🔗",
    title: "Agent Deployment & Integration Model",
    metric: "16+",
    metricLabel: "agents",
    description:
      "Defined the ALM and deployment model for a 16-agent Copilot Studio / Power Platform solution. Created reusable CI/CD templates used by the main orchestrator and downstream child agents, and standardized custom connector patterns backed by pro-code APIs for consistent deployments across environments.",
  },
  {
    icon: "📡",
    title: "Production Reliability",
    metric: "~90%",
    metricLabel: "triage reduction",
    description:
      "Integrated AI-assisted SRE tooling into the Approval Management live-site workflow, connecting read-only Azure resource access, service logs, repository context, and troubleshooting guides to cut common production ticket triage from ~30–40 minutes to under 5 minutes.",
  },
  {
    icon: "☁️",
    title: "Azure Cost Optimization",
    metric: "$284.8K",
    metricLabel: "savings",
    description:
      "Drove Azure spend governance across multiple services, delivering ~$284.8K in savings and keeping spend ~11.8% under a ~$2.41M budget.",
  },
  {
    icon: "🚀",
    title: "AKS to Azure Container Apps Migration",
    metric: "4 teams",
    metricLabel: "migrated",
    description:
      "Migrated microservices from AKS to Azure Container Apps, reducing infrastructure maintenance efforts across 4 service teams, lowering costs by ~4%, and improving zero-downtime deployment reliability.",
  },
  {
    icon: "🧩",
    title: "Shared React/npm Component Library",
    metric: "4 teams",
    metricLabel: "adopted",
    description:
      "Built reusable React/npm component libraries adopted by 4 engineering teams, standardizing accessibility, performance, and UI implementation patterns.",
  },
  {
    icon: "⚡",
    title: "Platform Scale & Performance",
    metric: "~10K",
    metricLabel: "target users",
    description:
      "Built platform foundations designed to scale toward a ~10K-user Customer Success organization, with API services achieving <2s p95 latency and frontend applications loading in <5s.",
  },
];

const skillCategories: Array<{
  id: "languages" | "backend" | "frontend" | "cloud" | "ai" | "quality" | "leadership";
  label: string;
}> = [
  { id: "languages", label: "Languages & Frameworks" },
  { id: "backend", label: "Backend & APIs" },
  { id: "frontend", label: "Frontend" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "ai", label: "AI & Applied AI" },
  { id: "quality", label: "Quality & Reliability" },
  { id: "leadership", label: "Technical Leadership" },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="ms-section bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
        <div className="ms-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest opacity-80 mb-2">
                Microsoft · Senior Software Engineer
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Eric Suarez</h1>
              <p className="text-xl md:text-2xl font-medium mb-4 opacity-95">
                Senior Full-Stack Software Engineer building reliable, scalable product systems.
              </p>
              <p className="text-base md:text-lg mb-8 opacity-85 leading-relaxed max-w-prose">
                I&apos;m a Microsoft Senior Software Engineer with 8+ years of experience building
                backend services, React/TypeScript applications, cloud infrastructure, and
                production systems. My work spans secure REST/GraphQL APIs, accessible frontend
                experiences, Azure-based services, observability, CI/CD, and applied AI features
                used in enterprise workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="ms-button bg-transparent border border-white hover:bg-white hover:bg-opacity-10"
                >
                  View Experience
                </a>
                <a
                  href="#contact"
                  className="ms-button bg-transparent border border-white hover:bg-white hover:bg-opacity-10"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-56 h-56 md:w-64 md:h-64 relative">
                <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-full opacity-30"></div>
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center p-1">
                  <Image
                    alt="Eric Suarez"
                    src="/profile-pic.JPG"
                    className="rounded-full object-cover w-full h-full"
                    width="192"
                    height="192"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" className="ms-section">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="ms-card max-w-3xl mx-auto space-y-4">
            <p className="text-lg">
              I&apos;m a Senior Full-Stack Software Engineer at{" "}
              <span className="not-prose">
                <Badge href="https://microsoft.com">
                  <Image
                    alt="Microsoft logomark"
                    src="/microsoft-logo.png"
                    className="!mr-1"
                    width="14"
                    height="14"
                  />
                  Microsoft
                </Badge>
              </span>{" "}
              focused on building reliable, maintainable systems across the frontend, backend, and
              cloud infrastructure layers.
            </p>
            <p className="text-lg">
              I&apos;ve worked on secure REST and GraphQL APIs, React/TypeScript applications,
              shared component libraries, Azure services, observability, automated testing, and
              deployment pipelines. More recently, I&apos;ve also built applied AI experiences and
              MCP integrations that help users make faster, better-informed decisions inside
              existing business workflows.
            </p>
            <p className="text-lg">
              I enjoy turning ambiguous product and technical problems into practical systems that
              teams can operate, extend, and trust in production.
            </p>
          </div>
        </div>
      </section>

      {/* ── Engineering Highlights ─────────────────────────── */}
      <section className="ms-section bg-[var(--muted)]">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Engineering Highlights</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">
            Selected outcomes from production work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactItems.map(item => (
              <ImpactCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section id="experience" className="ms-section">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Work Experience</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">
            Selected roles and production work
          </p>

          <div className="space-y-8">
            {/* Microsoft — Senior Software Engineer */}
            <div className="ms-card relative border-l-4 border-l-[var(--primary)]">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-0.5">Redmond, WA</p>
                </div>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)] shrink-0">
                  <Badge href="https://microsoft.com">
                    <Image
                      alt="Microsoft logomark"
                      src="/microsoft-logo.png"
                      className="!mr-1"
                      width="14"
                      height="14"
                    />
                    Microsoft
                  </Badge>
                  <span>•</span>
                  <span className="text-sm">Sep 2024 – Present</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 text-sm leading-relaxed">
                <li>
                  Led development of a unified Customer Success platform, onboarding multiple
                  partner teams and establishing standardized APIs, integration patterns, and
                  deployment readiness to scale toward a ~10K-user Customer Success organization.
                </li>
                <li>
                  Defined the ALM and deployment model for a 16-agent Copilot Studio / Power
                  Platform solution, creating reusable CI/CD templates used by the main orchestrator
                  and downstream child agents while standardizing custom connectors backed by
                  pro-code APIs.
                </li>
                <li>
                  Architected a workflow orchestration layer that routed Customer Success scenarios
                  across multiple domain services and agents, with clear API contracts and ownership
                  boundaries.
                </li>
                <li>
                  Authored design docs and led technical reviews for AI Workspace integration
                  patterns, aligning partner teams on API contracts, workflow boundaries, security
                  requirements, and release criteria.
                </li>
                <li>
                  Designed and shipped approval workflow features, including AI-generated summaries
                  and MCP integrations, driving ~6.5K monthly uses and enabling users to review and
                  act on requests in an average of ~146 seconds per decision.
                </li>
                <li>
                  Integrated AI-assisted SRE tooling into the Approval Management live-site
                  workflow, connecting read-only Azure resource access, service logs, repository
                  context, and custom troubleshooting guides to accelerate root cause analysis.
                  Reduced common production ticket triage from ~30–40 minutes to under 5 minutes,
                  helped new on-call engineers ramp quickly, and contributed to broader org adoption
                  across multiple engineering teams.
                </li>
                <li>
                  Owned Azure spend optimization for an org of ~20 engineering teams, partnering
                  with engineering leadership to monitor budget trends, identify cost-growth areas,
                  and drive team-level remediation. Built dashboards and alerts, supported App
                  Service v2→v3 migration planning, helped right-size non-prod resources, and
                  tracked cleanup of unused infrastructure while balancing release schedules and
                  service reliability. During the Nov 2025–Mar 2026 review period, the org saved
                  ~$284.8K and finished ~11.8% under a $2.41M budget.
                </li>
                <li>
                  Owned security, privacy, Business Continuity &amp; Disaster Recovery, and
                  Responsible AI readiness work, producing release evidence needed for production
                  launches.
                </li>
                <li>
                  Mentored entry-level engineers and interns through onboarding, technical design
                  discussions, code reviews, and project execution, helping interns complete
                  internship deliverables.
                </li>
              </ul>
            </div>

            {/* Microsoft — Software Engineer II / Software Engineer */}
            <div className="ms-card relative border-l-4 border-l-[var(--primary)]">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Software Engineer II / Software Engineer
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-0.5">Redmond, WA</p>
                </div>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)] shrink-0">
                  <Badge href="https://microsoft.com">
                    <Image
                      alt="Microsoft logomark"
                      src="/microsoft-logo.png"
                      className="!mr-1"
                      width="14"
                      height="14"
                    />
                    Microsoft
                  </Badge>
                  <span>•</span>
                  <span className="text-sm">Sep 2019 – Sep 2024</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 text-sm leading-relaxed">
                <li>
                  Built secure REST and GraphQL API services for risk and approval management
                  applications, achieving &lt;2s p95 latency with JWT bearer authentication,
                  structured logging, automated alerts, CI/CD, and unit/integration test coverage.
                </li>
                <li>
                  Improved system performance and scalability, achieving &lt;2s API latency at the
                  95th percentile and &lt;5s UI load times through caching strategies and
                  service-level optimizations.
                </li>
                <li>
                  Built React applications and reusable npm component libraries adopted by 4–5
                  engineering teams, improving reuse and consistency across UI, accessibility, and
                  observability patterns.
                </li>
                <li>
                  Strengthened engineering quality by implementing automated testing, CI/CD
                  pipelines, and release checks, increasing code coverage and enabling safer, faster
                  production releases.
                </li>
                <li>
                  Led Playwright-based automated UI integration and accessibility testing, improving
                  confidence in frontend releases and reducing regression risk.
                </li>
                <li>
                  Migrated microservices from AKS to Azure Container Apps, reducing infrastructure
                  overhead across 4 service teams, lowering costs by ~4%, and enabling more reliable
                  zero-downtime deployments.
                </li>
              </ul>
            </div>

            {/* American Express — Software Engineer */}
            <div className="ms-card relative border-l-4 border-l-[var(--secondary)]">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
                    Fort Lauderdale, FL
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)] shrink-0">
                  <Badge href="https://americanexpress.com">
                    <Image
                      alt="American Express logomark"
                      src="/amex-logo.png"
                      className="!mr-1"
                      width="14"
                      height="14"
                    />
                    American Express
                  </Badge>
                  <span>•</span>
                  <span className="text-sm">Jan 2018 – Aug 2019</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-2 text-sm leading-relaxed">
                <li>
                  Built a REST API for Norwegian SAS Co-Brand Consumer Card risk decisioning,
                  enabling applicant data retrieval for prospective customer evaluations.
                </li>
                <li>
                  Modernized the database access layer onto an internal Database API, reducing
                  platform database operations by ~50% and helping meet SLA targets for co-brand
                  card products.
                </li>
                <li>
                  Improved engineering delivery through Candidate Intake Portal enhancements and
                  CI/CD pipeline improvements.
                </li>
              </ul>
            </div>

            {/* Internships */}
            <div className="ms-card relative border-l-4 border-l-[var(--border)]">
              <h3 className="text-lg font-semibold mb-4 text-[var(--muted-foreground)]">
                Internships
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <p className="font-medium text-sm">Software Engineering Intern</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                      <Badge href="https://americanexpress.com">
                        <Image
                          alt="American Express logomark"
                          src="/amex-logo.png"
                          className="!mr-1"
                          width="12"
                          height="12"
                        />
                        American Express
                      </Badge>
                      <span>Jun – Aug 2017</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Built a Java-based automation tool for business-rule database synchronization,
                    reducing a manual 4–5 day process to less than 1 day.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <p className="font-medium text-sm">Software Engineering Intern</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                      <Badge href="https://americanexpress.com">
                        <Image
                          alt="American Express logomark"
                          src="/amex-logo.png"
                          className="!mr-1"
                          width="12"
                          height="12"
                        />
                        American Express
                      </Badge>
                      <span>Jun – Aug 2016</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Improved a C#/.NET/SQL web application by optimizing code, updating UI flows,
                    and aligning the codebase to a layered architecture across data, business, and
                    presentation tiers.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <p className="font-medium text-sm">Software Development Intern</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                      <span className="font-medium">LifeWallet</span>
                      <span>May – Aug 2015</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Built a web-based bug reporting application using HTML, CSS, JavaScript, and
                    CloudKit JS, reducing manual entry of handwritten tester reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Applied AI Side Project ──────────────────────── */}
      <section id="side-projects" className="ms-section">
        <div className="ms-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">Applied AI Side Project</h2>
            <p className="text-center text-[var(--muted-foreground)] mb-8 text-sm">
              A practical project built outside of work
            </p>
            <SideProjectCard />
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section id="skills" className="ms-section bg-[var(--muted)]">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">
            Core technologies and practices
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map(({ id, label }) => (
              <div key={id} className="ms-card">
                <h3 className="text-base font-semibold mb-3 text-[var(--primary)]">{label}</h3>
                <SkillsSection category={id} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section className="ms-section">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Education</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">Academic background</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="ms-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Bachelor of Computer Science</h3>
                <span className="text-sm text-[var(--muted-foreground)]">2017</span>
              </div>
              <p className="text-[var(--primary)] font-medium mb-2">
                <Badge href="https://ufl.edu">
                  <Image
                    alt="University of Florida logomark"
                    src="/uf-logo.png"
                    className="!mr-1"
                    width="14"
                    height="14"
                  />
                  University of Florida
                </Badge>
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">
                Core computer science fundamentals with minor in business administration.
              </p>
            </div>

            <div className="ms-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">iOS Development Bootcamp</h3>
                <span className="text-sm text-[var(--muted-foreground)]">Jan – May 2016</span>
              </div>
              <p className="text-[var(--primary)] font-medium mb-2">
                <Badge href="https://codepath.org">
                  <Image
                    alt="CodePath logomark"
                    src="/codepath-logo.png"
                    className="!mr-1"
                    width="14"
                    height="14"
                  />
                  CodePath University
                </Badge>
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">
                12-week Swift/iOS program. Built KickSwap, a sneaker community and valuation app, as
                a capstone project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section id="contact" className="ms-section bg-[var(--muted)]">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Contact</h2>
          <br />
          <div className="ms-card max-w-lg mx-auto text-center space-y-6">
            <p className="text-[var(--muted-foreground)]">
              The best way to reach me is via email or LinkedIn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="mailto:egs104@gmail.com"
                className="ms-button inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/eric-suarez-72332388/"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-button bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--muted)] inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/egs104"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-button bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--muted)] inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
