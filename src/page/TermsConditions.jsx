import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Scale,
  ShieldCheck,
  CheckCircle2,
  Building2,
  CreditCard,
  Clock,
  UserCheck,
  Landmark,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Printer,
  ChevronRight,
  Hammer,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export default function TermsConditions() {
  const sections = [
    {
      id: 'term-1',
      number: '01',
      title: '1. Acceptance of Terms',
      icon: CheckCircle2,
      shortTitle: 'Acceptance of Terms',
      content:
        'By accessing our website or using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.',
      badge: 'Agreement',
    },
    {
      id: 'term-2',
      number: '02',
      title: '2. Services Provided',
      icon: Building2,
      shortTitle: 'Services Provided',
      content:
        'MBA Contracting provides construction and contracting services in the State of Qatar, including but not limited to: general contracting, villa construction, extension construction, majlis construction, building maintenance, and general finishing works. All services are subject to availability and formal agreement.',
      services: [
        'General Contracting',
        'Villa Construction',
        'Extension Construction',
        'Majlis Construction',
        'Building Maintenance',
        'General Finishing Works',
      ],
      badge: 'Qatar Services',
    },
    {
      id: 'term-3',
      number: '03',
      title: '3. Quotations and Contracts',
      icon: FileText,
      shortTitle: 'Quotations & Contracts',
      content:
        'All quotations provided by MBA Contracting are valid for 30 days from the date of issue unless otherwise stated. A formal contract must be signed before any project commences. The terms of each project will be governed by the individual contract signed by both parties.',
      highlight: 'Quotations are strictly valid for 30 calendar days from the date of issuance.',
      badge: 'Valid 30 Days',
    },
    {
      id: 'term-4',
      number: '04',
      title: '4. Payment Terms',
      icon: CreditCard,
      shortTitle: 'Payment Terms',
      content:
        'Payment schedules will be defined in the project contract. Generally, a down payment is required to commence work, with milestone-based payments throughout the project. All prices are in Qatari Riyal (QAR) unless otherwise specified. Late payments may incur additional charges.',
      highlights: [
        { label: 'Down Payment', desc: 'Required prior to project mobilization' },
        { label: 'Milestones', desc: 'Payments linked to verified construction stages' },
        { label: 'Currency', desc: 'All billing in Qatari Riyal (QAR)' },
      ],
      badge: 'Billing & Currency',
    },
    {
      id: 'term-5',
      number: '05',
      title: '5. Project Timelines',
      icon: Clock,
      shortTitle: 'Project Timelines',
      content:
        'Estimated project timelines are provided in good faith but may be subject to change due to weather conditions, material availability, client-requested changes, or other unforeseen circumstances. MBA Contracting will communicate any delays promptly.',
      badge: 'Schedules',
    },
    {
      id: 'term-6',
      number: '06',
      title: '6. Client Responsibilities',
      icon: UserCheck,
      shortTitle: 'Client Responsibilities',
      content:
        'The smooth and timely execution of contracting projects requires active collaboration. The client is responsible for:',
      checklist: [
        'Providing accurate and complete project information and architectural preferences',
        'Obtaining necessary permits and approvals from relevant Qatar authorities (unless explicitly agreed otherwise)',
        'Ensuring timely and uninterrupted site access for our teams and equipment',
        'Timely decision-making on design choices, material specifications, and approvals',
      ],
      badge: 'Mutual Obligations',
    },
    {
      id: 'term-7',
      number: '07',
      title: '7. Warranty',
      icon: ShieldCheck,
      shortTitle: 'Workmanship Warranty',
      content:
        'MBA Contracting provides a workmanship warranty on all completed projects as specified in the individual project contract. The warranty does not cover damage caused by misuse, natural disasters, unauthorized modifications, or normal wear and tear.',
      notice: 'Warranty scope, duration, and conditions are explicitly detailed in each client contract.',
      badge: 'Quality Guarantee',
    },
    {
      id: 'term-8',
      number: '08',
      title: '8. Limitation of Liability',
      icon: Scale,
      shortTitle: 'Limitation of Liability',
      content:
        'To the maximum extent permitted by Qatari law, MBA Contracting shall not be liable for any indirect, incidental, or consequential damages arising from our services. Our total liability shall not exceed the total value of the project contract.',
      badge: 'Legal Protection',
    },
    {
      id: 'term-9',
      number: '09',
      title: '9. Governing Law',
      icon: Landmark,
      shortTitle: 'Governing Law',
      content:
        'These Terms and Conditions are governed by and construed in accordance with the laws of the State of Qatar. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Qatar.',
      countryNote: 'Jurisdiction: Courts of the State of Qatar (Doha)',
      badge: 'State of Qatar',
    },
    {
      id: 'term-10',
      number: '10',
      title: '10. Contact Us',
      icon: Phone,
      shortTitle: 'Contact Information',
      content:
        'If you have any questions about these Terms and Conditions, please contact us at: MBA Contracting, Alkhayarin holding building, first floor, office no 102 Doha - qatar. Email: info@mbacontractingqa.com | Phone: +974 50722177',
      badge: 'Get in Touch',
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
            LEGAL AGREEMENT
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2937] tracking-tight mb-5">
            Terms & Conditions
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
            Please read these terms and conditions carefully before engaging with MBA Contracting's services. By contacting us or using our services, you agree to these terms.
          </p>

          <p className="mt-2 text-xs text-gray-400 font-medium">Last Updated: September 2025</p>

        </div>
      </section>

      {/* ======================================================
          MAIN SECTION - Sidebar + 10 Structured Cards
      ====================================================== */}
      <section className="py-14 sm:py-18 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Notice Banner */}
          <div className="mb-10 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#003366]/15 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#002244]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0c1b2a]">
                  Official Contracting Guidelines
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  Governing commercial, residential, and maintenance contracting services across Qatar.
                </p>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#0c1b2a] bg-white border border-gray-200 hover:border-[#003366] rounded-lg transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#003366]" />
              Print / Save Terms
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
                    Table of Contents
                  </h3>
                  <span className="text-[11px] font-bold text-[#003366] bg-[#003366]/10 px-2 py-0.5 rounded-full">
                    10 Clauses
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

              {/* Help & Contact Support Box */}
              <div className="bg-[#0c1b2a] text-white rounded-2xl p-6 relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#003366]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <HelpCircle className="w-5 h-5 text-[#003366]" />
                </div>

                <h4 className="text-base font-bold text-white mb-1.5">
                  Have Any Questions?
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Need clarification about contract milestones, warranties, or Qatar building regulations?
                </p>

                <div className="space-y-2.5">
                  <a
                    href="tel:+97450722177"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs text-white"
                  >
                    <Phone className="w-4 h-4 text-[#003366]" />
                    <span className="font-semibold">+974 50722177</span>
                  </a>

                  <a
                    href="mailto:info@mbacontractingqa.com"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs text-white truncate"
                  >
                    <Mail className="w-4 h-4 text-[#003366]" />
                    <span className="font-semibold truncate">info@mbacontractingqa.com</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#003366] hover:bg-[#002244] text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                >
                  Contact Legal & Sales Team
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </aside>

            {/* ----------------------------------------------------
                RIGHT CONTENT: 10 Polished Cards
            ---------------------------------------------------- */}
            <main className="lg:col-span-8 space-y-6">

              {/* CARD 1: Acceptance of Terms */}
              <div
                id="term-1"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 01</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">1. Acceptance of Terms</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Binding Agreement
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  By accessing our website or using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </div>

              {/* CARD 2: Services Provided */}
              <div
                id="term-2"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 02</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">2. Services Provided</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-amber-50 text-[#003366] px-3 py-1 rounded-full border border-amber-200/50">
                    Scope of Work
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  MBA Contracting provides construction and contracting services in the State of Qatar, including but not limited to: general contracting, villa construction, extension construction, majlis construction, building maintenance, and general finishing works. All services are subject to availability and formal agreement.
                </p>

                {/* Service Pills Grid */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-[#0c1b2a] uppercase tracking-wider mb-3">
                    Covered Contracting Domains:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      'General Contracting',
                      'Villa Construction',
                      'Extension Construction',
                      'Majlis Construction',
                      'Building Maintenance',
                      'General Finishing Works',
                    ].map((srv, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-medium text-gray-700"
                      >
                        <Hammer className="w-3.5 h-3.5 text-[#003366] flex-shrink-0" />
                        <span className="truncate">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CARD 3: Quotations and Contracts */}
              <div
                id="term-3"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 03</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">3. Quotations and Contracts</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    30-Day Validity
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  All quotations provided by MBA Contracting are valid for 30 days from the date of issue unless otherwise stated. A formal contract must be signed before any project commences. The terms of each project will be governed by the individual contract signed by both parties.
                </p>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 flex items-center gap-3 text-xs text-[#0c1b2a] font-medium">
                  <Clock className="w-4 h-4 text-[#003366] flex-shrink-0" />
                  <span>
                    Formal written agreements protect both parties with defined milestones, materials, and schedules.
                  </span>
                </div>
              </div>

              {/* CARD 4: Payment Terms */}
              <div
                id="term-4"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 04</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">4. Payment Terms</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-amber-50 text-[#003366] px-3 py-1 rounded-full border border-amber-200/50">
                    Qatari Riyal (QAR)
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  Payment schedules will be defined in the project contract. Generally, a down payment is required to commence work, with milestone-based payments throughout the project. All prices are in Qatari Riyal (QAR) unless otherwise specified. Late payments may incur additional charges.
                </p>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[11px] font-bold text-[#003366] uppercase">Initial Phase</p>
                    <p className="text-xs font-extrabold text-[#0c1b2a] mt-0.5">Down Payment</p>
                    <p className="text-[11px] text-gray-500 mt-1">To initiate mobilization and procurement</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[11px] font-bold text-[#003366] uppercase">Progress Tracking</p>
                    <p className="text-xs font-extrabold text-[#0c1b2a] mt-0.5">Milestone Payments</p>
                    <p className="text-[11px] text-gray-500 mt-1">Tied to inspected & approved completion stages</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[11px] font-bold text-[#003366] uppercase">Official Currency</p>
                    <p className="text-xs font-extrabold text-[#0c1b2a] mt-0.5">Qatari Riyal (QAR)</p>
                    <p className="text-[11px] text-gray-500 mt-1">Direct local invoicing and banking terms</p>
                  </div>
                </div>
              </div>

              {/* CARD 5: Project Timelines */}
              <div
                id="term-5"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 05</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">5. Project Timelines</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Schedules
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Estimated project timelines are provided in good faith but may be subject to change due to weather conditions, material availability, client-requested changes, or other unforeseen circumstances. MBA Contracting will communicate any delays promptly.
                </p>
              </div>

              {/* CARD 6: Client Responsibilities */}
              <div
                id="term-6"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 06</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">6. Client Responsibilities</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-amber-50 text-[#003366] px-3 py-1 rounded-full border border-amber-200/50">
                    Checklist
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  The client is responsible for:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Providing accurate and complete project information, site dimensions, and specifications;',
                    'Obtaining necessary permits and approvals from relevant Qatar authorities (unless agreed otherwise in writing);',
                    'Ensuring safe and timely site access for our engineers, construction teams, and logistics vehicles;',
                    'Timely decision-making on design choices, finishes, and material selections to avoid project halts.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-5 h-5 rounded-full bg-[#003366]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003366]" />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-normal">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD 7: Warranty */}
              <div
                id="term-7"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 07</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">7. Warranty</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                    Quality Guaranteed
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  MBA Contracting provides a workmanship warranty on all completed projects as specified in the individual project contract. The warranty does not cover damage caused by misuse, natural disasters, unauthorized modifications, or normal wear and tear.
                </p>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Warranty certificates and maintenance guidelines are handed over upon formal project commissioning.
                  </span>
                </div>
              </div>

              {/* CARD 8: Limitation of Liability */}
              <div
                id="term-8"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 08</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">8. Limitation of Liability</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Legal Cap
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To the maximum extent permitted by Qatari law, MBA Contracting shall not be liable for any indirect, incidental, or consequential damages arising from our services. Our total liability shall not exceed the total value of the project contract.
                </p>
              </div>

              {/* CARD 9: Governing Law */}
              <div
                id="term-9"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-amber-200/80 transition-all scroll-mt-24"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                      <Landmark className="w-5 h-5 text-[#003366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 09</span>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0c1b2a]">9. Governing Law</h2>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-bold bg-amber-50 text-[#003366] px-3 py-1 rounded-full border border-amber-200/50">
                    State of Qatar
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  These Terms and Conditions are governed by and construed in accordance with the laws of the State of Qatar. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Qatar.
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#0c1b2a] bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-[#003366]" />
                  <span>Exclusive Legal Jurisdiction: Doha, State of Qatar</span>
                </div>
              </div>

              {/* CARD 10: Contact Us (Featured Luxury Card) */}
              <div
                id="term-10"
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
                        <span className="text-[11px] font-mono font-bold text-[#003366] uppercase">Clause 10</span>
                        <h2 className="text-lg sm:text-xl font-extrabold text-white">10. Contact Us</h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-white/10 text-white px-3 py-1 rounded-full border border-white/10">
                      Reach Our Team
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    If you have any questions about these Terms and Conditions, please contact us at: MBA Contracting, Alkhayarin holding building, first floor, office no 102 Doha - qatar.
                  </p>

                  {/* Contact Methods Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Office Address</p>
                        <p className="text-xs font-semibold text-white mt-0.5">MBA Contracting, Alkhayarin holding building, first floor, office no 102 Doha - qatar</p>
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
                      Our contracting advisors are available Sunday through Thursday, 8:00 AM - 6:00 PM.
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
