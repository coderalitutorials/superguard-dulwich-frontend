




// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   ArrowRight,
//   ShieldCheck,
//   Bug,
//   Rat,
//   Home,
//   Clock,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "SuperGuard Rotherhithe",
//     area: "Rotherhithe",
//     postcode: "SE16",
//     phone: "07448 491927",
//     phoneTel: "+447448491927",
//     address: "10 Someford Way, London SE16 6QW",
//   };

//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Services", path: "/services" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const services = [
//     {
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatments",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bugs Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Removal",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Home Pest Inspection",
//       icon: Home,
//       state: {
//         scrollToService: null,
//         category: "All",
//       },
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#4C4098] text-white">
//   <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#6558C7] to-transparent" />
//   <div className="absolute -top-28 -right-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
//   <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#7A6AE6]/30 blur-3xl" />

//  <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-20">

//   {/* TOP CTA STRIP */}


//         {/* TOP CTA STRIP */}
//         <div className="rounded-[3rem] bg-white text-slate-900 p-6 md:p-8 lg:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.18)] mb-14 overflow-hidden relative">
//           <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#4C4098]/10 blur-2xl" />

//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//             <div className="lg:col-span-8">
//               <span className="inline-flex items-center gap-2 rounded-full bg-[#F3F1FF] border border-[#4C4098]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#4C4098] mb-5">
//                 <span className="w-2 h-2 rounded-full bg-[#4C4098]" />
//                 Need Pest Control Help?
//               </span>

//               <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4">
//                 Speak With SuperGuard Rotherhithe Today
//               </h2>

//               <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-2xl">
//                 Whether it is rats, mice, bed bugs, wasps, cockroaches, fleas or
//                 ants, our local team can help you understand the issue and plan
//                 the right next step.
//               </p>
//             </div>

//             <div className="lg:col-span-4 flex flex-col gap-3">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#4C4098] text-white px-6 py-4 text-sm font-black hover:bg-[#3F3484] hover:scale-[1.03] transition-all"
//               >
//                 <Phone className="w-4 h-4" />
//                 {LOCAL.phone}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#4C4098] text-[#4C4098] px-6 py-4 text-sm font-black hover:bg-[#4C4098] hover:text-white transition-all"
//               >
//                 Request Callback
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* MAIN FOOTER GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
//           {/* BRAND */}
//           <div className="lg:col-span-4">
//             <Link to="/" className="inline-block mb-6">
//               <img
//                 src="/images/superguard-logo.webp"
//                 alt={`${LOCAL.company} Pest Control`}
//                 className="h-16 w-auto object-contain brightness-0 invert"
//                 loading="lazy"
//               />
//             </Link>

//             <p className="text-sm text-white/80 leading-relaxed font-medium max-w-sm mb-6">
//               {LOCAL.company} provides local pest control support for homes,
//               flats, landlords and businesses across {LOCAL.area} and nearby{" "}
//               {LOCAL.postcode}. We focus on clear advice, practical treatments
//               and reliable customer support.
//             </p>

//             <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-3">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
//                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
//               </span>
//               <div>
//                 <p className="text-[10px] font-black uppercase tracking-widest text-[#DDD7FF]">
//                   Local Team Active
//                 </p>
//                 <p className="text-xs font-bold text-white">
//                   Serving {LOCAL.area} {LOCAL.postcode}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div className="lg:col-span-2">
//             <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDD7FF] mb-5">
//               Quick Links
//             </h4>

//             <nav className="flex flex-col gap-3">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="group inline-flex items-center justify-between text-sm font-bold text-white/75 hover:text-white transition-colors"
//                 >
//                   <span>{link.name}</span>

//                   <ArrowRight className="w-3.5 h-3.5 text-[#DDD7FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* SERVICES */}
//           <div className="lg:col-span-3">
//             <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDD7FF] mb-5">
//               Pest Services
//             </h4>

