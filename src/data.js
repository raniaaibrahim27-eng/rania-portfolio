import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";
import p5 from "./assets/p5.jpg";

export const SOCIAL_LINKS = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/raniaa-ibrahim-83a543225/" },
  { label: "Facebook",  href: "https://www.facebook.com/raniaa.ibrahim.589070/" },
  { label: "Instagram", href: "https://www.instagram.com/raniaa.ibrahim27/" },
  { label: "GitHub",    href: "https://github.com/raniaaibrahim27-eng" },
];

export const NAV_ITEMS = ["Home", "Skills", "Projects", "Contact"];

export const SKILLS = [
  { name: "HTML5",        pct: 95 },
  { name: "CSS3",         pct: 90 },
  { name: "JavaScript",   pct: 85 },
  { name: "React.js",     pct: 85 },
  { name: "Tailwind CSS", pct: 88 },
  { name: "Bootstrap",    pct: 80 },
];

export const PROJECTS = [
  [
    {
      title: "Purelle.store",
      desc: "Front-end skincare website project built with HTML & CSS, including sections like pricing, routines, tips, team, and interactive hover effects.",
      tags: ["HTML", "CSS"],
      img: p1,
      href: "https://github.com/raniaaibrahim27-eng/Purelle.app",
    },
    {
      title: "DrivereX Agency",
      desc: "Modern Car Rental & Automotive Website-DriveX.",
      tags: ["HTML5", "CSS3" , "JavaScript"],
      img: p2,
      href: "https://github.com/raniaaibrahim27-eng/Driverex",
    },
    {
      title: "Aurora Health App",
      desc: "A responsive medical clinic landing page built with Tailwind CSS — featuring a dark hero section, animated marquee, service cards, doctor profiles with social hover effects, testimonials, and a booking form.",
      tags: ["HTML", "CSS", "Tailwind"],
      img: p3,
      href: "https://github.com/raniaaibrahim27-eng/aurora-health-tailwind",
    },
    {
      title: "KITHOUSE Store",
      desc: "Front-end demo e-commerce site for football shirts (Premier League kits) — product grid with photo variants, cart, and localStorage-based auth. HTML/CSS/JS.",
      tags: ["HTML","CSS" ,"JavaScript" ,"Tailwind"],
      img: p4,
      href: "https://github.com/raniaaibrahim27-eng/KITHOUSE",
    },
    {
      title: "Dev Portfolio",
      desc: "A fully responsive personal portfolio site built with React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Vite"],
      img: p1,
      href: "#",
    },
  ],
];

export const PHRASES = [
  "Front-End Developer",
  "React Engineer",
];
