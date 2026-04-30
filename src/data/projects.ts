export interface Project {
    id: string;
    title: string;
    codename: string;
    status: "deployed" | "archived" | "concept";
    classification: "flagship" | "standard" | "utility" | "experimental";
    problem: string;
    systemDesign: string;
    architecture: string;
    tools: string[];
    skills: string[];
    whatILearned: string;
    liveUrl?: string;
    githubUrl?: string;
    color: string;
    icon: string;
    skillsRole: string;
}

export const projects: Project[] = [
    {
        id: "forensic-lens",
        title: "ForensicLens — Digital Forensics & SIEM Platform",
        codename: "CASE-FL1",
        status: "deployed",
        classification: "flagship",
        problem:
            "Digital forensic investigations lack structured frameworks for log analysis, event correlation, and attack timeline reconstruction. Most tools detect attacks but fail to explain attacker behavior or model end-to-end investigation workflows used in Security Operations Centers.",
        systemDesign:
            "Multi-source log ingestion pipeline processing evidence from multiple streams. Features MITRE ATT&CK TTP mapping, attack timeline reconstruction, and SHA-256 integrity validation.",
        architecture:
            "Full-stack Flask application with SQLite. Implements a SIEM-style correlation interface enabling threat analysis across multiple concurrent investigations, plus automated PDF forensic investigation report generation (ReportLab).",
        tools: ["Python", "Flask", "SQLite", "Chart.js", "ReportLab", "MITRE ATT&CK"],
        skills: [
            "Log Ingestion",
            "MITRE ATT&CK Mapping",
            "SHA-256 Validation",
            "SIEM",
            "Product Lifecycle",
        ],
        whatILearned:
            "Owned full product lifecycle from roadmap to production with a 4-person cross-functional team. Reduced manual investigation time by ~70% by tracking KPIs post-launch and iterating on reporting module based on user feedback.",
        liveUrl: "https://forensiclens.vercel.app/",
        githubUrl: "https://github.com/mishu1507/ForensicLens",
        color: "#2F80ED",
        icon: "search",
        skillsRole: "Cybersecurity / PM - Investigation Systems",
    },
    {
        id: "hexpose",
        title: "Hexpose — Universal Malware Scanner",
        codename: "CASE-HX1",
        status: "concept",
        classification: "flagship",
        problem:
            "Client-side malware scanning tools are often domain-specific or lack real-time universal static analysis embedded within the browser.",
        systemDesign:
            "Universal Chrome Extension that works across all websites. Scans any website for client-side malicious code in real-time. Features alert design and noise filtering for non-technical users.",
        architecture:
            "Manifest V3 extension with static analysis engine embedded directly in the browser extension. Translates security research into UX decisions for non-technical users.",
        tools: ["JavaScript", "Chrome Extension APIs", "Static Analysis"],
        skills: [
            "Static Analysis",
            "Browser Extensions",
            "UX Design",
            "Product Strategy",
        ],
        whatILearned:
            "Mapped every existing browser security tool to document feature gaps and build a product strategy around what they all missed. Focused on translating security research into real-time UX feedback.",
        githubUrl: "https://github.com/mishu1507",
        color: "#FF5C8A",
        icon: "shieldAlert",
        skillsRole: "Cybersecurity - Client-Side Analysis",
    },
    {
        id: "veritas",
        title: "VERITAS — Multi-Agent Misinformation Detection",
        codename: "CASE-VR1",
        status: "deployed",
        classification: "experimental",
        problem:
            "Identifying misinformation online is a complex process requiring diverse verification techniques that single agents struggle to comprehensively handle.",
        systemDesign:
            "Multi-agent architecture where each agent handles a distinct verification task. Agents hand off analysis results to each other with defined inputs/outputs.",
        architecture:
            "Python backend integrated with LLM APIs for NLP-based claim extraction and cross-verification. Output structured for non-technical end users.",
        tools: ["Python", "Multi-Agent Systems", "LLM APIs", "NLP"],
        skills: [
            "AI Systems",
            "Multi-Agent Architectures",
            "NLP",
            "Hackathon Constraints",
        ],
        whatILearned:
            "Defined product strategy and agent architecture as a spec first, then implemented it under hackathon constraints. Shipped a working, documented product for SunHacks 2026.",
        githubUrl: "https://github.com/mishu1507",
        color: "#FFD400",
        icon: "bot",
        skillsRole: "AI / Multi-Agent Systems - Hackathon Shipped",
    },
    {
        id: "threatscope",
        title: "ThreatScope — Attack Path Visualization",
        codename: "CASE-TS1",
        status: "concept",
        classification: "standard",
        problem:
            "Security logs lack visual attack path reconstruction, making it difficult for analysts to understand how an attacker moved through a system.",
        systemDesign:
            "Converts SIEM log streams into interactive adversary movement graphs. Models attacker tactics and techniques (TTPs) and visualizes lateral movement and privilege escalation.",
        architecture:
            "Graph-based visualization engine combining React and D3.js with a Python backend and graph databases for multi-stage intrusion chain analysis.",
        tools: ["React", "D3.js", "Python", "Graph Databases"],
        skills: [
            "Graph Visualization",
            "Attack Modeling",
            "TTP Mapping",
            "Threat Intelligence",
        ],
        whatILearned:
            "Engineered an adversary movement visualization engine turning raw log data into interactive attack graphs. Found direct applications to attack surface management.",
        githubUrl: "https://github.com/mishu1507",
        color: "#00B894",
        icon: "target",
        skillsRole: "Visualization / Engineering",
    },
    {
        id: "mernverseos",
        title: "MERNVerseOS",
        codename: "CASE-MV1",
        status: "deployed",
        classification: "flagship",
        problem:
            "Developers struggle to understand distributed systems and how frontend, backend, and infrastructure components interact as a connected ecosystem in MERN.",
        systemDesign:
            "Simulation platform demonstrating interactions between frontend, backend, and database in MERN architecture with API request visualization and live state tracing.",
        architecture:
            "React and Node.js stack simulating OS functionalities and system boundaries. Focuses on UX design centered around explaining distributed workflows to a first-timer.",
        tools: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
        skills: [
            "Full-Stack Development",
            "Educational Engineering",
            "UX Design",
            "Systems Architecture",
        ],
        whatILearned:
            "Product came from a real gap found through user conversations. Focused UX design on one question: how do you explain distributed systems to a first-timer? Iterated until it worked.",
        liveUrl: "https://mernverseos.vercel.app/",
        githubUrl: "https://github.com/mishu1507/MernVerseOS",
        color: "#A855F7",
        icon: "monitor",
        skillsRole: "Developer Education - Systems Architecture",
    },
    {
        id: "brainsparkz",
        title: "BrainSparkz",
        codename: "CASE-BS1",
        status: "deployed",
        classification: "standard",
        problem:
            "Traditional learning platforms focus on content delivery rather than cognitive development and adaptive reinforcement.",
        systemDesign:
            "Adaptive learning platform implementing spaced repetition and cognitive reinforcement models. Backend tracks engagement metrics to adjust content delivery per user.",
        architecture:
            "Flask and SQLite backend powering behavior pattern modeling for personalized content and persistent learning paths.",
        tools: ["Python", "Flask", "SQLite", "JavaScript"],
        skills: [
            "Adaptive Learning",
            "Behavior Modeling",
            "Funnel Analysis",
            "Backend Development",
        ],
        whatILearned:
            "Mapped full customer journey before building. Integrated backend tracking of engagement metrics—acting as a built-in retention/funnel analysis system.",
        githubUrl: "https://github.com/mishu1507",
        color: "#AAAAAA",
        icon: "brain",
        skillsRole: "Learning Systems - Backend Architecture",
    },
    {
        id: "qoneqt-testathon",
        title: "Qoneqt Testathon",
        codename: "CASE-QNT",
        status: "archived",
        classification: "flagship",
        problem:
            "Qoneqt required authorized Web and Mobile security research to identify real-world vulnerabilities before production launch.",
        systemDesign:
            "Conducted authorized penetration testing across web and Android attack surfaces on Qoneqt social platform and ChuckEET app.",
        architecture:
            "Used Burp Suite, JADX, and MobSF for dynamic/static analysis. Identified OTP rate limiting failure, hardcoded dev URLs, AES-GCM nonce reuse, unencrypted SQLite keys, and KYC bypass issues.",
        tools: ["Burp Suite", "JADX", "MobSF", "DevTools", "OWASP Top 10"],
        skills: [
            "Penetration Testing",
            "Mobile Security",
            "Cryptography",
            "Vulnerability Research",
        ],
        whatILearned:
            "Found 5 confirmed vulnerabilities across authentication, cryptography, and storage. Delivered structured reports with CVSS scoring and PoC evidence.",
        githubUrl: "https://github.com/mishu1507",
        color: "#F97316",
        icon: "shield",
        skillsRole: "Authorized Bug Bounty / Penetration Testing",
    },
];

export const projectSkillsSummary =
    "My projects range from deployed digital forensic platforms and authorized penetration testing to full-stack educational platforms and experimental multi-agent AI systems.";

export const projectPattern = {
    flow: "Complex System → Structured Model → Interactive Experience",
    categories: {
        "Investigation Systems": ["ForensicLens V2", "ThreatScope"],
        "Vulnerability Research": ["Qoneqt Testathon", "Hexpose"],
        "Multi-Agent AI": ["VERITAS"],
        "Learning Engineering": ["MERNVerseOS", "BrainSparkz"],
    },
};
