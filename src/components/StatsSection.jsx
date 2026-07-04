


// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight, Bug, MapPin, PhoneCall, ShieldCheck } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// function AnimatedCounter({ value, duration = 1400 }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const hasAnimated = useRef(false);

//   // Agar value static hai (jaise "24/7"), toh animate mat karo
//   const isStatic = value === "24/7";
  
//   const isFraction = value.includes("/") && !isStatic;
//   const numericString = value.replace(/[^0-9]/g, "");
//   const numericValue = parseInt(numericString, 10) || 0;
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isStatic) return;
//     const element = ref.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
//           let startTime = null;
//           const animateCount = (timestamp) => {
//             if (!startTime) startTime = timestamp;
//             const progress = Math.min((timestamp - startTime) / duration, 1);
//             setCount(Math.round(progress * numericValue));
//             if (progress < 1) requestAnimationFrame(animateCount);
//           };
//           requestAnimationFrame(animateCount);
//         }
//       },
//       { threshold: 0.35 }
//     );
//     observer.observe(element);
//     return () => observer.disconnect();
//   }, [numericValue, duration, isStatic]);

//   if (isStatic) return <span ref={ref}>{value}</span>;
//   if (isFraction) {
//     return (
//       <span ref={ref}>
//         {count}
//         <span className="mx-1 text-[#5E50B5]/35">/</span>
//         {value.split("/")[1]}
//       </span>
//     );
//   }

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function SuperGuardStatsSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     businessName: "SuperGuard Rotherhithe",
//     address: "10 Someford Way, London SE16 6QW",
//     phoneDisplay: "07448 491927",
//     phoneTel: "+447448491927",
//   };

//   const stats = [
//     { number: "24/7", label: "Support Line", desc: "Pest enquiries handled quickly.", icon: PhoneCall },
//     { number: "10+", label: "Pest Types", desc: "Rodents, insects and nesting pests.", icon: Bug },
//     { number: "100%", label: "SE16 Focus", desc: "Local Rotherhithe service coverage.", icon: MapPin },
//     { number: "5/5", label: "Clear Process", desc: "Inspect, advise, treat and prevent.", icon: ShieldCheck },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-white py-20 md:py-28">
//       <style>{`
//         @keyframes sgStatReveal { from { opacity: 0; transform: translateY(22px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
//         @keyframes sgLineMove { 0% { transform: translateX(-100%); opacity: .1; } 50% { opacity: .6; } 100% { transform: translateX(100%); opacity: .1; } }
//         .sg-stat-reveal { animation: sgStatReveal .75s ease-out both; }
//         .sg-line-move { animation: sgLineMove 5s linear infinite; }
//       `}</style>

//       <div className="absolute inset-x-0 top-0 h-32 bg-[#F7F6FF]" />
//       <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-[#5E50B5]/20 to-transparent" />
      
//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="max-w-4xl mx-auto text-center mb-12 sg-stat-reveal">
//           <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F4FF] border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//             <span className="w-2 h-2 rounded-full bg-[#5E50B5]" /> SuperGuard Local Performance
//           </span>
//           <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//             Simple Numbers Behind Our <span className="text-[#5E50B5]">Rotherhithe</span> Pest Control Service
//           </h2>
//         </div>

//         <div className="relative rounded-[3rem] bg-[#201A46] p-3 shadow-2xl shadow-[#201A46]/20 overflow-hidden sg-stat-reveal">
//           <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-[2.5rem] overflow-hidden">
//             {stats.map((stat, idx) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={idx} className="group relative p-7 md:p-8 min-h-[230px] border-b sm:border-r border-slate-100 last:border-r-0 hover:bg-[#F7F6FF] transition-all duration-500">
//                   <div className="flex items-center justify-between mb-8">
//                     <div className="w-12 h-12 rounded-2xl bg-[#F6F4FF] flex items-center justify-center group-hover:bg-[#5E50B5] transition-colors duration-300">
//                       <Icon className="w-5 h-5 text-[#5E50B5] group-hover:text-white transition-colors duration-300" strokeWidth={2.3} />
//                     </div>
//                   </div>
//                   <div className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tight mb-3">
//                     <AnimatedCounter value={stat.number} />
//                   </div>
//                   <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#5E50B5] mb-3">{stat.label}</h3>
//                   <p className="text-sm font-medium text-slate-600 leading-relaxed">{stat.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }












