import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Database,
  UserCheck,
  Share2,
  Lock,
  Cookie,
  Eye,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Printer,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  FileText,
  AlertCircle
} from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'privacy-1',
      number: '01',
      title: '1. Information We Collect',
      shortTitle: 'Information We Collect',
      icon: Database,
      badge: 'Data Collection',
    },
    {
      id: 'privacy-2',
      number: '02',
      title: '2. How We Use Your Information',
      shortTitle: 'How We Use Information',
      icon: UserCheck,
      badge: 'Usage Scope',
    },
    {
      id: 'privacy-3',
      number: '03',
      title: '3. Information Sharing',
      shortTitle: 'Information Sharing',
      icon: Share2,
      badge: 'Zero Third-Party Sales',
    },
    {
      id: 'privacy-4',
      number: '04',
      title: '4. Data Security',
      shortTitle: 'Data Security Standards',
      icon: Lock,
      badge: 'Industry Standards',
    },
    {
      id: 'privacy-5',
      number: '05',
      title: '5. Cookies',
      shortTitle: 'Cookies & Tracking',
      icon: Cookie,
      badge: 'Browser Controls',
    },
    {
      id: 'privacy-6',
      number: '06',
      title: '6. Your Rights',
      shortTitle: 'Your Data Rights',
      icon: Eye,
      badge: '30-Day Response',
    },
    {
      id: 'privacy-7',
      number: '07',
      title: '7. Changes to This Policy',
      shortTitle: 'Policy Updates',
      icon: RefreshCw,
      badge: 'Transparency',
    },
    {
      id: 'privacy-8',
      number: '08',
      title: '8. Contact Us',
      shortTitle: 'Contact Information',
      icon: Phone,
      badge: 'Privacy Inquiries',
    },
  ];

  return (
    <div className="bg-[#fcfbf9] text-gray-900 scroll-smooth">

      {/* ========================================================
          HERO SECTION (Light Theme)
      ======================================================== */}
      <section className="relative w-full bg-white overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 flex items-center justify-center text-center">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Bottom Fade Gradient for the Grid */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-12">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#004080] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004080] animate-pulse" />
            OUR COMMITMENT
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2937] tracking-tight mb-5">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
            Your privacy is important to us. This policy explains how we collect, use, protect and manage your personal information when you visit our website.
          </p>

          <p className="mt-2 text-xs text-gray-400 font-medium">Last Updated: September 2025</p>

        </div>
      </section>

      {/* ======================================================
          MAIN SECTION - Sidebar + 8 Structured Cards
      ====================================================== */}
      <section className="py-14 sm:py-18 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Notice Banner */}
          <div className="mb-10 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#003366]/15 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#002244]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0c1b2a]">
                  Official Data Protection & Privacy Notice
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  Committed to protecting client confidentiality in accordance with State of Qatar laws.
                </p>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#0c1b2a] bg-white border border-gray-200 hover:border-[#003366] rounded-lg transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#003366]" />
              Print / Save Policy
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* ----------------------------------------------------
                LEFT SIDEBAR: Table of Contents & Quick Contact
            ---------------------------------------------------- */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">

              {/* Table of Contents Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                  <h3 className="text-sm font-extrabold text-[#0c1b2a] tracking-wider uppercase">
                    Privacy Clauses
                  </h3>
                  <span className="text-[11px] font-bold text-[#003366] bg-[#003366]/10 px-2 py-0.5 rounded-full">
                    8 Sections
                  </span>
                </div>

                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-gray-600 hover:text-[#0c1b2a] hover:bg-amber-50/60 transition-all"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="font-mono text-[11px] font-bold text-[#003366] group-hover:text-[#002244]">
                          {sec.number}
                        </span>
                        <span className="truncate">{sec.shortTitle}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#003366] transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Support & Privacy Officer Box */}
              <div className="bg-[#0c1b2a] text-white rounded-2xl p-6 relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#003366]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <HelpCircle className="w-5 h-5 text-[#003366]" />
                </div>

                <h4 className="text-base font-bold text-white mb-1.5">
                  Privacy Inquiries?
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Have questions about how your personal details are processed or wish to request data updates?
                </p>

                <div className="space-y-2.5">
                  <a
                    href="mailto:info@mbacontractingqa.com"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs text-white truncate"
                  >
                    <Mail className="w-4 h-4 text-[#003366]" />
                    <span className="font-semibold truncate">info@mbacontractingqa.com</span>
                  </a>

                  <a
                    href="tel:+97450722177"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs text-white"
                  >
                    <Phone className="w-4 h-4 text-[#003366]" />
                    <span className="font-semibold">+974 50722177</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#003366] hover:bg-[#002244] text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                >
                  Contact Privacy Team
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </aside>

            {/* ----------------------------------------------------
                RIGHT CONTENT: 8 Polished Cards
            ---------------------------------------------------- */}
            <main className="lg:col-span-8 space-y-6">

              {/* CARD 1: Information We Collect */}
              <div
                id="privacy-1"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Database className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 01</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">1. Information We Collect</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-amber-50 text-[#003366] px-3 py-1 rounded-full border border-amber-200/50">
                    Direct Submissions
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  We collect information you provide directly to us, such as when you fill out our contact form, request a quotation, or contact us by phone or email. This may include your full name, email address, phone number, company or property name, project location, and project details.
                </p>

                {/* Data Categories Grid */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-[#0c1b2a] uppercase tracking-wider mb-3">
                    Collected Data Elements:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      'Full Name',
                      'Email Address',
                      'Phone Number',
                      'Company / Property',
                      'Project Location',
                      'Project Details',
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-medium text-gray-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003366] flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CARD 2: How We Use Your Information */}
              <div
                id="privacy-2"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 02</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">2. How We Use Your Information</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Purpose of Processing
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  We use the information we collect to:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Respond to your inquiries and provide comprehensive project consultations;',
                    'Prepare and send tailored quotations for our construction and contracting services;',
                    'Communicate with you regarding project timelines, engineering updates, and material approvals;',
                    'Continuously enhance our contracting operations and digital website experience;',
                    'Comply strictly with statutory and legal obligations in the State of Qatar.',
                  ].map((purpose, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-5 h-5 rounded-full bg-[#003366]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003366]" />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-normal">{purpose}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD 3: Information Sharing */}
              <div
                id="privacy-3"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 03</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">3. Information Sharing</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                    No Marketing Resale
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  MBA Contracting does not sell, rent, or share your personal information with third parties for marketing purposes. We may share your information with trusted subcontractors or partners only when necessary to fulfill your project requirements, and only under confidentiality agreements.
                </p>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 flex items-center gap-3 text-xs text-[#0c1b2a] font-medium">
                  <Lock className="w-4 h-4 text-[#003366] flex-shrink-0" />
                  <span>
                    All subcontractors and suppliers operate under strict Non-Disclosure Agreements (NDAs).
                  </span>
                </div>
              </div>

              {/* CARD 4: Data Security */}
              <div
                id="privacy-4"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 04</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">4. Data Security</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-amber-50 text-[#003366] px-3 py-1 rounded-full border border-amber-200/50">
                    Protected Systems
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. Our systems are protected with industry-standard security measures. However, no method of transmission over the Internet is 100% secure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[11px] font-bold text-[#003366] uppercase">Transmission</p>
                    <p className="text-xs font-extrabold text-[#0c1b2a] mt-0.5">SSL / TLS Encryption</p>
                    <p className="text-[11px] text-gray-500 mt-1">Encrypted web and form communication</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[11px] font-bold text-[#003366] uppercase">Storage</p>
                    <p className="text-xs font-extrabold text-[#0c1b2a] mt-0.5">Access Controls</p>
                    <p className="text-[11px] text-gray-500 mt-1">Restricted to authorized project staff</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[11px] font-bold text-[#003366] uppercase">Audits</p>
                    <p className="text-xs font-extrabold text-[#0c1b2a] mt-0.5">Routine Reviews</p>
                    <p className="text-[11px] text-gray-500 mt-1">Periodic system maintenance & backups</p>
                  </div>
                </div>
              </div>

              {/* CARD 5: Cookies */}
              <div
                id="privacy-5"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 05</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">5. Cookies</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Browser Settings
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device. You can disable cookies in your browser settings, but some parts of the website may not function properly as a result.
                </p>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>
                    You retain complete authority to manage, block, or clear cookies via your browser preferences at any time.
                  </span>
                </div>
              </div>

              {/* CARD 6: Your Rights */}
              <div
                id="privacy-6"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 06</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">6. Your Rights</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                    User Control
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us directly at <a href="mailto:info@mbacontractingqa.com" className="font-semibold text-[#003366] hover:underline">info@mbacontractingqa.com</a>. We will respond to your request within 30 days.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-[#003366] flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#0c1b2a]">Access Records</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-[#003366] flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#0c1b2a]">Rectify Details</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-[#003366] flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#0c1b2a]">Erasure Request</span>
                  </div>
                </div>
              </div>

              {/* CARD 7: Changes to This Policy */}
              <div
                id="privacy-7"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 07</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">7. Changes to This Policy</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Periodic Review
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this page periodically.
                </p>
              </div>

              {/* CARD 8: Contact Us (Featured Luxury Card) */}
              <div
                id="privacy-8"
                className="bg-gradient-to-br from-[#0c1b2a] via-[#102235] to-[#0c1b2a] text-white rounded-2xl p-6 sm:p-9 border border-gray-800 shadow-lg scroll-mt-24 relative overflow-hidden"
              >
                {/* Background decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#003366]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#003366]/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#003366]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 08</span>
                        <h2 className="text-lg sm:text-xl font-extrabold text-white">8. Contact Us</h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-white/10 text-white px-3 py-1 rounded-full border border-white/10">
                      Direct Privacy Channel
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    If you have any questions about this Privacy Policy, please contact us at: MBA Contracting, Doha, Qatar.
                  </p>

                  {/* Contact Methods Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Office Address</p>
                        <p className="text-xs font-semibold text-white mt-0.5">MBA Contracting, Doha, Qatar</p>
                      </div>
                    </div>

                    <a
                      href="mailto:info@mbacontractingqa.com"
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start gap-3"
                    >
                      <Mail className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Email Inquiries</p>
                        <p className="text-xs font-semibold text-white mt-0.5 break-all">info@mbacontractingqa.com</p>
                      </div>
                    </a>

                    <a
                      href="tel:+97450722177"
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start gap-3"
                    >
                      <Phone className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Direct Phone</p>
                        <p className="text-xs font-semibold text-white mt-0.5">+974 50722177</p>
                      </div>
                    </a>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/10">
                    <p className="text-xs text-gray-400">
                      Our privacy officer ensures all inquiries receive written replies within 30 business days.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold rounded-xl transition-all shadow-md flex-shrink-0"
                    >
                      Open Contact Page
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </main>

          </div>

        </div>
      </section>

    </div>
  );
}
