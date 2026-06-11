import { Project, Experience, SkillGroup, StatItem } from './types';

export const portfolioData = {
  name: "Nasywa Raihanah",
  shortName: "NR",
  role: "Data Scientist, AI/ML Engineer, & Lifelong learner",
  email: "nasywaraihanah@gmail.com",
  linkedin: "linkedin.com/in/nasywaraihanah",
  github: "github.com/nasyw4",
  aboutHeading: "Fresh Perspective, Deep Tech",
  aboutText: "As a fresh Informatics Engineering graduate with a strong specialization in Artificial Intelligence, my goal is to bridge the gap between complex data architectures and human-centric solutions. With internship experience building AI-powered workflows, automated topic generation pipelines, and distributed data streams at Nolimit Teknologi Indonesia and PT Telkom Indonesia, I thrive on building intelligent products that translate raw data into actionable insights.",
  profileImage: new URL('../assets/profile.jpg', import.meta.url).href,
  cvUrl: new URL('../assets/Nasywa Raihanah_DS-ML-AI Engineer.pdf', import.meta.url).href,
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || "",
};

export const stats: StatItem[] = [
  { value: "95%", label: "Accuracy in NLP" },
  { value: "1.2M", label: "Data Points Processed" }
];

export const skillGroups: SkillGroup[] = [
  {
    id: "ai_ml",
    name: "AI & Machine Learning",
    icon: "Brain",
    tags: ["NLP", "Prompt Engineering", "LLM Integration", "BERTopic", "Deep Learning", "Computer Vision"],
    borderColorClass: "hover:border-primary/40",
    gradientClass: "from-primary to-transparent"
  },
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    tags: ["Python", "SQL", "TypeScript"],
    borderColorClass: "hover:border-tertiary/40",
    gradientClass: "from-tertiary to-transparent"
  },
  {
    id: "frameworks",
    name: "Full-Stack & APIs",
    icon: "Layers",
    tags: ["FastAPI", "Next.js", "React", "Tailwind CSS", "Node.js", "REST APIs"],
    borderColorClass: "hover:border-secondary/40",
    gradientClass: "from-secondary to-transparent"
  },
  {
    id: "data_cloud",
    name: "Databases & Tools",
    icon: "Database",
    tags: ["PostgreSQL", "SQLite", "Elasticsearch", "Apache Kafka", "GitHub", "Streamlit", "Tableau"],
    borderColorClass: "hover:border-red-400/40",
    gradientClass: "from-red-400 to-transparent"
  }
];

export const experiences: Experience[] = [
  {
    id: "nolimit",
    company: "Nolimit Teknologi Indonesia",
    role: "Data Scientist Intern",
    period: "Nov 2025 – Mei 2026",
    points: [
      "Developed and deployed automated NER & Whostation inference pipelines, processing 50K–1M+ social and online media records through REST APIs and Kafka-based messaging, eliminating manual inference workflows and supporting production monitoring systems.",
      "Fine-tuned ModernBERT and IndoBERT models for text classification on 9K+ labeled samples, generated data using OpenAI LLM, and developed automated training and inference pipelines.",
      "Contributed to the development of a full-stack media monitoring PoC using Next.js, TypeScript, FastAPI, and Python, processing 12K+ social and online media records and generating 900+ discussion topics through automated topic generation pipelines.",
      "Built a batch-processing enrichment system and monitoring dashboard for emotion and sentiment inference, automating processing across datasets ranging from thousands to over 1M records while leveraging PostgreSQL for data storage and pipeline management.",
      "Developed an agentic reporting system leveraging Elasticsearch, BERTopic, and prompt-engineered OpenAI workflows to automatically generate 9–10 key issues per report, reducing report preparation time from hours to minutes."
    ]
  },
  {
    id: "telkom_1",
    company: "PT Telkom Indonesia",
    role: "Data Scientist Intern",
    period: "Oct 2024 – Mar 2025",
    points: [
      "Extracted, transformed, and cleaned data using SQL and Python to support business intelligence reporting and business performance analysis.",
      "Built dynamic dashboards for both sales teams and internal stakeholders, streamlining product performance tracking and enhancing strategic decision-making.",
      "Assisted in developing forecasting models using Python to support business prediction and trend analysis."
    ]
  },
  {
    id: "telkom_2",
    company: "PT Telkom Indonesia",
    role: "Data Scientist Intern (Practical Work)",
    period: "August 2024",
    points: [
      "Developed an automated video-to-text extraction pipeline using OpenAI Whisper models, converting educational video content into structured text to support downstream NLP and analytics workflows."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "agentic_reporting",
    title: "Agentic Custom Reporting",
    description: "AI-powered reporting platform that transforms large-scale social and online media data into executive-ready reports, reducing report preparation time from hours to minutes through automated topic discovery and insight generation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO4iKd8H9CAZjXnLLgEpaHmoAOQO-bks1GoMmdy8XSIfavsblz2JQxQUTPoyG-ka6nauGdAW3ixAyXkuvA8wi9GRLgFMv-8DODkGSTVRYZX9Wez_cd1D-u4biDApd9eGUqvFI9fHYHbGqGvLoba3Po0jyLdhZ6yeiP62T6UBLYqO-Qm-jg4DKq4QyArCaBJnJPtvR6Z1jaZJ3ia3eyJBGEH8CnbZnT8f5RanaE9zHA8q_lkuATcCkUFpes578y-ipoOmRbc050AEA",
    tags: ["Python", "LangChain"],
    status: "In Development"
  },
  {
    id: "runner_batch_processing",
    title: "Runner Batch Processing",
    description: "Built a batch-processing enrichment system that automated emotion and sentiment inference on large-scale social and online media datasets, integrating data retrieval, model inference, PostgreSQL storage, and monitoring dashboards to eliminate manual processing workflows.",
    image: new URL('../assets/runner.png', import.meta.url).href,
    tags: ["Python", "FastAPI", "PostgreSQL"],
    demoUrl: "https://runner-batch-processing-enrichment.vercel.app/",
    githubUrl: "https://github.com/nasyw4/runner-batch-processing-enrichment-dashboard"
  },
  {
    id: "media_monitoring_poc",
    title: "Media Monitoring Tools - Capturing Perception (PoC)",
    description: "AI-powered media monitoring system that transforms 12K+ social and online media records into 900+ automatically generated discussion topics, enabling sentiment analysis, trend exploration, and decision intelligence.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRRE_dDBmA8GN6Y67PLAkr5Y3eJaUsmni3CI2HbHwkNpg_UkhEksCl0SLyUbra5cq0Z_aTIefo7mCRTRcDKDlJjDiSp_TEMaXibCAlLYvj5gEWzl2JV7FLJ1POJuboXbyUr6_C92fqWvjCsUR7-zMJu0oxmPbAAZTt6el7-Q1pgp56tnmNPGOP8D1jI37kOmmtV14RNLSXP2mIAGUfSxjK25yjuZ5YrLhxql32P9TIuxM0T9s1mAvR-8MGEOlsP2ZO01wR_FsO_tY",
    tags: ["Next.js", "FastAPI", "PoC"],
    status: "In Development"
  }
];
