

// import React, { useEffect } from "react";

// export default function MissionBannerSection() {
//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     businessName: "SuperGuard Rotherhithe",
//     address: "10 Someford Way, London SE16 6QW",
//     phoneDisplay: "07448 491927",
//     phoneTel: "+447448491927",
//   };

//   const promises = [
//     { title: "Inspect Before Treating", text: "We check signs, access points and pest activity before choosing the right treatment method." },
//     { title: "Clear Advice Every Time", text: "You get simple guidance on what we found, what needs doing and how to reduce future pest issues." },
//     { title: "Safe Local Treatments", text: `Our service is planned for homes, flats and businesses across ${LOCAL.area} and nearby ${LOCAL.postcode}.` },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sg-show");
//         }
//       });
//     }, { threshold: 0.2 });

//     document.querySelectorAll(".sg-animate").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden bg-[#F7F6FF] py-24 lg:py-32 font-sans">
//       <style>{`
//         .sg-animate { opacity: 0; transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
//         .sg-left { transform: translateX(-50px); }
//         .sg-right { transform: translateX(50px); }
//         .sg-fade-up { transform: translateY(50px); }
//         .sg-show { opacity: 1 !important; transform: translate(0, 0) !important; }
//       `}</style>

//       <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//       <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-white/90 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-6 sg-animate sg-left">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5] shadow-sm">
//               <span className="w-2 h-2 rounded-full bg-[#5E50B5]" /> Our Local Mission
//             </span>
//             <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//               Pest Control That Feels <span className="text-[#5E50B5]">Clear, Safe & Local</span>
//             </h2>
//             <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
//               At {LOCAL.businessName}, our mission is to make pest control less stressful for local customers.
//             </p>
            
//             <div className="mt-8 rounded-[2rem] bg-white border border-[#5E50B5]/10 p-5 md:p-6 shadow-xl shadow-slate-900/5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="rounded-2xl bg-[#F7F6FF] p-4">
//                   <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Local Area</span>
//                   <strong className="text-slate-950 text-lg">{LOCAL.area} {LOCAL.postcode}</strong>
//                 </div>
//                 <div className="rounded-2xl bg-[#201A46] text-white p-4">
//                   <span className="block text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Call Direct</span>
//                   <a href={`tel:${LOCAL.phoneTel}`} className="text-lg font-black">{LOCAL.phoneDisplay}</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT VISUAL WITH OVERLAY */}
//           <div className="lg:col-span-6 sg-animate sg-right">
//             <div className="relative rounded-[3rem] bg-white p-3 shadow-2xl border border-[#5E50B5]/10 rotate-0 lg:rotate-[-2deg]">
//               <div className="relative rounded-[2.4rem] overflow-hidden min-h-[500px] bg-slate-200">
//                 <img src="/images/mission-superguard.webp" alt="Pest control" className="w-full h-full object-cover" loading="lazy" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                
//                 {/* Image Overlay Content */}
//                 <div className="absolute top-6 left-6 right-6 flex justify-between gap-3">
//                   <div className="rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
//                     <span className="block text-[10px] font-black uppercase tracking-widest text-[#5E50B5]">Service</span>
//                     <span className="block text-sm font-black text-slate-950">Pest Control</span>
//                   </div>
//                   <div className="rounded-2xl bg-[#5E50B5] text-white px-4 py-3 shadow-xl">
//                     <span className="block text-[10px] font-black uppercase tracking-widest text-white/70">Area</span>
//                     <span className="block text-sm font-black">{LOCAL.postcode}</span>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/95 backdrop-blur-md p-5 shadow-xl">
//                   <h3 className="text-xl font-black text-slate-950 mb-2">No Guesswork. Just A Clear Treatment Plan.</h3>
//                   <p className="text-sm font-semibold text-slate-600 leading-relaxed">
//                     We explain the pest issue in simple terms and recommend the right next step for your property.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM PROMISE STRIP */}
//         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
//           {promises.map((item, index) => (
//             <div key={index} className="sg-animate sg-fade-up rounded-[2rem] bg-white border border-[#5E50B5]/10 p-6 shadow-xl">
//               <span className="inline-flex w-10 h-10 rounded-2xl bg-[#5E50B5] text-white items-center justify-center font-black mb-5">
//                 {index + 1}
//               </span>
//               <h3 className="text-lg font-black text-slate-950 mb-2">{item.title}</h3>
//               <p className="text-sm text-slate-600 font-medium">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












