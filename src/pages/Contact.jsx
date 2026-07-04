



import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Bug,
  Mail,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const LOCAL = {
    area: "Dulwich",
    postcode: "SE21",
    address: "67 Dulwich Village, London SE21 7BJ",
    phone: "07405 264579",
    phoneTel: "+447405264579",
    businessName: "SuperGuard Dulwich",
  };

  const services = [
    "Rats & Mice Control",
    "Bed Bug Treatments",
    "carpet moth treatment",
    "carpet beetle treatment",
    "bumble bee control service",
    "Cockroach Control",
    "Wasp Nest Control",
    "Flea Treatment",
    "Ants Control",
    "Bird Proofing",
    "General Pest Inspection",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Sending your enquiry...");

    try {
      await axios.post("https://superguard-dulwich-backend.vercel.app/api/contact", {
        ...formData,
        area: LOCAL.area,
        business: LOCAL.businessName,
        address: LOCAL.address,
        phoneNumber: LOCAL.phone,
      });

      toast.dismiss();
      toast.success("Request received. SuperGuard Dulwich will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch {
      toast.dismiss();
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative bg-white mt-16 min-h-screen overflow-hidden text-slate-900">
      <Toaster position="top-right" />

      <style>{`
        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-up {
          animation: contactFadeUp .8s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: opacity, transform;
        }

        .contact-delay-1 { animation-delay: 120ms; }
        .contact-delay-2 { animation-delay: 220ms; }

        @media (prefers-reduced-motion: reduce) {
          .contact-up { animation: none; }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[44%] bg-[#F7F5FF]" />
        <div className="absolute -top-24 -right-24 w-[430px] h-[430px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
        <div className="absolute bottom-40 -left-24 w-[360px] h-[360px] rounded-full bg-[#15122D]/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-24 pb-20">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-14 contact-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5F52B5]/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#5F52B5] shadow-sm">
            <Bug className="w-4 h-4" />
            Contact {LOCAL.businessName}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.98] text-[#15122D]">
            Get Pest Control Help In{" "}
            <span className="text-[#5F52B5]">{LOCAL.area}</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Tell us what pest signs you are seeing. Our Dulwich team will review
            your enquiry and help you choose the right next step for your home,
            rental property or business.
          </p>
        </div>

        {/* MAIN CONTACT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT PANEL */}
          <div className="lg:col-span-4 contact-up contact-delay-1">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-[2.5rem] bg-[#5F52B5] text-white p-7 md:p-8 shadow-2xl shadow-[#5F52B5]/20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:24px_24px]" />
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/20 blur-2xl" />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/75 mb-6">
                    <ShieldCheck className="w-4 h-4" />
                    Local Pest Support
                  </span>

                  <h2 className="text-3xl font-black leading-tight mb-5">
                    Speak With Our {LOCAL.area} Team
                  </h2>

                  <p className="text-sm text-white/78 leading-relaxed font-medium mb-7">
                    From rodents and bed bugs to wasps, cockroaches, ants and
                    fleas, SuperGuard Dulwich supports local homes and
                    businesses across {LOCAL.postcode}.
                  </p>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white text-[#15122D] px-5 py-4 font-black hover:bg-[#F1EFFF] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    {LOCAL.phone}
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white border border-[#5F52B5]/10 p-6 shadow-xl shadow-slate-900/5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-1">
                      Local Address
                    </span>
                    <p className="text-sm font-bold text-slate-700 leading-relaxed">
                      {LOCAL.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white border border-[#5F52B5]/10 p-6 shadow-xl shadow-slate-900/5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F5FF] text-[#5F52B5] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-1">
                      Response
                    </span>
                    <p className="text-sm font-bold text-slate-700 leading-relaxed">
                      Local pest control enquiries handled as quickly as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#15122D] text-white p-6 shadow-xl shadow-[#15122D]/15">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#B8AEFF] shrink-0 mt-1" />
                  <p className="text-sm text-white/75 font-medium leading-relaxed">
                    We review your pest issue, property details and preferred
                    service before contacting you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-8 contact-up contact-delay-2">
            <div className="rounded-[2.5rem] bg-white border border-[#5F52B5]/10 p-6 md:p-8 lg:p-10 shadow-2xl shadow-slate-900/5">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F7F5FF] border border-[#5F52B5]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#5F52B5] mb-5">
                  <MessageSquare className="w-4 h-4" />
                  Send Enquiry
                </span>

                <h2 className="text-3xl md:text-5xl font-black text-[#15122D] leading-tight">
                  Request Pest Control Support
                </h2>

                <p className="text-sm text-slate-600 mt-3 font-medium">
                  Complete the form below and our Dulwich team will contact you
                  about your pest control enquiry.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    className="bg-[#F7F5FF] border border-[#5F52B5]/10 px-5 py-4 rounded-2xl text-sm font-semibold outline-none focus:bg-white focus:border-[#5F52B5] transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <input
                    required
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    className="bg-[#F7F5FF] border border-[#5F52B5]/10 px-5 py-4 rounded-2xl text-sm font-semibold outline-none focus:bg-white focus:border-[#5F52B5] transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    className="bg-[#F7F5FF] border border-[#5F52B5]/10 px-5 py-4 rounded-2xl text-sm font-semibold outline-none focus:bg-white focus:border-[#5F52B5] transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />

                  <input
                    required
                    placeholder={`Postcode e.g. ${LOCAL.postcode}`}
                    value={formData.postcode}
                    className="bg-[#F7F5FF] border border-[#5F52B5]/10 px-5 py-4 rounded-2xl text-sm font-semibold outline-none focus:bg-white focus:border-[#5F52B5] transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, postcode: e.target.value })
                    }
                  />
                </div>

                <select
                  required
                  value={formData.service}
                  className="w-full bg-[#F7F5FF] border border-[#5F52B5]/10 px-5 py-4 rounded-2xl text-sm font-semibold outline-none focus:bg-white focus:border-[#5F52B5] transition-all"
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="">Select Service Required</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                <textarea
                  required
                  rows={5}
                  placeholder="Describe the pest issue..."
                  value={formData.message}
                  className="w-full bg-[#F7F5FF] border border-[#5F52B5]/10 px-5 py-4 rounded-2xl text-sm font-semibold outline-none focus:bg-white focus:border-[#5F52B5] transition-all resize-none"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <button
                  disabled={loading}
                  className="w-full bg-[#5F52B5] hover:bg-[#4B4095] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                >
                  {loading ? (
                    "Sending Request..."
                  ) : (
                    <>
                      Submit Enquiry <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-10 rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-2xl shadow-slate-900/10 bg-white contact-up contact-delay-2">
          <iframe
            title="Map"
            src="https://maps.google.com/maps?q=Dulwich%20Village%2C%20London&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}