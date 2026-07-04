

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   SlidersHorizontal,
//   Phone,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const LOCAL = {
//     area: "Rotherhithe",
//     postcode: "SE16",
//     address: "10 Someford Way, London SE16 6QW",
//     phoneNo: "07448 491927",
//     phoneTel: "+447448491927",
//     companyName: "SuperGuard Rotherhithe",
//   };

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       cat: "Insects",
//       title: `Ants Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       icon: Bug,
//       tag: "Indoor & Outdoor Ant Support",
//       guarantee: "Clear Inspection",
//       metric: "Trail Source Check",
//       details: `Ant activity can spread quickly through kitchens, wall edges, garden paths and food preparation areas. Our ${LOCAL.area} team checks the activity route, identifies likely nesting points and recommends a practical treatment plan for your property.`,
//     },
//     {
//       cat: "Insects",
//       title: `Bed Bugs Control ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       tag: "Bedroom & Furniture Pest Help",
//       guarantee: "Room Treatment Planning",
//       metric: "Mattress & Frame Checks",
//       details: `Bed bugs often hide inside mattress seams, headboards, bed frames and soft furnishings. SuperGuard Rotherhithe provides careful inspection support and targeted treatment planning for affected rooms across ${LOCAL.postcode}.`,
//     },
//     {
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       tag: "Fabric & Carpet Protection",
//       guarantee: "Material-Safe Approach",
//       metric: "Larvae Risk Check",
//       details: `Moths can damage wool carpets, rugs, clothing and stored fabrics. We help identify active moth signs, affected rooms and suitable treatment steps to protect fabrics and reduce future activity.`,
//     },
//     {
//       cat: "Insects",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       icon: Bug,
//       tag: "Carpet & Storage Area Pests",
//       guarantee: "Lifecycle Guidance",
//       metric: "Hidden Larvae Checks",
//       details: `Carpet beetles often stay hidden around skirting boards, wardrobes, storage spaces and fabric areas. Our team checks likely harbourage points and provides a practical treatment plan for your home or flat.`,
//     },
//     {
//       cat: "Insects",
//       title: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       tag: "Kitchen & Commercial Pest Help",
//       guarantee: "Hygiene-Focused Treatment",
//       metric: "Harbourage Inspection",
//       details: `Cockroaches can hide near appliances, pipework, cracks and food preparation areas. SuperGuard Rotherhithe helps homes and businesses manage cockroach activity with careful inspection and targeted treatment support.`,
//     },
//     {
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       icon: Rat,
//       tag: "Rodent Inspection & Proofing",
//       guarantee: "Entry Point Advice",
//       metric: "Activity Mapping",
//       details: `Rats and mice can cause damage, contamination and stress inside homes and businesses. Based near ${LOCAL.address}, our local team checks activity signs, possible entry points and the most suitable rodent control route.`,
//     },
//     {
//       cat: "Insects",
//       title: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       icon: Bug,
//       tag: "Home & Pet Area Support",
//       guarantee: "Comfort-Focused Plan",
//       metric: "Soft Furnishing Checks",
//       details: `Fleas can spread through carpets, sofas, pet resting areas and soft furnishings. We inspect affected areas and guide you through a suitable treatment and aftercare plan for your property.`,
//     },
//     {
//       cat: "Insects",
//       title: `Wasp Nest Removal ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       tag: "Nest Control Support",
//       guarantee: "Safe Treatment Planning",
//       metric: "Nest Location Check",
//       details: `Active wasp nests around roofs, sheds, gardens and wall voids can become unsafe quickly. Our team helps locate the nest and arrange safe professional treatment around ${LOCAL.area}.`,
//     },
//     {
//       cat: "Insects",
//       title: `Bee Relocation Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       icon: Bug,
//       tag: "Eco-Conscious Advice",
//       guarantee: "Safe Guidance",
//       metric: "Hive Risk Review",
//       details: `When bees settle too close to entrances or living spaces, we provide careful guidance and help you understand the safest next steps for your property.`,
//     },
//     {
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Proofing ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       tag: "Roof & Loft Protection",
//       guarantee: "Entry Route Advice",
//       metric: "Loft Access Checks",
//       details: `Squirrels can damage loft spaces, insulation and roof edges. SuperGuard Rotherhithe helps assess activity points and recommend suitable proofing steps.`,
//     },
//     {
//       cat: "Birds & Prevention",
//       title: `Property Proofing & Repairs ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       icon: Home,
//       tag: "Prevention & Property Care",
//       guarantee: "Long-Term Guidance",
//       metric: "Access Point Review",
//       details: `Proofing helps reduce the chance of pest return. We check open gaps, weak points, previous nesting areas and practical prevention options for your building.`,
//     },
//     {
//       cat: "Birds & Prevention",
//       title: `Birds Control & Deterrents ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       icon: Bird,
//       tag: "Pigeon & Bird Prevention",
//       guarantee: "Building Protection",
//       metric: "Ledge & Roof Checks",
//       details: `Bird activity can cause mess around ledges, rooftops and shop fronts. We help with practical deterrent advice and suitable prevention options for local properties.`,
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const incomingText = location.state.scrollToService.toLowerCase();
//           let keyword = incomingText;

