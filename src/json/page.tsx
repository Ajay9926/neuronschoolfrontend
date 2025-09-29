import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import HourglassFullOutlinedIcon from '@mui/icons-material/HourglassFullOutlined';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CodeIcon from '@mui/icons-material/Code';
import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';

export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#" },
  { id: "course", label: "Course", href: "#course" },
  { id: "community", label: "Community", href: "#community" },
  { id: "faqs", label: "FAQs", href: "#faqs" },
  { id: "contact", label: "Contact", href: "#contact" }
];

export const visionData: VisionItem[] = [
  {
    id: 1,
    title: "Innovation Hub",
    description:
      "We're not just another institute. We're an innovation hub where ideas come to life through practical learning.",
  },
  {
    id: 2,
    title: "Hands-on Experience",
    description:
      "We believe in learning by doing. Every concept is reinforced through projects and activities.",
  },
  {
    id: 3,
    title: "Industry Ready",
    description:
      "Our courses are designed to make you ready for real-world challenges from day one.",
  },
  {
    id: 4,
    title: "Community Driven",
    description:
      "We foster a strong community of learners, mentors, and innovators to grow together.",
  },
];

export const numbersData = [
  {
    to: 97,
    title: "AI Adoption Growth",
    subtitle: "of organizations are investing in AI initiatives by 2025"
  },
  {
    to: 40,
    title: "Productivity Boost",
    subtitle: "average increase in business productivity with AI integration"
  },
  {
    to: 3.5,
    title: "Productivity Boost",
    subtitle: "new AI-related jobs projected globally by 2025"
  },
  {
    to: 123,
    title: "Salary Premium",
    subtitle: "higher average salary for AI specialists vs a developers"
  }
]

export const whyUsData = {
  left: [
    {
      title: "Cutting-edge Curriculum",
      description: "Learn the latest in AI, Machine Learning, and Deep Learning from industry experts"
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects using cutting-edge AI technologies & tools"
    },
    {
      title: "1:1 Mentorship",
      description: "Get personalized guidance from experienced industry professionals"
    }
  ],
  right: [
    {
      title: "Career Support",
      description: "Receive dedicated placement assistance and interview preparation"
    },
    {
      title: "Industry Recognition",
      description: "Earn a certificate recognized by top tech companies"
    },
    {
      title: "Job-Ready Skills",
      description: "Develop practical skills that employers are actively seeking"
    }
  ]
};

export const listData = [
  { text: "Internship Experience", icon: <WorkOutlinedIcon /> },
  { text: "Full Time/ Hybrid", icon: <HourglassFullOutlinedIcon /> },
  { text: "12+ Live Projects", icon: <ScreenShareIcon /> },
  { text: "300+ Hours Live Lectures", icon: <LocalLibraryIcon /> },
  { text: "120+ Particle Coding Assignments", icon: <CodeIcon /> },
];

export const courseData = [
  {
    id: 1,
    title: "Python Programming",
    description: "Python basics, OOPs, external libraries, and projects like a temperature converter and JARVIS virtual assistant.",
    duration: "4 Weeks",
    topics: ["Python basics", "Object-Oriented Programming", "External libraries", "Some Topic"],
    projects: ["Temperature Converter", "JARVIS Virtual Assistant"],
    icon: <CodeIcon />,
  },
  {
    id: 2,
    title: "Web Development",
    description: "HTML, CSS, Flask, Tkinter, PyGame. Projects: Blogging platform, 2D animated games, desktop apps.",
    duration: "4 Weeks",
    topics: ["HTML", "CSS", "Flask", "Tkinter", "PyGame"],
    projects: ["Blogging Platform", "2D Animated Games", "Desktop Apps"],
    icon: <ScreenshotMonitorOutlinedIcon />,
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Excel, SQL, PowerBI, data preprocessing. Projects: Financial reports, interactive dashboards, capstone analysis.",
    duration: "4 Weeks",
    topics: ["Excel", "SQL", "PowerBI", "Data Preprocessing"],
    projects: ["Financial Reports", "Interactive Dashboards", "Capstone Analysis "],
    icon: <PollOutlinedIcon />,
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "Regression and classification algorithms, model evaluation. Projects : Spam detection, house price prediction.",
    duration: "4 Weeks",
    topics: ["Regression Algorithms", "Classification Algorithms", "Model Evaluation",],
    projects: ["Financial Reports", "Interactive Dashboards", "Capstone Analysis "],
    icon: <PrecisionManufacturingOutlinedIcon />,
  },
  {
    id: 5,
    title: "Deep Learning",
    description: "Neural Networks, CNNs, RNNs, and Transfer Learning with hands-on projects like Image Classification and Sentiment Analysis.",
    duration: "4 Weeks",
    topics: ["CNNs and RNNs", "Backpropagation", "Deep Learning Frameworks"],
    projects: ["Image Classifier using CNNs", "Sentiment Analysis with RNNs"],
    icon: <PsychologyOutlinedIcon />,
  },
  {
    id: 6,
    title: "Generative AI",
    description: "Learn about GANs, LLMs, and text-to-image generation. Explore creative applications of AI with hands-on projects.",
    duration: "4 Weeks",
    topics: ["GANs", "VAEs", "Diffusion Models",],
    projects: ["Text-to-Image Generator", "AI-Powered Chatbot"],
    icon: <CastForEducationOutlinedIcon />,
  },
];

