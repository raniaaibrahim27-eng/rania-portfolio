import { useEffect, useRef, useState } from "react";

var SKILLS = [
  { name: "HTML5",        pct: 95, color: "#e34f26" },
  { name: "CSS3",         pct: 90, color: "#264de4" },
  { name: "JavaScript",   pct: 85, color: "#f7df1e" },
  { name: "React.js",     pct: 85, color: "#61dafb" },
  { name: "Tailwind CSS", pct: 88, color: "#38bdf8" },
  { name: "Bootstrap",    pct: 80, color: "#7952b3" },
];

function Ring({ name, pct, color, visible }) {
  var r = 52;
  var circ = 2 * Math.PI * r;
  var offset = circ * (1 - (visible ? pct : 0) / 100);
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="relative w-32 h-32">
        <svg width="128" height="128" viewBox="0 0 128 128" style={{transform:"rotate(-90deg)"}}>
          <circle cx="64" cy="64" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"/>
          <circle cx="64" cy="64" r={r} fill="none" stroke={color} strokeWidth="8"
            strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
            style={{transition:"stroke-dashoffset 1.4s cubic-bezier(0.34,1.56,0.64,1)",filter:"drop-shadow(0 0 6px "+color+"60)"}}/>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{pct}%</span>
        </div>
      </div>
      <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors text-center">{name}</span>
    </div>
  );
}

export default function Skills() {
  var ref = useRef(null);
  var [visible, setVisible] = useState(false);
  var [page, setPage] = useState(0);
  var [anim, setAnim] = useState("idle");
  var perPage = 4;
  var totalPages = Math.ceil(SKILLS.length / perPage);

  useEffect(function () {
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return function () { obs.disconnect(); };
  }, []);

  function goTo(nextPage, direction) {
    if (nextPage === page) return;
    var exitAnim = direction === "next" ? "exit-left" : "exit-right";
    var enterAnim = direction === "next" ? "enter-right" : "enter-left";
    setAnim(exitAnim);
    setTimeout(function () {
      setPage(nextPage);
      setAnim(enterAnim);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          setAnim("idle");
        });
      });
    }, 220);
  }

  var shown = SKILLS.slice(page * perPage, page * perPage + perPage);

  function getSlideStyle() {
    if (anim === "exit-left")   return { opacity: 0, transform: "translateX(-30px)", transition: "opacity 0.22s ease, transform 0.22s ease" };
    if (anim === "exit-right")  return { opacity: 0, transform: "translateX(30px)",  transition: "opacity 0.22s ease, transform 0.22s ease" };
    if (anim === "enter-right") return { opacity: 0, transform: "translateX(30px)",  transition: "none" };
    if (anim === "enter-left")  return { opacity: 0, transform: "translateX(-30px)", transition: "none" };
    return { opacity: 1, transform: "translateX(0)", transition: "opacity 0.28s ease, transform 0.28s ease" };
  }

  var ringVisible = visible && anim === "idle";

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl"/>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3 block">Technical Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Front-End Skills</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mb-4"/>
          <p className="text-white/50 text-sm max-w-md mx-auto">The front-end technologies I use to build modern, responsive web experiences.</p>
        </div>
        <div className="flex items-center justify-center gap-6 mb-10">
          <button
            onClick={function(){goTo(Math.max(0, page - 1), "prev");}}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-emerald-400 transition-all disabled:opacity-20 disabled:cursor-not-allowed text-lg flex-shrink-0">
            &#8249;
          </button>
          <div style={getSlideStyle()} className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
            {shown.map(function(s){return(
              <Ring key={s.name} name={s.name} pct={s.pct} color={s.color} visible={ringVisible}/>
            );})}
          </div>
          <button
            onClick={function(){goTo(Math.min(totalPages - 1, page + 1), "next");}}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-emerald-400 transition-all disabled:opacity-20 disabled:cursor-not-allowed text-lg flex-shrink-0">
            &#8250;
          </button>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {[...Array(totalPages)].map(function(_,i){return(
              <button key={i} onClick={function(){goTo(i, i > page ? "next" : "prev");}}
                className={"h-2 rounded-full transition-all duration-300 " + (page===i ? "bg-emerald-400 w-6" : "bg-white/20 w-2")}/>
            );})}
          </div>
        )}
      </div>
    </section>
  );
}