//           if (incomingText.includes("rat") || incomingText.includes("mice")) {
//             keyword = "rat";
//           } else if (
//             incomingText.includes("bed bug") ||
//             incomingText.includes("bed bugs")
//           ) {
//             keyword = "bed bug";
//           } else if (incomingText.includes("wasp")) {
//             keyword = "wasp";
//           } else if (incomingText.includes("moth")) {
//             keyword = "moth";
//           }

//           const element = Array.from(
//             document.querySelectorAll("[data-title]")
//           ).find((el) => {
//             const currentTitle = el.getAttribute("data-title").toLowerCase();
//             return currentTitle.includes(keyword);
//           });

//           if (element) {
//             const offset = 170;
//             const bodyRect = document.body.getBoundingClientRect().top;
//             const elementRect = element.getBoundingClientRect().top;
//             const elementPosition = elementRect - bodyRect;
//             const offsetPosition = elementPosition - offset;

//             window.scrollTo({
//               top: offsetPosition,
//               behavior: "smooth",
//             });
//           }
//         }, 450);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="bg-white min-h-screen font-sans overflow-x-hidden text-slate-800 selection:bg-[#5E50B5] selection:text-white">
//       <style>{`
//         .service-card-wrapper {
//           position: relative;
//           border-radius: 2.5rem;
//           background: white;
//           border: 1px solid rgba(94, 80, 181, 0.1);
//           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }
        
//         .service-card-wrapper::after {
//           content: "";
//           position: absolute;
//           inset: -2px;
//           border-radius: 2.6rem;
//           border: 3px solid transparent;
//           background: linear-gradient(135deg, #5E50B5, #818CF8) border-box;
//           -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           opacity: 0;
//           transition: all 0.4s ease;
//           pointer-events: none;
//         }

//         .service-card-wrapper:hover::after {
//           opacity: 1;
//         }

//         .service-card-wrapper:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 25px 50px -12px rgba(94, 80, 181, 0.25);
//         }
//       `}</style>
      
//       <ServicesHeroSection />

//       <section className="relative bg-[#4C4098] text-white">
//         <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-4">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="flex flex-wrap gap-4 md:gap-7 items-center">
//               <span className="flex items-center gap-2 text-sm font-bold text-white/90">
//                 <MapPin className="w-4 h-4 text-[#DDD7FF]" />
//                 {LOCAL.address}
//               </span>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="flex items-center gap-2 text-sm font-black text-white hover:text-[#DDD7FF] transition-colors"
//               >
//                 <Phone className="w-4 h-4 text-[#DDD7FF]" />
//                 {LOCAL.phoneNo}
//               </a>
//             </div>

