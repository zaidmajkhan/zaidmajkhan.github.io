import siteConfig from "./siteConfig.js";

/**
 * Director destinations — portfolio sections as star-map nodes.
 * Positions approximate Destiny Destinations composition (screen %).
 */
export const DESTINATIONS = [
  {
    id: "origin",
    label: "ORIGIN",
    subtitle: "Who I am",
    x: 50,
    y: 34,
    size: "lg",
    texture: "/assets/planets/portal.png",
    glow: "#c9a0ff",
    featured: true,
    status: "ACTIVE",
  },
  {
    id: "labs",
    label: "LABS",
    subtitle: "Research & roles",
    x: 22,
    y: 22,
    size: "md",
    texture: "/assets/planets/ice.png",
    glow: "#9ec9ff",
    status: "4.0 GPA",
  },
  {
    id: "systems",
    label: "SYSTEMS",
    subtitle: "Projects & builds",
    x: 76,
    y: 24,
    size: "md",
    texture: "/assets/planets/verdant.png",
    glow: "#7dffb2",
    status: "SHIPPED",
  },
  {
    id: "triumph",
    label: "TRIUMPH",
    subtitle: "Proof & credentials",
    x: 18,
    y: 52,
    size: "sm",
    texture: "/assets/planets/amber.png",
    glow: "#ffc56e",
    status: "TOP 6%",
  },
  {
    id: "signal",
    label: "SIGNAL",
    subtitle: "Get in touch",
    x: 84,
    y: 50,
    size: "md",
    texture: "/assets/planets/cyan.png",
    glow: "#7ed0ef",
    status: "OPEN",
  },
  {
    id: "dossier",
    label: "DOSSIER",
    subtitle: "Resume PDF",
    x: 50,
    y: 48,
    size: "sm",
    texture: "/assets/planets/steel.png",
    glow: "#c5d4e8",
    status: "PDF",
    external: siteConfig.resumeUrl,
    download: siteConfig.resumeDownloadName,
  },
];

export const DIRECTOR_NAV = [
  { id: "resume", label: "RESUME", href: siteConfig.resumeUrl, download: true },
  { id: "labs", label: "LABS", destination: "labs" },
  { id: "systems", label: "SYSTEMS", destination: "systems" },
  { id: "map", label: "MAP", destination: null },
  { id: "destinations", label: "DESTINATIONS", destination: null, active: true },
];

export const QUICK_HEXES = [
  { id: "origin", label: "Origin", color: "#b48cff", icon: "core" },
  { id: "labs", label: "Labs", color: "#9ec9ff", icon: "orbit" },
  { id: "systems", label: "Systems", color: "#7dffb2", icon: "hex" },
  { id: "triumph", label: "Triumph", color: "#ffc56e", icon: "mark" },
  { id: "signal", label: "Signal", color: "#7ed0ef", icon: "pulse" },
];

export const ABOUT = {
  title: "Systems that lose people deserve better engineering.",
  body: "I grew up watching my family navigate a healthcare system that felt designed to lose people in the cracks. An engineer looks at that and sees fixable problems — and the toolkit is software as much as operations: Python agents, human-centered research, and pharmacy-floor process design.",
  currently: [
    ["Studying", "ISEN @ Texas A&M", "4.0 GPA · Dec 2028"],
    ["Researching", "ACE Lab + HFCS Lab", "HCD interviews · haptic teleoperation (Dr. Ferris)"],
    ["Building", "AI Lead Follow-Up Agent", "Python, Claude API, Gmail API · GitHub Actions CI/CD"],
    ["Working", "CPhT · CVS Health", "200+ patients/day · 47% wait reduction"],
    ["Also", "Handshake AI · Project Lighthouse", "Finance prompts + grading rubrics for frontier models"],
  ],
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "Claude API",
    "CI/CD",
    "Prompt engineering",
    "Process improvement",
    "Root cause analysis",
    "Operations leadership",
  ],
};