//             <div className="flex flex-col gap-3">
//               {services.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="group inline-flex items-center gap-3 text-sm font-bold text-white/75 hover:text-white transition-colors"
//                   >
//                     <span className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-300">
//                       <Icon className="w-4 h-4 text-white group-hover:text-[#4C4098] transition-colors duration-300" />
//                     </span>

//                     <span>{service.name}</span>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* CONTACT CARD */}
//           <div className="lg:col-span-3">
//             <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/15 p-6">

//               <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDD7FF] mb-6">
//                 Contact Details
//               </h4>

//               <div className="space-y-5">

//                 <div className="flex gap-4">
//                   <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
//                     <MapPin className="w-5 h-5 text-white" />
//                   </div>

//                   <div>
//                     <span className="block text-[10px] uppercase tracking-widest text-[#DDD7FF] font-black mb-1">
//                       Address
//                     </span>

//                     <p className="text-sm text-white/80 leading-relaxed font-medium">
//                       {LOCAL.address}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
//                     <Phone className="w-5 h-5 text-white" />
//                   </div>

//                   <div>
//                     <span className="block text-[10px] uppercase tracking-widest text-[#DDD7FF] font-black mb-1">
//                       Call Us
//                     </span>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="text-lg font-black text-white hover:text-[#DDD7FF] transition-colors"
//                     >
//                       {LOCAL.phone}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
//                     <Clock className="w-5 h-5 text-white" />
//                   </div>

//                   <div>
//                     <span className="block text-[10px] uppercase tracking-widest text-[#DDD7FF] font-black mb-1">
//                       Availability
//                     </span>

//                     <p className="text-sm text-white/80 font-medium">
//                       Local Pest Control Support
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>


//         {/* TRUST STRIP */}
//         <div className="border-t border-white/10 border-b border-white/10 py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//             {[
//               "Inspection First",
//               "Safe Treatment Plans",
//               "Local Rotherhithe Team",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-4 flex items-center gap-3 hover:bg-white/15 transition-all duration-300"
//               >
//                 <ShieldCheck className="w-5 h-5 text-white" />

//                 <span className="text-sm font-black text-white">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM BAR */}
//         <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-5">

//           <p className="text-sm text-white/70 text-center lg:text-left leading-relaxed">
//             © {new Date().getFullYear()}{" "}
//             <span className="font-black text-white">
//               {LOCAL.company}
//             </span>
//             . All Rights Reserved.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">

//             <Link
//               to="/"
//               className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
//             >
//               Home
//             </Link>

//             <span className="text-white/40">•</span>

//             <Link
//               to="/services"
//               className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
//             >
//               Services
//             </Link>

//             <span className="text-white/40">•</span>

//             <Link
//               to="/about-us"
//               className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
//             >
//               About
//             </Link>

//             <span className="text-white/40">•</span>

//             <Link
//               to="/contact-us"
//               className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
//             >
//               Contact
//             </Link>

//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="inline-flex items-center gap-2 rounded-full bg-white text-[#4C4098] px-5 py-3 text-sm font-black hover:scale-[1.04] transition-all"
//           >
//             <Phone className="w-4 h-4" />
//             {LOCAL.phone}
//           </a>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;














import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Bug,
  Rat,
  Home,
  Clock,
} from "lucide-react";

