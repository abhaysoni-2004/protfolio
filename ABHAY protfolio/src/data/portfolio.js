export const profile = {
  name: "ABHAY VERMA",
  title: "Data Analyst | Machine Learning Engineer",
  tagline:
    "Building intelligent analytics systems, machine learning products, and AI workflows that turn data into measurable business impact.",
  resumeUrl: "https://drive.google.com/file/d/1LgFWILZ8gkD6hNNPJyJ2oxLpL1PScIMk/view?usp=drivesdk",
  linkedinUrl: "https://www.linkedin.com/in/abhay-verma-018292322/",
  githubUrl: "https://github.com/abhayverma2811",
  email: "abhayverma2811@gmail.com",
  phone: "+91 7408961125",
  location: "Rae Bareli, India"
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const aboutStats = [
  { label: "Projects Completed", value: "48+", accent: "from-cyan-400 to-emerald-300" },
  { label: "Certifications", value: "10+", accent: "from-violet-400 to-rose-300" },
  { label: "Technologies", value: "25+", accent: "from-amber-300 to-cyan-300" },
  { label: "Experience", value: "2+ Years", accent: "from-emerald-300 to-violet-300" }
];

export const skillGroups = [
  {
    category: "Programming Languages",
    accent: "cyan",
    skills: [
      { name: "Python", level: 94 },
      { name: "SQL", level: 91 },
      { name: "JavaScript", level: 82 }
    ]
  },
  {
    category: "Data Analytics",
    accent: "emerald",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 84 },
      { name: "Excel", level: 92 },
      { name: "Data Visualization", level: 88 },
      { name: "Statistics", level: 86 }
    ]
  },
  {
    category: "Machine Learning",
    accent: "violet",
    skills: [
      { name: "Scikit-Learn", level: 90 },
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 78 },
      { name: "XGBoost", level: 86 },
      { name: "NLP", level: 84 }
    ]
  },
  {
    category: "AI Technologies",
    accent: "rose",
    skills: [
      { name: "Generative AI", level: 88 },
      { name: "LLMs", level: 86 },
      { name: "LangChain", level: 82 },
      { name: "RAG", level: 84 },
      { name: "OpenAI APIs", level: 85 }
    ]
  },
  {
    category: "Tools & Platforms",
    accent: "amber",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 76 },
      { name: "Streamlit", level: 87 },
      { name: "VS Code", level: 92 }
    ]
  }
];

export const aiProjects = [
  {
    title: "Conversational RAG Knowledge Assistant",
    description:
      "An AI assistant that retrieves domain documents, grounds responses in context, and provides traceable answers for internal teams.",
    technologies: ["Python", "LangChain", "OpenAI APIs", "FAISS", "Streamlit"],
    features: ["Document ingestion pipeline", "Semantic search", "Source-aware answers", "Chat memory"],
    githubUrl: "https://github.com/abhayverma2811/rag-knowledge-assistant",
    demoUrl: "#"
  },
  {
    title: "AI Resume Screening Platform",
    description:
      "A smart screening workflow that ranks candidate profiles against role requirements using embeddings and explainable scorecards.",
    technologies: ["LLMs", "NLP", "FastAPI", "PostgreSQL", "Docker"],
    features: ["Resume parsing", "Skill gap analysis", "Bias-aware summaries", "Recruiter dashboard"],
    githubUrl: "https://github.com/abhayverma2811/ai-resume-screening",
    demoUrl: "#"
  },
  {
    title: "Customer Support Copilot",
    description:
      "A support intelligence tool that drafts replies, detects intent, and recommends next-best actions from historical tickets.",
    technologies: ["OpenAI APIs", "RAG", "Python", "Vector DB", "React"],
    features: ["Intent classification", "Draft generation", "Knowledge retrieval", "Sentiment scoring"],
    githubUrl: "https://github.com/abhayverma2811/customer-support-copilot",
    demoUrl: "#"
  },
  {
    title: "Financial Report Summarizer",
    description:
      "A generative AI workflow that turns long financial statements into concise analyst briefs and anomaly highlights.",
    technologies: ["Python", "LLMs", "Pandas", "Prompt Engineering", "Streamlit"],
    features: ["PDF extraction", "Executive summaries", "Metric detection", "Risk highlights"],
    githubUrl: "https://github.com/abhayverma2811/financial-report-summarizer",
    demoUrl: "#"
  },
  {
    title: "AI Code Review Assistant",
    description:
      "A developer productivity assistant that reviews pull requests, groups issues by risk, and suggests targeted fixes.",
    technologies: ["LLMs", "GitHub API", "Node.js", "TypeScript", "Docker"],
    features: ["Diff analysis", "Security hints", "Review summaries", "Repository context"],
    githubUrl: "https://github.com/abhayverma2811/ai-code-review-assistant",
    demoUrl: "#"
  },
  {
    title: "Personalized Learning Recommender",
    description:
      "A recommendation engine that builds adaptive learning paths from user goals, progress, and content similarity.",
    technologies: ["Python", "Embeddings", "Scikit-Learn", "RAG", "React"],
    features: ["Learner profiling", "Content clustering", "Path generation", "Progress insights"],
    githubUrl: "https://github.com/abhayverma2811/personalized-learning-recommender",
    demoUrl: "#"
  }
];

