const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },         // recent grad / entry year
  { value: 5, suffix: "+", label: "Clients & Collaborators" },     // classmates, small freelance, mentors
  { value: 6, suffix: "+", label: "Completed Projects" },          // course projects, capstone, side projects
  { value: 3, suffix: "+", label: "Internships / Contributions" }, // internships, open-source PRs, hackathons
];

const logoIconsList = [
  {
    imgPath: "/images/logos/kanlyte.png",
  },
  {
    imgPath: "/images/logos/camtech.png",
  },
  {
    imgPath: "/images/logos/scintl.png",
  },
  {
    imgPath: "/images/logos/google.png",
  },
  {
    imgPath: "/images/logos/psfu.png",
  },
  {
    imgPath: "/images/logos/netlinks.png",
  },

];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
    imgPath: "/images/collab.png",
    title: "Collaboration & Teamwork",
    desc: "Working well with designers and other engineers to share knowledge and coordinate effectively.",
  },
  {
    imgPath: "/images/problem.png",
    title: "Problem Solving",
    desc: "Breaking problems into smaller parts, evaluating trade-offs, and producing practical solutions.",
  },
  {
    imgPath: "/images/system.png",
    title: "System Design",
    desc: "Designing scalable, maintainable architectures and making informed choices about components and data flow.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "My first Java Spring Boot project was a financial transaction system—sounds fancy, right? Spoiler: it was chaos. My transactions kept failing mysteriously until I realized I forgot null checks everywhere. After many debugging sessions, failed tests, the system finally worked. Turns out persistence and stack overflow searches are the real currency.",
    imgPath: "/images/logos/scintl.png",
    logoPath: "/images/logos/scintl.png",
    title: "Java Spring Boot Developer",
    date: "June 2023 - July 2023",
    responsibilities: [
      "Designed and implemented RESTful APIs for secure financial transaction processing using Spring Boot.",
      "Built robust database schema and data validation layers to ensure transaction integrity and accuracy.",
      "Integrated payment processing logic and implemented error handling for edge cases in transaction flows.",
      "Collaborated with team members on code reviews and best practices for backend development.",
    ],
  },
  {
    review:
      "TypeScript was brand new to me when I joined Kanlyte to build a report verification system for Liira University. I was excited—and terrified. The team lead kept requesting design changes, and each one felt like a mountain to climb. But every iteration taught me something: type safety, component design, and how to adapt. By the end, the system was solid, and I'd gone from 'what is a generic type?' to shipping production code.",
    imgPath: "/images/logos/kanlyte_logo.png",
    imgScale: 0.4,
    logoPath: "/images/logos/kanlyte.png",
    title: "Frontend Developer (TypeScript)",
    date: "August 2023 - December 2023",
    responsibilities: [
      "Built the frontend for a report verification system using React and TypeScript (first-time learner).",
      "Designed and implemented UI components for document upload, validation, and status tracking.",
      "Managed multiple design iterations based on team lead feedback and user requirements.",
      "Integrated APIs to communicate with the backend for report processing and verification.",
      "Collaborated with the backend team to ensure seamless data flow and system reliability.",
    ],
  },
  {
    review:
      "My final year project was a military personnel tracking system using Bluetooth Low Energy—a real-world challenge with real constraints. We built a mobile app that scanned BLE signals from personnel, processed the location data, and sent it to a web-based central command platform. Using Docker to containerize the backend taught me about deployment; real-time location visualization proved trickier than expected. But seeing personnel positions update live on a map? That made every late night worth it.",
    imgPath: "/images/logos/bluetooth_logo.png",
    logoPath: "/images/logos/bluetooth.png",
    imgScale: 0.4,
    title: "Full Stack Developer (BLE Tracking System)",
    date: "September 2023 - May 2024",
    responsibilities: [
      "Developed a mobile BLE scanning application to detect and triangulate personnel locations in real-time.",
      "Built RESTful APIs to process location data and transmit it securely to the central command system.",
      "Containerized the backend using Docker for scalable deployment and consistent environments.",
      "Designed a web-based visualization dashboard displaying real-time personnel positions and movement history.",
      "Collaborated with team members on system architecture, testing, and documentation for the final project submission.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "whatsapp",
    url: "https://wa.me/+256780309427",
    imgPath: "/images/logos/watsapp.png",
  },
  {
    name: "github",
    url: "https://www.github.com/rikaari",
    imgPath: "/images/logos/github.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
