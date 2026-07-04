




// import React from "react";
// import {
//   Star,
//   Phone,
//   ArrowUpRight,
//   Home,
//   Building2,
//   Quote,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";

// export default function SuperGuardTestimonials() {
//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     baseAddress: "10 Someford Way, London SE16 6QW",
//     businessName: "SuperGuard Rotherhithe",
//     phone: "07448 491927",
//     phoneTel: "+447448491927",
//   };

//   const reviews = [
//     {
//       icon: Home,
//       title: "Rodent issue handled properly",
//       quote:
//         "We noticed scratching noises and small droppings in the kitchen. SuperGuard checked the property carefully, explained the likely entry points and gave us a clear treatment plan.",
//       name: "James Miller",
//       role: "Homeowner in Rotherhithe",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Clear advice for bed bugs",
//       quote:
//         "The team was calm, professional and explained everything in simple terms. They inspected the bedroom properly and helped us understand the next steps.",
//       name: "Rebecca Turner",
//       role: "Flat Tenant, SE16",
//     },
//     {
//       icon: Building2,
//       title: "Reliable local pest support",
//       quote:
//         "We needed discreet pest control help for our small business premises. SuperGuard Rotherhithe responded quickly and kept the whole process straightforward.",
//       name: "Daniel Brooks",
//       role: "Local Business Owner",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F6FF] py-24 lg:py-32">
//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
//       <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//       <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-white blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
//           {/* LEFT INTRO PANEL */}
//           <div className="lg:col-span-5">
//             <div className="lg:sticky lg:top-32 rounded-[3rem] bg-[#201A46] text-white p-7 md:p-10 shadow-2xl shadow-[#201A46]/20 overflow-hidden relative">
//               <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/10 blur-2xl" />

//               <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#D8D3FF] mb-6">
//                 <span className="w-2 h-2 rounded-full bg-[#BEB7FF]" />
//                 Customer Feedback
//               </span>

//               <h2 className="text-3xl md:text-5xl font-black leading-tight mb-5">
//                 What Local Customers Say About SuperGuard
//               </h2>

//               <p className="text-sm text-white/75 leading-relaxed font-medium mb-8">
//                 Our team supports homes, flats, landlords and businesses across{" "}
//                 {LOCAL.area} with clear pest advice and practical treatment
//                 support.
//               </p>

//               <div className="rounded-[2rem] bg-white/10 border border-white/10 p-5 mb-6">
//                 <div className="flex items-center gap-1 mb-3">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-4 h-4 fill-[#BEB7FF] text-[#BEB7FF]"
//                     />
//                   ))}
//                 </div>

//                 <p className="text-sm font-semibold text-white/85 leading-relaxed">
//                   Trusted local pest control support for Rotherhithe and nearby
//                   SE16 properties.
//                 </p>
//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="flex items-center justify-between rounded-2xl bg-white text-[#201A46] px-5 py-4 font-black hover:scale-[1.02] transition-all"
//               >
//                 <span>{LOCAL.phone}</span>
//                 <Phone className="w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           {/* RIGHT REVIEWS */}
//           <div className="lg:col-span-7">
//             <div className="mb-9">
//               <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//                 Verified Style Reviews
//               </span>

//               <h3 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//                 Realistic Feedback From{" "}
//                 <span className="text-[#5E50B5]">Rotherhithe</span> Customers
//               </h3>
//             </div>

//             <div className="space-y-5">
//               {reviews.map((review, index) => {
//                 const Icon = review.icon;

//                 return (
//                   <article
//                     key={review.title}
//                     className="group relative rounded-[2.5rem] bg-white border border-[#5E50B5]/10 p-6 md:p-8 shadow-xl shadow-slate-900/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5E50B5]/10 transition-all duration-500 overflow-hidden"
//                   >
//                     <Quote className="absolute right-8 top-8 w-16 h-16 text-[#5E50B5]/5" />

//                     <div className="relative z-10 flex flex-col md:flex-row gap-6">
//                       <div className="shrink-0">
//                         <div className="w-16 h-16 rounded-3xl bg-[#F6F4FF] border border-[#5E50B5]/10 flex items-center justify-center group-hover:bg-[#5E50B5] transition-colors duration-300">
//                           <Icon className="w-7 h-7 text-[#5E50B5] group-hover:text-white transition-colors" />
//                         </div>
//                       </div>

//                       <div className="flex-1">
//                         <div className="flex items-center gap-1 mb-3">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className="w-4 h-4 fill-[#5E50B5] text-[#5E50B5]"
//                             />
//                           ))}
//                         </div>

//                         <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5] mb-2">
//                           Review 0{index + 1}
//                         </span>

//                         <h4 className="text-2xl font-black text-slate-950 mb-3">
//                           {review.title}
//                         </h4>

//                         <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-5">
//                           “{review.quote}”
//                         </p>

//                         <div className="border-t border-slate-100 pt-4">
//                           <h5 className="text-sm font-black text-slate-950">
//                             {review.name}
//                           </h5>
//                           <p className="text-xs font-semibold text-slate-500 mt-1">
//                             {review.role}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>

