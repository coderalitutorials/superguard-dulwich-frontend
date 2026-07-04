




// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Pest Control",
//     area: "Rotherhithe",
//     postcode: "SE16",
//     fullAddress: "10 Someford Way, London SE16 6QW",
//     phoneDisplay: "07448 491927",
//     phoneTel: "+447448491927",
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 12);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `relative px-1 py-2 text-[13px] lg:text-[14px] font-black uppercase tracking-[0.14em] transition-all duration-300 ${
//       isActive ? "text-[#5E50B5]" : "text-slate-700 hover:text-[#5E50B5]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
//       isActive
//         ? "bg-[#5E50B5] text-white"
//         : "bg-slate-50 text-slate-800 hover:bg-[#F0EEFF] hover:text-[#5E50B5]"
//     }`;

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-xl shadow-slate-900/10" : "bg-white"
//       }`}
//     >
//       {/* TOP INFO STRIP */}
//       <div
//         itemScope
//         itemType="https://schema.org/LocalBusiness"
//         className="hidden sm:block bg-[#F6F4FF] border-b border-[#5E50B5]/15"
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex items-center justify-between gap-4">
//           <p className="m-0 text-[11px] font-black uppercase tracking-[0.16em] text-slate-700">
//             Trusted Pest Control in{" "}
//             <span itemProp="areaServed" className="text-[#5E50B5]">
//               {LOCAL.area} {LOCAL.postcode}
//             </span>
//           </p>

//           <div className="flex items-center gap-5 text-[11px] font-bold text-slate-600">
//             <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
//               📍 <span itemProp="streetAddress">{LOCAL.fullAddress}</span>
//             </span>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="text-[#5E50B5] hover:text-[#44388f] font-black"
//             >
//               Call: <span itemProp="telephone">{LOCAL.phoneDisplay}</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <nav className="h-20 md:h-24 border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 h-full flex items-center justify-between gap-5">
//           {/* LOGO */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             aria-label={`${LOCAL.company} ${LOCAL.area}`}
//             className="flex items-center shrink-0"
//           >
//             <img
//               src="/images/superguard-logo.webp"
//               alt={`${LOCAL.company} ${LOCAL.area}`}
//               className="h-14 md:h-16 lg:h-20 w-auto object-contain"
//               loading="eager"
//             />
//           </Link>

//           {/* DESKTOP LINKS */}
//           <ul className="hidden md:flex items-center gap-7 lg:gap-10 list-none m-0 p-0">
//             {[
//               ["Home", "/"],
//               ["Services", "/services"],
//               ["About Us", "/about-us"],
//               ["Contact Us", "/contact-us"],
//             ].map(([label, path]) => (
//               <li key={path}>
//                 <NavLink to={path} className={navClass}>
//                   {({ isActive }) => (
//                     <>
//                       {label}
//                       {isActive && (
//                         <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[#5E50B5]" />
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* CTA */}
//           <div className="hidden lg:flex items-center gap-3">
//             <div className="text-right leading-tight">
//               <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-black">
//                 Need pest help?
//               </span>
//               <span className="block text-sm font-black text-slate-900">
//                 {LOCAL.area} Team
//               </span>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="bg-[#5E50B5] hover:bg-[#4C4098] text-white px-6 py-3 rounded-full font-black text-sm tracking-wide transition-all shadow-lg shadow-[#5E50B5]/25"
//             >
//               {LOCAL.phoneDisplay}
//             </a>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden h-11 w-11 rounded-full bg-[#F0EEFF] text-[#5E50B5] flex items-center justify-center border border-[#5E50B5]/15 active:scale-95 transition-all"
//             aria-label="Toggle navigation menu"
//           >
//             {open ? (
//               <span className="text-lg font-black">✕</span>
//             ) : (
//               <span className="text-xl font-black">☰</span>
//             )}
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl shadow-slate-900/15">
//             <div className="p-5 flex flex-col gap-3">
//               <div className="rounded-3xl bg-[#F6F4FF] p-4 border border-[#5E50B5]/10">
//                 <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-[#5E50B5]">
//                   {LOCAL.postcode} Local Team
//                 </span>
//                 <span className="block mt-1 text-sm font-black text-slate-900">
//                   SuperGuard Pest Control {LOCAL.area}
//                 </span>
//                 <span className="block mt-2 text-xs font-semibold text-slate-600">
//                   📍 {LOCAL.fullAddress}
//                 </span>
//               </div>