export const analyticsProjects = [
  {
    title: "Executive Sales Intelligence Dashboard",
    description:
      "A leadership dashboard tracking revenue, margin, territory performance, and product category trends.",
    dataset: "Retail sales transactions with customer, geography, product, and monthly revenue fields.",
    tools: ["Power BI", "DAX", "SQL", "Excel"],
    githubUrl: "https://github.com/abhayverma2811/executive-sales-intelligence",
    demoUrl: "#"
  },
  {
    title: "Customer Churn Analytics",
    description:
      "A churn monitoring workspace that identifies retention risks and segments customers by behavioral signals.",
    dataset: "Subscription customer events, plan metadata, support tickets, and payment history.",
    tools: ["Tableau", "Python", "SQL", "Statistics"],
    githubUrl: "https://github.com/abhayverma2811/customer-churn-analytics  ",
    demoUrl: "#"
  },
  {
    title: "Supply Chain Performance Hub",
    description:
      "An operations dashboard for shipment delays, vendor scorecards, inventory health, and fulfillment cycle time.",
    dataset: "Shipment logs, purchase orders, warehouse inventory, and supplier quality metrics.",
    tools: ["Power BI", "SQL", "Power Query", "Excel"],
    githubUrl: "https://github.com/abhayverma2811/supply-chain-performance-hub",
    demoUrl: "#"
  },
  {
    title: "Marketing Campaign ROI Dashboard",
    description:
      "A campaign analytics report comparing acquisition cost, conversion rate, channel ROI, and audience quality.",
    dataset: "Ad spend, campaign impressions, website conversions, and CRM opportunity records.",
    tools: ["Tableau", "Google Sheets", "SQL", "Data Visualization"],
    githubUrl: "https://github.com/abhayverma2811/marketing-campaign-roi-dashboard",
    demoUrl: "#"
  },
  {
    title: "Healthcare Operations Analytics",
    description:
      "A healthcare reporting solution for appointment demand, patient flow, department load, and service SLA metrics.",
    dataset: "Appointment schedules, patient demographics, department logs, and satisfaction scores.",
    tools: ["Power BI", "SQL", "Excel", "DAX"],
    githubUrl: "https://github.com/abhayverma2811/healthcare-operations-analytics",
    demoUrl: "#"
  },
  {
    title: "E-Commerce Funnel Explorer",
    description:
      "A conversion funnel analysis identifying drop-off points, repeat purchase drivers, and category performance.",
    dataset: "Clickstream events, checkout records, product catalog, and customer transaction history.",
    tools: ["Python", "Pandas", "Plotly", "Streamlit"],
    githubUrl: "https://github.com/abhayverma2811/e-commerce-funnel-explorer",
    demoUrl: "#"
  }
];

