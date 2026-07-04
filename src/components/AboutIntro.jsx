



// import React from "react";
// import { Link } from "react-router-dom";

// export default function AboutIntroSection() {
//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     businessName: "SuperGuard Rotherhithe",
//     address: "10 Someford Way, London SE16 6QW",
//     phoneDisplay: "07448 491927",
//     phoneTel: "+447448491927",
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-white py-24 lg:py-32 font-sans"
//     >
//       <style>{`
//         /* Optimized Animations */
//         @keyframes sgFadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes sgSlideSoft {
//           from { opacity: 0; transform: translateX(-20px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         .sg-animate {
//           will-change: transform, opacity;
//           backface-visibility: hidden;
//         }

//         .sg-about-fade {
//           animation: sgFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sg-about-slide {
//           animation: sgSlideSoft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sg-delay-1 { animation-delay: 100ms; }
//         .sg-delay-2 { animation-delay: 200ms; }
//         .sg-delay-3 { animation-delay: 300ms; }
//       `}</style>

//       <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#F7F6FF] to-white" />
//       <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//       <div className="absolute bottom-10 -left-24 w-[360px] h-[360px] rounded-full bg-[#F0EEFF] blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-6 sg-animate sg-about-slide">
//             <div className="inline-flex items-center gap-3 rounded-full bg-[#F6F4FF] border border-[#5E50B5]/15 px-4 py-2 mb-6">
//               <span className="w-2.5 h-2.5 rounded-full bg-[#5E50B5]" />
//               <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//                 About {LOCAL.businessName}
//               </span>
//             </div>

//             <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight text-slate-950 mb-6">
//               Local Pest Control Built Around{" "}
//               <span className="text-[#5E50B5]">{LOCAL.area}</span> Homes &
//               Businesses
//             </h2>

//             <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl">
//               SuperGuard Rotherhithe provides professional pest control support
//               for homes, flats, landlords, shops and commercial premises across
//               {` ${LOCAL.area}`} and nearby {LOCAL.postcode} areas. Our approach
//               is simple: inspect properly, explain clearly and treat the issue
//               with safe, practical methods.
//             </p>

//             <div className="space-y-5 mb-9">
//               {[
//                 {
//                   title: "Clear Inspection First",
//                   text: "We identify the pest, activity level, likely entry points and the best treatment route before starting work.",
//                 },
//                 {
//                   title: "Practical Treatment Plans",
//                   text: "From rodents and cockroaches to bed bugs, fleas, ants and wasps, every job is handled with care and attention.",
//                 },
//                 {
//                   title: "Local Rotherhithe Response",
//                   text: `Based near ${LOCAL.address}, we focus on reliable support for customers around SE16.`,
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={item.title}
//                   className={`flex gap-4 sg-animate sg-about-fade ${
//                     index === 0 ? "sg-delay-1" : index === 1 ? "sg-delay-2" : "sg-delay-3"
//                   }`}
//                 >
//                   <div className="shrink-0 w-10 h-10 rounded-2xl bg-[#5E50B5] text-white flex items-center justify-center font-black">
//                     {index + 1}
//                   </div>
//                   <div>
//                     <h3 className="text-base font-black text-slate-950 mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-slate-600 leading-relaxed font-medium">
//                       {item.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/services"
//                 className="inline-flex justify-center items-center rounded-full bg-[#5E50B5] hover:bg-[#4C4098] text-white px-7 py-4 text-sm font-black uppercase tracking-wider transition-all shadow-xl shadow-[#5E50B5]/20"
//               >
//                 Explore Services
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT VISUAL */}
//           <div className="lg:col-span-6 sg-animate sg-about-fade sg-delay-2">
//             <div className="relative">
//               <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl border border-slate-100">
//                 <img
//                   src="/images/about-superguard.webp"
//                   alt={`${LOCAL.businessName} pest control service in ${LOCAL.area}`}
//                   className="w-full h-[520px] object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
//                 <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/95 backdrop-blur-md p-6 shadow-xl">
//                   <h3 className="text-2xl font-black text-slate-950 mb-3">Based Near {LOCAL.area}</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
//                     <div className="rounded-2xl bg-[#F7F6FF] p-4">
//                       <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Address</span>
//                       <address className="not-italic font-bold text-slate-800">{LOCAL.address}</address>
//                     </div>
//                     <div className="rounded-2xl bg-[#201A46] text-white p-4">
//                       <span className="block text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Phone</span>
//                       <a href={`tel:${LOCAL.phoneTel}`} className="font-black text-lg">{LOCAL.phoneDisplay}</a>
//                     </div>
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


import React from "react";
import { Link } from "react-router-dom";

