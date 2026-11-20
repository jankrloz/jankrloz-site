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
    'Designing enterprise AI gateways, MLOps platforms, AI-native engineering lifecycles, internal developer platforms, and AWS Well-Architected cloud foundations for regulated financial systems.',
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
        title: 'Enterprise AI Gateway & Dynamic LLM Router',
        categoryLabel: 'AI Platforms · Production',
        meta: 'KrakenD · Multi-Provider',
        summary:
          'Designed and led an enterprise AI Gateway on KrakenD with centralized governance, security, rate limiting, and cost optimization—including a Dynamic LLM Router automatically selecting model tiers across Anthropic, OpenAI, Google Vertex AI, and AWS Bedrock.',
        outcome:
          'Unified enterprise LLM access, routing policies, and multi-provider cost control.',
      },
      {
        index: '02',
        title: 'MLOps Platform (Model-as-a-Service)',
        categoryLabel: 'MLOps · Internal Platform',
        meta: 'Feature Store · Evals',
        summary:
          'Co-led architecture and cross-team delivery with Platform and ML engineering for an internal MLOps Platform (Model-as-a-Service), defining golden-path rails for in-house training, inference deployment, a Feature Store, observability, and automated evaluations.',
        outcome:
          'Accelerated production ML delivery with standardized governance and evaluation gates.',
      },
      {
        index: '03',
        title: 'AI-DLC Harness, Skills & MCP',
        categoryLabel: 'AI Engineering · Inner-Source',
        meta: '8 Phases · 18 Principles',
        summary:
          'Created an inner-source AI development lifecycle (AI-DLC) harness spanning 8 deterministic phases, reusable Skills, and MCP integrations across Claude Code, Cursor, and agentic IDEs with adversarial multi-agent design review.',
        outcome:
          'Embedded deterministic architecture gates and C4 enforcement into AI-assisted delivery.',
      },
      {
        index: '04',
        title: 'Internal Developer Platform (IDP) & CI/CD',
        categoryLabel: 'Platform Engineering · Architecture',
        meta: '5-Plane Topology',
        summary:
          'Designed a five-plane self-service IDP, CI/CD standardization, and graph-based software catalog unifying service ownership, maturity scorecards, workflow orchestration, and audit readiness.',
        outcome:
          'Aligned engineering velocity with continuous compliance and service discoverability.',
      },
      {
        index: '05',
        title: 'Architecture Center of Excellence & Tech Radar',
        categoryLabel: 'Enterprise Architecture · Governance',
        meta: 'ADRs · RFCs · Standards',
        summary:
          'Founded and matured the Architecture Center of Excellence—stewarding the Enterprise Tech Radar, architecture governance, collaborative reviews, ADRs/RFCs, monolith decomposition, API federation, and unified identity.',
        outcome:
          'Institutionalized durable technical standards across core banking and platform domains.',
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
        title: 'Multi-Region Banking DRP & Regulatory Isolation',
        categoryLabel: 'Cloud Resilience · Banking Compliance',
        meta: '3 Regions · RTO 2–6m',
        summary:
          'Evaluated warm-standby production footprints across hundreds of serverless functions, data stores, and 200+ TB of storage; architected active-active 3-region DRP and PCI-DSS / CNBV / SOX isolation boundaries under AWS Well-Architected standards.',
        outcome:
          'Engineered for 2–6 minute recovery time objectives under strict banking oversight.',
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
        title: 'Vanguard — Supply-Chain Security Orchestrator',
        categoryLabel: 'Open Source · Security',
        meta: 'OSV.dev · Polyglot CLI',
        summary:
          'Created an open-source polyglot CLI and package fleet orchestrator integrating real-time vulnerability intelligence across package ecosystems with privilege-safe execution.',
        outcome: 'Published at github.com/jankrloz/vanguard.',
      },
      {
        index: '10',
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
