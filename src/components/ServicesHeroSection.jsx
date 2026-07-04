








// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Phone,
//   MapPin,
//   CheckCircle2,
//   Sparkles,
//   Bug,
//   ShieldCheck,
//   SearchCheck,
//   Home,
//   Mouse,
//   Bird,
//   ClipboardCheck,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     area: "Dulwich",
//     postcode: "SE21",
//     address: "67 Dulwich Village, London SE21 7BJ",
//     phoneNo: "07405 264579",
//     phoneTel: "+447405264579",
//     companyName: "SuperGuard Dulwich",
//   };

//   const serviceTypes = [
//     { title: "Rodents & Wildlife", text: "Rats, mice and squirrels.", icon: Mouse },
//     { title: "Insects & Crawlers", text: "Bed bugs, ants, fleas.", icon: Bug },
//     { title: "Bird Control", text: "Proofing and deterrents.", icon: Bird },
//     { title: "Inspections", text: "Find the root cause.", icon: ClipboardCheck },
//   ];

//   return (
//     <section className="relative mt-10 overflow-hidden bg-white pt-36 pb-20 lg:pt-40 lg:pb-28">
//       <style>{`
//         @keyframes sgHeroFadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .sg-hero-up {
//           animation: sgHeroFadeUp .75s cubic-bezier(0.16, 1, 0.3, 1) both;
//           will-change: opacity, transform;
//         }

//         .sg-delay-1 { animation-delay: 120ms; }
//         .sg-delay-2 { animation-delay: 220ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-hero-up { animation: none; }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[48%] h-full bg-[#F7F5FF] hidden lg:block" />
//         <div className="absolute -top-28 -left-24 w-[420px] h-[420px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#5F52B5]/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-6 sg-hero-up">
//             <span className="inline-flex items-center gap-2 rounded-full bg-[#F7F5FF] border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-6">
//               <ShieldCheck className="w-4 h-4" />
//               Pest Control Services • {LOCAL.area} {LOCAL.postcode}
//             </span>

//             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.98] text-[#15122D] mb-6">
//               Pest Control Services For{" "}
//               <span className="text-[#5F52B5]">Dulwich Properties</span>
//             </h1>

//             <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mb-8">
//               Browse SuperGuard Dulwich services for rodents, insects, wasps,
//               birds and proofing. We help local homes, landlords and businesses
//               choose the right pest control solution.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 mb-10">
//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5F52B5] hover:bg-[#4B4095] text-white px-7 py-4 text-sm font-black uppercase tracking-wider transition-all shadow-xl shadow-[#5F52B5]/20"
//               >
//                 Book Inspection
//                 <ArrowRight className="w-4 h-4" />
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-[#5F52B5]/20 text-[#5F52B5] px-7 py-4 text-sm font-black uppercase tracking-wider hover:border-[#5F52B5] transition-all"
//               >
//                 <Phone className="w-4 h-4" />
//                 {LOCAL.phoneNo}
//               </a>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {[
//                 { icon: SearchCheck, title: "Inspection First" },
//                 { icon: ShieldCheck, title: "Targeted Service" },
//                 { icon: Home, title: "Local SE21 Support" },
//               ].map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={item.title}
//                     className="rounded-2xl bg-white border border-[#5F52B5]/10 p-4 shadow-lg"
//                   >
//                     <Icon className="w-5 h-5 text-[#5F52B5] mb-3" />
//                     <span className="text-sm font-black text-[#15122D]">
//                       {item.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="lg:col-span-6 sg-hero-up sg-delay-1">
//             <div className="relative rounded-[3rem] overflow-hidden bg-[#15122D] shadow-2xl">
//               <div className="relative h-[560px]">
//                 <img
//                   src="/images/servicehero.webp"
//                   alt={`${LOCAL.companyName} pest control services in ${LOCAL.area}`}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   loading="eager"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/85 via-[#15122D]/25 to-transparent" />

//                 <div className="absolute top-6 left-6 rounded-2xl bg-white/95 px-5 py-4 shadow-xl">
//                   <MapPin className="w-7 h-7 text-[#5F52B5] mb-3" />
//                   <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                     Serving
//                   </span>
//                   <span className="block text-xl font-black text-[#15122D]">
//                     {LOCAL.area} {LOCAL.postcode}
//                   </span>
//                 </div>

//                 <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/95 backdrop-blur-xl p-6 shadow-2xl">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-2xl bg-[#F7F5FF] flex items-center justify-center shrink-0">
//                       <Sparkles className="w-5 h-5 text-[#5F52B5]" />
//                     </div>

//                     <div>
//                       <h3 className="text-xl font-black text-[#15122D] mb-2">
//                         Find The Right Pest Service
//                       </h3>
//                       <p className="text-sm text-slate-600 leading-relaxed font-medium">
//                         Filter services by pest type and contact our Dulwich team
//                         for the best next step.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SERVICES STRIP */}
//         <div className="mt-12 rounded-[2.5rem] bg-white border border-[#5F52B5]/10 shadow-2xl shadow-slate-900/5 p-4 sg-hero-up sg-delay-2">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//             {serviceTypes.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className={`p-5 ${
//                     index !== serviceTypes.length - 1
//                       ? "lg:border-r border-[#5F52B5]/10"
//                       : ""
//                   }`}
//                 >
//                   <div className="w-12 h-12 rounded-2xl bg-[#F7F5FF] flex items-center justify-center mb-4">
//                     <Icon className="w-5 h-5 text-[#5F52B5]" />
//                   </div>

//                   <h3 className="text-base font-black text-[#15122D] mb-2">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">
//                     {item.text}
//                   </p>

//                   <CheckCircle2 className="w-5 h-5 text-[#5F52B5]" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
  Bug,
  ShieldCheck,
  SearchCheck,
  Home,
  Mouse,
  Bird,
  ClipboardCheck,
} from "lucide-react";

