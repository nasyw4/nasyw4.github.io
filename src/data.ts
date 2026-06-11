import { Project, Experience, SkillGroup, StatItem } from './types';

export const portfolioData = {
  name: "Nasywa Raihanah",
  shortName: "NR",
  role: "AI & Machine Learning Engineer",
  email: "nasywaraihanah@gmail.com",
  linkedin: "linkedin.com/in/nasywaraihanah",
  github: "github.com/nasyw4",
  twitter: "twitter.com/nasywaraihanah",
  aboutHeading: "Fresh Perspective, Deep Tech",
  aboutText: "As a fresh graduate with a specialized focus on Artificial Intelligence, my vision is to bridge the gap between complex data architectures and human-centric solutions. My journey started with a fascination for how neural networks mimic cognitive processes, leading me to master end-to-end ML lifecycles.",
  profileImage: new URL('../assets/profile.jpg', import.meta.url).href,
  cvUrl: new URL('../assets/Nasywa Raihanah_DS-ML-AI Engineer.pdf', import.meta.url).href,
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
    tags: ["Python", "SQL"],
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
    title: "Agentic Reporting",
    description: "Automated insightful reports using multi-agent systems and LLMs for business intelligence. Created real-time pipelines that fetch metrics from multiple sources, compile summaries, and generate exportable dynamic documents.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO4iKd8H9CAZjXnLLgEpaHmoAOQO-bks1GoMmdy8XSIfavsblz2JQxQUTPoyG-ka6nauGdAW3ixAyXkuvA8wi9GRLgFMv-8DODkGSTVRYZX9Wez_cd1D-u4biDApd9eGUqvFI9fHYHbGqGvLoba3Po0jyLdhZ6yeiP62T6UBLYqO-Qm-jg4DKq4QyArCaBJnJPtvR6Z1jaZJ3ia3eyJBGEH8CnbZnT8f5RanaE9zHA8q_lkuATcCkUFpes578y-ipoOmRbc050AEA",
    tags: ["Python", "LangChain"]
  },
  {
    id: "media_monitoring",
    title: "Media Monitoring",
    description: "Real-time keyword tracking across social media platforms using distributed streaming. Powered by Apache Kafka pipelines and FastAPI backend designed for low latency retrieval and keyword anomaly detection.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRRE_dDBmA8GN6Y67PLAkr5Y3eJaUsmni3CI2HbHwkNpg_UkhEksCl0SLyUbra5cq0Z_aTIefo7mCRTRcDKDlJjDiSp_TEMaXibCAlLYvj5gEWzl2JV7FLJ1POJuboXbyUr6_C92fqWvjCsUR7-zMJu0oxmPbAAZTt6el7-Q1pgp56tnmNPGOP8D1jI37kOmmtV14RNLSXP2mIAGUfSxjK25yjuZ5YrLhxql32P9TIuxM0T9s1mAvR-8MGEOlsP2ZO01wR_FsO_tY",
    tags: ["Kafka", "FastAPI"],
    demoUrl: "https://runner-batch-processing-enrichment.vercel.app/",
    githubUrl: "https://github.com/nasyw4/runner-batch-processing-enrichment-dashboard"
  },
  {
    id: "contact_finder",
    title: "Contact Finder",
    description: "Scraping and analyzing public data to map professional networks and lead discovery. Built with highly parallelized Selenium instances and smart parsing modules that filter irrelevant profiles.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9fBlGsClhqYmbKMuvte6DpKibdwzQL1d9DicAUAHKnXRBkvBD-GcgbhFBaYRjPDuXW13JmqIXmuKBl_bThhDrdBhjDW_aTZItXoX50AW5zsyP8KH-Rfzsh2baURaA-k-ugoLakJIWy0MG82vJXp7Nz-kscnC1nU13oo74tOUM1SPnAwOZRc5XCLQecsO0ldTz6HgVDCQ-WxlusRY0MWi9CmteyH6TPKEwVZz9Z1m2MdlNkKv2Dd8FjTOVJb4ucxocHqb8TCacsTo",
    tags: ["Selenium", "NLP"]
  },
  {
    id: "sentiment_analysis",
    title: "Sentiment Analysis",
    description: "Highly accurate emotion classification for customer feedback using BERT transformers. Accomplishes 90%+ classification precision through tailored transfer learning layouts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjGR9tBWdl2IuQnBVhejZPDX-MRl3s0TdezIPeNnFOPSuIyPrG9EdOYMIYNpPOXfJJtiZ8lrWIK0F-BR31X84Xz9KnjsHcJndXyN9_2bmoTgo9dqGXwVOndrjqLVw-WkW1gDi7jW8RLnrp1uUBwCHhAlRB2Z8dVYC1nJ8r3XAgXGaa-lJFnu8XHFdr1jC7MhXkS4BmZDjaJZBYy-Hn9zxMfDRJQa_g6K6-nFkQhe7a8LjicdYjBPt-ObXIjYk_iv4-I2ZVMSPdm0c",
    tags: ["PyTorch", "BERT"]
  },
  {
    id: "travel_time",
    title: "Travel Time Prediction",
    description: "Predicting urban commute durations using historical GPS data and XGBoost models. Features map preprocessing algorithms that represent traffic networks as graph features.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL-uFE80AVwg6MzMuWNc9NXgiEZo-x7W7PFQ1NxRZMsIddlkjWUJoWFz39M8ocI_x6dD6afv2zJfxtfWrzqCipvT1Ni0RKHdPhhGwAarXwDteNX8XNwibo4ib-OCCeu6FymzggYmimBS52tiQVJvRGqajSaZ7aAxPMq87SsnNxit6I0eaKn5uWvYTkNYDzXok5x52lIJgvqecpZhaJEf_Lpq-Qq0giLjs-WLSkW1NWJMyr6ds4AbPzT61gsLWh3qmRaEH3AjnhB5s",
    tags: ["XGBoost", "Pandas"]
  },
  {
    id: "electricity_forecasting",
    title: "Electricity Forecasting",
    description: "Time-series forecasting for smart grid energy optimization using LSTM networks. Implemented stateful sequence-to-sequence cells that capture multi-frequency seasonality logs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj4BnYsacy_AFaftSmflrynbkJOThc9nDPXvuLIYU8XtbScExYjZl3-3G8Bx0NDh9fSSPiPP8wn59bDkMtyKpPVoTrLq_3Hl94btw5rsDN_P2LkkfDriJj8Q0Tdyo0zETbG75USENljCSInrnw3ADE1Ukck13KqSx2AwdjnfJZGVymU6kNVw3bhmywDjHox4CM529eiPxtxkQrlPs33dq7iCiYvsNyALJwqSM6yWx5GQh1BfQFj2oNS70UNNFsHoiFMQ_675qy1eU",
    tags: ["Keras", "TensorFlow"]
  }
];
