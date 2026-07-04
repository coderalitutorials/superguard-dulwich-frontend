


// import React from "react";
// import {
//   ShieldCheck,
//   MapPin,
//   Building2,
//   ArrowUpRight,
//   Target,
//   Shield,
//   Zap,
//   Phone,
//   CheckCircle2,
// } from "lucide-react";

// export default function AboutStorySection() {
//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     address: "10 Someford Way, London SE16 6QW",
//     phone: "07448 491927",
//     phoneTel: "+447448491927",
//     businessName: "SuperGuard Rotherhithe",
//   };

//   const features = [
//     {
//       icon: Target,
//       title: "We Start With The Cause",
//       text: "We look for signs, access points, harbourage areas and the conditions that may be helping pests stay active.",
//     },
//     {
//       icon: Shield,
//       title: "Clear Treatment Planning",
//       text: "You get simple advice on what we found, what treatment is suitable and what steps can reduce future pest activity.",
//     },
//     {
//       icon: Building2,
//       title: "Built For Local Properties",
//       text: `Our service supports houses, flats, landlords, shops and commercial spaces around ${LOCAL.area} and ${LOCAL.postcode}.`,
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-white mt-10 py-24 lg:py-32">
//       <style>{`
//         @keyframes sgStoryFade {
//           from { opacity: 0; transform: translateY(26px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes sgStoryFloat {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }

//         .sg-story-fade {
//           animation: sgStoryFade .8s ease-out both;
//         }

//         .sg-story-float {
//           animation: sgStoryFloat 4s ease-in-out infinite;
//         }
//       `}</style>

//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F7F6FF] to-white" />
//       <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//       <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#F0EEFF] blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         {/* TOP HEADER */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
//           <div className="lg:col-span-7 sg-story-fade">
//             <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F4FF] border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//               <span className="w-2 h-2 rounded-full bg-[#5E50B5]" />
//               About {LOCAL.businessName}
//             </span>

//             <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//               Local Pest Control With A{" "}
//               <span className="text-[#5E50B5]">Clear, Practical Approach</span>
//             </h2>
//           </div>

//           <div className="lg:col-span-5 sg-story-fade">
//             <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
//               SuperGuard Rotherhithe helps local customers understand the pest
//               issue properly before treatment begins. Our goal is simple: clear
//               advice, careful inspection and suitable pest control support for
//               homes and businesses across {LOCAL.postcode}.
//             </p>
//           </div>
//         </div>

//         {/* MAIN STORY LAYOUT */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
//           {/* LEFT LARGE STORY CARD */}
//           <div className="lg:col-span-7 sg-story-fade">
//             <div className="h-full rounded-[3rem] bg-[#4C4098] text-white p-7 md:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-[#4C4098]/20">
//               <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
//               <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/15 to-transparent" />

//               <div className="relative z-10">
//                 <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#DDD7FF] mb-7">
//                   <MapPin className="w-4 h-4" />
//                   Based In {LOCAL.area}
//                 </span>

//                 <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
//                   Helping Rotherhithe Properties Stay Safer From Pests
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <p className="text-sm md:text-base text-white/78 leading-relaxed font-medium">
//                     Pest problems can feel stressful when you do not know where
//                     they are coming from. We help customers make sense of the
//                     situation by checking the visible signs, likely routes and
//                     the type of pest involved.
//                   </p>

//                   <p className="text-sm md:text-base text-white/78 leading-relaxed font-medium">
//                     From rodents and cockroaches to bed bugs, fleas, ants and
//                     wasps, our team focuses on practical treatment advice and
//                     prevention guidance that suits your property.
//                   </p>
//                 </div>

//                 <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
//                   {[
//                     "Homes",
//                     "Flats",
//                     "Businesses",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="rounded-2xl bg-white/10 border border-white/10 p-5"
//                     >
//                       <CheckCircle2 className="w-5 h-5 text-[#DDD7FF] mb-3" />
//                       <span className="text-sm font-black text-white">
//                         {item}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTACT SUMMARY */}
//           <div className="lg:col-span-5 sg-story-fade">
//             <div className="h-full grid grid-cols-1 gap-5">
//               <div className="rounded-[2.5rem] bg-[#F7F6FF] border border-[#5E50B5]/10 p-7 md:p-8 shadow-xl shadow-slate-900/5">
//                 <div className="w-14 h-14 rounded-2xl bg-white text-[#5E50B5] flex items-center justify-center mb-6 shadow-lg shadow-slate-900/5">
//                   <ShieldCheck className="w-6 h-6" />
//                 </div>

//                 <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#5E50B5] mb-3">
//                   Service Standard
//                 </span>

//                 <h4 className="text-2xl font-black text-slate-950 mb-4">
//                   No Guesswork, No Confusing Advice
//                 </h4>

//                 <p className="text-sm text-slate-600 leading-relaxed font-medium">
//                   We keep the process easy to understand so you know what pest
//                   problem you have and what the next step should be.
//                 </p>
//               </div>

//               <div className="rounded-[2.5rem] bg-white border border-[#5E50B5]/10 p-7 md:p-8 shadow-xl shadow-slate-900/5">
//                 <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#5E50B5] mb-5">
//                   Local Details
//                 </span>

