



// import React, { useEffect, useRef } from "react";
// import {
//   ArrowUpRight,
//   ShieldCheck,
//   Crosshair,
//   Sparkles,
//   CheckCircle2,
//   Phone,
//   ShieldAlert,
//   Eye,
//   MapPin,
//   Bug,
//   Home,
//   Building2,
// } from "lucide-react";

// export default function AboutPassionSection() {
//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     address: "10 Someford Way, London SE16 6QW",
//     phone: "07448 491927",
//     phoneTel: "+447448491927",
//     businessName: "SuperGuard Rotherhithe",
//   };

//   const targetedPests = [
//     "Rats & Mice Control",
//     "Bed Bug Treatment",
//     "Cockroach Control",
//     "Wasp Nest Control",
//     "Flea Treatment",
//     "Property Proofing",
//   ];

//   const focusCards = [
//     { icon: Crosshair, title: "Find The Real Source", text: "We look beyond the visible pest activity and check where pests may be entering, hiding or nesting." },
//     { icon: ShieldCheck, title: "Treat With A Clear Plan", text: "Every treatment is explained in simple terms so you understand what needs doing and why." },
//     { icon: Home, title: "Protect Local Properties", text: `Our support is built for homes, flats, landlords and commercial spaces across ${LOCAL.area}.` },
//   ];

//   // Animation Trigger Hook
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-in");
//         }
//       });
//     }, { threshold: 0.1 });

//     const elements = document.querySelectorAll(".scroll-animate");
//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F7F6FF] py-24 sm:py-32">
//       <style>{`
//         .scroll-animate { opacity: 0; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
//         .from-left { transform: translateX(-50px); }
//         .from-right { transform: translateX(50px); }
//         .animate-in { opacity: 1 !important; transform: translateX(0) !important; }
        
//         @keyframes sgPassionFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
//         .sg-passion-float { animation: sgPassionFloat 4s ease-in-out infinite; }
//       `}</style>

//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
//       <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
      
//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
//           {/* LEFT IMAGE PANEL */}
//           <div className="lg:col-span-5 scroll-animate from-left">
//             <div className="relative h-full min-h-[520px] rounded-[3rem] overflow-hidden bg-slate-200 shadow-2xl shadow-[#5E50B5]/15">
//               <img src="/images/about-superguard-banner.webp" alt="Pest control" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
              
//               <div className="absolute top-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
//                 <span className="block text-[10px] font-black uppercase text-[#5E50B5]">Local Area</span>
//                 <span className="block text-sm font-black text-slate-950">{LOCAL.area} {LOCAL.postcode}</span>
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/95 backdrop-blur-md p-6 shadow-2xl">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-2xl bg-[#5E50B5] text-white flex items-center justify-center shrink-0"> <Eye className="w-5 h-5" /> </div>
//                   <div>
//                     <h3 className="text-xl font-black text-slate-950 mb-2">Careful Pest Checks First</h3>
//                     <p className="text-sm text-slate-600 font-semibold">We inspect activity signs before recommending a treatment route.</p>
//                   </div>
//                 </div>
//               </div>

//               <a href={`tel:${LOCAL.phoneTel}`} className="absolute -bottom-1 right-6 rounded-3xl bg-[#4C4098] text-white px-5 py-4 shadow-2xl sg-passion-float">
//                 <span className="block text-[10px] font-black uppercase text-white/60">Call Direct</span>
//                 <span className="block text-lg font-black">{LOCAL.phone}</span>
//               </a>
//             </div>
//           </div>

//           {/* RIGHT STORY PANEL */}
//           <div className="lg:col-span-7 scroll-animate from-right">
//             <div className="h-full rounded-[3rem] bg-white border border-[#5E50B5]/10 p-7 md:p-10 lg:p-12 shadow-2xl shadow-slate-900/5">
//               <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 mb-6">
//                 We Don’t Just Treat The Surface — We Look For What’s Causing It.
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <p className="text-sm md:text-base text-slate-600 font-medium">Pest problems often start from small access gaps or hidden food sources. We start with a clear inspection.</p>
//                 <p className="text-sm md:text-base text-slate-600 font-medium">SuperGuard Rotherhithe focuses on treatment planning that makes sense for your property.</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
//                 {focusCards.map((item, index) => {
//                   const Icon = item.icon;
//                   return (
//                     <div key={index} className="group rounded-[2rem] border border-[#5E50B5]/10 bg-[#F8F7FF] hover:bg-[#4C4098] p-6 transition-all">
//                       <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-[#5E50B5]" /></div>
//                       <h4 className="font-black text-slate-950 group-hover:text-white mb-2">{item.title}</h4>
//                       <p className="text-xs text-slate-600 group-hover:text-white/80">{item.text}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









