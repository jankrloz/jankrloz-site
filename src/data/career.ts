export interface PracticeItem {
  index: string;
  title: string;
  categoryLabel: string;
  meta: string;
  summary: string;
  outcome: string;
}

export interface PracticeCategory {
  roman: string;
  heading: string;
  scope: string;
  items: PracticeItem[];
}

export interface ChronologyItem {
  index: string;
  role: string;
  organization: string;
  tenure: string;
}

export interface CertificationItem {
  index: string;
  name: string;
  issuer: string;
  validity: string;
  credentialUrl: string;
}

export const PROFILE = {
  alias: 'jankrloz',
  displayName: 'JC Navarrete',
  fullName: 'Juan Carlos Navarrete',
  role: 'Head of Architecture · Konfío',
  location: 'Mexico City',
  email: 'jankrloz.navarrete@gmail.com',
  website: 'https://jankrloz.vercel.app',
  github: 'https://github.com/jankrloz',
  linkedin: 'https://www.linkedin.com/in/jankrloz/',
  cvPdf: '/JuanCarlosNavarrete_CV.pdf',
  cvHtml: '/cv/',
  thesis:
    '11+ years building enterprise AI gateways, MLOps platforms, AI-DLC workflows, and AWS Well-Architected cloud foundations. I lead engineering teams, cross-functional programs, and org-wide architecture strategy.',
  education: 'Computer Systems Engineering — IPN · ESCOM (2012–2016)',
} as const;

