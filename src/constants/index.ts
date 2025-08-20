import { Experience, Project } from "src/interface";

export  const experiences: Experience[] = [
    {
      title: "Software Engineer II",
      company: "Korn Ferry International Pvt Ltd",
      location: "Bangalore",
      duration: "Sept 2023 - Present",
      achievements: [
        "Building scalable UI components for B2B SaaS applications with TypeScript, React.js, and Redux, resulting in 30% faster client decisions",
        "Optimizing performance by 25% through cross-functional collaboration on API design (Nest.js) and resolving performance bottlenecks",
        "Mentoring a team of 5 developers on clean architectural practices and TDD, accelerating delivery by 20%"
      ]
    },
    {
      title: "Associate Software Developer",
      company: "CDK Global Pvt Ltd",
      location: "Hyderabad",
      duration: "May 2022 - Aug 2023",
      achievements: [
        "Engineered B2B automotive product with JavaScript (React.js), automating 40% manual workflows via Redux reusable components",
        "Designed responsive UI with CSS3 and Bootstrap, enhancing cross-browser compatibility",
        "Troubleshooted API integration issues, reducing registration errors by 30%"
      ]
    },
    {
      title: "ReactJS Developer",
      company: "Ert Technologies Pvt Ltd",
      location: "Hyderabad",
      duration: "Jan 2020 - May 2022",
      achievements: [
        "Built Shophub (React.js) with Stripe API, boosting conversions by 25% via reusable cart modules",
        "Enhanced E-Pratibha engagement by 35% using Zoom SDK and JavaScript-driven responsive UI components",
        "Streamlined Agile workflows for 4+ JavaScript projects, ensuring on-time delivery of scalable solutions"
      ]
    }
  ];

export const projects: Project[] = [
  {
    name: "Pay Analytics",
    duration: "Sep 2023 - Present",
    description:
      "A SaaS-based analytics dashboard designed to identify and resolve pay gaps using real-time compensation insights and benchmarks.",
    highlights: [
      "Led frontend architecture using React.js, TypeScript, and modular components, improving scalability and reusability",
      "Boosted performance by 30% through code splitting, lazy loading, and Node.js optimizations",
      "Collaborated with design and backend teams to translate Figma wireframes and streamline REST and serverless API integrations",
      "Implemented responsive UI with LESS/CSS, aligned with design tokens and pixel-perfect requirements",
      "Deployed updates via AWS CI/CD pipelines, improving delivery efficiency"
    ],
    technologies: ["React.js", "TypeScript", "Zustand", "NestJS", "Vite", "LESS", "AWS", "CI/CD"]
  },
  {
    name: "Vehicle Dealership App",
    duration: "May 2022 - Aug 2023",
    description:
      "A platform to automate vehicle registration, dealer onboarding, and lienholder inquiries across 50+ dealerships.",
    highlights: [
      "Built reusable components for dealer launch, permission handling, and inquiry modules",
      "Implemented features to register all types of vehicles and generate temporary registration cards",
      "Reduced load times by 30% through code optimization and modularization",
      "Integrated REST APIs, resolved production bugs, and improved app responsiveness",
      "Wrote unit and integration tests to maintain code quality"
    ],
    technologies: ["React.js", "TypeScript", "Redux", "Redux-Toolkit", ".NET Core", "REST API"]
  },
  {
    name: "First Match App (Healthcare)",
    duration: "Dec 2021 - Apr 2022",
    description:
      "A healthcare tool for managing clients and predicting outcomes based on configurable sections and questions.",
    highlights: [
      "Built features to create, edit, and delete dynamic forms, organizations, and sections",
      "Integrated client redirection and score prediction features",
      "Used Redux Toolkit and persist for state and session management",
      "Worked closely with backend teams for API integration and bug fixing"
    ],
    technologies: ["React.js", "Redux Toolkit", "JavaScript", "REST API"]
  },
  {
    name: "Shophub App (E-Commerce)",
    duration: "Oct 2020 - Nov 2021",
    description:
      "An eCommerce platform supporting category-based shopping, payments, and order tracking.",
    highlights: [
      "Developed modules like login, add to cart, checkout, and admin panel",
      "Integrated Stripe for secure payments and implemented user authentication",
      "Built reusable components for product management and shopping workflow",
      "Improved performance with Redux Toolkit and optimized load times"
    ],
    technologies: ["React.js", "Redux Toolkit", "Stripe API", "JavaScript", "Bootstrap"]
  },
  {
    name: "E-Pratibha (Education Platform)",
    duration: "Jan 2020 - Sep 2020",
    description:
      "An e-learning platform connecting students with tutors, offering video sessions and content delivery.",
    highlights: [
      "Implemented login authentication and reusable component architecture",
      "Integrated Zoom Web SDK for virtual tutoring and Stripe for payments",
      "Optimized data flow using Redux Toolkit, improving application performance"
    ],
    technologies: ["React.js", "Redux Toolkit", "Zoom Web SDK", "Stripe API", "JavaScript"]
  }
];