//             <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 w-fit">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
//               </span>
//               <span className="text-[10px] uppercase font-black tracking-[0.18em] text-white">
//                 {LOCAL.area} Service Team Active
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-xl border-b border-[#5E50B5]/10">
//         <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-5">
//           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
//             <div>
//               <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//                 <SlidersHorizontal className="w-4 h-4" />
//                 Filter Pest Services
//               </span>
//               <p className="text-sm text-slate-500 font-semibold mt-1">
//                 Select a category to view services available in {LOCAL.area}.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2 rounded-[1.5rem] bg-[#F7F6FF] border border-[#5E50B5]/10 p-2">
//               {categories.map((cat) => {
//                 const active = selectedCategory === cat;

//                 return (
//                   <button
//                     key={cat}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-5 py-3 rounded-2xl text-xs font-black transition-all duration-300 ${
//                       active
//                         ? "bg-[#5E50B5] text-white shadow-lg shadow-[#5E50B5]/20"
//                         : "text-slate-600 hover:bg-white hover:text-[#5E50B5]"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative overflow-hidden py-20 lg:py-28 bg-[#F7F6FF]">
//         <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/10 blur-3xl" />
//         <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-white blur-3xl" />

//         <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//           <div className="max-w-3xl mb-14">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//               <span className="w-2 h-2 rounded-full bg-[#5E50B5]" />
//               SuperGuard Service Directory
//             </span>

//             <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-950">
//               Pest Control Services Across{" "}
//               <span className="text-[#5E50B5]">{LOCAL.area}</span>
//             </h2>

//             <p className="mt-5 text-base text-slate-600 leading-relaxed font-medium">
//               Choose from common pest control services for homes, flats,
//               landlords and businesses across {LOCAL.postcode}.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
//             {filteredServices.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={index}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   className="group service-card-wrapper overflow-hidden cursor-pointer scroll-mt-44"
//                 >
//                   <div className="relative h-[260px] overflow-hidden bg-slate-200">
//                     <img
//                       src={service.image}
//                       alt={`${LOCAL.companyName} - ${service.title}`}
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-105"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
//                     <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3">
//                       <span className="rounded-full bg-white/95 backdrop-blur px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#5E50B5]">
//                         {service.cat}
//                       </span>
//                       <div className="w-12 h-12 rounded-2xl bg-[#5E50B5] text-white flex items-center justify-center shadow-xl">
//                         <Icon className="w-5 h-5" />
//                       </div>
//                     </div>
//                     <div className="absolute bottom-5 left-5 right-5">
//                       <span className="inline-flex rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-bold text-slate-800">
//                         {service.metric}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-6 md:p-7">
//                     <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5] mb-2">
//                       {service.tag}
//                     </span>
//                     <h3 className="text-2xl font-black tracking-tight text-slate-950 mb-3 group-hover:text-[#5E50B5] transition-colors">
//                       {service.title}
//                     </h3>
//                     <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
//                       {service.details}
//                     </p>
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-100">
//                       <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
//                         <ShieldCheck className="w-4 h-4 text-[#5E50B5]" />
//                         <span>{service.guarantee}</span>
//                       </div>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           navigate("/contact-us");
//                         }}
//                         className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5E50B5] hover:bg-[#4C4098] text-white px-5 py-3 text-xs font-black uppercase tracking-[0.14em] transition-all"
//                       >
//                         Book Inspection
//                         <ArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {filteredServices.length === 0 && (
//             <div className="text-center py-20 rounded-[2rem] border border-dashed border-[#5E50B5]/20 bg-white">
//               <p className="text-slate-500 font-bold">
//                 No services found in this category.
//               </p>
//             </div>
//           )}

//           <div className="mt-12 rounded-[2.5rem] bg-[#4C4098] text-white p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl shadow-[#4C4098]/20">
//             <div>
//               <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#DDD7FF] mb-2">
//                 Need Help Choosing A Service?
//               </span>
//               <p className="text-sm text-white/75 font-medium leading-relaxed max-w-2xl">
//                 Call SuperGuard Rotherhithe and tell us what signs you are
//                 seeing. We will help you choose the right next step.
//               </p>
//             </div>
//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#4C4098] px-6 py-4 text-sm font-black hover:scale-[1.03] transition-all"
//             >
//               <Phone className="w-4 h-4" />
//               {LOCAL.phoneNo}
//             </a>
//           </div>
//         </div>
//       </section>

//       <AboutCallbackSection />
//     </main>
//   );
// };

// export default Services;













// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   SlidersHorizontal,
//   Phone,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const LOCAL = {
//     area: "Dulwich",
//     postcode: "SE21",
//     address: "67 Dulwich Village, London SE21 7BJ",
//     phoneNo: "07405 264579",
//     phoneTel: "+447405264579",
//     companyName: "SuperGuard Dulwich",
//   };

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       cat: "Insects",
//       title: `Ants Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       icon: Bug,
//       tag: "Ant Trail & Nest Support",
//       guarantee: "Source Inspection",
//       metric: "Trail Check",
//       details: `Ants can appear around kitchens, patio doors, wall edges and garden paths. Our ${LOCAL.area} team checks where activity is coming from and recommends a practical treatment plan for the property.`,
//     },
//     {
//       cat: "Insects",
//       title: `Bed Bugs Control ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       tag: "Bedroom Pest Treatment",
//       guarantee: "Room Planning",
//       metric: "Bed Frame Check",
//       details: `Bed bugs can hide in mattress seams, headboards, bed frames and soft furnishings. ${LOCAL.companyName} helps inspect affected rooms and plan targeted treatment across ${LOCAL.postcode}.`,
//     },
//     {
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       tag: "Fabric Protection",
//       guarantee: "Larvae Guidance",
//       metric: "Fabric Risk",
//       details: `Moths can damage wool carpets, rugs, stored clothes and soft furnishings. We identify likely activity areas and provide suitable steps to protect fabrics from further damage.`,
//     },
//     {
//       cat: "Insects",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       icon: Bug,
//       tag: "Hidden Larvae Support",
//       guarantee: "Lifecycle Advice",
//       metric: "Storage Check",
//       details: `Carpet beetles often hide near skirting boards, wardrobes and storage spaces. Our team checks likely harbourage points and explains the treatment route clearly.`,
//     },
//     {
//       cat: "Insects",
//       title: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       tag: "Kitchen & Hygiene Pests",
//       guarantee: "Harbourage Check",
//       metric: "Risk Areas",
//       details: `Cockroaches can hide behind appliances, pipework, cracks and food areas. We help homes and businesses manage cockroach activity with careful inspection and targeted support.`,
//     },
//     {
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       icon: Rat,
//       tag: "Rodent Inspection",
//       guarantee: "Entry Point Advice",
//       metric: "Activity Mapping",
//       details: `Rats and mice can damage wiring, contaminate food areas and create stress inside properties. Based near ${LOCAL.address}, our team checks activity signs, access points and suitable control options.`,
//     },
//     {
//       cat: "Insects",
//       title: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       icon: Bug,
//       tag: "Soft Furnishing Pests",
//       guarantee: "Aftercare Advice",
//       metric: "Furnishing Check",
//       details: `Fleas can spread through carpets, sofas, pet resting areas and soft furnishings. We inspect affected areas and guide customers through suitable treatment preparation and aftercare.`,
//     },
//     {
//       cat: "Insects",
//       title: `Wasp Nest Removal ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       tag: "Nest Treatment Support",
//       guarantee: "Safe Planning",
//       metric: "Nest Location",
//       details: `Wasps around roof edges, sheds, gardens or wall voids can become unsafe quickly. Our team helps locate the nest activity and arrange safe treatment around ${LOCAL.area}.`,
//     },
//     {
//       cat: "Insects",
//       title: `Bee Relocation Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       icon: Bug,
//       tag: "Bee Guidance",
//       guarantee: "Careful Advice",
//       metric: "Hive Review",
//       details: `When bees settle close to entrances or living spaces, we provide careful guidance and help you understand the safest next step for your property.`,
//     },
//     {
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Proofing ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       tag: "Loft & Roof Support",
//       guarantee: "Proofing Advice",
//       metric: "Loft Access",
//       details: `Squirrels can damage loft spaces, insulation and roof edges. ${LOCAL.companyName} helps assess activity points and recommend suitable proofing steps.`,
//     },
//     {
//       cat: "Birds & Prevention",
//       title: `Property Proofing & Repairs ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       icon: Home,
//       tag: "Prevention Work",
//       guarantee: "Access Review",
//       metric: "Gap Check",
//       details: `Proofing helps reduce pest return. We check open gaps, weak points, old nesting areas and practical prevention options for homes and business premises.`,
//     },
//     {
//       cat: "Birds & Prevention",
//       title: `Birds Control & Deterrents ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       icon: Bird,
//       tag: "Bird Prevention",
//       guarantee: "Building Advice",
//       metric: "Roof & Ledge",
//       details: `Bird activity can cause mess around roofs, ledges and shop fronts. We help with practical deterrent advice and suitable prevention options for local properties.`,
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const incomingText = location.state.scrollToService.toLowerCase();
//           let keyword = incomingText;

//           if (incomingText.includes("rat") || incomingText.includes("mice")) {
//             keyword = "rat";
//           } else if (
//             incomingText.includes("bed bug") ||
//             incomingText.includes("bed bugs")
//           ) {
//             keyword = "bed bug";
//           } else if (incomingText.includes("wasp")) {
//             keyword = "wasp";
//           } else if (incomingText.includes("moth")) {
//             keyword = "moth";
//           }

//           const element = Array.from(
//             document.querySelectorAll("[data-title]")
//           ).find((el) => {
//             const currentTitle = el.getAttribute("data-title").toLowerCase();
//             return currentTitle.includes(keyword);
//           });

//           if (element) {
//             const offset = 170;
//             const bodyRect = document.body.getBoundingClientRect().top;
//             const elementRect = element.getBoundingClientRect().top;
//             const elementPosition = elementRect - bodyRect;
//             const offsetPosition = elementPosition - offset;

//             window.scrollTo({
//               top: offsetPosition,
//               behavior: "smooth",
//             });
//           }
//         }, 450);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="bg-white min-h-screen font-sans overflow-x-hidden text-slate-800 selection:bg-[#5E50B5] selection:text-white">
//       <ServicesHeroSection />

//       <section className="bg-[#15122D] text-white">
//         <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <span className="flex items-center gap-2 text-sm font-bold text-white/85">
//             <MapPin className="w-4 h-4 text-[#B8AEFF]" />
//             {LOCAL.address}
//           </span>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="flex items-center gap-2 text-sm font-black hover:text-[#B8AEFF]"
//           >
//             <Phone className="w-4 h-4 text-[#B8AEFF]" />
//             {LOCAL.phoneNo}
//           </a>
//         </div>
//       </section>

//       <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-[#5E50B5]/10">
//         <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
//           <div>
//             <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//               <SlidersHorizontal className="w-4 h-4" />
//               Browse Services
//             </span>
//             <p className="text-sm text-slate-500 font-semibold mt-1">
//               Filter pest control services available in {LOCAL.area}.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2 rounded-[1.5rem] bg-[#F7F6FF] border border-[#5E50B5]/10 p-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-5 py-3 rounded-2xl text-xs font-black transition-all ${
//                   selectedCategory === cat
//                     ? "bg-[#5E50B5] text-white shadow-lg shadow-[#5E50B5]/20"
//                     : "text-slate-600 hover:bg-white hover:text-[#5E50B5]"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative py-20 lg:py-28 bg-white">
//         <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//           <div className="max-w-3xl mb-14">
//             <span className="inline-flex items-center gap-2 rounded-full bg-[#F7F6FF] border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
//               <span className="w-2 h-2 rounded-full bg-[#5E50B5]" />
//               SuperGuard Dulwich Directory
//             </span>

//             <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
//               Pest Control Services Across{" "}
//               <span className="text-[#5E50B5]">{LOCAL.area}</span>
//             </h2>

//             <p className="mt-5 text-base text-slate-600 leading-relaxed font-medium">
//               Choose from common pest control services for homes, landlords and
//               businesses across {LOCAL.postcode}.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {filteredServices.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={index}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   className="group cursor-pointer scroll-mt-44 rounded-[2.5rem] overflow-hidden bg-white border border-[#5E50B5]/10 shadow-xl shadow-slate-900/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5E50B5]/10 transition-all duration-300"
//                 >
//                   <div className="relative h-[240px] overflow-hidden bg-slate-200">
//                     <img
//                       src={service.image}
//                       alt={`${LOCAL.companyName} - ${service.title}`}
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-105"
//                       loading="lazy"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/70 via-transparent to-transparent" />

//                     <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
//                       <span className="rounded-full bg-white/95 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#5E50B5]">
//                         {service.cat}
//                       </span>

//                       <div className="w-12 h-12 rounded-2xl bg-[#5E50B5] text-white flex items-center justify-center shadow-xl">
//                         <Icon className="w-5 h-5" />
//                       </div>
//                     </div>

//                     <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800">
//                       {service.metric}
//                     </span>
//                   </div>

//                   <div className="p-6">
//                     <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5] mb-2">
//                       {service.tag}
//                     </span>

//                     <h3 className="text-2xl font-black tracking-tight text-[#15122D] mb-3 group-hover:text-[#5E50B5] transition-colors">
//                       {service.title}
//                     </h3>

//                     <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
//                       {service.details}
//                     </p>

//                     <div className="flex flex-col gap-4 pt-5 border-t border-slate-100">
//                       <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
//                         <ShieldCheck className="w-4 h-4 text-[#5E50B5]" />
//                         <span>{service.guarantee}</span>
//                       </div>

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           navigate("/contact-us");
//                         }}
//                         className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5E50B5] hover:bg-[#4C4098] text-white px-5 py-3 text-xs font-black uppercase tracking-[0.14em] transition-all"
//                       >
//                         Book Inspection
//                         <ArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           <div className="mt-12 rounded-[2.5rem] bg-[#15122D] text-white p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl shadow-[#15122D]/20">
//             <div>
//               <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-2">
//                 Need Help Choosing A Service?
//               </span>
//               <p className="text-sm text-white/75 font-medium leading-relaxed max-w-2xl">
//                 Call {LOCAL.companyName} and tell us what pest signs you are
//                 seeing. We will help you choose the right next step.
//               </p>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#15122D] px-6 py-4 text-sm font-black hover:bg-[#F1EFFF] transition-all"
//             >
//               <Phone className="w-4 h-4" />
//               {LOCAL.phoneNo}
//             </a>
//           </div>
//         </div>
//       </section>

//       <AboutCallbackSection />
//     </main>
//   );
// };

// export default Services;

















import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  ArrowRight,
  Bug,
  Rat,
  Bird,
  Sparkles,
  Home,
  SlidersHorizontal,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import AboutCallbackSection from "../components/AboutCallbackSection";
import ServicesHeroSection from "../components/ServicesHeroSection";
import SuperGuardTestimonials from "../components/PrimeShieldTestimonials";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    address: "67 Dulwich Village, London SE21 7BJ",
    phoneNo: "07405 264579",
    phoneTel: "+447405264579",
    companyName: "SuperGuard Dulwich",
  };

  const categories = [
    "All",
    "Insects",
    "Rodents & Wildlife",
    "Birds & Prevention",
  ];

  const servicesData = [
    {
      cat: "Insects",
      title: `Ants Control ${LOCAL.area}`,
      image: "/images/ants.webp",
      icon: Bug,
      tag: "Ant Trail & Nest Support",
      guarantee: "Source Inspection",
      metric: "Trail Check",
      details: `Ants can appear around kitchens, patio doors, wall edges and garden paths. Our ${LOCAL.area} team checks where activity is coming from and recommends a practical treatment plan for the property.`,
    },
    {
      cat: "Insects",
      title: `Bed Bugs Control ${LOCAL.area}`,
      image: "/images/bedbugs.webp",
      icon: Bug,
      tag: "Bedroom Pest Treatment",
      guarantee: "Room Planning",
      metric: "Bed Frame Check",
      details: `Bed bugs can hide in mattress seams, headboards, bed frames and soft furnishings. ${LOCAL.companyName} helps inspect affected rooms and plan targeted treatment across ${LOCAL.postcode}.`,
    },
    {
      cat: "Insects",
      title: `Carpet Moth Treatment ${LOCAL.area}`,
      image: "/images/moths.webp",
      icon: Sparkles,
      tag: "Fabric Protection",
      guarantee: "Larvae Guidance",
      metric: "Fabric Risk",
      details: `Moths can damage wool carpets, rugs, stored clothes and soft furnishings. We identify likely activity areas and provide suitable steps to protect fabrics from further damage.`,
    },
    {
      cat: "Insects",
      title: `Carpet Beetle Control ${LOCAL.area}`,
      image: "/images/beetle.webp",
      icon: Bug,
      tag: "Hidden Larvae Support",
      guarantee: "Lifecycle Advice",
      metric: "Storage Check",
      details: `Carpet beetles often hide near skirting boards, wardrobes and storage spaces. Our team checks likely harbourage points and explains the treatment route clearly.`,
    },
    {
      cat: "Insects",
      title: `Cockroach Control ${LOCAL.area}`,
      image: "/images/cockroach.webp",
      icon: Bug,
      tag: "Kitchen & Hygiene Pests",
      guarantee: "Harbourage Check",
      metric: "Risk Areas",
      details: `Cockroaches can hide behind appliances, pipework, cracks and food areas. We help homes and businesses manage cockroach activity with careful inspection and targeted support.`,
    },
    {
      cat: "Rodents & Wildlife",
      title: `Rats & Mice Control ${LOCAL.area}`,
      image: "/images/rodents.webp",
      icon: Rat,
      tag: "Rodent Inspection",
      guarantee: "Entry Point Advice",
      metric: "Activity Mapping",
      details: `Rats and mice can damage wiring, contaminate food areas and create stress inside properties. Based near ${LOCAL.address}, our team checks activity signs, access points and suitable control options.`,
    },
    {
      cat: "Insects",
      title: `Flea Treatment ${LOCAL.area}`,
      image: "/images/flea.webp",
      icon: Bug,
      tag: "Soft Furnishing Pests",
      guarantee: "Aftercare Advice",
      metric: "Furnishing Check",
      details: `Fleas can spread through carpets, sofas, pet resting areas and soft furnishings. We inspect affected areas and guide customers through suitable treatment preparation and aftercare.`,
    },
    {
      cat: "Insects",
      title: `Wasp Nest Removal ${LOCAL.area}`,
      image: "/images/wasps.webp",
      icon: ShieldAlert,
      tag: "Nest Treatment Support",
      guarantee: "Safe Planning",
      metric: "Nest Location",
      details: `Wasps around roof edges, sheds, gardens or wall voids can become unsafe quickly. Our team helps locate the nest activity and arrange safe treatment around ${LOCAL.area}.`,
    },
    {
      cat: "Insects",
      title: `Bee Relocation Support ${LOCAL.area}`,
      image: "/images/bee.webp",
      icon: Bug,
      tag: "Bee Guidance",
      guarantee: "Careful Advice",
      metric: "Hive Review",
      details: `When bees settle close to entrances or living spaces, we provide careful guidance and help you understand the safest next step for your property.`,
    },
    {
      cat: "Rodents & Wildlife",
      title: `Squirrel Proofing ${LOCAL.area}`,
      image: "/images/squirrel.webp",
      icon: Rat,
      tag: "Loft & Roof Support",
      guarantee: "Proofing Advice",
      metric: "Loft Access",
      details: `Squirrels can damage loft spaces, insulation and roof edges. ${LOCAL.companyName} helps assess activity points and recommend suitable proofing steps.`,
    },
    {
      cat: "Birds & Prevention",
      title: `Property Proofing & Repairs ${LOCAL.area}`,
      image: "/images/hygene.webp",
      icon: Home,
      tag: "Prevention Work",
      guarantee: "Access Review",
      metric: "Gap Check",
      details: `Proofing helps reduce pest return. We check open gaps, weak points, old nesting areas and practical prevention options for homes and business premises.`,
    },
    {
      cat: "Birds & Prevention",
      title: `Birds Control & Deterrents ${LOCAL.area}`,
      image: "/images/birds.webp",
      icon: Bird,
      tag: "Bird Prevention",
      guarantee: "Building Advice",
      metric: "Roof & Ledge",
      details: `Bird activity can cause mess around roofs, ledges and shop fronts. We help with practical deterrent advice and suitable prevention options for local properties.`,
    },
  ];



    useEffect(() => {
    if (location.state) {
      const targetCategory = location.state.category || "All";
      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const timer = setTimeout(() => {
          const incomingText = location.state.scrollToService.toLowerCase();
          let keyword = incomingText;

          if (incomingText.includes("rat") || incomingText.includes("mice")) {
            keyword = "rat";
          } else if (
            incomingText.includes("bed bug") ||
            incomingText.includes("bed bugs")
          ) {
            keyword = "bed bug";
          } else if (incomingText.includes("wasp")) {
            keyword = "wasp";
          } else if (incomingText.includes("moth")) {
            keyword = "moth";
          }

          const element = Array.from(
            document.querySelectorAll("[data-title]")
          ).find((el) => {
            const currentTitle = el.getAttribute("data-title").toLowerCase();
            return currentTitle.includes(keyword);
          });

          if (element) {
            const offset = 170;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 450);

        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.cat === selectedCategory);

  return (
    <main className="bg-white min-h-screen font-sans overflow-x-hidden text-slate-800 selection:bg-[#5E50B5] selection:text-white">
      <ServicesHeroSection />

      <section className="bg-[#15122D] text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-sm font-bold text-white/85">
            <MapPin className="w-4 h-4 text-[#B8AEFF]" />
            {LOCAL.address}
          </span>

          <a
            href={`tel:${LOCAL.phoneTel}`}
            className="flex items-center gap-2 text-sm font-black hover:text-[#B8AEFF] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B8AEFF]" />
            {LOCAL.phoneNo}
          </a>
        </div>
      </section>

      <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-[#5E50B5]/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
              <SlidersHorizontal className="w-4 h-4" />
              Browse Services
            </span>
            <p className="text-sm text-slate-500 font-semibold mt-1">
              Filter pest control services available in {LOCAL.area}.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 rounded-[1.5rem] bg-[#F7F6FF] border border-[#5E50B5]/10 p-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-3 rounded-2xl text-xs font-black transition-all ${
                  selectedCategory === cat
                    ? "bg-[#5E50B5] text-white shadow-lg shadow-[#5E50B5]/20"
                    : "text-slate-600 hover:bg-white hover:text-[#5E50B5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-80 bg-[#F7F5FF]" />
        <div className="absolute -top-28 -right-24 w-[420px] h-[420px] rounded-full bg-[#5E50B5]/12 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5E50B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5E50B5] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#5E50B5]" />
              SuperGuard Dulwich Directory
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#15122D]">
              Pest Control Services Across{" "}
              <span className="text-[#5E50B5]">{LOCAL.area}</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed font-medium">
              Choose from common pest control services for homes, landlords and
              businesses across {LOCAL.postcode}.
            </p>
          </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={index}
                  data-title={service.title}
                  onClick={() => navigate("/contact-us")}
                  className="scroll-mt-44 cursor-pointer"
                >
                  <div className="relative">
                    {/* IMAGE */}
                    <div className="relative h-[300px] md:h-[340px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200">
                      <img
                        src={service.image}
                        alt={`${LOCAL.companyName} - ${service.title}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/55 via-transparent to-transparent" />

                      <div className="absolute top-5 left-5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-[#5E50B5]">
                          {service.cat}
                        </span>
                        <span className="block text-sm font-black text-[#15122D]">
                          {service.metric}
                        </span>
                      </div>
                    </div>

                    {/* OVERLAP TEXT CARD */}
                    <div className="relative -mt-20 md:-mt-24 mx-auto w-[90%]">
                      <div className="rounded-[2rem] bg-white border border-[#5E50B5]/10 p-5 md:p-6 shadow-2xl shadow-slate-900/10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-13 h-13 rounded-2xl bg-[#5E50B5] flex items-center justify-center shrink-0 shadow-xl shadow-[#5E50B5]/25">
                            <Icon className="w-6 h-6 text-white" />
                          </div>

                          <div>
                            <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5E50B5]">
                              {service.tag}
                            </span>

                            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-[#15122D]">
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed font-medium mb-5">
                          {service.details}
                        </p>

                        <div className="flex items-center gap-3 rounded-2xl bg-[#F7F5FF] border border-[#5E50B5]/10 px-4 py-3 mb-6">
                          <ShieldCheck className="w-4 h-4 text-[#5E50B5] shrink-0" />
                          <span className="text-xs font-black text-[#15122D]">
                            {service.guarantee}
                          </span>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/contact-us");
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5E50B5] hover:bg-[#4C4098] text-white px-5 py-3.5 text-[11px] font-black uppercase tracking-[0.14em] transition-all"
                        >
                          Book Inspection
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20 rounded-[2rem] border border-dashed border-[#5E50B5]/20 bg-white">
              <p className="text-slate-500 font-bold">
                No services found in this category.
              </p>
            </div>
          )}

          <div className="mt-16 rounded-[2.5rem] bg-[#15122D] text-white p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl shadow-[#15122D]/20">
            <div>
              <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#B8AEFF] mb-2">
                Need Help Choosing A Service?
              </span>
              <p className="text-sm text-white/75 font-medium leading-relaxed max-w-2xl">
                Call {LOCAL.companyName} and tell us what pest signs you are
                seeing. We will help you choose the right next step.
              </p>
            </div>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#15122D] px-6 py-4 text-sm font-black hover:bg-[#F1EFFF] transition-all"
            >
              <Phone className="w-4 h-4" />
              {LOCAL.phoneNo}
            </a>
          </div>
        </div>
      </section>

      {/* <AboutCallbackSection /> */}
      <SuperGuardTestimonials/>
    </main>
  );
};

export default Services;