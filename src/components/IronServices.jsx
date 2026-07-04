




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Bug,
//   Rat,
//   ShieldAlert,
//   PhoneCall,
//   MapPin,
//   CheckCircle,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     baseAddress: "10 Someford Way, London SE16 6QW",
//     phone: "07448 491927",
//     phoneTel: "+447448491927",
//   };

//   const services = [
//     {
//       title: "Rats & Mice Control",
//       icon: Rat,
//       image: "/images/rodents.webp",
//       label: "Rodent Control",
//       desc: "Rodents can damage wiring, contaminate food areas and create serious hygiene issues. SuperGuard Rotherhithe provides inspection-led rodent control for homes, flats, landlords and business premises.",
//       points: ["Activity inspection", "Entry point advice", "Safe treatment planning"],
//     },
//     {
//       title: "Bed Bug Treatments",
//       icon: Bug,
//       image: "/images/bedbugs.webp",
//       label: "Bed Bug Service",
//       desc: "Bed bugs hide in mattress seams, bed frames, furniture and soft furnishings. Our team helps identify the signs and plan a suitable treatment approach for affected rooms.",
//       points: ["Bedroom checks", "Targeted treatment", "Aftercare guidance"],
//     },
//     {
//       title: "Wasp Nest Control",
//       icon: ShieldAlert,
//       image: "/images/wasps.webp",
//       label: "Wasp Nest Help",
//       desc: "Active wasp nests around roofs, sheds, wall voids and gardens can become unsafe quickly. We provide professional support to assess and treat wasp activity safely.",
//       points: ["Nest location check", "Safe treatment", "Clear next steps"],
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-white py-24 lg:py-32">
//       <style>{`
//         @keyframes sgServiceFade {
//           from { opacity: 0; transform: translateY(28px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .sg-service-fade {
//           animation: sgServiceFade .8s ease-out both;
//         }
//       `}</style>

//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F7F6FF] to-white" />
//       <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//       <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#F0EEFF] blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="max-w-4xl mx-auto text-center mb-16 sg-service-fade">
//           <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F4FF] border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//             <span className="w-2 h-2 rounded-full bg-[#5E50B5]" />
//             SuperGuard Pest Services
//           </span>

//           <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//             Professional Pest Control For{" "}
//             <span className="text-[#5E50B5]">Rotherhithe</span> Properties
//           </h2>

//           <p className="mt-5 text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
//             From rodents and bed bugs to wasp nests, our local team supports
//             homes, flats and businesses across {LOCAL.area} and nearby{" "}
//             {LOCAL.postcode}.
//           </p>
//         </div>

//         <div className="space-y-10">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             const reverse = index % 2 === 1;

//             return (
//               <div
//                 key={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className="group cursor-pointer sg-service-fade"
//                 style={{ animationDelay: `${index * 120}ms` }}
//               >
//                 <div
//                   className={`grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden bg-[#F7F6FF] border border-[#5E50B5]/10 shadow-2xl shadow-slate-900/5 hover:shadow-[#5E50B5]/15 transition-all duration-500 ${
//                     reverse ? "lg:[&>*:first-child]:order-2" : ""
//                   }`}
//                 >
//                   <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[520px] overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={`${service.title} in ${LOCAL.area}`}
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-105"
//                       loading="lazy"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

//                     <div className="absolute top-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
//                       <span className="block text-[10px] font-black uppercase tracking-widest text-[#5E50B5]">
//                         Service 0{index + 1}
//                       </span>
//                       <span className="block text-sm font-black text-slate-950">
//                         {service.label}
//                       </span>
//                     </div>

//                     <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
//                       {service.points.map((point) => (
//                         <span
//                           key={point}
//                           className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-2 text-xs font-bold text-slate-800"
//                         >
//                           <CheckCircle className="w-3.5 h-3.5 text-[#5E50B5]" />
//                           {point}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="lg:col-span-5 p-7 md:p-10 lg:p-12 flex flex-col justify-center">
//                     <div className="w-16 h-16 rounded-3xl bg-white border border-[#5E50B5]/10 flex items-center justify-center mb-7 group-hover:bg-[#5E50B5] transition-colors duration-300">
//                       <Icon className="w-7 h-7 text-[#5E50B5] group-hover:text-white transition-colors duration-300" />
//                     </div>

//                     <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#5E50B5] mb-3">
//                       {service.label}
//                     </span>

//                     <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-950 mb-5">
//                       {service.title}
//                     </h3>

//                     <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-8">
//                       {service.desc}
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           navigate("/contact-us");
//                         }}
//                         className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5E50B5] hover:bg-[#4C4098] text-white px-6 py-4 text-xs font-black uppercase tracking-[0.16em] transition-all hover:scale-[1.02]"
//                       >
//                         Book Service
//                         <ArrowRight className="w-4 h-4" />
//                       </button>

