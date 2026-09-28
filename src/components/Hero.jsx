import { useState, useEffect } from "react";

var PHRASES = ["Front-End Developer", "React Engineer"];

function Typewriter() {
  var [text, setText] = useState("");
  var [pIdx, setPIdx] = useState(0);
  var [cIdx, setCIdx] = useState(0);
  var [del, setDel] = useState(false);

  useEffect(function () {
    var phrase = PHRASES[pIdx];
    var t;
    if (!del) {
      t = setTimeout(function () {
        setText(phrase.slice(0, cIdx + 1));
        if (cIdx + 1 === phrase.length) { setTimeout(function(){setDel(true);}, 1500); }
        else { setCIdx(cIdx + 1); }
      }, 90);
    } else {
      t = setTimeout(function () {
        setText(phrase.slice(0, cIdx - 1));
        if (cIdx - 1 === 0) { setDel(false); setPIdx((pIdx+1)%PHRASES.length); setCIdx(0); }
        else { setCIdx(cIdx - 1); }
      }, 50);
    }
    return function () { clearTimeout(t); };
  }, [cIdx, del, pIdx]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
      {text}<span className="inline-block w-0.5 h-8 md:h-10 bg-emerald-400 ml-1 align-bottom animate-pulse"/>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl"/>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-900/5 blur-3xl"/>
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
        {[...Array(20)].map(function(_,i){return(
          <div key={i} className="absolute w-1 h-1 rounded-full bg-emerald-400/30 animate-pulse"
            style={{left:(Math.sin(i*1.7)*40+50)+"%",top:(Math.cos(i*1.3)*35+50)+"%",animationDelay:(i*0.3)+"s",animationDuration:(3+i%3)+"s"}}/>
        );})}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"/>
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Hi! I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300">
                Rania
              </span>
              <br/>Ibrahim
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 min-h-[2.5rem]">
              <Typewriter/>
            </h2>

            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Building modern <strong className="text-white/80 font-medium">responsive web experiences with clean code and creative design</strong> Passionate about turning ideas into smooth, user-friendly digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" onClick={function(e){e.preventDefault();document.getElementById("projects").scrollIntoView({behavior:"smooth"});}}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:from-emerald-400 hover:to-teal-500 transition-all shadow-xl shadow-emerald-500/25 text-sm">
                View My Projects
              </a>
              <a href="#contact" onClick={function(e){e.preventDefault();document.getElementById("contact").scrollIntoView({behavior:"smooth"});}}
                className="px-7 py-3.5 rounded-full border border-white/15 text-white/80 font-medium hover:border-emerald-400 hover:text-white transition-all text-sm">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-2xl scale-110"/>
              <div className="relative bg-[#0d0d1e] border border-white/10 rounded-3xl p-6 w-80 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"/>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"/>
                  <span className="ml-2 text-xs text-white/30 font-mono">rania.jsx</span>
                </div>
                <div className="font-mono text-xs space-y-1.5 leading-relaxed">
                  <div><span className="text-purple-400">const</span> <span className="text-teal-300">developer</span> <span className="text-white/60">= </span><span className="text-yellow-400">{"{"}</span></div>
                  <div className="pl-4"><span className="text-white/40">name</span><span className="text-white/60">: </span><span className="text-green-400">"Rania Ibrahim"</span><span className="text-white/40">,</span></div>
                  <div className="pl-4"><span className="text-white/40">role</span><span className="text-white/60">: </span><span className="text-green-400">"Front-End Dev"</span><span className="text-white/40">,</span></div>
                  <div className="pl-4"><span className="text-white/40">stack</span><span className="text-white/60">: </span><span className="text-yellow-400">[</span></div>
                  <div className="pl-8 text-green-400">"HTML", "CSS",</div>
                  <div className="pl-8 text-green-400">"JavaScript", "React",</div>
                  <div className="pl-8 text-green-400">"Tailwind"</div>
                  <div className="pl-4 text-yellow-400">]</div>
                  <div className="pl-0 text-yellow-400">{"}"}</div>
                  <div className="mt-2 text-emerald-400">
                    <span className="text-white/40">&#62; </span>
                    <span className="animate-pulse">ready_to_build()</span>
                    <span className="text-teal-400"> &#10003;</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#0d0d1e] border border-emerald-500/30 rounded-xl px-3 py-2 text-xs font-medium text-emerald-300 shadow-lg animate-float">
                &#9883; Front-End Dev
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0d0d1e] border border-teal-500/30 rounded-xl px-3 py-2 text-xs font-medium text-teal-300 shadow-lg animate-float" style={{animationDelay:"1.5s"}}>
                React Dev
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span className="font-mono tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-emerald-500/50 to-transparent animate-pulse"/>
      </div>
    </section>
  );
}