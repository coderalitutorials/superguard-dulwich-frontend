




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     businessName: "SuperGuard Rotherhithe",
//     address: "10 Someford Way, London SE16 6QW",
//     phoneDisplay: "07448 491927",
//     phoneTel: "+447448491927",
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number");
//       return;
//     }
//     setLoading(true);
//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.businessName,
//         address: LOCAL.address,
//         phoneNumber: LOCAL.phoneDisplay,
//       }),
//       {
//         loading: "Sending your callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Request sent. SuperGuard will contact you shortly.";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong.";
//         },
//       }
//     );
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative bg-[#F7F6FF] pt-36 md:pt-40 pb-20 overflow-hidden"
//     >
//       {/* CSS Animations for Smooth Performance */}
//       <style>{`
//         @keyframes slideLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
//         @keyframes slideRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
//         .animate-left { animation: slideLeft 1s ease-out forwards; }
//         .animate-right { animation: slideRight 1s ease-out forwards; }
//       `}</style>

//       <Toaster position="top-center" reverseOrder={false} />

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-24 left-8 w-28 h-28 rounded-full border-[18px] border-[#5E50B5]/10" />
//         <div className="absolute bottom-16 right-8 w-48 h-48 rounded-full bg-white/80 blur-2xl" />
//         <div className="absolute top-0 right-0 w-[38%] h-full bg-white hidden lg:block" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
//           {/* LEFT IMAGE PANEL */}
//           <div className="lg:col-span-5 order-2 lg:order-1 animate-left">
//             <div className="relative">
//               <div className="absolute -top-5 -left-5 w-full h-full rounded-[2.5rem] bg-[#5E50B5]" />
//               <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl shadow-[#5E50B5]/20 min-h-[430px]">
//                 <img
//                   src="/images/superguard-hero.webp"
//                   alt={`${LOCAL.businessName} pest control`}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
//                 <div className="absolute top-5 left-5 bg-white rounded-2xl px-4 py-3 shadow-xl">
//                   <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">Based In</span>
//                   <span className="block text-sm font-black text-slate-950">{LOCAL.area} {LOCAL.postcode}</span>
//                 </div>
//                 <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/95 backdrop-blur-md p-5 shadow-xl">
//                   <p className="text-sm font-bold text-slate-700 leading-relaxed">Professional pest inspections and treatments across Rotherhithe.</p>
//                 </div>
//               </div>
//               <div className="absolute -bottom-5 -right-3 bg-white rounded-3xl shadow-2xl px-5 py-4 border border-[#5E50B5]/10">
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Call Direct</span>
//                 <a href={`tel:${LOCAL.phoneTel}`} className="block text-[#5E50B5] text-lg font-black">{LOCAL.phoneDisplay}</a>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTENT PANEL */}
//           <div className="lg:col-span-7 order-1 lg:order-2 animate-right">
//             <div className="max-w-3xl lg:ml-auto">
//               <div className="inline-flex items-center gap-3 bg-white border border-[#5E50B5]/15 rounded-full px-4 py-2 shadow-sm mb-6">
//                 <span className="w-2 h-2 rounded-full bg-[#5E50B5]" />
//                 <span className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-700">SuperGuard Pest Control • {LOCAL.area}</span>
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.98] tracking-tight text-slate-950 mb-6">
//                 Pest Problems Sorted Without Stress In <span className="text-[#5E50B5]">Rotherhithe</span>
//               </h1>

//               <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium mb-8">
//                 From rats and mice to bed bugs, cockroaches, ants, fleas and wasps, SuperGuard Rotherhithe provides careful pest control.
//               </p>

//               <div className="flex flex-wrap gap-3 mb-8">
//                 {["Rats & Mice", "Bed Bugs", "Cockroaches", "Wasps", "Fleas"].map((item) => (
//                   <span key={item} className="rounded-full bg-white border border-[#5E50B5]/10 px-4 py-2 text-xs font-black text-slate-700 shadow-sm hover:bg-[#5E50B5] hover:text-white transition-all duration-300">
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
//                 <div className="xl:col-span-7 rounded-[2rem] bg-white border border-slate-200 shadow-xl p-5 sm:p-6">
//                   <h2 className="text-xl font-black text-slate-950 mb-2">Request A Fast Callback</h2>
//                   <form onSubmit={handleSubmit} className="space-y-3">
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full rounded-xl border border-slate-200 bg-[#FAFAFF] px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#5E50B5]" />
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Postcode" required className="w-full rounded-xl border border-slate-200 bg-[#FAFAFF] px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#5E50B5]" />
//                       <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className={`w-full rounded-xl border bg-[#FAFAFF] px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#5E50B5] ${phoneError ? "border-red-500" : "border-slate-200"}`} />
//                     </div>
//                     <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#5E50B5] text-white px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] transition-all hover:bg-[#4C4098]">
//                       {loading ? "Sending..." : "Send Callback Request"}
//                     </button>
//                   </form>
//                 </div>

//                 <div className="xl:col-span-5 rounded-[2rem] bg-[#201A46] text-white p-6 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-2xl font-black mt-2 mb-4">Speak With Our {LOCAL.area} Team</h3>
//                     <p className="text-sm text-white/75">Based near {LOCAL.address}, helping customers across SE16.</p>
//                   </div>
//                   <div className="mt-8 space-y-3">
//                     <a href={`tel:${LOCAL.phoneTel}`} className="block rounded-2xl bg-white text-[#201A46] text-center py-3.5 font-black">{LOCAL.phoneDisplay}</a>
//                     <Link to="/services" className="block rounded-2xl border border-white/20 text-white text-center py-3.5 font-black hover:bg-white/10">View Services</Link>
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

















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     area: "Dulwich",
//     postcode: "SE21",
//     businessName: "SuperGuard Dulwich",
//     address: "67 Dulwich Village, London SE21 7BJ",
//     phoneDisplay: "07405 264579",
//     phoneTel: "+447405264579",
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.businessName,
//         address: LOCAL.address,
//         phoneNumber: LOCAL.phoneDisplay,
//       }),
//       {
//         loading: "Sending your callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Request sent. SuperGuard Dulwich will contact you shortly.";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong.";
//         },
//       }
//     );
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative pt-36 md:pt-44 pb-20 overflow-hidden bg-white"
//     >
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(35px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes softFloat {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-12px); }
//         }

//         .fade-up { animation: fadeUp 0.9s ease-out forwards; }
//         .soft-float { animation: softFloat 5s ease-in-out infinite; }
//       `}</style>

//       <Toaster position="top-center" reverseOrder={false} />

//       {/* BACKGROUND STYLE */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[linear-gradient(115deg,#F5F3FF_0%,#FFFFFF_48%,#F1EFFF_100%)]" />
//         <div className="absolute -top-28 -right-24 w-80 h-80 rounded-full bg-[#5F52B5]/15 blur-3xl" />
//         <div className="absolute top-40 -left-28 w-72 h-72 rounded-full bg-[#1B1738]/10 blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-6 fade-up">
//             <div className="inline-flex items-center gap-3 rounded-full bg-white border border-[#5F52B5]/15 px-4 py-2 shadow-sm mb-6">
//               <span className="w-2.5 h-2.5 rounded-full bg-[#5F52B5]" />
//               <span className="text-[11px] font-black uppercase tracking-[0.17em] text-slate-700">
//                 Local Pest Control • {LOCAL.area} {LOCAL.postcode}
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.98] tracking-tight text-[#15122D] mb-6">
//               Protecting Dulwich Homes From Unwanted Pests
//             </h1>

//             <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium mb-7">
//               SuperGuard Dulwich provides reliable pest control for homes and
//               businesses across SE21. From sudden rodent activity to bed bugs,
//               cockroaches, fleas, ants and wasp nests, our local team helps you
//               take back control quickly and safely.
//             </p>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-2xl">
//               {[
//                 ["Fast", "Response"],
//                 ["Local", "SE21 Team"],
//                 ["Home", "Protection"],
//                 ["Safe", "Treatment"],
//               ].map(([top, bottom]) => (
//                 <div
//                   key={top}
//                   className="rounded-2xl bg-white border border-[#5F52B5]/10 p-4 shadow-sm"
//                 >
//                   <span className="block text-lg font-black text-[#5F52B5]">
//                     {top}
//                   </span>
//                   <span className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mt-1">
//                     {bottom}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* CALLBACK FORM */}
//             <div className="rounded-[2rem] bg-[#15122D] p-5 sm:p-6 shadow-2xl shadow-[#15122D]/20 max-w-2xl">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-black text-white">
//                     Request A Dulwich Callback
//                   </h2>
//                   <p className="text-sm text-white/65 mt-1">
//                     Send your details and our team will get back to you.
//                   </p>
//                 </div>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="shrink-0 rounded-full bg-[#5F52B5] text-white px-5 py-3 text-sm font-black hover:bg-[#4B4095] transition-all"
//                 >
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>

//               <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   required
//                   className="sm:col-span-4 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/45 outline-none focus:border-[#8D7CFF]"
//                 />

//                 <input
//                   type="text"
//                   name="postcode"
//                   value={formData.postcode}
//                   onChange={handleChange}
//                   placeholder="Postcode"
//                   required
//                   className="sm:col-span-3 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/45 outline-none focus:border-[#8D7CFF]"
//                 />

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   required
//                   className={`sm:col-span-3 w-full rounded-xl border bg-white/10 px-4 py-3 text-sm font-semibold text-white placeholder:text-white/45 outline-none focus:border-[#8D7CFF] ${
//                     phoneError ? "border-red-400" : "border-white/10"
//                   }`}
//                 />

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="sm:col-span-2 w-full rounded-xl bg-white text-[#15122D] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition-all hover:bg-[#F1EFFF] disabled:opacity-70"
//                 >
//                   {loading ? "Sending..." : "Send"}
//                 </button>

//                 {phoneError && (
//                   <p className="sm:col-span-12 text-xs font-bold text-red-300">
//                     {phoneError}
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>

//           {/* RIGHT IMAGE PANEL */}
//           <div className="lg:col-span-6 fade-up">
//             <div className="relative lg:pl-6">
//               <div className="absolute -top-6 -right-4 w-32 h-32 rounded-full bg-[#5F52B5]/20 soft-float" />
//               <div className="absolute -bottom-5 -left-2 w-40 h-40 rounded-full bg-[#15122D]/10 soft-float" />

//               <div className="relative rounded-[3rem] overflow-hidden min-h-[500px] bg-slate-200 shadow-2xl shadow-[#5F52B5]/20 border-[10px] border-white">
//                 <img
//                   src="/images/superguard-hero.webp"
//                   alt={`${LOCAL.businessName} pest control service in ${LOCAL.area}`}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] hover:scale-105"
//                   loading="eager"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/85 via-[#15122D]/20 to-transparent" />

//                 <div className="absolute top-6 left-6 right-6 flex justify-between gap-3">
//                   <div className="rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
//                     <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5]">
//                       Based Near
//                     </span>
//                     <span className="block text-sm font-black text-slate-950">
//                       Dulwich Village
//                     </span>
//                   </div>

//                   <div className="rounded-2xl bg-[#5F52B5] text-white px-4 py-3 shadow-xl">
//                     <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-white/70">
//                       Covers
//                     </span>
//                     <span className="block text-sm font-black">
//                       SE21 Area
//                     </span>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="rounded-[2rem] bg-white/95 backdrop-blur-md p-5 sm:p-6 shadow-2xl">
//                     <h3 className="text-2xl font-black text-[#15122D] mb-2">
//                       Same Local Care. Stronger Pest Protection.
//                     </h3>
//                     <p className="text-sm text-slate-600 leading-relaxed font-medium">
//                       Serving Dulwich Village and nearby areas with practical
//                       inspections, clear advice and targeted pest treatments.
//                     </p>

//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {["Rats & Mice", "Bed Bugs", "Cockroaches", "Wasps"].map(
//                         (item) => (
//                           <span
//                             key={item}
//                             className="rounded-full bg-[#F1EFFF] text-[#5F52B5] px-3 py-1.5 text-[11px] font-black"
//                           >
//                             {item}
//                           </span>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-6 right-8 hidden sm:block rounded-3xl bg-[#5F52B5] text-white px-6 py-5 shadow-2xl shadow-[#5F52B5]/30">
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-white/70">
//                   Call Direct
//                 </span>
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="block text-xl font-black"
//                 >
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>
//             </div>

//             <div className="mt-10 flex flex-col sm:flex-row gap-3 lg:hidden">
//               <Link
//                 to="/services"
//                 className="rounded-2xl bg-[#5F52B5] text-white text-center px-5 py-4 font-black uppercase tracking-widest text-xs"
//               >
//                 View Services
//               </Link>

//               <Link
//                 to="/contact-us"
//                 className="rounded-2xl bg-white border border-[#5F52B5]/15 text-[#5F52B5] text-center px-5 py-4 font-black uppercase tracking-widest text-xs"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function HeroSection() {
  const [formData, setFormData] = useState({ name: "", postcode: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    businessName: "SuperGuard Dulwich",
    address: "67 Dulwich Village, London SE21 7BJ",
    phoneDisplay: "07405 264579",
    phoneTel: "+447405264579",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Please enter your phone number");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post("https://superguard-dulwich-backend.vercel.app/api/callback", {
        ...formData,
        area: LOCAL.area,
        business: LOCAL.businessName,
        address: LOCAL.address,
        phoneNumber: LOCAL.phoneDisplay,
      }),
      {
        loading: "Sending your callback request...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Request sent. SuperGuard Dulwich will contact you shortly.";
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Something went wrong.";
        },
      }
    );
  };

  return (
    <section
      itemScope
      itemType="https://schema.org/PestControlService"
      className="relative min-h-screen pt-36 md:pt-44 pb-20 overflow-hidden bg-[#15122D]"
    >
      <Toaster position="top-center" reverseOrder={false} />

      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/superguard-hero.webp"
          alt={`${LOCAL.businessName} pest control in ${LOCAL.area}`}
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* LIGHTER OVERLAY FOR CLEAR IMAGE */}
        <div className="absolute inset-0 bg-[#15122D]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#15122D]/55 via-[#15122D]/25 to-[#15122D]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5F52B5]/25 via-transparent to-[#15122D]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="min-h-[72vh] flex flex-col items-center justify-center text-center">
          {/* CONTENT */}
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center gap-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8AEFF]" />
              <span className="text-[11px] font-black uppercase tracking-[0.17em] text-white">
                SuperGuard Pest Control • {LOCAL.area} {LOCAL.postcode}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.98] tracking-tight text-white mb-6 drop-shadow-2xl">
              Dulwich Pest Control For Safer Homes & Businesses
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto font-medium mb-7 drop-shadow">
              SuperGuard Dulwich provides careful pest inspections and targeted
              treatments across SE21, helping with rats, mice, bed bugs,
              cockroaches, ants, fleas, moths and wasp nests.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Rats & Mice", "Bed Bugs", "Cockroaches", "Wasps", "Fleas"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/15 border border-white/25 backdrop-blur-md px-4 py-2 text-xs font-black text-white"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="rounded-2xl bg-[#5F52B5] hover:bg-[#4B4095] text-white px-7 py-4 text-center font-black shadow-xl shadow-[#5F52B5]/30"
              >
                Call: {LOCAL.phoneDisplay}
              </a>

              <Link
                to="/services"
                className="rounded-2xl bg-white text-[#15122D] px-7 py-4 text-center font-black hover:bg-[#F1EFFF]"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* HORIZONTAL CALLBACK FORM */}
          <div className="w-full max-w-6xl mx-auto rounded-[2rem] bg-white/16 backdrop-blur-xl border border-white/25 p-4 sm:p-5 shadow-2xl">
            <div className="mb-4 text-center">
              <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#D8D2FF]">
                Fast Local Callback
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                Request Help In Dulwich
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="md:col-span-3 w-full rounded-xl border border-white/20 bg-white/95 px-4 py-4 text-sm font-semibold text-[#15122D] placeholder:text-slate-500 outline-none focus:border-[#B8AEFF]"
              />

              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Postcode"
                required
                className="md:col-span-3 w-full rounded-xl border border-white/20 bg-white/95 px-4 py-4 text-sm font-semibold text-[#15122D] placeholder:text-slate-500 outline-none focus:border-[#B8AEFF]"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className={`md:col-span-3 w-full rounded-xl border bg-white/95 px-4 py-4 text-sm font-semibold text-[#15122D] placeholder:text-slate-500 outline-none focus:border-[#B8AEFF] ${
                  phoneError ? "border-red-500" : "border-white/20"
                }`}
              />

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-3 w-full rounded-xl bg-[#5F52B5] text-white px-5 py-4 text-xs font-black uppercase tracking-[0.16em] hover:bg-[#4B4095] disabled:opacity-70 shadow-lg shadow-[#5F52B5]/30"
              >
                {loading ? "Sending..." : "Send Callback Request"}
              </button>

              {phoneError && (
                <p className="md:col-span-12 text-center text-xs font-bold text-red-200">
                  {phoneError}
                </p>
              )}
            </form>

            <p className="text-center text-xs font-semibold text-white/80 mt-4">
              📍 Local service for Dulwich Village, SE21 and nearby areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}