import React, { useEffect } from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Crosshair,
  CheckCircle2,
  Phone,
  Eye,
  MapPin,
  Home,
  Building2,
  SearchCheck,
  ClipboardCheck,
} from "lucide-react";

export default function AboutPassionSection() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    address: "67 Dulwich Village, London SE21 7BJ",
    phone: "07405 264579",
    phoneTel: "+447405264579",
    businessName: "SuperGuard Dulwich",
  };

  const targetedPests = [
    "Rats & Mice",
    "Bed Bugs",
    "Cockroaches",
    "Wasps",
    "Fleas",
    "Proofing",
  ];

  const focusCards = [
    {
      icon: SearchCheck,
      title: "Trace The Activity",
      text: "We look for pest signs, entry routes, hiding areas and conditions that may be causing the issue.",
    },
    {
      icon: ClipboardCheck,
      title: "Explain The Plan",
      text: "You get clear advice on what we found, what treatment fits and what steps come next.",
    },
    {
      icon: Building2,
      title: "Support Local Spaces",
      text: `Our approach works for houses, flats, landlords and business premises across ${LOCAL.area}.`,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".passion-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("passion-show");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7F5FF] py-24 sm:py-32">
      <style>{`
        .passion-animate {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .passion-show {
          opacity: 1;
          transform: translateY(0);
        }

        .passion-delay-1 { transition-delay: 120ms; }
        .passion-delay-2 { transition-delay: 220ms; }
        .passion-delay-3 { transition-delay: 320ms; }

        @media (prefers-reduced-motion: reduce) {
          .passion-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-44 bg-white" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 passion-animate">
            <div className="h-full rounded-[3rem] bg-white border border-[#5F52B5]/10 p-7 md:p-10 lg:p-12 shadow-2xl shadow-slate-900/5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F7F5FF] border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-6">
                <Crosshair className="w-4 h-4" />
                Our Pest Control Focus
              </span>

              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D] mb-6">
                We Focus On The Cause, Not Just The Visible Pest
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-9">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Pest activity often starts from small gaps, hidden harbourage,
                  food access or conditions around the property. SuperGuard
                  Dulwich starts by understanding where the activity is coming
                  from.
                </p>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Whether the issue involves rodents, bed bugs, cockroaches,
                  fleas, wasps or proofing, our aim is to give customers a clear
                  plan instead of confusing pest control advice.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {targetedPests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#F7F5FF] border border-[#5F52B5]/10 px-4 py-2 text-xs font-black text-[#15122D]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {focusCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`passion-animate passion-delay-${
                        index + 1
                      } group rounded-[2rem] border border-[#5F52B5]/10 bg-[#F8F7FF] hover:bg-[#5F52B5] p-6 transition-all duration-300`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#5F52B5]" />
                      </div>

                      <h4 className="font-black text-[#15122D] group-hover:text-white mb-2">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-600 group-hover:text-white/80 leading-relaxed font-medium">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE PANEL */}
          <div className="lg:col-span-5 passion-animate passion-delay-1">
            <div className="relative h-full min-h-[560px] rounded-[3rem] overflow-hidden bg-slate-200 shadow-2xl shadow-[#5F52B5]/15">
              <img
                src="/images/about-superguard-banner.webp"
                alt={`${LOCAL.businessName} pest control in ${LOCAL.area}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/85 via-[#15122D]/20 to-transparent" />

              <div className="absolute top-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
                <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
                  Local Area
                </span>
                <span className="block text-sm font-black text-[#15122D]">
                  {LOCAL.area} {LOCAL.postcode}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/95 backdrop-blur-md p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#5F52B5] text-white flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#15122D] mb-2">
                      Inspection Before Treatment
                    </h3>
                    <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                      We check activity signs and property risks before
                      recommending the next step.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="absolute top-6 right-6 rounded-2xl bg-[#5F52B5] text-white px-5 py-4 shadow-2xl"
              >
                <Phone className="w-5 h-5 mb-2" />
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/60">
                  Call Direct
                </span>
                <span className="block text-sm font-black">{LOCAL.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] bg-[#15122D] text-white p-6 md:p-8 passion-animate passion-delay-2">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#5F52B5] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>

              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-1">
                  Local Dulwich Service Base
                </span>
                <p className="text-sm text-white/75 font-medium leading-relaxed">
                  Based near <strong className="text-white">{LOCAL.address}</strong>,
                  supporting pest control enquiries across {LOCAL.area} and{" "}
                  {LOCAL.postcode}.
                </p>
              </div>
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="inline-flex justify-center items-center gap-2 rounded-2xl bg-white text-[#15122D] px-6 py-4 text-sm font-black hover:bg-[#F1EFFF] transition-all"
            >
              Call Local Team
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}