export const faqData = [
  {
    "id": "panel1",
    "question": "What is Data Science?",
    "answer": "Data Science is an interdisciplinary field that combines statistical analysis, programming skills, and domain knowledge to extract meaningful insights from data."
  },
  {
    "id": "panel2",
    "question": "Do I need prior programming experience to join this Data Science course?",
    "answer": "No, the program is beginner-friendly and starts with Python basics. Even if you have no prior coding experience, our structured curriculum and expert guidance will help you master AI and ML concepts step by step."
  },
  {
    "id": "panel3",
    "question": "How is this program different from   Data Science courses?",
    "answer": "Our program emphasizes hands-on project development and practical learning, ensuring you gain real-world experience and skills directly applicable to industry needs."
  },
  {
    "id": "panel4",
    "question": "What is the duration and schedule of this Data Science course in Indore?",
    "answer": "The program runs for 6 months, with a mix of live classes, hands-on assignments, and weekly projects. Classes are scheduled on weekdays, with additional doubt-clearing and practice sessions available on weekends."
  },
  {
    "id": "panel5",
    "question": "Will I get a certificate after completing your Data Science course?",
    "answer": "Yes, upon successful completion of the program, you will receive:<br>1. A Certificate of Completion for the course.<br>2. An Internship Certificate for the real-world projects and assignments completed during the program."
  },
  {
    "id": "panel6",
    "question": "What kind of support will I get for job placements?",
    "answer": "Our comprehensive placement support includes:<br>1. Resume writing and LinkedIn profile optimization. <br>2. Mock interviews with personalized feedback.<br>3. Access to 1200+ hiring partners and daily job notifications.<br>4. A dedicated placement coach to guide you throughout the process."
  },
  {
    "id": "panel7",
    "question": "What career opportunities are available after completing the Data Science course?",
    "answer": "Upon completing our data science course, you can pursue roles such as Data Analyst, Junior Data Scientist, Data Engineer, and Business Intelligence Analyst."
  },
  {
    "id": "panel8",
    "question": "What are the payment options for the program?",
    "answer": "We offer flexible payment plans:<br>1. One-time payment: Enjoy additional early bird discounts. <br>2. Installment plans: Pay in easy monthly installments.<br>3. Special discounts are available for early enrollees."
  },
  {
    "id": "panel9",
    "question": "What kind of projects will I work on?",
    "answer": "You’ll work on a mix of individual and team projects, including:<br>1. Building AI models for real-world applications.<br>2. Developing games using PyGame.<br>3. Creating dashboards and reports using PowerBI.<br>4. Capstone projects using AI-powered applications and building AI Agents."
  },
  {
    "id": "panel10",
    "question": "What happens if I miss a class?",
    "answer": "All live classes are recorded and made available on our learning platform. You can revisit missed sessions at any time and join doubt-clearing sessions for additional support."
  },
  {
    "id": "panel11",
    "question": "How can I get in touch with mentors or resolve my doubts?",
    "answer": "You’ll have access to a dedicated doubt-clearing platform where you can post questions and get answers within 12-24 hours. Additionally, you can book 1:1 mentor sessions for personalized guidance."
  }
]