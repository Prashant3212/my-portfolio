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
  {
    name: "About ",
    link: "#testimonials",
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
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
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
    review: "Learned full-stack development from Sheriyans Coding School, built multiple mini projects, and strengthened my technical skills through hands-on practice.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend development",
    date: "January 2024 - Present",
    responsibilities: [
      "I have a strong foundation in HTML, CSS, JavaScript, and React, enabling me to build responsive and interactive web interfaces.",
      "I also work with animation and visual experience tools like Framer Motion, GSAP, and Three.js to create smooth, engaging UI experiences.",
      "Along the way, I’ve worked with a variety of libraries and UI frameworks—including Skipper UI, Bootstrap, and Tailwind CSS to speed up development, enhance design quality, and deliver clean, scalable interfaces.",
    ],
  },
  {
    review: "Ranked in the top 5.58% out of 2.5 lakh participants in Stage 2 of the Algo University Tech Fellowship (ATF).",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Developer ",
    date: "may 2025 - Present",
    responsibilities: [
      "Experienced with Node.js and Express, building server-side applications, REST APIs, and scalable backend architectures.",
      "Worked with both MongoDB and SQL databases, handling data modeling, queries, authentication, and CRUD operations.",
      "Focused on writing secure, optimized, and maintainable backend logic, deploying systems that interact smoothly with front-end interfaces.",
    ],
  },
  {
    review: "Nocage is a creator-first platform that helps individuals monetize their skills, build digital products, and grow through community-driven collaboration.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: [ "Full Stack Developer Intern"],
    date: "October  2025 - December 2025",
    responsibilities: [
      "Developed and deployed a fully responsive portfolio website using Next.js, featuring animated landing interactions, a detailed founder story page, and a functional contact form.",
      "Collaborated with the dev team through GitHub, managing commits, pull requests, and maintaining clean branch workflows.",
      "Worked in an Agile environment, using ClickUp for sprint planning, progress tracking, and efficient task execution.",
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
    review:"",
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
const collegeExp=[
  {
    eventName:"St John's Sr.Sec.School"  ,
    experiance:"I completed my schooling at St. John’s Sr. Sec. School, where I had the privilege of serving as the Head Boy. My academic journey there was shaped by discipline, leadership, and growth, graduating with 88.7% in Class 12th and 87.7% in Class 10th. St. John’s wasn’t just a school to me it was the place that built my foundation and shaped who I am today.",
    imgPath:"/images/about-Imgs/school.png"
  },{
    eventName:"Debating"  ,
    experiance:"Beyond academics, debating is a key personal passion and hobby. I currently serve as the PR Head of Cognitive Minds, the debating society of DTU, and have represented the university at several reputed national circuits, including events hosted by IIT Delhi, IIT Kanpur, IIT BHU, and Gargi College (DU). This involvement has strengthened my communication, critical reasoning, and leadership abilities.",
    imgPath:"/images/about-Imgs/debate.jpg"
  },{
    eventName:"Delhi Technological University"  ,
    experiance:"I am currently pursuing B.Tech in Biotechnology at Delhi Technological University. The institute has given me immense exposure and the opportunity to collaborate and grow alongside some of the brightest minds. My journey here has not only strengthened my academic foundation but also expanded my network, opening doors to new ideas, projects, and possibilities.",
    imgPath:"/images/about-Imgs/college.jpg"
  }
  ,{
    eventName:"hackathons"  ,
    experiance:"Hackathons have been one of the most fun and impactful parts of my technical journey. I’ve taken part in several, including Vihaan IEEE, Brainwave, and Smart India Hackathon (SIH) each one pushing me to think faster, build smarter, and collaborate better. More than prizes or deadlines, I enjoy the energy of creating something meaningful with a team and learning new skills along the way.",
    imgPath:"/images/about-Imgs/hackathon.png"
  }
]
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
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
  collegeExp,
};