import React, { useEffect } from "react";
import {
  CheckCircle,
  ClipboardCheck,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function MissionBannerSection() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    businessName: "SuperGuard Dulwich",
    address: "67 Dulwich Village, London SE21 7BJ",
    phoneDisplay: "07405 264579",
    phoneTel: "+447405264579",
  };

  const missionSteps = [
    {
      title: "Find The Source",
      text: "We look for entry points, hiding places, pest trails and the conditions causing the problem.",
      icon: ClipboardCheck,
    },
    {
      title: "Treat With Purpose",
      text: "Every treatment is selected around the pest type, property layout and activity level.",
      icon: ShieldCheck,
    },
    {
      title: "Prevent Repeat Issues",
      text: "You receive clear aftercare advice to help reduce future pest activity around the property.",
      icon: CheckCircle,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".sg-mission-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("sg-mission-show");
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32 font-sans">
      <style>{`
        .sg-mission-animate {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .sg-mission-show {
          opacity: 1;
          transform: translateY(0);
        }

        .sg-delay-1 { transition-delay: 100ms; }
        .sg-delay-2 { transition-delay: 180ms; }
        .sg-delay-3 { transition-delay: 260ms; }
        .sg-delay-4 { transition-delay: 340ms; }

        @keyframes sgSoftFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .sg-soft-float {
          animation: sgSoftFloat 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-mission-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .sg-soft-float {
            animation: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-[#F6F3FF]" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#F7F5FF] to-transparent" />
        <div className="absolute -top-28 -left-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[460px] h-[460px] rounded-full bg-[#15122D]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* LEFT MISSION PANEL WITH IMAGE */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-[3rem] bg-[#15122D] text-white shadow-2xl shadow-[#15122D]/25 relative overflow-hidden sg-mission-animate">
              <div className="relative h-[300px] sm:h-[360px] overflow-hidden">
                <img
                  src="/images/mission-superguard.webp"
                  alt={`${LOCAL.businessName} pest control mission in ${LOCAL.area}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15122D] via-[#15122D]/30 to-transparent" />

                <div className="absolute top-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
                    Mission
                  </span>
                  <span className="block text-sm font-black text-[#15122D]">
                    Dulwich Pest Control
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 rounded-2xl bg-[#5F52B5] text-white px-4 py-3 shadow-xl">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-white/65">
                    Area
                  </span>
                  <span className="block text-sm font-black">
                    {LOCAL.postcode}
                  </span>
                </div>
              </div>

              <div className="relative p-6 sm:p-8 lg:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#B8AEFF]">
                  <span className="w-2 h-2 rounded-full bg-[#B8AEFF]" />
                  Our Dulwich Mission
                </span>

                <h2 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
                  Pest Control That Feels Clear Before It Starts
                </h2>

                <p className="mt-6 text-base sm:text-lg text-white/72 leading-relaxed font-medium">
                  At {LOCAL.businessName}, our mission is to make pest control
                  simple for local customers. We explain what we find, why it is
                  happening and what treatment makes sense for your property.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-[2rem] bg-white/10 border border-white/15 p-5">
                    <MapPin className="w-6 h-6 text-[#B8AEFF] mb-4" />
                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/45 mb-2">
                      Local Area
                    </span>
                    <strong className="block text-xl font-black">
                      {LOCAL.area} {LOCAL.postcode}
                    </strong>
                  </div>

                  <div className="rounded-[2rem] bg-[#5F52B5] p-5 shadow-xl shadow-[#5F52B5]/25">
                    <PhoneCall className="w-6 h-6 text-white mb-4" />
                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/55 mb-2">
                      Call Direct
                    </span>
                    <a
                      href={`tel:${LOCAL.phoneTel}`}
                      className="block text-xl font-black"
                    >
                      {LOCAL.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="mt-8 rounded-[2rem] bg-white p-5 sm:p-6 text-[#15122D]">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5] mb-2">
                    Local Base
                  </span>
                  <address className="not-italic text-base sm:text-lg font-black leading-relaxed">
                    {LOCAL.address}
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PROCESS AREA */}
          <div className="lg:col-span-6">
            <div className="h-full flex flex-col justify-center">
              <div className="sg-mission-animate sg-delay-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#5F52B5]" />
                  No Guesswork Service
                </span>

                <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#15122D]">
                  Our Promise Is Not Just Removal — It Is Better Control
                </h3>

                <p className="mt-5 text-base text-slate-600 leading-relaxed font-medium max-w-2xl">
                  We combine inspection, treatment and prevention guidance so
                  customers understand the complete picture, not just the visible
                  pest.
                </p>
              </div>

              <div className="mt-9 space-y-5">
                {missionSteps.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`sg-mission-animate sg-delay-${
                        index + 2
                      } group relative rounded-[2rem] bg-white border border-[#5F52B5]/10 p-5 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                    >
                      <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-[#5F52B5] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                      <div className="flex gap-5 items-start">
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#F1EFFF] flex items-center justify-center group-hover:bg-[#5F52B5] transition-colors duration-300">
                          <Icon
                            className="w-6 h-6 text-[#5F52B5] group-hover:text-white transition-colors duration-300"
                            strokeWidth={2.4}
                          />
                        </div>

                        <div>
                          <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5] mb-1">
                            Step 0{index + 1}
                          </span>

                          <h4 className="text-xl font-black text-[#15122D] mb-2">
                            {item.title}
                          </h4>

                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="sg-mission-animate sg-delay-4 mt-7 rounded-[2rem] bg-[#15122D] text-white p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-black">
                      Need help around {LOCAL.area}?
                    </h4>
                    <p className="text-sm text-white/65 mt-1">
                      Speak with SuperGuard Dulwich and arrange pest support.
                    </p>
                  </div>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="rounded-2xl bg-[#5F52B5] px-6 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#4B4095] transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TRUST STRIP */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Clear inspection before treatment",
            "Property-specific pest control plan",
            "Simple aftercare and prevention advice",
          ].map((item, index) => (
            <div
              key={item}
              className={`sg-mission-animate sg-delay-${
                index + 1
              } rounded-2xl bg-white border border-[#5F52B5]/10 px-5 py-4 shadow-sm flex items-center gap-3`}
            >
              <span className="w-9 h-9 rounded-xl bg-[#F1EFFF] text-[#5F52B5] flex items-center justify-center font-black">
                ✓
              </span>
              <span className="text-sm font-black text-[#15122D]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}