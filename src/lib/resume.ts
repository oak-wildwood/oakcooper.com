/** Content from the 2026 resume, trimmed for reading on screen. */

export const PROFILE = {
  name: "Oak Cooper",
  title: "Senior Fullstack Engineer",
  email: "oak@oakcooper.com",
  linkedin: "https://linkedin.com/in/oakcooper",
  github: "https://github.com/oak-wildwood",
  resume: "/oak-cooper-resume-2026.pdf",
  available: true,
  claim:
    "Senior fullstack engineer — I notice the friction other people don't, until it's gone. Twenty-five years, from .NET backends to Angular and Vue. The last four went into a ~300-component Vue app and the NestJS/GraphQL services behind it: I built features across both, co-led its move to Vue 3, and set how the team used AI without letting speed cost quality.",
} as const;

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
      "Helped move data-access logic out of GraphQL resolvers into dedicated domain microservices — database-specific services first, then domain-focused ones.",
      "Authored an ADR standardizing error handling and logging across NestJS, C#, Python, and Go services, adopted by multiple teams.",
      "Co-led the Vue 2 → Vue 3 / Vuetify 3 migration of a ~300-component application, clearing the Vuetify breakages that were its biggest blocker and moving state from a hand-rolled GraphQL client to Pinia.",
      "Moved the frontend deployment pipeline off Vercel and GitHub Actions onto AWS and Jenkins, rebuilding branch previews from scratch — saving ~$80K/yr.",
      "Built frontend browser observability from scratch, twice — New Relic, then Datadog RUM — adding anomaly detection to catch the silent failures threshold alerts miss.",
      "Cut local test-suite runtime in half and memory use by 66%, then encoded the fixes into an automated pre-PR review step.",
      "Engineered the guardrails that keep AI-generated code trustworthy, and ran coding and systems-design interviews as the team scaled across the US and India.",
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
