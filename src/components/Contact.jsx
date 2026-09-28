import { useState } from "react";

export default function Contact() {
  var [form, setForm] = useState({ first: "", last: "", email: "", phone: "", msg: "" });
  var [sent, setSent] = useState(false);

  function handleChange(e) {
    var n = e.target.name;
    var v = e.target.value;
    setForm(function(prev){var next={};Object.assign(next,prev);next[n]=v;return next;});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ first:"",last:"",email:"",phone:"",msg:"" });
    setTimeout(function(){setSent(false);}, 3500);
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-[#0a0a14] to-teal-900/20 pointer-events-none"/>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3 block">Say Hello</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mb-4"/>
          <p className="text-white/50 text-sm max-w-md mx-auto">Open to freelance projects, internships, and full-time opportunities. Let's build something great together.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/10 rounded-3xl p-8 border border-emerald-500/15">
              <div className="text-5xl mb-4">&#128105;&#8205;&#128187;</div>
              <h3 className="text-xl font-bold text-white mb-3">Rania Ibrahim</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Front-End Developer based in Egypt.
                I love building elegant, responsive web applications and am always open to new opportunities.
              </p>
              <div className="space-y-3">
                {[
                  ["&#128205;","Location","Fayoum, Egypt"],
                  ["&#128231;","Email","raniaa.ibrahim.27@gmail.com"],
                  ["&#128188;","Focus","Front-End Development"],
                ].map(function(item){return(
                  <div key={item[1]} className="flex items-center gap-3 text-sm">
                    <span className="text-base" dangerouslySetInnerHTML={{__html: item[0]}}/>
                    <div>
                      <span className="text-white/40 text-xs block">{item[1]}</span>
                      <span className="text-white/80">{item[2]}</span>
                    </div>
                  </div>
                );})}
              </div>
            </div>
          </div>

          <div className="bg-[#0d0d1e] border border-white/8 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
            {sent ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-3">&#9989;</div>
                <p className="text-teal-400 font-medium">Message sent successfully!</p>
                <p className="text-white/40 text-sm mt-1">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input name="first" value={form.first} onChange={handleChange} required type="text" placeholder="First Name"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-emerald-400/60 transition-colors w-full"/>
                  <input name="last" value={form.last} onChange={handleChange} required type="text" placeholder="Last Name"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-emerald-400/60 transition-colors w-full"/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email Address"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-emerald-400/60 transition-colors w-full"/>
                  <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone No. (optional)"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-emerald-400/60 transition-colors w-full"/>
                </div>
                <textarea name="msg" value={form.msg} onChange={handleChange} required placeholder="Your message..." rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-emerald-400/60 transition-colors resize-none"/>
                <button type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:from-emerald-400 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}