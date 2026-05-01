export const profile = {
  name: "Lina Zulaikah",
  age: 26,
  location: "Istanbul, Türkiye",
  email: "Linazulaikah.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/linazulaikah/",
  tagline:
    "Where computer science meets systems thinking and real-world impact.",
  summary:
    "Focused on technology and turning data into meaningful insights. Currently pursuing a Master's in Computer Science at Istanbul Technical University, with experience across software development, ERP systems, AI research, and project management.",
  status: "Master's at Istanbul Technical University · Open to research collaborations",
  languages: ["English", "Turkish (C1)", "Bahasa"],
};

export type Publication = {
  title: string;
  venue: "IEEE" | "UOK" | "JIPI";
  year: number;
  summary: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    title:
      "Malaria Diagnosis Based on Microscopic Images Using Random Forest and Explainable AI in Infrastructure-Limited Areas",
    venue: "UOK",
    year: 2025,
    summary:
      "Random Forest classifier with explainable AI for malaria detection — designed for low-resource clinical settings.",
    tags: ["Computer Vision", "XAI", "Healthcare"],
  },
  {
    title:
      "Implementation of Atrous Convolution for Cloud Segmentation in Grayscale & RGB images from Landsat 8",
    venue: "IEEE",
    year: 2024,
    summary:
      "Atrous convolution applied to Landsat 8 satellite imagery for accurate cloud segmentation across spectral bands.",
    tags: ["Deep Learning", "Remote Sensing", "Segmentation"],
  },
  {
    title: "Designing Cybernetic Bloom Methodology (CBM) for Iterative Method Conceptual",
    venue: "IEEE",
    year: 2024,
    summary:
      "A new iterative methodology framework — Cybernetic Bloom — for conceptual design of adaptive systems.",
    tags: ["Methodology", "Systems Design"],
  },
  {
    title:
      "Evaluation of the success of SAP implementation during the COVID-19 pandemic using the UTAUT 3 model at PT. KAI",
    venue: "JIPI",
    year: 2023,
    summary:
      "UTAUT 3 model applied to evaluate SAP adoption at PT. KAI under pandemic operating conditions.",
    tags: ["ERP", "SAP", "Adoption Research"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "PT. Telkom Indonesia",
    role: "Researcher Intern",
    period: "Jan 2022 – Jun 2022",
    location: "Jakarta, Indonesia",
    bullets: [
      "Analyzed AI-powered pest detection in coffee plantations using computer vision.",
      "Led usability testing with A/B tests, user feedback, and heuristic evaluation.",
      "Researched agricultural technology to drive innovation.",
    ],
  },
  {
    company: "ERP Laboratory",
    role: "Practicum Assistant",
    period: "Sep 2021 – Jan 2022",
    location: "Bandung, Indonesia",
    bullets: [
      "Taught SAP SCM 500, SAP AC010, and SAP 01 modules.",
      "Prepared application platforms for 2019 Information Systems students.",
    ],
  },
  {
    company: "PT. Sigma Metrasys Solution",
    role: "SAP MM Intern",
    period: "Jul 2021 – Sep 2021",
    location: "Jakarta, Indonesia",
    bullets: [
      "Implemented SAP MM for Solution Material Management, optimizing procurement workflows.",
      "Troubleshot SAP MM issues and built dashboard solutions for consultants.",
    ],
  },
  {
    company: "PT. Solusi Finansialku Indonesia",
    role: "System Analyst Intern",
    period: "Mar 2021 – Sep 2021",
    location: "Bandung, Indonesia",
    bullets: [
      "Developed and integrated internal systems, ensuring seamless data flow.",
      "Analyzed system designs using SQL, UML, and BPMN for process optimization.",
    ],
  },
  {
    company: "KenalTiongkok",
    role: "Project Management Intern",
    period: "Feb 2021 – Jun 2021",
    location: "Jakarta, Indonesia",
    bullets: [
      "Planned and evaluated projects based on KPI metrics.",
      "Led collaborative programs with multiple communities using Trello & Google Workspace.",
    ],
  },
  {
    company: "Bright Network",
    role: "Consulting Experience Intern",
    period: "Jul 2020 – Aug 2020",
    location: "Online, United Kingdom",
    bullets: [
      "Supported business development and marketing in strategic planning and job evaluation.",
    ],
  },
];

