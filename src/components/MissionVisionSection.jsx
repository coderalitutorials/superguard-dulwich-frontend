// import React from "react";
// import {
//   Target,
//   Eye,
//   PhoneCall,
//   Check,
//   Sparkles,
//   Activity,
//   MapPin,
//   ShieldCheck,
//   ArrowUpRight,
// } from "lucide-react";

// export default function MissionVisionSection() {
//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     address: "10 Someford Way, London SE16 6QW",
//     phone: "07448 491927",
//     phoneTel: "+447448491927",
//     businessName: "SuperGuard Rotherhithe",
//   };

//   const cards = [
//     {
//       icon: Target,
//       label: "Our Mission",
//       title: "Make pest control simple, safe and easy to understand.",
//       text: `Our mission is to help ${LOCAL.area} homes and businesses deal with pest problems through careful inspections, clear advice and practical treatment planning.`,
//       points: ["Clear pest checks", "Safe treatment advice", "Local support"],
//     },
//     {
//       icon: Eye,
//       label: "Our Vision",
//       title: "Build trusted local pest support for every property type.",
//       text: `We want ${LOCAL.businessName} to be known for honest communication, reliable local service and pest control solutions that help reduce repeat problems.`,
//       points: ["Better prevention", "Helpful aftercare", "Trusted service"],
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-white py-24 sm:py-32">
//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F7F6FF] to-white" />
//       <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//       <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#F0EEFF] blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
//           <div className="lg:col-span-7">
//             <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F4FF] border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//               <Activity className="w-4 h-4" />
//               Mission & Vision
//             </span>

//             <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//               Our Promise To{" "}
//               <span className="text-[#5E50B5]">Rotherhithe</span> Customers
//             </h2>
//           </div>

//           <div className="lg:col-span-5">
//             <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
//               SuperGuard Rotherhithe is built around one clear idea: pest
//               control should feel professional, understandable and reliable from
//               the first call to the final advice.
//             </p>
//           </div>
//         </div>

//         <div className="rounded-[3rem] bg-[#4C4098] p-4 md:p-5 shadow-2xl shadow-[#4C4098]/20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//             {cards.map((card, index) => {
//               const Icon = card.icon;

//               return (
//                 <div
//                   key={card.label}
//                   className="rounded-[2.5rem] bg-white p-7 md:p-9 lg:p-10 border border-white/20"
//                 >
//                   <div className="flex items-start justify-between gap-5 mb-8">
//                     <div className="w-16 h-16 rounded-3xl bg-[#F6F4FF] text-[#5E50B5] flex items-center justify-center">
//                       <Icon className="w-7 h-7" />
//                     </div>

//                     <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">
//                       0{index + 1}
//                     </span>
//                   </div>

//                   <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#5E50B5] mb-3">
//                     {card.label}
//                   </span>

//                   <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight text-slate-950 mb-5">
//                     {card.title}
//                   </h3>

//                   <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-7">
//                     {card.text}
//                   </p>

//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                     {card.points.map((point) => (
//                       <div
//                         key={point}
//                         className="rounded-2xl bg-[#F7F6FF] border border-[#5E50B5]/10 p-4 flex items-center gap-2"
//                       >
//                         <Check className="w-4 h-4 text-[#5E50B5] shrink-0" />
//                         <span className="text-xs font-black text-slate-700">
//                           {point}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
//           <div className="lg:col-span-8 rounded-[2.5rem] bg-[#F7F6FF] border border-[#5E50B5]/10 p-6 md:p-8">
//             <div className="flex flex-col md:flex-row md:items-center gap-5">
//               <div className="w-14 h-14 rounded-2xl bg-white text-[#5E50B5] flex items-center justify-center shrink-0">
//                 <MapPin className="w-6 h-6" />
//               </div>