import React, { useEffect, useRef, useState } from "react";
import { Bug, Clock, Home, ShieldCheck, MapPin, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function AnimatedCounter({ value, duration = 1400 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const isStatic = value === "24/7";
  const numericString = value.replace(/[^0-9]/g, "");
  const numericValue = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isStatic) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.round(progress * numericValue));
            if (progress < 1) requestAnimationFrame(animateCount);
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [numericValue, duration, isStatic]);

  if (isStatic) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function SuperGuardStatsSection() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    businessName: "SuperGuard Dulwich",
    address: "67 Dulwich Village, London SE21 7BJ",
    phoneDisplay: "07405 264579",
    phoneTel: "+447405264579",
  };

  const stats = [
    {
      number: "24/7",
      label: "Callback Requests",
      desc: "Customers can send pest enquiries anytime through our quick callback form.",
      icon: Clock,
    },
    {
      number: "12+",
      label: "Pest Treatments",
      desc: "Covering rodents, bed bugs, cockroaches, ants, fleas, moths and wasps.",
      icon: Bug,
    },
    {
      number: "100%",
      label: "Dulwich Focused",
      desc: "A local pest control setup built around SE21 properties and nearby streets.",
      icon: Home,
    },
    {
      number: "4",
      label: "Clear Service Steps",
      desc: "Inspection, identification, treatment and prevention advice after the visit.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <style>{`
        @keyframes sgRevealUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes sgRotateSoft {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .sg-reveal-up {
          animation: sgRevealUp .75s ease-out both;
        }

        .sg-rotate-soft {
          animation: sgRotateSoft 22s linear infinite;
        }
      `}</style>

      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F6FF_55%,#FFFFFF_100%)]" />
        <div className="absolute -top-32 -right-28 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
        <div className="absolute bottom-10 -left-28 w-[380px] h-[380px] rounded-full bg-[#15122D]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-14 sg-reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F1EFFF] border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5]">
            <span className="w-2 h-2 rounded-full bg-[#5F52B5]" />
            SuperGuard Dulwich Service Standard
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
            Pest Control Numbers That Show How We Work In{" "}
            <span className="text-[#5F52B5]">Dulwich</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            These are not random claims. They explain the way SuperGuard Dulwich
            handles pest enquiries, local coverage and property-focused treatments.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT FEATURE CARD */}
          <div className="lg:col-span-5 sg-reveal-up">
            <div className="relative h-full min-h-[520px] rounded-[3rem] overflow-hidden bg-[#15122D] text-white p-7 sm:p-8 shadow-2xl shadow-[#15122D]/20">
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:22px_22px]" />
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[35px] border-[#5F52B5]/40 sg-rotate-soft" />
              <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full bg-[#5F52B5]/25 blur-3xl" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-3xl bg-[#5F52B5] flex items-center justify-center mb-7 shadow-xl shadow-[#5F52B5]/30">
                    <MapPin className="w-7 h-7 text-white" strokeWidth={2.4} />
                  </div>

                  <span className="block text-[11px] font-black uppercase tracking-[0.22em] text-[#B8AEFF] mb-3">
                    Local Coverage
                  </span>

                  <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-5">
                    {LOCAL.postcode}
                  </h3>

                  <p className="text-base text-white/75 leading-relaxed font-medium max-w-sm">
                    A Dulwich-focused pest control service for homes, flats,
                    shops, landlords and commercial premises near Dulwich Village.
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  <div className="rounded-[2rem] bg-white/10 border border-white/15 p-5">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/45 mb-2">
                      Address
                    </span>
                    <address className="not-italic text-sm sm:text-base font-black leading-relaxed">
                      {LOCAL.address}
                    </address>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`tel:${LOCAL.phoneTel}`}
                      className="rounded-2xl bg-white text-[#15122D] px-5 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#F1EFFF] transition-all"
                    >
                      {LOCAL.phoneDisplay}
                    </a>

                    <Link
                      to="/contact-us"
                      className="rounded-2xl bg-[#5F52B5] text-white px-5 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#4B4095] transition-all"
                    >
                      Get Help
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT TIMELINE STATS */}
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-[3rem] bg-[#F7F5FF] border border-[#5F52B5]/10 p-5 sm:p-7 lg:p-8 shadow-xl">
              <div className="absolute top-10 bottom-10 left-[38px] sm:left-[50px] w-[2px] bg-[#5F52B5]/15" />

              <div className="space-y-5 relative z-10">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="relative grid grid-cols-[64px_1fr] sm:grid-cols-[84px_1fr] gap-4 sg-reveal-up"
                      style={{ animationDelay: `${index * 120}ms` }}
                    >
                      <div className="relative z-10 flex justify-center">
                        <div className="w-16 h-16 rounded-3xl bg-white border border-[#5F52B5]/15 shadow-lg flex items-center justify-center">
                          <Icon
                            className="w-6 h-6 text-[#5F52B5]"
                            strokeWidth={2.4}
                          />
                        </div>
                      </div>

                      <div className="group rounded-[2rem] bg-white border border-slate-100 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                          <div className="text-4xl sm:text-5xl font-black text-[#15122D] tracking-tight">
                            <AnimatedCounter value={stat.number} />
                          </div>

                          <span className="inline-flex w-fit rounded-full bg-[#F1EFFF] px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-[#15122D] mb-2">
                          {stat.label}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                          {stat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 rounded-[2rem] bg-white border border-[#5F52B5]/10 p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5F52B5] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-white" strokeWidth={2.4} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#15122D]">
                        Need pest control in {LOCAL.area}?
                      </h3>
                      <p className="text-sm text-slate-600 font-medium mt-1">
                        Speak directly with the {LOCAL.businessName} team.
                      </p>
                    </div>
                  </div>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="rounded-2xl bg-[#5F52B5] text-white px-6 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#4B4095] transition-all shadow-lg shadow-[#5F52B5]/20"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}