export const machineLearningProjects = [
  {
    title: "Credit Risk Prediction Model",
    accuracy: "92.4%",
    algorithms: ["XGBoost", "Random Forest", "Logistic Regression"],
    dataset: "Loan application records with income, credit score, debt ratio, and repayment labels.",
    problem:
      "Predict applicant default risk and surface explainable approval indicators for lending teams.",
    results: "Reduced false negatives through calibrated thresholding and feature importance analysis.",
    githubUrl: "https://github.com/abhayverma2811/credit-risk-prediction",
    demoUrl: "#"
  },
  {
    title: "Customer Churn Prediction",
    accuracy: "89.7%",
    algorithms: ["LightGBM", "XGBoost", "SVM"],
    dataset: "Telecom usage behavior, billing events, customer tenure, and service interaction history.",
    problem: "Identify high-risk customers before renewal windows and prioritize retention campaigns.",
    results: "Improved recall for high-value customers with segment-aware model evaluation.",
    githubUrl: "https://github.com/abhayverma2811/customer-churn-prediction",
    demoUrl: "#"
  },
  {
    title: "Sentiment Classification Engine",
    accuracy: "91.2%",
    algorithms: ["BERT", "TF-IDF", "Naive Bayes"],
    dataset: "Product reviews, social mentions, and support comments labeled by sentiment class.",
    problem: "Classify customer sentiment and route negative feedback into service recovery workflows.",
    results: "Captured nuanced negative sentiment with transformer-based embeddings.",
    githubUrl: "https://github.com/abhayverma2811/nlp-sentiment-analyzer",
    demoUrl: "#"
  },
  {
    title: "Demand Forecasting System",
    accuracy: "87.8%",
    algorithms: ["Prophet", "LSTM", "ARIMA"],
    dataset: "Weekly sales, promotions, seasonality markers, inventory levels, and holiday calendars.",
    problem: "Forecast demand across product categories to improve stock planning and campaign timing.",
    results: "Lowered forecast error using seasonal regressors and category-level model tuning.",
    githubUrl: "https://github.com/abhayverma2811/demand-forecasting-system",
    demoUrl: "#"
  },
  {
    title: "Fraud Detection Pipeline",
    accuracy: "94.1%",
    algorithms: ["Isolation Forest", "XGBoost", "Autoencoder"],
    dataset: "Payment transactions with merchant, device, geo, velocity, and chargeback labels.",
    problem: "Detect suspicious financial activity while keeping manual review volume manageable.",
    results: "Balanced precision and recall with anomaly scores and risk-based alert tiers.",
    githubUrl: "https://github.com/abhayverma2811/fraud-detection-pipeline",
    demoUrl: "#"
  },
  {
    title: "House Price Prediction",
    accuracy: "88.6%",
    algorithms: ["Gradient Boosting", "Random Forest", "Ridge Regression"],
    dataset: "Property attributes, location features, market history, and neighborhood indicators.",
    problem: "Estimate fair property values using structured real estate and locality signals.",
    results: "Improved model stability with feature scaling, outlier handling, and cross-validation.",
    githubUrl: "https://github.com/abhayverma2811/house-price-prediction ",
    demoUrl: "#"
  }
];