export type Project = {
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "AI Pest Detection in Coffee Plantations",
    problem:
      "Smallholder coffee farms lose yield to pests; manual inspection doesn't scale.",
    approach:
      "Computer vision pipeline trained on field imagery, paired with usability testing and heuristic evaluation.",
    outcome:
      "Validated approach for early detection; informed Telkom's agritech research direction.",
    stack: ["Computer Vision", "Python", "A/B Testing", "Usability Research"],
  },
  {
    title: "Malaria Diagnosis with Random Forest + XAI",
    problem:
      "Low-resource clinics need accurate, interpretable diagnosis from microscopy images.",
    approach:
      "Random Forest classifier with explainable AI overlays so clinicians can trust and audit predictions.",
    outcome: "Published in UOK Journal 2025; designed for infrastructure-limited deployment.",
    stack: ["Random Forest", "Explainable AI", "Image Processing"],
  },
  {
    title: "Cloud Segmentation on Landsat 8",
    problem:
      "Cloud cover degrades downstream remote-sensing tasks across grayscale and RGB bands.",
    approach:
      "Atrous (dilated) convolution architecture to capture multi-scale context in satellite imagery.",
    outcome: "Published in IEEE 2024; improved segmentation across mixed-spectral inputs.",
    stack: ["Deep Learning", "Atrous Convolution", "Landsat 8"],
  },
  {
    title: "SAP MM Implementation at Sigma Metrasys",
    problem:
      "Procurement workflows were fragmented; consultants needed clearer operational visibility.",
    approach:
      "Implemented SAP Material Management module and built consultant-facing dashboards.",
    outcome: "Optimized procurement processes and resolved recurring SAP MM issues.",
    stack: ["SAP MM", "ERP", "Dashboarding"],
  },
];

export type Award = {
  title: string;
  year: number;
};

export const awards: Award[] = [
  { title: "1st Winner — Youth Tech Begin, Medeniyet Technopark", year: 2025 },
  { title: "2nd Winner — T3 AI Hackathon, Teknofest", year: 2024 },
  { title: "Türkiye Bursları Scholarship Awardee", year: 2023 },
  { title: "Nama Foundation Joint Scholarship Awardee", year: 2023 },
  { title: "1st Winner — National Web Application Competition Invfest 6.0", year: 2021 },
  { title: "1st Runner Up Outstanding Student, FRI — Telkom University", year: 2021 },
];

export const stats = [
  { value: 4, suffix: "", label: "Publications" },
  { value: 2, suffix: "", label: "Hackathon wins" },
  { value: 40, suffix: "+", label: "Speaking sessions" },
  { value: 6, suffix: "", label: "Internships" },
];

export const education = [
  {
    school: "Istanbul Technical University",
    degree: "Master of Computer Science",
    period: "2023 – 2026",
    location: "Istanbul, Türkiye",
  },
  {
    school: "Telkom University",
    degree: "Bachelor of Information Systems · CGPA 3.64",
    period: "2018 – 2022",
    location: "Bandung, Indonesia",
  },
];

export const skills = {
  technical: [
    "Computer Vision",
    "Machine Learning",
    "Random Forest",
    "Deep Learning",
    "Explainable AI",
    "SAP MM",
    "SAP BC400",
    "SAP AC010",
    "SAP SCM500",
    "SAP 01 Fundamental",
    "SQL",
    "UML",
    "BPMN",
    "System Analysis",
    "Project Management (KPI / Trello)",
  ],
  certifications: [
    { name: "Turkish Language C1", year: "2024" },
    { name: "IELTS", year: "2023 – 2025" },
    { name: "SAP BC 400", year: "2021" },
    { name: "SAP AC 010", year: "2021" },
    { name: "SAP SCM 500", year: "2020" },
    { name: "SAP 01 Fundamental", year: "2019" },
  ],
};

export const community = [
  {
    org: "Bergerakbelajar.id",
    role: "Co-Founder",
    period: "2021 – 2023",
    detail:
      "Program execution, community engagement, content management, and data-driven social media strategy.",
  },
  {
    org: "Kejar Mimpi Bandung",
    role: "Head of Program",
    period: "2021 – 2022",
    detail:
      "Led program planning and execution; evaluated and optimized programs using data analysis and feedback.",
  },
  {
    org: "ERP Laboratory",
    role: "Staff of Project",
    period: "2019 – 2022",
    detail:
      "Maintained practicum platforms (E-Learning CATS); delivered ERP solutions on client-based projects.",
  },
  {
    org: "Young Cabinet of BEM KEMA Telkom University",
    role: "Secretary",
    period: "2019 – 2020",
    detail:
      "Organized administrative needs, prepared activity proposals, and produced final reports.",
  },
];

export const speakingHighlights = [
  "40+ speaking sessions on IT and personal development",
  "Judge of 10+ essay competitions",
  "Indonesian Delegate — Paris International Conferences (2022)",
  "Finalist — National Leadership Forum (2019)",
];
