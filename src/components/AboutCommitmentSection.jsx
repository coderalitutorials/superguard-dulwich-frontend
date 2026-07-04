

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Shield,
//   Timer,
//   Home,
//   ArrowUpRight,
//   HelpCircle,
//   HardHat,
//   Phone,
//   MapPin,
//   CheckCircle2,
// } from "lucide-react";

// export default function AboutCommitmentSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     address: "10 Someford Way, London SE16 6QW",
//     phone: "07448 491927",
//     phoneTel: "+447448491927",
//     businessName: "SuperGuard Rotherhithe",
//   };

//   const commitments = [
//     { icon: Shield, title: "Safe Treatment Planning", desc: "We choose practical treatment routes based on the pest type, activity level and property layout." },
//     { icon: Timer, title: "Fast Local Support", desc: `Our team focuses on quick pest control support across ${LOCAL.area} and nearby ${LOCAL.postcode}.` },
//     { icon: Home, title: "Property-Focused Advice", desc: "We help you understand prevention steps that can reduce repeat pest activity around your building." },
//   ];

//   // Animation trigger logic
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("active");
//         }
//       });
//     }, { threshold: 0.2 });

//     const elements = document.querySelectorAll(".scroll-reveal");
//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F7F6FF] py-24 sm:py-32">
//       <style>{`
//         .scroll-reveal { opacity: 0; transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
//         .left-slide { transform: translateX(-60px); }
//         .right-slide { transform: translateX(60px); }
//         .scroll-reveal.active { opacity: 1; transform: translateX(0); }
//       `}</style>

//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
//       <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//       <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-white blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-6 scroll-reveal left-slide">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5] shadow-sm">
//               <HelpCircle className="w-4 h-4" /> Our Commitment
//             </span>

//             <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//               Reliable Pest Control With <span className="text-[#5E50B5]">Clear Standards</span>
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
//               At {LOCAL.businessName}, we understand how disruptive pest issues can be. Our commitment is to keep the process simple: listen to the problem, inspect the signs, explain the options and provide practical support.
//             </p>

//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {["Clear Advice", "Local Team", "Practical Prevention"].map((item) => (
//                 <div key={item} className="rounded-2xl bg-white border border-[#5E50B5]/10 p-4 shadow-lg shadow-slate-900/5">
//                   <CheckCircle2 className="w-5 h-5 text-[#5E50B5] mb-3" />
//                   <span className="text-sm font-black text-slate-800">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-9 flex flex-col sm:flex-row gap-4">
//               <button onClick={() => navigate("/contact-us")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5E50B5] hover:bg-[#4C4098] text-white px-7 py-4 text-sm font-black uppercase transition-all hover:scale-[1.02] shadow-xl shadow-[#5E50B5]/20">
//                 Book Inspection <ArrowUpRight className="w-4 h-4" />
//               </button>
//               <a href={`tel:${LOCAL.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-[#5E50B5]/20 hover:border-[#5E50B5] text-[#5E50B5] px-7 py-4 text-sm font-black uppercase transition-all">
//                 <Phone className="w-4 h-4" /> {LOCAL.phone}
//               </a>
//             </div>
//           </div>

//           {/* RIGHT COMMITMENT PANEL */}
//           <div className="lg:col-span-6 scroll-reveal right-slide">
//             <div className="relative">
//               <div className="relative rounded-[3rem] bg-white border border-[#5E50B5]/10 p-5 shadow-2xl shadow-[#5E50B5]/10">
//                 <div className="rounded-[2.5rem] bg-[#4C4098] text-white p-6 md:p-8 lg:p-10 relative overflow-hidden">
//                   <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/15 flex items-center justify-center mb-8">
//                     <HardHat className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6">We Keep Pest Control Straightforward</h3>
//                   <p className="text-sm md:text-base text-white/75 font-medium mb-8">No confusing explanations and no unnecessary pressure. We help you understand the pest issue.</p>
                  
//                   <div className="space-y-4">
//                     {commitments.map((item) => {
//                       const Icon = item.icon;
//                       return (
//                         <div key={item.title} className="rounded-2xl bg-white/10 border border-white/10 p-5 flex gap-4">
//                           <div className="w-11 h-11 rounded-xl bg-white text-[#4C4098] flex items-center justify-center shrink-0">
//                             <Icon className="w-5 h-5" />
//                           </div>
//                           <div>
//                             <h4 className="text-base font-black text-white mb-1">{item.title}</h4>
//                             <p className="text-sm text-white/70 font-medium">{item.desc}</p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }














import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Timer,
  Home,
  ArrowUpRight,
  HelpCircle,
  HardHat,
  Phone,
  MapPin,
  CheckCircle2,
  ClipboardCheck,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

