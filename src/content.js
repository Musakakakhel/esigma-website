export const BRAND = "Esigma";

export const ADDRESS = "3300 Dallas Parkway, Plano, TX 75093 USA";

export const EMAIL = "info@esigmatech.com";

// See GOOGLE_SHEETS_SETUP.md in the project root for setup details.
export const GOOGLE_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbySA1ug_fJNO9UlSERUcftle4SwVrGk_jt2yLNmVMFe_8NEUUCJvI36xFY2XzjatvVcpQ/exec";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", dropdown: "services" },
  { label: "Technology", to: "/technology", dropdown: "technology" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
];

export const IMAGES = {
  aboutBanner:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  aboutSecondary:
    "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1200&auto=format&fit=crop",
  servicesBanner:
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop",
  technologyBanner:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  whyUsBanner:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
  contactBanner:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  homeServicesTeaser:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  homeTechnologyTeaser:
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
  homeWhyUsTeaser:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
};

export const STATS = [
  { value: "100+", label: "Network Audits" },
  { value: "200+", label: "Telecom Experts" },
  { value: "60+", label: "Operators & Vendors" },
  { value: "20+", label: "Countries Covered" },
  { value: "2G-5G", label: "Multi-Technology Experience" },
];

export const INDUSTRIES = {
  heading: "Industries We Serve",
  items: [
    "Telecom",
    "Private Wireless",
    "Enterprise",
    "Government",
    "Airports",
    "Healthcare",
    "Education",
    "Hospitality",
  ],
};

export const HERO = {
  heading: "Why Choose Esigma",
  intro:
    "Esigma supports telecom operators, equipment vendors and infrastructure partners with experienced resources, intelligent automation and flexible delivery models. We help customers improve network performance, accelerate deployment and reduce operational costs.",
  highlights: ["Experienced Resources", "Intelligent Automation", "Flexible Delivery Models"],
  ctaPrimary: "Contact Us",
  ctaSecondary: "Request a Consultation",
};

export const ABOUT = {
  eyebrow: "About Us",
  heading: "Your End-to-End Telecom Partner",
  paragraphs: [
    "Esigma combines technical expertise, global resources and automation platforms to support the complete telecom network lifecycle.",
    "We work alongside our customers from project planning through final delivery, ensuring that KPIs, SLAs, quality requirements and site acceptance objectives are achieved.",
  ],
  commitmentHeading: "Our Commitment",
  commitments: [
    "Transparency",
    "Innovation",
    "Operational efficiency",
    "Quality-focused delivery",
    "Cost optimization",
    "Long-term partnership",
  ],
};

export const SERVICES_SECTION = {
  heading: "Services",
};

export const SERVICES = [
  {
    icon: "radio-tower",
    title: "Network Planning and RF Design",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop",
    description: "Comprehensive planning and design services for mobile and wireless networks.",
    items: [
      "Network planning and dimensioning",
      "RF design and optimization",
      "Coverage and capacity planning",
      "Nominal site planning",
      "Propagation model tuning",
      "DAS and small-cell design",
      "Network database management",
    ],
  },
  {
    icon: "activity",
    title: "Network Audit and Optimization",
    image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?q=80&w=1600&auto=format&fit=crop",
    description:
      "Improve network quality, coverage, capacity and customer experience through detailed performance analysis.",
    items: [
      "End-to-end network audits",
      "KPI and configuration analysis",
      "Root cause analysis",
      "Coverage and interference optimization",
      "Capacity management",
      "Special-event optimization",
      "Customer complaint investigation",
    ],
  },
  {
    icon: "route",
    title: "Drive Test and Benchmarking",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600&auto=format&fit=crop",
    description:
      "Field testing services for network validation, acceptance and competitive performance assessment.",
    items: [
      "Single-site verification",
      "Cluster and random drive testing",
      "Indoor and outdoor walk testing",
      "Competitive benchmarking",
      "LTE and 5G SA/NSA testing",
      "Feature and device testing",
      "Automated post-processing and reporting",
    ],
  },
  {
    icon: "clipboard-check",
    title: "Site Surveys and Field Audits",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    description: "Digitized technical surveys supported by web and mobile applications.",
    items: [
      "Site and coordinate verification",
      "Power and backhaul validation",
      "Equipment and structural audits",
      "Site photography",
      "Checklist-based inspections",
      "Offline field data collection",
      "Automated reporting and approvals",
    ],
  },
  {
    icon: "link-2",
    title: "Network Integration and Assurance",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    description:
      "Technical support for deployment, integration, commissioning and operational assurance.",
    items: [
      "Network setup and integration",
      "Commissioning and acceptance",
      "Change-request management",
      "Field operations",
      "Front-office and back-office support",
      "Network assurance",
      "Service fulfillment",
    ],
  },
  {
    icon: "monitor",
    title: "Managed Services and NOC Operations",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Flexible operational support designed to improve service availability and network efficiency.",
    items: [
      "24/7 network monitoring",
      "Incident and fault management",
      "Corrective and planned maintenance",
      "Configuration management",
      "Performance monitoring",
      "Trouble-ticket management",
      "Vendor and field-team coordination",
      "Operational reporting",
    ],
  },
  {
    icon: "building-2",
    title: "In-Building, DAS and Small Cells",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
    description:
      "Planning, deployment, testing and optimization solutions for indoor and high-density environments.",
    items: [
      "Indoor coverage assessment",
      "DAS planning and optimization",
      "Small-cell design",
      "Venue and special-event testing",
      "Walk testing",
      "Capacity and interference analysis",
      "Acceptance and closeout reporting",
    ],
  },
  {
    icon: "headphones",
    title: "MCPTT and PTT Performance Testing",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop",
    description: "Specialized performance testing for mission-critical push-to-talk services.",
    items: [
      "PTT access-time testing",
      "Mouth-to-ear latency measurement",
      "Direct Mode testing",
      "Device-to-device testing",
      "POLQA voice-quality measurement",
      "RF-condition validation",
      "Performance reporting",
    ],
  },
  {
    icon: "users",
    title: "Consulting and Expert Resources",
    image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1600&auto=format&fit=crop",
    description: "Access to experienced telecom professionals for project-based or long-term requirements.",
    items: [
      "Subject-matter experts",
      "Technical consulting",
      "Project and program management",
      "RF, core, transmission and IP resources",
      "Staff augmentation",
      "Turnkey project teams",
      "Global resource mobilization",
    ],
  },
  {
    icon: "graduation-cap",
    title: "Learning and Knowledge Services",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop",
    description: "Customized training and capability-development programs.",
    items: [
      "Instructor-led training",
      "Web-based learning",
      "Competency assessment",
      "Technical workshops",
      "Managed learning programs",
      "Knowledge-transfer sessions",
    ],
  },
];