//                 <div className="space-y-5">
//                   <div className="flex gap-4">
//                     <MapPin className="w-5 h-5 text-[#5E50B5] shrink-0 mt-0.5" />
//                     <p className="text-sm font-bold text-slate-700 leading-relaxed">
//                       {LOCAL.address}
//                     </p>
//                   </div>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="flex gap-4 items-center text-slate-900 hover:text-[#5E50B5] transition-colors"
//                   >
//                     <Phone className="w-5 h-5 text-[#5E50B5] shrink-0" />
//                     <span className="text-lg font-black">{LOCAL.phone}</span>
//                   </a>
//                 </div>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5E50B5] hover:bg-[#4C4098] text-white px-5 py-4 text-sm font-black transition-all hover:scale-[1.02]"
//                 >
//                   Call Local Team
//                   <ArrowUpRight className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FEATURE STRIP */}
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="group rounded-[2rem] bg-white border border-[#5E50B5]/10 p-6 shadow-xl shadow-slate-900/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5E50B5]/10 transition-all duration-500 sg-story-fade"
//                 style={{ animationDelay: `${index * 120}ms` }}
//               >
//                 <div className="w-12 h-12 rounded-2xl bg-[#F6F4FF] text-[#5E50B5] flex items-center justify-center mb-5 group-hover:bg-[#5E50B5] group-hover:text-white transition-colors">
//                   <Icon className="w-5 h-5" />
//                 </div>

//                 <h4 className="text-lg font-black text-slate-950 mb-3">
//                   {item.title}
//                 </h4>

//                 <p className="text-sm text-slate-600 leading-relaxed font-medium">
//                   {item.text}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
















import React from "react";
import {
  ShieldCheck,
  MapPin,
  Building2,
  ArrowUpRight,
  Target,
  Shield,
  Phone,
  CheckCircle2,
  SearchCheck,
  Home,
} from "lucide-react";

export default function AboutStorySection() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    address: "67 Dulwich Village, London SE21 7BJ",
    phone: "07405 264579",
    phoneTel: "+447405264579",
    businessName: "SuperGuard Dulwich",
  };

  const features = [
    {
      icon: SearchCheck,
      title: "Detailed Property Checks",
      text: "We inspect pest signs, access points, hiding areas and the conditions that may be attracting activity.",
    },
    {
      icon: Shield,
      title: "Practical Treatment Advice",
      text: "You get clear guidance on what we found, what treatment is suitable and how to reduce repeat issues.",
    },
    {
      icon: Building2,
      title: "For Dulwich Properties",
      text: `Supporting homes, flats, landlords, shops and commercial spaces across ${LOCAL.area} and ${LOCAL.postcode}.`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white mt-10 py-24 lg:py-32">
      <style>{`
        @keyframes storyUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .story-up {
          animation: storyUp .8s ease-out both;
          will-change: opacity, transform;
        }

        .story-delay-1 { animation-delay: 120ms; }
        .story-delay-2 { animation-delay: 220ms; }

        @media (prefers-reduced-motion: reduce) {
          .story-up { animation: none; }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[45%] bg-[#F7F5FF]" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto text-center mb-16 story-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5F52B5]" />
            About {LOCAL.businessName}
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
            Dulwich Pest Control With A{" "}
            <span className="text-[#5F52B5]">Clear Local Approach</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            SuperGuard Dulwich helps local customers understand pest issues
            properly before treatment begins. Our approach is built around
            careful inspection, clear advice and practical pest control support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-8 story-up story-delay-1">
            <div className="relative h-full rounded-[3rem] overflow-hidden bg-[#15122D] text-white shadow-2xl shadow-[#15122D]/20">
              <img
                src="/images/about-story.webp"
                alt={`${LOCAL.businessName} pest control in ${LOCAL.area}`}
                className="absolute inset-0 w-full h-full object-cover opacity-45"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#15122D] via-[#15122D]/85 to-[#5F52B5]/40" />

              <div className="relative z-10 p-7 md:p-10 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-7">
                  <MapPin className="w-4 h-4" />
                  Based In {LOCAL.area}
                </span>

                <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6 max-w-3xl">
                  Helping Local Properties Deal With Pest Problems Properly
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  <p className="text-sm md:text-base text-white/78 leading-relaxed font-medium">
                    Pest activity can be confusing when you only see the
                    surface signs. We help customers understand what is
                    happening by checking activity points, possible access
                    routes and the pest type involved.
                  </p>

                  <p className="text-sm md:text-base text-white/78 leading-relaxed font-medium">
                    From rodents and cockroaches to bed bugs, fleas, ants,
                    wasps and prevention work, our focus is on practical advice
                    that suits the property and the situation.
                  </p>
                </div>

                <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["Homes", "Flats", "Businesses"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 border border-white/15 p-5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#B8AEFF] mb-3" />
                      <span className="text-sm font-black text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 story-up story-delay-2">
            <div className="h-full grid grid-cols-1 gap-5">
              <div className="rounded-[2.5rem] bg-white border border-[#5F52B5]/10 p-7 shadow-xl shadow-slate-900/5">
                <div className="w-14 h-14 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#5F52B5] mb-3">
                  Service Standard
                </span>

                <h4 className="text-2xl font-black text-[#15122D] mb-4">
                  No Confusing Pest Advice
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  We explain the issue clearly so you know what pest problem is
                  present and what the next suitable step should be.
                </p>
              </div>

              <div className="rounded-[2.5rem] bg-[#5F52B5] text-white p-7 shadow-xl shadow-[#5F52B5]/20">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-5">
                  Local Details
                </span>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <p className="text-sm font-bold text-white/85 leading-relaxed">
                      {LOCAL.address}
                    </p>
                  </div>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="flex gap-4 items-center text-white hover:text-[#E5DFFF] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-white shrink-0" />
                    <span className="text-lg font-black">{LOCAL.phone}</span>
                  </a>
                </div>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white text-[#15122D] px-5 py-4 text-sm font-black transition-all hover:bg-[#F1EFFF]"
                >
                  Call Local Team
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="story-up rounded-[2rem] bg-white border border-[#5F52B5]/10 p-6 shadow-xl shadow-slate-900/5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h4 className="text-lg font-black text-[#15122D] mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}