//               <div>
//                 <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5] mb-2">
//                   Local Service Base
//                 </span>
//                 <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold">
//                   Based near{" "}
//                   <strong className="text-slate-950">{LOCAL.address}</strong>,
//                   supporting pest control enquiries across {LOCAL.area} and
//                   nearby {LOCAL.postcode}.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-4 rounded-[2.5rem] bg-white border border-[#5E50B5]/10 p-6 md:p-8 shadow-xl shadow-slate-900/5">
//             <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5] mb-3">
//               Speak With Us
//             </span>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="inline-flex items-center justify-between w-full rounded-2xl bg-[#4C4098] text-white px-5 py-4 font-black hover:scale-[1.03] transition-all"
//             >
//               <span>{LOCAL.phone}</span>
//               <PhoneCall className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         <div className="mt-8 rounded-[2.5rem] bg-white border border-[#5E50B5]/10 p-6 md:p-8 shadow-xl shadow-slate-900/5 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-2xl bg-[#F6F4FF] text-[#5E50B5] flex items-center justify-center shrink-0">
//               <ShieldCheck className="w-5 h-5" />
//             </div>

//             <div>
//               <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5] mb-1">
//                 SuperGuard Standard
//               </span>
//               <p className="text-sm text-slate-600 font-semibold leading-relaxed">
//                 Inspection first, clear explanation, suitable treatment planning
//                 and practical prevention guidance.
//               </p>
//             </div>
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#5E50B5]/20 text-[#5E50B5] px-6 py-4 text-sm font-black hover:bg-[#5E50B5] hover:text-white transition-all"
//           >
//             Call Local Team
//             <ArrowUpRight className="w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }






// import React, { useEffect } from "react";
// import {
//   Target,
//   Eye,
//   PhoneCall,
//   Check,
//   Activity,
//   MapPin,
//   ShieldCheck,
//   ArrowUpRight,
//   SearchCheck,
//   Home,
// } from "lucide-react";

// export default function MissionVisionSection() {
//   const LOCAL = {
//     area: "Dulwich",
//     postcode: "SE21",
//     address: "67 Dulwich Village, London SE21 7BJ",
//     phone: "07405 264579",
//     phoneTel: "+447405264579",
//     businessName: "SuperGuard Dulwich",
//   };

//   const cards = [
//     {
//       icon: Target,
//       label: "Our Mission",
//       title: "Make pest control feel clear from the first inspection.",
//       text: `Our mission is to help ${LOCAL.area} customers understand what pest issue they are facing, what may be causing it and which treatment route makes sense for the property.`,
//       points: ["Property checks", "Clear explanation", "Practical treatment"],
//     },
//     {
//       icon: Eye,
//       label: "Our Vision",
//       title: "Become a trusted local pest control choice across SE21.",
//       text: `We want ${LOCAL.businessName} to be recognised for honest advice, careful service and prevention-focused pest control support for local homes and businesses.`,
//       points: ["Better prevention", "Local trust", "Helpful aftercare"],
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".mv-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("mv-show");
//         });
//       },
//       { threshold: 0.16 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-white py-24 sm:py-32">
//       <style>{`
//         .mv-animate {
//           opacity: 0;
//           transform: translateY(26px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//           will-change: opacity, transform;
//         }

//         .mv-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .mv-delay-1 { transition-delay: 120ms; }
//         .mv-delay-2 { transition-delay: 220ms; }
//         .mv-delay-3 { transition-delay: 320ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .mv-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-[46%] bg-[#F7F5FF]" />
//         <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
//         <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         {/* HEADER */}
//         <div className="max-w-4xl mx-auto text-center mb-14 mv-animate">
//           <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] shadow-sm">
//             <Activity className="w-4 h-4" />
//             Mission & Vision
//           </span>

//           <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
//             What Drives{" "}
//             <span className="text-[#5F52B5]">SuperGuard Dulwich</span>
//           </h2>

//           <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
//             We believe pest control should be easy to understand, carefully
//             planned and focused on helping customers reduce future problems, not
//             just deal with what is visible today.
//           </p>
//         </div>

//         {/* MISSION + VISION CARDS */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {cards.map((card, index) => {
//             const Icon = card.icon;

//             return (
//               <div
//                 key={card.label}
//                 className={`mv-animate mv-delay-${
//                   index + 1
//                 } group relative overflow-hidden rounded-[3rem] bg-white border border-[#5F52B5]/10 p-7 md:p-9 lg:p-10 shadow-2xl shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300`}
//               >
//                 <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-[4rem] bg-[#F7F5FF] group-hover:bg-[#5F52B5]/10 transition-all" />

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between gap-5 mb-8">
//                     <div className="w-16 h-16 rounded-3xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center group-hover:bg-[#5F52B5] group-hover:text-white transition-colors">
//                       <Icon className="w-7 h-7" />
//                     </div>