//                       <a
//                         href={`tel:${LOCAL.phoneTel}`}
//                         onClick={(e) => e.stopPropagation()}
//                         className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-[#5E50B5]/15 text-[#5E50B5] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] hover:border-[#5E50B5] transition-all"
//                       >
//                         <PhoneCall className="w-4 h-4" />
//                         Call
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-12 rounded-[2.5rem] bg-[#201A46] text-white p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl shadow-[#201A46]/20">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
//               <MapPin className="w-5 h-5 text-[#BEB7FF]" />
//             </div>
//             <div>
//               <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#BEB7FF] mb-1">
//                 Local Service Base
//               </span>
//               <p className="text-sm text-white/75 font-medium leading-relaxed">
//                 Based near <strong className="text-white">{LOCAL.baseAddress}</strong>,
//                 supporting pest control enquiries across {LOCAL.area} and{" "}
//                 {LOCAL.postcode}.
//               </p>
//             </div>
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="inline-flex justify-center items-center gap-2 rounded-2xl bg-white text-[#201A46] px-6 py-4 text-sm font-black hover:scale-[1.03] transition-all"
//           >
//             <PhoneCall className="w-4 h-4" />
//             {LOCAL.phone}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }













import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bug,
  Rat,
  ShieldAlert,
  PhoneCall,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function SuperGuardServicesSection() {
  const navigate = useNavigate();

  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    businessName: "SuperGuard Dulwich",
    baseAddress: "67 Dulwich Village, London SE21 7BJ",
    phone: "07405 264579",
    phoneTel: "+447405264579",
  };

  const services = [
    {
      title: "Rats & Mice Control",
      icon: Rat,
      image: "/images/rodents.webp",
      label: "Rodent Control",
      desc: "Rodents can move through kitchens, loft spaces, wall gaps and storage areas. SuperGuard Dulwich checks activity, entry routes and risk areas before planning a suitable treatment.",
      points: ["Entry route checks", "Rodent activity inspection", "Proofing advice"],
    },
    {
      title: "Bed Bug Treatment",
      icon: Bug,
      image: "/images/bedbugs.webp",
      label: "Bed Bug Service",
      desc: "Bed bugs often hide inside mattress seams, bed frames, headboards and soft furnishings. Our team inspects affected rooms and guides you through treatment and aftercare.",
      points: ["Bedroom inspection", "Targeted treatment", "Aftercare guidance"],
    },
    {
      title: "Wasp Nest Control",
      icon: ShieldAlert,
      image: "/images/wasps.webp",
      label: "Wasp Nest Help",
      desc: "Wasps around roof edges, sheds, wall voids and garden areas can become unsafe quickly. We help locate the nest activity and arrange a safe treatment approach.",
      points: ["Nest activity check", "Safe treatment method", "Clear next steps"],
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".sg-service-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("sg-service-show");
        });
      },
      { threshold: 0.16 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <style>{`
        .sg-service-animate {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .sg-service-show {
          opacity: 1;
          transform: translateY(0);
        }

        .sg-delay-1 { transition-delay: 120ms; }
        .sg-delay-2 { transition-delay: 220ms; }
        .sg-delay-3 { transition-delay: 320ms; }

        @media (prefers-reduced-motion: reduce) {
          .sg-service-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-80 bg-[#F7F5FF]" />
        <div className="absolute -top-28 -right-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto text-center mb-16 sg-service-animate">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5F52B5]" />
            SuperGuard Services In {LOCAL.area}
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
            Pest Control Services For{" "}
            <span className="text-[#5F52B5]">Dulwich Properties</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Inspection-led pest control for homes, landlords and businesses
            across {LOCAL.postcode}, with clear treatment plans and practical
            prevention advice.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`sg-service-animate sg-delay-${index + 1}`}
              >
                <div className="relative">
                  {/* IMAGE */}
                  <div className="relative h-[360px] md:h-[460px] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-200">
                    <img
                      src={service.image}
                      alt={`${service.title} in ${LOCAL.area}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/55 via-transparent to-transparent" />

                    <div className="absolute top-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
                        Service 0{index + 1}
                      </span>
                      <span className="block text-sm font-black text-[#15122D]">
                        {service.label}
                      </span>
                    </div>
                  </div>

                  {/* OVERLAP TEXT CARD */}
                  <div className="relative -mt-24 md:-mt-32 mx-auto w-[92%] lg:w-[82%]">
                    <div className="rounded-[2.5rem] bg-white border border-[#5F52B5]/10 p-6 md:p-8 lg:p-10 shadow-2xl shadow-slate-900/10">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:items-center">
                        <div className="lg:col-span-8">
                          <div className="flex items-center gap-4 mb-5">
                            <div className="w-16 h-16 rounded-3xl bg-[#5F52B5] flex items-center justify-center shrink-0 shadow-xl shadow-[#5F52B5]/25">
                              <Icon className="w-8 h-8 text-white" />
                            </div>

                            <div>
                              <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
                                {LOCAL.businessName}
                              </span>
                              <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#15122D]">
                                {service.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-3xl">
                            {service.desc}
                          </p>
                        </div>

                        <div className="lg:col-span-4">
                          <div className="space-y-3">
                            {service.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-center gap-3 rounded-2xl bg-[#F7F5FF] border border-[#5F52B5]/10 px-4 py-3"
                              >
                                <CheckCircle className="w-4 h-4 text-[#5F52B5] shrink-0" />
                                <span className="text-sm font-black text-[#15122D]">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => navigate("/contact-us")}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5F52B5] hover:bg-[#4B4095] text-white px-7 py-4 text-xs font-black uppercase tracking-[0.16em] transition-all"
                        >
                          Request Service
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <a
                          href={`tel:${LOCAL.phoneTel}`}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#15122D] text-white px-7 py-4 text-xs font-black uppercase tracking-[0.16em] hover:bg-[#272248] transition-all"
                        >
                          <PhoneCall className="w-4 h-4" />
                          Call {LOCAL.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-[#15122D] text-white p-6 md:p-8 shadow-2xl shadow-[#15122D]/20 sg-service-animate sg-delay-3">
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
                  Based near{" "}
                  <strong className="text-white">{LOCAL.baseAddress}</strong>,
                  supporting pest control enquiries across {LOCAL.area} and{" "}
                  {LOCAL.postcode}.
                </p>
              </div>
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="inline-flex justify-center items-center gap-2 rounded-2xl bg-white text-[#15122D] px-6 py-4 text-sm font-black hover:bg-[#F1EFFF] transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              {LOCAL.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}