//             <div className="mt-6 rounded-[2rem] bg-white border border-[#5E50B5]/10 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xl shadow-slate-900/5">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-2xl bg-[#F6F4FF] text-[#5E50B5] flex items-center justify-center shrink-0">
//                   <MapPin className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5] mb-1">
//                     Local Service Base
//                   </span>
//                   <p className="text-sm text-slate-600 font-semibold leading-relaxed">
//                     {LOCAL.baseAddress}
//                   </p>
//                 </div>
//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5E50B5] hover:bg-[#4C4098] text-white px-6 py-4 text-sm font-black hover:scale-[1.03] transition-all"
//               >
//                 Call Now
//                 <ArrowUpRight className="w-4 h-4" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React, { useEffect } from "react";
import {
  Star,
  Phone,
  ArrowUpRight,
  Home,
  Building2,
  Quote,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function SuperGuardTestimonials() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    baseAddress: "67 Dulwich Village, London SE21 7BJ",
    businessName: "SuperGuard Dulwich",
    phone: "07405 264579",
    phoneTel: "+447405264579",
  };

  const reviews = [
    {
      icon: Home,
      title: "Rodent activity explained clearly",
      quote:
        "We found droppings near the kitchen and were worried about where the rodents were getting in. SuperGuard Dulwich checked the property carefully and explained the likely access points in simple terms.",
      name: "Oliver Harris",
      role: "Homeowner in Dulwich",
    },
    {
      icon: ShieldCheck,
      title: "Professional support for bed bugs",
      quote:
        "The team made a stressful situation much easier. They inspected the bedroom properly, explained the preparation steps and gave clear aftercare advice.",
      name: "Amelia Carter",
      role: "Flat Tenant, SE21",
    },
    {
      icon: Building2,
      title: "Straightforward help for our premises",
      quote:
        "We needed pest control advice for a small local business. SuperGuard Dulwich kept the process discreet, clear and easy to understand from the first call.",
      name: "Thomas Reed",
      role: "Local Business Owner",
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".testimonial-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("testimonial-show");
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <style>{`
        .testimonial-animate {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 750ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 750ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .testimonial-show {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonial-delay-1 { transition-delay: 100ms; }
        .testimonial-delay-2 { transition-delay: 180ms; }
        .testimonial-delay-3 { transition-delay: 260ms; }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[45%] bg-[#F7F5FF]" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-14 testimonial-animate">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5F52B5]" />
            Customer Feedback
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
            What Customers Say About{" "}
            <span className="text-[#5F52B5]">SuperGuard Dulwich</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Local feedback from homes, flats and businesses across {LOCAL.area}
            and nearby {LOCAL.postcode}, focused on clear advice, professional
            service and practical pest support.
          </p>
        </div>

        {/* TOP TRUST BAR */}
        <div className="mb-8 rounded-[2.5rem] bg-[#15122D] text-white p-5 sm:p-6 testimonial-animate testimonial-delay-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-center">
            <div>
              <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-2">
                Local Reputation
              </span>
              <h3 className="text-2xl font-black">
                Trusted Pest Control Support In {LOCAL.postcode}
              </h3>
            </div>

            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#B8AEFF] text-[#B8AEFF]"
                />
              ))}
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="inline-flex justify-center items-center gap-2 rounded-2xl bg-white text-[#15122D] px-6 py-4 text-sm font-black hover:bg-[#F1EFFF] transition-all"
            >
              <Phone className="w-4 h-4" />
              {LOCAL.phone}
            </a>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => {
            const Icon = review.icon;

            return (
              <article
                key={review.title}
                className={`testimonial-animate testimonial-delay-${
                  index + 1
                } relative rounded-[2.5rem] bg-white border border-[#5F52B5]/10 p-6 sm:p-7 shadow-xl shadow-slate-900/5 overflow-hidden hover:shadow-2xl transition-all duration-300`}
              >
                <Quote className="absolute right-7 top-7 w-16 h-16 text-[#5F52B5]/5" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-14 h-14 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
                      Review 0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#5F52B5] text-[#5F52B5]"
                      />
                    ))}
                  </div>

                  <h4 className="text-2xl font-black text-[#15122D] mb-4">
                    {review.title}
                  </h4>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-7">
                    “{review.quote}”
                  </p>

                  <div className="border-t border-slate-100 pt-5">
                    <h5 className="text-sm font-black text-[#15122D]">
                      {review.name}
                    </h5>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      {review.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-8 rounded-[2.5rem] bg-[#F7F5FF] border border-[#5F52B5]/10 p-5 md:p-6 testimonial-animate testimonial-delay-3">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#5F52B5] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-1">
                  Local Service Base
                </span>
                <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                  Based near{" "}
                  <strong className="text-[#15122D]">{LOCAL.baseAddress}</strong>
                  , supporting pest control enquiries across {LOCAL.area}.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Clear Advice", "Local Support", "Property Care"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#15122D]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#5F52B5]" />
                  {item}
                </span>
              ))}
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5F52B5] hover:bg-[#4B4095] text-white px-6 py-4 text-sm font-black transition-all"
            >
              Call Now
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}