//                     <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">
//                       0{index + 1}
//                     </span>
//                   </div>

//                   <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#5F52B5] mb-3">
//                     {card.label}
//                   </span>

//                   <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight text-[#15122D] mb-5">
//                     {card.title}
//                   </h3>

//                   <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-7">
//                     {card.text}
//                   </p>

//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                     {card.points.map((point) => (
//                       <div
//                         key={point}
//                         className="rounded-2xl bg-[#F7F5FF] border border-[#5F52B5]/10 p-4 flex items-center gap-2"
//                       >
//                         <Check className="w-4 h-4 text-[#5F52B5] shrink-0" />
//                         <span className="text-xs font-black text-[#15122D]">
//                           {point}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* LOCAL CTA ROW */}
//         <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
//           <div className="lg:col-span-8 rounded-[2.5rem] bg-[#15122D] text-white p-6 md:p-8 mv-animate mv-delay-2">
//             <div className="flex flex-col md:flex-row md:items-center gap-5">
//               <div className="w-14 h-14 rounded-2xl bg-[#5F52B5] text-white flex items-center justify-center shrink-0">
//                 <MapPin className="w-6 h-6" />
//               </div>

//               <div>
//                 <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-2">
//                   Local Service Base
//                 </span>
//                 <p className="text-sm md:text-base text-white/75 leading-relaxed font-semibold">
//                   Based near{" "}
//                   <strong className="text-white">{LOCAL.address}</strong>,
//                   supporting pest control enquiries across {LOCAL.area} and
//                   nearby {LOCAL.postcode}.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-4 rounded-[2.5rem] bg-[#5F52B5] text-white p-6 md:p-8 shadow-xl shadow-[#5F52B5]/20 mv-animate mv-delay-3">
//             <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-white/60 mb-3">
//               Speak With Us
//             </span>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="inline-flex items-center justify-between w-full rounded-2xl bg-white text-[#15122D] px-5 py-4 font-black hover:bg-[#F1EFFF] transition-all"
//             >
//               <span>{LOCAL.phone}</span>
//               <PhoneCall className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* STANDARD STRIP */}
//         <div className="mt-8 rounded-[2.5rem] bg-white border border-[#5F52B5]/10 p-6 md:p-8 shadow-xl shadow-slate-900/5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mv-animate mv-delay-3">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center shrink-0">
//               <ShieldCheck className="w-5 h-5" />
//             </div>

//             <div>
//               <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-1">
//                 SuperGuard Standard
//               </span>
//               <p className="text-sm text-slate-600 font-semibold leading-relaxed">
//                 Inspection first, clear explanation, suitable treatment planning
//                 and practical prevention guidance for Dulwich customers.
//               </p>
//             </div>
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#5F52B5]/20 text-[#5F52B5] px-6 py-4 text-sm font-black hover:bg-[#5F52B5] hover:text-white transition-all"
//           >
//             Call Local Team
//             <ArrowUpRight className="w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }










import React, { useEffect } from "react";
import {
  Target,
  Eye,
  PhoneCall,
  Check,
  Activity,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  SearchCheck,
} from "lucide-react";