const Footer = () => {
  const LOCAL = {
    company: "SuperGuard Dulwich",
    area: "Dulwich",
    postcode: "SE21",
    phone: "07405 264579",
    phoneTel: "+447405264579",
    address: "67 Dulwich Village, London SE21 7BJ",
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const services = [
    {
      name: "Rats & Mice Control",
      icon: Rat,
      state: {
        scrollToService: "Rats & Mice Control",
        category: "Rodents & Wildlife",
      },
    },
    {
      name: "Bed Bug Treatments",
      icon: Bug,
      state: {
        scrollToService: "Bed Bugs Control",
        category: "Insects",
      },
    },
    {
      name: "Wasp Nest Control",
      icon: ShieldCheck,
      state: {
        scrollToService: "Wasp Nest Removal",
        category: "Insects",
      },
    },
    {
      name: "Home Pest Inspection",
      icon: Home,
      state: {
        scrollToService: null,
        category: "All",
      },
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#4C4098] text-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#6558C7] to-transparent" />
      <div className="absolute -top-28 -right-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#7A6AE6]/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-20">
        {/* TOP CTA STRIP */}
        <div className="rounded-[3rem] bg-white text-slate-900 p-6 md:p-8 lg:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.18)] mb-14 overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#4C4098]/10 blur-2xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F3F1FF] border border-[#4C4098]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#4C4098] mb-5">
                <span className="w-2 h-2 rounded-full bg-[#4C4098]" />
                Need Pest Control Help?
              </span>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4">
                Speak With SuperGuard Dulwich Today
              </h2>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-2xl">
                Whether it is rats, mice, bed bugs, wasps, cockroaches, fleas or
                ants, our Dulwich team can help you understand the issue and plan
                the right next step.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#4C4098] text-white px-6 py-4 text-sm font-black hover:bg-[#3F3484] hover:scale-[1.03] transition-all"
              >
                <Phone className="w-4 h-4" />
                {LOCAL.phone}
              </a>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#4C4098] text-[#4C4098] px-6 py-4 text-sm font-black hover:bg-[#4C4098] hover:text-white transition-all"
              >
                Request Callback
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/superguard-logo.webp"
                alt={`${LOCAL.company} Pest Control`}
                className="h-16 w-auto object-contain brightness-0 invert"
                loading="lazy"
              />
            </Link>

            <p className="text-sm text-white/80 leading-relaxed font-medium max-w-sm mb-6">
              {LOCAL.company} provides local pest control support for homes,
              flats, landlords and businesses across {LOCAL.area} and nearby{" "}
              {LOCAL.postcode}. We focus on clear advice, practical treatments
              and reliable customer support.
            </p>

            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#DDD7FF]">
                  Local Team Active
                </p>
                <p className="text-xs font-bold text-white">
                  Serving {LOCAL.area} {LOCAL.postcode}
                </p>
              </div>
            </div>
          </div>



                    {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDD7FF] mb-5">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group inline-flex items-center justify-between text-sm font-bold text-white/75 hover:text-white transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DDD7FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDD7FF] mb-5">
              Pest Services
            </h4>

            <div className="flex flex-col gap-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.name}
                    to="/services"
                    state={service.state}
                    className="group inline-flex items-center gap-3 text-sm font-bold text-white/75 hover:text-white transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                      <Icon className="w-4 h-4 text-white group-hover:text-[#4C4098] transition-colors duration-300" />
                    </span>

                    <span>{service.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CONTACT CARD */}
          <div className="lg:col-span-3">
            <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/15 p-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDD7FF] mb-6">
                Contact Details
              </h4>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#DDD7FF] font-black mb-1">
                      Address
                    </span>

                    <p className="text-sm text-white/80 leading-relaxed font-medium">
                      {LOCAL.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#DDD7FF] font-black mb-1">
                      Call Us
                    </span>

                    <a
                      href={`tel:${LOCAL.phoneTel}`}
                      className="text-lg font-black text-white hover:text-[#DDD7FF] transition-colors"
                    >
                      {LOCAL.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#DDD7FF] font-black mb-1">
                      Availability
                    </span>

                    <p className="text-sm text-white/80 font-medium">
                      Local Pest Control Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

            <p className="text-sm text-white/65 text-center lg:text-left leading-relaxed">
              © {new Date().getFullYear()}{" "}
              <span className="font-black text-white">
                {LOCAL.company}
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-5">
              <Link
                to="/"
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                Services
              </Link>

              <Link
                to="/about-us"
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                About Us
              </Link>

              <Link
                to="/contact-us"
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#4C4098] px-5 py-3 text-sm font-black hover:scale-[1.04] transition-all"
            >
              <Phone className="w-4 h-4" />
              {LOCAL.phone}
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;