export const TECHNOLOGY_SECTION = {
  heading: "Technology Solutions",
};

export const TECHNOLOGY = [
  {
    icon: "route",
    title: "NetField360 Workflow Management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description:
      "Esigma's flagship field data intelligence and automation platform for wireless networks, converting raw field data into structured, per-test insights that support planning, optimization, acceptance and compliance workflows.",
    items: [
      "AI-based route planning",
      "Grid-based testing and assignment",
      "Automated validation and pass/fail classification",
      "Multi-technology support (5G NR, LTE, UMTS)",
      "Real-time KPI monitoring and vehicle tracking",
      "Automated log uploads and sanity checks",
      "Automated reporting",
      "Reduced operational cost",
    ],
  },
  {
    icon: "map-pin",
    title: "Site Survey Platform",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop",
    description:
      "A map-based audit and field-survey system combining an interactive web dashboard with an offline-capable mobile application.",
    items: [
      "Work-order management",
      "Field-team assignment",
      "Digital checklists",
      "Photo and document collection",
      "Offline surveys",
      "Live communication",
      "Approval workflows",
      "Executive reporting",
    ],
  },
  {
    icon: "settings",
    title: "Rollout Workflow Management",
    image: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?q=80&w=1600&auto=format&fit=crop",
    description:
      "A unified, intelligent platform engineered to orchestrate end-to-end network rollout operations, from workflow initiation to final SLA reporting, across multi-vendor, multi-network environments.",
    items: [
      "Multi-vendor, multi-network management",
      "Milestone tracking and SLA monitoring",
      "Geographical site visualization",
      "Smart workflow engine with automated escalation",
      "BoM and inventory management with SAP integration",
      "Milestone-linked invoice automation",
      "Change management workflows",
      "Real-time dashboards and reporting",
    ],
  },
  {
    icon: "smartphone",
    title: "Smartphone-Based Drive and Walk Testing",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
    description: "A cable-free testing solution that enables automated field testing through smartphones.",
    items: [
      "Remote test control",
      "Script and cell-file distribution",
      "Band, PCI and technology locking",
      "No cables or external battery required",
      "Automatic log upload",
      "Real-time go/no-go decisions",
      "Automated post-processing",
      "Customized report generation",
    ],
  },
];

export const WHY_US_SECTION = {
  heading: "Why Esigma",
};

export const WHY_US = [
  {
    icon: "users",
    title: "Experienced Resources",
    description: "Access to qualified telecom professionals with multi-technology and multi-vendor experience.",
  },
  {
    icon: "globe",
    title: "Global Delivery",
    description: "Rapid mobilization of local and international resources across multiple geographical regions.",
  },
  {
    icon: "zap",
    title: "Automation-Driven",
    description: "Digital platforms and automated workflows improve accuracy, visibility and delivery speed.",
  },
  {
    icon: "trending-up",
    title: "Value-Focused",
    description: "Cost-effective solutions designed to improve operational efficiency without compromising quality.",
  },
  {
    icon: "shield-check",
    title: "End-to-End Support",
    description: "Support from initial planning and implementation through acceptance, optimization and operations.",
  },
  {
    icon: "target",
    title: "Flexible Engagement",
    description:
      "Delivery models aligned with each customer's operational, technical and commercial requirements.",
  },
];

export const DELIVERY_MODELS = {
  heading: "Delivery Models",
  intro: "Esigma offers flexible engagement options:",
  items: [
    "Scope-of-work delivery",
    "Time and material",
    "Turnkey projects",
    "Staff augmentation",
    "Managed services",
    "Business process outsourcing",
    "Partnership-based delivery",
    "Joint solution development",
  ],
};

export const BENEFITS = {
  heading: "Benefits",
  intro: "Partnering with Esigma helps customers:",
  items: [
    "Improve network performance",
    "Increase customer satisfaction",
    "Reduce operational costs",
    "Accelerate deployment",
    "Improve project visibility",
    "Access local and global expertise",
    "Strengthen KPI and SLA governance",
    "Share knowledge and best practices",
  ],
};

export const CTA = {
  heading: "Ready to Improve Your Network Operations?",
  paragraph:
    "Partner with Esigma for telecom engineering, automation, field services and managed operations.",
  buttons: ["Contact Us", "Request a Consultation", "Schedule a Demonstration"],
};
