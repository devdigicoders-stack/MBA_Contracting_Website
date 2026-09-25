import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Building2,
  Home as HomeIcon,
  Paintbrush,
  Wrench,
  MapPin,
  ShieldCheck,
  Users,
  HardHat,
  Gem,
  Handshake,
  Settings,
  Layers,
  Sparkles,
  CheckCircle2,
  Calendar,
  Tag,
  Loader2,
  Trophy,
  ClipboardList,
  HeartHandshake,
  Timer,
  Maximize
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaSection from '../compontent/CtaSection';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, duration, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // easeOutExpo function for smooth slowing down at the end
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const expertiseList = [
    { 
      title: 'Tile Installation Works', 
      icon: Layers, 
      image: '/image copy 6.png',
      desc: 'Expert tiling solutions for functional and beautiful spaces.'
    },
    { 
      title: 'Painting Works', 
      icon: Paintbrush, 
      image: '/image copy 5.png',
      desc: 'Professional painting services for perfect interiors and exteriors.'
    },
    { 
      title: 'Gypsum Board Works', 
      icon: Maximize, 
      image: '/image copy 10.png',
      desc: 'Custom gypsum installations for ceilings and partitions.'
    }
  ];

  const projectCategories = [
    { title: 'Villa Construction', img: '/projects/villa_construction.jpg' },
    { title: 'Villa Extensions', img: '/projects/villa_extensions.jpg' },
    { title: 'Majlis Construction', img: '/projects/majlis_construction.jpg' },
    { title: 'Interior Finishing', img: '/projects/interior_finishing.jpg' },
    { title: 'Building Maintenance', img: '/projects/building_maintenance.jpg' },
    { title: 'Renovation Works', img: '/projects/renovation_works.jpg' },
    { title: 'Painting Projects', img: '/projects/painting_projects.jpg' },
    { title: 'Flooring & Tiling', img: '/projects/flooring_tiling.jpg' },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1';
        console.log('Fetching blogs from:', `${apiUrl}/blogs?limit=3`);
        const response = await fetch(`${apiUrl}/blogs?limit=3`);
        
        if (!response.ok) {
          console.error('Response not ok:', response.status, response.statusText);
        }
        
        const json = await response.json();
        console.log('Blog API response JSON:', json);
        
        const blogList = json.data?.blogs || (Array.isArray(json.data) ? json.data : []) || [];
        console.log('Extracted blogList:', blogList);
        
        setBlogs(blogList.slice(0, 3));
      } catch (err) {
        console.error('Failed to fetch blogs for home:', err);
      } finally {
        setLoadingBlogs(false);
      }
    };
    fetchBlogs();
  }, []);

  const resolveImage = (img) => {
    if (!img) return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop';
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1';
    const base = apiUrl.replace(/\/api\/v1\/?$/, '');
    return `${base}${img.startsWith('/') ? '' : '/'}${img}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const heroHighlights = [
    {
      title: 'Construction',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#caa359]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 10h1" />
          <path d="M14 10h1" />
          <path d="M9 14h1" />
          <path d="M14 14h1" />
          <path d="M9 18h1" />
          <path d="M14 18h1" />
        </svg>
      ),
    },
    {
      title: 'Extensions',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#caa359]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: 'Finishing',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#caa359]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m14.7 6.3 5 5-9.4 9.4H5.3v-5z" />
          <path d="m9.7 11.3 3 3" />
          <path d="m18 4 2 2" />
        </svg>
      ),
    },
    {
      title: 'Maintenance',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#caa359]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  const coreServices = [
    {
      title: 'General Contracting',
      desc: 'Civil works, renovation and project execution.',
      img: '/service_general_contracting.jpg',
      icon: HardHat,
      link: '/services',
    },
    {
      title: 'Villa Construction',
      desc: 'Complete construction solutions for new villas.',
      img: '/service_villa_construction.jpg',
      icon: HomeIcon,
      link: '/services',
    },
    {
      title: 'Extension Construction',
      desc: 'Add more space to your property.',
      img: '/service_extension.jpg',
      icon: Building2,
      link: '/services',
    },
    {
      title: 'Majlis Construction',
      desc: 'Functional and elegant Majlis construction.',
      img: '/service_majlis.jpg',
      icon: Sparkles,
      link: '/services',
    },
    {
      title: 'Building Maintenance',
      desc: 'Keep your property in top condition.',
      img: '/service_maintenance.jpg',
      icon: Wrench,
      link: '/services',
    },
    {
      title: 'General Finishing Works',
      desc: 'Interior and exterior finishing solutions.',
      img: '/service_finishing.jpg',
      icon: Paintbrush,
      link: '/finishing-works',
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* ========================================================
          1. HERO SECTION (Identical to Screenshot)
      ======================================================== */}
      <section className="relative w-full min-h-[560px] lg:h-[calc(100vh-80px)] lg:max-h-[640px] flex flex-col justify-between overflow-hidden bg-[#09121c]">
        
        {/* Background Image with Dark Vignette/Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image.png"
            alt="MBA Contracting Doha Luxury Villa"
            className="w-full h-full object-cover object-right lg:object-center"
          />
          {/* Left Dark Gradient for sharp contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#08121e]/95 sm:via-[#08121e]/90 lg:via-[#08121e]/80 to-transparent lg:w-[65%]" />
          {/* Subtle dark tint */}
          <div className="absolute inset-0 bg-black/20 lg:bg-black/10" />
          {/* Bottom edge shadow */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070e17]/90 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 w-full h-full flex flex-col justify-between flex-1">
          
          {/* Hero Middle Content - Vertically Centered */}
          <div className="my-auto max-w-xl lg:max-w-2xl py-4 sm:py-6">
            
            {/* Top Tagline */}
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest text-gray-300 uppercase mb-2.5 sm:mb-3">
              <span>CONSTRUCTION</span>
              <span className="text-[#caa359]">•</span>
              <span>CONTRACTING</span>
              <span className="text-[#caa359]">•</span>
              <span>FINISHING</span>
              <span className="text-[#caa359]">•</span>
              <span>BUILDING MAINTENANCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-[1.14]">
              Building Quality.<br />
              <span className="text-[#caa359]">Delivering Excellence.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg font-semibold text-gray-100 leading-snug">
              Professional Contracting, Construction &amp; Finishing Solutions in Qatar
            </h2>

            {/* Description Paragraph */}
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-gray-300/85 leading-relaxed max-w-lg">
              From villa construction and property extensions to Majlis construction, building maintenance and complete finishing works, MBA Contracting provides practical and professional solutions for residential and commercial properties in Doha, Qatar.
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-white font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#caa359] via-[#b88d44] to-[#a37930] hover:from-[#b99144] hover:to-[#926925] shadow-md hover:shadow-lg transition-all duration-150 active:scale-95"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-white font-medium text-xs sm:text-sm bg-black/40 hover:bg-white/10 backdrop-blur-md border border-white/35 hover:border-white/50 transition-all duration-150"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

          </div>

          {/* Bottom Row: 4 Service Badges (Left) + Floating Doha Qatar Card (Right) */}
          <div className="pt-4 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* 4 Service Pillars */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white text-xs sm:text-sm font-semibold">
              {heroHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 ${
                    idx !== heroHighlights.length - 1 ? 'sm:border-r sm:border-white/20 sm:pr-6' : ''
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ))}
            </div>

            {/* Floating Location Badge on Right */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#111923]/80 backdrop-blur-md border border-white/15 shadow-xl flex-shrink-0 self-start md:self-auto">
              <div className="w-8 h-8 rounded-full bg-[#caa359]/20 border border-[#caa359]/40 flex items-center justify-center text-[#caa359]">
                <MapPin className="w-4 h-4 text-[#caa359]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Doha, Qatar</h4>
                <p className="text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                  Your Trusted Contracting Partner
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================
          2. ABOUT MBA CONTRACTING SECTION
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Image with floating badge */}
            <div className="lg:col-span-5 relative group">
              <div className="rounded-none overflow-hidden shadow-lg h-full min-h-[400px] max-h-[500px] relative border border-gray-200/50">
                <img
                  src="/about_construction.jpg"
                  alt="Quality Construction for a Better Tomorrow"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-md p-5 rounded-none shadow-xl border-t-2 border-r-2 border-[#caa359] max-w-[85%]">
                  <h4 className="text-[#0c1b2a] font-bold text-sm leading-relaxed">
                    Quality Construction for a Better Tomorrow.
                  </h4>
                  <div className="w-12 h-1 bg-[#caa359] mt-3 rounded-none" />
                </div>
              </div>
            </div>

            {/* Center Column: Text & 3 Value Icons & CTA Button */}
            <div className="lg:col-span-4 flex flex-col justify-center py-4">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#caa359] uppercase">
                ABOUT MBA CONTRACTING
              </span>
              
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0c1b2a] tracking-tight leading-snug">
                Your Project.<br />Our Commitment.
              </h2>

              <p className="mt-5 text-sm text-gray-600 leading-relaxed">
                MBA Contracting is a Doha-based contracting company focused on construction, renovation, finishing and building maintenance. We support clients through different stages of a property project — from construction and extensions to detailed finishing and maintenance requirements.
              </p>

              {/* 3 Value Pillars */}
              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-none bg-gray-50 border border-gray-100 text-[#caa359] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-bold text-[#0c1b2a] leading-tight">Professional Workmanship</h5>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-none bg-gray-50 border border-gray-100 text-[#caa359] flex items-center justify-center mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-bold text-[#0c1b2a] leading-tight">Client-Centered Approach</h5>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-none bg-gray-50 border border-gray-100 text-[#caa359] flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-bold text-[#0c1b2a] leading-tight">Residential & Commercial</h5>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-none text-white font-bold text-xs uppercase tracking-wider bg-[#0c1b2a] hover:bg-[#caa359] shadow-md transition-all active:scale-95 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Doha, Qatar Card with Architectural Skyline illustration */}
            <div className="lg:col-span-3">
              <div className="h-full bg-[#0c1b2a] text-white rounded-none border-b-4 border-[#caa359] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    Doha, Qatar
                  </h3>
                  
                  <ul className="mt-6 space-y-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    <li className="hover:text-[#caa359] transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#caa359] rounded-none"></span> CONSTRUCTION</li>
                    <li className="hover:text-[#caa359] transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#caa359] rounded-none"></span> CONTRACTING</li>
                    <li className="hover:text-[#caa359] transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#caa359] rounded-none"></span> FINISHING</li>
                    <li className="hover:text-[#caa359] transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#caa359] rounded-none"></span> MAINTENANCE</li>
                  </ul>

                  <div className="w-12 h-1 bg-[#caa359] mt-6 rounded-none" />
                </div>

                {/* Architectural Skyline Image */}
                <div className="mt-4 pt-2 relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden flex justify-center">
                  <img 
                    src="/image copy 5.png" 
                    alt="Doha Skyline" 
                    className="w-full max-w-[120%] h-auto object-contain scale-125 origin-bottom transform translate-y-4"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR CORE SERVICES SECTION (6 Cards Grid)
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                OUR CORE SERVICES
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0c1b2a] tracking-tight">
                Complete Contracting Solutions Under One Roof.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#caa359] hover:text-[#a37930] transition group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-none overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Image */}
                    <div className="h-48 lg:h-56 overflow-hidden relative">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Floating Icon */}
                      <div className="absolute bottom-4 left-4 w-10 h-10 rounded-none bg-[#caa359] text-white flex items-center justify-center shadow-lg shadow-black/20">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="font-extrabold text-lg text-[#0c1b2a] leading-snug group-hover:text-[#caa359] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Arrow Link */}
                  <div className="p-6 pt-0 mt-auto">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#caa359] group-hover:text-[#a37930] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          NEW SECTION 3: OUR EXPERTISE (From Finishing Works)
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#caa359] uppercase">
                Finishing Works
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0c1b2a] tracking-tight">
                Our Expertise
              </h2>
            </div>
            <Link
              to="/finishing-works"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0c1b2a] hover:text-[#caa359] transition group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {expertiseList.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link 
                  to="/finishing-works"
                  key={i} 
                  className="group cursor-pointer bg-white rounded-none shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col"
                >
                  <div className="w-full h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#0c1b2a]/10 group-hover:bg-transparent transition-colors z-10" />
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-white rounded-none flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-[#caa359]" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-extrabold text-xl text-[#0c1b2a] group-hover:text-[#caa359] transition-colors mb-3">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      {s.desc}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#caa359] uppercase tracking-wider mt-auto group-hover:translate-x-1 transition-transform">
                      Explore Service <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          NEW SECTION 1: MBA IN NUMBERS (Statistics)
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0c1b2a] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#caa359 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x-0 md:divide-x divide-gray-800">
            {[
              { value: 15, suffix: '+', label: 'Years Experience', icon: Timer },
              { value: 150, suffix: '+', label: 'Projects Completed', icon: Trophy },
              { value: 45, suffix: '+', label: 'Expert Engineers', icon: HardHat },
              { value: 100, suffix: '%', label: 'Client Satisfaction', icon: HeartHandshake }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4 group">
                <stat.icon className="w-8 h-8 text-[#caa359] mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" strokeWidth={1.5} />
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-[#caa359] transition-colors">
                  {statsInView ? (
                    <AnimatedCounter end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          NEW SECTION 4: PROJECTS / OUR WORK
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-[0.2em] text-[#caa359] uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            Projects / Our Work
          </h2>
          <div className="w-16 h-1 bg-[#caa359] mx-auto mt-6 mb-6" />
          <p className="text-[#0c1b2a] font-bold text-lg mb-2">Quality Work You Can See.</p>
          <p className="text-gray-500 text-sm">
            Showcase completed and ongoing projects with strong photography and concise project descriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectCategories.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(cat)}
              className="bg-white rounded-none border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer relative"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="p-4 bg-[#0c1b2a]">
                <h3 className="text-sm font-bold text-white text-center tracking-wide">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#caa359] hover:bg-[#b88f44] text-white font-bold text-xs uppercase tracking-wider rounded-none shadow-md transition-colors">
            View All Projects
          </Link>
        </div>
      </section>


      {/* ========================================================
          4. WHY CHOOSE MBA CONTRACTING (Dark Doha Skyline Banner)
      ======================================================== */}
      <CtaSection />

      {/* ========================================================
          LATEST NEWS & INSIGHTS (Blog Section)
      ======================================================== */}
      {/* 
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#caa359] uppercase">
                LATEST NEWS & INSIGHTS
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0c1b2a] tracking-tight">
                Engineering Updates & Cases
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0c1b2a] hover:text-[#caa359] transition group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8">
            {loadingBlogs ? (
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2 className="w-8 h-8 text-[#caa359] animate-spin mb-3" />
                <p className="text-gray-500 text-sm font-medium">Loading latest articles...</p>
              </div>
            ) : blogs && blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article
                    key={blog._id || blog.slug}
                    className="bg-white rounded-none border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                  >
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="relative block w-full h-56 overflow-hidden bg-gray-100"
                    >
                      <img
                        src={resolveImage(blog.image)}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    </Link>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-bold bg-[#caa359] text-white">
                          <Tag className="w-3 h-3" />
                          {blog.category || 'General'}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          <Calendar className="w-3.5 h-3.5 text-[#caa359]" />
                          <span>{formatDate(blog.createdAt)}</span>
                        </div>
                      </div>

                      <Link to={`/blog/${blog.slug}`} className="block">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#caa359] transition-colors line-clamp-2 leading-snug mb-3">
                          {blog.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                        {blog.excerpt || 'Explore this in-depth guide on modern contracting, luxury villas, and architectural finishings.'}
                      </p>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#caa359] group-hover:text-[#0c1b2a] transition-all cursor-pointer uppercase tracking-wider"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white border border-gray-100 p-8 max-w-xl mx-auto rounded-none shadow-sm">
                <p className="text-gray-500 text-sm">No articles published recently.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      */}

      {/* ========================================================
          NEW SECTION 2: OUR WORKING PROCESS
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#caa359] uppercase">
              How We Work
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0c1b2a] tracking-tight">
              Our Simple Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gray-200" />
            
            {[
              { title: 'Consultation', desc: 'We discuss your vision, requirements, and budget.', icon: Users },
              { title: 'Planning', desc: 'Detailed architectural plans and project timeline.', icon: ClipboardList },
              { title: 'Construction', desc: 'Expert execution with quality materials.', icon: Wrench },
              { title: 'Handover', desc: 'Final inspection and key delivery.', icon: Sparkles }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative">
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#caa359] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {idx + 1}
                  </div>
                  <step.icon className="w-8 h-8 text-[#0c1b2a] group-hover:text-[#caa359] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#0c1b2a] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white max-w-4xl w-full rounded-none shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white md:text-[#0c1b2a] md:bg-gray-100 md:hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white md:hidden">{selectedProject.title}</h2>
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-[#caa359] font-bold text-xs tracking-widest uppercase mb-2 hidden md:block">Project Focus</span>
              <h2 className="text-3xl font-extrabold text-[#0c1b2a] mb-6 hidden md:block">{selectedProject.title}</h2>
              
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                <p>
                  At MBA Contracting, our <strong>{selectedProject.title}</strong> services are designed with precision, utilizing premium materials and highly skilled labor. We ensure that every project is completed to the highest standards of quality and safety.
                </p>
                <p>
                  From initial planning to the final finishing touches, our dedicated team manages all aspects of the project, delivering results that exceed expectations while strictly adhering to timelines and budgets.
                </p>
                <ul className="space-y-2 mt-4 border-l-2 border-[#caa359] pl-4">
                  <li>✔ Premium Quality Materials</li>
                  <li>✔ Timely Project Delivery</li>
                  <li>✔ Expert Workmanship</li>
                </ul>
              </div>
              
              <div className="mt-auto">
                <Link to="/contact" className="inline-flex justify-center items-center gap-2 w-full py-4 bg-[#0c1b2a] hover:bg-[#caa359] text-white font-bold text-sm uppercase tracking-wider rounded-none shadow-md transition-colors group">
                  Discuss a similar project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
