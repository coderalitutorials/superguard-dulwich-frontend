

// import React, { useEffect } from "react";
// import {
//   ShieldCheck,
//   Zap,
//   Users,
//   Phone,
//   MapPin,
//   CheckCircle2,
//   ArrowUpRight,
//   Home,
// } from "lucide-react";

// export default function WhyChooseSuperGuard() {
//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     baseAddress: "10 Someford Way, London SE16 6QW",
//     businessName: "SuperGuard Rotherhithe",
//     phone: "07448 491927",
//     phoneTel: "+447448491927",
//   };

//   const reasons = [
//     { icon: ShieldCheck, title: "Inspection-Led Treatments", text: "We first check the pest signs, activity level and likely access points before recommending the right treatment plan." },
//     { icon: Users, title: "Suitable For Homes & Businesses", text: "Our service supports flats, houses, landlords, shops, offices and commercial spaces across Rotherhithe." },
//     { icon: Zap, title: "Fast Local Response", text: `Based near ${LOCAL.baseAddress}, we focus on quick pest support across ${LOCAL.area} and nearby ${LOCAL.postcode}.` },
//   ];

//   // Intersection Observer for scroll animation
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
//     <section className="relative overflow-hidden bg-white py-24 lg:py-32">
//       <style>{`
//         .sg-animate { 
//           opacity: 0; 
//           transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); 
//         }
//         .sg-left { transform: translateX(-60px); }
//         .sg-right { transform: translateX(60px); }
//         .sg-show { opacity: 1 !important; transform: translate(0, 0) !important; }
//       `}</style>

//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F7F6FF] to-white" />
//       <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//       <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#F0EEFF] blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* LEFT IMAGE BLOCK - Now animating from left */}
//           <div className="lg:col-span-6 sg-animate sg-left">
//             <div className="relative">
//               <div className="absolute -top-6 -left-6 w-44 h-44 rounded-full bg-[#5E50B5]/15" />
//               <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full bg-[#F0EEFF]" />

//               <div className="relative rounded-[3rem] overflow-hidden bg-slate-200 shadow-2xl shadow-[#201A46]/15 min-h-[560px]">
//                 <img
//                   src="/images/why-choose.webp"
//                   alt={`${LOCAL.businessName} pest control service in ${LOCAL.area}`}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
//                 <div className="absolute top-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
//                   <span className="block text-[10px] font-black uppercase tracking-widest text-[#5E50B5]">Local Team</span>
//                   <span className="block text-sm font-black text-slate-950">{LOCAL.area} {LOCAL.postcode}</span>
//                 </div>
//                 <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/95 backdrop-blur-md p-6 shadow-2xl">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-2xl bg-[#5E50B5] text-white flex items-center justify-center shrink-0">
//                       <Home className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-black text-slate-950 mb-2">Local Pest Help Without Confusion</h3>
//                       <p className="text-sm text-slate-600 font-semibold leading-relaxed">Simple inspection, clear explanation and practical pest control support for Rotherhithe properties.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTENT - Now animating from right */}
//           <div className="lg:col-span-6 sg-animate sg-right">
//             <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F4FF] border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//               <span className="w-2 h-2 rounded-full bg-[#5E50B5]" /> Why Choose Us
//             </span>
//             <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//               Why Customers Choose <span className="text-[#5E50B5]">SuperGuard Rotherhithe</span>
//             </h2>
//             <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
//               Pest problems need more than quick guesses. Our team focuses on understanding the issue properly, explaining the treatment clearly and helping customers reduce the chance of pests returning.
//             </p>

//             <div className="mt-9 space-y-5">
//               {reasons.map((item, index) => {
//                 const Icon = item.icon;
//                 return (
//                   <div key={item.title} className="group rounded-[2rem] bg-[#F7F6FF] border border-[#5E50B5]/10 p-5 md:p-6 hover:bg-white hover:shadow-2xl transition-all duration-500">
//                     <div className="flex gap-4 items-start">
//                       <div className="w-13 h-13 rounded-2xl bg-white border border-[#5E50B5]/10 flex items-center justify-center shrink-0 group-hover:bg-[#5E50B5] transition-colors">
//                         <Icon className="w-5 h-5 text-[#5E50B5] group-hover:text-white transition-colors" />
//                       </div>
//                       <div>
//                         <span className="block text-[10px] font-black uppercase tracking-widest text-[#5E50B5] mb-1">Reason 0{index + 1}</span>
//                         <h3 className="text-lg font-black text-slate-950 mb-2">{item.title}</h3>
//                         <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.text}</p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import React, { useEffect } from "react";
import {
  ShieldCheck,
  Phone,
  MapPin,
  CheckCircle2,
  SearchCheck,
  Home,
  ClipboardCheck,
} from "lucide-react";