export const EXPERIENCE = [
  {
    date: "Jul 2026 — Now",
    type: "Research",
    title: "ACE Lab, Texas A&M — Undergraduate Researcher (Dr. Sasangohar, Dr. Smith)",
    body: "CITI human-subjects + Huron IRB certified. Structured parent/caregiver interviews for a parenting coaching app — qualitative methods and human-centered design on usability and engagement.",
  },
  {
    date: "Jul 2026 — Now",
    type: "Research",
    title: "Human Factors & Cognitive Systems Lab — Research Volunteer (Dr. Ferris)",
    body: "Developing a multi-year research plan with Dr. Thomas Ferris, focused on the lab’s haptic teleoperation project for remote medical examination.",
  },
  {
    date: "Mar 2025 — Now",
    type: "Healthcare",
    title: "CVS Health — Certified Pharmacy Technician",
    body: "RxConnect for 200+ patients daily. Peak-hour task sequencing rewrite — 47% wait reduction. Licensed CPhT (PTCB) + Texas RPhT.",
  },
  {
    date: "Jun 2026 — Now",
    type: "AI",
    title: "Handshake AI — Fellow, Project Lighthouse",
    body: "Write persona-grounded finance prompts that stress-test frontier models against synthetic financial workspace data. Build and score grading rubrics for accuracy and reasoning quality.",
  },
  {
    date: "2025 — Dec 2028",
    type: "Education",
    title: "Texas A&M — B.S. Industrial & Systems Engineering",
    body: "4.0 GPA. Coursework includes CSCE 111, ISEN 210, STAT 211, Java. Sole winner of the TAMU Engineering Academies Resume Challenge across 13 Academy campuses.",
  },
  {
    date: "2021 — 2026",
    type: "Operations",
    title: "IACC Sunday School — Operations Team Leader / Teacher",
    body: "Facility and classroom ops for 600+ students weekly. Teacher setup redesign — 73% time cut, adopted program-wide.",
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "AI Lead Follow-Up Agent",
    tag: "Shipped",
    cat: "Python · Claude · Gmail",
    body: "Autonomous outreach: JSON leads → Claude-personalized campaigns → Gmail OAuth. Dry-run mode, sent-tracking dedup, rate limiting, structured errors, GitHub Actions CI/CD.",
    href: "https://github.com/zaidmajkhan/lead-followup-agent",
  },
  {
    num: "02",
    title: "ACE Lab + HFCS Lab",
    tag: "Active",
    cat: "Human-centered design",
    body: "Parent/caregiver interviews for a coaching app (CITI/IRB). Multi-year plan with Dr. Ferris on haptic teleoperation for remote medical exam.",
    href: null,
  },
  {
    num: "03",
    title: "CVS Pharmacy Workflow",
    tag: "Live",
    cat: "Process",
    body: "High-volume RxConnect ops for 200+ patients daily. Peak-hour sequencing rewrite drove a 47% wait-time cut — measured from floor data.",
    href: null,
  },
  {
    num: "04",
    title: "Handshake AI · Project Lighthouse",
    tag: "Active",
    cat: "Model evaluation",
    body: "Frontier model evaluation: persona-grounded finance prompts and grading rubrics for accuracy and reasoning quality.",
    href: null,
  },
  {
    num: "05",
    title: "Wharton Investment Comp",
    tag: "Top 6%",
    cat: "Strategy",
    body: "Investment Club · Founders Classical Academy · ~4,000 teams worldwide.",
    href: null,
  },
];

export const CREDENTIALS = [
  {
    year: "Jul '26",
    title: "CITI / Huron IRB",
    badge: "Certified",
    desc: "Human subjects training for ACE Lab research.",
  },
  {
    year: "Oct '25",
    title: "CPhT (PTCB) + Texas RPhT",
    badge: "Licensed",
    desc: "National PTCB exam and Texas State Board of Pharmacy registration.",
  },
  {
    year: "Aug '26",
    title: "Nebius Agentic AI Builder",
    badge: "Certified",
    desc: "Agentic AI builder certification.",
  },
  {
    year: "Fall '25",
    title: "Engineering Academies Resume Challenge",
    badge: "Winner",
    desc: "Sole winner across all 13 TAMU Engineering Academy campuses.",
  },
  {
    year: "Jun '26",
    title: "Handshake AI — Project Lighthouse Fellow",
    badge: "Active",
    desc: "Frontier model evaluation: finance prompts and grading rubrics.",
  },
  {
    year: "2023–25",
    title: "Wharton Global Investment Competition",
    badge: "Top 6%",
    desc: "Investment Club · Founders Classical Academy · ~4,000 teams.",
  },
  {
    year: "2024–25",
    title: "Senior Thesis — The Rise and Fall of Empires",
    badge: "Published",
    desc: "40-page interdisciplinary analysis of systemic collapse.",
  },
];

export const STATS = [
  { val: "4.0", label: "GPA" },
  { val: "47%", label: "Wait ↓" },
  { val: "CPhT", label: "Licensed" },
];