export default function MissionVisionSection() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    address: "67 Dulwich Village, London SE21 7BJ",
    phone: "07405 264579",
    phoneTel: "+447405264579",
    businessName: "SuperGuard Dulwich",
  };

  const promises = [
    "Inspect before treating",
    "Explain the pest issue clearly",
    "Plan treatment around the property",
    "Support better prevention",
  ];

  const process = [
    {
      icon: SearchCheck,
      title: "Understand",
      text: "We check signs, activity level and possible access routes.",
    },
    {
      icon: Target,
      title: "Treat",
      text: "We recommend a suitable route based on the pest and property.",
    },
    {
      icon: ShieldCheck,
      title: "Prevent",
      text: "We give practical advice to help reduce repeat pest activity.",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".mv-premium-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("mv-premium-show");
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <style>{`
        .mv-premium-animate {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .mv-premium-show {
          opacity: 1;
          transform: translateY(0);
        }

        .mv-premium-delay-1 { transition-delay: 120ms; }
        .mv-premium-delay-2 { transition-delay: 220ms; }
        .mv-premium-delay-3 { transition-delay: 320ms; }

        @media (prefers-reduced-motion: reduce) {
          .mv-premium-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[48%] bg-[#F7F5FF]" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8 mv-premium-animate">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] shadow-sm">
              <Activity className="w-4 h-4" />
              Mission & Vision
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
              The Standard Behind{" "}
              <span className="text-[#5F52B5]">SuperGuard Dulwich</span>
            </h2>
          </div>

          <div className="lg:col-span-4 mv-premium-animate mv-premium-delay-1">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              We want pest control to feel organised, understandable and
              property-focused from the first inspection to the final advice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 mv-premium-animate mv-premium-delay-1">
            <div className="relative h-full min-h-[560px] overflow-hidden rounded-[3rem] bg-[#5F52B5] text-white shadow-2xl shadow-[#5F52B5]/25">
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:24px_24px]" />
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#7B6CE8]/40 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-[#43378F]/35 to-transparent" />

              <div className="relative z-10 h-full p-7 md:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-3xl bg-white/15 border border-white/20 flex items-center justify-center mb-8 shadow-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  <span className="block text-[11px] font-black uppercase tracking-[0.22em] text-white/70 mb-4">
                    Our Mission
                  </span>

                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.02] mb-6 max-w-3xl">
                    Make every pest control visit clear, careful and practical.
                  </h3>

                  <p className="text-base text-white/78 leading-relaxed font-medium max-w-2xl">
                    Our mission is to help {LOCAL.area} customers understand
                    what pest issue they are facing, what may be causing it and
                    which treatment route makes sense for the property.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {promises.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/12 border border-white/20 px-4 py-4 flex items-center gap-3"
                    >
                      <Check className="w-4 h-4 text-white shrink-0" />
                      <span className="text-sm font-black text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="mv-premium-animate mv-premium-delay-2 rounded-[3rem] bg-white border border-[#5F52B5]/10 p-7 md:p-8 shadow-2xl shadow-slate-900/5">
              <div className="flex items-start justify-between gap-5 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">
                  Vision
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight text-[#15122D] mb-5">
                A trusted local pest control choice across SE21.
              </h3>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                We want {LOCAL.businessName} to be recognised for honest
                communication, reliable local service and prevention-focused
                support for homes, landlords and businesses.
              </p>
            </div>

            <div className="mv-premium-animate mv-premium-delay-3 rounded-[3rem] bg-[#F7F5FF] border border-[#5F52B5]/10 p-7 md:p-8">
              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#5F52B5] mb-6">
                Our Working Method
              </span>

              <div className="space-y-4">
                {process.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white border border-[#5F52B5]/10 p-4 flex gap-4 items-start"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#5F52B5] text-white flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5] mb-1">
                          Step 0{index + 1}
                        </span>
                        <h4 className="text-base font-black text-[#15122D] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 rounded-[2.5rem] bg-white border border-[#5F52B5]/10 p-6 md:p-8 shadow-xl shadow-slate-900/5 mv-premium-animate mv-premium-delay-2">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-2">
                  Local Service Base
                </span>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold">
                  Based near{" "}
                  <strong className="text-[#15122D]">{LOCAL.address}</strong>,
                  supporting pest control enquiries across {LOCAL.area} and
                  nearby {LOCAL.postcode}.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-[2.5rem] bg-[#5F52B5] text-white p-6 md:p-8 shadow-xl shadow-[#5F52B5]/20 mv-premium-animate mv-premium-delay-3">
            <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-white/60 mb-3">
              Speak With Us
            </span>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="inline-flex items-center justify-between w-full rounded-2xl bg-white text-[#15122D] px-5 py-4 font-black hover:bg-[#F1EFFF] transition-all"
            >
              <span>{LOCAL.phone}</span>
              <PhoneCall className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-[2.5rem] bg-[#15122D] text-white p-6 md:p-8 shadow-xl shadow-[#15122D]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mv-premium-animate mv-premium-delay-3">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#5F52B5] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <div>
              <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-1">
                SuperGuard Standard
              </span>
              <p className="text-sm text-white/70 font-semibold leading-relaxed">
                Inspection first, clear explanation, suitable treatment planning
                and practical prevention guidance for Dulwich customers.
              </p>
            </div>
          </div>

          <a
            href={`tel:${LOCAL.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#15122D] px-6 py-4 text-sm font-black hover:bg-[#F1EFFF] transition-all"
          >
            Call Local Team
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}