export default function AboutCommitmentSection() {
  const navigate = useNavigate();

  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    address: "67 Dulwich Village, London SE21 7BJ",
    phone: "07405 264579",
    phoneTel: "+447405264579",
    businessName: "SuperGuard Dulwich",
  };

  const commitments = [
    {
      icon: SearchCheck,
      title: "We Check Before We Act",
      desc: "We look at pest signs, access points, activity level and property risks before choosing a treatment route.",
    },
    {
      icon: Shield,
      title: "We Keep Treatments Practical",
      desc: "Our recommendations are based on the pest type, the property layout and what will make the most sense for the customer.",
    },
    {
      icon: Home,
      title: "We Help Reduce Repeat Issues",
      desc: `Our advice is built around prevention, proofing and practical aftercare for ${LOCAL.area} properties.`,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".commit-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("commit-show");
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7F5FF] py-24 sm:py-32">
      <style>{`
        .commit-animate {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .commit-show {
          opacity: 1;
          transform: translateY(0);
        }

        .commit-delay-1 { transition-delay: 120ms; }
        .commit-delay-2 { transition-delay: 220ms; }
        .commit-delay-3 { transition-delay: 320ms; }

        @media (prefers-reduced-motion: reduce) {
          .commit-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-48 bg-white" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* LEFT PREMIUM PANEL */}
          <div className="lg:col-span-5 commit-animate">
            <div className="h-full rounded-[3rem] bg-[#5F52B5] text-white p-7 md:p-10 shadow-2xl shadow-[#15122D]/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:24px_24px]" />
              <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#5F52B5] blur-3xl" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-7">
                  <HelpCircle className="w-4 h-4" />
                  Our Commitment
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-6">
                  Pest Control That Feels Clear, Calm & Practical
                </h2>

                <p className="text-base text-white/72 leading-relaxed font-medium mb-8">
                  At {LOCAL.businessName}, our commitment is to make pest
                  control easier to understand. We listen to the issue, inspect
                  the signs, explain the treatment options and provide practical
                  support for the property.
                </p>

                <div className="grid grid-cols-1 gap-3 mb-9">
                  {["Clear Advice", "Local Dulwich Team", "Practical Prevention"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white/10 border border-white/15 px-4 py-4 flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#B8AEFF] shrink-0" />
                        <span className="text-sm font-black text-white">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5F52B5] hover:bg-[#4B4095] text-white px-6 py-4 text-xs font-black uppercase tracking-[0.15em] transition-all"
                  >
                    Book Inspection
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#15122D] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] hover:bg-[#F1EFFF] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COMMITMENT CARDS */}
          <div className="lg:col-span-7 commit-animate commit-delay-1">
            <div className="h-full rounded-[3rem] bg-white border border-[#5F52B5]/10 p-6 md:p-8 shadow-2xl shadow-slate-900/5">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#5F52B5] mb-3">
                    Service Promise
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black leading-tight text-[#15122D]">
                    Standards We Bring To Every Visit
                  </h3>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center shrink-0">
                  <HardHat className="w-7 h-7" />
                </div>
              </div>

              <div className="space-y-4">
                {commitments.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`commit-animate commit-delay-${
                        index + 1
                      } group rounded-[2rem] bg-[#F7F5FF] border border-[#5F52B5]/10 p-5 md:p-6 hover:bg-[#5F52B5] transition-all duration-300`}
                    >
                      <div className="flex flex-col sm:flex-row gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white text-[#5F52B5] flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>

                        <div>
                          <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5] group-hover:text-white/60 mb-1">
                            Commitment 0{index + 1}
                          </span>

                          <h4 className="text-xl font-black text-[#15122D] group-hover:text-white mb-2">
                            {item.title}
                          </h4>

                          <p className="text-sm text-slate-600 group-hover:text-white/80 font-medium leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[2rem] bg-[#15122D] text-white p-5 md:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#5F52B5] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-1">
                        Local Service Base
                      </span>
                      <p className="text-sm text-white/70 font-medium leading-relaxed">
                        Based near{" "}
                        <strong className="text-white">{LOCAL.address}</strong>,
                        supporting pest control enquiries across {LOCAL.area}.
                      </p>
                    </div>
                  </div>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#15122D] px-5 py-4 text-sm font-black hover:bg-[#F1EFFF] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    {LOCAL.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SIMPLE STRIP */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 commit-animate commit-delay-2">
          {[
            "No confusing explanations",
            "Treatment planned around the property",
            "Aftercare and prevention guidance",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white border border-[#5F52B5]/10 p-5 shadow-sm flex items-center gap-3"
            >
              <ShieldCheck className="w-5 h-5 text-[#5F52B5] shrink-0" />
              <span className="text-sm font-black text-[#15122D]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}