import type {
  ProfileData,
  NavLink,
  ExperienceData,
  ProjectData,
  SkillsData,
  AboutData,
  EducationData,
  CertificationData,
  ContactData,
} from './types';

export const profile: ProfileData = {
  name: 'Radhika Bhargava',
  role: 'AI & Robotics Engineer',
  subRole: 'Software Developer',
  tagline: 'Building practical software systems across backend, AI, and intelligent applications.',
  supporting:
    'Computer Science & Engineering student specializing in AI & Robotics at VIT Chennai, interested in software development, backend engineering, artificial intelligence, and intelligent systems.',
  location: 'Chennai, India',
  github: 'https://github.com/radhika-dev-23',
  githubHandle: 'radhika-dev-23',
  linkedin: 'https://linkedin.com/in/radhika-bhargava-brs1399',
  email: 'radhikabhargava.dev@gmail.com',
  resumeUrl: '#contact',
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const experiences: ExperienceData[] = [
  {
    company: 'Motherson Group',
    role: 'AI / ML Intern — Backend Focus',
    period: 'May 2026 – July 2026',
    location: 'Noida, India',
    context: 'Worked with a team developing an AI-agent-based application.',
    highlights: [
      {
        title: 'Persistent Image Generation Bug',
        description:
          'Investigated a bug where images generated during an AI conversation were not being persisted correctly. As a result, previously generated images were unavailable when users revisited an existing conversation.',
      },
      {
        title: 'AI Response Latency',
        description:
          'Investigated approaches for reducing latency in Gemini Pro-based AI interactions and worked on understanding where latency could be introduced within the request/response pipeline.',
      },
      {
        title: 'Backend Debugging',
        description:
          'Diagnosed and resolved backend issues in Python and Flask-based application workflows. Investigated REST API edge cases and error handling. Worked with SQL queries and input validation. Used AI-assisted debugging to understand and resolve implementation issues. Worked with unit tests for resolved bugs to reduce regression risk.',
      },
    ],
    technologies: ['Python', 'Flask', 'REST APIs', 'SQL', 'Gemini Pro', 'AI Agents', 'Git'],
  },
];

export const projects: ProjectData[] = [
  {
    id: 'oris',
    name: 'ORIS — Orbital Risk Intelligence System',
    badge: 'Hackathon Project',
    summary:
      'Hackathon project exploring orbital debris tracking, collision-risk analysis, simulation, and visualization.',
    description:
      'Hackathon project exploring orbital debris tracking, collision-risk analysis, simulation, and visualization.',
    keyTechnologies: ['React', 'Python', 'Flask', 'Anthropic Claude API'],
    keyFeatures: [
      'Orbital object simulation',
      'Collision detection & risk forecasting',
      'AI-assisted risk analysis',
    ],
    technologies: [
      'React',
      'Vite',
      'Python',
      'Flask',
      'NumPy',
      'Canvas 2D',
      'Anthropic Claude API',
    ],
    features: [
      'Orbital object simulation',
      'Collision detection',
      'Debris cluster analysis',
      'Collision-risk forecasting',
      'AI-assisted risk analysis',
      'Orbital maneuver recommendations',
      'Interactive orbital visualization',
      'Mission report generation',
    ],
    github: 'https://github.com/radhika-dev-23/ORIS-Orbital-Risk-Intelligence-System',
    architecture: [
      'User',
      'React + Vite',
      'Flask REST API',
      'Orbital Simulation',
      'Collision Detection / Forecasting',
      'AI Analysis',
      'Anthropic Claude API',
    ],
    contribution:
      'Participated in the development of the project during a hackathon using AI-assisted development tools to help create and integrate the application.',
    learningOutcome:
      'The project exposed me to full-stack application architecture, REST API workflows, simulation-based applications, AI API integration, and interactive data visualization.',
  },
  {
    id: 'vitalis',
    name: 'Vitalis — Voice-First Early Stroke Detection System',
    badge: 'Hackathon Project',
    summary:
      'Hackathon project exploring a voice-first approach to early health-risk screening and accessible health assessment.',
    description:
      'Hackathon project exploring a voice-first approach to early health-risk screening and accessible health assessment.',
    keyTechnologies: ['React', 'Vite', 'JavaScript', 'Web Speech API'],
    keyFeatures: [
      'Voice-based interaction',
      'Guided health assessment',
      'Browser-based speech input',
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'Web Speech API'],
    features: [
      'Voice-based interaction',
      'Guided health assessment',
      'Responsive web interface',
      'Browser-based speech input',
      'Interactive screening workflow',
    ],
    github: 'https://github.com/radhika-dev-23/vitalis-app',
    architecture: undefined,
    contribution:
      'Participated in the development of the project during a hackathon using AI-assisted development tools to help create and integrate the application.',
    learningOutcome: null,
  },
];

export const skills: SkillsData = {
  categories: [
    {
      name: 'Programming',
      items: ['C++', 'C', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      name: 'Frameworks & Libraries',
      items: ['React.js', 'Vite', 'Flask', 'NumPy', 'Scikit-learn', 'Pandas'],
    },
    {
      name: 'Backend & Software',
      items: [
        'Backend Development',
        'REST APIs',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
      ],
    },
    {
      name: 'Databases',
      items: ['MySQL', 'SQL'],
    },
    {
      name: 'Developer Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Linux'],
    },
    {
      name: 'Areas of Interest',
      items: [
        'Artificial Intelligence',
        'Machine Learning',
        'Backend Engineering',
        'Intelligent Systems',
        'AI Applications',
        'Robotics',
      ],
    },
  ],
};

export const about: AboutData = {
  paragraphs: [
    "I'm a Computer Science & Engineering student specializing in AI & Robotics at Vellore Institute of Technology, Chennai, with an interest in software development, backend engineering, artificial intelligence, and intelligent systems.",
    "I've gained hands-on exposure through an AI/ML internship and hackathon projects, and I'm currently focused on strengthening my fundamentals and building software that I can understand, engineer, and explain end-to-end.",
  ],
  currentlyLearning: [
    'Python',
    'Java',
    'Data Structures & Algorithms',
    'Backend Development',
    'AI / ML',
    'Large Language Models',
    'RAG',
    'Agentic AI',
    'Robotics',
  ],
};

export const education: EducationData = {
  institution: 'Vellore Institute of Technology — Chennai',
  degree: 'B.Tech in Computer Science & Engineering (AI & Robotics)',
  period: '2024 – 2028',
  location: 'Chennai, India',
};

export const certifications: CertificationData[] = [
  {
    title: 'Deloitte Technology Virtual Experience Program',
    subtitle: 'Software Engineering Simulation — Forage',
  },
  {
    title: 'StartupIndia Entrepreneurship Bootcamp',
    subtitle: '5-Day Technical Leadership Workshop',
  },
];

export const contact: ContactData = {
  headline: "Let's build something useful.",
  supporting:
    'For software engineering opportunities, interesting technical problems, or collaboration, feel free to reach out.',
  email: 'radhikabhargava.dev@gmail.com',
  github: 'https://github.com/radhika-dev-23',
  linkedin: 'https://linkedin.com/in/radhika-bhargava-brs1399',
};
