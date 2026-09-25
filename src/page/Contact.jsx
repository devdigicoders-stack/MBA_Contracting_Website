import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  FileText,
  Settings,
  CheckCircle2,
  X,
  Users,
  ShieldCheck,
  Award,
  Plus,
  Minus,
  Loader2,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    projectDetails: '',
  });

  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1';

      const payload = {
        name: formData.fullName,
        fullName: formData.fullName,
        companyName: formData.companyName,
        phone: formData.phone,
        phoneNumber: formData.phone,
        email: formData.email,
        service: formData.service,
        serviceRequired: formData.service,
        location: formData.location,
        projectLocation: formData.location,
        subject: formData.service ? `${formData.service} Inquiry` : 'General Inquiry',
        message: formData.projectDetails,
        projectDetails: formData.projectDetails,
      };

      const response = await fetch(`${apiUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit inquiry. Please try again.');
      }

      // Reset form fields
      setFormData({
        fullName: '',
        companyName: '',
        phone: '',
        email: '',
        service: '',
        location: '',
        projectDetails: '',
      });

      // Show toast alert
      setToast({
        title: 'Message Sent Successfully!',
        message: 'Thank you for reaching out. Our engineering team in Doha will get back to you soon.',
      });

      // Auto dismiss toast after 5 seconds
      setTimeout(() => {
        setToast(null);
      }, 5000);

    } catch (err) {
      console.error('Contact submission error:', err);
      setError(err.message || 'Failed to connect to the server. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-amber-100 selection:text-amber-900 relative">
      
      {/* Floating Toast Alert */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 max-w-sm sm:max-w-md w-full bg-[#0c1b2a] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-[#004080]/50 flex items-start gap-3.5 transition-all animate-bounce-once">
          <div className="w-10 h-10 rounded-xl bg-[#004080]/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#004080]" />
          </div>
          <div className="flex-1 pr-1">
            <h4 className="text-sm font-bold text-white">{toast.title}</h4>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              {toast.message}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {/* ========================================================
          1. HERO SECTION (Light Theme with Diagonal Accents)
      ======================================================== */}
      <section className="relative w-full bg-white overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 flex items-center justify-center text-center">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Bottom Fade Gradient for the Grid */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-12">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2937] tracking-tight mb-5">
            Contact Us
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
            Looking for reliable home maintenance services in Qatar or a trusted property maintenance company? Get in touch with MBA Contracting today. Our team is ready to assist with everything from emergency repairs to Annual Maintenance Contracts and renovation services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            
            {/* Call Us Button */}
            <a 
              href="tel:+97450722177"
              className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-3 bg-[#f05c26] hover:bg-[#d94a15] text-white rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
            >
              Call us now
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f05c26] stroke-[3]" />
              </span>
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/97450722177"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
            >
              Or chat with us on
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.115-.508-1.745-.722-2.859-2.513-2.946-2.628-.088-.116-.708-.941-.708-1.792 0-.85.447-1.268.607-1.442.159-.175.348-.218.463-.218.117 0 .232.001.333.007.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.42-.099.824z" />
                </svg>
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. SEND US A MESSAGE + CONTACT INFORMATION SECTION
      ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* ---------------- RIGHT: FORM CARD (6 Cols) ---------------- */}
            <div className="lg:col-span-6 order-1 lg:order-2 bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col justify-center">
              
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1b2a] tracking-tight">
                  Send Us a <span className="text-[#004080]">Message</span>
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-500">
                  Fill out the form below and our team will get back to you soon.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Unable to send message</p>
                    <p className="mt-0.5 text-red-600">{error}</p>
                  </div>
                </div>
              )}

              {toast && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50/90 border border-amber-300/80 text-[#0c1b2a] text-xs sm:text-sm flex items-start justify-between gap-3 animate-fade-in shadow-xs">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#004080] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">{toast.title}</p>
                      <p className="mt-0.5 text-slate-600 leading-relaxed">{toast.message}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setToast(null)}
                    className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Full Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]/40 focus:border-[#004080] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5">
                      Company / Property Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Enter company or property name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]/40 focus:border-[#004080] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]/40 focus:border-[#004080] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]/40 focus:border-[#004080] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
                    />
                  </div>
                </div>

                {/* Row 3: Service Required & Project Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]/40 focus:border-[#004080] text-sm text-gray-900 bg-white transition"
                    >
                      <option value="">Select a service</option>
                      <option value="General Contracting">General Contracting</option>
                      <option value="Villa Construction">Villa Construction</option>
                      <option value="Extension Construction">Extension Construction</option>
                      <option value="Majlis Construction">Majlis Construction</option>
                      <option value="Building Maintenance">Building Maintenance</option>
                      <option value="General Finishing Works">General Finishing Works</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Enter project location"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]/40 focus:border-[#004080] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
                    />
                  </div>
                </div>

                {/* Row 4: Project Details */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">
                    Project Details *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell us about your project (size, type of work, timeline, etc.)"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]/40 focus:border-[#004080] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-lg text-white font-bold text-sm bg-gradient-to-r from-[#004080] via-[#002952] to-[#001a33] hover:from-[#002952] hover:to-[#001326] shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>

            {/* ---------------- LEFT: QATAR MAP (6 Cols) ---------------- */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-gray-200 min-h-[400px] lg:min-h-full bg-gray-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]">
              <iframe
                title="MBA Contracting Qatar Map"
                src="https://maps.google.com/maps?q=Doha%20Qatar&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>

              {/* Floating Doha, Qatar Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-gray-200 text-xs font-extrabold text-[#0c1b2a]">
                  <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span>Doha, Qatar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          NEW: CTA / START YOUR PROJECT SECTION
      ======================================================== */}
      <section className="bg-white border-b border-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative overflow-hidden shadow-xl h-[350px] sm:h-[450px] lg:h-[500px]">
              <img 
                src="/image copy.png" 
                alt="MBA Contracting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 lg:pl-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-[#004080]"></div>
                <span className="text-[#004080] font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                  LET'S BUILD TOGETHER
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c1b2a] leading-[1.15] mb-5 tracking-tight">
                Start Your Project <br className="hidden lg:block"/> with MBA <span className="text-[#004080]">Contracting</span>
              </h2>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                Whether you are planning a new construction, renovation, extension or maintenance work, our team is here to help you with the right solutions.
              </p>

              {/* 3 Icons Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-1 max-w-lg">
                
                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center mb-3 text-[#004080]">
                    <Users className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="text-[13px] font-bold text-[#0c1b2a] leading-tight">Professional <br/> Team</h4>
                </div>

                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center mb-3 text-[#004080]">
                    <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="text-[13px] font-bold text-[#0c1b2a] leading-tight">Reliable <br/> Service</h4>
                </div>

                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center mb-3 text-[#004080]">
                    <Award className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="text-[13px] font-bold text-[#0c1b2a] leading-tight">Quality <br/> Workmanship</h4>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          FAQ SECTION
      ======================================================== */}
      <section className="bg-[#fcfaf7] py-16 sm:py-20 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 sm:w-10 h-[2px] bg-[#004080]"></div>
              <span className="text-[#004080] font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <div className="w-8 sm:w-10 h-[2px] bg-[#004080]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c1b2a] leading-tight tracking-tight mb-4">
              Have <span className="text-[#004080]">Questions?</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mb-8">
              Here are some common questions from our clients regarding our construction and maintenance services in Qatar.
            </p>
          </div>

          {/* Grid of Questions */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 items-start max-w-3xl mx-auto">
            
            {[
              { q: "Do you provide free consultation?", a: "Yes, we offer a free initial consultation to discuss your project requirements, timeline, and budget without any obligation." },
              { q: "Do you handle both residential and commercial projects?", a: "Absolutely! We have dedicated teams for both luxury residential villas and commercial spaces including offices, retail, and hospitality." },
              { q: "What areas do you serve?", a: "We serve all major areas in Qatar, focusing primarily on Doha, West Bay, The Pearl, Lusail City, and Al Rayyan." },
              { q: "Can you provide finishing works only?", a: "Yes, we offer specialized general finishing works including premium flooring, bespoke carpentry, gypsum, painting, and MEP installations." },
              { q: "How long does a project usually take?", a: "Project timelines vary based on scope. A typical extension might take 3-6 months, while a full luxury villa construction could take 12-18 months." },
              { q: "How can I get a quotation?", a: "You can use the contact form above, call our support line, or send an email with your project details to get a comprehensive quotation." },
            ].map((faq, idx) => (
              <div 
                key={idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className={`bg-white border rounded-lg p-5 transition cursor-pointer group ${openFaq === idx ? 'border-[#004080] shadow-md' : 'border-gray-200/80 hover:border-[#004080]/40 hover:shadow-sm'}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`text-[13px] sm:text-sm font-bold pr-4 transition-colors ${openFaq === idx ? 'text-[#004080]' : 'text-[#0c1b2a] group-hover:text-[#004080]'}`}>
                    {faq.q}
                  </h4>
                  {openFaq === idx ? (
                    <Minus className="w-4 h-4 text-[#004080] flex-shrink-0 transition-colors" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400 group-hover:text-[#004080] flex-shrink-0 transition-colors" />
                  )}
                </div>
                {openFaq === idx && (
                  <div className="mt-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3.5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}