export const streamlitApps = [
  {
    title: "AI Document Q&A App",
    description: "Upload documents, ask natural-language questions, and receive grounded answers.",
    streamlitUrl: "https://share.streamlit.io/user/abhayverma2811-bit/ai-document-qa-app/main/app.py",
    githubUrl: "https://github.com/abhayverma2811/ai-document-qa-app"
  },
  {
    title: "Sales Forecasting Studio",
    description: "Interactive demand forecasting with scenario controls and forecast diagnostics.",
    streamlitUrl: "https://share.streamlit.io/user/abhayverma2811-bit/sales-forecasting-studio/main/app.py",
    githubUrl: "https://github.com/abhayverma2811/sales-forecasting-studio"
  },
  {
    title: "Customer Segmentation Lab",
    description: "Cluster customers, compare segments, and export campaign-ready audiences.",
    streamlitUrl: "https://share.streamlit.io/user/abhayverma2811-bit/customer-segmentation-lab/main/app.py",
    githubUrl: "https://github.com/abhayverma2811/customer-segmentation-lab"
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Analyze sentiment, keywords, and trends from reviews or support feedback.",
    streamlitUrl: "https://share.streamlit.io/user/abhayverma2811-bit/nlp-sentiment-analyzer/main/app.py",
    githubUrl: "https://github.com/abhayverma2811/nlp-sentiment-analyzer"
  },
  {
    title: "ML Model Comparator",
    description: "Train, evaluate, and compare multiple supervised learning models in one dashboard.",
    streamlitUrl: "https://share.streamlit.io/user/abhayverma2811-bit/ml-model-comparator/main/app.py",
    githubUrl: "https://github.com/abhayverma2811/ml-model-comparator"
  },
  {
    title: "Dashboard KPI Monitor",
    description: "Track business metrics with alerts, filters, and exportable performance snapshots.",
    streamlitUrl: "https://share.streamlit.io/user/abhayverma2811-bit/dashboard-kpi-monitor/main/app.py",
    githubUrl: "https://github.com/abhayverma2811/dashboard-kpi-monitor"
  }
];

export const certifications = [
  { name: "Certification Name 01", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 02", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 03", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 04", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 05", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 06", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 07", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 08", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 09", organization: "Issuing Organization", date: "Month YYYY", link: "#" },
  { name: "Certification Name 10", organization: "Issuing Organization", date: "Month YYYY", link: "#" }
];

export const education = [
  {
    degree: "Degree Name",
    institution: "University / College Name",
    duration: "Start Year - End Year",
    score: "CGPA / Percentage",
    subjects: ["Machine Learning", "Statistics", "Database Systems", "Data Mining"]
  },
  {
    degree: "Higher Secondary / Diploma",
    institution: "School / Institute Name",
    duration: "Start Year - End Year",
    score: "Percentage / Grade",
    subjects: ["Mathematics", "Computer Science", "Economics", "English"]
  }
];

export const experience = [
  {
    company: "Company Name",
    position: "Data Analyst Intern",
    duration: "Month YYYY - Month YYYY",
    responsibilities: [
      "Built KPI dashboards and automated weekly reporting workflows.",
      "Cleaned, modeled, and analyzed datasets for stakeholder decisions.",
      "Presented actionable insights using concise business narratives."
    ],
    technologies: ["Power BI", "SQL", "Excel", "Python"]
  },
  {
    company: "Company Name",
    position: "Machine Learning Engineer",
    duration: "Month YYYY - Present",
    responsibilities: [
      "Developed predictive models and validation pipelines for real-world datasets.",
      "Integrated AI workflows into lightweight web applications.",
      "Collaborated with product teams to translate business problems into ML systems."
    ],
    technologies: ["Python", "Scikit-Learn", "Streamlit", "Docker"]
  }
];

export const achievements = [
  { label: "AI Projects", value: 18, suffix: "+" },
  { label: "ML Projects", value: 16, suffix: "+" },
  { label: "Certifications", value: 10, suffix: "+" },
  { label: "GitHub Contributions", value: 1200, suffix: "+" }
];

export const repositoryShowcase = [
  { name: "rag-knowledge-assistant", description: "LLM app with retrieval-augmented generation.", language: "Python" },
  { name: "sales-dashboard-powerbi", description: "Executive analytics dashboard and DAX measures.", language: "DAX" },
  { name: "ml-model-lab", description: "Reusable ML training and comparison workflows.", language: "Python" }
];
