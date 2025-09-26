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
      projects: ["Blogging Platform","2D Animated Games","Desktop Apps"],
      icon: <ScreenshotMonitorOutlinedIcon />,
    },
    {
      id: 3,
      title: "Data Analytics",
      description: "Excel, SQL, PowerBI, data preprocessing. Projects: Financial reports, interactive dashboards, capstone analysis.",
      duration: "4 Weeks",
      topics: ["Excel", "SQL", "PowerBI", "Data Preprocessing"],
      projects: ["Financial Reports","Interactive Dashboards","Capstone Analysis "],
      icon: <PollOutlinedIcon />,
    },
    {
      id: 4,
      title: "Machine Learning",
      description: "Regression and classification algorithms, model evaluation. Projects : Spam detection, house price prediction.",
      duration: "4 Weeks",
      topics: ["Regression Algorithms", "Classification Algorithms", "Model Evaluation",],
      projects: ["Financial Reports","Interactive Dashboards","Capstone Analysis "],
      icon: <PrecisionManufacturingOutlinedIcon />,
    },
    {
      id: 5,
      title: "Deep Learning",
      description: "Neural Networks, CNNs, RNNs, and Transfer Learning with hands-on projects like Image Classification and Sentiment Analysis.",
      duration: "4 Weeks",
      topics: ["CNNs and RNNs","Backpropagation","Deep Learning Frameworks"],
      projects: ["Image Classifier using CNNs","Sentiment Analysis with RNNs"],
      icon: <PsychologyOutlinedIcon />,
    },
    {
      id: 6,
      title: "Generative AI",
      description: "Learn about GANs, LLMs, and text-to-image generation. Explore creative applications of AI with hands-on projects.",
      duration: "4 Weeks",
      topics: ["GANs", "VAEs", "Diffusion Models",],
      projects: ["Text-to-Image Generator","AI-Powered Chatbot"],
      icon: <CastForEducationOutlinedIcon />,
    },
  ];