export const PRACTICE_CATEGORIES: PracticeCategory[] = [
  {
    roman: 'I',
    heading: 'AI, Platforms & Architecture',
    scope: 'AI-DLC · Internal Platforms · Architecture Center',
    items: [
      {
        index: '01',
        title: 'Enterprise AI Gateway and Dynamic LLM Router',
        categoryLabel: 'AI Platforms · Co-Led Cross-Team',
        meta: 'KrakenD · Multi-Provider',
        summary:
          'Defined and co-led cross-team implementation of a KrakenD AI Gateway with centralized governance, security, and cost controls. Built a Dynamic LLM Router that selects model tiers across Anthropic, OpenAI, Google Vertex AI, and AWS Bedrock.',
        outcome:
          'Unified enterprise LLM access, routing policies, and multi-provider cost control.',
      },
      {
        index: '02',
        title: 'MLOps Platform (Model-as-a-Service)',
        categoryLabel: 'MLOps · Co-Led Cross-Team',
        meta: 'Feature Store · Evals',
        summary:
          'Co-led cross-team design and implementation with Platform and ML teams for an internal MLOps Platform. Defined golden-path rails for in-house model training, inference deployment, a Feature Store, observability, and automated evaluations.',
        outcome:
          'Accelerated production ML delivery with standard governance and evaluation gates.',
      },
      {
        index: '03',
        title: 'AI-DLC Workflow, Skills, and MCP',
        categoryLabel: 'AI Engineering · Founded and Built',
        meta: '8 Phases · 18 Principles',
        summary:
          'Founded and built an inner-source AI development lifecycle (AI-DLC) workflow across 8 deterministic phases, reusable Skills, and MCP integrations for Claude Code, Cursor, and agentic IDEs, with multi-agent design review.',
        outcome:
          'Embedded deterministic architecture gates and C4 checks into AI-assisted delivery.',
      },
      {
        index: '04',
        title: 'IDP, Software Catalog, and Golden Paths',
        categoryLabel: 'Platform Engineering · Designed and Leading',
        meta: 'CMDB · Scorecards · CI/CD',
        summary:
          'Designed end-to-end and currently lead cross-team implementation of a unified CMDB, Software Catalog, and Maturity Scorecards platform. Defined and built initial Golden Paths, IDP foundations, internal CLI, CI/CD standards, Clean and Hexagonal workspace templates, and the Kafka Events SDK.',
        outcome:
          'Aligned self-service delivery with service ownership, scorecards, and audit readiness.',
      },
      {
        index: '05',
        title: 'Architecture Center of Excellence and Tech Radar',
        categoryLabel: 'Enterprise Architecture · Founded and Executed',
        meta: 'Standards · Companion · Governance',
        summary:
          'Founded and ran the Architecture Center of Excellence. Owned engineering Standards, ADRs, References, the Enterprise Tech Radar, the Architecture Companion learning program, core modernization architecture, and federated API and Integrations Gateway design.',
        outcome: 'Established collaborative architecture reviews and durable technical standards.',
      },
    ],
  },
  {
    roman: 'II',
    heading: 'Cloud Topology & Resilience',
    scope: 'Cloud · Disaster Recovery · Governance',
    items: [
      {
        index: '06',
        title: 'Multi-Account Cloud & DRP Discovery Catalog',
        categoryLabel: 'Cloud Governance · Production',
        meta: '25 days · 1M+ Edges',
        summary:
          'Architected and delivered an automated cloud topology and disaster recovery (DRP) discovery platform ingesting 9 discovery sources to map 15,800+ AWS resources, 1M+ dependency edges, and 420 production workloads.',
        outcome: 'Shipped in 25 calendar days vs. multi-quarter estimate (~90% SDLC compression).',
      },
      {
        index: '07',
        title: 'PCI Strategy & Multi-Region DRP Strategy',
        categoryLabel: 'Cloud Resilience · Strategy & Decisions',
        meta: 'PCI-DSS · 3 Regions · Criticality',
        summary:
          'Defined PCI architectural strategy and AWS Well-Architected isolation boundaries; contributed to DRP strategy, region-homologation decisions, multi-region data/service replication model, and workload criticality tiers (200+ TB across three regions).',
        outcome: 'Established regulatory readiness and clear multi-region replication governance.',
      },
      {
        index: '08',
        title: 'AWS Well-Architected & IaC Governance',
        categoryLabel: 'Cloud Infrastructure · Enterprise Scale',
        meta: '20+ AWS Accounts',
        summary:
          'Defined layered infrastructure-as-code standards, CI/CD guardrails, and AWS Well-Architected baselines across 20+ AWS accounts to enforce account isolation, security, and repeatable delivery.',
        outcome: 'Established consistent cloud governance across product and platform engineering.',
      },
    ],
  },
  {
    roman: 'III',
    heading: 'Open Source & Public Speaking',
    scope: 'Security Tooling · Industry Showcase',
    items: [
      {
        index: '09',
        title: 'harness-control: AI Coding Control Plane',
        categoryLabel: 'Open Source · AI Tooling',
        meta: 'TypeScript · Tauri v2 · 100% Local',
        summary:
          'Built a 100% local control plane across Desktop, Web, TUI, and CLI to inspect AI coding skills, primitives, sessions, and token counts for Claude Code, Cursor, Codex, and Gemini CLI, with package-manager delegated updates.',
        outcome: 'Published at github.com/jankrloz/harness-control.',
      },
      {
        index: '10',
        title: 'Vanguard: Supply-Chain Security Orchestrator',
        categoryLabel: 'Open Source · Security',
        meta: 'OSV.dev · Polyglot CLI',
        summary:
          'Built an open-source polyglot CLI and package fleet orchestrator that checks real-time OSV.dev vulnerability data across package ecosystems with privilege-safe execution.',
        outcome: 'Published at github.com/jankrloz/vanguard.',
      },
      {
        index: '11',
        title: 'AWS Summit Mexico City 2024',
        categoryLabel: 'Public Speaking · Live Demo',
        meta: 'Featured Showcase',
        summary:
          'Speaker and featured live demo author presenting enterprise AI-assisted software architecture, automated code refactoring, and developer productivity patterns.',
        outcome: 'Demonstrated production-grade agentic engineering workflows on stage.',
      },
    ],
  },
];

export const CHRONOLOGY: ChronologyItem[] = [
  {
    index: '01',
    role: 'Head of Architecture',
    organization: 'Konfío',
    tenure: 'Apr 2026 — Present',
  },
  {
    index: '02',
    role: 'Lead Solutions Architect',
    organization: 'Konfío',
    tenure: 'May 2024 — Apr 2026',
  },
  {
    index: '03',
    role: 'Solutions Architect',
    organization: 'Konfío',
    tenure: 'May 2022 — May 2024',
  },
  {
    index: '04',
    role: 'Senior Software Engineer / Tech Lead',
    organization: 'Konfío',
    tenure: '2019 — Apr 2022',
  },
  {
    index: '05',
    role: 'Full-Stack & Front-End Developer',
    organization: 'Dada Room · Deli & Go · Petdate · Renka',
    tenure: '2015 — Oct 2018',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    index: '01',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services Training and Certification',
    validity: 'Jun 2021 — Jun 2024',
    credentialUrl: 'https://www.credly.com/go/lTeyPh92R5byvb4yME96rg',
  },
  {
    index: '02',
    name: 'Notion Advanced Quiz',
    issuer: 'Notion (Skilljar)',
    validity: '2026',
    credentialUrl: 'https://verify.skilljar.com/c/zr2eziwenj8t',
  },
];
