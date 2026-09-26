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
  Maximize,
  Smartphone,
  Play,
  Monitor,
  Phone,
  MessageCircle,
  Zap,
  Droplets,
  Wind,
  Camera,
  Sun,
  FileText,
  Search,
  Rocket,
  AlertCircle,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import WhoWeAre from '../compontent/WhoWeAre';
import MeetOurTeam from '../compontent/MeetOurTeam';


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

  // Contact Form State
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

      setFormData({
        fullName: '',
        companyName: '',
        phone: '',
        email: '',
        service: '',
        location: '',
        projectDetails: '',
      });

      setToast({
        title: 'Message Sent Successfully!',
        message: 'Thank you for reaching out. Our engineering team in Doha will get back to you soon.',
      });

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
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#004080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#004080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: 'Finishing',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#004080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m14.7 6.3 5 5-9.4 9.4H5.3v-5z" />
          <path d="m9.7 11.3 3 3" />
          <path d="m18 4 2 2" />
        </svg>
      ),
    },
    {
      title: 'Maintenance',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#004080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          1. HERO SECTION (Updated to match design)
      ======================================================== */}
      <section className="relative w-full min-h-[100vh] lg:h-screen flex items-center overflow-hidden bg-[#fafafa]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTM5IDM5VjFoLTM4djM4aDM4eiIgZmlsbD0iI2YwZjBmMCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-60"></div>
        

        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between h-full pt-28 pb-24 lg:pt-24 lg:pb-0">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] xl:w-1/2 pt-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#2a2a2a] leading-[1.15] mb-5">
              Premium Property<br />Maintenance &<br />Renovation <span className="text-[#003366]">in Dubai</span>
            </h1>
            <p className="text-[13px] sm:text-[15px] text-gray-700 font-medium mb-8 max-w-lg leading-relaxed">
              MBA Contracting is a property maintenance and <span className="text-[#003366]">renovation company in Dubai</span>, providing reliable maintenance, repair, and renovation solutions for homes, villas, apartments, and commercial properties. Our services include AC, plumbing, electrical, painting, handyman work, renovation, fit-out, and <span className="text-[#003366]">Annual Maintenance Contracts (AMC)</span>.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+97450722177" className="inline-flex items-center gap-3 bg-[#004080] hover:bg-[#002952] text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md shadow-blue-200/50">
                Call us now
                <span className="bg-white text-[#004080] rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a href="https://wa.me/97450722177" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#2ed573] hover:bg-[#27ae60] text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md shadow-green-200/50">
                Or chat with us on 
                <span className="bg-white text-[#2ed573] rounded-full p-1 flex items-center justify-center w-6 h-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </span>
              </a>
            </div>
          </div>
          
          {/* Right Content - Image and Floating Stats */}
          <div className="w-full lg:w-[45%] xl:w-1/2 relative mt-16 lg:mt-0 flex justify-end h-full items-center">
            {/* The Building Background and Car Image */}
            <div className="relative w-[150%] lg:w-[180%] xl:w-[160%] right-[-15%] lg:right-[-35%] xl:right-[-30%] z-0 h-full flex items-center">
              {/* Foreground Image containing Dubai Skyline */}
              <img 
                src="/image copy 11.png" 
                alt="Dubai Skyline" 
                className="w-full h-auto object-contain transform scale-125 lg:scale-150 xl:scale-125 z-10 origin-right"
              />
            </div>
            
            {/* Floating Stats Bar */}
            <div className="absolute -bottom-8 lg:bottom-12 left-0 lg:left-[-20%] xl:left-[-15%] right-4 lg:right-auto bg-white rounded-xl shadow-2xl py-4 px-2 sm:px-6 z-20 flex justify-between sm:justify-start items-center border border-gray-100/50">
              <div className="text-center px-3 sm:px-5">
                <div className="text-xl sm:text-2xl font-black text-[#1a1a1a]">25k+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Jobs Completed</div>
              </div>
              <div className="text-center px-3 sm:px-5 border-l border-gray-200">
                <div className="text-xl sm:text-2xl font-black text-[#1a1a1a]">15k+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Happy Clients</div>
              </div>
              <div className="text-center px-3 sm:px-5 border-l border-gray-200">
                <div className="text-xl sm:text-2xl font-black text-[#1a1a1a]">20+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Vehicles</div>
              </div>
              <div className="text-center px-3 sm:px-5 border-l border-gray-200 hidden md:block">
                <div className="text-xl sm:text-2xl font-black text-[#1a1a1a]">50+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Technicians</div>
              </div>
              <div className="text-center px-3 sm:px-5 border-l border-gray-200 hidden xl:block">
                <div className="text-xl sm:text-2xl font-black text-[#1a1a1a]">20+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Years of<br/>Expertise</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ========================================================
          WHO WE ARE SECTION
      ======================================================== */}
      <WhoWeAre />

      {/* ========================================================
          3. COMPLETE PROPERTY MAINTENANCE SERVICES
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
            Complete Property Maintenance Services
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Orbital Animation */}
            <div className="flex items-center justify-center py-8 relative h-[400px] w-full max-w-[400px] mx-auto">
              
              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#004080]">
                <ShieldCheck className="w-8 h-8" />
              </div>

              {/* Orbit 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full border border-gray-200 animate-spin-slow z-10" style={{ animationDuration: '25s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#004080] animate-spin-slow-reverse" style={{ animationDuration: '25s' }}>
                  <Zap className="w-4 h-4" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#004080] animate-spin-slow-reverse" style={{ animationDuration: '25s' }}>
                  <Droplets className="w-4 h-4" />
                </div>
              </div>

              {/* Orbit 2 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-gray-200 animate-spin-slow z-10" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#004080] animate-spin-slow" style={{ animationDuration: '35s' }}>
                  <Wrench className="w-5 h-5" />
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#004080] animate-spin-slow" style={{ animationDuration: '35s' }}>
                  <Paintbrush className="w-5 h-5" />
                </div>
              </div>

              {/* Orbit 3 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-gray-200 animate-spin-slow z-10" style={{ animationDuration: '45s' }}>
                <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#004080] animate-spin-slow-reverse" style={{ animationDuration: '45s' }}>
                  <Wind className="w-5 h-5" />
                </div>
                <div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#004080] animate-spin-slow-reverse" style={{ animationDuration: '45s' }}>
                  <Camera className="w-5 h-5" />
                </div>
                <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#004080] animate-spin-slow-reverse" style={{ animationDuration: '45s' }}>
                  <Sun className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Right Column: Services Lists */}
            <div className="flex flex-col gap-10">
              
              {/* Group 1 */}
              <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c1b2a] mb-4">Our Core<br />Contracting Services</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm hover:border-[#004080] transition-colors">
                    <HardHat className="w-4 h-4 text-[#004080]" /> General Contracting
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm hover:border-[#004080] transition-colors">
                    <HomeIcon className="w-4 h-4 text-[#004080]" /> Villa Construction
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm hover:border-[#004080] transition-colors">
                    <Building2 className="w-4 h-4 text-[#004080]" /> Extension Construction
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm hover:border-[#004080] transition-colors">
                    <Sparkles className="w-4 h-4 text-[#004080]" /> Majlis Construction
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm hover:border-[#004080] transition-colors">
                    <Wrench className="w-4 h-4 text-[#004080]" /> Building Maintenance Services
                  </span>
                </div>
              </div>

            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#004080] text-white font-bold text-sm tracking-wide hover:bg-[#002952] hover:-translate-y-1 shadow-lg shadow-blue-200/50 transition-all group"
            >
              <span>View All Services</span>
              <span className="bg-white text-[#004080] rounded-full p-1 w-6 h-6 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 transform -rotate-45" />
              </span>
            </Link>
          </div>

        </div>
      </section>




      {/* ========================================================
          EXPERIENCE THE DIFFERENCE SECTION
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
              Experience the<br />difference of MBA
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col items-start order-2 lg:order-1">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#003366] uppercase mb-4">
                SUPERIOR QUALITY
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0c1b2a] leading-tight mb-6">
                Dedicated Engineers<br />Who Know Your Property
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                Our experienced engineers understand the unique needs of your property, from AC systems to plumbing and electrical infrastructure. Through detailed inspections and a smart service history, every visit is informed, precise, and efficient. Your property is never just another job. It is a tailored maintenance journey built around reliability and care.
              </p>
              
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-[#0c1b2a] font-bold text-sm hover:border-[#003366] hover:text-[#003366] transition-colors group shadow-sm">
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform -rotate-45" />
              </Link>
            </div>

            {/* Right Content - Image and Badges */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              {/* Background Shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] max-w-[500px] h-[110%] bg-gradient-to-br from-[#003366] to-[#004080] rounded-[2rem] z-0 opacity-10"></div>
              
              {/* The Image */}
              <div className="relative z-10 w-full max-w-[450px] bg-white rounded-[2rem] p-3 sm:p-4 shadow-2xl border border-gray-100 transform translate-x-4 sm:translate-x-8">
                <img 
                  src="/engineer_blueprints.jpg" 
                  alt="Dedicated Engineer" 
                  className="w-full h-auto rounded-[1.5rem] object-cover"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute top-1/4 -left-4 sm:-left-10 z-20 bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3">
                <div className="bg-blue-50 rounded-full p-1 text-[#003366]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0c1b2a]">Experts in Dubai property systems</span>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-1/4 -left-8 sm:-left-14 z-20 bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3">
                <div className="bg-blue-50 rounded-full p-1 text-[#003366]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0c1b2a]">Consistent technician visits</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          ENGINEERED SOLUTIONS
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafd] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Row 1: Engineered Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content - Text */}
            <div className="flex flex-col items-start order-2 lg:order-1">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#003366] uppercase mb-4">
                ENGINEERED SOLUTIONS
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1b2a] leading-tight mb-6">
                Your Property,<br />Engineered for Reliability
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                We go beyond basic repairs to deliver reliable property maintenance and home maintenance services in Dubai. Our certified engineers use advanced tools, deep technical expertise, and a preventive approach to optimize every system in your property. From HVAC and MEP systems to essential home maintenance, we ensure consistent performance and long-term reliability year-round.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#004080] text-white font-bold text-sm hover:bg-[#002952] transition-colors group shadow-md shadow-blue-200/50">
                  <span>Call us now</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform -rotate-45" />
                </Link>

                <a href="https://wa.me/97450722177" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2ed573] text-white font-bold text-sm hover:bg-[#27ae60] transition-colors shadow-md shadow-green-200/50 group">
                  <span>Or chat with us on</span>
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
                </a>
              </div>
            </div>

            {/* Right Content - Image and Badges */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-[550px]">
                <img 
                  src="/engineer_meeting.jpg" 
                  alt="Engineered Solutions" 
                  className="w-full h-auto rounded-[2rem] shadow-2xl object-cover"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 z-20 bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3">
                <div className="bg-blue-50 rounded-full p-1 text-[#003366]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0c1b2a]">Expert analysis</span>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-1/4 -left-6 sm:-left-12 z-20 bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3">
                <div className="bg-blue-50 rounded-full p-1 text-[#003366]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0c1b2a]">Preventive care that stops issues</span>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* ========================================================
          NEW SECTION 4: CLIENTS / HANDS-ON EXPERIENCE (Marquee)
      ======================================================== */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        
        {/* Decorative Top Slanted Strips (Like Reference Image) */}
        <div className="absolute top-0 left-0 w-[50%] md:w-[40%] h-12 sm:h-20 bg-[#ffb78c]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 100%)' }}></div>
        <div className="absolute top-0 right-0 w-[50%] md:w-[40%] h-12 sm:h-20 bg-[#ffb78c]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 60%)' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16 mt-4">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1f2937] text-center tracking-tight leading-tight max-w-2xl mx-auto">
            We have hands-on <br className="hidden sm:block" /> experience with
          </h2>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden flex items-center h-24 sm:h-32 before:absolute before:left-0 before:top-0 before:w-16 sm:before:w-32 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-16 sm:after:w-32 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          
          {/* Marquee Track */}
          <div className="flex animate-marquee w-max items-center gap-16 sm:gap-24 px-8 text-[#2a3b4c] opacity-80 hover:opacity-100 transition-opacity duration-300">
            
            {/* Logo Set 1 */}
            <div className="flex items-center gap-16 sm:gap-24">
              <span className="font-black text-2xl tracking-tighter">SAMSUNG</span>
              <span className="font-serif text-2xl tracking-widest uppercase">Emaar</span>
              <span className="font-bold text-2xl tracking-wider">NAKHEEL</span>
              <span className="font-sans font-extrabold italic text-2xl">MERAAS</span>
              <span className="font-bold text-xl uppercase tracking-tighter flex items-center gap-1">
                <div className="w-5 h-5 rounded-full border-[3px] border-current opacity-70"></div> dewa
              </span>
              <span className="font-bold text-2xl tracking-tight">DAIKIN</span>
              <span className="font-medium text-2xl tracking-tight">Midea</span>
              <span className="font-black text-xl italic tracking-widest">O GENERAL</span>
              <span className="font-bold text-sm bg-[#1f2937] text-white px-4 py-1.5 rounded-full italic tracking-wide">Carrier</span>
              <span className="font-bold text-sm border-2 border-[#1f2937] px-4 py-1 rounded-full uppercase tracking-widest">Cosmoplast</span>
            </div>

            {/* Logo Set 2 (Duplicate for seamless scroll) */}
            <div className="flex items-center gap-16 sm:gap-24">
              <span className="font-black text-2xl tracking-tighter">SAMSUNG</span>
              <span className="font-serif text-2xl tracking-widest uppercase">Emaar</span>
              <span className="font-bold text-2xl tracking-wider">NAKHEEL</span>
              <span className="font-sans font-extrabold italic text-2xl">MERAAS</span>
              <span className="font-bold text-xl uppercase tracking-tighter flex items-center gap-1">
                <div className="w-5 h-5 rounded-full border-[3px] border-current opacity-70"></div> dewa
              </span>
              <span className="font-bold text-2xl tracking-tight">DAIKIN</span>
              <span className="font-medium text-2xl tracking-tight">Midea</span>
              <span className="font-black text-xl italic tracking-widest">O GENERAL</span>
              <span className="font-bold text-sm bg-[#1f2937] text-white px-4 py-1.5 rounded-full italic tracking-wide">Carrier</span>
              <span className="font-bold text-sm border-2 border-[#1f2937] px-4 py-1 rounded-full uppercase tracking-widest">Cosmoplast</span>
            </div>
            
          </div>
        </div>

      </section>

      {/* ========================================================
          SEND US A MESSAGE SECTION (From Contact Page)
      ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafd] border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                src="https://maps.google.com/maps?q=Alkhayarin%20holding%20building%20Doha%20Qatar&t=&z=12&ie=UTF8&iwloc=&output=embed"
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
                  <span>Alkhayarin holding building, first floor, office no 102 Doha - qatar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          LATEST NEWS & INSIGHTS (Blog Section)
      ======================================================== */}
      {/* 
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#004080] uppercase">
                LATEST NEWS & INSIGHTS
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0c1b2a] tracking-tight">
                Engineering Updates & Cases
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0c1b2a] hover:text-[#004080] transition group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8">
            {loadingBlogs ? (
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2 className="w-8 h-8 text-[#004080] animate-spin mb-3" />
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
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-bold bg-[#004080] text-white">
                          <Tag className="w-3 h-3" />
                          {blog.category || 'General'}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          <Calendar className="w-3.5 h-3.5 text-[#004080]" />
                          <span>{formatDate(blog.createdAt)}</span>
                        </div>
                      </div>

                      <Link to={`/blog/${blog.slug}`} className="block">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#004080] transition-colors line-clamp-2 leading-snug mb-3">
                          {blog.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                        {blog.excerpt || 'Explore this in-depth guide on modern contracting, luxury villas, and architectural finishings.'}
                      </p>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#004080] group-hover:text-[#0c1b2a] transition-all cursor-pointer uppercase tracking-wider"
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
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#f8fafd] border-b border-gray-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-3xl"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-50/50 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-extrabold tracking-[0.2em] text-[#004080] uppercase mb-4 shadow-sm">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
              Our Simple Process
            </h2>
            <p className="mt-5 text-gray-500 text-sm sm:text-base leading-relaxed">
              We've streamlined our workflow to ensure seamless communication, complete transparency, and top-quality results from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            
            {/* Connecting dashed line for desktop */}
            <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] h-[2px] border-t-2 border-dashed border-gray-300 z-0 opacity-70" />
            
            {[
              { title: 'Consultation', desc: 'We discuss your vision, requirements, and budget in detail.', icon: Users },
              { title: 'Planning', desc: 'Our experts draft precise architectural plans and timelines.', icon: ClipboardList },
              { title: 'Construction', desc: 'Flawless execution using premium materials and expert labor.', icon: Wrench },
              { title: 'Handover', desc: 'Final inspection, quality assurance, and key delivery.', icon: Sparkles }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Circle Container */}
                <div className="w-24 h-24 rounded-full bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:shadow-[0_15px_40px_rgba(0,64,128,0.15)] transition-all duration-500 relative mb-8 group-hover:-translate-y-2">
                  
                  {/* Inner Circle (Changes color on hover) */}
                  <div className="w-full h-full rounded-full bg-[#f8fafd] border border-gray-100 flex items-center justify-center group-hover:bg-[#004080] group-hover:border-[#004080] transition-colors duration-500">
                    <step.icon className="w-8 h-8 text-[#004080] group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-tr from-[#004080] to-[#002952] text-white flex items-center justify-center font-black text-sm shadow-lg border-2 border-white transform group-hover:scale-110 transition-transform duration-500">
                    {idx + 1}
                  </div>
                  
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-extrabold text-[#0c1b2a] mb-3 group-hover:text-[#004080] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
                
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
              <span className="text-[#004080] font-bold text-xs tracking-widest uppercase mb-2 hidden md:block">Project Focus</span>
              <h2 className="text-3xl font-extrabold text-[#0c1b2a] mb-6 hidden md:block">{selectedProject.title}</h2>
              
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                <p>
                  At MBA Contracting, our <strong>{selectedProject.title}</strong> services are designed with precision, utilizing premium materials and highly skilled labor. We ensure that every project is completed to the highest standards of quality and safety.
                </p>
                <p>
                  From initial planning to the final finishing touches, our dedicated team manages all aspects of the project, delivering results that exceed expectations while strictly adhering to timelines and budgets.
                </p>
                <ul className="space-y-2 mt-4 border-l-2 border-[#004080] pl-4">
                  <li>✔ Premium Quality Materials</li>
                  <li>✔ Timely Project Delivery</li>
                  <li>✔ Expert Workmanship</li>
                </ul>
              </div>
              
              <div className="mt-auto">
                <Link to="/contact" className="inline-flex justify-center items-center gap-2 w-full py-4 bg-[#0c1b2a] hover:bg-[#004080] text-white font-bold text-sm uppercase tracking-wider rounded-none shadow-md transition-colors group">
                  Discuss a similar project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MEET OUR TEAM SECTION
      ======================================================== */}
      <MeetOurTeam />

    </div>
  );
}
