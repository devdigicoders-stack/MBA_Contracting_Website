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
  AlertCircle
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
        <div className="fixed top-6 right-6 z-50 max-w-sm sm:max-w-md w-full bg-[#0c1b2a] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-[#caa359]/50 flex items-start gap-3.5 transition-all animate-bounce-once">
          <div className="w-10 h-10 rounded-xl bg-[#caa359]/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#caa359]" />
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
          1. HERO SECTION (Dark Blue Theme)
      ======================================================== */}
      <section className="relative w-full bg-[#09121c] overflow-hidden min-h-[420px] lg:min-h-[520px] flex items-center">
        
        {/* Full-width Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contact.png"
            alt="MBA Contracting Luxury Modern Villa Qatar"
            className="w-full h-full object-cover object-right lg:object-[right_center]"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#08121e]/95 md:via-[#08121e]/90 lg:via-[#08121e]/80 to-[#08121e]/90 md:to-transparent w-full" />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070e17]/60 to-transparent" />
        </div>

        {/* Content Container strictly using max-w-7xl to match Navbar Left Alignment */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
            
            {/* Tagline */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#caa359] uppercase">
                GET IN TOUCH
              </span>
              <div className="w-10 h-0.5 bg-[#caa359] mt-1.5 mb-3 rounded-full" />
            </div>

            {/* Headline (Contact Us - "Us" in Gold) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none mb-4">
              Contact <span className="text-[#caa359]">Us</span>
            </h1>

            {/* Description Paragraph */}
            <p className="mt-3 text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
              Have a construction, renovation, finishing or maintenance requirement? Contact MBA Contracting and tell us about your project. Our team is ready to assist you.
            </p>

            {/* 3 Value Badges in Horizontal Row */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6">
              
              {/* Badge 1: Quick Response */}
              <div className="flex items-center gap-2.5 sm:border-r sm:border-white/10 sm:pr-5">
                <div className="w-8 h-8 rounded-lg bg-[#caa359]/20 text-[#caa359] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#caa359]/30">
                  <Phone className="w-4 h-4 text-[#caa359]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-200">
                  Quick Response
                </span>
              </div>

              {/* Badge 2: Free Consultation */}
              <div className="flex items-center gap-2.5 sm:border-r sm:border-white/10 sm:pr-5">
                <div className="w-8 h-8 rounded-lg bg-[#caa359]/20 text-[#caa359] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#caa359]/30">
                  <FileText className="w-4 h-4 text-[#caa359]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-200">
                  Free Consultation
                </span>
              </div>

              {/* Badge 3: Professional Support */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#caa359]/20 text-[#caa359] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#caa359]/30">
                  <Settings className="w-4 h-4 text-[#caa359]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-200">
                  Professional Support
                </span>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ========================================================
          2. SEND US A MESSAGE + CONTACT INFORMATION SECTION
      ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ---------------- LEFT: FORM CARD (8 Cols) ---------------- */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]">
              
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1b2a] tracking-tight">
                  Send Us a <span className="text-[#caa359]">Message</span>
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
                    <CheckCircle2 className="w-5 h-5 text-[#caa359] shrink-0 mt-0.5" />
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
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]/40 focus:border-[#caa359] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]/40 focus:border-[#caa359] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]/40 focus:border-[#caa359] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]/40 focus:border-[#caa359] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]/40 focus:border-[#caa359] text-sm text-gray-900 bg-white transition"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]/40 focus:border-[#caa359] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition"
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
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]/40 focus:border-[#caa359] text-sm text-gray-900 placeholder:text-gray-400 bg-white transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-lg text-white font-bold text-sm bg-gradient-to-r from-[#caa359] via-[#b88f44] to-[#a37930] hover:from-[#b99144] hover:to-[#926925] shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
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

            {/* ---------------- RIGHT: CONTACT INFORMATION (4 Cols) ---------------- */}
            <div className="lg:col-span-4 bg-[#f8f5f0]/80 p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
              
              <div className="mb-6">
                <h3 className="text-xl font-extrabold text-[#0c1b2a]">
                  Contact Information
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-3.5">
                
                {/* 1. Phone Card */}
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition">
                  <div className="w-11 h-11 rounded-full bg-[#b88d44] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">Phone</h4>
                    <p className="text-sm font-extrabold text-[#0c1b2a] mt-0.5">
                      +974 5555 1234
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Sun - Thu, 8AM - 6PM
                    </p>
                  </div>
                </div>

                {/* 2. WhatsApp Card */}
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition">
                  <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    {/* WhatsApp Icon */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.115-.508-1.745-.722-2.859-2.513-2.946-2.628-.088-.116-.708-.941-.708-1.792 0-.85.447-1.268.607-1.442.159-.175.348-.218.463-.218.117 0 .232.001.333.007.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.42-.099.824z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">WhatsApp</h4>
                    <p className="text-sm font-extrabold text-[#0c1b2a] mt-0.5">
                      +974 5555 1234
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Quick Response
                    </p>
                  </div>
                </div>

                {/* 3. Email Card */}
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition">
                  <div className="w-11 h-11 rounded-full bg-[#b88d44] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">Email</h4>
                    <p className="text-sm font-extrabold text-[#0c1b2a] mt-0.5">
                      info@mbacontracting.qa
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                {/* 4. Location Card */}
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition">
                  <div className="w-11 h-11 rounded-full bg-[#b88d44] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">Location</h4>
                    <p className="text-sm font-extrabold text-[#0c1b2a] mt-0.5">
                      Doha, Qatar
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Visit our office
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR OFFICE LOCATION + QATAR GOOGLE MAP
      ======================================================== */}
      <section className="py-12 sm:py-16 pb-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info Column (5 Cols) */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1b2a] tracking-tight">
                Our Office <span className="text-[#caa359]">Location</span>
              </h2>
              <div className="w-12 h-1 bg-[#caa359] mt-2 mb-4 rounded-full" />

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md">
                Visit our office or find us on the map. We are based in Doha, Qatar and serve residential and commercial clients across the region.
              </p>

              <div className="mt-8 space-y-4">
                
                {/* Location Card */}
                <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-start gap-3.5 max-w-sm">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#caa359] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#caa359]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0c1b2a]">Doha, Qatar</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Our Head Office</p>
                  </div>
                </div>

                {/* Office Hours Card */}
                <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-start gap-3.5 max-w-sm">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#caa359] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#caa359]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0c1b2a]">Office Hours</h4>
                    <p className="text-xs font-semibold text-gray-800 mt-1">
                      Sunday - Thursday
                    </p>
                    <p className="text-xs text-gray-500">
                      8:00 AM - 6:00 PM
                    </p>
                    <p className="text-xs font-semibold text-gray-800 mt-2">
                      Friday - Saturday
                    </p>
                    <p className="text-xs text-gray-500">
                      Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Map Column (7 Cols): Embedded Interactive Qatar Google Map */}
            <div className="lg:col-span-7">
              <div className="relative rounded-none overflow-hidden border border-gray-200 h-[360px] sm:h-[400px] lg:h-[420px] bg-gray-100">
                
                {/* Qatar Google Map Embedded */}
                <iframe
                  title="MBA Contracting Qatar Map"
                  src="https://maps.google.com/maps?q=Doha%20Qatar&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                {/* Floating Doha, Qatar Pin Overlay matching screenshot */}
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
                <div className="w-10 h-[2px] bg-[#caa359]"></div>
                <span className="text-[#caa359] font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                  LET'S BUILD TOGETHER
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c1b2a] leading-[1.15] mb-5 tracking-tight">
                Start Your Project <br className="hidden lg:block"/> with MBA <span className="text-[#caa359]">Contracting</span>
              </h2>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                Whether you are planning a new construction, renovation, extension or maintenance work, our team is here to help you with the right solutions.
              </p>

              {/* 3 Icons Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-1 max-w-lg">
                
                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center mb-3 text-[#caa359]">
                    <Users className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="text-[13px] font-bold text-[#0c1b2a] leading-tight">Professional <br/> Team</h4>
                </div>

                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center mb-3 text-[#caa359]">
                    <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="text-[13px] font-bold text-[#0c1b2a] leading-tight">Reliable <br/> Service</h4>
                </div>

                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center mb-3 text-[#caa359]">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-[#caa359]"></div>
                <span className="text-[#caa359] font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c1b2a] leading-tight tracking-tight mb-3">
                Have <span className="text-[#caa359]">Questions?</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Here are some common questions from our clients.
              </p>
            </div>
            
            <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#caa359] hover:bg-[#b88d44] text-white text-sm font-bold rounded-lg transition-colors shadow-md hover:shadow-lg w-fit shrink-0">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid of Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
            
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
                className={`bg-white border rounded-lg p-5 transition cursor-pointer group ${openFaq === idx ? 'border-[#caa359] shadow-md' : 'border-gray-200/80 hover:border-[#caa359]/40 hover:shadow-sm'}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`text-[13px] sm:text-sm font-bold pr-4 transition-colors ${openFaq === idx ? 'text-[#caa359]' : 'text-[#0c1b2a] group-hover:text-[#caa359]'}`}>
                    {faq.q}
                  </h4>
                  {openFaq === idx ? (
                    <Minus className="w-4 h-4 text-[#caa359] flex-shrink-0 transition-colors" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400 group-hover:text-[#caa359] flex-shrink-0 transition-colors" />
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
