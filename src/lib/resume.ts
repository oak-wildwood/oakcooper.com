/** Content from the 2026 resume, trimmed for reading on screen. */

export const PROFILE = {
  name: "Oak Cooper",
  title: "Senior Fullstack Engineer",
  email: "oak@oakcooper.com",
  linkedin: "https://linkedin.com/in/oakcooper",
  github: "https://github.com/oak-wildwood",
  available: true,
  claim:
    "I build the UI, and I own whether it works for the user once it ships. Twenty-five years in software, from .NET backends to Angular and Vue. The last four went into a ~300-component Vue app and the NestJS/GraphQL services behind it: I built features across both, co-led its move to Vue 3, and set how the team used AI without letting speed cost quality.",
} as const;

/** Both resumes are offered: Fullstack is the default the site is positioned
 *  around, Frontend is for frontend-only roles. Same 2026 content otherwise. */
export const RESUMES = [
  {
    label: "FULLSTACK RESUME",
    href: "/oak-cooper-resume-2026.pdf",
    download: "Oak-Cooper-Resume-2026-Fullstack.pdf",
  },
  {
    label: "FRONTEND RESUME",
    href: "/oak-cooper-resume-2026-frontend.pdf",
    download: "Oak-Cooper-Resume-2026-Frontend.pdf",
  },
] as const;

export type Role = {
  start: string;
  end: string;
  place: string;
  title: string;
  company: string;
  bullets: string[];
};

export const ROLES: Role[] = [
  {
    start: "2022",
    end: "2026",
    place: "Remote",
    title: "Senior Software Engineer",
    company: "ACV Auctions · ACV MAX",
    bullets: [
      "Contributed to the NestJS microservice layer behind a Vue/GraphQL platform, building features end to end across the UI, GraphQL, and domain services backed by SQL Server, Postgres, MongoDB, and third-party APIs.",
      "Closed an unauthenticated path to production data on customer-facing dealer widgets by moving embed traffic behind an authenticated proxy and gateway, with no downtime.",
      "Authored an ADR standardizing error handling and logging across NestJS, C#, Python, and Go services, adopted by multiple teams.",
      "Co-led the Vue 2 → Vue 3 / Vuetify 3 migration of a ~300-component application, clearing the Vuetify breakages that were its biggest blocker and moving state from a hand-rolled GraphQL client to Pinia.",
      "Moved frontend deploys off Vercel onto AWS and Jenkins, saving ~$80K/yr, and rebuilt branch previews as a shared library that other teams adopted.",
      "Set up browser monitoring twice — New Relic, then Datadog — and linked browser sessions to backend traces, so a slow page could be traced to the API behind it.",
      "Designed the alert for the outage nobody saw: after a 2-hour GraphQL outage passed every existing check, replaced brittle threshold alerts with one self-learning anomaly monitor on GraphQL trace volume.",
      "Led Claude Code adoption on the team and wrote the conventions it follows; the team uses a PR-description skill I built.",
    ],
  },
  {
    start: "2020",
    end: "2022",
    place: "Remote",
    title: "Lead Frontend Developer",
    company: "Hudson MX",
    bullets: [
      "Led a small frontend team owning six Angular apps and one React app for an ad-tech platform.",
      "Introduced an Nx monorepo with a microfrontend architecture, and managed a private npm registry of shared UI components consumed by 30+ apps and microfrontends across the company.",
      "Established a UI design system on Storybook in partnership with the UX team.",
    ],
  },
  {
    start: "2017",
    end: "2019",
    place: "Atlanta, GA",
    title: "Lead Developer",
    company: "Dick's Sporting Goods · Blue Sombrero",
    bullets: [
      "Led the frontend architectural redesign of the flagship registration product in TypeScript and Angular, with a microfrontend strategy built on Angular Elements.",
      "Built RESTful backend services and controllers in ASP.NET MVC, using C# and Entity Framework against SQL Server — roughly a third of the role alongside the frontend architecture.",
      "Introduced Jest and Cypress, and established mandatory pre-merge build, lint and test checks.",
    ],
  },
];

export const EARLIER =
  "Earlier: Sr. Engineer at Preparis, technical lead for fourteen developers on an ASP.NET healthcare platform at Morneau Shepell, a WCF-to-REST migration at Kabbage, and back through HotDocs, Centrafuse and FNC to 2001.";

export type SkillBand = {
  label: string;
  note?: string;
  tone: "deep" | "gold" | "plain" | "dashed";
  items: string[];
  caption?: string;
};

export const SKILLS: SkillBand[] = [
  {
    label: "Frontend",
    note: "Years of production work",
    tone: "deep",
    items: [
      "Vue 2 / 3",
      "Angular",
      "TypeScript",
      "Pinia",
      "NgRx (Redux)",
      "GraphQL",
      "Design systems",
    ],
  },
  {
    label: "Backend",
    note: "Years of production work",
    tone: "deep",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      ".NET / C#",
      "REST",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Firestore",
    ],
    caption:
      "A decade of .NET and SQL Server first. Then four years contributing to the NestJS services behind the Vue app, mostly by building features end to end.",
  },
  {
    label: "AI-assisted engineering",
    note: "Set the team's approach",
    tone: "gold",
    items: [
      "Claude Code",
      "Skill / plugin dev",
      "LLM review in CI",
      "AI guardrails",
    ],
    caption:
      "Codified the conventions the tools follow, so speed never cost the team quality or consistency — and kept the judgment to know when to override them.",
  },
  {
    label: "Platform",
    tone: "plain",
    items: [
      "Jenkins / Vercel",
      "GitHub Actions",
      "AWS",
      "Docker",
      "Kubernetes (Helm)",
      "Vite",
      "Datadog RUM",
      "Vitest / Jest",
      "Playwright / Cypress",
      "Storybook / Chromatic",
    ],
  },
  {
    label: "Recent, not deep",
    tone: "dashed",
    items: ["React", "Next.js", "Server Components", "Server Actions", "Svelte"],
    caption:
      "Dashed for the same reason the projects are. This site is the React one; Cairn is the Svelte one. Both are recent.",
  },
];
