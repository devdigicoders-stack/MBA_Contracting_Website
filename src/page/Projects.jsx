import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, Building2, Star, Users, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectProcess = [
    { step: '01', title: 'Consultation', desc: 'Understand the client\'s requirements, property and project objectives.' },
    { step: '02', title: 'Site Inspection', desc: 'Assess the site and identify the required construction, finishing or maintenance works.' },
    { step: '03', title: 'Scope & Quotation', desc: 'Define the work scope and provide a project quotation based on the requirements.' },
    { step: '04', title: 'Project Execution', desc: 'Carry out the approved works with organized coordination and attention to quality.' },
    { step: '05', title: 'Quality Inspection', desc: 'Review completed works and address relevant finishing or workmanship requirements.' },
    { step: '06', title: 'Handover', desc: 'Complete the agreed scope and coordinate project handover.' },
  ];

  const projectTypes = [
    { title: 'Villas', desc: 'Construction, extensions, renovation, finishing and maintenance.' },
    { title: 'Majlis', desc: 'Construction and complete finishing solutions.' },
    { title: 'Residential Properties', desc: 'Renovation, repair, finishing and maintenance.' },
    { title: 'Commercial Buildings', desc: 'Contracting, maintenance and finishing works.' },
    { title: 'Offices & Business Spaces', desc: 'Renovation, painting, flooring, gypsum and finishing.' },
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-[#09121c] overflow-hidden flex items-center min-h-[475px] lg:min-h-[575px]">
        
        {/* Background Image on the right (fades to left) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image copy 6.png"
            alt="Our Projects"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#08121e]/95 md:via-[#08121e]/90 lg:via-[#08121e]/80 to-[#08121e]/90 md:to-transparent w-full" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070e17]/60 to-transparent" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="max-w-2xl">
            {/* Super Header */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#caa359] uppercase">
                OUR WORK
              </span>
              <div className="w-12 h-[2px] bg-[#caa359]" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight mb-6 uppercase leading-none">
              <span className="text-white">Our</span> <span className="text-[#caa359]">Projects</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
              Explore our completed and ongoing projects that reflect our commitment to quality, innovation and excellence in construction.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-y-6 gap-x-8 sm:gap-x-12">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <Building2 className="w-8 h-8 text-[#caa359]" />
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white leading-none">100+</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">Projects Completed</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/20" />

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-[#caa359]" />
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white leading-none">32+</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">Years Experience</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-10 bg-white/20" />

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-[#caa359]" />
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white leading-none">5000+</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">Happy Clients</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/20" />

              {/* Stat 4 */}
              <div className="flex items-center gap-3">
                <HardHat className="w-8 h-8 text-[#caa359]" />
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white leading-none">100%</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">Quality Work</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. OUR PROJECT PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-[#caa359] uppercase mb-2 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            6. Our Project Process
          </h2>
          <div className="w-16 h-1 bg-[#caa359] mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projectProcess.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-none bg-amber-50 text-[#caa359] border border-amber-100 flex items-center justify-center text-xl font-black mb-5 group-hover:bg-[#caa359] group-hover:text-white transition-colors">
                {item.step}
              </div>
              <h3 className="text-lg font-extrabold text-[#0c1b2a] mb-3 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PROJECT TYPES */}
      <section className="py-20 bg-[#0c1b2a] text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-14">
            <span className="text-sm font-bold tracking-[0.2em] text-[#caa359] uppercase mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
              7. Project Types
            </h2>
            <div className="w-16 h-1 bg-[#caa359] mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((type, idx) => (
              <div key={idx} className="bg-[#112438] border border-gray-700/50 p-8 hover:bg-[#1a334d] transition-colors group rounded-none">
                <div className="w-10 h-10 bg-[#caa359]/20 flex items-center justify-center text-[#caa359] mb-5">
                  <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wide">{type.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROJECTS / OUR WORK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-[0.2em] text-[#caa359] uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            8. Projects / Our Work
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
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#caa359] hover:bg-[#b88f44] text-white font-bold text-xs uppercase tracking-wider rounded-none shadow-md transition-colors">
            Start Your Project
          </Link>
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