export default function WhyChooseSuperGuard() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    baseAddress: "67 Dulwich Village, London SE21 7BJ",
    businessName: "SuperGuard Dulwich",
    phone: "07405 264579",
    phoneTel: "+447405264579",
  };

  const reasons = [
    {
      icon: SearchCheck,
      title: "Careful Inspection",
      text: "We check the pest signs, access points and risk areas before choosing the right treatment.",
    },
    {
      icon: Home,
      title: "Local Property Focus",
      text: "Our service is planned around Dulwich homes, flats, landlords and local businesses.",
    },
    {
      icon: ClipboardCheck,
      title: "Clear Aftercare",
      text: "You get simple guidance on what we found, what was treated and how to reduce repeat issues.",
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".why-clean-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("why-clean-show");
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
        .why-clean-animate {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 750ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 750ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .why-clean-show {
          opacity: 1;
          transform: translateY(0);
        }

        .why-delay-1 { transition-delay: 100ms; }
        .why-delay-2 { transition-delay: 180ms; }
        .why-delay-3 { transition-delay: 260ms; }

        @media (prefers-reduced-motion: reduce) {
          .why-clean-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[38%] h-full bg-[#F7F5FF] hidden lg:block" />
        <div className="absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full bg-[#5F52B5]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 why-clean-animate">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F7F5FF] border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5]">
              <span className="w-2 h-2 rounded-full bg-[#5F52B5]" />
              Why Choose {LOCAL.businessName}
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
              Simple, Clear Pest Control For{" "}
              <span className="text-[#5F52B5]">Dulwich</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
              Pest problems can feel stressful, so our process is kept clear
              from the start. SuperGuard Dulwich checks the issue properly,
              explains the next step and uses a suitable treatment plan for your
              property.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#F7F5FF] border border-[#5F52B5]/10 p-5">
                <MapPin className="w-6 h-6 text-[#5F52B5] mb-3" />
                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                  Local Area
                </span>
                <strong className="text-[#15122D]">
                  {LOCAL.area} {LOCAL.postcode}
                </strong>
              </div>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="rounded-2xl bg-[#5F52B5] text-white p-5 hover:bg-[#4B4095] transition-all"
              >
                <Phone className="w-6 h-6 mb-3" />
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">
                  Call Direct
                </span>
                <strong>{LOCAL.phone}</strong>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6 why-clean-animate why-delay-1">
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-[2.5rem] bg-[#5F52B5]/10" />

              <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl">
                <img
                  src="/images/why-choose.webp"
                  alt={`${LOCAL.businessName} pest control service in ${LOCAL.area}`}
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/65 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] bg-white/95 backdrop-blur-md p-5 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5F52B5] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#15122D] mb-1">
                        Clear Service From Start To Finish
                      </h3>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        Inspection, explanation, treatment and aftercare advice
                        for Dulwich properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REASON CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`why-clean-animate why-delay-${
                  index + 1
                } rounded-[2rem] bg-white border border-[#5F52B5]/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-2">
                  Reason 0{index + 1}
                </span>

                <h3 className="text-xl font-black text-[#15122D] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* ADDRESS BAR */}
        <div className="mt-8 rounded-[2rem] bg-[#15122D] text-white p-5 sm:p-6 why-clean-animate why-delay-3">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#B8AEFF]" />
              </div>

              <p className="text-sm text-white/75 font-medium leading-relaxed">
                Based near{" "}
                <strong className="text-white">{LOCAL.baseAddress}</strong>,
                supporting pest control enquiries across {LOCAL.area} and{" "}
                {LOCAL.postcode}.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Inspection First", "Clear Advice", "SE21 Support"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black text-white"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#B8AEFF]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}