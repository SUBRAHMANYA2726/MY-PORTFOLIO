// Verified project data — reviewed against https://github.com/SUBRAHMANYA2726
// Live URLs are only set when the repository `homepage` field is non-empty.
// Missing screenshots / live deployments are left null with a TODO — never faked.
// Social/contact URLs live in src/data/socialLinks.ts — no literals duplicated here.

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  screenshot: string | null;
  statusNote?: string;
};

// --- Featured (verified 2026-11-09) ---
export const featuredProjects: Project[] = [
  {
    title: "CHITRALAYA AI",
    tagline: "Agentic video production",
    description:
      "A Python video-production codebase built on the OpenMontage agentic workflow documented in the repository: research, scripting, asset generation, editing and final composition. Includes pipeline definitions, render tooling and a local storyboard server.",
    tech: ["Python", "FastAPI", "Pillow", "NumPy", "Remotion", "Bun / Node"],
    github: "https://github.com/SUBRAHMANYA2726/CHITRALAYA_AI",
    live: null,
    screenshot: null,
  },
  {
    title: "SAARATHIVAANI AI",
    tagline: "AI calling assistant",
    description:
      "Inbound-call assistant (Vocalis AI): Twilio voice number, Ollama model replies with AI disclosure, Firestore call transcripts and summaries, Google Sign-In, PWA and Capacitor shells. Live calls require the provider credentials documented in the README.",
    tech: ["TypeScript", "React", "Vite", "Node.js", "Firebase", "Twilio", "Ollama", "Capacitor"],
    github: "https://github.com/SUBRAHMANYA2726/SaarathiVaani_AI",
    live: null,
    screenshot: null,
  },
];

// --- Solo projects ---
// Trekgoo (image-assets only), FARMAURA and standalone PCOS/PCOD not located — not listed.
// Disease Prediction is the verified CodeAlpha heart-disease (UCI Cleveland) project — not PCOS.
export const soloProjects: Project[] = [
  {
    title: "SceneSense AI",
    tagline: "Scene classification",
    description:
      "Image-classification project (AIML internship workflow) that classifies Intel Image Classification images into six categories — buildings, forest, glacier, mountain, sea and street — using transfer learning with EfficientNetB0.",
    tech: ["Python", "TensorFlow", "EfficientNetB0", "Scikit-learn", "FastAPI", "Kaggle"],
    github: "https://github.com/SUBRAHMANYA2726/SCENESENSE-AI-AIML-PROJECT-",
    live: null,
    screenshot: null,
  },
  {
    title: "SkillBridge AI",
    tagline: "Career guidance platform",
    description:
      "Full-stack platform connecting students with internships, jobs, hackathons and certifications, with personalised AI career guidance. React + Vite frontend and Node / Express / MongoDB backend with Firebase Admin.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "MongoDB", "Firebase"],
    github: "https://github.com/SUBRAHMANYA2726/SKILL-BRIDGE-AI-",
    live: null,
    screenshot: null,
    statusNote: "Verified implementation behind the “Job Recommendation System” brief.",
  },
  {
    title: "Disease Prediction",
    tagline: "Clinical ML (CodeAlpha)",
    description:
      "Heart-disease prediction from the UCI Cleveland dataset with a full preprocessing pipeline — imputation, outlier capping, scaling, SMOTE balancing — and a benchmark of Logistic Regression, Random Forest, SVM, XGBoost, LightGBM, CatBoost and SHAP analysis.",
    tech: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "SHAP", "Jupyter"],
    github: "https://github.com/SUBRAHMANYA2726/CodeAlpha_DiseasePrediction",
    live: null,
    screenshot: null,
  },
  {
    title: "PhishGuard AI",
    tagline: "Phishing detection",
    description:
      "Phishing-email detection platform combining TF-IDF text features with handcrafted URL engineering, multiple Scikit-learn classifiers and explainable risk breakdowns, served through a React / Vite security dashboard.",
    tech: ["Python", "Flask", "Scikit-learn", "React", "Vite", "Docker"],
    github: "https://github.com/SUBRAHMANYA2726/phishguard-ai",
    live: null,
    screenshot: null,
  },
];

// --- Additional (smaller, below featured + solo) ---
export const additionalProjects: Project[] = [
  {
    title: "KRISHICONNECT",
    tagline: "Agricultural intelligence for Indian farmers",
    description:
      "Farmer onboarding and profile (district, taluk, village, farm area, irrigation, primary crops), a personal dashboard, mandi-price browsing with crop / district / market filters, profit and fertilizer calculators, saved reports, settings and English–Kannada language support, behind Firebase authentication and protected routes. Mandi prices use the repository’s clearly labelled sample dataset — the UI links to the official Agmarknet portal.",
    tech: ["React 19", "Vite", "Tailwind CSS", "Firebase", "React Router"],
    github: "https://github.com/SUBRAHMANYA2726/SOFTWARE_KRISHI-CONNECT-",
    live: null,
    screenshot: null,
  },
  {
    title: "Multilingual Phishing Hub",
    tagline: "Threat intelligence (Shildex)",
    description:
      "Mobile-friendly React app for detecting phishing, spam and suspicious links/messages in real time: risk assessment, file upload scanning, warning modals, history dashboard and Firebase storage, with a backend analysis API.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Axios"],
    github: "https://github.com/SUBRAHMANYA2726/Multilingual-Phishing-Threat-Intelligence-Hub",
    live: null,
    screenshot: null,
  },
];

export const partnershipProjects: Project[] = [
  {
    title: "Emstrap App",
    tagline: "Mobile Application",
    description:
      "Partnership project — mobile application. Product details, stack and links to be confirmed from the partner repository.",
    tech: ["TODO — verify from partner repo"],
    github: null,
    live: null,
    screenshot: null,
    statusNote: "PARTNERSHIP PROJECT",
  },
  {
    title: "Emstrap Web",
    tagline: "Web Application",
    description:
      "Partnership project — web application. Product details, stack and links to be confirmed from the partner repository.",
    tech: ["TODO — verify from partner repo"],
    github: null,
    live: null,
    screenshot: null,
    statusNote: "PARTNERSHIP PROJECT",
  },
];
