import { useState } from "react";

var TABS = ["All Projects", "Web Apps", "Portfolio"];

var PROJECTS = [
  {
    id: 1,
    title: "Purelle.store - SkinCare App",
    desc: "Front-end skincare website project built with HTML & CSS, including sections like pricing, routines, tips, team, and interactive hover effects.",
    tags: ["HTML","CSS"],
    img: "./projects/p1.jpg",
    href: "https://github.com/raniaaibrahim27-eng/Purelle.app",
    category: "Web Apps",
    badge: "Completed",
    badgeColor: "#22c55e",
  },
  {
    id: 2,
    title: "DrivereX Agency",
    desc: "Modern Car Rental & Automotive Website-DriveX.",
    tags: ["HTML5","CSS3","JavaScript"],
    img: "./projects/p2.jpg",
    href: "https://github.com/raniaaibrahim27-eng/Driverex",
    category: "Web Apps",
    badge: "Completed",
    badgeColor: "#22c55e",
  },
  {
    id: 3,
    title: "Aurora Health App",
    desc: "A responsive medical clinic landing page built with Tailwind CSS — featuring a dark hero section, animated marquee, service cards, doctor profiles with social hover effects, testimonials, and a booking form.",
    tags: ["HTML", "CSS", "Tailwind"],
    img: "./projects/p3.jpg",
    href: "https://github.com/raniaaibrahim27-eng/aurora-health-tailwind",
    category: "Web Apps",
    badge: "Completed",
    badgeColor: "#22c55e",
  },
  {
    id: 4,
    title: "KITHOUSE Store",
    desc: "Front-end demo e-commerce site for football shirts (Premier League kits) — product grid with photo variants, cart, and localStorage-based auth. HTML/CSS/JS.",
    tags: ["HTML","CSS","Tailwind","JavaScript"],
    img: "./projects/p4.jpg",
    href: "https://github.com/raniaaibrahim27-eng/KITHOUSE",
    category: "Web Apps",
    badge: "Completed",
    badgeColor: "#22c55e",
  },
  {
    id: 5,
    title: "Dev Portfolio - Personal Site",
    desc: "A fully responsive personal portfolio site built with React and Tailwind CSS, featuring animated sections, a project showcase, skills proficiency rings, and a contact form.",
    tags: ["React","Tailwind","CSS","Vite"],
    img: "./projects/p5.jpg",
    href: "#",
    category: "Portfolio",
    badge: "Completed",
    badgeColor: "#22c55e",
  },
];

var cardBaseStyle = {
  outline: "none",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
  transform: "translateZ(0)",
  WebkitTransform: "translateZ(0)",
  isolation: "isolate",
};

var imgWrapStyle = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
  transform: "translateZ(0)",
  WebkitTransform: "translateZ(0)",
};

function ProjectCard({ p }) {
  var [hovered, setHovered] = useState(false);

  var cardClass = [
    "group relative rounded-2xl overflow-hidden cursor-pointer bg-[#0d0d1e]",
    "border border-solid",
    "transition-[border-color,box-shadow,transform] duration-300",
    hovered
      ? "border-emerald-500/40 -translate-y-1.5 shadow-2xl shadow-emerald-500/10"
      : "border-white/10",
  ].join(" ");

  var imgClass = [
    "w-full h-full object-cover transition-transform duration-500",
    hovered ? "scale-105" : "scale-100",
  ].join(" ");

  var overlayClass = [
    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
    "transition-opacity duration-300",
    hovered ? "opacity-100" : "opacity-60",
  ].join(" ");

  return (
    <div
      className={cardClass}
      style={cardBaseStyle}
      onMouseEnter={function(){setHovered(true);}}
      onMouseLeave={function(){setHovered(false);}}
    >
      <div className="relative h-52 overflow-hidden" style={imgWrapStyle}>
        <img src={p.img} alt={p.title} className={imgClass}/>
        <div className={overlayClass}/>
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{background: p.badgeColor+"25", border:"1px solid "+p.badgeColor+"60", color: p.badgeColor}}>
          {p.badge}
        </span>
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            {p.href !== "#" ? (
              <a href={p.href} target="_blank" rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-400 transition-colors shadow-lg">
                View Project
              </a>
            ) : (
              <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                View Source
              </span>
            )}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-white text-base mb-2 group-hover:text-emerald-300 transition-colors">{p.title}</h3>
        <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(function(t){return(
            <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">{t}</span>
          );})}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  var [tab, setTab] = useState("All Projects");
  var filtered = tab === "All Projects" ? PROJECTS : PROJECTS.filter(function(p){return p.category===tab;});

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"/>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3 block">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mb-4"/>
          <p className="text-white/50 text-sm max-w-md mx-auto">Real-world applications built with modern technologies and best practices.</p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-1 bg-white/5 rounded-full p-1 border border-white/8">
            {TABS.map(function(t){return(
              <button key={t} onClick={function(){setTab(t);}}
                className={"px-5 py-2 rounded-full text-sm font-medium transition-all " + (tab===t ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg" : "text-white/50 hover:text-white")}>
                {t}
              </button>
            );})}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(function(p){return <ProjectCard key={p.id} p={p}/>;}) }
        </div>
      </div>
    </section>
  );
}