export default function AboutIntroSection() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    businessName: "SuperGuard Dulwich",
    address: "67 Dulwich Village, London SE21 7BJ",
    phoneDisplay: "07405 264579",
    phoneTel: "+447405264579",
  };

  const points = [
    {
      number: "01",
      title: "Inspect Before Treating",
      text: "We check activity signs, access points, nesting areas and the cause of the problem before starting treatment.",
    },
    {
      number: "02",
      title: "Designed For Dulwich Properties",
      text: "From family homes and flats to shops, restaurants and rental properties, each treatment is planned around the building.",
    },
    {
      number: "03",
      title: "Clear Advice After Every Visit",
      text: "You get simple guidance on prevention, proofing and what to watch for after the treatment is complete.",
    },
  ];

  return (
    <section
      itemScope
      itemType="https://schema.org/PestControlService"
      className="relative overflow-hidden bg-white py-24 lg:py-32 font-sans"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[42%] h-full bg-[#F4F1FF] hidden lg:block" />
        <div className="absolute -top-28 -left-28 w-[360px] h-[360px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#15122D]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* TOP CENTER HEADING */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#F1EFFF] border border-[#5F52B5]/15 px-4 py-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5F52B5]" />
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5]">
              About {LOCAL.businessName}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight text-[#15122D] mb-6">
            Local Pest Control In Dulwich With A Cleaner, Smarter Approach
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            SuperGuard Dulwich helps homes, landlords and businesses across
            {` ${LOCAL.postcode}`} deal with pest problems properly — with careful
            checks, targeted treatment and straightforward prevention advice.
          </p>
        </div>

        {/* MAIN MAGAZINE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT IMAGE COLLAGE */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 h-full">
              <div className="sm:col-span-7 rounded-[2.5rem] overflow-hidden min-h-[430px] shadow-2xl relative">
                <img
                  src="/images/about-superguard.webp"
                  alt={`${LOCAL.businessName} technician inspection in ${LOCAL.area}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/75 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/95 backdrop-blur-md p-5">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5] mb-1">
                    Based In
                  </span>
                  <h3 className="text-2xl font-black text-[#15122D]">
                    Dulwich Village
                  </h3>
                  <p className="text-sm text-slate-600 font-medium mt-2">
                    Local support for properties across SE21 and nearby areas.
                  </p>
                </div>
              </div>

              <div className="sm:col-span-5 grid grid-cols-1 gap-4">
                <div className="rounded-[2rem] bg-[#15122D] text-white p-6 flex flex-col justify-between min-h-[205px] shadow-xl">
                  <div>
                    <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-[#B8AEFF]">
                      Local Address
                    </span>
                    <address className="not-italic text-lg font-black leading-snug mt-3">
                      {LOCAL.address}
                    </address>
                  </div>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="mt-6 inline-flex justify-center rounded-2xl bg-[#5F52B5] px-5 py-3 text-sm font-black hover:bg-[#4B4095] transition-all"
                  >
                    Call Now
                  </a>
                </div>

                <div className="rounded-[2rem] overflow-hidden min-h-[205px] relative shadow-xl">
                  <img
                    src="/images/superguard-hero.webp"
                    alt={`${LOCAL.businessName} pest control treatment`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#5F52B5]/40" />
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-4">
                    <span className="block text-4xl font-black text-[#5F52B5]">
                      {LOCAL.postcode}
                    </span>
                    <span className="block text-xs font-black uppercase tracking-widest text-slate-600">
                      Dulwich Pest Team
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT CARD */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-[2.5rem] bg-[#F7F5FF] border border-[#5F52B5]/10 p-6 sm:p-8 shadow-xl">
              <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#5F52B5] mb-4">
                How We Work
              </span>

              <h3 className="text-3xl sm:text-4xl font-black leading-tight text-[#15122D] mb-5">
                Every Pest Issue Gets A Proper Plan
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-7">
                We focus on finding the reason pests are entering or spreading,
                then apply a suitable treatment for the property. This gives the
                customer a clearer, more professional experience from start to
                finish.
              </p>

              <div className="space-y-4">
                {points.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-[1.5rem] bg-white p-5 border border-[#5F52B5]/10 hover:border-[#5F52B5]/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-12 h-12 rounded-2xl bg-[#5F52B5] text-white flex items-center justify-center text-sm font-black">
                        {item.number}
                      </span>

                      <div>
                        <h4 className="text-base font-black text-[#15122D] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/services"
                  className="rounded-2xl bg-[#5F52B5] text-white text-center px-5 py-4 text-sm font-black uppercase tracking-wider hover:bg-[#4B4095] transition-all shadow-lg shadow-[#5F52B5]/20"
                >
                  Our Services
                </Link>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="rounded-2xl bg-white border border-[#5F52B5]/15 text-[#5F52B5] text-center px-5 py-4 text-sm font-black uppercase tracking-wider hover:bg-[#F1EFFF] transition-all"
                >
                  {LOCAL.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}