export default function ServicesHeroSection() {
  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    address: "67 Dulwich Village, London SE21 7BJ",
    phoneNo: "07405 264579",
    phoneTel: "+447405264579",
    companyName: "SuperGuard Dulwich",
  };

  const serviceTypes = [
    { title: "Rodents & Wildlife", text: "Rats, mice and squirrels.", icon: Mouse },
    { title: "Insects & Crawlers", text: "Bed bugs, ants, fleas.", icon: Bug },
    { title: "Bird Control", text: "Proofing and deterrents.", icon: Bird },
    { title: "Inspections", text: "Find the root cause.", icon: ClipboardCheck },
  ];

  return (
    <section className="relative mt-10 overflow-hidden bg-[#15122D] pt-36 pb-20 lg:pt-44 lg:pb-28">
      <style>{`
        @keyframes sgHeroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .sg-hero-up {
          animation: sgHeroFadeUp .75s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: opacity, transform;
        }

        .sg-delay-1 { animation-delay: 120ms; }
        .sg-delay-2 { animation-delay: 220ms; }

        @media (prefers-reduced-motion: reduce) {
          .sg-hero-up { animation: none; }
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/servicehero.webp"
          alt={`${LOCAL.companyName} pest control services in ${LOCAL.area}`}
          className="w-full h-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-[#15122D]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#15122D]/65 via-[#15122D]/35 to-[#15122D]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5F52B5]/35 via-transparent to-[#15122D]/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="min-h-[66vh] flex flex-col items-center justify-center text-center">
          <div className="max-w-5xl mx-auto sg-hero-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white mb-6">
              <ShieldCheck className="w-4 h-4 text-[#B8AEFF]" />
              Pest Control Services • {LOCAL.area} {LOCAL.postcode}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.98] text-white mb-6 drop-shadow-2xl">
              Pest Control Services For{" "}
              <span className="text-[#B8AEFF]">Dulwich Properties</span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-medium max-w-3xl mx-auto mb-8 drop-shadow">
              Browse SuperGuard Dulwich services for rodents, insects, wasps,
              birds and proofing. We help local homes, landlords and businesses
              choose the right pest control solution.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5F52B5] hover:bg-[#4B4095] text-white px-7 py-4 text-sm font-black uppercase tracking-wider transition-all shadow-xl shadow-[#5F52B5]/25"
              >
                Book Inspection
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#15122D] px-7 py-4 text-sm font-black uppercase tracking-wider hover:bg-[#F1EFFF] transition-all"
              >
                <Phone className="w-4 h-4" />
                {LOCAL.phoneNo}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { icon: SearchCheck, title: "Inspection First" },
                { icon: ShieldCheck, title: "Targeted Service" },
                { icon: Home, title: "Local SE21 Support" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/13 backdrop-blur-md border border-white/18 p-4 shadow-lg"
                  >
                    <Icon className="w-5 h-5 text-[#B8AEFF] mx-auto mb-3" />
                    <span className="text-sm font-black text-white">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SERVICES STRIP */}
        <div className="relative -mb-8 rounded-[2.5rem] bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl shadow-[#15122D]/20 p-4 sg-hero-up sg-delay-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {serviceTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`p-5 text-center ${
                    index !== serviceTypes.length - 1
                      ? "lg:border-r border-[#5F52B5]/10"
                      : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F5FF] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-[#5F52B5]" />
                  </div>

                  <h3 className="text-base font-black text-[#15122D] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">
                    {item.text}
                  </p>

                  <CheckCircle2 className="w-5 h-5 text-[#5F52B5] mx-auto" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/12 backdrop-blur-md border border-white/15 px-5 py-4 text-white">
            <MapPin className="w-5 h-5 text-[#B8AEFF]" />
            <span className="text-sm font-bold">{LOCAL.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}