//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
//                 Home
//               </NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
//                 Services
//               </NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
//                 About Us
//               </NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
//                 Contact Us
//               </NavLink>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-2 w-full py-4 rounded-2xl bg-[#5E50B5] text-white font-black text-center uppercase tracking-widest text-xs"
//               >
//                 Call Now: {LOCAL.phoneDisplay}
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }












import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const LOCAL = {
    company: "SuperGuard Dulwich",
    brand: "SuperGuard Pest Control",
    area: "Dulwich",
    postcode: "SE21",
    fullAddress: "67 Dulwich Village, London SE21 7BJ",
    phoneDisplay: "07405 264579",
    phoneTel: "+447405264579",
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `relative px-2 py-2 text-[13px] lg:text-[14px] font-extrabold uppercase tracking-[0.16em] transition-all duration-300 ${
      isActive
        ? "text-[#5F52B5]"
        : "text-slate-700 hover:text-[#5F52B5]"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block px-5 py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest transition-all ${
      isActive
        ? "bg-[#5F52B5] text-white shadow-lg shadow-[#5F52B5]/25"
        : "bg-white text-slate-800 hover:bg-[#F1EFFF] hover:text-[#5F52B5] border border-slate-100"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl shadow-slate-900/10"
          : "bg-white"
      }`}
    >
      {/* TOP LOCAL BAR */}
      <div
        itemScope
        itemType="https://schema.org/LocalBusiness"
        className="hidden sm:block bg-[#1B1738] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex items-center justify-between gap-4">
          <p className="m-0 text-[11px] font-black uppercase tracking-[0.18em] text-white/80">
            Local Pest Control Specialists in{" "}
            <span itemProp="areaServed" className="text-[#8D7CFF]">
              {LOCAL.area} {LOCAL.postcode}
            </span>
          </p>

          <div className="flex items-center gap-6 text-[11px] font-bold text-white/75">
            <span
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="hidden lg:inline"
            >
              📍 <span itemProp="streetAddress">{LOCAL.fullAddress}</span>
            </span>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="text-[#B8AEFF] hover:text-white font-black transition-colors"
            >
              Call Dulwich Team:{" "}
              <span itemProp="telephone">{LOCAL.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="h-20 md:h-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 h-full flex items-center justify-between gap-5">
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            aria-label={`${LOCAL.company} Pest Control`}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/images/superguard-logo.webp"
              alt={`${LOCAL.company} Logo`}
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-9 list-none m-0 p-0">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["About", "/about-us"],
              ["Contact", "/contact-us"],
            ].map(([label, path]) => (
              <li key={path}>
                <NavLink to={path} className={navClass}>
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] rounded-full bg-[#5F52B5] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* RIGHT CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="px-4 py-2 rounded-2xl bg-[#F4F2FF] border border-[#5F52B5]/10 text-right leading-tight">
              <span className="block text-[10px] uppercase tracking-widest text-[#5F52B5] font-black">
                Fast Local Response
              </span>
              <span className="block text-sm font-black text-slate-900">
                {LOCAL.area} Pest Team
              </span>
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="bg-[#5F52B5] hover:bg-[#4B4095] text-white px-6 py-3.5 rounded-2xl font-black text-sm tracking-wide transition-all shadow-xl shadow-[#5F52B5]/25"
            >
              {LOCAL.phoneDisplay}
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden h-11 w-11 rounded-2xl bg-[#F4F2FF] text-[#5F52B5] flex items-center justify-center border border-[#5F52B5]/15 active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <span className="text-lg font-black">✕</span>
            ) : (
              <span className="text-xl font-black">☰</span>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl shadow-slate-900/15">
            <div className="p-5 flex flex-col gap-3">
              <div className="rounded-3xl bg-[#1B1738] p-5 text-white">
                <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-[#B8AEFF]">
                  {LOCAL.postcode} Dulwich Local Team
                </span>

                <span className="block mt-1 text-base font-black">
                  {LOCAL.company}
                </span>

                <span className="block mt-3 text-xs font-semibold text-white/75 leading-relaxed">
                  📍 {LOCAL.fullAddress}
                </span>
              </div>

              <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
                Home
              </NavLink>

              <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
                Services
              </NavLink>

              <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
                About
              </NavLink>

              <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
                Contact
              </NavLink>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="mt-2 w-full py-4 rounded-2xl bg-[#5F52B5] text-white font-black text-center uppercase tracking-widest text-xs shadow-xl shadow-[#5F52B5]/25"
              >
                Call Now: {LOCAL.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}